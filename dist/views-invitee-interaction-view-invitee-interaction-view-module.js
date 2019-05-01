(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-invitee-interaction-view-invitee-interaction-view-module"],{

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ----------------------------- invitee-interaction-view login start ----------------------------- -->\r\n<!-- <div id=\"invitee-interaction-view\" *ngIf=\"isVisible\">\r\n  <form [formGroup]=\"interactForm\" *ngIf=\"showLogin && !newErrorMsg\">\r\n    <div class=\"page-wrap height-100 background-survey-signin\" [ngStyle]=\"{ 'background-image': 'url(' + loginBG + ')'}\">\r\n      <div id=\"login-view\" layout=\"row\" layout-align=\"center center\">\r\n        <mat-card class=\"mat\"> -->\r\n<!-- <mat-card-header> -->\r\n<!-- <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" *ngIf=\"clientLogoURLStatus\">\r\n                <img class=\"logo\" [src]=\"imgBaseURL + clientId\" alt=\"\" (error)=\"clientLogoURL=false\">\r\n              </div>\r\n              <div class=\"col-sm-8\">\r\n                <mat-card-title class=\"mat-title\">\r\n                  <h5>{{surveyLoginTitle}}</h5>\r\n                </mat-card-title>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n<!-- </mat-card-header> -->\r\n<!-- </mat-card>\r\n        <mat-card class=\"mat\">\r\n          <div id=\"login-div\">\r\n            <mat-card-content>\r\n              <h6 *ngIf=\"loginError\" class=\"m-1 form-error-msg\"> {{loginErrorMsg}} </h6>\r\n              <mat-form-field class=\"full-width\">\r\n                <input type=\"text\" name=\"username\" matInput placeholder=\"{{ 'USERNAME' | translate }}\" value=\"\"\r\n                  [formControl]=\"interactForm.controls['username']\" required name=\"username\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                <input type=\"password\" name=\"password\" matInput placeholder=\"{{ 'PASSWORD' | translate }}\" value=\"\"\r\n                  [formControl]=\"interactForm.controls['password']\" required name=\"password\">\r\n              </mat-form-field>\r\n\r\n              <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"doLog()\"\r\n                [disabled]=\"interactForm.invalid\">{{\r\n                'LOGINBUTTON' | translate }}</button>\r\n            </mat-card-content>\r\n          </div>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat\" *ngIf=\"this.supportLangs.length !== 1\">\r\n          <div id=\"language\">\r\n            <mat-card-content>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-7\">\r\n                  <mat-label>{{ 'SELECTLANGUAGE' | translate }}</mat-label>\r\n                </div>\r\n                <div class=\"col-sm-5\">\r\n                  <mat-select [(value)]=\"currentLang\" (selectionChange)='changeDefaultLang()'>\r\n                    <mat-option *ngFor=\"let lang of supportLangs\" [value]=\"lang\">{{lang.name}}</mat-option>\r\n                  </mat-select>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </div>\r\n        </mat-card>\r\n        <div id=\"survey-login-footer\">\r\n          <div class=\"container custom-center\">\r\n            <span>{{ 'POWEREDBY' | translate }}</span> -->\r\n<!-- <img src=\"assets/images/cp_logo_text.png\" alt=\"\"> -->\r\n<!-- <img src=\"assets/images/truverus/TruVerus_Logo_small.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </form> -->\r\n<!-- ----------------------------- invitee-interaction-view login end -=----------------------------- -->\r\n\r\n\r\n\r\n<!-- ----------------------------- invitee-interaction-view error start ----------------------------- -->\r\n<!-- <div class=\"page-wrap height-100 background-survey-signin-error\" *ngIf=\"newErrorMsg\"\r\n    [ngStyle]=\"{ 'background-image': 'url(' + errorBG + ')'}\"></div> -->\r\n<!-- ----------------------------- invitee-interaction-view error end ------------------------------- -->\r\n\r\n\r\n\r\n<!-- ----------------------------- invitee-interaction-view survey start ----------------------------- -->\r\n<!-- <div class=\"page-wrap background-survey-form\" *ngIf=\"!showLogin\">\r\n    <div id=\"survey-view-survey\" class=\"height-100\">\r\n\r\n      <header>\r\n        <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div mat-card-avatar class=\"example-header-image\"\r\n              [ngStyle]=\"{ 'background-image': 'url(' + imgBaseURL + clientId + ')'}\"></div>\r\n          </div> -->\r\n<!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n<!-- <span class=\"example-card-title hidden-xs\">Clear Picture</span> -->\r\n<!-- <span class=\"example-spacer\"></span> -->\r\n\r\n\r\n<!-- this is the line that displayed loged user name with 'HI' -->\r\n<!-- ----------------------------------------------------------------------------------------------------------- -->\r\n<!-- <span *ngIf=\"loggedInviteeName\" class=\"example-invite\">{{ 'HI' | translate }}, {{loggedInviteeName}}</span> -->\r\n<!-- ----------------------------------------------------------------------------------------------------------- -->\r\n\r\n        <!-- this is the line that displayed loged user name with 'HI' -->\r\n        <!-- ----------------------------------------------------------------------------------------------------------- -->\r\n        <!-- <span *ngIf=\"loggedInviteeName\" class=\"example-invite\">{{ 'HI' | translate }}, {{loggedInviteeName}}</span> -->\r\n        <!-- ----------------------------------------------------------------------------------------------------------- -->\r\n\r\n<!-- </mat-toolbar>\r\n      </header>\r\n\r\n      <div class=\"survey-page-wrap\">\r\n        <div class=\"survey-form-hold\">\r\n          <mat-card id=\"finishedSurveyMsg\" class=\"survey-mat-card\">\r\n            <mat-card-content>\r\n              <h5 *ngIf=\"origin === 'Survey'\">{{ 'THESURVEYPRVSUB' | translate }}</h5>\r\n              <h5 *ngIf=\"origin !== 'Survey'\">{{ 'THEEVOTEPRVSUB' | translate }}</h5>\r\n              <h6>{{ 'SUMMERYTEXT' | translate }}</h6>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card class=\"survey-mat-card\">\r\n            <mat-card-content>\r\n              <div id=\"surveyElement\"></div>\r\n              <div id=\"surveyResult\"></div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-card-content>\r\n\r\n        <div class=\"pb-1\" style=\"text-align: center\">\r\n          <a id=\"btnViewSummary\" mat-raised-button class=\"mr-1\"\r\n            (click)=\"viewSummary()\">{{ 'VIEWSUMMERY' | translate }}</a>\r\n          <a id=\"btnViewSurvey\" *ngIf=\"origin ==='Survey'\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">{{\r\n          'EDITSURVEY' | translate }}</a>\r\n          <a id=\"btnViewSurvey\" *ngIf=\"origin !=='Survey'\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">{{\r\n          'EDITEVOTE' | translate }}</a>\r\n          <a id=\"btnSubmitSurvey\" *ngIf=\"origin ==='Survey'\" mat-raised-button color=\"primary\" class=\"mr-1\"\r\n            (click)=\"submitSurvey()\">{{\r\n          'SUBMITSURVEY' | translate }}</a>\r\n          <a id=\"btnSubmitSurvey\" *ngIf=\"origin !=='Survey'\" mat-raised-button color=\"primary\" class=\"mr-1\"\r\n            (click)=\"submitSurvey()\">{{\r\n          'SUBMITEVOTE' | translate }}</a>\r\n          <a id=\"btnAnswerLater\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"answerLater()\">{{ 'ANSWERLATER' |\r\n          translate }}</a>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n\r\n      <div id=\"survey-view-footer\">\r\n        <div class=\"container custom-center\">\r\n          <span>{{ 'POWEREDBY' | translate }}</span> -->\r\n<!-- <img src=\"assets/images/cp_logo_text.png\" alt=\"\"> -->\r\n<!-- <img src=\"assets/images/truverus/TruVerus_Logo_small.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div> -->\r\n<!-- ----------------------------- invitee-interaction-view survey end ------------------------------- -->\r\n\r\n\r\n<!-- </div>\r\n\r\n\r\n\r\n\r\n<script>\r\n  $.material.init();\r\n</script> -->\r\n\r\n\r\n<!-- ----------------------------- invitee-interaction-view login start ----------------------------- -->\r\n<div id=\"invitee-interaction-view-main\" *ngIf=\"isVisible\">\r\n  <form [formGroup]=\"interactForm\" *ngIf=\"showLogin && !newErrorMsg\">\r\n    <div class=\"page-wrap height-100 interaction-view-background-signin\" [ngStyle]=\"{ 'background-image': 'url(' + loginBG + ')'}\">\r\n      <div id=\"login\" layout=\"row\" layout-align=\"center center\">\r\n        <mat-card class=\"mat-card-iiv\">\r\n          <!-- <mat-card-header> -->\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" *ngIf=\"clientLogoURLStatus\">\r\n                <img class=\"client_logo\" [src]=\"imgBaseURL + clientId\" alt=\"\" (error)=\"clientLogoURL=false\">\r\n              </div>\r\n              <div class=\"col-sm-8\">\r\n                <mat-card-title class=\"mat-title-iiv\">\r\n                  <h5>{{surveyLoginTitle}}</h5>\r\n                </mat-card-title>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- </mat-card-header> -->\r\n        </mat-card>\r\n        <mat-card class=\"mat-card-iiv\">\r\n          <div id=\"login-div\">\r\n            <mat-card-content>\r\n              <h6 *ngIf=\"loginError\" class=\"m-1 form-error-msg\"> {{loginErrorMsg}} </h6>\r\n              <mat-form-field class=\"full-width\">\r\n                <input type=\"text\" name=\"username\" matInput placeholder=\"{{ 'USERNAME' | translate }}\" value=\"\"\r\n                  [formControl]=\"interactForm.controls['username']\" required name=\"username\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                <input type=\"password\" name=\"password\" matInput placeholder=\"{{ 'PASSWORD' | translate }}\" value=\"\"\r\n                  [formControl]=\"interactForm.controls['password']\" required name=\"password\">\r\n              </mat-form-field>\r\n\r\n              <button mat-raised-button class=\"mat-primary full-width mb-1\" (click)=\"doLog()\" [disabled]=\"interactForm.invalid\">{{\r\n                'LOGINBUTTON' | translate }}</button>\r\n            </mat-card-content>\r\n          </div>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-card-iiv\" *ngIf=\"this.supportLangs.length !== 1\">\r\n          <div id=\"language\">\r\n            <mat-card-content>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-7\">\r\n                  <mat-label>{{ 'SELECTLANGUAGE' | translate }}</mat-label>\r\n                </div>\r\n                <div class=\"col-sm-5\">\r\n                  <mat-select [(value)]=\"currentLang\" (selectionChange)='changeDefaultLang()'>\r\n                    <mat-option *ngFor=\"let lang of supportLangs\" [value]=\"lang\">{{lang.name}}</mat-option>\r\n                  </mat-select>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </div>\r\n        </mat-card>\r\n        <div id=\"survey-login-footer\">\r\n          <div class=\"container custom-center\">\r\n            <span>{{ 'POWEREDBY' | translate }}</span>\r\n            <!-- <img src=\"assets/images/cp_logo_text.png\" alt=\"\"> -->\r\n            <img src=\"assets/images/truverus/TruVerus_Logo_small.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n  <!-- ----------------------------- invitee-interaction-view login end -=----------------------------- -->\r\n\r\n\r\n\r\n  <!-- ----------------------------- invitee-interaction-view error start ----------------------------- -->\r\n  <div class=\"page-wrap height-100 interaction-view-background-signin-error\" *ngIf=\"newErrorMsg\" [ngStyle]=\"{ 'background-image': 'url(' + errorBG + ')'}\"></div>\r\n  <!-- ----------------------------- invitee-interaction-view error end ------------------------------- -->\r\n\r\n\r\n\r\n  <!-- ----------------------------- invitee-interaction-view survey start ----------------------------- -->\r\n  <div class=\"page-wrap background-survey-form survey-view\" *ngIf=\"!showLogin\"  [ngStyle]=\"{ 'background-image': 'url(' + surveyBG + ')'}\">\r\n    <div id=\"survey-view-survey\" class=\"height-100\">\r\n\r\n      <mat-toolbar fxLayoutAlign=\"center center\" matDialogTitle class=\"mat-primary m-0\">\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div mat-card-avatar class=\"header-image\" [ngStyle]=\"{ 'background-image': 'url(' + imgBaseURL + clientId + ')'}\"></div>\r\n        </div>\r\n        <!-- <mat-card-title class=\"example-card-title\">Nova Scotia Engineers</mat-card-title> -->\r\n        <!-- <span class=\"example-card-title hidden-xs\">Clear Picture</span> -->\r\n        <!-- <span class=\"example-spacer\"></span> -->\r\n\r\n\r\n        <!-- this is the line that displayed loged user name with 'HI' -->\r\n        <!-- ----------------------------------------------------------------------------------------------------------- -->\r\n        <!-- <span *ngIf=\"loggedInviteeName\" class=\"example-invite\">{{ 'HI' | translate }}, {{loggedInviteeName}}</span> -->\r\n        <!-- ----------------------------------------------------------------------------------------------------------- -->\r\n\r\n      </mat-toolbar>\r\n\r\n\r\n      <div class=\"survey-page-wrap-iiv\">\r\n        <div class=\"survey-form-hold-iiv\">\r\n          <mat-card id=\"finishedSurveyMsg-iiv\" class=\"survey-mat-card mat-card\">\r\n            <mat-card-content>\r\n              <h5 *ngIf=\"origin === 'Survey'\">{{ 'THESURVEYPRVSUB' | translate }}</h5>\r\n              <h5 *ngIf=\"origin !== 'Survey'\">{{ 'THEEVOTEPRVSUB' | translate }}</h5>\r\n              <h6>{{ 'SUMMERYTEXT' | translate }}</h6>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card class=\"survey-mat-card\">\r\n            <mat-card-content>\r\n              <div id=\"surveyElement\"></div>\r\n              <div id=\"surveyResult\"></div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-card-content>\r\n\r\n        <div class=\"pb-1\" style=\"text-align: center\">\r\n          <a id=\"btnViewSummary\" mat-raised-button class=\"mr-1\" (click)=\"viewSummary()\">{{ 'VIEWSUMMERY' | translate }}</a>\r\n          <a id=\"btnViewSurvey\" *ngIf=\"origin ==='Survey'\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">{{\r\n            'EDITSURVEY' | translate }}</a>\r\n          <a id=\"btnViewSurvey\" *ngIf=\"origin !=='Survey'\" mat-raised-button class=\"mr-1\" (click)=\"viewSurvey()\">{{\r\n            'EDITEVOTE' | translate }}</a>\r\n          <a id=\"btnSubmitSurvey\" *ngIf=\"origin ==='Survey'\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"submitSurvey()\">{{\r\n            'SUBMITSURVEY' | translate }}</a>\r\n          <a id=\"btnSubmitSurvey\" *ngIf=\"origin !=='Survey'\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"submitSurvey()\">{{\r\n            'SUBMITEVOTE' | translate }}</a>\r\n          <a id=\"btnAnswerLater\" mat-raised-button color=\"primary\" class=\"mr-1\" (click)=\"answerLater()\">{{\r\n            'ANSWERLATER' |\r\n            translate }}</a>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n\r\n      <div id=\"survey-view-footer-iiv\">\r\n        <div class=\"container custom-center\">\r\n          <span>{{ 'POWEREDBY' | translate }}</span>\r\n          <!-- <img src=\"assets/images/cp_logo_text.png\" alt=\"\"> -->\r\n          <img src=\"assets/images/truverus/TruVerus_Logo_small.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <!-- ----------------------------- invitee-interaction-view survey end ------------------------------- -->\r\n\r\n  <script>\r\n    $.material.init();\r\n  </script>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _shared_services_survey_future_survey_operational_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/survey/future-survey-operational.service */ "./src/app/shared/services/survey/future-survey-operational.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var InviteeInteractionViewComponent = /** @class */ (function () {
    function InviteeInteractionViewComponent(inviteeInteractionViewService, clientService, fb, errDialog, activeRoute, route, translateService, loader, fsOperationalService) {
        var _this = this;
        this.inviteeInteractionViewService = inviteeInteractionViewService;
        this.clientService = clientService;
        this.fb = fb;
        this.errDialog = errDialog;
        this.activeRoute = activeRoute;
        this.route = route;
        this.translateService = translateService;
        this.loader = loader;
        this.fsOperationalService = fsOperationalService;
        this.showLogin = false;
        this.loginError = false;
        this.newErrorMsg = false;
        this.clientLogoURLStatus = true;
        this.langs = [];
        this.supportLangs = [];
        this.langCardStatus = true;
        this.originMap = new Map();
        this.isVisible = false;
        this.titleJson = null;
        this.loader.open();
        this.originMap.set("Survey", "1");
        this.originMap.set("eVote", "2");
        this.imgBaseURL = this.clientService.imageUrl;
        this.getAllSurveyLangs();
        this.activeRoute.params.subscribe(function (params) {
            _this.publishUrl = params["uniqueName"];
        });
        // --------------- invitee-interaction-view login and survey background ------------------
        // this.loginBG = "";
        // this.surveyBG = "";
        // ---------------------------------------------------------------------------------------
        var currentUrl = this.route.url;
        var urlArr = currentUrl.substring(1).split("/", 2);
        var originStr = urlArr[0];
        this.origin = originStr;
        this.inviteeInteractionViewService
            .getInvitationByUrl(this.originMap.get(originStr), this.publishUrl)
            .subscribe(function (data) {
            console.log(data.content.futureSurvey.status);
            if (data.content.futureSurvey.status === 0) {
                // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - ON_PREMISE");
                _this.setSurveyStatusErrorMsg("ON_PREMISE");
            }
            else if (data.content.futureSurvey.status === 1) {
                console.log(data.content.futureSurvey.id);
                var jsonContent = JSON.parse(data.content.futureSurvey.jsonContent);
                console.log(JSON.parse(jsonContent).title);
                if (typeof (JSON.parse(jsonContent).title) !== "string") {
                    _this.titleJson = JSON.parse(jsonContent).title;
                    _this.surveyLoginTitle = _this.titleJson['default'];
                }
                else {
                    _this.surveyLoginTitle = JSON.parse(jsonContent).title;
                }
                // This response will collect language json array for a SURVEY
                console.log(data.content);
                _this.langJson = JSON.parse(data.content.futureSurvey.languageJson);
                console.log(_this.langJson);
                _this.buildSupportLangArray(_this.langJson);
                console.log(_this.supportLangs);
                console.log(JSON.stringify(_this.supportLangs));
                _this.changeDefaultLang();
                _this.clientId = data.content.futureSurvey.clientId;
                // this.surveyLoginTitle = data.content.futureSurvey.title;
                _this.loader.close();
                _this.isVisible = true;
            }
            else if (data.content.futureSurvey.status === 2) {
                // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - FULFILLED");
            }
            else if (data.content.futureSurvey.status === 3) {
                // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - EXPIRED");
                _this.setSurveyStatusErrorMsg("EXPIRED");
            }
            else if (data.content.futureSurvey.status === 4) {
                // console.log("---------- ---------- Method : doLog() / interactLoginPost / Label : Survey-Status - OFFLINE");
                _this.setSurveyStatusErrorMsg("OFFLINE");
            }
        }, function (error) {
            if (error.error.validationFailures[0].code == "getSurveyByUrl.notExist") {
                _this.setSurveyStatusErrorMsg("INVALID_URL");
            }
            else {
                console.log(error);
                // this.errDialog.showError(error);
            }
            _this.loader.close();
            _this.isVisible = true;
        });
    }
    InviteeInteractionViewComponent.prototype.ngOnInit = function () {
        this.interactForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            language: [""]
        });
        this.showLogin = true;
    };
    InviteeInteractionViewComponent.prototype.ngOnDestroy = function () {
        if (this.getLangsSub) {
            this.getLangsSub.unsubscribe();
        }
    };
    InviteeInteractionViewComponent.prototype.buildSupportLangArray = function (langJson) {
        var _this = this;
        this.langs.forEach(function (element) {
            if (langJson.extra.indexOf(element.code) > -1 ||
                langJson.def === element.code) {
                if (langJson.def === element.code) {
                    _this.defaultLang = element;
                    _this.currentLang = element;
                }
                if (_this.supportLangs.indexOf(element) == -1) {
                    _this.supportLangs.push(element);
                }
            }
        });
        this.addTranslation();
    };
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
    InviteeInteractionViewComponent.prototype.getAllSurveyLangs = function () {
        var _this = this;
        this.getLangsSub = this.inviteeInteractionViewService
            .getAllLangs()
            .subscribe(function (data) {
            _this.langs = JSON.parse(JSON.stringify(data.content));
        });
    };
    InviteeInteractionViewComponent.prototype.changeDefaultLang = function () {
        localStorage.setItem("surveySelectedLang", JSON.stringify(this.currentLang));
        this.translateService.use(this.currentLang.code);
        if (this.titleJson !== null) {
            if (typeof (this.titleJson) !== "string") {
                if (this.titleJson.hasOwnProperty(this.currentLang.code)) {
                    this.surveyLoginTitle = this.titleJson[this.currentLang.code];
                }
                else {
                    this.surveyLoginTitle = this.titleJson["default"];
                }
            }
            else {
                // jsonContent.title = this.translateService.instant("SUMMERYTITLE") + " " + jsonContent.title;
            }
        }
    };
    InviteeInteractionViewComponent.prototype.doLog = function () {
        var _this = this;
        var username = this.interactForm.get("username").value;
        var password = this.interactForm.get("password").value;
        var inviteePart = new InviteePart(username, password);
        this.inviteeInteractionViewService.interactLoginPost(inviteePart).subscribe(function (response) {
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
                    _this.customFields =
                        loggedInteraction.futureSurvey.invitation.inviteeGroup.customFields;
                    _this.invitee = loggedInteraction.invitee;
                    _this.jsonContent = JSON.parse(loggedInteraction.futureSurvey.jsonContent);
                    _this.customField = {};
                    _this.customFields.forEach(function (header) {
                        _this.customField[header.displayName] = _this.invitee[header.fieldName];
                    });
                    console.log(_this.customFields);
                    console.log(_this.customField);
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
                _this.setSurveyStatusErrorMsg("INVALID_CREDENTIALS");
            }
        }, function (error) {
            _this.setSurveyStatusErrorMsg("INVALID_CREDENTIALS");
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
            document.getElementById("finishedSurveyMsg-iiv").style.display = "none";
            if (_this.interactionResponStatus === 1) {
                document.getElementById("btnViewSummary").style.display = "none";
                document.getElementById("btnViewSurvey").style.display = "none";
                document.getElementById("btnSubmitSurvey").style.display = "none";
                document.getElementById("btnAnswerLater").style.display = "none";
                console.log("THIS JSON : IN getSurveyData .......................... ");
                console.log(_this.jsonContent);
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
    InviteeInteractionViewComponent.prototype.viewSurvey = function () {
        var _this = this;
        this.fsOperationalService.optionUnselect(survey_angular__WEBPACK_IMPORTED_MODULE_3__);
        this.jsonContentJSON = JSON.parse(this.jsonContent);
        console.log("-------------  Before - jsonContentJSON.pages -----------------");
        console.log(this.jsonContentJSON.pages);
        this.jsonContentJSON.pages.forEach(function (element) {
            element.elements.forEach(function (element) {
                if (element.customVisibleName !== "null") {
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
        console.log(localStorage.getItem("surveySelectedLang"));
        this.surveyModel.locale = JSON.parse(localStorage.getItem("surveySelectedLang")).code;
        // console.log(this.surveyModel);
        var resultArray = [];
        var interactionId = this.interactionId;
        var lastPage = String(this.surveyModel.pages.length - 1);
        localStorage.setItem("onCompleteStatus", "onComplete");
        var thankYouMsg = this.setThankYouMsg("DEFAULT_MSG");
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
        this.surveyModel.currentPage = this.surveyModel.pages[localStorage.getItem("survey_currentPage_" + interactionId)];
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
                interactService
                    .updateAnswers(submitRequest, localStorage.getItem("surveyResultId"))
                    .subscribe(function (response) {
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
        document.getElementById("btnViewSummary").style.display = "none";
        if (this.interactionResponStatus === 0) {
            document.getElementById("btnViewSurvey").style.display = "inline-block";
        }
        else if (this.interactionResponStatus === 1) {
            document.getElementById("finishedSurveyMsg-iiv").style.display = "block";
            document.getElementById("btnViewSurvey").style.display = "none";
        }
        // let jsonContent = this.jsonContentJSON;
        var jsonContent = JSON.parse(this.jsonContent);
        if (typeof (jsonContent.title) !== "string") {
            if (jsonContent.title.hasOwnProperty(this.currentLang.code)) {
                jsonContent.title = this.translateService.instant('SUMMERYTITLE') + " " + jsonContent.title[this.currentLang.code];
            }
            else {
                jsonContent.title = this.translateService.instant("SUMMERYTITLE") + " " + jsonContent.title["default"];
            }
        }
        else {
            jsonContent.title = this.translateService.instant("SUMMERYTITLE") + " " + jsonContent.title;
        }
        // ............... Change Survey default Lang to Current Lang ............
        this.surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_3__["Model"](jsonContent);
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"].applyTheme("bootstrap");
        this.surveyModel.locale = JSON.parse(localStorage.getItem("surveySelectedLang")).code;
        // .......................................................................
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
        this.surveyModel.data = JSON.parse(localStorage.getItem("originalResultArray"));
        this.surveyModel.mode = "display";
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
            document.getElementById("btnSubmitSurvey").style.display = "none";
            document.getElementById("btnViewSummary").style.display =
                "inline-block";
            document.getElementById("btnViewSurvey").style.display = "none";
        }, function (error) {
            console.log("ERROR");
            console.log(error);
        });
    };
    InviteeInteractionViewComponent.prototype.setThankYouMsg = function (msgType) {
        var MSG_PART_1 = '<div class="sv_main sv_bootstrap_css"><form><div class="sv_container"><div class="sv_body sv_completed_page"><h3>';
        var MSG_PART_2 = "</h3></div></div></form></div>";
        var msgText = "";
        switch (msgType) {
            case "ANSWER_LATER_MSG":
                if (this.origin === "Survey") {
                    msgText = this.translateService.instant("ANSWERLATERMSG");
                }
                else {
                    msgText = this.translateService.instant("ANSWERLATERMSG");
                }
                return MSG_PART_1 + msgText + "!" + MSG_PART_2;
            case "SUBMIT_MSG":
                if (this.origin === "Survey") {
                    msgText =
                        this.translateService.instant("THANKYOU") +
                            "</br>" +
                            this.translateService.instant("SUBMITMSGSURVEY");
                }
                else {
                    msgText =
                        this.translateService.instant("THANKYOU") +
                            "</br>" +
                            this.translateService.instant("SUBMITMSGEVOTE");
                }
                return MSG_PART_1 + msgText + "!" + MSG_PART_2;
            default:
                if (this.origin === "Survey") {
                    msgText = this.translateService.instant("COMPLETEMSGSURVEY");
                }
                else {
                    msgText = this.translateService.instant("COMPLETEMSGEVOTE");
                }
                return MSG_PART_1 + msgText + "!" + MSG_PART_2;
        }
    };
    InviteeInteractionViewComponent.prototype.setSurveyStatusErrorMsg = function (status) {
        this.loginError = true;
        switch (status) {
            case "INVALID_CREDENTIALS":
                this.loginErrorMsg =
                    this.translateService.instant("INVALIDCREDENTIAL") + " !";
                break;
            case "ON_PREMISE":
                this.newErrorMsg = true;
                this.errorBG = "assets/images/error_bg/ON_PREMISE.jpg";
                break;
            case "EXPIRED":
                this.newErrorMsg = true;
                this.errorBG = "assets/images/error_bg/EXPIRED.jpg";
                break;
            case "OFFLINE":
                this.newErrorMsg = true;
                this.errorBG = "assets/images/error_bg/OFFLINE.jpg";
                break;
            case "INVALID_URL":
                this.newErrorMsg = true;
                this.errorBG = "assets/images/error_bg/INVALID_URL.jpg";
                break;
            default:
                this.loginError = false;
                break;
        }
        this.loader.close();
        this.isVisible = true;
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
    // add tranlation for static element in the survey view
    InviteeInteractionViewComponent.prototype.addTranslation = function () {
        var languages = [];
        this.supportLangs.forEach(function (element) {
            languages.push(element.code);
        });
        this.translateService.addLangs(languages);
        if (this.defaultLang) {
            this.translateService.setDefaultLang(this.defaultLang.code);
            this.translateService.use(this.defaultLang.code);
        }
        this.interactForm.controls["language"].setValue(this.defaultLang.code);
    };
    InviteeInteractionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-invitee-interaction-view",
            template: __webpack_require__(/*! ./invitee-interaction-view.component.html */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.component.html"),
            styles: [__webpack_require__(/*! ./invitee-interaction-view.scss */ "./src/app/views/invitee-interaction-view/invitee-interaction-view.scss")],
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_2__["InviteeInteractionViewService"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_9__["AppLoaderService"],
            _shared_services_survey_future_survey_operational_service__WEBPACK_IMPORTED_MODULE_10__["FutureSurveyOperationalService"]])
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

function getBase64ImageFromUrl(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(imageUrl)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.addEventListener("load", function () {
                                resolve(reader.result);
                            }, false);
                            reader.onerror = function () {
                                return reject(_this);
                            };
                            reader.readAsDataURL(blob);
                        })];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InjectorInstance2, HttpLoaderFactory, InviteeInteractionViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorInstance2", function() { return InjectorInstance2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _shared_services_survey_future_survey_operational_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/survey/future-survey-operational.service */ "./src/app/shared/services/survey/future-survey-operational.service.ts");
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
// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, './assets/i18n/interaction-view/', '.json');
}
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
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_invitee_interaction_view_routing__WEBPACK_IMPORTED_MODULE_4__["InviteeInteractionViewRoute"])
            ],
            providers: [_invitee_interaction_view_service__WEBPACK_IMPORTED_MODULE_6__["InviteeInteractionViewService"], _future_survey_future_survey_service__WEBPACK_IMPORTED_MODULE_7__["FutureSurveyService"], _client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"], _shared_services_survey_future_survey_operational_service__WEBPACK_IMPORTED_MODULE_13__["FutureSurveyOperationalService"]]
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

/***/ "./src/app/views/invitee-interaction-view/invitee-interaction-view.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/invitee-interaction-view/invitee-interaction-view.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrap {\n  display: flex;\n  padding: 0px; }\n\n#invitee-interaction-view-main .interaction-view-background-signin {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/clear-picture/common/TruVerus-Survey-Background.jpg\") !important;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n#invitee-interaction-view-main .background-survey-form {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/clear-picture/common/TruVerus-Survey-Background.jpg\") !important;\n  background-size: cover !important;\n  background-repeat: no-repeat !important;\n  overflow: auto;\n  height: 100vh; }\n\n#invitee-interaction-view-main .interaction-view-background-signin-error {\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n#invitee-interaction-view-main .mat-card {\n  padding: 0px; }\n\n#invitee-interaction-view-main #survey-view-survey {\n  overflow: auto;\n  height: 100%;\n  width: 100%; }\n\n#invitee-interaction-view-main #survey-view-survey .mat-card:not([class*=\"mat-elevation-z\"]) {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n#invitee-interaction-view-main #survey-view-survey .mat-card {\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n    display: block;\n    position: relative;\n    padding: 24px;\n    border-radius: 2px; }\n\n#invitee-interaction-view-main #survey-view-survey .survey-mat-card {\n    background: #048fc721 !important;\n    border-radius: 20px !important; }\n\n#login {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n#login .client_logo {\n    padding: 20px 20px 20px 20px;\n    width: 120px;\n    height: 120px;\n    display: block;\n    margin: auto; }\n\n#login .mat-title-iiv {\n    padding: 30px 0px 0px;\n    text-align: center; }\n\n#login .header {\n    height: 120px; }\n\n#login-div {\n  padding: 30px 30px 30px 30px; }\n\n#language {\n  padding: 20px 20px 20px 70px; }\n\n#language .mat-select {\n    font-weight: bold; }\n\n.survey-login {\n  border-radius: 5px !important; }\n\n.title {\n  padding: 20px 20px 20px 20px; }\n\n.mat-card-iiv {\n  margin-top: 12px !important;\n  max-width: 70% !important;\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n#survey-login-footer {\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 100px 0px 20px; }\n\n#survey-login-footer img {\n    display: block;\n    margin: auto;\n    width: 100px; }\n\n#survey-login-footer span {\n    font-size: 10px; }\n\n@media screen and (min-width: 768px) {\n  #login {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    width: 700px; }\n    #login #language {\n      padding: 20px 20px 20px 20px; }\n      #login #language .mat-select {\n        font-weight: bold; }\n    #login .client_logo {\n      padding: 20px 20px 20px 20px;\n      width: 120px;\n      height: 120px;\n      display: block;\n      margin: auto; }\n    #login .mat-title-iiv {\n      padding: 30px 0px 0px; }\n    #login .header {\n      height: 120px; } }\n\n.header-image {\n  background-color: #ffffff;\n  background-size: cover;\n  border-radius: 20px !important;\n  margin-top: 60px !important;\n  width: 100px !important;\n  height: 100px !important;\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n.survey-page-wrap-iiv {\n  display: flex;\n  padding: 60px 1rem;\n  margin-top: 60px !important; }\n\nmat-toolbar {\n  position: fixed;\n  z-index: 999; }\n\n.survey-form-hold-iiv {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto; }\n\n#finishedSurveyMsg-iiv {\n  text-align: center;\n  margin-bottom: 18px;\n  padding: 10px;\n  display: none; }\n\n#finishedSurveyMsg-iiv h5 {\n    color: #000; }\n\n#survey-view-footer-iiv {\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 100px 20px 20px;\n  margin-bottom: 1px; }\n\n#survey-view-footer-iiv img {\n    display: block;\n    margin: auto;\n    width: 200px; }\n\n#survey-view-footer-iiv span {\n    font-size: 10px; }\n"

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
    InviteeInteractionViewService.prototype.getAllLangs = function () {
        return this.http
            .get(this.surveyApiUrl + "surveys/langs")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.getSurveyByID = function (id) {
        return this.http.get(this.surveyApiUrl + "surveys/futureSurvey/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    InviteeInteractionViewService.prototype.getInvitationByUrl = function (origin, url) {
        return this.http
            .get(this.surveyApiUrl + "surveys" + "/futureSurveyInvitation/" + origin + "/" + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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