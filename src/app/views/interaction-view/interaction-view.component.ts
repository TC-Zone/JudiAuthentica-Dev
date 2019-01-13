import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { ActivatedRoute, Router } from "@angular/router";
import { InteractionViewService } from "./interaction-view.service";
import * as Survey from "survey-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppErrorService } from '../../shared/services/app-error/app-error.service';

@Component({
  selector: "app-interaction-view",
  templateUrl: "./interaction-view.component.html",
  animations: egretAnimations
})
export class InteractionViewComponent implements OnInit {
  public sub: any;

  public futureSurveyObj: any;
  public surveyTitle: any;
  public loggedInvitee;

  public interactionId;
  public surveyId;

  jsonContent: any;
  pageJson;

  public showLogin: boolean = false;
  public loginError = false;
  public surveyResultId;
  public isEditable = false;

  public surveyModel;
  public interactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interactionViewService: InteractionViewService,
    private fb: FormBuilder,
    private errDialog: AppErrorService
  ) { }

  ngOnInit() {
    this.buildInteractForm();
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });

    this.sub = this.route.queryParams.subscribe(params => {
      this.interactionId = params["interactionId"];
      this.surveyId = params["surveyId"];
    });

    localStorage.setItem("surveyResultId", null);
    localStorage.setItem("interactionSurveyResultArray", null);

    if (this.interactionId) {
      this.getSurveyData(this.interactionId);
      this.viewInteraction(this.interactionId);
    }
    if (this.surveyId) {
      console.log("SURVEY ID : " + this.surveyId);
      this.retrieveSurvey(this.surveyId);
    }
    console.log("NG ON INIT CALLED");
  }

  buildInteractForm() {
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });
  }

  getSurveyData(interactionId) {
    this.interactionViewService
      .getFutureSurveyResultById(interactionId)
      .subscribe(response => {
        if (response.content.id) {
          localStorage.setItem("surveyResultId", response.content.id);
          localStorage.setItem("interactionSurveyResultArray", response.content.originalResultArray);
          this.surveyResultId = response.content.id;
        } else {
          console.log("------------------------------------------------------");
          console.log("First Time");
          console.log("------------------------------------------------------");
        }
      },
        error => {
          this.errDialog.showErrorWithMessage(error);
        });
  }

  viewInteraction(interactionId) {
    this.interactionViewService
      .getInteractionById(interactionId)
      .subscribe(response => {
        this.futureSurveyObj = response.content.futureSurvey;
        this.surveyTitle = this.futureSurveyObj.title;
        this.loggedInvitee = response.content.invitee.name;
        console.log("LOGGED INSTANCE - " + this.loggedInvitee);
        this.showLogin = true;

        console.log("ID : " + this.futureSurveyObj.id);
        console.log("title : " + this.surveyTitle);
        console.log("FUTURE SURVEY OBJ");
      });
  }

  doLog() {
    console.log("CALLED METHOD");

    let password = this.interactForm.get("password").value;
    let username = this.interactForm.get("username").value;

    let fsPart: FSurveyPart = new FSurveyPart(this.futureSurveyObj.id);
    let inviteePart : InviteePart = new InviteePart(username,password);

    let loginReq: LoginRequest = new LoginRequest(
      this.interactionId,
      inviteePart,
      fsPart
    );

    console.log("Login REQUEST ");
    console.log(loginReq);

    this.interactionViewService
      .interactLoginPost(loginReq)
      .subscribe(response => {
        this.showLogin = false;
        this.loginError = false;

        const loggedInteraction = response;
        console.log("LOGGED INTERACTION RESPONSE");
        console.log(loggedInteraction);

        if (loggedInteraction != null) {
          this.showLogin = false;
          localStorage.setItem("interactionResponStatus", loggedInteraction.responStatus);
          this.retrieveSurvey(loggedInteraction.futureSurvey.id);
        } else {
          // could not find a record for password and interaction id
        }
      }, error => {
        // this.errors = error;
        this.loginError = true;
      });
  }

  retrieveSurvey(surveyId) {
    console.log(" retrieveSurvey SURVEY ID : " + surveyId);

    this.interactionViewService
      .getFutureSurveyById(surveyId)
      .subscribe(response => {
        this.showLogin = false;
        this.futureSurveyObj = response.content;
        this.jsonContent = JSON.parse(this.futureSurveyObj.jsonContent);
        this.surveyTitle = this.futureSurveyObj.title;
        this.pageJson = JSON.parse(this.jsonContent).pages;

        if (localStorage.getItem("interactionResponStatus") === '1') {
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
      error => {
        this.errDialog.showErrorWithMessage(error);
      }
    );
  }


  // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
  viewSurvey() {

    let pageArray: any[] = this.pageJson;
    let resultArray = [];

    let interactionId = this.interactionId;
    let surveyResultId;

    let jsonc = JSON.parse(this.jsonContent);
    this.surveyModel = new Survey.Model(jsonc);

    let lastPage = String(this.surveyModel.pages.length - 1);
    localStorage.setItem("onCompleteStatus", "onComplete");

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
    });

    document.getElementById('btnViewSummary').style.display = 'none';
    document.getElementById('btnViewSurvey').style.display = 'none';
    document.getElementById('btnSubmitSurvey').style.display = 'none';
    if (interactionId !== undefined) {
      document.getElementById('btnAnswerLater').style.display = 'inline-block';
      this.surveyModel.currentPage = this.surveyModel.pages[localStorage.getItem("survey_currentPage_" + interactionId)];
    } else {
      document.getElementById('btnAnswerLater').style.display = 'none';
    }

    // .............. ON COMPLET START HERE ..........................
    this.surveyModel.onComplete.add(function (result) {

      if (interactionId !== undefined && localStorage.getItem("onCompleteStatus") === "onComplete") {
        localStorage.setItem("survey_currentPage_" + interactionId, lastPage);
      }


      localStorage.setItem("interactionSurveyResultArray", JSON.stringify(result.data));

      document.getElementById('btnViewSummary').style.display = 'inline-block';
      if (interactionId !== undefined) {
        document.getElementById('btnSubmitSurvey').style.display = 'inline-block';
      } else {
        document.getElementById('btnSubmitSurvey').style.display = 'none';
      }
      document.getElementById('btnViewSurvey').style.display = 'none';
      document.getElementById('btnAnswerLater').style.display = 'none';

      console.log("..............SURVEY ANSWER RESULR/.............");
      console.log(result);

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


      // wrapping up the interaction id and survey answers together
      let submitRequest: FSAnswer = new FSAnswer(interactionId, resultArray, JSON.stringify(result.data));

      console.log("...............ANSWER ARRAY.................");
      console.log(resultArray);
      console.log(JSON.stringify(resultArray));

      const interactService: InteractionViewService = new InteractionViewService();

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
            localStorage.setItem("interactionSurveyResultArray", JSON.parse(response.originalResultArray));
          },
          error => {
            console.log("ERROR");
            console.log(error);
          }
        );

      }


      let thankYouMsg =
        '<div class="sv_main sv_bootstrap_css">' +
        "<form>" +
        '<div class="sv_container">' +
        '<div data-bind="html: processedCompletedHtml, css: completedCss" class="sv_body sv_completed_page">' +
        '<h3>Thank You for Completing the Survey!</h3>' +
        '<h6>~~ thankYouMsg ~~</h6>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>';

      document.getElementById("surveyElement").innerHTML = thankYouMsg;

    });

    // ................. ON COMPLETE END HERE .........

    if (localStorage.getItem("surveyResultId") !== "null") {
      this.surveyModel.data = JSON.parse(localStorage.getItem("interactionSurveyResultArray"));
    }

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });

  }

  viewSummary() {

    document.getElementById('btnViewSummary').style.display = 'none';
    if (localStorage.getItem("interactionResponStatus") === '0' && this.interactionId !== undefined) {
      document.getElementById('btnViewSurvey').style.display = 'inline-block';
    } else {
      document.getElementById('btnViewSurvey').style.display = 'none';
      // document.getElementById('btnAnswerLater').style.display = 'none';
      // document.getElementById('btnSubmitSurvey').style.display = 'none';
    }

    let jsonc = JSON.parse(this.jsonContent);

    jsonc.title = "Summary of " + jsonc.title;

    this.surveyModel = new Survey.Model(jsonc);

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
    });

    this.surveyModel.data = JSON.parse(localStorage.getItem("interactionSurveyResultArray"))
    this.surveyModel.mode = 'display';

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });

  }

  answerLater() {

    localStorage.setItem("onCompleteStatus", "answerLater");
    localStorage.setItem("survey_currentPage_" + this.interactionId, this.surveyModel.currentPageNo);
    this.surveyModel.doComplete();



    let answerLaterMsg =
      '<div class="sv_main sv_bootstrap_css">' +
      '<form>' +
      '<div class="sv_container">' +
      '<div data-bind="html: processedCompletedHtml, css: completedCss" class="sv_body sv_completed_page">' +
      '<h3>Thank You for Completing the Survey!</h3>' +
      '<h6>~~ answerLaterMsg ~~</h6>' +
      '</div>' +
      '</div>' +
      '</form>' +
      '</div>';

    document.getElementById("surveyElement").innerHTML = answerLaterMsg;

  }

  submitSurvey() {
    const interactService: InteractionViewService = new InteractionViewService();
    interactService.submitSurvey(this.interactionId).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);

        localStorage.setItem("interactionResponStatus", response.content.responStatus);

        let submitMsg =
          '<div class="sv_main sv_bootstrap_css">' +
          '<form>' +
          '<div class="sv_container">' +
          '<div data-bind="html: processedCompletedHtml, css: completedCss" class="sv_body sv_completed_page">' +
          '<h3>Thank You for Completing the Survey!</h3>' +
          '<h6>~~ submitMsg ~~</h6>' +
          '</div>' +
          '</div>' +
          '</form>' +
          '</div>';

        document.getElementById("surveyElement").innerHTML = submitMsg;

        document.getElementById('btnSubmitSurvey').style.display = 'none';
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );

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

export class LoginRequest {
  constructor(public id, public invitee, public futureSurvey: any) {}
}

export class FSurveyPart {
  constructor(public id) {}
}

export class InviteePart {
  constructor(public username, public password: string) {}
}

export class ValueTemplate {
  constructor(public value: any) {}
}

export class MatrixBaseTemplate {
  constructor(public rowValue, public columnValue: any) {}
}

export class FSAnswer {
  constructor(public interactionId: any, public futureSurveyAnswers: any, public originalResultArray: any) { }
}
