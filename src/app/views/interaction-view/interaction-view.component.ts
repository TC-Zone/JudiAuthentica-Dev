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

  public interactionId;
  public surveyId;
  public preview;
  public showLogin: boolean = false;
  public loginResult = true;
  public loggedInvitee;
  // public showDetails = false;

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
      this.preview = params["preview"];


      // if (this.preview === undefined) {
      //   console.log("-----------------------------------");
      //   console.log("02");
      //   console.log("-----------------------------------");
      // }
      // if (this.preview === "true") {
      //   console.log("-----------------------------------");
      //   console.log("03");
      //   console.log("-----------------------------------");
      // }


    });

    if (this.interactionId) {
      this.viewInteraction(this.interactionId);
    }
    if (this.surveyId) {
      console.log("SURVEY ID : " + this.surveyId);
      this.retrieveSurvey(this.surveyId);
    }
  }

  viewInteraction(interactionId) {
    this.interactionViewService
      .getInteractionById(interactionId)
      .subscribe(response => {
        console.log("interaction response ");
        console.log(response);
        this.futureSurveyObj = response.content.futureSurvey;
        this.surveyTitle = this.futureSurveyObj.title;
        this.loggedInvitee = response.content.invitee.name;
        console.log('LOGGED INSTANCE - '+ this.loggedInvitee);
        if (this.preview === undefined) {
          this.showLogin = true;
          localStorage.setItem("futureSurveyid", "");
          localStorage.setItem("surveyResult", "");
        } else  {
          if(localStorage.getItem("futureSurveyid") === ""){
            window.location.href = window.location.href.split("&")[0];
          } else {
            this.retrieveSurvey(localStorage.getItem("futureSurveyid"));
          }
        }


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
    let pageArray: any[] = this.pageJson;
    let resultArray = [];

    // let htmlValue =
    //   "<h3>Thank you for completing the survey!</h3>" +
    //   '<div class="panel-footer card-footer survey-page-footer">' +
    //   "</div>" +
    //   '<div class="sv_container">';

    // if (pageArray.length != 0) {
    //   pageArray.forEach(element => {
    //     const elementArray: any[] = element.elements;
    //     console.log(elementArray);
    //     if (elementArray) {
    //       elementArray.forEach(element => {
    //         htmlValue +=
    //           "<div class='sv_row'>" +
    //           "<div class='sv_qstn'>" +
    //           "<h5>" +
    //           "<span class='survey-form-question'>Q :- " +
    //           element.title +
    //           "</span>" +
    //           "</h5>" +
    //           "<span class='survey-form-answer'>A :- {" +
    //           element.name +
    //           "} </span>" +
    //           "</div>" +
    //           "</div></br>";
    //       });
    //     }
    //   });
    // }

    // htmlValue += "</div>";


    let jsonc = JSON.parse(this.jsonContent);
    // jsonc.completedHtml = htmlValue;

    if (this.preview) {
      jsonc.title = "Summary of " + jsonc.title;
    }

    const surveyModel = new Survey.Model(jsonc);

    Survey.StylesManager.applyTheme("bootstrap");

    surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

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

    // .............. ON COMPLET START HERE ..........................
    surveyModel.onComplete.add(function (result) {

      localStorage.setItem("surveyResult", JSON.stringify(result.data));

      document.getElementById("surveyResult").innerHTML = "<a class='btn sv_preview_btn' href='" + window.location.href + "&preview=true' >View Summary</a>";


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

    // ................. ON COMPLETE END HERE .........

    if (this.preview) {
      surveyModel.data = JSON.parse(localStorage.getItem("surveyResult"))
      surveyModel.mode = 'display';
    }


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

    let fsPart: FSurveyPart = new FSurveyPart(this.futureSurveyObj.id);

    let loginReq: LoginRequest = new LoginRequest(
      this.interactionId,
      password,
      fsPart
    );

    console.log("Login REQUEST ");
    console.log(loginReq);

    this.interactionViewService
      .interactLoginPost(loginReq)
      .subscribe(response => {
        this.showLogin = false;
        this.loginResult = true;

        const loggedInteraction = response;
        console.log("LOGGED INTERACTION RESPONSE");
        console.log(loggedInteraction);

        if (loggedInteraction != null) {
          if (loggedInteraction.responStatus == 1) {
            // Situation all ready responded to survey
          } else {
            this.showLogin = false;
            localStorage.setItem("futureSurveyid", loggedInteraction.futureSurvey.id);
            this.retrieveSurvey(loggedInteraction.futureSurvey.id);

          }
        } else {
          // could not find a record for password and interaction id
        }
      }, error => {
        // this.errors = error;
        this.loginResult = false;
      });
  }
}

export class LoginRequest {
  constructor(public id, public password, public futureSurvey: any) { }
}

export class FSurveyPart {
  constructor(public id) { }
}

export class ValueTemplate {
  constructor(public value: any) { }
}

export class MatrixBaseTemplate {
  constructor(public rowValue, public columnValue: any) { }
}
