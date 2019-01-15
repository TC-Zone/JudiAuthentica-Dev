import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { InviteeInteractionViewService } from "./invitee-interaction-view.service";
import * as Survey from "survey-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppErrorService } from '../../shared/services/app-error/app-error.service';

@Component({
  selector: "app-invitee-interaction-view",
  templateUrl: "./invitee-interaction-view.component.html",
  animations: egretAnimations
})
export class InviteeInteractionViewComponent implements OnInit {

  public interactForm: FormGroup;

  public showLogin: boolean = false;
  public loginError = false;
  public loginErrorMsg;

  public surveyId;
  public interactionResponStatus;

  public loggedInviteeName;
  public surveyTitle;
  public futureSurveyObj: any;
  public jsonContent: any;
  public pageJson;
  public interactionId;
  public origin;

  public surveyModel;

  constructor(
    private inviteeInteractionViewService: InviteeInteractionViewService,
    private fb: FormBuilder,
    private errDialog: AppErrorService
  ) { }

  ngOnInit() {
    console.log("---------- Method-Start : ngOnInit()");

    this.buildInteractForm();
    this.interactForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.showLogin = true;




    //  ---------------------------------------------------------------------------------
    localStorage.setItem("surveyResultId", null);
    localStorage.setItem("originalResultArray", null);

    // console.log("---------- Method-End : ngOnInit()");
  }

  buildInteractForm() {
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });
  }


  doLog() {
    // console.log("---------- Method-Start : doLog()");

    let username = this.interactForm.get("username").value;
    let password = this.interactForm.get("password").value;

    let inviteePart: InviteePart = new InviteePart(username, password);

    // console.log("---------- ---------- Method : doLog() / Parameter-username: " + username);
    // console.log("---------- ---------- Method : doLog() / Parameter-password: " + password);

    this.inviteeInteractionViewService
      .interactLoginPost(inviteePart)
      .subscribe(response => {

        const loggedInteraction = response;
        // console.log("---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (Json)");
        // console.log(loggedInteraction);

        // console.log("---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (String)");
        // console.log(JSON.stringify(loggedInteraction));

        if (loggedInteraction.id !== null) {
          // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Login Valid");
          // console.log("---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction.id : " + loggedInteraction.id);

          if (loggedInteraction.surveyStatus === 0) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - ON_PREMISE");
            this.setSurveyStatusErrorMsg("ON_PREMISE");
            // ON_PREMISE MSG
          } else if (loggedInteraction.surveyStatus === 1) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - LAUNCHED");

            this.showLogin = false;
            this.loginError = false;

            this.surveyId = loggedInteraction.futureSurvey.id;
            this.loggedInviteeName = loggedInteraction.invitee.name;
            this.interactionId = loggedInteraction.id;
            this.interactionResponStatus = loggedInteraction.responStatus;

            if (loggedInteraction.futureSurvey.origin === "1") {
              this.origin = "Survey";
            } else if (loggedInteraction.futureSurvey.origin === "2") {
              this.origin = "E-Vote";
            }

            this.getSurveyData(this.interactionId);
            this.retrieveSurvey(this.surveyId);

          } else if (loggedInteraction.surveyStatus === 2) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - FULFILLED");
          } else if (loggedInteraction.surveyStatus === 3) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - EXPIRED");
            this.setSurveyStatusErrorMsg("EXPIRED");
          } else if (loggedInteraction.surveyStatus === 4) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - OFFLINE");
            this.setSurveyStatusErrorMsg("OFFLINE");
          }



        } else {
          // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Login Invalid");
          this.setSurveyStatusErrorMsg("INVALID");
        }

      }, error => {
        this.setSurveyStatusErrorMsg("INVALID");
      });

    // console.log("---------- Method-End : doLog()");
  }

  getSurveyData(interactionId) {
    // console.log("---------- Method-Start : getSurveyData()");

    this.inviteeInteractionViewService
      .getFutureSurveyResultById(interactionId)
      .subscribe(response => {
        // console.log("---------- ---------- Method : getSurveyData() / getFutureSurveyResultById / Parameter-response : response (String)");
        // console.log(JSON.stringify(response));

        if (response.content.id) {
          // console.log("---------- ---------- Method : getSurveyData() / getFutureSurveyResultById / Parameter-surveyResultId : " + response.surveyResultId);
          localStorage.setItem("surveyResultId", response.content.id);
          // console.log("---------- ---------- Method : getSurveyData() / getFutureSurveyResultById / Parameter-originalResultArray : " + response.content.originalResultArray);
          localStorage.setItem("originalResultArray", response.content.originalResultArray);
        } else {
          // console.log("------------------------------------------------------");
          // console.log("First Time");
          // console.log("------------------------------------------------------");
        }
      },
        error => { this.errDialog.showErrorWithMessage(error); }
      );

    // console.log("---------- Method-End : getSurveyData()");
  }

  retrieveSurvey(surveyId) {
    // console.log("---------- Method-Start : retrieveSurvey()");

    this.inviteeInteractionViewService.getFutureSurveyById(surveyId).subscribe(response => {
      // console.log("---------- ---------- Method : getSurveyData() / getFutureSurveyById / Parameter-response : response (String)");
      // console.log(JSON.stringify(response));

      this.futureSurveyObj = response.content;
      this.surveyTitle = this.futureSurveyObj.title;
      this.jsonContent = JSON.parse(this.futureSurveyObj.jsonContent);
      this.pageJson = JSON.parse(this.jsonContent).pages;

      if (this.interactionResponStatus === 1) {
        document.getElementById('btnViewSummary').style.display = 'none';
        document.getElementById('btnViewSurvey').style.display = 'none';
        document.getElementById('btnSubmitSurvey').style.display = 'none';
        document.getElementById('btnAnswerLater').style.display = 'none';
        this.viewSummary();
      } else {
        this.viewSurvey();
      }
      this.setuptheme();

    },
      error => { this.errDialog.showErrorWithMessage(error); }
    );

    // console.log("---------- Method-End : retrieveSurvey()");
  }



  viewSurvey() {

    let jsonContent = this.jsonContent;
    let pageJson: any[] = this.pageJson;

    this.surveyModel = new Survey.Model(jsonContent);
    Survey.StylesManager.applyTheme("bootstrap");

    let resultArray = [];
    let interactionId = this.interactionId;
    let lastPage = String(this.surveyModel.pages.length - 1);
    localStorage.setItem("onCompleteStatus", "onComplete");
    let thankYouMsg = this.setThankYouMsg("DEFAULT_MSG");



    this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

      if (options.question.getType() === "rating") {
        classes.root = "btn-group";
        classes.item = "btn btn-default btn-secondary";
      }

      if (options.question.getType() === "radiogroup") {
        classes.item = "sv-q-col-1";
      }

      if (options.question.getType() === "checkbox") {
        classes.item = "sv-q-col-1";
      }

      if (options.question.getType() === "matrix") {
        classes.root = "table sv_q_matrix";
      }

      if (options.question.getType() === "comment") {
        classes.root = "form-control";
      }

      if (options.question.getType() === "dropdown") {
        classes.control = "form-control";
      }

      if (options.question.getType() === "text") {
        classes.root = "form-control";
      }
    });

    document.getElementById('btnViewSummary').style.display = 'none';
    document.getElementById('btnViewSurvey').style.display = 'none';
    document.getElementById('btnSubmitSurvey').style.display = 'none';
    document.getElementById('btnAnswerLater').style.display = 'inline-block';

    this.surveyModel.currentPage = this.surveyModel.pages[localStorage.getItem("survey_currentPage_" + interactionId)];


    // .............. ON COMPLET START HERE ..........................
    this.surveyModel.onComplete.add(function (result) {

      if (localStorage.getItem("onCompleteStatus") === "onComplete") {
        localStorage.setItem("survey_currentPage_" + interactionId, lastPage);
      }

      localStorage.setItem("originalResultArray", JSON.stringify(result.data));

      document.getElementById('btnViewSummary').style.display = 'inline-block';
      document.getElementById('btnSubmitSurvey').style.display = 'inline-block';
      document.getElementById('btnViewSurvey').style.display = 'none';
      document.getElementById('btnAnswerLater').style.display = 'none';

      pageJson.forEach(element => {
        element.elements.forEach(element => {

          const elementArray = {};
          const eleType: string = element.type;

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


      // wrapping up the interaction id and survey answers together
      let submitRequest: FSAnswer = new FSAnswer(interactionId, resultArray, JSON.stringify(result.data));

      // console.log("...............ANSWER ARRAY.................");
      // console.log(resultArray);
      // console.log(JSON.stringify(resultArray));

      const interactService: InviteeInteractionViewService = new InviteeInteractionViewService();

      if (localStorage.getItem("surveyResultId") !== "null") {

        interactService.updateAnswers(submitRequest, localStorage.getItem('surveyResultId')).subscribe(
          response => {
            console.log("SUCCESS");
            console.log(response);
          },
          error => {
            console.log("ERROR");
            console.log(error);
          }
        );

      } else {

        interactService.submitAnswers(submitRequest).subscribe(
          response => {
            console.log("SUCCESS");
            localStorage.setItem("surveyResultId", response.id);
            localStorage.setItem("originalResultArray", response.originalResultArray);
          },
          error => {
            console.log("ERROR");
            console.log(error);
          }
        );

      }

      document.getElementById("surveyElement").innerHTML = thankYouMsg;

    });

    // ................. ON COMPLETE END HERE .........

    if (localStorage.getItem("surveyResultId") !== "null") {
      this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
    }

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });

  }




  viewSummary() {

    document.getElementById('btnViewSummary').style.display = 'none';

    if (this.interactionResponStatus === 0) {
      document.getElementById('btnViewSurvey').style.display = 'inline-block';
    } else if (this.interactionResponStatus === 1) {
      document.getElementById('finishedSurveyMsg').style.display = 'block';
      document.getElementById('btnViewSurvey').style.display = 'none';
    }

    let jsonContent = JSON.parse(this.jsonContent);

    jsonContent.title = "Summary of " + jsonContent.title;

    this.surveyModel = new Survey.Model(jsonContent);

    Survey.StylesManager.applyTheme("bootstrap");

    this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

      if (options.question.getType() === "rating") {
        classes.root = "btn-group";
        classes.item = "btn btn-default btn-secondary";
      }

      if (options.question.getType() === "radiogroup") {
        classes.item = "sv-q-col-1";
      }

      if (options.question.getType() === "checkbox") {
        classes.item = "sv-q-col-1";
      }

      if (options.question.getType() === "matrix") {
        classes.root = "table sv_q_matrix";
      }

      if (options.question.getType() === "comment") {
        classes.root = "form-control";
      }

      if (options.question.getType() === "dropdown") {
        classes.control = "form-control";
      }

      if (options.question.getType() === "text") {
        classes.root = "form-control";
      }
    });

    this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
    this.surveyModel.mode = 'display';

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });

  }

  // Save current answers to DB. Also current page number save to "localStorage" with current "interactionId".
  answerLater() {

    localStorage.setItem("onCompleteStatus", "answerLater");
    localStorage.setItem("survey_currentPage_" + this.interactionId, this.surveyModel.currentPageNo);
    this.surveyModel.doComplete();

    document.getElementById("surveyElement").innerHTML = this.setThankYouMsg("ANSWER_LATER_MSG");
  }

  submitSurvey() {

    const interactService: InviteeInteractionViewService = new InviteeInteractionViewService();
    interactService.submitSurvey(this.interactionId).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);

        // localStorage.setItem("interactionResponStatus", response.content.responStatus);
        this.interactionResponStatus = response.content.responStatus;

        document.getElementById("surveyElement").innerHTML = this.setThankYouMsg("SUBMIT_MSG");

        document.getElementById('btnSubmitSurvey').style.display = 'none';
        document.getElementById('btnViewSummary').style.display = 'inline-block';
        document.getElementById('btnViewSurvey').style.display = 'none';
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );

  }

  setThankYouMsg(msgType) {
    let MSG_PART_1 = '<div class="sv_main sv_bootstrap_css"><form><div class="sv_container"><div class="sv_body sv_completed_page"><h3>';
    let MSG_PART_2 = '</h3></div></div></form></div>';

    switch (msgType) {
      case "ANSWER_LATER_MSG":
        return MSG_PART_1 + "You are Attempting to Answer Later to the " + this.origin + "!" + MSG_PART_2;
      case "SUBMIT_MSG":
        return this.loginErrorMsg = MSG_PART_1 + "Thank You </br> You have finished the " + this.origin + "!" + MSG_PART_2;
      default:
        return this.loginErrorMsg = MSG_PART_1 + "The " + this.origin + " is Completed, Click Submit " + this.origin + " to Finish!" + MSG_PART_2;
    }
  }

  setSurveyStatusErrorMsg(status) {
    this.loginError = true;
    switch (status) {
      case "INVALID":
        this.loginErrorMsg = "Invalid Credentials !";
        break;
      case "ON_PREMISE":
        this.loginErrorMsg = "Survey/E-Vote is Coming soon!";
        break;
      case "EXPIRED":
        this.loginErrorMsg = "Sorry.. Survey/E-Vote is expired.!";
        break;
      case "OFFLINE":
        this.loginErrorMsg = "Survey/E-Vote is currently unavailable!";
        break;
      default:
        this.loginError = false;
        break;
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

    Survey.StylesManager.applyTheme();
  }
}

export class InviteePart {
  constructor(public username, public password: string) { }
}

export class ValueTemplate {
  constructor(public value: any) { }
}

export class MatrixBaseTemplate {
  constructor(public rowValue, public columnValue: any) { }
}

export class FSAnswer {
  constructor(public interactionId: any, public futureSurveyAnswers: any, public originalResultArray: any) { }
}
