import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { ActivatedRoute, Router } from "@angular/router";
import { InteractionViewService } from "./interaction-view.service";
import * as Survey from "survey-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppErrorService } from "../../shared/services/app-error/app-error.service";

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
    private fb: FormBuilder,
    private errDialog: AppErrorService
  ) {}

  ngOnInit() {
    this.buildInteractForm();
    this.interactForm = this.fb.group({
      password: ["", Validators.required]
    });

    // set public temporary save local storage name to the local storage (by prasad kumara)
    localStorage.setItem("publicSurveyName", "public");
    localStorage.setItem("surveyType", "public");

    console.log("NG ON INIT CALLED");

    this.sub = this.route.queryParams.subscribe(params => {
      this.interactionId = params["interactionId"];
      this.surveyId = params["surveyId"];
    });

    if (this.interactionId) {
      this.viewInteraction(this.interactionId);
    }
    if (this.surveyId) {
      console.log("SURVEY ID : " + this.surveyId);
      this.retrieveSurvey(this.surveyId);
    }

    var elements1 = document.getElementById("divViewSummary");
    elements1.style.display = "none";
    var elements2 = document.getElementById("divViewSurvey");
    elements2.style.display = "none";
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
        console.log("LOGGED INSTANCE - " + this.loggedInvitee);
        this.showLogin = true;

        console.log("ID : " + this.futureSurveyObj.id);
        console.log("title : " + this.surveyTitle);
        console.log("FUTURE SURVEY OBJ");
      });
  }

  retrieveSurvey(surveyId) {
    console.log(" retrieveSurvey SURVEY ID : " + surveyId);
    this.interactionViewService.getFutureSurveyById(surveyId).subscribe(
      response => {
        this.showLogin = false;
        // this.showSurvey = true;
        this.futureSurveyObj = response.content;
        this.jsonContent = JSON.parse(this.futureSurveyObj.jsonContent);
        this.surveyTitle = this.futureSurveyObj.title;
        this.pageJson = JSON.parse(this.jsonContent).pages;

        // Set the private Survey Name to the local storage (by prasad kumara)
        localStorage.setItem("privateSurveyName", this.interactionId);
        this.viewSurvey(false);

        this.setuptheme();
      },
      error => {
        this.errDialog.showErrorWithMessage(error);
      }
    );
  }

  buildInteractForm() {
    this.interactForm = this.fb.group({
      password: ["", Validators.required],
      username: ["", Validators.required]
    });
  }

  // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
  viewSurvey(isEditable) {
    let pageArray: any[] = this.pageJson;
    let resultArray = [];

    let jsonc = JSON.parse(this.jsonContent);

    const surveyModel = new Survey.Model(jsonc);
    // Call Answer Later Button (by prasad kumara)
    this.answerLaterButtonClick(surveyModel);
    // load data from local storage (by prasad kumara)
    const results = this.loadSurveyFromLocalStorage();
    // Set the loaded data into the survey (by prasad kumara)
    if (results.pageName >= 0) {
      surveyModel.currentPageNo = results.pageName;
      if (results.completedData) {
        surveyModel.data = results.completedData;
      }
    }
    // set interval function to save survey data to localstorage (by prasad kumara)
    setInterval(
      () =>
        this.saveSurveyToLocalStorage(
          surveyModel.currentPageNo,
          surveyModel.data
        ),
      60000
    );

    Survey.StylesManager.applyTheme("bootstrap");

    surveyModel.onUpdateQuestionCssClasses.add(function(survey, options) {
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

    // Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    var elements1 = document.getElementById("divViewSummary");
    elements1.style.display = "none";
    var elements2 = document.getElementById("divViewSurvey");
    elements2.style.display = "none";

    // .............. ON COMPLET START HERE ..........................
    surveyModel.onComplete.add(function(result) {
      localStorage.setItem("surveyResult", JSON.stringify(result.data));

      // document.getElementById("surveyResult").innerHTML = "<a class='btn sv_preview_btn' href='" + window.location.href + "&preview=true' >View Summary</a>";

      var elements2 = document.getElementById("divViewSummary");
      elements2.style.display = "block";

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
        }
      );

      let thankYouMsg =
        '<div class="sv_main sv_bootstrap_css">' +
        "<form>" +
        '<div class="sv_container">' +
        '<div data-bind="html: processedCompletedHtml, css: completedCss" class="sv_body sv_completed_page"><h3>Thank you for completing the survey!</h3></div>' +
        "</div>" +
        "</form>" +
        "</div>";

      document.getElementById("surveyElement").innerHTML = thankYouMsg;
      // Remove Temporary saved survey results and empty the survey data (by prasad kumara)
      if (localStorage.getItem("surveyType") !== "private") {
        localStorage.removeItem(localStorage.getItem("publicSurveyName"));
      } else {
        localStorage.removeItem(localStorage.getItem("privateSurveyName"));
      }
    });

    // ................. ON COMPLETE END HERE .........

    if (isEditable) {
      surveyModel.data = JSON.parse(localStorage.getItem("surveyResult"));
      // surveyModel.mode = 'display';
    }

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    if (isEditable) {
      // Hide the answer later button when view the summery of the survey (by prasad kumara)
      document.getElementById("answer-later").style.display = "none";
    }
  }

  viewSummary() {
    var elements1 = document.getElementById("divViewSummary");
    elements1.style.display = "none";
    var elements2 = document.getElementById("divViewSurvey");
    elements2.style.display = "block";

    let jsonc = JSON.parse(this.jsonContent);

    jsonc.title = "Summary of " + jsonc.title;

    const surveyModel = new Survey.Model(jsonc);

    Survey.StylesManager.applyTheme("bootstrap");

    surveyModel.onUpdateQuestionCssClasses.add(function(survey, options) {
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

    surveyModel.data = JSON.parse(localStorage.getItem("surveyResult"));
    surveyModel.mode = "display";

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
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

  doLog() {
    console.log("CALLED METHOD");

    let password = this.interactForm.get("password").value;
    let username = this.interactForm.get("username").value;

    let fsPart: FSurveyPart = new FSurveyPart(this.futureSurveyObj.id);
    let inviteePart: InviteePart = new InviteePart(username, password);

    let loginReq: LoginRequest = new LoginRequest(
      this.interactionId,
      inviteePart,
      fsPart
    );

    console.log("Login REQUEST ");
    console.log(loginReq);

    this.interactionViewService.interactLoginPost(loginReq).subscribe(
      response => {
        this.showLogin = false;
        this.loginResult = true;

        const loggedInteraction = response;
        console.log("LOGGED INTERACTION RESPONSE");
        console.log(loggedInteraction);

        if (loggedInteraction != null) {
          if (loggedInteraction.responStatus == 1) {
            // Situation all ready responded to survey
          } else {
            // Change localstorage survey type public to private (by prasad kymara)
            localStorage.setItem("surveyType", "private");
            this.showLogin = false;
            localStorage.setItem(
              "futureSurveyid",
              loggedInteraction.futureSurvey.id
            );
            this.retrieveSurvey(loggedInteraction.futureSurvey.id);
          }
        } else {
          // could not find a record for password and interaction id
        }
      },
      error => {
        // this.errors = error;
        this.loginResult = false;
      }
    );
  }

  // Save survey answers to the local storage (by prasad kumara)
  saveSurveyToLocalStorage(pageName: any, surveyResultArray: any) {
    let storageName = localStorage.getItem("publicSurveyName");
    if (localStorage.getItem("surveyType") !== "public") {
      storageName = localStorage.getItem("privateSurveyName");
    }
    // Set Survey result to the local storage with current page name (by prasad kumara)
    window.localStorage.setItem(
      storageName,
      JSON.stringify({
        pageName: pageName,
        completedData: surveyResultArray
      })
    );
  }
  // Get Survey result from local storage (by prasad kumara)
  loadSurveyFromLocalStorage(): any {
    let storageName = localStorage.getItem("publicSurveyName");
    if (localStorage.getItem("surveyType") !== "public") {
      storageName = localStorage.getItem("privateSurveyName");
    }
    const storageSt = window.localStorage.getItem(storageName) || "";
    let res = {};
    if (storageSt) {
      console.log("view");
      console.log(JSON.parse(storageSt));
      return JSON.parse(storageSt);
    } else {
      res = {
        currentPageNo: 0,
        data: {}
      };
      return res;
    }
  }
  // Answer Later button click function (by prasad kumara)
  answerLaterButtonClick(surveyModel) {
    let storageName = localStorage.getItem("publicSurveyName");
    if (localStorage.getItem("surveyType") !== "public") {
      storageName = localStorage.getItem("privateSurveyName");
    }
    // Requires for knockout platoform only for adding custom buttons
    surveyModel.onRendered.add(function(sender) {
      const survey = sender;
      // console.log(document.getElementsByClassName('panel-footer')[0]);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-info btn-xs float-right";
      btn.innerHTML = "Answer Later";
      btn.id = "answer-later";
      btn.onclick = function() {
        window.localStorage.setItem(
          storageName,
          JSON.stringify({
            pageName: surveyModel.currentPageNo,
            completedData: surveyModel.data
          })
        );
      };
      const pannelFooter = document.getElementsByClassName("panel-footer")[0];
      pannelFooter.appendChild(btn);
    });
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
