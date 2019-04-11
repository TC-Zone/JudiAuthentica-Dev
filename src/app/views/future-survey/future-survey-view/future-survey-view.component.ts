import { Component, OnInit, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import * as $ from "jquery";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { ActivatedRoute, Router } from "@angular/router";
import { FutureSurveyService } from "../future-survey.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { HttpClient } from "@angular/common/http";
import {
  ValueTemplate,
  MatrixBaseTemplate
} from "../../../model/FutureSurvey.model";
import { FutureSurveyOperationalService } from "../../../shared/services/survey/future-survey-operational.service";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: "app-future-survey-view",
  templateUrl: "./future-survey-view.component.html",
  styleUrls: ["./future-survey-view.component.scss"],
})
export class FutureSurveyViewComponent implements OnInit {
  jsonContent: any;
  sub: any;
  pageJson;
  public surveyViewForm: FormGroup;
  public answerResult: any;
  public currentLang: language;
  public supportLangs: language[] = [];
  public langs: language[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private furureSurveyService: FutureSurveyService,
    private fb: FormBuilder,
    private errDialog: AppErrorService,
    private http: HttpClient,
    private fsOperationalService: FutureSurveyOperationalService
  ) { }

  ngOnInit() {
    // get all survey supprt languages
    this.getAllSurveyLangs();
    this.sub = this.route.queryParams.subscribe(params => {
      const surveyId = params["surveyId"];
      if (surveyId) {
        this.furureSurveyService
          .getFutureSurveyById(surveyId)
          .subscribe(response => {
            const tempJson = JSON.parse(response.content.jsonContent);
            const surveyJson = this.fsOperationalService.validateLocalizeSurveyRequest(JSON.parse(tempJson));
            this.jsonContent = JSON.parse(tempJson);
            //console.log(this.jsonContent)
            //console.log(response.content.jsonContent);

            // build survey support languages array
            this.buildSupportLangArray(surveyJson.surveyLang);

            this.pageJson = this.jsonContent.pages;
            this.viewSurvey();
            this.setuptheme();
          });
      }
    });
  }

  // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
  viewSurvey() {
    
    // --------------------- set radio button group unselectable --------------------------------------
    this.fsOperationalService.optionUnselect(Survey);
    // ------------------------------------------------------------------------------------------------

    const surveyModel = new Survey.Model(this.jsonContent);
    console.log('--------------- surveyModel', surveyModel);

    // set survey preview language by prasad kumara
    surveyModel.locale = this.currentLang.code;
    let pageArray = this.pageJson;
    let resultArray = [];

    Survey.StylesManager.applyTheme("bootstrap");


    surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      const classes = options.cssClasses;

      if (options.question.getType() === 'rating') {
        classes.root = 'btn-group';
        classes.item = 'btn btn-outline-secondary';
      }

      if (options.question.getType() === 'radiogroup') {
        // console.log('--------------- survey', survey);
        // console.log('--------------- options', options);
        classes.root = 'sv_qcbc';
        classes.item = 'sv-q-col-1';
      }

      if (options.question.getType() === 'checkbox') {
        classes.root = 'sv_qcbc sv_qcbx';
        classes.item = 'sv-q-col-1';
      }

      if (options.question.getType() === 'matrix') {
        classes.root = 'table sv_q_matrix';
      }

      if (options.question.getType() === "comment") {
        classes.root = 'form-control';
      }

      if (options.question.getType() === 'dropdown') {
        classes.control = 'form-control';
      }

      if (options.question.getType() === 'text') {
        classes.root = 'form-control';
      }
    });

    //Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    // console.log('.....bootstrap');
    // console.log(Survey.defaultBootstrapCss);

    console.log(surveyModel);


    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    surveyModel.onComplete.add(function (result) {
      console.log("..............SURVEY ANSWER RESULR/.............");
      console.log(result);
      document.getElementById("languageDD").style.display = "none";

      //fixed scrolling issue on complete view
      document.getElementById("background-image").style.height = "100vh";
      const removeElements = (elms) => elms.forEach(el => el.remove());
      removeElements(document.querySelectorAll(".ps__rail-y"));
      document.getElementById("languageDD").style.display = "none";
      document.getElementById("main-survey-div").style.alignItems = "";
      //---//

      // ------- new start --------
      pageArray.forEach(element => {
        // console.log(element.elements);
        element.elements.forEach(element => {
          const elementArray = {};

          const eleType: string = element.type;
          console.log("..........ELEMENT TYPE...........");

          console.log(eleType);
          if (eleType != "html") {
            const valueArray: any[] = [];
            const qCode = element.qcode;
            if (qCode != null) {
              elementArray["type"] = eleType;
              elementArray["qcode"] = qCode;

              const answerObj = result.data[element.name];
              if (answerObj != null) {
                // ..... Matrix question answer wrapping section.............
                if (eleType === "matrix") {
                  console.log("MATRIX ANSWR OB ");
                  for (let answer in answerObj) {
                    valueArray.push(
                      new MatrixBaseTemplate(answer, answerObj[answer])
                    );
                  }
                  elementArray["matrixValues"] = valueArray;
                } else {
                  // ..... Non Matrix question answer wrapping section.............
                  if (answerObj instanceof Array) {
                    answerObj.forEach(ans => {
                      valueArray.push(new ValueTemplate(ans));
                    });
                  } else {
                    valueArray.push(new ValueTemplate(answerObj));
                  }
                  elementArray["values"] = valueArray;
                }
              } else {
                // YS : manage non required answering situations
                if (eleType === "matrix") {
                  valueArray.push(new MatrixBaseTemplate(null, null));
                  elementArray["matrixValues"] = valueArray;
                } else {
                  valueArray.push(new ValueTemplate(null));
                  elementArray["values"] = valueArray;
                }
              }

              resultArray.push(elementArray);
            }
          }
        });
      });
      // ------- new end --------

      console.log("...............ANSWER ARRAY.................");
      console.log(resultArray);
      console.log(JSON.stringify(resultArray));

      const fsService: FutureSurveyService = new FutureSurveyService();
      fsService.submitAnswers(resultArray).subscribe(
        response => {
          console.log("SUCCESS");
          console.log(response);
        },
        error => {
          console.log("ERROR");
          console.log(error);
          //alert("Something went wrong !");
        }
      );
    });
  }

  navigateToSurveyEditor() {
    this.router.navigate(["future-survey/sList"]);
  }

  setuptheme() {
    const mainColor = "#0684C0";
    const mainHoverColor = "#5DAAD2";
    const textColor = "#4a4a4a";
    const headerColor = "#b7b7b7";
    const headerBackgroundColor = "#000000";
    const bodyContainerBackgroundColor = "#f8f8f8";

    const defaultThemeColorsSurvey =
      Survey.StylesManager.ThemeColors["default"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey[
      "$header-background-color"
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      "$body-container-background-color"
    ] = bodyContainerBackgroundColor;

    // console.log("--- theme color setting---");
    // console.log(defaultThemeColorsSurvey);
    // console.log(Survey.StylesManager.ThemeColors);
    // console.log(Survey);

    Survey.StylesManager.applyTheme();
  }

  // change language in survey preview window by prasad kumara
  changeDefaultLang() {
    this.viewSurvey();
    this.setuptheme();
  }

  // create survey support language array by prasad kumara
  buildSupportLangArray(langJson) {
    this.langs.forEach(element => {
      if (langJson.extra.indexOf(element.code) > -1 || langJson.def === element.code) {
        if (langJson.def === element.code) {
          this.currentLang = element;
        }
        if (this.supportLangs.indexOf(element) == -1) {
          this.supportLangs.push(element);
        }
      }
    });
    if (this.supportLangs.length > 1) {
      document.getElementById("languageDD").style.display = "block";
    }
  }

  // get all survey support languages by prasad kumara
  getAllSurveyLangs() {
    this.furureSurveyService
      .getAllLangs()
      .subscribe(data => {
        this.langs = data.content;
      });
  }
}

// tslint:disable-next-line:class-name
export interface language {
  id: string;
  code: string;
  name: string;
}
