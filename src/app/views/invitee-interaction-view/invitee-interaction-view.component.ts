import { Component, OnInit, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { InviteeInteractionViewService } from "./invitee-interaction-view.service";
import * as Survey from "survey-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppErrorService } from "../../shared/services/app-error/app-error.service";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { surveyLanguage } from "app/model/FutureSurvey.model";
import { lang } from "moment";
import { TranslateService } from "@ngx-translate/core";

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
  public newErrorMsg = false;

  public surveyId;
  public interactionResponStatus;

  public loggedInviteeName;
  public surveyTitle;
  public futureSurveyObj: any;
  public jsonContent: any;
  public jsonContentJSON;
  // public pageJson;
  public interactionId;
  public origin;

  public surveyModel;
  public customField;
  public customFields;
  public invitee;

  // Initial Login Screen values store variables
  public publishUrl: string;
  public langs: surveyLanguage[] = [];
  public supportLangs: surveyLanguage[] = [];
  public defaultLang: surveyLanguage;
  public currentLang: surveyLanguage;
  public langCardStatus = true;

  public getLangsSub: Subscription;
  public originMap = new Map();
  public langJson: any;

  constructor(
    private inviteeInteractionViewService: InviteeInteractionViewService,
    private fb: FormBuilder,
    private errDialog: AppErrorService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    public translateService: TranslateService
  ) {
    this.originMap.set("Survey", "1");
    this.originMap.set("eVote", "2");

    this.getAllSurveyLangs();

    this.activeRoute.params.subscribe(params => {
      this.publishUrl = params["uniqueName"];
    });

    const currentUrl = this.route.url;
    const urlArr: any[] = currentUrl.substring(1).split("/", 2);
    const originStr = urlArr[0];
    this.origin = originStr;

    this.inviteeInteractionViewService
      .getInvitationByUrl(this.originMap.get(originStr), this.publishUrl)
      .subscribe(data => {
        console.log(data.content.futureSurvey.status);

        if (data.content.futureSurvey.status === 0) {
          // set error msg for on premise surveys
          this.newErrorMsg = true;
        } else if (data.content.futureSurvey.status === 1) {
          // This response will collect language json array for a SURVEY
          console.log(data.content);
          this.langJson = JSON.parse(data.content.futureSurvey.languageJson);
          console.log(this.langJson);
          this.buildSupportLangArray(this.langJson);
          console.log(this.supportLangs);
          console.log(JSON.stringify(this.supportLangs));
          this.changeDefaultLang();
        }
      },
        error => {
          if (error.error.validationFailures[0].code == 'getSurveyByUrl.notExist') {
            console.log('notExist');
          } else {
            console.log(error);
            // this.errDialog.showError(error);
          }
        }
      );

  }

  ngOnInit() {
    this.interactForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      language: [""]
    });
    this.showLogin = true;
  }

  ngOnDestroy() {
    if (this.getLangsSub) {
      this.getLangsSub.unsubscribe();
    }
  }

  buildSupportLangArray(langJson) {
    this.langs.forEach(element => {
      if (langJson.extra.indexOf(element.code) > -1 || langJson.def === element.code) {
        if (langJson.def === element.code) {
          this.defaultLang = element;
          this.currentLang = element;
        }
        if (this.supportLangs.indexOf(element) == -1) {
          this.supportLangs.push(element);
        }
      }
    });
    this.addTranslation();
  }

  // buildSupportLangArray(langJson): any[] {
  //   this.defaultLang = this.langs.filter(obj => {
  //     return obj.code === langJson.def;
  //   });
  //   this.supportLangs.push(this.defaultLang);
  //   this.currentLang = this.defaultLang[0].id;
  //   if (langJson.extra) {
  //     langJson.extra.forEach(langCode => {
  //       const lang = this.langs.filter(obj => {
  //         return obj.code === langCode;
  //       });
  //       if (this.supportLangs.indexOf(lang) == -1) {
  //         this.supportLangs.push(lang);
  //       }
  //     });
  //   }
  //   return this.supportLangs;
  // }

  // load all the languages
  getAllSurveyLangs() {
    this.getLangsSub = this.inviteeInteractionViewService
      .getAllLangs()
      .subscribe(data => {
        this.langs = JSON.parse(JSON.stringify(data.content));
      });
  }

  changeDefaultLang() {
    localStorage.setItem("surveySelectedLang", JSON.stringify(this.currentLang));
    this.translateService.use(this.currentLang.code);
  }

  doLog() {
    let username = this.interactForm.get("username").value;
    let password = this.interactForm.get("password").value;

    let inviteePart: InviteePart = new InviteePart(username, password);

    this.inviteeInteractionViewService.interactLoginPost(inviteePart).subscribe(
      response => {
        const loggedInteraction = response;
        console.log(
          "---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (Json)"
        );
        console.log(loggedInteraction);

        console.log(
          "---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (String)"
        );
        console.log(JSON.stringify(loggedInteraction));

        if (loggedInteraction.id !== null) {
          if (loggedInteraction.surveyStatus === 0) {
            // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - ON_PREMISE");
            this.setSurveyStatusErrorMsg("ON_PREMISE");
          } else if (loggedInteraction.surveyStatus === 1) {
            this.showLogin = false;
            this.loginError = false;

            this.interactionId = loggedInteraction.id;
            this.interactionResponStatus = loggedInteraction.responStatus;
            this.surveyId = loggedInteraction.futureSurvey.id;
            this.surveyTitle = loggedInteraction.futureSurvey.title;
            this.loggedInviteeName = loggedInteraction.invitee.name;
            this.customFields =
              loggedInteraction.futureSurvey.invitation.inviteeGroup.customFields;
            this.invitee = loggedInteraction.invitee;
            this.jsonContent = JSON.parse(
              loggedInteraction.futureSurvey.jsonContent
            );

            this.customField = {};
            this.customFields.forEach(header => {
              this.customField[header.displayName] = this.invitee[
                header.fieldName
              ];
            });
            console.log(this.customFields);
            console.log(this.customField);

            this.getSurveyData(this.interactionId);
            // this.retrieveSurvey(this.surveyId);
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
          this.setSurveyStatusErrorMsg("INVALID");
        }
      },
      error => {
        this.setSurveyStatusErrorMsg("INVALID");
      }
    );
  }

  getSurveyData(interactionId) {
    this.inviteeInteractionViewService
      .getFutureSurveyResultById(interactionId)
      .subscribe(
        response => {
          if (response.content.id) {
            localStorage.setItem("surveyResultId", response.content.id);
            localStorage.setItem(
              "originalResultArray",
              response.content.originalResultArray
            );
          } else {
            localStorage.setItem("surveyResultId", null);
            localStorage.setItem("originalResultArray", null);
          }

          if (this.interactionResponStatus === 1) {
            document.getElementById("btnViewSummary").style.display = "none";
            document.getElementById("btnViewSurvey").style.display = "none";
            document.getElementById("btnSubmitSurvey").style.display = "none";
            document.getElementById("btnAnswerLater").style.display = "none";
            this.viewSummary();
          } else {
            this.viewSurvey();
          }
          this.setuptheme();
        },
        error => {
          this.errDialog.showError(error);
        }
      );
  }

  viewSurvey() {
    this.jsonContentJSON = JSON.parse(this.jsonContent);

    console.log(
      "-------------  Before - jsonContentJSON.pages -----------------"
    );
    console.log(this.jsonContentJSON.pages);

    this.jsonContentJSON.pages.forEach(element => {
      element.elements.forEach(element => {
        if (element.customVisibleName !== "null") {
          let header = element.customVisibleName;
          if (this.customField[header] === element.customVisibleValue) {
            element.visible = true;
          } else {
            element.visible = false;
          }
        }
      });
    });




    console.log(
      "------------- After - jsonContentJSON.pages -----------------"
    );
    console.log(this.jsonContentJSON.pages);

    let jsonContent = this.jsonContentJSON;

    this.surveyModel = new Survey.Model(jsonContent);
    Survey.StylesManager.applyTheme("bootstrap");

    console.log(localStorage.getItem('surveySelectedLang'));
    this.surveyModel.locale = JSON.parse(localStorage.getItem('surveySelectedLang')).code;

    // console.log(this.surveyModel);

    let resultArray = [];
    let interactionId = this.interactionId;
    let lastPage = String(this.surveyModel.pages.length - 1);
    localStorage.setItem("onCompleteStatus", "onComplete");
    let thankYouMsg = this.setThankYouMsg("DEFAULT_MSG");

    this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

      if (options.question.getType() === "rating") {
        classes.root = "btn-group";
        classes.item = "btn btn-outline-secondary";
      }

      if (options.question.getType() === "radiogroup") {
        classes.root = "sv_qcbc";
        classes.item = "sv-q-col-1";
      }

      if (options.question.getType() === "checkbox") {
        classes.root = "sv_qcbc sv_qcbx";
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

    document.getElementById("btnViewSummary").style.display = "none";
    document.getElementById("btnViewSurvey").style.display = "none";
    document.getElementById("btnSubmitSurvey").style.display = "none";
    document.getElementById("btnAnswerLater").style.display = "inline-block";

    this.surveyModel.currentPage = this.surveyModel.pages[
      localStorage.getItem("survey_currentPage_" + interactionId)
    ];

    // .............. ON COMPLET START HERE ..........................
    this.surveyModel.onComplete.add(function (result) {
      if (localStorage.getItem("onCompleteStatus") === "onComplete") {
        localStorage.setItem("survey_currentPage_" + interactionId, lastPage);
      }

      localStorage.setItem("originalResultArray", JSON.stringify(result.data));

      document.getElementById("btnViewSummary").style.display = "inline-block";
      document.getElementById("btnSubmitSurvey").style.display = "inline-block";
      document.getElementById("btnViewSurvey").style.display = "none";
      document.getElementById("btnAnswerLater").style.display = "none";

      jsonContent.pages.forEach(element => {
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

      let submitRequest: FSAnswer = new FSAnswer(
        interactionId,
        resultArray,
        JSON.stringify(result.data)
      );

      const interactService: InviteeInteractionViewService = new InviteeInteractionViewService();

      if (localStorage.getItem("surveyResultId") !== "null") {
        interactService
          .updateAnswers(submitRequest, localStorage.getItem("surveyResultId"))
          .subscribe(
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
            localStorage.setItem(
              "originalResultArray",
              response.originalResultArray
            );
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
      this.surveyModel.data = JSON.parse(
        localStorage.getItem("originalResultArray")
      );
    }

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });
  }

  viewSummary() {
    document.getElementById("btnViewSummary").style.display = "none";

    if (this.interactionResponStatus === 0) {
      document.getElementById("btnViewSurvey").style.display = "inline-block";
    } else if (this.interactionResponStatus === 1) {
      document.getElementById("finishedSurveyMsg").style.display = "block";
      document.getElementById("btnViewSurvey").style.display = "none";
    }

    // let jsonContent = this.jsonContentJSON;
    let jsonContent = JSON.parse(this.jsonContent);

    if (typeof (jsonContent.title) !== "string") {
      if (jsonContent.title.hasOwnProperty(this.currentLang.code) > -1) {
        jsonContent.title = this.translateService.instant('SUMMERYTITLE') + " " + jsonContent.title[this.currentLang.code];
      } else {
        jsonContent.title = this.translateService.instant('SUMMERYTITLE') + " " + jsonContent.title['default'];
      }
    } else {
      jsonContent.title = this.translateService.instant('SUMMERYTITLE') + " " + jsonContent.title;
    }

    this.surveyModel = new Survey.Model(jsonContent);

    Survey.StylesManager.applyTheme("bootstrap");

    this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
      var classes = options.cssClasses;

      if (options.question.getType() === "rating") {
        classes.root = "btn-group";
        classes.item = "btn btn-default btn-secondary";
        classes.other = "sv_q_rating_other form-control height-auto";
      }

      if (options.question.getType() === "radiogroup") {
        classes.item = "sv-q-col-1";
        classes.other = "sv_q_radiogroup_other form-control height-auto";
      }

      if (options.question.getType() === "checkbox") {
        classes.item = "sv-q-col-1";
        classes.other = "sv_q_checkbox_other form-control height-auto";
      }

      if (options.question.getType() === "matrix") {
        classes.root = "table sv_q_matrix";
      }

      if (options.question.getType() === "comment") {
        classes.root = "form-control";
      }

      if (options.question.getType() === "dropdown") {
        classes.control = "form-control";
        classes.other = "sv_q_dropdown_other form-control height-auto";
      }

      if (options.question.getType() === "text") {
        classes.root = "form-control";
      }
    });

    this.surveyModel.data = JSON.parse(
      localStorage.getItem("originalResultArray")
    );
    this.surveyModel.mode = "display";

    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });
  }

  // Save current answers to DB. Also current page number save to "localStorage" with current "interactionId".
  answerLater() {
    localStorage.setItem("onCompleteStatus", "answerLater");
    localStorage.setItem(
      "survey_currentPage_" + this.interactionId,
      this.surveyModel.currentPageNo
    );
    this.surveyModel.doComplete();
    document.getElementById("surveyElement").innerHTML = this.setThankYouMsg(
      "ANSWER_LATER_MSG"
    );
  }

  submitSurvey() {
    const interactService: InviteeInteractionViewService = new InviteeInteractionViewService();
    interactService.submitSurvey(this.interactionId).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);

        // localStorage.setItem("interactionResponStatus", response.content.responStatus);
        this.interactionResponStatus = response.content.responStatus;

        document.getElementById(
          "surveyElement"
        ).innerHTML = this.setThankYouMsg("SUBMIT_MSG");

        document.getElementById("btnSubmitSurvey").style.display = "none";
        document.getElementById("btnViewSummary").style.display =
          "inline-block";
        document.getElementById("btnViewSurvey").style.display = "none";
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );
  }

  setThankYouMsg(msgType) {
    let MSG_PART_1 =
      '<div class="sv_main sv_bootstrap_css"><form><div class="sv_container"><div class="sv_body sv_completed_page"><h3>';
    let MSG_PART_2 = "</h3></div></div></form></div>";
    let msgText = '';

    switch (msgType) {
      case "ANSWER_LATER_MSG":
        if (this.origin === 'Survey') {
          msgText = this.translateService.instant('ANSWERLATERMSGSURVEY');
        } else {
          msgText = this.translateService.instant('ANSWERLATERMSGEVOTE');
        }
        return (
          MSG_PART_1 +
          msgText +
          "!" +
          MSG_PART_2
        );
      case "SUBMIT_MSG":
        if (this.origin === 'Survey') {
          msgText = this.translateService.instant('THANKYOU') + '</br>' + this.translateService.instant('SUBMITMSGSURVEY');
        } else {
          msgText = this.translateService.instant('THANKYOU') + '</br>' +this.translateService.instant('SUBMITMSGEVOTE');
        }
        return (
          MSG_PART_1 +
          msgText +
          "!" +
          MSG_PART_2
        );
      default:
        if (this.origin === 'Survey') {
          msgText = this.translateService.instant('COMPLETEMSGSURVEY');
        } else {
          msgText = this.translateService.instant('COMPLETEMSGEVOTE');
        }
        return (
          MSG_PART_1 +
          msgText +
          "!" +
          MSG_PART_2
        );
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

  // add tranlation for static element in the survey view
  addTranslation() {
    const languages = [];
    this.supportLangs.forEach(element => {
      languages.push(element.code);
    });
    this.translateService.addLangs(languages);
    if (this.defaultLang) {
      this.translateService.setDefaultLang(this.defaultLang.code);
      this.translateService.use(this.defaultLang.code);
    }
    this.interactForm.controls['language'].setValue(this.defaultLang.code);
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
  constructor(
    public interactionId: any,
    public futureSurveyAnswers: any,
    public originalResultArray: any
  ) { }
}
