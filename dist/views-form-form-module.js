(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-form-form-module"],{

/***/ "./src/app/views/form/form.component.html":
/*!************************************************!*\
  !*** ./src/app/views/form/form.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" [formGroup]='userForm'>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Choose a user\" [matAutocomplete]=\"auto\" formControlName='userInput'>\r\n  </mat-form-field>\r\n  <img src=\"https://productzg4t4ks63a.hana.ondemand.com/product/downloadFile/bljmY_5VgFlwM-WCMP7huDNzv9CuHWvAogEJnY_Bh8U\" alt=\"Flowers in Chania\" width=\"460\" height=\"345\">\r\n  <mat-autocomplete #auto=\"matAutocomplete\" >\r\n      <mat-option *ngFor=\"let user of (filteredClient | async)?.content\" [value]=\"user\">\r\n        <span>{{ user.name }}</span>\r\n\r\n\r\n      </mat-option>\r\n  </mat-autocomplete>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/form/form.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/form/form.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.service */ "./src/app/views/form/form.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var FormComponent = /** @class */ (function () {
    function FormComponent(fb, newform) {
        this.fb = fb;
        this.newform = newform;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.fb.group({
            userInput: null
        });
        this.filteredClient = this.userForm.get('userInput').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) {
            return _this.newform.search({ name: value }, 1);
        }));
        console.log();
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/views/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/views/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/views/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.routing */ "./src/app/views/form/form.routing.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.component */ "./src/app/views/form/form.component.ts");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.service */ "./src/app/views/form/form.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_form_routing__WEBPACK_IMPORTED_MODULE_3__["FormRoutes"])
            ],
            providers: [_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"]],
            declarations: [_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/views/form/form.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/form/form.routing.ts ***!
  \********************************************/
/*! exports provided: FormRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutes", function() { return FormRoutes; });
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ "./src/app/views/form/form.component.ts");

var FormRoutes = [
    { path: 'showForm', component: _form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"], data: { title: 'Form' } }
];


/***/ }),

/***/ "./src/app/views/form/form.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/form/form.service.ts ***!
  \********************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
        this.clientApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "clients/suggestions";
    }
    FormService.prototype.search = function (filter, page) {
        if (filter === void 0) { filter = { name: '' }; }
        if (page === void 0) { page = 1; }
        return this.http.get(this.clientApiUrl)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            response.content = response.content
                .map(function (content) { return new _model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["Content"](content.id, content.name); })
                .filter(function (content) { return content.name.toLocaleLowerCase().includes(filter.name); });
            return response;
        }));
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormService);
    return FormService;
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
    apiURL: 'productionApi',
    productApiURL: 'https://productzg4t4ks63a.hana.ondemand.com/product/api/',
    surveyApiURL: 'https://surveyzg4t4ks63a.hana.ondemand.com/survey/api/',
};


/***/ })

}]);
//# sourceMappingURL=views-form-form-module.js.map