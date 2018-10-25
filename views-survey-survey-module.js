(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-survey-survey-module"],{

/***/ "./src/app/model/SurveyRequest.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/SurveyRequest.model.ts ***!
  \**********************************************/
/*! exports provided: SurveyModel, Question, AnswerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return SurveyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerTemplate", function() { return AnswerTemplate; });
var SurveyModel = /** @class */ (function () {
    function SurveyModel(obj) {
        var _this = this;
        this.questions = [];
        this.topic = obj.topic;
        this.type = obj.type;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
        this.productId = obj.productId;
        this.voteId = obj.voteId;
        obj.questions.forEach(function (question) {
            var answerTemplate = new AnswerTemplate("name", question.answerTemplate);
            var qOBj = new Question(question.name, answerTemplate);
            console.log(qOBj);
            _this.questions.unshift(qOBj);
        });
    }
    return SurveyModel;
}());

var Question = /** @class */ (function () {
    //answerTemplate
    function Question(name, answerTemplate) {
        this.name = name;
        this.answerTemplate = answerTemplate;
    }
    return Question;
}());

var AnswerTemplate = /** @class */ (function () {
    function AnswerTemplate(name, id) {
        this.name = name;
        this.id = id;
    }
    return AnswerTemplate;
}());



/***/ }),

/***/ "./src/app/views/survey/answer-template-popup/answer-template-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/answer-template-popup/answer-template-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 matDialogTitle>{{data.title}}</h1> -->\r\n<form [formGroup]=\"ansTemplateForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n      <!-- <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n        <mat-icon>close</mat-icon>\r\n      </button> -->\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"pt-1\">\r\n\r\n      <div fxFlex=\"100\" class=\"\">\r\n        <div class=\"text-muted\" >\r\n          Create your answer template by adding template name, type and answers. answers need to have a lable, value and\r\n          option value\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex.sm=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"ansTemplateForm.controls['name']\" required name=\"name\" placeholder=\"Answer template name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex.sm=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [(ngModel)]=\"selectedAnsType\" [formControl]=\"ansTemplateForm.controls['answerTemplateType']\"\r\n            required placeholder=\"Answer template type\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let type of answerTypes\" [value]=\"type.value\">{{type.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div fxFlex=\"100\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" formArrayName='answers' *ngFor=\"let answer of ansTemplateArray.controls; let i=index\">\r\n\r\n        <mat-card-title class=\"mt-1\">\r\n          <small class=\"text-muted\"> Answer {{i + 1}}</small>\r\n        </mat-card-title>\r\n\r\n        <div [formGroupName]=\"i\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"mb-1\">\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput formControlName='lable' required name=\"lable\" placeholder=\"Answer lable\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput type=\"number\" formControlName='value' required name=\"value\" placeholder=\"Answer value\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput type=\"number\" formControlName='optionNumber' required name=\"optionNumber\" placeholder=\"Answer option\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"25\" class=\"pr-1\">\r\n            <!-- <mat-button-toggle (click)='addAnsTemplate()' value=\"add\">\r\n              <mat-icon>add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle *ngIf=\"ansTemplateForm.controls['answers'].controls.length > 1\" (click)=removeAnsTemplate(i)\r\n              value=\"remove\">\r\n              <mat-icon>remove</mat-icon>\r\n            </mat-button-toggle> -->\r\n            <button mat-mini-fab color=\"default\" class=\"ml-1\" (click)='addAnsTemplate()' value=\"add\" type=\"button\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <button mat-mini-fab color=\"default\" class=\"ml-1\" *ngIf=\"ansTemplateForm.controls['answers'].controls.length > 1\"\r\n              (click)=removeAnsTemplate(i) value=\"remove\" type=\"button\">\r\n              <mat-icon>remove</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"ansTemplateForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>"

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
        this.answerTypes = [
            // {
            //   name: "Free Text",
            //   value: "F"
            // },
            {
                name: "Multiple Options",
                value: "M"
            },
            {
                name: "Single Option",
                value: "S"
            }
        ];
    }
    AnswerTemplatePopupComponent.prototype.ngOnInit = function () {
        this.buildAnsTemplateform(this.data.payload);
        this.selectedAnsType = this.data.payload.answerTemplateType;
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
        this.ansTemplateArray = control;
        if (!fields) {
            control.push(this.initAnswerTemplate());
            return;
        }
        fields.forEach(function (x) {
            control.push(_this.initAnswerTemplate(x.lable, x.value, x.optionNumber));
        });
    };
    AnswerTemplatePopupComponent.prototype.initAnswerTemplate = function (lable, value, optionNumber) {
        console.log(" SET " + lable + " : " + value + " : " + optionNumber);
        return this.fb.group({
            lable: [lable || ""],
            value: [value + "" || ""],
            optionNumber: [optionNumber + "" || ""]
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

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Builder - {{surveyName}}</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n\r\n    <mat-horizontal-stepper linear #stepper>\r\n\r\n\r\n      <mat-step [stepControl]=\"surveyDetailForm\">\r\n        <form [formGroup]=\"surveyDetailForm\" (ngSubmit)=\"submit()\">\r\n          <ng-template matStepLabel>Fill Survey Details</ng-template>\r\n\r\n          <mat-card class=\"p-1\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n\r\n\r\n            <mat-card-title class=\"p-0\">\r\n              <small class=\"text-muted\"> Survey Details </small>\r\n            </mat-card-title>\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput [formControl]=\"surveyDetailForm.controls['topic']\" required name=\"name\" placeholder=\"Survey topic\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <mat-select [(value)]=\"selectedType\" [(ngModel)]=\"selectedType\" [formControl]=\"surveyDetailForm.controls['type']\" required\r\n                    placeholder=\"Survey Type\">\r\n                    <mat-option>none</mat-option>\r\n                    <mat-option *ngFor=\"let type of surveyTypes\" (click)=\"popuplateDropdown(type.value)\" [value]=\"type.value\">{{type.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n\r\n                <mat-form-field *ngIf='selectedType === \"P\"' class=\"full-width\">\r\n                  <mat-select [formControl]=\"surveyDetailForm.controls['productId']\" required placeholder=\"Select A Product\">\r\n                    <mat-option>none</mat-option>\r\n                    <mat-option *ngFor=\"let product of products\" [value]=\"product.id\">{{product.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngIf='selectedType === \"V\"' class=\"full-width\">\r\n                  <mat-select [formControl]=\"surveyDetailForm.controls['voteId']\" required placeholder=\"Select An E-Vote\">\r\n                    <mat-option>none</mat-option>\r\n                    <mat-option *ngFor=\"let evote of evotes\" [value]=\"evote.id\">{{evote.topic}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput name=\"startDate\" [matDatepicker]=\"picker1\" [formControl]=\"surveyDetailForm.controls['startDate']\" required\r\n                    placeholder=\"Start Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\">\r\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #picker1></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput name=\"endDate\" [matDatepicker]=\"picker2\" [formControl]=\"surveyDetailForm.controls['endDate']\" required placeholder=\"End Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #picker2></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n          </mat-card>\r\n\r\n          <div>\r\n            <button type='button' color=\"primary\" [disabled]=\"surveyDetailForm.invalid\" mat-button matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n\r\n\r\n      <mat-step [stepControl]=\"questionForm\" [optional]=\"isOptional\">\r\n        <form [formGroup]=\"questionForm\" (ngSubmit)=\"submit()\">\r\n          <ng-template matStepLabel>Setup your questions</ng-template>\r\n\r\n          <div class=\"text-right mb-1\">\r\n            <div class=\"m-333 text-right\">\r\n              <button type='button' mat-raised-button class=\"mb-05\" (click)=\"addQuestion()\" color=\"accent\">Add Question</button>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-card formArrayName='questions' *ngFor=\"let question of questionFormArray.controls; let i=index\" class=\"p-1\"\r\n            [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n\r\n            <mat-card-title class=\"p-0\">\r\n              <small class=\"text-muted\"> Question {{i+1}} </small>\r\n            </mat-card-title>\r\n\r\n            <div [formGroupName]=\"i\">\r\n              <div fxFlex=\"100\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput formControlName=\"name\" required name=\"lable\" placeholder=\"Type your Question\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"50\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <mat-select formControlName=\"answerTemplate\" required placeholder=\"Choose Answer Template\">\r\n                    <mat-option>None</mat-option>\r\n                    <mat-option *ngFor='let template of ansTemplates' [value]=\"template.id\">{{template.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxFlex=\"20\" class=\"pr-0\">\r\n                <button type='button' mat-raised-button *ngIf=\"questionForm.controls['questions'].controls.length > 1\" (click)='removeQuestion(i)'\r\n                  color=\"warn\">Remove</button>\r\n              </div>\r\n\r\n            </div>\r\n          </mat-card>\r\n\r\n          <div>\r\n            <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button color=\"primary\" [disabled]=\"questionForm.invalid\" mat-button matStepperNext>Submit Question</button>\r\n          </div>\r\n\r\n        </form>\r\n      </mat-step>\r\n\r\n\r\n      <mat-step>\r\n\r\n        <ng-template matStepLabel>Review</ng-template>\r\n\r\n        <mat-card class=\"p-2\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n\r\n\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n            <mat-card-title class=\"p-0\">\r\n              Please Review your survey details\r\n            </mat-card-title>\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <b>Survey Topic : </b> <span class=\"text-muted\">{{ surveyDetailForm.controls['topic'].value }} </span>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\" *ngIf='selectedType === \"P\"'>\r\n              <b>Survey Source : </b> <span class=\"text-muted\" *ngFor='let product of products | arrayFilter : surveyDetailForm.controls[\"productId\"].value : \"products\" '>\r\n                {{product.name }} </span>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\" *ngIf='selectedType === \"V\"'>\r\n              <b>Survey Source : </b><span class=\"text-muted\" *ngFor='let evote of evotes | arrayFilter : surveyDetailForm.controls[\"voteId\"].value : \"evotes\" '>\r\n                {{evote.topic }} </span>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <b>Survey Start Date : </b> <span class=\"text-muted\">{{ surveyDetailForm.controls['startDate'].value }} </span>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <b>Survey End Date : </b> <span class=\"text-muted\">{{ surveyDetailForm.controls['endDate'].value }} </span>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"p-2\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n            <mat-card-title class=\"p-0\">\r\n              Review Survey Questions\r\n            </mat-card-title>\r\n\r\n            <div *ngFor=\"let question of questionFormArray.controls; let i=index \" fxFlex=\"100\" class=\"timeline-body-top\">\r\n              <span href=\"#\" class=\"timeline-body-title mr-1\"><b>Question {{i+1}}</b></span>\r\n              <span class=\"text-muted\">{{question.value.name}}</span><br>\r\n\r\n              <div *ngIf=\"question.value.answerTemplate\">\r\n                <div class=\"p-1\" *ngFor='let temp of ansTemplates | arrayFilter:question.value.answerTemplate:\"answer_types\" ;' class=\"timeline-body-top\">\r\n                  <span class=\"text-muted\" *ngFor='let ans of temp.answers; let a=index '>{{a+1}}. {{ans.lable}}<br></span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </mat-card>\r\n\r\n        <div>\r\n          <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\r\n          <button type='button' mat-button color=\"primary\" [disabled]=\"questionForm.invalid\" matStepperNext>Next</button>\r\n        </div>\r\n\r\n      </mat-step>\r\n\r\n\r\n      <mat-step>\r\n        <ng-template matStepLabel>Done</ng-template>\r\n\r\n        <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n\r\n          <div class=\"profile-title text-center mb-1\">\r\n            <div class=\"main-title\">Survey Question Setup is Successfully !</div>\r\n            <div class=\"subtitle mb-05\">Move back to survey summery to see your surveys</div>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <img src=\"assets/images/survey-icon.jpg\" alt=\"\">\r\n          </div>\r\n\r\n        </mat-card>\r\n\r\n\r\n        <div>\r\n          <button type='button' mat-button color=\"primary\" matStepperPrevious>Back</button>\r\n          <button type='button' [routerLink]=\"['/surveys/summery']\" routerLinkActive=\"router-link-active\" mat-button color=\"primary\">Done</button>\r\n        </div>\r\n      </mat-step>\r\n\r\n    </mat-horizontal-stepper>\r\n\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-builder/survey-builder.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/survey/survey-builder/survey-builder.component.ts ***!
  \*************************************************************************/
/*! exports provided: MY_FORMATS, SurveyBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBuilderComponent", function() { return SurveyBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _survey_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../survey-common.component */ "./src/app/views/survey/survey-common.component.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _model_SurveyRequest_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/SurveyRequest.model */ "./src/app/model/SurveyRequest.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MY_FORMATS = {
    parse: {
        dateInput: "YYYY-MM-DD"
    },
    display: {
        dateInput: "YYYY-MM-DD",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "YYYY-MM-DD",
        monthYearA11yLabel: "MMMM YYYY"
    }
};
var SurveyBuilderComponent = /** @class */ (function (_super) {
    __extends(SurveyBuilderComponent, _super);
    function SurveyBuilderComponent(fb, route, productService, evoteService, surveyService, errDialog, loader) {
        var _this = _super.call(this, productService, evoteService) || this;
        _this.fb = fb;
        _this.route = route;
        _this.productService = productService;
        _this.evoteService = evoteService;
        _this.surveyService = surveyService;
        _this.errDialog = errDialog;
        _this.loader = loader;
        _this.isOptional = false;
        _this.surveyQuestions = [];
        // checkQuestions(){
        //   console.log('question : ');
        //   console.log(this.questionForm.controls['questions']);
        // }
        _this.surveyTypes = [
            {
                name: "Product Survey",
                value: "P"
            },
            {
                name: "Evote Survey",
                value: "V"
            }
        ];
        return _this;
    }
    SurveyBuilderComponent.prototype.getAllAnsTemplates = function () {
        var _this = this;
        this.getAnswersTemplatesSub = this.surveyService
            .getAnswerTemplates()
            .subscribe(function (successResp) {
            _this.ansTemplates = successResp.content;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveyBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var id = params["id"];
            var name = params["name"];
            var type = params["type"];
            var productId = params["productId"];
            var voteId = params["voteId"];
            var startDate = params["startDate"];
            var endDate = params["endDate"];
            var questions = params["questions"];
            _this.surveyName = name;
            _this.surveyId = id;
            console.log("id :" + id);
            console.log("name :" + name);
            console.log("type :" + type);
            console.log("productId :" + productId);
            console.log("voteId :" + voteId);
            console.log("startDate :" + startDate);
            console.log("endDate :" + endDate);
            console.log("questions :");
            if (questions) {
                console.log(JSON.parse(questions));
            }
            _this.selectedType = type;
            _this.buildSurveyForm(name, type, productId, voteId, startDate, endDate);
            _this.buildQuestionForm(questions);
            _this.getAllAnsTemplates();
            _this.popuplateDropdown(_this.selectedType);
        });
    };
    SurveyBuilderComponent.prototype.buildSurveyForm = function (name, type, productId, voteId, startDate, endDate) {
        this.surveyDetailForm = this.fb.group({
            topic: [name || ""],
            type: [type || ""],
            productId: [productId || ""],
            voteId: [voteId || ""],
            startDate: [startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: [endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SurveyBuilderComponent.prototype.buildQuestionForm = function (questions) {
        this.questionForm = this.fb.group({
            questions: this.fb.array([])
        });
        this.patch(questions);
    };
    SurveyBuilderComponent.prototype.patch = function (fields) {
        var _this = this;
        console.log("patch called");
        var control = this.questionForm.controls["questions"];
        console.log("length  and obj  : " + control.length);
        console.log(control);
        this.questionFormArray = control;
        if (fields == null) {
            control.push(this.initQuestionTemplate());
            return;
        }
        var questionArray = JSON.parse(fields);
        console.log(questionArray.length);
        if (questionArray.length == 0) {
            console.log("without question loading situation");
            control.push(this.initQuestionTemplate());
            return;
        }
        questionArray.forEach(function (x) {
            if (x.id) {
                _this.surveyService.getQuestionById(x.id).subscribe(function (response) {
                    console.log("QUESTION BY ID : ");
                    console.log(response);
                    console.log("this.surveyQuestions");
                    console.log(_this.surveyQuestions);
                    _this.surveyQuestions.unshift(response);
                    control.push(_this.initQuestionTemplate(response.name, response.answerTemplate));
                });
            }
        });
        console.log(this.surveyQuestions);
    };
    SurveyBuilderComponent.prototype.initQuestionTemplate = function (name, answerTemplate) {
        var anstempVal = answerTemplate ? answerTemplate.id : null;
        console.log("anstempVAL : " + anstempVal);
        return this.fb.group({
            name: [name || ""],
            answerTemplate: [anstempVal || ""]
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
        this.loader.open('Questions are upadating');
        var surveyReq = new _model_SurveyRequest_model__WEBPACK_IMPORTED_MODULE_12__["SurveyModel"]({
            topic: this.surveyDetailForm.value.topic,
            type: this.surveyDetailForm.value.type,
            startDate: this.surveyDetailForm.value.startDate,
            endDate: this.surveyDetailForm.value.endDate,
            productId: this.surveyDetailForm.value.productId,
            voteId: this.surveyDetailForm.value.voteId,
            questions: this.questionForm.value.questions
        });
        console.log('final request : ');
        console.log(surveyReq);
        var jOb = JSON.stringify(surveyReq);
        console.log(jOb);
        console.log(JSON.parse(jOb));
        this.updateSurveyWithQuestions(this.surveyId, surveyReq);
    };
    SurveyBuilderComponent.prototype.updateSurveyWithQuestions = function (id, surveyObj) {
        var _this = this;
        console.log("sueveyobject");
        console.log(surveyObj);
        this.surveyService.updateSurveyWithQuestions(id, surveyObj).subscribe(function (response) {
            console.log("response after update questions");
            console.log(response.content);
            _this.loader.close();
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveyBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-builder",
            template: __webpack_require__(/*! ./survey-builder.component.html */ "./src/app/views/survey/survey-builder/survey-builder.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_5__["ProductCrudService"],
            _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_9__["EvoteService"],
            _survey_service__WEBPACK_IMPORTED_MODULE_10__["SurveyService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_11__["AppErrorService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]])
    ], SurveyBuilderComponent);
    return SurveyBuilderComponent;
}(_survey_common_component__WEBPACK_IMPORTED_MODULE_8__["SurveyCommonComponent"]));



/***/ }),

/***/ "./src/app/views/survey/survey-common.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/survey/survey-common.component.ts ***!
  \*********************************************************/
/*! exports provided: SurveyCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCommonComponent", function() { return SurveyCommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyCommonComponent = /** @class */ (function () {
    function SurveyCommonComponent(productService, evoteService) {
        this.productService = productService;
        this.evoteService = evoteService;
        this.products = [];
        this.evotes = [];
    }
    SurveyCommonComponent.prototype.popuplateDropdown = function (value) {
        console.log("PASSED TYPE  " + value);
        switch (this.selectedType) {
            case "P":
                this.getProducts();
                break;
            case "V":
                this.getEvotes();
                break;
            default:
                this.getProducts();
                break;
        }
    };
    SurveyCommonComponent.prototype.getProducts = function () {
        var _this = this;
        console.log("called PRODUCTS " + this.products.length);
        if (this.products.length === 0) {
            this.getProductsSub = this.productService
                .getAllProductSuggestions()
                .subscribe(function (data) {
                _this.response = data;
                _this.products = _this.response.content;
            });
        }
    };
    SurveyCommonComponent.prototype.getEvotes = function () {
        var _this = this;
        console.log("called EVOTES " + this.evotes.length);
        if (this.evotes.length === 0) {
            this.getEvotesSub = this.evoteService.getAllEvotesSuggestions().subscribe(function (data) {
                _this.response = data;
                _this.evotes = _this.response.content;
                console.log(_this.evotes);
            });
        }
    };
    SurveyCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "survey-common",
            template: ""
        }),
        __metadata("design:paramtypes", [_product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_1__["ProductCrudService"],
            _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_2__["EvoteService"]])
    ], SurveyCommonComponent);
    return SurveyCommonComponent;
}());



/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n\r\n<form [formGroup]=\"surveyForm\" (ngSubmit)=\"submit()\">\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"surveyForm.controls['topic']\" required name=\"topic\" placeholder=\"Survey topic\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [(value)]=\"selectedType\" [(ngModel)]=\"selectedType\" [formControl]=\"surveyForm.controls['type']\" required placeholder=\"Survey Type\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let type of surveyTypes\" (click)=\"popuplateDropdown(type.value)\" [value]=\"type.value\">{{type.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n\r\n        <mat-form-field *ngIf='selectedType === \"P\"' class=\"full-width\">\r\n          <mat-select [formControl]=\"surveyForm.controls['productId']\" required placeholder=\"Select A Product\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let product of products\" [value]=\"product.id\">{{product.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field *ngIf='selectedType === \"V\"' class=\"full-width\">\r\n          <mat-select [formControl]=\"surveyForm.controls['voteId']\" required placeholder=\"Select An E-Vote\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let evote of evotes\" [value]=\"evote.id\">{{evote.topic}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"startDate\" [matDatepicker]=\"picker1\" [formControl]=\"surveyForm.controls['startDate']\" required placeholder=\"Start Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"endDate\" [matDatepicker]=\"picker2\" [formControl]=\"surveyForm.controls['endDate']\" required placeholder=\"End Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </mat-dialog-content>\r\n\r\n  <!-- routerLink=\"/surveys/builder_v1\" -->\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"surveyForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MY_FORMATS, SurveyCreationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreationPopupComponent", function() { return SurveyCreationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _survey_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../survey-common.component */ "./src/app/views/survey/survey-common.component.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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








var MY_FORMATS = {
    parse: {
        dateInput: "YYYY-MM-DD"
    },
    display: {
        dateInput: "YYYY-MM-DD",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "YYYY-MM-DD",
        monthYearA11yLabel: "MMMM YYYY"
    }
};
var SurveyCreationPopupComponent = /** @class */ (function (_super) {
    __extends(SurveyCreationPopupComponent, _super);
    function SurveyCreationPopupComponent(data, fb, dialogRef, productService, evoteService) {
        var _this = _super.call(this, productService, evoteService) || this;
        _this.data = data;
        _this.fb = fb;
        _this.dialogRef = dialogRef;
        _this.productService = productService;
        _this.evoteService = evoteService;
        _this.surveyTypes = [
            {
                name: "Product Survey",
                value: "P"
            },
            {
                name: "Evote Survey",
                value: "V"
            }
        ];
        return _this;
    }
    SurveyCreationPopupComponent.prototype.ngOnInit = function () {
        this.buildSurveyForm(this.data.payload);
        console.log("this.data.payload.type : " + this.data.payload.type);
        this.selectedType = this.data.payload.type;
        console.log("this.selectedType : " + this.selectedType);
        this.popuplateDropdown(this.selectedType);
    };
    SurveyCreationPopupComponent.prototype.ngOnDestroy = function () {
        if (this.getProductsSub) {
            this.getProductsSub.unsubscribe();
        }
        if (this.getEvotesSub) {
            this.getEvotesSub.unsubscribe();
        }
    };
    SurveyCreationPopupComponent.prototype.buildSurveyForm = function (fieldItem) {
        this.surveyForm = this.fb.group({
            topic: [fieldItem.topic || ""],
            type: [fieldItem.type || ""],
            productId: [fieldItem.productId || ""],
            voteId: [fieldItem.voteId || ""],
            startDate: [fieldItem.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDate: [fieldItem.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SurveyCreationPopupComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.surveyForm.value));
        this.dialogRef.close(this.surveyForm.value);
    };
    SurveyCreationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-creation-popup",
            template: __webpack_require__(/*! ./survey-creation-popup.component.html */ "./src/app/views/survey/survey-creation-popup/survey-creation-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_4__["ProductCrudService"],
            _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_7__["EvoteService"]])
    ], SurveyCreationPopupComponent);
    return SurveyCreationPopupComponent;
}(_survey_common_component__WEBPACK_IMPORTED_MODULE_6__["SurveyCommonComponent"]));



/***/ }),

/***/ "./src/app/views/survey/survey-setting/survey-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/survey/survey-setting/survey-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Settings</div>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n    <div class=\"text-muted mb-1 m-1 text-left\">\r\n      you can configure your survey question answer with adding different options per answer. To setup your predefined answer template,\r\n      navigate to \"Answser template section \" by clicking \"Create Answer template\" button.\r\n    </div>\r\n    <div class=\"profile-actions text-right mb-1\">\r\n      <div class=\"m-333 text-right\">\r\n        <button mat-raised-button (click)=\"openAnswerTemplatePopup({},true)\" class=\"mb-05\" color=\"accent\">Create Answer template</button>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Answer templates\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            View or Edit Predefined Answer template\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n          [limit]=\"5\" [rows]=\"rows\">\r\n\r\n          <ngx-datatable-column name=\"Template Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row?.name}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Answer type\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <mat-chip mat-sm-chip *ngIf='row?.answerTemplateType ==\"M\"'   color=\"accent\" [selected]=\"true\" >Multiple Option</mat-chip>\r\n              <mat-chip mat-sm-chip *ngIf='row?.answerTemplateType ==\"S\"'   color=\"primary\" [selected]=\"true\" >Single Option</mat-chip>\r\n              <mat-chip mat-sm-chip *ngIf='row?.answerTemplateType ==\"F\"'   color=\"default\" [selected]=\"true\" >Free Text</mat-chip>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <button mat-icon-button mat-sm-button  [disabled]='row?.answerTemplateType ==\"F\"'  (click)=\"getAnsTemplateById(row.id)\" color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n              <button mat-icon-button mat-sm-button (click)=\"deleteAnsTemplate(row)\" color=\"warn\"  class=\"mr-1\" ><mat-icon>delete</mat-icon></button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
        this.defaultAnswerTemplate = {
            name: "Free Text Answer",
            answerTemplateType: "F",
            answers: [{ lable: "", value: 1, optionNumber: 1 }]
        };
    }
    SurveySettingComponent.prototype.ngOnInit = function () {
        this.getAllAnsTemplates();
    };
    SurveySettingComponent.prototype.defaultTemplateCreate = function (templates) {
        var _this = this;
        console.log("passed rows :");
        console.log(templates);
        var result = templates.filter(function (item) { return item.answerTemplateType.indexOf("F") !== -1; });
        if (result.length === 0) {
            console.log("need to create Free text ");
            this.loader.open("Installing Default Settings");
            console.log(this.defaultAnswerTemplate);
            this.surveyService
                .addNewAnsTemplate(this.defaultAnswerTemplate, this.rows)
                .subscribe(function (data) {
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
            _this.defaultTemplateCreate(_this.rows);
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
                _this.surveyService.updateAnsTemplate(data.id, res).subscribe(function (response) {
                    console.log(response.content);
                    _this.rows = _this.rows.map(function (i) {
                        if (i.id === data.id) {
                            return Object.assign({}, i, response.content);
                        }
                        return i;
                    });
                    _this.loader.close();
                    return _this.rows.slice();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
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
            console.log("by id response");
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

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" >\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Survey Summary</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"profile-actions text-right mb-1\">\r\n        <div class=\"m-333\">\r\n          <button mat-raised-button class=\"mb-05\" (click)='openSurveyPopup({},true)' color=\"primary\">Add Survey</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"5\" [rows]=\"rows\">\r\n      <ngx-datatable-column name=\"Survey Topic\" [minWidth]=\"250\"  [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.topic}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Survey Type\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n           <mat-chip mat-sm-chip color=\"primary\" [selected]=\"true\" >{{row?.type =='P' ? 'Product' : 'E Vote'}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <!-- <ngx-datatable-column name=\"Survey Source\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.productId}}\r\n        </ng-template>\r\n      </ngx-datatable-column> -->\r\n      <ngx-datatable-column name=\"Start Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.startDate}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"End Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row?.endDate}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <button mat-icon-button mat-sm-button (click)='navigateSurveyBuilder(row)' color=\"primary\" class=\"mr-1\"><mat-icon>view_headline</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button (click)=\"deleteSurvey(row)\"  color=\"warn\" class=\"mr-1\" ><mat-icon>delete</mat-icon></button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
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
    function SurveyTableComponent(dialog, router, surveyService, loader, errDialog, confirmService) {
        this.dialog = dialog;
        this.router = router;
        this.surveyService = surveyService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
    }
    SurveyTableComponent.prototype.ngOnInit = function () {
        this.getAllSurvey();
    };
    SurveyTableComponent.prototype.ngOnDestroy = function () {
        if (this.getSurveysSub) {
            this.getSurveysSub.unsubscribe();
        }
    };
    SurveyTableComponent.prototype.onDetailToggle = function (value) {
        console.log("cliecked : " + value);
    };
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
            _this.loader.open();
            res.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(res.startDate).format("YYYY-MM-DD");
            res.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(res.endDate).format("YYYY-MM-DD");
            console.log("INPUT : ");
            console.log(JSON.stringify(res));
            if (isNew) {
                _this.surveyService.addNewSurvey(res, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    console.log("survey response : ");
                    console.log(_this.rows);
                    _this.navigateSurveyBuilder(_this.rows[0]);
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
                _this.surveyService.updateSurveyPopup(data.id, res).subscribe(function (response) {
                    _this.loader.close();
                    _this.getSurveysSub = _this.surveyService
                        .getAllSurveys()
                        .subscribe(function (successResp) {
                        _this.rows = successResp.content;
                    });
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
    SurveyTableComponent.prototype.deleteSurvey = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.topic + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.surveyService.removeSurvey(row, _this.rows).subscribe(function (data) {
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
    SurveyTableComponent.prototype.getAllSurvey = function () {
        var _this = this;
        this.getSurveysSub = this.surveyService.getAllSurveys().subscribe(function (successResp) {
            _this.rows = successResp.content;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    SurveyTableComponent.prototype.navigateSurveyBuilder = function (res) {
        console.log("navigation method : ");
        console.log(res.questions);
        var extraParam = {
            queryParams: {
                id: res.id,
                name: res.topic,
                type: res.type,
                productId: res.productId,
                voteId: res.voteId,
                startDate: res.startDate,
                endDate: res.endDate,
                questions: JSON.stringify(res.questions)
            }
        };
        this.router.navigate(["surveys/builder_v1"], extraParam);
    };
    SurveyTableComponent.prototype.getTypeValue = function (key) {
        if (!this.typeMap) {
            this.typeMap = new Map();
            this.typeMap.set("P", "Product Survey");
            this.typeMap.set("V", "Evote Survey");
        }
        return this.typeMap.get(key);
    };
    SurveyTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-survey-table",
            template: __webpack_require__(/*! ./survey-table.component.html */ "./src/app/views/survey/survey-table/survey-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__["AppErrorService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"]])
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

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/survey-icon.jpg\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">Survey Service</div>\r\n        <div class=\"subtitle mb-05\">Clear Picture Authentica</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily create questionnaires.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/surveys/summery\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>home</mat-icon>\r\n            Survey Summary\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/surveys/setting\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            Survey Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <!-- <mat-list-item routerLink=\"/surveys/builder_v1\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            Survey Builder Demo\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider> -->\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../product-crud/product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _survey_common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./survey-common.component */ "./src/app/views/survey/survey-common.component.ts");
/* harmony import */ var _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../evote/evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"]
            ],
            declarations: [
                _survey_component__WEBPACK_IMPORTED_MODULE_2__["SurveyComponent"],
                _survey_table_survey_table_component__WEBPACK_IMPORTED_MODULE_9__["SurveyTableComponent"],
                _survey_setting_survey_setting_component__WEBPACK_IMPORTED_MODULE_10__["SurveySettingComponent"],
                _answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"],
                _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"],
                _survey_builder_survey_builder_component__WEBPACK_IMPORTED_MODULE_13__["SurveyBuilderComponent"],
                _survey_common_component__WEBPACK_IMPORTED_MODULE_17__["SurveyCommonComponent"]
            ],
            entryComponents: [_answer_template_popup_answer_template_popup_component__WEBPACK_IMPORTED_MODULE_11__["AnswerTemplatePopupComponent"], _survey_creation_popup_survey_creation_popup_component__WEBPACK_IMPORTED_MODULE_12__["SurveyCreationPopupComponent"]],
            providers: [_survey_service__WEBPACK_IMPORTED_MODULE_15__["SurveyService"], _product_crud_product_crud_service__WEBPACK_IMPORTED_MODULE_16__["ProductCrudService"], _evote_evote_service_service__WEBPACK_IMPORTED_MODULE_18__["EvoteService"]]
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


/***/ })

}]);
//# sourceMappingURL=views-survey-survey-module.js.map