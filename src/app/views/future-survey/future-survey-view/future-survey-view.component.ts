import { Component, OnInit, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { ActivatedRoute, Router } from "@angular/router";
import { FutureSurveyService } from "../future-survey.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { HttpClient } from "@angular/common/http";

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
  templateUrl: "./future-survey-view.component.html"
})
export class FutureSurveyViewComponent implements OnInit {
  jsonContent: any;
  sub: any;
  pageJson;
  public surveyViewForm: FormGroup;
  public answerResult: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private furureSurveyService: FutureSurveyService,
    private fb: FormBuilder,
    private errDialog: AppErrorService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      const surveyId = params["surveyId"];
      if (surveyId) {
        this.furureSurveyService
          .getFutureSurveyById(surveyId)
          .subscribe(response => {
            this.jsonContent = JSON.parse(response.content.jsonContent);
            //console.log(this.jsonContent)
            //console.log(response.content.jsonContent);

            this.pageJson = JSON.parse(this.jsonContent).pages;
            this.viewSurvey();
            this.setuptheme();
          });
      }
    });
  }
  // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
  viewSurvey() {
    const surveyModel = new Survey.Model(this.jsonContent);
    let pageArray = this.pageJson;
    let resultArray = [];

    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) return;

      // Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";

      btn.onclick = function() {
        alert(options.question.popupdescription);
      };
      var header = options.htmlElement.querySelector("h5");
      var span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });

    Survey.StylesManager.applyTheme("bootstrap");

    
    surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

      if (options.question.getType() === "rating") {
        classes.root = "btn-group";
        classes.item = "btn btn-default btn-secondary";
      }

      if (options.question.getType() === "radiogroup") {
        classes.item = "radio sv-q-col-1";
      }

      if (options.question.getType() === "checkbox") {
        classes.item = "checkbox sv-q-col-1";
      }

      if(options.question.getType() === "matrix"){
        classes.root = "table sv_q_matrix"; 
      }
    });

    
    //Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    // console.log('.....bootstrap');
    // console.log(Survey.defaultBootstrapCss);

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    surveyModel.onComplete.add(function(result) {
      console.log("..............SURVEY ANSWER RESULR/.............");
      console.log(result);

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
}

export class ValueTemplate {
  constructor(public value: any) {}
}

export class MatrixBaseTemplate {
  constructor(public rowValue, public columnValue: any) {}
}
