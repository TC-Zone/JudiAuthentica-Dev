(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-survey-interaction-survey-interaction-module"],{

/***/ "./src/app/shared/animations/egret-animations.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/egret-animations.ts ***!
  \*******************************************************/
/*! exports provided: egretAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "egretAnimations", function() { return egretAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var egretAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/views/survey-interaction/survey-interaction.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-interaction.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\n      <div class=\"propic text-center\">\n        <img src=\"assets/images/survey_interaction4.png\" alt=\"\">\n      </div>\n      <div class=\"profile-title text-center mb-1\">\n        <div class=\"main-title\">Survey Interaction</div>\n        <div class=\"subtitle mb-05\">Clear Picture Authentica</div>\n        <div class=\"text-muted\"> Provide the interactions for product authentication & respond to E -Vote by facing\n          surveys</div>\n      </div>\n\n      <div class=\"profile-nav\">\n        <mat-nav-list>\n          <mat-list-item routerLink=\"/survey-interaction\" routerLinkActive=\"list-item-active\">\n            <mat-icon>explore</mat-icon>\n            Demo Entrance 1\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item routerLink=\"/survey-interaction\" routerLinkActive=\"list-item-active\">\n            <mat-icon>explore</mat-icon>\n            Demo Entrance 2\n          </mat-list-item>\n          <mat-divider></mat-divider>\n\n        </mat-nav-list>\n      </div>\n    </mat-card>\n  </div>\n\n\n\n\n\n\n\n\n  <!-- Profile Views -->\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n      <mat-card-title>\n        <div class=\"card-title-text\">Survey Catalogue</div>\n        <mat-divider></mat-divider>\n\n        <!-- <div class=\"profile-actions text-right mb-1\">\n                <div class=\"m-333\">\n                  <button mat-raised-button class=\"mb-05\" (click)='openSurveyPopup({},true)' color=\"primary\">Add Survey</button>\n                </div>\n              </div> -->\n\n\n      </mat-card-title>\n      <mat-card-content class=\"p-0\">\n        <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n          [rowHeight]=\"'auto'\" [limit]=\"5\" [rows]=\"surveyRows\">\n\n          <ngx-datatable-column name=\"Survey Topic\" [minWidth]=\"250\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row?.topic}}\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Survey Type\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <mat-chip *ngIf=\"row?.type==='P'\" mat-sm-chip color=\"primary\" [selected]=\"true\">Product Survey</mat-chip>\n              <mat-chip *ngIf=\"row?.type==='V'\" mat-sm-chip color=\"accent\" [selected]=\"true\">E-Vote Survey</mat-chip>\n            </ng-template>\n          </ngx-datatable-column>\n\n\n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <button routerLink=\"/survey-interaction/surveyView/{{row?.id}}/{{row?.type}}/{{ row?.type=='P'? row?.productId : row?.voteId }}\"\n                mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\">\n                <mat-icon>view_headline</mat-icon>\n              </button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n\n\n      </mat-card-content>\n    </mat-card>\n\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/survey-interaction/survey-interaction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-interaction.component.ts ***!
  \**************************************************************************/
/*! exports provided: SurveyInteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyInteractionComponent", function() { return SurveyInteractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _survey_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-interaction.service */ "./src/app/views/survey-interaction/survey-interaction.service.ts");
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
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






var SurveyInteractionComponent = /** @class */ (function () {
    function SurveyInteractionComponent(interactionService, surveyService, loader, errDialog) {
        this.interactionService = interactionService;
        this.surveyService = surveyService;
        this.loader = loader;
        this.errDialog = errDialog;
    }
    SurveyInteractionComponent.prototype.ngOnInit = function () {
        this.getAllSurvey();
    };
    SurveyInteractionComponent.prototype.ngOnDestroy = function () {
        if (this.getAllSurveySub) {
            this.getAllSurveySub.unsubscribe();
        }
    };
    SurveyInteractionComponent.prototype.getAllSurvey = function () {
        var _this = this;
        this.getAllSurveySub = this.surveyService.getAllSurveys().subscribe(function (successResp) {
            _this.surveyRows = successResp.content;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveyInteractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-interaction",
            template: __webpack_require__(/*! ./survey-interaction.component.html */ "./src/app/views/survey-interaction/survey-interaction.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_survey_interaction_service__WEBPACK_IMPORTED_MODULE_2__["SurveyInteractionService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"]])
    ], SurveyInteractionComponent);
    return SurveyInteractionComponent;
}());



/***/ }),

/***/ "./src/app/views/survey-interaction/survey-interaction.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-interaction.module.ts ***!
  \***********************************************************************/
/*! exports provided: SurveyInteractionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyInteractionModule", function() { return SurveyInteractionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _survey_interaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-interaction.component */ "./src/app/views/survey-interaction/survey-interaction.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _survey_interaction_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-interaction.routing */ "./src/app/views/survey-interaction/survey-interaction.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _survey_interaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./survey-interaction.service */ "./src/app/views/survey-interaction/survey-interaction.service.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./survey-viewer/survey-viewer.component */ "./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SurveyInteractionModule = /** @class */ (function () {
    function SurveyInteractionModule() {
    }
    SurveyInteractionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_survey_interaction_routing__WEBPACK_IMPORTED_MODULE_4__["SurveyInteractionRoutes"])
            ],
            declarations: [_survey_interaction_component__WEBPACK_IMPORTED_MODULE_2__["SurveyInteractionComponent"], _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_15__["SurveyViewerComponent"]],
            providers: [_survey_interaction_service__WEBPACK_IMPORTED_MODULE_11__["SurveyInteractionService"], _survey_survey_service__WEBPACK_IMPORTED_MODULE_10__["SurveyService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"], _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_13__["ProductCrudService"], _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_14__["EvoteService"]]
        })
    ], SurveyInteractionModule);
    return SurveyInteractionModule;
}());



/***/ }),

/***/ "./src/app/views/survey-interaction/survey-interaction.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-interaction.routing.ts ***!
  \************************************************************************/
/*! exports provided: SurveyInteractionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyInteractionRoutes", function() { return SurveyInteractionRoutes; });
/* harmony import */ var _survey_interaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey-interaction.component */ "./src/app/views/survey-interaction/survey-interaction.component.ts");
/* harmony import */ var _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-viewer/survey-viewer.component */ "./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.ts");


var SurveyInteractionRoutes = [
    {
        path: "",
        component: _survey_interaction_component__WEBPACK_IMPORTED_MODULE_0__["SurveyInteractionComponent"]
        // children: [
        //   {
        //     path: "surveyView",
        //     component: SurveyViewerComponent,
        //     data: { title: "Survey Viewer", breadcrumb: "Interaction Viewer" }
        //   }
        // ]
    },
    {
        path: "surveyView/:id/:type/:sourceId",
        component: _survey_viewer_survey_viewer_component__WEBPACK_IMPORTED_MODULE_1__["SurveyViewerComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/survey-interaction/survey-interaction.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-interaction.service.ts ***!
  \************************************************************************/
/*! exports provided: SurveyInteractionService, SurveyDetailModel, SourceDetail, SurveyViewModel, QuestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyInteractionService", function() { return SurveyInteractionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailModel", function() { return SurveyDetailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDetail", function() { return SourceDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyViewModel", function() { return SurveyViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModel", function() { return QuestionModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyInteractionService = /** @class */ (function () {
    function SurveyInteractionService(prodService, evoteService, clientService) {
        this.prodService = prodService;
        this.evoteService = evoteService;
        this.clientService = clientService;
    }
    SurveyInteractionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_1__["ProductCrudService"],
            _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_2__["EvoteService"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]])
    ], SurveyInteractionService);
    return SurveyInteractionService;
}());

var SurveyDetailModel = /** @class */ (function () {
    function SurveyDetailModel(id, topic, source, client) {
        this.id = id;
        this.topic = topic;
        this.source = source;
        this.client = client;
    }
    return SurveyDetailModel;
}());

var SourceDetail = /** @class */ (function () {
    function SourceDetail(sourceName, batch, imageName, client) {
        this.sourceName = sourceName;
        this.batch = batch;
        this.imageName = imageName;
        this.client = client;
    }
    return SourceDetail;
}());

var SurveyViewModel = /** @class */ (function () {
    function SurveyViewModel(topic, type, questions) {
        this.topic = topic;
        this.type = type;
        this.questions = questions;
    }
    return SurveyViewModel;
}());

var QuestionModel = /** @class */ (function () {
    function QuestionModel(id, name, answerTemplate) {
        this.id = id;
        this.name = name;
        this.answerTemplate = answerTemplate;
    }
    return QuestionModel;
}());



/***/ }),

/***/ "./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n\n  <div fxFlex=\"100\" *ngFor=\"let item of sourceDetail\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\n\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\n      <div class=\"app-user\">\n        <div class=\"app-user-photo\">\n          <img src=\"assets/images/sq-8.jpg\" alt=\"\">\n        </div>\n        <span class=\"app-user-name mb-05\">\n          {{item.client.name}}\n        </span>\n      </div>\n    </mat-card>\n\n\n\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\n\n      <div class=\"profile-title text-center mb-1\">\n        <div class=\"main-title\">{{item.sourceName}} </div>\n        <div class=\"subtitle mb-05\">Batch Number : {{item.batch}}</div>\n      </div>\n\n      <div class=\"product-photos-wrap\">\n        <div class=\"gallery-thumbnails\" [@animate]=\"{value:'*',params:{delay: '100ms', x:'-100px'}}\">\n          <img src=\"{{item.imageName}}\" alt=\"\">\n        </div>\n      </div>\n\n\n\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" *ngFor=\"let surveyRecord of surveyRecords\" fxFlex.gt-md=\"auto\" fxFlex.gt-sm=\"50\">\n    <mat-card>\n      <mat-card-title>\n        <div class=\"card-title-text\">{{surveyRecord.topic}}</div>\n      </mat-card-title>\n    </mat-card>\n\n    <mat-card>\n      <form [formGroup]=\"surveyViewForm\">\n\n        <input type='hidden' formControlName=\"surveyId\" required>\n\n        <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n\n          <mat-step formArrayName='questions' *ngFor=\"let question of surveyViewForm.controls['questions'].controls; let i=index\"\n            [stepControl]=\"surveyViewForm\">\n            <div [formGroupName]=\"i\">\n\n              <ng-template matStepLabel>{{question.value.name}}</ng-template>\n\n              <input type=\"hidden\" formControlName=\"id\" required>\n\n              <div formArrayName='answers' *ngFor=\"let ansType of ansTemplates | arrayFilter:question.value.answerTypeId:'answer_types'\">\n                <fieldset id=\"id\" *ngIf='ansType.answerTemplateType == \"S\"'>\n                  <div  *ngFor=\"let answer of question.controls['answers'].controls; let j = index\">\n                    <div [formGroupName]=\"i\">\n                      <input *ngIf=\"answer.value.answerTemplateType =='S'\" name=\"id\" value='answer.value.answer.value'\n                        type=\"radio\" formControlName=\"id\">{{answer.value.answer.lable}}\n                    </div>\n                  </div>\n                </fieldset>\n              </div>\n\n              <!-- <mat-radio-group formControlName=\"id\" *ngIf='ansType.answerTemplateType == \"S\"'>\n                  <div *ngFor=\"let answer of question.controls['answers'].controls; let j = index\">\n                    <div [formGroupName]=\"j\">\n                      <mat-radio-button value=\"answer.value.answer.value\">{{answer.value.answer.lable}}</mat-radio-button>\n                    </div>\n                  </div>\n                </mat-radio-group> -->\n\n\n\n\n\n\n\n            </div>\n\n\n          </mat-step>\n\n        </mat-vertical-stepper>\n        <div>\n          <button (click)='printQuestion();'>Next</button>\n        </div>\n      </form>\n\n\n\n    </mat-card>\n  </div>\n\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SurveyViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyViewerComponent", function() { return SurveyViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _survey_interaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../survey-interaction.service */ "./src/app/views/survey-interaction/survey-interaction.service.ts");
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
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









var SurveyViewerComponent = /** @class */ (function () {
    function SurveyViewerComponent(route, prodService, evoteService, clientService, surveyService, fb) {
        this.route = route;
        this.prodService = prodService;
        this.evoteService = evoteService;
        this.clientService = clientService;
        this.surveyService = surveyService;
        this.fb = fb;
        this.sourceDetail = [];
        this.surveyRecords = [];
        this.isLinear = false;
    }
    SurveyViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllAnsTemplates();
        this.route.params.subscribe(function (params) {
            console.log("passed params " + JSON.stringify(params));
            if (params.type === "P") {
                _this.getProductRecord(params.sourceId);
            }
            if (params.type === "V") {
                _this.getEvoteRecord(params.sourceId);
            }
            _this.fetchSurveyRecord(params.id);
        });
    };
    SurveyViewerComponent.prototype.ngOnDestroy = function () {
        if (this.getAnswersTemplatesSub) {
            this.getAnswersTemplatesSub.unsubscribe();
        }
    };
    SurveyViewerComponent.prototype.getAllAnsTemplates = function () {
        var _this = this;
        console.log("CALLED ANS TEMPLATES ");
        this.getAnswersTemplatesSub = this.surveyService
            .getAnswerTemplates()
            .subscribe(function (successResp) {
            _this.ansTemplates = successResp.content;
        });
    };
    SurveyViewerComponent.prototype.getProductRecord = function (productId) {
        var _this = this;
        this.prodService.getProductById(productId).subscribe(function (productResp) {
            var product = productResp.content;
            _this.getClientById(product.client.id, product.name, product.batchNumber, product.imageObject);
        });
    };
    SurveyViewerComponent.prototype.getEvoteRecord = function (evoteId) {
        var _this = this;
        this.evoteService.getEvoteById(evoteId).subscribe(function (evoteResp) {
            var evote = evoteResp.content;
            _this.getClientById(evote.clientId, evote.topic, evote.batchNumber, evote.imageName);
        });
    };
    SurveyViewerComponent.prototype.getClientById = function (clientId, sourceName, batchNumber, imageObject) {
        var _this = this;
        this.clientService.getClientById(clientId).subscribe(function (clientRes) {
            var imageObj = imageObject
                ? "assets/images/survey_interaction4.png"
                : imageObject;
            _this.sourceDetail.unshift(new _survey_interaction_service__WEBPACK_IMPORTED_MODULE_6__["SourceDetail"](sourceName, batchNumber, imageObj, clientRes.content));
            console.log("this.sourceDetail" + _this.sourceDetail);
        });
    };
    SurveyViewerComponent.prototype.fetchSurveyRecord = function (surveyId) {
        var _this = this;
        this.surveyService.getSurveyById(surveyId).subscribe(function (surveyResp) {
            _this.surveyRecords.unshift(new _survey_interaction_service__WEBPACK_IMPORTED_MODULE_6__["SurveyViewModel"](surveyResp.topic, surveyResp.type, surveyResp.questions));
            _this.getAllAnsTemplates();
            _this.initMainForm(surveyId, _this.surveyRecords[0]);
        });
    };
    SurveyViewerComponent.prototype.getTemplate = function (id) {
        var _this = this;
        this.surveyService.getAnsTemplateById(id).subscribe(function (response) {
            _this.ansTemplate = response;
            console.log("anstemplate ");
            console.log(_this.ansTemplate);
        });
        // console.log("ANSWER TEMPS : " + JSON.stringify(this.ansTemplates));
        // return this.ansTemplates.filter(temp => {
        //   return temp.id.indexOf(id) !== -1;
        // });
    };
    SurveyViewerComponent.prototype.initMainForm = function (surveyId, questions) {
        var _this = this;
        console.log("QUESTIONS : ");
        console.log(questions.questions);
        var questionArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        var answers = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        this.surveyViewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            surveyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](surveyId),
            questions: questionArr
        });
        questions.questions.forEach(function (question, qIndex) {
            _this.addQuestion(question);
            _this.surveyService
                .getAnsTemplateById(question.answerTemplate.id)
                .subscribe(function (response) {
                _this.ansTemplate = response;
                console.log("TEMP OBJ :");
                console.log(_this.ansTemplate);
                console.log(_this.ansTemplate.answerTemplateType);
                _this.ansTemplate.answers.forEach(function (answer, ansIndex) {
                    console.log('INDEX : ' + qIndex);
                    _this.addAnswer(qIndex, answer, _this.ansTemplate);
                });
            });
        });
    };
    SurveyViewerComponent.prototype.addQuestion = function (questionObj) {
        var id = questionObj.id;
        var name = questionObj.name;
        var answers = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([]);
        var answerTypeId = questionObj.answerTemplate.id;
        this.surveyViewForm.controls["questions"].push(this.returnQuestion(id, name, answers, answerTypeId));
    };
    SurveyViewerComponent.prototype.returnQuestion = function (id, name, answers, answerTypeId) {
        return this.fb.group({
            id: [id || ""],
            name: [name || ""],
            answers: answers,
            answerTypeId: answerTypeId
        });
    };
    SurveyViewerComponent.prototype.addAnswer = function (questionIndex, answer, ansTemplate) {
        console.log("answers :" + JSON.stringify(ansTemplate));
        console.log(answer);
        ((this.surveyViewForm.controls["questions"].controls[questionIndex]).controls["answers"]).push(this.returnAnswer(answer.id, ansTemplate, answer));
    };
    SurveyViewerComponent.prototype.returnAnswer = function (id, ansTemplate, answer) {
        return this.fb.group({
            id: id,
            answerTemplateType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](ansTemplate.answerTemplateType),
            answer: answer
        });
    };
    SurveyViewerComponent.prototype.printQuestion = function () {
        var con = this.surveyViewForm.controls["questions"];
        var con2 = ((this.surveyViewForm.controls["questions"].controls[0]).controls["answers"].value);
        console.log(con2[0]);
    };
    SurveyViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-viewer",
            template: __webpack_require__(/*! ./survey-viewer.component.html */ "./src/app/views/survey-interaction/survey-viewer/survey-viewer.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_3__["ProductCrudService"],
            _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_4__["EvoteService"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], SurveyViewerComponent);
    return SurveyViewerComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.service.ts":
/*!************************************************!*\
  !*** ./src/app/views/survey/survey.service.ts ***!
  \************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.surveyApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].surveyApiURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
    }
    SurveyService.prototype.getAnswerTemplates = function () {
        return this.http
            .get(this.surveyApiUrl + "answer-templates/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.addNewAnsTemplate = function (templateObj, items) {
        return this.http
            .post(this.surveyApiUrl + "answer-templates/", templateObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateAnsTemplate = function (id, item) {
        return this.http
            .put(this.surveyApiUrl + "answer-templates/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getAnsTemplateById = function (id, items) {
        console.log("by id url : " + this.surveyApiUrl + "answer-templates/" + id);
        return this.http
            .get(this.surveyApiUrl + "answer-templates/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data.content);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.removeAnsTemplate = function (row, items) {
        return this.http
            .delete(this.surveyApiUrl + "answer-templates/" + row.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var i = items.indexOf(row);
            items.splice(i, 1);
            return items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.addNewSurvey = function (surveyObj, items) {
        return this.http.post(this.surveyApiUrl + "surveys", surveyObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateSurveyWithQuestions = function (id, item) {
        console.log("update with ques : " + this.surveyApiUrl + "surveys/" + id);
        return this.http
            .put(this.surveyApiUrl + "surveys/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateSurveyPopup = function (id, item) {
        return this.http
            .put(this.surveyApiUrl + "surveys/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getAllSurveys = function () {
        return this.http
            .get(this.surveyApiUrl + "surveys")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.removeSurvey = function (row, items) {
        return this.http.delete(this.surveyApiUrl + "surveys/" + row.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var i = items.indexOf(row);
            items.splice(i, 1);
            return items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getQuestionById = function (questionId) {
        return this.http
            .get(this.surveyApiUrl + "questions/" + questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getSurveyById = function (surveyId) {
        return this.http.get(this.surveyApiUrl + "surveys/" + surveyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiURL: "productionApi",
    // productApiURL:'https://authentican60aazs63l.ca1.hana.ondemand.com/product/api/',
    // surveyApiURL : 'https://authentican60aazs63l.ca1.hana.ondemand.com/survey/api/',
    //productApiURL: "http://localhost:10001/api/",
    //surveyApiURL: "http://localhost:10002/api/",
    //imageUrl :"http://localhost:10001/",
    productApiURL: "https://productzg4t4ks63a.hana.ondemand.com/product/api/",
    surveyApiURL: "https://surveyzg4t4ks63a.hana.ondemand.com/survey/api/",
    imageUrl: "https://productzg4t4ks63a.hana.ondemand.com/product/"
};


/***/ })

}]);
//# sourceMappingURL=views-survey-interaction-survey-interaction-module.js.map