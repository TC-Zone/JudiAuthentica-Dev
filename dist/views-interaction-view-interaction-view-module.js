(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-interaction-view-interaction-view-module"],{

/***/ "./src/app/views/interaction-view/interaction-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"interactForm\">\r\n  <div class=\"page-wrap height-100 background-survey-signin\" *ngIf=\"showLogin\">\r\n    <div class=\"session-form-hold\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <img src=\"assets/images/signin/logo.jpg\" alt=\"\">\r\n            <p class=\"text-muted m-0\">Sign in to your account</p>\r\n            <h6 *ngIf=\"loginError\" class=\"m-1 form-error-msg\"> Invalid Credentials ! </h6>\r\n          </div>\r\n\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"text\" name=\"username\" matInput placeholder=\"Username\" value=\"\" [formControl]=\"interactForm.controls['username']\"\r\n              required name=\"username\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" value=\"\" [formControl]=\"interactForm.controls['password']\"\r\n              required name=\"password\">\r\n          </mat-form-field>\r\n\r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"doLog()\" [disabled]=\"interactForm.invalid\">Login\r\n            to Survey</button>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div fxFlex=\"100\" fxLayoutAlign=\"center center\" id=\"survey-view-survey\" class=\"background-survey-form\">\r\n  <header>\r\n    <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n      <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n      </div>\r\n      <!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n      <span class=\"example-card-title hidden-xs\">Clear Picture</span>\r\n      <span class=\"example-spacer\"></span>\r\n      <span *ngIf=\"loggedInvitee\" class=\"example-invite\">Hi, {{loggedInvitee}}</span>\r\n    </mat-toolbar>\r\n  </header>\r\n\r\n\r\n\r\n  <div class=\"survey-page-wrap\" *ngIf=\"!showLogin\">\r\n    <div class=\"survey-form-hold\">\r\n      <mat-card id=\"finishedSurveyMsg\" class=\"survey-mat-card\">\r\n        <mat-card-content>\r\n          <h5>The Survey is Previously Submitted </h5>\r\n          <h6>Summary is provided bellow</h6>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"survey-mat-card\">\r\n        <mat-card-content>\r\n          <div id=\"surveyElement\"></div>\r\n          <div id=\"surveyResult\"></div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card-content>\r\n\r\n    <div class=\"pb-1\" style=\"text-align: center\">\r\n      <a id=\"btnViewSummary\" mat-raised-button class=\"mr-1\" (click)=\"viewSummary()\">View Summary</a>\r\n      <a id=\"btnViewSurvey\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">Edit Survey</a>\r\n      <a id=\"btnSubmitSurvey\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"submitSurvey()\">Submit Survey</a>\r\n      <a id=\"btnAnswerLater\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"answerLater()\">Answer Later</a>\r\n    </div>\r\n\r\n\r\n  </mat-card-content>\r\n\r\n\r\n  <div id=\"survey-view-footer\">\r\n    <div class=\"container custom-center\">\r\n      <span>Powered by</span>\r\n      <!-- <img src=\"assets/images/cp_logo_text.png\" alt=\"\"> -->\r\n      <img src=\"assets/images/truverus/TruVerus_Logo_small.png\" alt=\"\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  $.material.init();\r\n</script>"

/***/ }),

/***/ "./src/app/views/interaction-view/interaction-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: InteractionViewComponent, LoginRequest, FSurveyPart, InviteePart, ValueTemplate, MatrixBaseTemplate, FSAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionViewComponent", function() { return InteractionViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSurveyPart", function() { return FSurveyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteePart", function() { return InviteePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueTemplate", function() { return ValueTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixBaseTemplate", function() { return MatrixBaseTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSAnswer", function() { return FSAnswer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interaction-view.service */ "./src/app/views/interaction-view/interaction-view.service.ts");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InteractionViewComponent = /** @class */ (function () {
    function InteractionViewComponent(route, router, interactionViewService, fb, errDialog) {
        this.route = route;
        this.router = router;
        this.interactionViewService = interactionViewService;
        this.fb = fb;
        this.errDialog = errDialog;
        this.showLogin = false;
        this.loginError = false;
        this.isEditable = false;
    }
    InteractionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildInteractForm();
        this.interactForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.interactionId = params["interactionId"];
            _this.surveyId = params["surveyId"];
        });
        localStorage.setItem("surveyResultId", null);
        localStorage.setItem("originalResultArray", null);
        if (this.interactionId) {
            this.getSurveyData(this.interactionId);
            this.viewInteraction(this.interactionId);
        }
        if (this.surveyId) {
            console.log("SURVEY ID : " + this.surveyId);
            this.retrieveSurvey(this.surveyId);
        }
        console.log("NG ON INIT CALLED");
    };
    InteractionViewComponent.prototype.buildInteractForm = function () {
        this.interactForm = this.fb.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    InteractionViewComponent.prototype.getSurveyData = function (interactionId) {
        var _this = this;
        this.interactionViewService
            .getFutureSurveyResultById(interactionId)
            .subscribe(function (response) {
            if (response.content.id) {
                localStorage.setItem("surveyResultId", response.content.id);
                localStorage.setItem("originalResultArray", response.content.originalResultArray);
                _this.surveyResultId = response.content.id;
            }
            else {
                console.log("------------------------------------------------------");
                console.log("First Time");
                console.log("------------------------------------------------------");
            }
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    InteractionViewComponent.prototype.viewInteraction = function (interactionId) {
        var _this = this;
        this.interactionViewService
            .getInteractionById(interactionId)
            .subscribe(function (response) {
            _this.futureSurveyObj = response.content.futureSurvey;
            _this.surveyTitle = _this.futureSurveyObj.title;
            _this.loggedInvitee = response.content.invitee.name;
            console.log("LOGGED INSTANCE - " + _this.loggedInvitee);
            _this.showLogin = true;
            console.log("ID : " + _this.futureSurveyObj.id);
            console.log("title : " + _this.surveyTitle);
            console.log("FUTURE SURVEY OBJ");
        });
    };
    InteractionViewComponent.prototype.doLog = function () {
        var _this = this;
        console.log("CALLED METHOD");
        var password = this.interactForm.get("password").value;
        var username = this.interactForm.get("username").value;
        var fsPart = new FSurveyPart(this.futureSurveyObj.id);
        var inviteePart = new InviteePart(username, password);
        var loginReq = new LoginRequest(this.interactionId, inviteePart, fsPart);
        console.log("Login REQUEST ");
        console.log(loginReq);
        this.interactionViewService
            .interactLoginPost(loginReq)
            .subscribe(function (response) {
            _this.showLogin = false;
            _this.loginError = false;
            var loggedInteraction = response;
            console.log("LOGGED INTERACTION RESPONSE");
            console.log(loggedInteraction);
            console.log(loggedInteraction.responStatus);
            if (loggedInteraction.id !== null) {
                _this.showLogin = false;
                localStorage.setItem("interactionResponStatus", loggedInteraction.responStatus);
                _this.retrieveSurvey(loggedInteraction.futureSurvey.id);
            }
            else {
                // could not find a record for password and interaction id
                _this.showLogin = true;
                _this.loginError = true;
            }
        }, function (error) {
            // this.errors = error;
            _this.loginError = true;
        });
    };
    InteractionViewComponent.prototype.retrieveSurvey = function (surveyId) {
        var _this = this;
        console.log(" retrieveSurvey SURVEY ID : " + surveyId);
        this.interactionViewService
            .getFutureSurveyById(surveyId)
            .subscribe(function (response) {
            _this.showLogin = false;
            _this.futureSurveyObj = response.content;
            _this.jsonContent = JSON.parse(_this.futureSurveyObj.jsonContent);
            _this.surveyTitle = _this.futureSurveyObj.title;
            _this.pageJson = JSON.parse(_this.jsonContent).pages;
            if (localStorage.getItem("interactionResponStatus") === '1') {
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
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
    InteractionViewComponent.prototype.viewSurvey = function () {
        var pageArray = this.pageJson;
        var resultArray = [];
        var interactionId = this.interactionId;
        var surveyResultId;
        var jsonc = JSON.parse(this.jsonContent);
        this.surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_4__["Model"](jsonc);
        var lastPage = String(this.surveyModel.pages.length - 1);
        localStorage.setItem("onCompleteStatus", "onComplete");
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].applyTheme("bootstrap");
        this.surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
            var classes = options.cssClasses;
            if (options.question.getType() === 'rating') {
                classes.root = 'btn-group';
                classes.item = 'btn btn-outline-secondary';
            }
            if (options.question.getType() === 'radiogroup') {
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
        document.getElementById('btnViewSummary').style.display = 'none';
        document.getElementById('btnViewSurvey').style.display = 'none';
        document.getElementById('btnSubmitSurvey').style.display = 'none';
        if (interactionId !== undefined) {
            document.getElementById('btnAnswerLater').style.display = 'inline-block';
            this.surveyModel.currentPage = this.surveyModel.pages[localStorage.getItem("survey_currentPage_" + interactionId)];
        }
        else {
            document.getElementById('btnAnswerLater').style.display = 'none';
        }
        // .............. ON COMPLET START HERE ..........................
        this.surveyModel.onComplete.add(function (result) {
            if (interactionId !== undefined && localStorage.getItem("onCompleteStatus") === "onComplete") {
                localStorage.setItem("survey_currentPage_" + interactionId, lastPage);
            }
            localStorage.setItem("originalResultArray", JSON.stringify(result.data));
            document.getElementById('btnViewSummary').style.display = 'inline-block';
            if (interactionId !== undefined) {
                document.getElementById('btnSubmitSurvey').style.display = 'inline-block';
            }
            else {
                document.getElementById('btnSubmitSurvey').style.display = 'none';
            }
            document.getElementById('btnViewSurvey').style.display = 'none';
            document.getElementById('btnAnswerLater').style.display = 'none';
            console.log("..............SURVEY ANSWER RESULR/.............");
            console.log(result);
            pageArray.forEach(function (element) {
                // console.log(element.elements);
                element.elements.forEach(function (element) {
                    var elementArray = {};
                    var eleType = element.type;
                    console.log("..........ELEMENT TYPE...........");
                    console.log(eleType);
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
                                    console.log("MATRIX ANSWR OB ");
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
            // wrapping up the interaction id and survey answers together
            var submitRequest = new FSAnswer(interactionId, resultArray, JSON.stringify(result.data));
            console.log("...............ANSWER ARRAY.................");
            console.log(resultArray);
            console.log(JSON.stringify(resultArray));
            var interactService = new _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__["InteractionViewService"]();
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
            var thankYouMsg = '<div class="sv_main sv_bootstrap_css">' +
                "<form>" +
                '<div class="sv_container">' +
                '<div class="sv_body sv_completed_page">' +
                '<h3>The Survey is Completed, Click Submit Survey to Finish!</h3>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '</div>';
            document.getElementById("surveyElement").innerHTML = thankYouMsg;
        });
        // ................. ON COMPLETE END HERE .........
        if (localStorage.getItem("surveyResultId") !== "null") {
            this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
        }
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["SurveyNG"].render("surveyElement", { model: this.surveyModel });
    };
    InteractionViewComponent.prototype.viewSummary = function () {
        document.getElementById('btnViewSummary').style.display = 'none';
        if (localStorage.getItem("interactionResponStatus") === '0' && this.interactionId !== undefined) {
            document.getElementById('btnViewSurvey').style.display = 'inline-block';
        }
        else if (localStorage.getItem("interactionResponStatus") === '1') {
            document.getElementById('finishedSurveyMsg').style.display = 'block';
            document.getElementById('btnViewSurvey').style.display = 'none';
            // document.getElementById('btnAnswerLater').style.display = 'none';
            // document.getElementById('btnSubmitSurvey').style.display = 'none';
        }
        var jsonc = JSON.parse(this.jsonContent);
        jsonc.title = "Summary of " + jsonc.title;
        this.surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_4__["Model"](jsonc);
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].applyTheme("bootstrap");
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
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["SurveyNG"].render("surveyElement", { model: this.surveyModel });
    };
    // Save current answers to DB. Also current page number save to "localStorage" with current "interactionId".
    InteractionViewComponent.prototype.answerLater = function () {
        localStorage.setItem("onCompleteStatus", "answerLater");
        localStorage.setItem("survey_currentPage_" + this.interactionId, this.surveyModel.currentPageNo);
        this.surveyModel.doComplete();
        var answerLaterMsg = '<div class="sv_main sv_bootstrap_css">' +
            '<form>' +
            '<div class="sv_container">' +
            '<div class="sv_body sv_completed_page">' +
            '<h3>You are Attempting to Answer Later to the Survey!</h3>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</div>';
        document.getElementById("surveyElement").innerHTML = answerLaterMsg;
    };
    InteractionViewComponent.prototype.submitSurvey = function () {
        var interactService = new _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__["InteractionViewService"]();
        interactService.submitSurvey(this.interactionId).subscribe(function (response) {
            console.log("SUCCESS");
            console.log(response);
            localStorage.setItem("interactionResponStatus", response.content.responStatus);
            var submitMsg = '<div class="sv_main sv_bootstrap_css">' +
                '<form>' +
                '<div class="sv_container">' +
                '<div class="sv_body sv_completed_page">' +
                '<h3>Thank You </br> You have finished the Survey</h3>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '</div>';
            document.getElementById("surveyElement").innerHTML = submitMsg;
            document.getElementById('btnSubmitSurvey').style.display = 'none';
            document.getElementById('btnViewSummary').style.display = 'inline-block';
            document.getElementById('btnViewSurvey').style.display = 'none';
        }, function (error) {
            console.log("ERROR");
            console.log(error);
        });
    };
    InteractionViewComponent.prototype.setuptheme = function () {
        var mainColor = "#0684C0";
        var mainHoverColor = "#5DAAD2";
        var textColor = "#4a4a4a";
        var headerColor = "#b7b7b7";
        var headerBackgroundColor = "#000000";
        var bodyContainerBackgroundColor = "#f8f8f8";
        var defaultThemeColorsSurvey = survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].ThemeColors["default"];
        defaultThemeColorsSurvey["$main-color"] = mainColor;
        defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
        defaultThemeColorsSurvey["$text-color"] = textColor;
        defaultThemeColorsSurvey["$header-color"] = headerColor;
        defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
        defaultThemeColorsSurvey["$body-container-background-color"] = bodyContainerBackgroundColor;
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].applyTheme();
    };
    InteractionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-interaction-view",
            template: __webpack_require__(/*! ./interaction-view.component.html */ "./src/app/views/interaction-view/interaction-view.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__["InteractionViewService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"]])
    ], InteractionViewComponent);
    return InteractionViewComponent;
}());

var LoginRequest = /** @class */ (function () {
    function LoginRequest(id, invitee, futureSurvey) {
        this.id = id;
        this.invitee = invitee;
        this.futureSurvey = futureSurvey;
    }
    return LoginRequest;
}());

var FSurveyPart = /** @class */ (function () {
    function FSurveyPart(id) {
        this.id = id;
    }
    return FSurveyPart;
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

/***/ "./src/app/views/interaction-view/interaction-view.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.module.ts ***!
  \*******************************************************************/
/*! exports provided: InjectorInstance2, InteractionViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorInstance2", function() { return InjectorInstance2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionViewModule", function() { return InteractionViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _interaction_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interaction-view.component */ "./src/app/views/interaction-view/interaction-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interaction_view_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interaction-view.routing */ "./src/app/views/interaction-view/interaction-view.routing.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _interaction_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interaction-view.service */ "./src/app/views/interaction-view/interaction-view.service.ts");
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
var InteractionViewModule = /** @class */ (function () {
    function InteractionViewModule(injector) {
        this.injector = injector;
        InjectorInstance2 = this.injector;
    }
    InteractionViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_interaction_view_component__WEBPACK_IMPORTED_MODULE_2__["InteractionViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_interaction_view_routing__WEBPACK_IMPORTED_MODULE_4__["InteractionViewRoute"])
            ],
            providers: [_interaction_view_service__WEBPACK_IMPORTED_MODULE_6__["InteractionViewService"], _future_survey_future_survey_service__WEBPACK_IMPORTED_MODULE_7__["FutureSurveyService"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], InteractionViewModule);
    return InteractionViewModule;
}());



/***/ }),

/***/ "./src/app/views/interaction-view/interaction-view.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.routing.ts ***!
  \********************************************************************/
/*! exports provided: InteractionViewRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionViewRoute", function() { return InteractionViewRoute; });
/* harmony import */ var _interaction_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction-view.component */ "./src/app/views/interaction-view/interaction-view.component.ts");

;
var InteractionViewRoute = [
    {
        path: 'viewInteraction',
        component: _interaction_view_component__WEBPACK_IMPORTED_MODULE_0__["InteractionViewComponent"],
        data: { title: 'Interaction View', breadcrumb: 'Interaction View' }
    }
];


/***/ }),

/***/ "./src/app/views/interaction-view/interaction-view.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.service.ts ***!
  \********************************************************************/
/*! exports provided: InteractionViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionViewService", function() { return InteractionViewService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interaction_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction-view.module */ "./src/app/views/interaction-view/interaction-view.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InteractionViewService = /** @class */ (function () {
    function InteractionViewService() {
        this.surveyApiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].surveyApiURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
        this.http = _interaction_view_module__WEBPACK_IMPORTED_MODULE_5__["InjectorInstance2"].get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
    }
    InteractionViewService.prototype.getInteractionById = function (interactionId) {
        return this.http
            .get(this.surveyApiUrl + "surveys/futureSurveyInteraction/" + interactionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.getFutureSurveyById = function (surveyId) {
        return this.http
            .get(this.surveyApiUrl + "surveys" + "/futureSurvey/" + surveyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.getFutureSurveyResultById = function (interactionId) {
        return this.http
            .get(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + interactionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    InteractionViewService.prototype.submitAnswers = function (requestBody) {
        return this.http
            .post(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer", requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.updateAnswers = function (requestBody, id) {
        console.log("-----------------------------------------------------");
        console.log(id);
        console.log("-----------------------------------------------------");
        return this.http
            .put(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + id, requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.submitSurvey = function (id) {
        console.log("-----------------------------------------------------");
        console.log(id);
        console.log("-----------------------------------------------------");
        return this.http
            .put(this.surveyApiUrl + "surveys" + "/futureSurveyInteractionStatusChange/" + id, "Completed")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.interactLogin = function (loginReq) {
        return this.http
            .get(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/login/" + loginReq.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService.prototype.interactLoginPost = function (loginReq) {
        return this.http
            .post(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/login/", loginReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InteractionViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InteractionViewService);
    return InteractionViewService;
}());



/***/ })

}]);
//# sourceMappingURL=views-interaction-view-interaction-view-module.js.map