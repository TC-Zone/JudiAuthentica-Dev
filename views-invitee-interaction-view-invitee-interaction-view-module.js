(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-invitee-interaction-view-invitee-interaction-view-module"],{

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"interactForm\">\r\n  <div class=\"page-wrap height-100 background-survey-signin\" *ngIf=\"showLogin\">\r\n    <div class=\"session-form-hold set-form-left\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <img src=\"assets/images/truverus/Tru-Verus-Logo.png\" alt=\"\">\r\n            <p class=\"text-muted m-0\">Sign in to your account</p>\r\n            <h6 *ngIf=\"loginError\" class=\"m-1 form-error-msg\"> {{loginErrorMsg}} </h6>\r\n          </div>\r\n\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"text\" name=\"username\" matInput placeholder=\"Username\" value=\"\" [formControl]=\"interactForm.controls['username']\"\r\n              required name=\"username\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" value=\"\" [formControl]=\"interactForm.controls['password']\"\r\n              required name=\"password\">\r\n          </mat-form-field>\r\n\r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"doLog()\" [disabled]=\"interactForm.invalid\">Login\r\n            to Survey</button>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div fxFlex=\"100\" fxLayoutAlign=\"center center\" id=\"survey-view-survey\" class=\"background-survey-form\">\r\n  <header>\r\n    <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n      <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n      </div>\r\n      <!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n      <span class=\"example-card-title hidden-xs\">Clear Picture</span>\r\n      <span class=\"example-spacer\"></span>\r\n      <span *ngIf=\"loggedInviteeName\" class=\"example-invite\">Hi, {{loggedInviteeName}}</span>\r\n    </mat-toolbar>\r\n  </header>\r\n\r\n\r\n\r\n  <div class=\"survey-page-wrap\" *ngIf=\"!showLogin\">\r\n    <div class=\"survey-form-hold\">\r\n      <mat-card id=\"finishedSurveyMsg\" class=\"survey-mat-card\">\r\n        <mat-card-content>\r\n          <h5>The {{origin}} is Previously Submitted </h5>\r\n          <h6>Summary is provided bellow</h6>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"survey-mat-card\">\r\n        <mat-card-content>\r\n          <div id=\"surveyElement\"></div>\r\n          <div id=\"surveyResult\"></div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card-content>\r\n\r\n    <div class=\"pb-1\" style=\"text-align: center\">\r\n      <a id=\"btnViewSummary\" mat-raised-button class=\"mr-1\" (click)=\"viewSummary()\">View Summary</a>\r\n      <a id=\"btnViewSurvey\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">Edit {{origin}}</a>\r\n      <a id=\"btnSubmitSurvey\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"submitSurvey()\">Submit {{origin}}</a>\r\n      <a id=\"btnAnswerLater\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"answerLater()\">Answer Later</a>\r\n    </div>\r\n\r\n\r\n  </mat-card-content>\r\n\r\n\r\n  <div id=\"survey-view-footer\">\r\n    <div class=\"container custom-center\">\r\n      <span>Powered by</span>\r\n      <img src=\"assets/images/cp_logo_text.png\" alt=\"\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  $.material.init();\r\n</script>"

/***/ }),

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InviteeInteractionViewComponent, InviteePart, ValueTemplate, MatrixBaseTemplate, FSAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeInteractionViewComponent", function() { return InviteeInteractionViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteePart", function() { return InviteePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueTemplate", function() { return ValueTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixBaseTemplate", function() { return MatrixBaseTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSAnswer", function() { return FSAnswer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitee-interaction-view.service */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.service.ts");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteeInteractionViewComponent = /** @class */ (function () {
    function InviteeInteractionViewComponent(inviteeInteractionViewService, fb, errDialog) {
        this.inviteeInteractionViewService = inviteeInteractionViewService;
        this.fb = fb;
        this.errDialog = errDialog;
        this.showLogin = false;
        this.loginError = false;
    }
    InviteeInteractionViewComponent.prototype.ngOnInit = function () {
        this.interactForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.showLogin = true;
    };
    InviteeInteractionViewComponent.prototype.doLog = function () {
        var _this = this;
        var username = this.interactForm.get("username").value;
        var password = this.interactForm.get("password").value;
        var inviteePart = new InviteePart(username, password);
        this.inviteeInteractionViewService
            .interactLoginPost(inviteePart)
            .subscribe(function (response) {
            var loggedInteraction = response;
            console.log("---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (Json)");
            console.log(loggedInteraction);
            console.log("---------- ---------- Method : doLog() / interactLoginPost / Parameter-loggedInteraction : response (String)");
            console.log(JSON.stringify(loggedInteraction));
            if (loggedInteraction.id !== null) {
                if (loggedInteraction.surveyStatus === 0) {
                    // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - ON_PREMISE");
                    _this.setSurveyStatusErrorMsg("ON_PREMISE");
                }
                else if (loggedInteraction.surveyStatus === 1) {
                    _this.showLogin = false;
                    _this.loginError = false;
                    _this.interactionId = loggedInteraction.id;
                    _this.interactionResponStatus = loggedInteraction.responStatus;
                    _this.surveyId = loggedInteraction.futureSurvey.id;
                    _this.surveyTitle = loggedInteraction.futureSurvey.title;
                    _this.loggedInviteeName = loggedInteraction.invitee.name;
                    _this.customFields = loggedInteraction.futureSurvey.invitation.inviteeGroup.customFields;
                    _this.invitee = loggedInteraction.invitee;
                    _this.jsonContent = JSON.parse(loggedInteraction.futureSurvey.jsonContent);
                    _this.customField = {};
                    _this.customFields.forEach(function (header) {
                        _this.customField[header.displayName] = _this.invitee[header.fieldName];
                    });
                    console.log(_this.customFields);
                    console.log(_this.customField);
                    if (loggedInteraction.futureSurvey.origin === "1") {
                        _this.origin = "Survey";
                        window.history.replaceState({}, '', '/Survey');
                    }
                    else if (loggedInteraction.futureSurvey.origin === "2") {
                        _this.origin = "E-Vote";
                        window.history.replaceState({}, '', '/eVote');
                    }
                    _this.getSurveyData(_this.interactionId);
                    // this.retrieveSurvey(this.surveyId);
                }
                else if (loggedInteraction.surveyStatus === 2) {
                    // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - FULFILLED");
                }
                else if (loggedInteraction.surveyStatus === 3) {
                    // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - EXPIRED");
                    _this.setSurveyStatusErrorMsg("EXPIRED");
                }
                else if (loggedInteraction.surveyStatus === 4) {
                    // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - OFFLINE");
                    _this.setSurveyStatusErrorMsg("OFFLINE");
                }
            }
            else {
                _this.setSurveyStatusErrorMsg("INVALID");
            }
        }, function (error) {
            _this.setSurveyStatusErrorMsg("INVALID");
        });
    };
    InviteeInteractionViewComponent.prototype.getSurveyData = function (interactionId) {
        var _this = this;
        this.inviteeInteractionViewService
            .getFutureSurveyResultById(interactionId)
            .subscribe(function (response) {
            if (response.content.id) {
                localStorage.setItem("surveyResultId", response.content.id);
                localStorage.setItem("originalResultArray", response.content.originalResultArray);
            }
            else {
                localStorage.setItem("surveyResultId", null);
                localStorage.setItem("originalResultArray", null);
            }
            if (_this.interactionResponStatus === 1) {
                document.getElementById('btnViewSummary').style.display = 'none';
                document.getElementById('btnViewSurvey').style.display = 'none';
                document.getElementById('btnSubmitSurvey').style.display = 'none';
                document.getElementById('btnAnswerLater').style.display = 'none';
                _this.viewSummary();
            }
            else {
                _this.viewSurvey();
            }
            _this.setuptheme();
        }, function (error) { _this.errDialog.showErrorWithMessage(error); });
    };
    InviteeInteractionViewComponent.prototype.viewSurvey = function () {
        var _this = this;
        this.jsonContentJSON = JSON.parse(this.jsonContent);
        console.log("-------------  Before - jsonContentJSON.pages -----------------");
        console.log(this.jsonContentJSON.pages);
        this.jsonContentJSON.pages.forEach(function (element) {
            element.elements.forEach(function (element) {
                if (element.customVisibleName !== 'null') {
                    var header = element.customVisibleName;
                    if (_this.customField[header] === element.customVisibleValue) {
                        element.visible = true;
                    }
                    else {
                        element.visible = false;
                    }
                }
            });
        });
        console.log("------------- After - jsonContentJSON.pages -----------------");
        console.log(this.jsonContentJSON.pages);
        var jsonContent = this.jsonContentJSON;
        this.surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_3__["Model"](jsonContent);
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"].applyTheme("bootstrap");
        var resultArray = [];
        var interactionId = this.interactionId;
        var lastPage = String(this.surveyModel.pages.length - 1);
        localStorage.setItem("onCompleteStatus", "onComplete");
        var thankYouMsg = this.setThankYouMsg("DEFAULT_MSG");
        this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
            var classes = options.cssClasses;
            if (options.question.getType() === "rating") {
                classes.root = "btn-group";
                classes.item = "btn btn-default btn-secondary";
                classes.other = "sv_q_rating_other form-control";
            }
            if (options.question.getType() === "radiogroup") {
                classes.root = "sv_qcbc";
                classes.item = "sv-q-col-1";
                classes.other = "sv_q_radiogroup_other form-control";
            }
            if (options.question.getType() === "checkbox") {
                classes.root = "sv_qcbc";
                classes.item = "sv-q-col-1";
                classes.other = "sv_q_checkbox_other form-control";
            }
            if (options.question.getType() === "matrix") {
                classes.root = "table sv_q_matrix";
            }
            if (options.question.getType() === "comment") {
                classes.root = "form-control";
            }
            if (options.question.getType() === "dropdown") {
                classes.control = "form-control";
                classes.other = "sv_q_dropdown_other form-control";
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
            jsonContent.pages.forEach(function (element) {
                element.elements.forEach(function (element) {
                    var elementArray = {};
                    var eleType = element.type;
                    if (eleType != "html") {
                        var valueArray_1 = [];
                        var qCode = element.qcode;
                        if (qCode != null) {
                            elementArray["type"] = eleType;
                            elementArray["qcode"] = qCode;
                            var answerObj = result.data[element.name];
                            if (answerObj != null) {
                                // ..... Matrix question answer wrapping section.............
                                if (eleType === "matrix") {
                                    for (var answer in answerObj) {
                                        valueArray_1.push(new MatrixBaseTemplate(answer, answerObj[answer]));
                                    }
                                    elementArray["matrixValues"] = valueArray_1;
                                }
                                else {
                                    // ..... Non Matrix question answer wrapping section.............
                                    if (answerObj instanceof Array) {
                                        answerObj.forEach(function (ans) {
                                            valueArray_1.push(new ValueTemplate(ans));
                                        });
                                    }
                                    else {
                                        valueArray_1.push(new ValueTemplate(answerObj));
                                    }
                                    elementArray["values"] = valueArray_1;
                                }
                            }
                            else {
                                // YS : manage non required answering situations
                                if (eleType === "matrix") {
                                    valueArray_1.push(new MatrixBaseTemplate(null, null));
                                    elementArray["matrixValues"] = valueArray_1;
                                }
                                else {
                                    valueArray_1.push(new ValueTemplate(null));
                                    elementArray["values"] = valueArray_1;
                                }
                            }
                            resultArray.push(elementArray);
                        }
                    }
                });
            });
            var submitRequest = new FSAnswer(interactionId, resultArray, JSON.stringify(result.data));
            var interactService = new _invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_2__["InviteeInteractionViewService"]();
            if (localStorage.getItem("surveyResultId") !== "null") {
                interactService.updateAnswers(submitRequest, localStorage.getItem('surveyResultId')).subscribe(function (response) {
                    console.log("SUCCESS");
                    console.log(response);
                }, function (error) {
                    console.log("ERROR");
                    console.log(error);
                });
            }
            else {
                interactService.submitAnswers(submitRequest).subscribe(function (response) {
                    console.log("SUCCESS");
                    localStorage.setItem("surveyResultId", response.id);
                    localStorage.setItem("originalResultArray", response.originalResultArray);
                }, function (error) {
                    console.log("ERROR");
                    console.log(error);
                });
            }
            document.getElementById("surveyElement").innerHTML = thankYouMsg;
        });
        // ................. ON COMPLETE END HERE .........
        if (localStorage.getItem("surveyResultId") !== "null") {
            this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
        }
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["SurveyNG"].render("surveyElement", { model: this.surveyModel });
    };
    InviteeInteractionViewComponent.prototype.viewSummary = function () {
        document.getElementById('btnViewSummary').style.display = 'none';
        if (this.interactionResponStatus === 0) {
            document.getElementById('btnViewSurvey').style.display = 'inline-block';
        }
        else if (this.interactionResponStatus === 1) {
            document.getElementById('finishedSurveyMsg').style.display = 'block';
            document.getElementById('btnViewSurvey').style.display = 'none';
        }
        var jsonContent = this.jsonContentJSON;
        jsonContent.title = "Summary of " + jsonContent.title;
        this.surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_3__["Model"](jsonContent);
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"].applyTheme("bootstrap");
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
        this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
        this.surveyModel.mode = 'display';
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["SurveyNG"].render("surveyElement", { model: this.surveyModel });
    };
    // Save current answers to DB. Also current page number save to "localStorage" with current "interactionId".
    InviteeInteractionViewComponent.prototype.answerLater = function () {
        localStorage.setItem("onCompleteStatus", "answerLater");
        localStorage.setItem("survey_currentPage_" + this.interactionId, this.surveyModel.currentPageNo);
        this.surveyModel.doComplete();
        document.getElementById("surveyElement").innerHTML = this.setThankYouMsg("ANSWER_LATER_MSG");
    };
    InviteeInteractionViewComponent.prototype.submitSurvey = function () {
        var _this = this;
        var interactService = new _invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_2__["InviteeInteractionViewService"]();
        interactService.submitSurvey(this.interactionId).subscribe(function (response) {
            console.log("SUCCESS");
            console.log(response);
            // localStorage.setItem("interactionResponStatus", response.content.responStatus);
            _this.interactionResponStatus = response.content.responStatus;
            document.getElementById("surveyElement").innerHTML = _this.setThankYouMsg("SUBMIT_MSG");
            document.getElementById('btnSubmitSurvey').style.display = 'none';
            document.getElementById('btnViewSummary').style.display = 'inline-block';
            document.getElementById('btnViewSurvey').style.display = 'none';
        }, function (error) {
            console.log("ERROR");
            console.log(error);
        });
    };
    InviteeInteractionViewComponent.prototype.setThankYouMsg = function (msgType) {
        var MSG_PART_1 = '<div class="sv_main sv_bootstrap_css"><form><div class="sv_container"><div class="sv_body sv_completed_page"><h3>';
        var MSG_PART_2 = '</h3></div></div></form></div>';
        switch (msgType) {
            case "ANSWER_LATER_MSG":
                return MSG_PART_1 + "You are Attempting to Answer Later to the " + this.origin + "!" + MSG_PART_2;
            case "SUBMIT_MSG":
                return MSG_PART_1 + "Thank You </br> You have finished the " + this.origin + "!" + MSG_PART_2;
            default:
                return MSG_PART_1 + "The " + this.origin + " is Completed, Click Submit " + this.origin + " to Finish!" + MSG_PART_2;
        }
    };
    InviteeInteractionViewComponent.prototype.setSurveyStatusErrorMsg = function (status) {
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
    };
    InviteeInteractionViewComponent.prototype.setuptheme = function () {
        var mainColor = "#0684C0";
        var mainHoverColor = "#5DAAD2";
        var textColor = "#4a4a4a";
        var headerColor = "#b7b7b7";
        var headerBackgroundColor = "#000000";
        var bodyContainerBackgroundColor = "#f8f8f8";
        var defaultThemeColorsSurvey = survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"].ThemeColors["default"];
        defaultThemeColorsSurvey["$main-color"] = mainColor;
        defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
        defaultThemeColorsSurvey["$text-color"] = textColor;
        defaultThemeColorsSurvey["$header-color"] = headerColor;
        defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
        defaultThemeColorsSurvey["$body-container-background-color"] = bodyContainerBackgroundColor;
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"].applyTheme();
    };
    InviteeInteractionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-invitee-interaction-view",
            template: __webpack_require__(/*! ./invitee-interaction-view.component.html */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_2__["InviteeInteractionViewService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"]])
    ], InviteeInteractionViewComponent);
    return InviteeInteractionViewComponent;
}());

var InviteePart = /** @class */ (function () {
    function InviteePart(username, password) {
        this.username = username;
        this.password = password;
    }
    return InviteePart;
}());

var ValueTemplate = /** @class */ (function () {
    function ValueTemplate(value) {
        this.value = value;
    }
    return ValueTemplate;
}());

var MatrixBaseTemplate = /** @class */ (function () {
    function MatrixBaseTemplate(rowValue, columnValue) {
        this.rowValue = rowValue;
        this.columnValue = columnValue;
    }
    return MatrixBaseTemplate;
}());

var FSAnswer = /** @class */ (function () {
    function FSAnswer(interactionId, futureSurveyAnswers, originalResultArray) {
        this.interactionId = interactionId;
        this.futureSurveyAnswers = futureSurveyAnswers;
        this.originalResultArray = originalResultArray;
    }
    return FSAnswer;
}());



/***/ }),

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InjectorInstance2, InviteeInteractionViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorInstance2", function() { return InjectorInstance2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeInteractionViewModule", function() { return InviteeInteractionViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invitee_interaction_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitee-interaction-view.component */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invitee_interaction_view_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invitee-interaction-view.routing */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.routing.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitee-interaction-view.service */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.service.ts");
/* harmony import */ var _future_survey_future_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../future-survey/future-survey.service */ "./src/app/views/future-survey/future-survey.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InjectorInstance2;
var InviteeInteractionViewModule = /** @class */ (function () {
    function InviteeInteractionViewModule(injector) {
        this.injector = injector;
        InjectorInstance2 = this.injector;
    }
    InviteeInteractionViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_invitee_interaction_view_component__WEBPACK_IMPORTED_MODULE_2__["InviteeInteractionViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_invitee_interaction_view_routing__WEBPACK_IMPORTED_MODULE_4__["InviteeInteractionViewRoute"])
            ],
            providers: [_invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_6__["InviteeInteractionViewService"], _future_survey_future_survey_service__WEBPACK_IMPORTED_MODULE_7__["FutureSurveyService"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], InviteeInteractionViewModule);
    return InviteeInteractionViewModule;
}());



/***/ }),

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.routing.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.routing.ts ***!
  \************************************************************************************/
/*! exports provided: InviteeInteractionViewRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeInteractionViewRoute", function() { return InviteeInteractionViewRoute; });
/* harmony import */ var _invitee_interaction_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitee-interaction-view.component */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.ts");

;
var InviteeInteractionViewRoute = [
    {
        path: '',
        component: _invitee_interaction_view_component__WEBPACK_IMPORTED_MODULE_0__["InviteeInteractionViewComponent"],
        data: { title: 'Invitee Interaction View', breadcrumb: 'Invitee Interaction View' }
    }
];


/***/ }),

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.service.ts ***!
  \************************************************************************************/
/*! exports provided: InviteeInteractionViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeInteractionViewService", function() { return InviteeInteractionViewService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _invitee_interaction_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invitee-interaction-view.module */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteeInteractionViewService = /** @class */ (function () {
    function InviteeInteractionViewService() {
        this.surveyApiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].surveyApiURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
        this.http = _invitee_interaction_view_module__WEBPACK_IMPORTED_MODULE_5__["InjectorInstance2"].get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
    }
    InviteeInteractionViewService.prototype.interactLoginPost = function (loginReq) {
        return this.http
            .post(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/inviteeLogin/", loginReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.getFutureSurveyResultById = function (interactionId) {
        return this.http
            .get(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + interactionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.submitAnswers = function (requestBody) {
        return this.http
            .post(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer", requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.updateAnswers = function (requestBody, id) {
        return this.http
            .put(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + id, requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.submitSurvey = function (id) {
        return this.http
            .put(this.surveyApiUrl + "surveys" + "/futureSurveyInteractionStatusChange/" + id, "Completed")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    InviteeInteractionViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InviteeInteractionViewService);
    return InviteeInteractionViewService;
}());



/***/ })

}]);
//# sourceMappingURL=views-invitee-interaction-view-invitee-interaction-view-module.js.map