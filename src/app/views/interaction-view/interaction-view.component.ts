import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { ActivatedRoute, Router } from "@angular/router";
import { InteractionViewService } from "./interaction-view.service";
import * as Survey from "survey-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-interaction-view",
  templateUrl: "./interaction-view.component.html",
  animations: egretAnimations
})
export class InteractionViewComponent implements OnInit {
  public sub: any;
  public futureSurveyObj: any;
  public surveyTitle: any;
  public showLogin: boolean = false;
  // public showSurvey: boolean = false;

  public interactionId;
  public surveyId;

  jsonContent: any;
  pageJson;

  public interactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interactionViewService: InteractionViewService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildInteractForm();
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });

    console.log("NG ON INIT CALLED");

    this.sub = this.route.queryParams.subscribe(params => {
      this.interactionId = params["interactionId"];
      this.surveyId = params["surveyId"];

      if (this.interactionId) {
        this.viewInteraction(this.interactionId);
      }
      if (this.surveyId) {
        console.log("SURVEY ID : " + this.surveyId);
        this.retrieveSurvey(this.surveyId);
      }
    });
  }

  viewInteraction(interactionId) {
    this.interactionViewService
      .getInteractionById(interactionId)
      .subscribe(response => {
        console.log("interaction response ");
        console.log(response);
        this.futureSurveyObj = response.content.futureSurvey;
        this.surveyTitle = this.futureSurveyObj.title;
        this.showLogin = true;
        console.log("ID : " + this.futureSurveyObj.id);
        console.log("title : " + this.surveyTitle);
        console.log("FUTURE SURVEY OBJ");
      });
  }

  retrieveSurvey(surveyId) {
    console.log(" retrieveSurvey SURVEY ID : " + surveyId);
    this.interactionViewService
      .getFutureSurveyById(surveyId)
      .subscribe(response => {
        this.showLogin = false;
        // this.showSurvey = true;
        this.futureSurveyObj = response.content;
        this.jsonContent = JSON.parse(this.futureSurveyObj.jsonContent);
        this.surveyTitle = this.futureSurveyObj.title;
        this.pageJson = JSON.parse(this.jsonContent).pages;

        this.viewSurvey();
        this.setuptheme();
      });
  }

  buildInteractForm() {
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });
  }

  // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
  viewSurvey() {
    let pageArray = this.pageJson;
    let resultArray = [];


    let htmlValue =
      '<h3>Thank you for completing the survey!</h3>' +
      '<div class="panel-footer card-footer survey-page-footer">' +
      '</div>' +
      '<div class="sv_container">';

    pageArray.forEach(element => {
      console.log(element.elements);
      element.elements.forEach(element => {
        htmlValue +=
          "<div class='sv_row'>" +
          "<div class='sv_qstn'>" +
          "<h5>" +
          "<span class='survey-form-question'>Q :- " + element.title + "</span>" +
          "</h5>" +
          "<span class='survey-form-answer'>A :- {" + element.name + "} </span>" +
          "</div>" +
          "</div></br>";
      });
    });

    htmlValue += '</div>';




    let jsonc = JSON.parse(this.jsonContent);
    jsonc.completedHtml = htmlValue;

    const surveyModel = new Survey.Model(jsonc);

    Survey.StylesManager.applyTheme("bootstrap");

    surveyModel
      .onUpdateQuestionCssClasses
      .add(function (survey, options) {
        var classes = options.cssClasses

        if (options.question.getType() === "rating") {
          classes.item = "btn btn-default btn-secondary";
        }

        if (options.question.getType() === "radiogroup") {
          classes.item = "radio sv-q-col-1";
        }

        if (options.question.getType() === "checkbox") {
          classes.item = "checkbox sv-q-col-1";
        }

      });

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    surveyModel.onComplete.add(function (result) {


      // ------- new start --------
      pageArray.forEach(element => {
        element.elements.forEach(element => {
          let elementArray = {};

          if (element.type != "html") {
            let qCode = element.qcode;
            if (qCode != null) {
              if (result.data[element.name] == null) {
                elementArray["value"] = null;
                elementArray["qcode"] = qCode ? qCode : null;
              } else {
                elementArray["value"] = result.data[element.name];
                elementArray["qcode"] = qCode ? qCode : null;
              }
              resultArray.push(elementArray);
            }
          }

        });
      });

      // ------- new end --------
      console.log("...............ANSWER ARRAY.................");
      console.log(resultArray);

      const interactService: InteractionViewService = new InteractionViewService();
      interactService.submitAnswers(resultArray).subscribe(
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

  doLog() {
    console.log("CALLED METHOD");

    let password = this.interactForm.get("password").value;

    let loginReq: LoginRequest = new LoginRequest(
      this.interactionId,
      password,
      this.futureSurveyObj.id
    );

    console.log("Login REQUEST ");

    console.log(loginReq);

    this.interactionViewService.interactLogin(loginReq).subscribe(response => {
      this.showLogin = false;
      console.log("PRIVATE SURVEY ID : " + response.content.futureSurveyId);
      console.log(response);
      console.log(response.content.futureSurveyId);

      this.retrieveSurvey(response.content.futureSurveyId);
    });
  }
}

export class LoginRequest {
  constructor(
    public interactionId,
    public password,
    public futureSurveyId: any
  ) { }
}

