(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-interaction-view-interaction-view-module"],{

/***/ "./src/app/views/interaction-view/interaction-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"interactForm\">\r\n  <div class=\"page-wrap height-100 background-survey-signin\" *ngIf=\"showLogin\">\r\n    <div class=\"session-form-hold\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <img src=\"assets/images/signin/logo.jpg\" alt=\"\">\r\n            <p class=\"text-muted m-0\">Sign in to your account</p>\r\n            <small *ngIf=\"!loginResult\" class=\" m-0 form-error-msg\"> Invalid Access Code ! </small>\r\n          </div>\r\n\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"password\" name=\"password\" matInput placeholder=\"Access Code\" value=\"\" [formControl]=\"interactForm.controls['password']\"\r\n              required name=\"password\">\r\n          </mat-form-field>\r\n          <small *ngIf=\"interactForm.controls['password'].hasError('required') && interactForm.controls['password'].touched\"\r\n            class=\"form-error-msg\">\r\n            Access code is required </small>\r\n\r\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"doLog()\" [disabled]=\"interactForm.invalid\">Login\r\n            to Survey</button>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<!-- <div fxFlex=\"100\" fxLayoutAlign=\"center center\" id=\"survey-view-survey\" class=\"background-survey-form\">\r\n  <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{ surveyTitle }}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n\r\n  <div class=\"survey-page-wrap height-100\" *ngIf=\"!showLogin\">\r\n    <div class=\"survey-form-hold\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div id=\"surveyElement\"></div>\r\n          <div id=\"surveyResult\"></div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"survey-view-footer\">\r\n    <div class=\"container custom-center\">\r\n      <span>Powered by</span>\r\n      <img src=\"assets/images/cp_logo_text.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n</div> -->\r\n\r\n<div fxFlex=\"100\" fxLayoutAlign=\"center center\" id=\"survey-view-survey\" class=\"background-survey-form\">\r\n<header>\r\n  <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n      <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n      </div>\r\n      <!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n      <span class=\"example-card-title hidden-xs\">Clear Picture</span>\r\n      <span class=\"example-spacer\"></span>\r\n      <span *ngIf=\"loggedInvitee\" class=\"example-invite\">Hi, {{loggedInvitee}}</span>\r\n  </mat-toolbar>\r\n</header>\r\n\r\n\r\n\r\n    <!-- <div class=\"col-md-2\"> -->\r\n        <!-- <mat-card class=\"example-card\"> -->\r\n            <!-- <mat-card-header> -->\r\n              <!-- <div mat-card-avatar class=\"example-header-image\"> -->\r\n              <!-- </div> -->\r\n              <!-- <br> -->\r\n              <!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n\r\n            <!-- </mat-card-header> -->\r\n        <!-- </mat-card> -->\r\n    <!-- </div> -->\r\n    <!-- <div class=\"col-md-10\"> -->\r\n      <div class=\"survey-page-wrap height-100\" *ngIf=\"!showLogin\">\r\n          <div class=\"survey-form-hold\">\r\n            <mat-card class=\"survey-mat-card\">\r\n              <mat-card-content>\r\n                <div id=\"surveyElement\"></div>\r\n                <div id=\"surveyResult\"></div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n      </div>\r\n    <!-- </div> -->\r\n\r\n\r\n  <div id=\"survey-view-footer\">\r\n    <div class=\"container custom-center\">\r\n      <span>Powered by</span>\r\n      <img src=\"assets/images/cp_logo_text.png\" alt=\"\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  $.material.init();\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/views/interaction-view/interaction-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/interaction-view/interaction-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: InteractionViewComponent, LoginRequest, FSurveyPart, ValueTemplate, MatrixBaseTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionViewComponent", function() { return InteractionViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSurveyPart", function() { return FSurveyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueTemplate", function() { return ValueTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixBaseTemplate", function() { return MatrixBaseTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interaction-view.service */ "./src/app/views/interaction-view/interaction-view.service.ts");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function InteractionViewComponent(route, router, interactionViewService, fb) {
        this.route = route;
        this.router = router;
        this.interactionViewService = interactionViewService;
        this.fb = fb;
        this.showLogin = false;
        this.loginResult = true;
    }
    InteractionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildInteractForm();
        this.interactForm = this.fb.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        console.log("NG ON INIT CALLED");
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.interactionId = params["interactionId"];
            _this.surveyId = params["surveyId"];
            _this.preview = params["preview"];
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
    };
    InteractionViewComponent.prototype.viewInteraction = function (interactionId) {
        var _this = this;
        this.interactionViewService
            .getInteractionById(interactionId)
            .subscribe(function (response) {
            console.log("interaction response ");
            console.log(response);
            _this.futureSurveyObj = response.content.futureSurvey;
            _this.surveyTitle = _this.futureSurveyObj.title;
            _this.loggedInvitee = response.content.invitee.name;
            console.log('LOGGED INSTANCE - ' + _this.loggedInvitee);
            if (_this.preview === undefined) {
                _this.showLogin = true;
                localStorage.setItem("futureSurveyid", "");
                localStorage.setItem("surveyResult", "");
            }
            else {
                if (localStorage.getItem("futureSurveyid") === "") {
                    window.location.href = window.location.href.split("&")[0];
                }
                else {
                    _this.retrieveSurvey(localStorage.getItem("futureSurveyid"));
                }
            }
            console.log("ID : " + _this.futureSurveyObj.id);
            console.log("title : " + _this.surveyTitle);
            console.log("FUTURE SURVEY OBJ");
        });
    };
    InteractionViewComponent.prototype.retrieveSurvey = function (surveyId) {
        var _this = this;
        console.log(" retrieveSurvey SURVEY ID : " + surveyId);
        this.interactionViewService
            .getFutureSurveyById(surveyId)
            .subscribe(function (response) {
            _this.showLogin = false;
            // this.showSurvey = true;
            _this.futureSurveyObj = response.content;
            _this.jsonContent = JSON.parse(_this.futureSurveyObj.jsonContent);
            _this.surveyTitle = _this.futureSurveyObj.title;
            _this.pageJson = JSON.parse(_this.jsonContent).pages;
            _this.viewSurvey();
            _this.setuptheme();
        });
    };
    InteractionViewComponent.prototype.buildInteractForm = function () {
        this.interactForm = this.fb.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    // ........... Survey Respond view should be re architecturing with following certin Angular techniquees .............
    InteractionViewComponent.prototype.viewSurvey = function () {
        var pageArray = this.pageJson;
        var resultArray = [];
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
        var jsonc = JSON.parse(this.jsonContent);
        // jsonc.completedHtml = htmlValue;
        if (this.preview) {
            jsonc.title = "Summary of " + jsonc.title;
        }
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_4__["Model"](jsonc);
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].applyTheme("bootstrap");
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
            if (options.question.getType() === "matrix") {
                classes.root = "table sv_q_matrix";
            }
        });
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["SurveyNG"].render("surveyElement", { model: surveyModel });
        // .............. ON COMPLET START HERE ..........................
        surveyModel.onComplete.add(function (result) {
            localStorage.setItem("surveyResult", JSON.stringify(result.data));
            document.getElementById("surveyResult").innerHTML = "<a class='btn sv_preview_btn' href='" + window.location.href + "&preview=true' >View Summary</a>";
            console.log("..............SURVEY ANSWER RESULR/.............");
            console.log(result);
            // ------- new start --------
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
            // ------- new end --------
            console.log("...............ANSWER ARRAY.................");
            console.log(resultArray);
            console.log(JSON.stringify(resultArray));
            var interactService = new _interaction_view_service__WEBPACK_IMPORTED_MODULE_3__["InteractionViewService"]();
            interactService.submitAnswers(resultArray).subscribe(function (response) {
                console.log("SUCCESS");
                console.log(response);
            }, function (error) {
                console.log("ERROR");
                console.log(error);
                //alert("Something went wrong !");
            });
        });
        // ................. ON COMPLETE END HERE .........
        if (this.preview) {
            surveyModel.data = JSON.parse(localStorage.getItem("surveyResult"));
            surveyModel.mode = 'display';
        }
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
        // console.log("--- theme color setting---");
        // console.log(defaultThemeColorsSurvey);
        // console.log(Survey.StylesManager.ThemeColors);
        // console.log(Survey);
        survey_angular__WEBPACK_IMPORTED_MODULE_4__["StylesManager"].applyTheme();
    };
    InteractionViewComponent.prototype.doLog = function () {
        var _this = this;
        console.log("CALLED METHOD");
        var password = this.interactForm.get("password").value;
        var fsPart = new FSurveyPart(this.futureSurveyObj.id);
        var loginReq = new LoginRequest(this.interactionId, password, fsPart);
        console.log("Login REQUEST ");
        console.log(loginReq);
        this.interactionViewService
            .interactLoginPost(loginReq)
            .subscribe(function (response) {
            _this.showLogin = false;
            _this.loginResult = true;
            var loggedInteraction = response;
            console.log("LOGGED INTERACTION RESPONSE");
            console.log(loggedInteraction);
            if (loggedInteraction != null) {
                if (loggedInteraction.responStatus == 1) {
                    // Situation all ready responded to survey
                }
                else {
                    _this.showLogin = false;
                    localStorage.setItem("futureSurveyid", loggedInteraction.futureSurvey.id);
                    _this.retrieveSurvey(loggedInteraction.futureSurvey.id);
                }
            }
            else {
                // could not find a record for password and interaction id
            }
        }, function (error) {
            // this.errors = error;
            _this.loginResult = false;
        });
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], InteractionViewComponent);
    return InteractionViewComponent;
}());

var LoginRequest = /** @class */ (function () {
    function LoginRequest(id, password, futureSurvey) {
        this.id = id;
        this.password = password;
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
    InteractionViewService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    InteractionViewService.prototype.submitAnswers = function (answers) {
        return this.http
            .post(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer", answers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            return data.content;
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