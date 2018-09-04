(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-survey-survey-module"],{

/***/ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/answer-template-popup/answer-template-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n<form [formGroup]=\"ansTemplateForm\" (ngSubmit)=\"submit()\">\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <div class=\"text-muted\">\r\n          Create your answer template by adding template name,type and answers. answers need to have a lable,value and option value\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"ansTemplateForm.controls['name']\" required name=\"name\" placeholder=\"Answer template name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"ansTemplateForm.controls['answerTemplateType']\" required name=\"answerTemplateType\" placeholder=\"Answer template type\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div fxFlex=\"100\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" formArrayName='answers' *ngFor=\"let answer of ansTemplateForm.controls['answers'].controls; let i=index\">\r\n\r\n        <mat-card-title>\r\n          <small class=\"text-muted\"> Answer {{i + 1}}</small>\r\n        </mat-card-title>\r\n\r\n        <div [formGroupName]=\"i\">\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput formControlName='lable' required name=\"lable\" placeholder=\"Answer lable\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput formControlName='value' required name=\"value\" placeholder=\"Answer value\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput formControlName='optionNumber' required name=\"optionNumber\" placeholder=\"Answer option\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-button-toggle  (click)='addAnsTemplate()' value=\"add\">\r\n              <mat-icon>add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle *ngIf=\"ansTemplateForm.controls['answers'].controls.length > 1\" (click)=removeAnsTemplate(i) value=\"remove\">\r\n              <mat-icon>remove</mat-icon>\r\n            </mat-button-toggle>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"ansTemplateForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AnswerTemplatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerTemplatePopupComponent", function() { return AnswerTemplatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AnswerTemplatePopupComponent = /** @class */ (function () {
    function AnswerTemplatePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    AnswerTemplatePopupComponent.prototype.ngOnInit = function () {
        this.buildAnsTemplateform(this.data.payload);
        this.hideRemoveButton();
    };
    AnswerTemplatePopupComponent.prototype.buildAnsTemplateform = function (fieldItem) {
        this.ansTemplateForm = this.fb.group({
            name: [fieldItem.name || ""],
            answerTemplateType: [fieldItem.answerTemplateType || ""],
            answers: this.fb.array([])
        });
        this.patch(fieldItem.answers);
    };
    AnswerTemplatePopupComponent.prototype.patch = function (fields) {
        var _this = this;
        var control = this.ansTemplateForm.controls["answers"];
        if (!fields) {
            control.push(this.initAnswerTemplate());
            return;
        }
        fields.forEach(function (x) {
            control.push(_this.initAnswerTemplate(x.lable, x.value, x.optionNumber));
        });
    };
    AnswerTemplatePopupComponent.prototype.initAnswerTemplate = function (lable, value, optionNumber) {
        return this.fb.group({
            lable: [lable || ""],
            value: [value || ""],
            optionNumber: [optionNumber || ""]
        });
    };
    AnswerTemplatePopupComponent.prototype.addAnsTemplate = function () {
        var answer = this.ansTemplateForm.controls["answers"];
        answer.push(this.initAnswerTemplate());
    };
    AnswerTemplatePopupComponent.prototype.removeAnsTemplate = function (index) {
        var answer = this.ansTemplateForm.controls["answers"];
        answer.removeAt(index);
    };
    AnswerTemplatePopupComponent.prototype.hideRemoveButton = function () {
        return this.ansTemplateForm.controls["answers"].value.length > 1;
    };
    AnswerTemplatePopupComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.ansTemplateForm.value));
        this.dialogRef.close(this.ansTemplateForm.value);
    };
    AnswerTemplatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-answer-template-popup",
            template: __webpack_require__(/*! ./answer-template-popup.component.html */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AnswerTemplatePopupComponent);
    return AnswerTemplatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-builder/survey-builder.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/survey/survey-builder/survey-builder.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Builder</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <form [formGroup]=\"questionForm\" (ngSubmit)=\"submit()\">\r\n      <mat-horizontal-stepper linear #stepper>\r\n        <mat-step [stepControl]=\"questionForm\">\r\n\r\n          <ng-template matStepLabel>Setup your questions</ng-template>\r\n\r\n          <div class=\"text-right mb-1\">\r\n            <div class=\"m-333 text-right\">\r\n              <button  type='button' mat-raised-button class=\"mb-05\" (click)=\"addQuestion()\" color=\"accent\">Add Question</button>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-card formArrayName='questions' *ngFor=\"let answer of questionForm.controls['questions'].controls; let i=index\" class=\"p-1\"\r\n            [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n\r\n            <mat-card-title class=\"p-0\">\r\n              <small class=\"text-muted\"> Question {{i+1}} </small>\r\n            </mat-card-title>\r\n\r\n            <div [formGroupName]=\"i\">\r\n              <div fxFlex=\"100\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput formControlName=\"name\" required name=\"lable\" placeholder=\"Type your Question\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <mat-select formControlName=\"answerTemplate\" required placeholder=\"Choose Answer Template\">\r\n                    <mat-option>None</mat-option>\r\n                    <mat-option value=\"product\">Product Survey</mat-option>\r\n                    <mat-option value=\"evote\">Evote Survey</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"20\" class=\"pr-0\">\r\n                <button  type='button' mat-raised-button *ngIf=\"questionForm.controls['questions'].controls.length > 1\" (click)='removeQuestion(i)' color=\"warn\">Remove</button>\r\n              </div>\r\n\r\n            </div>\r\n          </mat-card>\r\n\r\n          <div>\r\n            <button type='button' color=\"primary\" [disabled]=\"questionForm.invalid\" mat-button matStepperNext>Next</button>\r\n          </div>\r\n\r\n\r\n        </mat-step>\r\n\r\n        <mat-step [optional]=\"isOptional\">\r\n\r\n          <ng-template matStepLabel>Review</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Address\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button type='button' mat-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>Done</ng-template>\r\n          You are now done.\r\n          <div>\r\n            <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button type='submit' mat-button color=\"primary\" (click)=\"stepper.reset()\">Submit</button>\r\n          </div>\r\n        </mat-step>\r\n      </mat-horizontal-stepper>\r\n    </form>\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-builder/survey-builder.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/survey/survey-builder/survey-builder.component.ts ***!
  \*************************************************************************/
/*! exports provided: SurveyBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBuilderComponent", function() { return SurveyBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyBuilderComponent = /** @class */ (function () {
    function SurveyBuilderComponent(fb, route) {
        this.fb = fb;
        this.route = route;
        this.isOptional = false;
    }
    SurveyBuilderComponent.prototype.ngOnInit = function () {
        this.sub = this.route.queryParams.subscribe(function (params) {
            var name = params["name"];
            var type = params["surveyType"];
            console.log("name : " + name);
            console.log("type  : " + type);
        });
        this.questionForm = this.fb.group({
            questions: this.fb.array([this.initQuestionTemplate()])
        });
    };
    SurveyBuilderComponent.prototype.initQuestionTemplate = function () {
        return this.fb.group({
            name: [],
            answerTemplate: []
        });
    };
    SurveyBuilderComponent.prototype.addQuestion = function () {
        var question = this.questionForm.controls["questions"];
        question.push(this.initQuestionTemplate());
    };
    SurveyBuilderComponent.prototype.removeQuestion = function (index) {
        var question = this.questionForm.controls["questions"];
        question.removeAt(index);
    };
    SurveyBuilderComponent.prototype.hideRemoveButton = function () {
        return this.questionForm.controls["answers"].value.length > 1;
    };
    SurveyBuilderComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.questionForm.value));
    };
    SurveyBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-builder",
            template: __webpack_require__(/*! ./survey-builder.component.html */ "./src/app/views/survey/survey-builder/survey-builder.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SurveyBuilderComponent);
    return SurveyBuilderComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n\r\n<form [formGroup]=\"surveyForm\" (ngSubmit)=\"submit()\">\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"surveyForm.controls['name']\" required name=\"name\" placeholder=\"Survey name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"surveyForm.controls['surveyType']\" [(ngModel)]=\"selectedType\" required placeholder=\"Survey Type\">\r\n            <mat-option  *ngFor=\"let type of surveyTypes\" [value]=\"type\">{{type.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n  <!-- routerLink=\"/surveys/builder_v1\" -->\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\"  [disabled]=\"surveyForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SurveyCreationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreationPopupComponent", function() { return SurveyCreationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SurveyCreationPopupComponent = /** @class */ (function () {
    function SurveyCreationPopupComponent(data, fb, dialogRef, layout) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.layout = layout;
        this.surveyTypes = [
            {
                name: 'Product Survey',
                value: 'product'
            },
            {
                name: 'Evote Survey',
                value: 'evote'
            }
        ];
    }
    SurveyCreationPopupComponent.prototype.ngOnInit = function () {
        this.buildSurveyForm(this.data.payload);
        this.selectedType = this.data.payload.type;
        if (this.data.payload.type === this.surveyTypes[0]) {
            console.log('equals');
        }
        console.log(this.surveyTypes[0]);
        console.log(this.data.payload.type);
    };
    SurveyCreationPopupComponent.prototype.buildSurveyForm = function (fieldItem) {
        this.surveyForm = this.fb.group({
            name: [fieldItem.topic || ""],
            surveyType: [fieldItem.type || ""]
        });
    };
    SurveyCreationPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.surveyForm.value);
    };
    SurveyCreationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-creation-popup",
            template: __webpack_require__(/*! ./survey-creation-popup.component.html */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], SurveyCreationPopupComponent);
    return SurveyCreationPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-setting/survey-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/survey/survey-setting/survey-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Settings</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n    <div class=\"text-muted mb-1 m-1 text-left\">\r\n      you can configure your survey question answer with adding different options per answer. To setup your predefined answer template,\r\n      navigate to \"Answser template section \" by clicking \"Create Answer template\" button.\r\n    </div>\r\n    <div class=\"profile-actions text-right mb-1\">\r\n      <div class=\"m-333 text-right\">\r\n        <button mat-raised-button (click)=\"openAnswerTemplatePopup({},true)\" class=\"mb-05\" color=\"accent\">Create Answer template</button>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Answer templates\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            View or Edit Predefined Answer template\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n          [limit]=\"5\" [rows]=\"rows\">\r\n\r\n          <ngx-datatable-column name=\"Template Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row?.name}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Answer type\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row?.answerTemplateType}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <button mat-icon-button mat-sm-button (click)=\"getAnsTemplateById(row.id)\" color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n              <button mat-icon-button mat-sm-button (click)=\"deleteAnsTemplate(row)\" color=\"warn\"  class=\"mr-1\" ><mat-icon>delete</mat-icon></button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-setting/survey-setting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/survey/survey-setting/survey-setting.component.ts ***!
  \*************************************************************************/
/*! exports provided: SurveySettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySettingComponent", function() { return SurveySettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../answer-template-popup/answer-template-popup.component */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SurveySettingComponent = /** @class */ (function () {
    function SurveySettingComponent(dialog, surveyService, errDialog, loader, confirmService) {
        this.dialog = dialog;
        this.surveyService = surveyService;
        this.errDialog = errDialog;
        this.loader = loader;
        this.confirmService = confirmService;
    }
    SurveySettingComponent.prototype.ngOnInit = function () {
        this.getAllAnsTemplates();
    };
    SurveySettingComponent.prototype.ngOnDestroy = function () {
        if (this.getAnswersTemplatesSub) {
            this.getAnswersTemplatesSub.unsubscribe();
        }
    };
    SurveySettingComponent.prototype.getAllAnsTemplates = function () {
        var _this = this;
        this.getAnswersTemplatesSub = this.surveyService
            .getAnswerTemplates()
            .subscribe(function (successResp) {
            _this.rows = successResp.content;
            console.log(_this.rows);
        }, function (error) {
            console.log(error);
            console.log(error.status);
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveySettingComponent.prototype.openAnswerTemplatePopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add New Answer Template " : "Update Answer Template ";
        var dialogRef = this.dialog.open(_answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_3__["AnswerTemplatePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.loader.open();
            if (isNew) {
                _this.surveyService.addNewAnsTemplate(res, _this.rows).subscribe(function (data) {
                    console.log("response of creation ");
                    console.log(data);
                    _this.rows = data;
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
            else {
            }
            console.log("input : ");
            console.log(JSON.stringify(res));
        });
    };
    SurveySettingComponent.prototype.deleteAnsTemplate = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.surveyService.removeAnsTemplate(row, _this.rows).subscribe(function (data) {
                    console.log(data);
                    _this.rows = data;
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
        });
    };
    //for the movement unused
    SurveySettingComponent.prototype.getAnsTemplateById = function (id) {
        var _this = this;
        this.surveyService.getAnsTemplateById(id, this.rows).subscribe(function (successResp) {
            console.log('by id response');
            console.log(successResp);
            _this.openAnswerTemplatePopup(successResp);
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveySettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-setting",
            template: __webpack_require__(/*! ./survey-setting.component.html */ "./src/app/views/survey/survey-setting/survey-setting.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["AppLoaderService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"]])
    ], SurveySettingComponent);
    return SurveySettingComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-table/survey-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/survey/survey-table/survey-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" >\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Summary</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"profile-actions text-right mb-1\">\r\n        <div class=\"m-333\">\r\n          <button mat-raised-button class=\"mb-05\" (click)='openSurveyPopup({},true)' color=\"primary\">Add Survey</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"5\" [rows]=\"surveyData\">\r\n      <ngx-datatable-column name=\"Survey Topic\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.topic}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Survey Type\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.type.name}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Survey Source\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.source}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Start Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.start}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"End Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.end}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button  color=\"warn\" class=\"mr-1\" ><mat-icon>delete</mat-icon></button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-table/survey-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/survey/survey-table/survey-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTableComponent", function() { return SurveyTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey-creation-popup/survey-creation-popup.component */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyTableComponent = /** @class */ (function () {
    function SurveyTableComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.surveyData = [
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Evote Survey", value: "evote" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Evote Survey", value: "evote" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            },
            {
                topic: "Addidas Air Survey",
                type: { name: "Product Survey", value: "product" },
                source: "Addidas Air XD1",
                start: "2018/04/10",
                end: "2018/05/10"
            }
        ];
    }
    SurveyTableComponent.prototype.ngOnInit = function () { };
    SurveyTableComponent.prototype.openSurveyPopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add New Survey " : "Update Survey ";
        var dialogRef = this.dialog.open(_survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_2__["SurveyCreationPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            console.log("input : ");
            console.log(JSON.stringify(res));
            var extraParam = {
                queryParams: {
                    "name": res.name,
                    "surveyType": res.surveyType
                }
            };
            _this.router.navigate(['surveys/builder_v1'], extraParam);
        });
    };
    SurveyTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-table",
            template: __webpack_require__(/*! ./survey-table.component.html */ "./src/app/views/survey/survey-table/survey-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SurveyTableComponent);
    return SurveyTableComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/survey/survey.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/survey-icon.jpg\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">Survey Service</div>\r\n        <div class=\"subtitle mb-05\">Clear Picture Authentica</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily create questionnaires.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/surveys/summery\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>home</mat-icon>\r\n            Survey Summary\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/surveys/setting\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            Survey Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/surveys/builder_v1\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            Survey Builder\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n  </div>\r\n\r\n<!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/survey/survey.component.ts ***!
  \**************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/views/survey/survey.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/survey/survey.module.ts ***!
  \***********************************************/
/*! exports provided: SurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.component */ "./src/app/views/survey/survey.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _survey_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey.routing */ "./src/app/views/survey/survey.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./survey-table/survey-table.component */ "./src/app/views/survey/survey-table/survey-table.component.ts");
/* harmony import */ var _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./survey-setting/survey-setting.component */ "./src/app/views/survey/survey-setting/survey-setting.component.ts");
/* harmony import */ var _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./answer-template-popup/answer-template-popup.component */ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.ts");
/* harmony import */ var _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./survey-creation-popup/survey-creation-popup.component */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts");
/* harmony import */ var _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./survey-builder/survey-builder.component */ "./src/app/views/survey/survey-builder/survey-builder.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./survey.service */ "./src/app/views/survey/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_survey_routing__WEBPACK_IMPORTED_MODULE_4__["SurveyRoute"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"]
            ],
            declarations: [
                _survey_component__WEBPACK_IMPORTED_MODULE_2__["SurveyComponent"],
                _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_9__["SurveyTableComponent"],
                _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_10__["SurveySettingComponent"],
                _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"],
                _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"],
                _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_13__["SurveyBuilderComponent"]
            ],
            entryComponents: [_answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"], _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"]],
            providers: [_survey_service__WEBPACK_IMPORTED_MODULE_15__["SurveyService"]]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/survey/survey.routing.ts ***!
  \************************************************/
/*! exports provided: SurveyRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyRoute", function() { return SurveyRoute; });
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey.component */ "./src/app/views/survey/survey.component.ts");
/* harmony import */ var _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-table/survey-table.component */ "./src/app/views/survey/survey-table/survey-table.component.ts");
/* harmony import */ var _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-setting/survey-setting.component */ "./src/app/views/survey/survey-setting/survey-setting.component.ts");
/* harmony import */ var _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-builder/survey-builder.component */ "./src/app/views/survey/survey-builder/survey-builder.component.ts");




var SurveyRoute = [
    {
        path: "",
        component: _survey_component__WEBPACK_IMPORTED_MODULE_0__["SurveyComponent"],
        children: [
            {
                path: "summery",
                component: _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_1__["SurveyTableComponent"],
                data: { title: "Survey Summary", breadcrumb: "Summary" }
            },
            {
                path: "setting",
                component: _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_2__["SurveySettingComponent"],
                data: { title: "Survey Setting", breadcrumb: "Setting" }
            },
            {
                path: "builder_v1",
                component: _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_3__["SurveyBuilderComponent"],
                data: { title: "Survey Builder", breadcrumb: "Builder" }
            }
        ]
    }
];


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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable/throw */ "./node_modules/rxjs-compat/_esm5/Observable/throw.js");
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
        this.surveyApiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].surveyApiURL + "answer-templates/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
    }
    SurveyService.prototype.getAnswerTemplates = function () {
        return this.http.get(this.surveyApiUrl).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SurveyService.prototype.addNewAnsTemplate = function (templateObj, items) {
        return this.http
            .post(this.surveyApiUrl, templateObj, this.httpOptions)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getAnsTemplateById = function (id, items) {
        console.log("by id url : " + this.surveyApiUrl + id);
        return this.http.get(this.surveyApiUrl + id).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data.content);
            return data.content;
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SurveyService.prototype.removeAnsTemplate = function (row, items) {
        return this.http.delete(this.surveyApiUrl + row.id, this.httpOptions).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var i = items.indexOf(row);
            items.splice(i, 1);
            return items;
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SurveyService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs_Observable_throw__WEBPACK_IMPORTED_MODULE_4__["_throw"])(error);
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ })

}]);
//# sourceMappingURL=views-survey-survey-module.js.map