(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-product-crud-product-crud-module"],{

/***/ "./src/app/directives/DateValidator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/DateValidator.directive.ts ***!
  \*******************************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateValidator = /** @class */ (function () {
    function DateValidator(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DateValidator.prototype.ngOnInit = function () {
        this.renderer.setElementProperty(this.el.nativeElement, "[min]", this.dateValidate());
    };
    DateValidator.prototype.dateValidate = function () {
        console.log("date validator");
        var today = new Date();
        var tomorrow = new Date(today.setDate(today.getDate() + 1));
        console.log(today);
        console.log(tomorrow);
        return tomorrow;
    };
    DateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[dateValidator]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], DateValidator);
    return DateValidator;
}());



/***/ }),

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content, ClientCreateReq, ClientLicenseData, ClientUpdateReq, CountryData, UserData, UserCreateReq, ClientData, LicenseUpdateReq, RoleData, CommunityData, CategoryData, LicenseUpdateRequest, profileUpdateReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateReq", function() { return ClientCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLicenseData", function() { return ClientLicenseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdateReq", function() { return ClientUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateReq", function() { return UserCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateReq", function() { return LicenseUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleData", function() { return RoleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityData", function() { return CommunityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryData", function() { return CategoryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateRequest", function() { return LicenseUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateReq", function() { return profileUpdateReq; });
var Content = /** @class */ (function () {
    function Content(id, name) {
        this.id = id;
        this.name = name;
    }
    return Content;
}());

var ClientCreateReq = /** @class */ (function () {
    function ClientCreateReq(name, description, clientLogo, users, categories, license) {
        this.name = name;
        this.description = description;
        this.clientLogo = clientLogo;
        this.users = users;
        this.categories = categories;
        this.license = license;
    }
    return ClientCreateReq;
}());

var ClientLicenseData = /** @class */ (function () {
    function ClientLicenseData(tagCount, userCount, communityCount, feedbackCount, eventCount, promoCount) {
        this.tagCount = tagCount;
        this.userCount = userCount;
        this.communityCount = communityCount;
        this.feedbackCount = feedbackCount;
        this.eventCount = eventCount;
        this.promoCount = promoCount;
    }
    return ClientLicenseData;
}());

var ClientUpdateReq = /** @class */ (function () {
    function ClientUpdateReq(name, description, clientLogo, primaryContactNo, addressLine1, addressLine2, city, state, zipCode, country) {
        this.name = name;
        this.description = description;
        this.clientLogo = clientLogo;
        this.primaryContactNo = primaryContactNo;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
    return ClientUpdateReq;
}());

var CountryData = /** @class */ (function () {
    function CountryData(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }
    return CountryData;
}());

var UserData = /** @class */ (function () {
    function UserData(accountName, email) {
        this.accountName = accountName;
        this.email = email;
    }
    return UserData;
}());

var UserCreateReq = /** @class */ (function () {
    function UserCreateReq(accountName, password, email, role, client, communities, categories) {
        this.accountName = accountName;
        this.password = password;
        this.email = email;
        this.role = role;
        this.client = client;
        this.communities = communities;
        this.categories = categories;
    }
    return UserCreateReq;
}());

var ClientData = /** @class */ (function () {
    function ClientData(id) {
        this.id = id;
    }
    return ClientData;
}());

var LicenseUpdateReq = /** @class */ (function () {
    function LicenseUpdateReq(tagCount, userCount, communityCount, feedbackCount, eventCount, promoCount, client) {
        this.tagCount = tagCount;
        this.userCount = userCount;
        this.communityCount = communityCount;
        this.feedbackCount = feedbackCount;
        this.eventCount = eventCount;
        this.promoCount = promoCount;
        this.client = client;
    }
    return LicenseUpdateReq;
}());

var RoleData = /** @class */ (function () {
    function RoleData(id) {
        this.id = id;
    }
    return RoleData;
}());

var CommunityData = /** @class */ (function () {
    function CommunityData(id) {
        this.id = id;
    }
    return CommunityData;
}());

var CategoryData = /** @class */ (function () {
    function CategoryData(id) {
        this.id = id;
    }
    return CategoryData;
}());

var LicenseUpdateRequest = /** @class */ (function () {
    function LicenseUpdateRequest(id) {
        this.id = id;
    }
    return LicenseUpdateRequest;
}());

var profileUpdateReq = /** @class */ (function () {
    function profileUpdateReq(userName, password, email) {
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    return profileUpdateReq;
}());



/***/ }),

/***/ "./src/app/views/cruds/crud.service.ts":
/*!*********************************************!*\
  !*** ./src/app/views/cruds/crud.service.ts ***!
  \*********************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _model_ClientModel_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        this.clientApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "clients/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    CrudService.prototype.getItems = function () {
        return this.http.get(this.clientApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.getClientSuggestions = function () {
        return this.http
            .get(this.clientApiUrl + "suggestions")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.addItem = function (item, items) {
        return this.http.post(this.clientApiUrl, item, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.updateItem = function (id, item) {
        return this.http
            .put(this.clientApiUrl + id, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.removeItem = function (id) {
        return this.http
            .delete(this.clientApiUrl + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.search = function (filter, page) {
        if (filter === void 0) { filter = { name: "" }; }
        if (page === void 0) { page = 1; }
        return this.http.get(this.clientApiUrl + "suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            response.content = response.content
                .map(function (content) { return new _model_ClientModel_model__WEBPACK_IMPORTED_MODULE_5__["Content"](content.id, content.name); })
                .filter(function (content) {
                return content.name.toLocaleLowerCase().includes(filter.name);
            });
            return response;
        }));
    };
    CrudService.prototype.getClientById = function (clientId) {
        console.log("called get client by id");
        return this.http
            .get(this.clientApiUrl + clientId, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CrudService.prototype.getImageById = function (url) {
        return this.http.get(url, { responseType: 'blob' });
    };
    CrudService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud-common.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud-common.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommonComponent", function() { return ProductCommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// -----------------------------------------
// Product Crud Common Function and Operator
// -----------------------------------------
var ProductCommonComponent = /** @class */ (function () {
    function ProductCommonComponent(surveyService, clientService) {
        this.surveyService = surveyService;
        this.clientService = clientService;
    }
    //   getAllSurvey() {
    //     this.getAllSurveySub = this.surveyService
    //       .getAllSurveys()
    //       .subscribe(successResp => {
    //         this.surveyRows = successResp.content;
    //       });
    //   }
    ProductCommonComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCommonComponent.prototype.getAllClients = function () {
        var _this = this;
        this.getClientSub = this.clientService.getItems().subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "product-common",
            template: ""
        }),
        __metadata("design:paramtypes", [_survey_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]])
    ], ProductCommonComponent);
    return ProductCommonComponent;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductCrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudModule", function() { return ProductCrudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-filter-table/product-filter-table.component */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_crud_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-crud.routing */ "./src/app/views/product-crud/product-crud.routing.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _product_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-filter-table/product-crud-popup/product-crud-popup.component */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/DateValidator.directive */ "./src/app/directives/DateValidator.directive.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_crud_common_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-crud-common.component */ "./src/app/views/product-crud/product-crud-common.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ProductCrudModule = /** @class */ (function () {
    function ProductCrudModule() {
    }
    ProductCrudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_crud_routing__WEBPACK_IMPORTED_MODULE_4__["ProductCrudRouts"])
            ],
            declarations: [
                _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__["ProductFilterTableComponent"],
                _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"],
                _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_12__["DateValidator"],
                _product_crud_common_component__WEBPACK_IMPORTED_MODULE_16__["ProductCommonComponent"]
            ],
            providers: [_product_crud_service__WEBPACK_IMPORTED_MODULE_7__["ProductCrudService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"], _survey_survey_service__WEBPACK_IMPORTED_MODULE_14__["SurveyService"]],
            entryComponents: [_product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"]]
        })
    ], ProductCrudModule);
    return ProductCrudModule;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.routing.ts ***!
  \************************************************************/
/*! exports provided: ProductCrudRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudRouts", function() { return ProductCrudRouts; });
/* harmony import */ var _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-filter-table/product-filter-table.component */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts");

var ProductCrudRouts = [
    {
        path: 'show',
        component: _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_0__["ProductFilterTableComponent"],
        data: { title: 'Product Section', breadcrumb: 'Product' }
    }
];


/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"productForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [disabled]='!data.isNew' [formControl]=\"productForm.controls['client']\" required placeholder=\"Select A Client\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"productForm.controls['code']\" required name=\"proCode\"\r\n            positiveNumberAndLetterOnly placeholder=\"Product Code\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"productForm.controls['name']\" required name=\"name\" letterOnly placeholder=\"Product Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"desc\" [formControl]=\"productForm.controls['description']\" required name=\"description\"\r\n            placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"batchNumber\" [formControl]=\"productForm.controls['batchNumber']\"\r\n            positiveNumberAndLetterOnly required placeholder=\"Batch Number\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input type=\"number\" matInput name=\"quantity\" [formControl]=\"productForm.controls['quantity']\"\r\n            positiveNumberOnly required placeholder=\"Quantity\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"expireDate\" [min]=\"tomorrow\" [matDatepicker]=\"picker\" [formControl]=\"productForm.controls['expireDate']\"\r\n            required placeholder=\"Expire Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <input type=\"text\" placeholder=\"Select A Feedback\" matInput [formControl]=\"productForm.controls['surveyId']\" [matAutocomplete]=\"auto\" (focusout)=\"surveyOnFocusOut($event)\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectionChanged($event)\">\r\n            <mat-option *ngFor=\"let option of surveyFilteredOptions | async; let i = index\" [value]=\"surveyIDs[i]\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- --------- New Code ----------------- -->\r\n\r\n      <!-- --------- hidden file input --------- -->\r\n      <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" [formControl]=\"productForm.controls['file']\"\r\n        multiple style=\"display: none\" />\r\n\r\n\r\n      <!-- --------- file input click button --------- -->\r\n      <!-- *ngIf=\"data.isNew\"  -->\r\n      <div layout-margin layout-padding>\r\n        <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\"\r\n        [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n        (false) :\r\n        (this.currentTotalImageCount === this.maxUploadableFileCount)\"\r\n          type=\"button\">\r\n          Browse Images\r\n          <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.currentTotalImageCount > 0)\"> ({{this.currentTotalImageCount}} / 4)</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"cp_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngFor='let url of urls; let i = index' fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n          <mat-card class=\"p-0\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n\r\n\r\n\r\n      \r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"videoUrl\" [formControl]=\"productForm.controls['videoUrl']\"  placeholder=\"Video URL\" type=\"text\"  >\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"productForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductCrudPopupComponent, ProductCreationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudPopupComponent", function() { return ProductCrudPopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreationRequest", function() { return ProductCreationRequest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_dateValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _product_crud_common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../product-crud-common.component */ "./src/app/views/product-crud/product-crud-common.component.ts");
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
var ProductCrudPopupComponent = /** @class */ (function (_super) {
    __extends(ProductCrudPopupComponent, _super);
    function ProductCrudPopupComponent(data, dialogRef, clientService, surveyService, fb, snackBar) {
        var _this = _super.call(this, surveyService, clientService) || this;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.clientService = clientService;
        _this.surveyService = surveyService;
        _this.fb = fb;
        _this.snackBar = snackBar;
        _this.imageUrl = "assets/images/placeholder.jpg";
        // image uploader related properties
        _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: "upload_url" });
        _this.hasBaseDropZoneOver = false;
        //------- new --------
        _this.maxUploadableFileCount = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
        _this.urls = [];
        _this.newlySelectedFileList = [];
        _this.remainImagesID = [];
        _this.currentTotalImageCount = 0;
        _this.surveys = [];
        _this.surveyIDs = [];
        // .............REGEX for Youtube link validation...............
        _this.youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        _this.youTubeIdRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\/)|(\?v=|\&v=))([^#\&\?]*).*/;
        return _this;
    }
    ProductCrudPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // validate back dates
        this.tomorrow = _utility_dateValidator__WEBPACK_IMPORTED_MODULE_6__["DateValidator"].getTomorrow();
        if (!this.data.isNew) {
            var images = this.data.payload.imageObjects;
            images.forEach(function (image) {
                var img = environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].productimageUrl + "downloadFile/" + image.id;
                _this.remainImagesID.push(image.id);
                _this.urls.push(img);
            });
            this.currentTotalImageCount = this.remainImagesID.length;
        }
        this.getAllSurvey();
        this.getClientSuggestions();
        this.buildProductForm(this.data.payload, this.data.isNew);
        this.filteredClient = this.productForm.get("client").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) { return _this.clientService.search({ name: value }, 1); }));
    };
    ProductCrudPopupComponent.prototype.surveyOnChange = function () {
        var _this = this;
        this.surveyFilteredOptions = this.productForm.controls["surveyId"].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._surveyFilter(value); }));
        this.onSelectionChanged();
    };
    ProductCrudPopupComponent.prototype._surveyFilter = function (value) {
        if (value === "" || isNaN(Number(value))) {
            var filterValue_1 = value.toLowerCase();
            return this.surveys.filter(function (option) {
                return option.toLowerCase().includes(filterValue_1);
            });
        }
    };
    ProductCrudPopupComponent.prototype.onSelectionChanged = function () {
        var input_value = this.productForm.controls["surveyId"].value;
        var id = this.surveyIDs.indexOf(input_value);
        if (id > -1) {
            this.productForm.controls["surveyId"].setValue(this.surveys[id]);
            this.selectedSurveyID = input_value;
        }
        else {
            console.log("============ else ==================");
        }
    };
    ProductCrudPopupComponent.prototype.surveyOnFocusOut = function (event) {
        if (!(this.surveys.indexOf(event.currentTarget.value) > -1)) {
            this.productForm.controls["surveyId"].setValue("");
        }
    };
    ProductCrudPopupComponent.prototype.getAllSurvey = function () {
        var _this = this;
        this.getAllSurveySub = this.surveyService
            .getAllSurveys()
            .subscribe(function (successResp) {
            successResp.content.forEach(function (element) {
                _this.surveys.push(element.topic);
                _this.surveyIDs.push(element.id);
                _this.surveyOnChange();
            });
        });
    };
    ProductCrudPopupComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.getAllClients = function () {
        var _this = this;
        this.getClientSub = this.clientService.getItems().subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.buildProductForm = function (fieldItem, isNew) {
        var client = fieldItem.client;
        var clientId = client ? client.id : null;
        var videoUrl = fieldItem.videoUrl;
        var youtubeUrl = null;
        if (videoUrl) {
            youtubeUrl = isNew
                ? videoUrl
                : "https://www.youtube.com/watch?v=" + videoUrl;
            console.log(youtubeUrl);
        }
        this.productForm = this.fb.group({
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](clientId || ""),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.code || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.name || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            batchNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.quantity || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            expireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            surveyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.surveyId || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            videoUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.videoUrl || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](fieldItem.file || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            // client: [clientId || ""],
            // code: [fieldItem.code || "", Validators.required],
            // name: [fieldItem.name || "", Validators.required],
            // description: [fieldItem.description || "", Validators.required],
            // batchNumber: [fieldItem.batchNumber || "", Validators.required],
            // quantity: [fieldItem.quantity || "", Validators.required],
            // expireDate: [fieldItem.expireDate || "", Validators.required],
            // surveyId: [fieldItem.surveyId || null],
            // videoUrl: [fieldItem.videoUrl, Validators.pattern(this.youTubeIdRegex)],
            // file: [fieldItem.file || ""]
        });
        // if(DateValidator.getTomorrow()>fieldItem.expireDate){
        //   const expireDate = this.productForm.get('expireDate');
        //   expireDate.setErrors({ incorrect: true });
        // }
    };
    ProductCrudPopupComponent.prototype.submit = function () {
        var productRequest = new ProductCreationRequest(this.productForm.value);
        var formData;
        formData = this.prepareToSave(productRequest);
        this.dialogRef.close(formData);
    };
    // image uploader related functions from here
    ProductCrudPopupComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    // --------- New Code -----------------
    // File uploader validation and upload
    ProductCrudPopupComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            if (this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
                ? true
                : this.currentTotalImageCount + filesAmount <=
                    this.maxUploadableFileCount) {
                for (var i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.urls.push(event.target.result);
                    };
                    reader.readAsDataURL(event.target.files[i]);
                    this.newlySelectedFileList.push(event.target.files[i]);
                }
                this.currentTotalImageCount += filesAmount;
            }
            else {
                // alert for file upload limit
                this.snackBar.open("Can't upload more than " + this.maxUploadableFileCount + " photos", "close", { duration: 2000 });
            }
        }
    };
    ProductCrudPopupComponent.prototype.removeSelectedImg = function (index) {
        this.urls.splice(index, 1);
        this.currentTotalImageCount -= 1;
        if (this.remainImagesID.length < index + 1) {
            this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
        }
        else {
            this.remainImagesID.splice(index, 1);
        }
    };
    ProductCrudPopupComponent.prototype.prepareToSave = function (formvalue) {
        var input = new FormData();
        if (formvalue.surveyId) {
            input.append("surveyId", this.selectedSurveyID);
        }
        var videoUrl = formvalue.videoUrl;
        if (videoUrl) {
            var match = videoUrl.match(this.youTubeIdRegex);
            if (match && match[8].length == 11) {
                console.log("---------------- youtubeVideoId: - " + match[8]);
            }
            input.append("videoUrl", match[8]);
        }
        input.append("code", formvalue.code);
        input.append("quantity", formvalue.quantity);
        input.append("client", formvalue.client.id);
        input.append("expireDate", moment__WEBPACK_IMPORTED_MODULE_8__(formvalue.expireDate).format("YYYY-MM-DD"));
        input.append("name", formvalue.name);
        input.append("description", formvalue.description);
        input.append("batchNumber", formvalue.batchNumber);
        if (this.remainImagesID != null && this.remainImagesID.length > 0) {
            input.append("remainImagesID", this.remainImagesID.toString());
        }
        for (var i = 0; i < this.newlySelectedFileList.length; i++) {
            var selectedFile = this.newlySelectedFileList[i];
            var type = selectedFile.type.split("/");
            var imageName = "image_" + i + "." + type[1];
            input.append("file", selectedFile, imageName);
        }
        return input;
    };
    ProductCrudPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-crud-popup",
            template: __webpack_require__(/*! ./product-crud-popup.component.html */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_11__["egretAnimations"],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_9__["SurveyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ProductCrudPopupComponent);
    return ProductCrudPopupComponent;
}(_product_crud_common_component__WEBPACK_IMPORTED_MODULE_12__["ProductCommonComponent"]));

var ProductCreationRequest = /** @class */ (function () {
    function ProductCreationRequest(formValue) {
        this.formValue = formValue;
        this.client = new ClientSub(formValue.client);
        this.code = formValue.code;
        this.name = formValue.name;
        this.description = formValue.description;
        this.batchNumber = formValue.batchNumber;
        this.quantity = formValue.quantity;
        this.expireDate = formValue.expireDate;
        this.surveyId = formValue.surveyId;
        this.file = formValue.file;
        this.videoUrl = formValue.videoUrl;
    }
    return ProductCreationRequest;
}());

var ClientSub = /** @class */ (function () {
    function ClientSub(id) {
        this.id = id;
    }
    return ClientSub;
}());


/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -------- JA Sprint 1 - MVP -------- -->\r\n<!-- --------- Buddhi Hasanka ---------- -->\r\n\r\n\r\n<mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"m-333\">\r\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"openProductPopup({}, true)\">Add Product</button>\r\n  <span fxFlex></span>\r\n  <p class=\"mat-select-lable\"> Page Size: </p>\r\n  <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n    <mat-option [value]=\"10\">10</mat-option>\r\n    <mat-option [value]=\"20\">20</mat-option>\r\n  </mat-select>\r\n</div>\r\n\r\n\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <!-- <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\" [rows]=\"rows\" [columns]=\"\">\r\n\r\n      <ngx-datatable-column name=\"Product Code\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.code }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Product Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Batch Number\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.batchNumber }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.quantity }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Expire Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.expireDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openProductPopup(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteProduct(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button (click)=\"downloadCsv(row)\">\r\n            <mat-icon>file_download</mat-icon>\r\n          </button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable> -->\r\n\r\n\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Product Code</th>\r\n          <th>Product Name</th>\r\n          <th width=\"250px\">Description</th>\r\n          <th>Batch Number</th>\r\n          <th>Quantity</th>\r\n          <th>Expire Date</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1 pl-1\">{{row?.code}}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.name }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.description }}</td>\r\n          <td class=\"pt-1 pb-1 text-cente\">{{ row?.batchNumber }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.quantity }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.expireDate }}</td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <div class=\"pb-1\">\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button color=\"primary\" class=\"\" (click)=\"openProductPopup(row)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button color=\"warn\" class=\"\" (click)=\"deleteProduct(row)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)=\"downloadCsv(row)\">\r\n                  <mat-icon>file_download</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\">{{totalRecords}} Total</div>\r\n          </td>\r\n          <td colspan=\"7\">\r\n            <nav aria-label=\"Page navigation example\">\r\n              <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageProduct(pageNumber-1);\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageProduct(page);\">\r\n                    {{page}}\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\"  [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageProduct(pageNumber+1);\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductFilterTableComponent, CSVDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterTableComponent", function() { return ProductFilterTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVDTO", function() { return CSVDTO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-crud.service */ "./src/app/views/product-crud/product-crud.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-crud-popup/product-crud-popup.component */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/data-conversion.service */ "./src/app/shared/services/data-conversion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductFilterTableComponent = /** @class */ (function () {
    function ProductFilterTableComponent(prodService, dialog, loader, errDialog, confirmService, downloadService, conversionService) {
        this.prodService = prodService;
        this.dialog = dialog;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.columns = [];
        this.temp = [];
        // pagination
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
    }
    ProductFilterTableComponent.prototype.ngOnInit = function () {
        this.getAllProduct();
    };
    ProductFilterTableComponent.prototype.ngOnDestroy = function () {
        if (this.getProductsSub) {
            this.getProductsSub.unsubscribe();
        }
    };
    ProductFilterTableComponent.prototype.downloadCsv = function (selectedRow) {
        var _this = this;
        console.log("SELECTED RAW : " + selectedRow.id);
        this.prodService
            .getProductDetails(selectedRow.id)
            .subscribe(function (successResp) {
            var auths = successResp.content;
            var fileName = selectedRow.name +
                "_" +
                selectedRow.code +
                "_" +
                selectedRow.batchNumber;
            var csvData = _this.conversionService.convertToCsv(auths);
            _this.downloadService.downloadFile({
                name: fileName,
                type: "csv",
                data: csvData
            });
        });
    };
    ProductFilterTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        columns.splice(columns.length - 1);
        if (!columns.length)
            return;
        var rows = this.temp.filter(function (data) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                if (data[column] &&
                    data[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    };
    ProductFilterTableComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.getProductsSub = this.prodService.getAllProducts().subscribe(function (successResp) {
            _this.rows = _this.temp = successResp.content;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    // --------- BH ----------
    ProductFilterTableComponent.prototype.getPageProduct = function (pageNumber) {
        var _this = this;
        if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
            this.pageNumber = pageNumber;
            this.getProductsSub = this.prodService.getPageProducts(pageNumber, this.pageSize).subscribe(function (successResp) {
                _this.rows = _this.temp = successResp.content;
                var totalPages = successResp.pagination.totalPages;
                var totalPagesArray = [];
                if (totalPages > 1) {
                    for (var i = 1; i <= totalPages; i++) {
                        totalPagesArray.push(i);
                    }
                }
                _this.totalPages = totalPagesArray;
                _this.totalRecords = successResp.pagination.totalRecords;
            }, function (error) {
                _this.loader.close();
                console.log(error);
                console.log(error.status);
                _this.errDialog.showError(error);
            });
        }
    };
    ProductFilterTableComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.getPageProduct(this.pageNumber);
    };
    // --------- BH ----------
    ProductFilterTableComponent.prototype.deleteProduct = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.prodService.removeProduct(row, _this.rows).subscribe(function (data) {
                    _this.getAllProduct();
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            }
        });
    };
    ProductFilterTableComponent.prototype.openProductPopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new Product" : "Update Product";
        var dialogRef = this.dialog.open(_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_3__["ProductCrudPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, isNew: isNew }
        });
        console.log("RES data :");
        console.log(data);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            console.log("RES obj :");
            console.log(res);
            //res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");
            if (isNew) {
                _this.prodService.addProduct(res, _this.rows).subscribe(function (data) {
                    var id = data;
                    _this.prodService.getProductById(id).subscribe(function (data) {
                        _this.rows = _this.rows.concat(data.content);
                        console.log(_this.rows);
                    });
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            }
            else {
                _this.prodService.updateProduct(data.id, res).subscribe(function (response) {
                    console.log(response.content);
                    _this.prodService
                        .getProductById(response.content.id)
                        .subscribe(function (data) {
                        _this.rows = _this.rows.map(function (i) {
                            if (i.id === data.content.id) {
                                console.log("recent obj " + JSON.stringify(data.content));
                                return Object.assign({}, i, data.content);
                            }
                            return i;
                        });
                    });
                    _this.loader.close();
                    return _this.rows.slice();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            }
        });
    };
    ProductFilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-filter-table",
            template: __webpack_require__(/*! ./product-filter-table.component.html */ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_product_crud_service__WEBPACK_IMPORTED_MODULE_1__["ProductCrudService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"],
            _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_8__["AppFileDownloadService"],
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__["AppDataConversionService"]])
    ], ProductFilterTableComponent);
    return ProductFilterTableComponent;
}());

var CSVDTO = /** @class */ (function () {
    function CSVDTO(proDetails, authCodes) {
        this.proDetails = proDetails;
        this.authCodes = authCodes;
    }
    return CSVDTO;
}());



/***/ })

}]);
//# sourceMappingURL=views-product-crud-product-crud-module.js.map