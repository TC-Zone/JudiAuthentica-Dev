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

/***/ "./src/app/model/ProductModel.model .ts":
/*!**********************************************!*\
  !*** ./src/app/model/ProductModel.model .ts ***!
  \**********************************************/
/*! exports provided: ProductCreationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreationRequest", function() { return ProductCreationRequest; });
var ProductCreationRequest = /** @class */ (function () {
    function ProductCreationRequest(formValue) {
        this.formValue = formValue;
        this.code = formValue.code;
        this.name = formValue.name;
        this.description = formValue.description;
        this.batchNumber = formValue.batchNumber;
        this.quantity = formValue.quantity;
        this.expireDate = formValue.expireDate;
        this.communityId = formValue.communityId;
        this.categoryId = formValue.categoryId;
        this.file = formValue.file;
        this.videoUrl = formValue.videoUrl;
    }
    return ProductCreationRequest;
}());



/***/ }),

/***/ "./src/app/views/client/client.service.ts":
/*!************************************************!*\
  !*** ./src/app/views/client/client.service.ts ***!
  \************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.clientUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "clients";
        this.specsUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "spec";
        this.licenseUrl = this.clientUrl + "/license";
        this.userUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.roleUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-roles";
        this.geoUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "geo";
        this.imageUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + 'downloads/client/';
        this.sectionsUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "sections/";
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getClientsByFilter = function (name, pageSize, pageNumber) {
        return this.http.get(this.clientUrl +
            "?name=" +
            name +
            "&pageNumber=" +
            pageNumber +
            "&pageSize=" +
            pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getUsers = function (clientId, keyword, pageSize, pageNumber, isSuperAdmin) {
        return this.http.get(this.userUrl +
            "?id=" +
            clientId +
            "&keyword=" +
            keyword +
            "&pageNumber=" +
            pageNumber +
            "&pageSize=" +
            pageSize +
            "&isSuperAdmin=" +
            isSuperAdmin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // getUsers(id): Observable<any> {
    //   return this.http.get(this.clientUrl + "/" + id).pipe(catchError(this.handleError));
    // }
    ClientService.prototype.getClientsSuggestions = function () {
        return this.http.get(this.clientUrl + "/suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getRoles = function () {
        return this.http.get(this.roleUrl + "/suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getCategory = function () {
        return this.http.get(this.specsUrl + "/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getCountry = function () {
        return this.http.get(this.geoUrl + "/countries").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getDisplayAuthority = function () {
        return this.http.get(this.sectionsUrl + "types?types=D").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getAllUserAuthority = function () {
        return this.http.get(this.sectionsUrl + "types?types=U&types=D").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getCommonAndAdminAuthority = function () {
        return this.http.get(this.sectionsUrl + "types?types=C&types=A").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getRoleAuthorities = function (roleId) {
        return this.http.get(this.roleUrl + '/' + roleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getAdminAuthority = function (id) {
        return this.http.get(this.roleUrl + "/authorities/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getClientCategories = function (id) {
        return this.http.get(this.clientUrl + "/categories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Service is accessed by two places - In Product creation popup , New User Creation
    ClientService.prototype.getClientCommunities = function (id) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "communities/client/" + id + "/" + undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.addClient = function (item) {
        return this.http.post(this.clientUrl, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getClient = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateClient = function (id, item) {
        return this.http
            .put(this.clientUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateClientLicense = function (id, item) {
        return this.http
            .put(this.licenseUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateClientCategory = function (id, item) {
        return this.http
            .put(this.clientUrl + "/categories/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateClientStatus = function (id) {
        return this.http.get(this.clientUrl + "/status/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.addUser = function (item) {
        return this.http.post(this.userUrl, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getUser = function (id) {
        return this.http.get(this.userUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateUser = function (id, item) {
        return this.http
            .put(this.userUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.deleteUser = function (id) {
        return this.http.delete(this.userUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateUserCategories = function (id, item) {
        return this.http
            .put(this.userUrl + "/categories/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateUserCommunity = function (id, item) {
        console.log(this.userUrl + "/communities/" + id);
        return this.http
            .put(this.userUrl + "/communities/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.deleteUserById = function (userId) {
        return this.http
            .delete(this.userUrl + "/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /*
    * Create New User Role
    * Created by Prasad Kumara
    * 14/02/2019
    */
    ClientService.prototype.createNewRole = function (roleObj) {
        return this.http.post(this.roleUrl, roleObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /*
    * Update New User Role
    * Created by Prasad Kumara
    * 14/02/2019
    */
    ClientService.prototype.updateRloe = function (roleId, roleObj) {
        return this.http.put(this.roleUrl + '/' + roleId, roleObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /*
    * Get All User Role From Data Base
    * Created by Prasad Kumara
    * 14/02/2019
    */
    ClientService.prototype.getAllUserRoles = function () {
        return this.http.get(this.roleUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /*
    * Get All Authorities From Data Base
    * Created by Prasad Kumara
    * 14/02/2019
    */
    ClientService.prototype.getAllAuthorities = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + 'platform-authorities')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.handleError = function (error) {
        // console.log(error);
        if (error.status !== 401) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ClientService);
    return ClientService;
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
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/client.service */ "./src/app/views/client/client.service.ts");
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
    /** RAVEEN - 2019/04/04
     * Fetch All the categories bound to client
     *
     * TODO : if Super admin log into system, this service should fetch all the categories without client filtering.
     * local storage way can be good for identify which user is logged into system and user's roles data
     *
     * @param clientId
     *
     */
    ProductCommonComponent.prototype.getClientCategories = function (clientId) {
        var _this = this;
        this.getCategoriesSub = this.clientService
            .getClientCategories(clientId)
            .subscribe(function (data) {
            _this.categories = data.content;
        });
    };
    ProductCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "product-common",
            template: ""
        }),
        __metadata("design:paramtypes", [_survey_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
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
/* harmony import */ var _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/DateValidator.directive */ "./src/app/directives/DateValidator.directive.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_crud_common_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-crud-common.component */ "./src/app/views/product-crud/product-crud-common.component.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var _community_community_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../community/community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
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
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_crud_routing__WEBPACK_IMPORTED_MODULE_4__["ProductCrudRouts"])
            ],
            declarations: [
                _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__["ProductFilterTableComponent"],
                _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"],
                _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_11__["DateValidator"],
                _product_crud_common_component__WEBPACK_IMPORTED_MODULE_15__["ProductCommonComponent"]
            ],
            providers: [
                _product_crud_service__WEBPACK_IMPORTED_MODULE_7__["ProductCrudService"],
                _client_client_service__WEBPACK_IMPORTED_MODULE_16__["ClientService"],
                _survey_survey_service__WEBPACK_IMPORTED_MODULE_13__["SurveyService"],
                _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"],
                _community_community_service__WEBPACK_IMPORTED_MODULE_18__["ComunityService"],
                _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_19__["AppInfoService"]
            ],
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

module.exports = "<form [formGroup]=\"productForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <!-- <input matInput [formControl]=\"productForm.controls['name']\" required name=\"name\" letterOnly placeholder=\"Product Name\"> -->\r\n          <input matInput [formControl]=\"productForm.controls['name']\" required name=\"name\" pattern=\"[a-zA-Z\\s]*\" placeholder=\"Product Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- Category dropdown -->\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"productForm.controls['categoryId']\" required placeholder=\"Select A Category\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- Quantity Input -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input type=\"number\" matInput name=\"quantity\" [formControl]=\"productForm.controls['quantity']\"  pattern=\"^[+]?\\d+$\" required placeholder=\"Quantity\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <!-- Description Input -->\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"desc\" [formControl]=\"productForm.controls['description']\" required name=\"description\"\r\n            placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- Batch Number Input -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"batchNumber\" [formControl]=\"productForm.controls['batchNumber']\" required placeholder=\"Batch Number\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <!-- Expire Date Input -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"expireDate\" [min]=\"tomorrow\" [matDatepicker]=\"picker\"\r\n            [formControl]=\"productForm.controls['expireDate']\" required placeholder=\"Expire Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <!-- Community AutoComplete box -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input type=\"text\" placeholder=\"Select A Community\" matInput\r\n            [formControl]=\"productForm.controls['communityId']\" [matAutocomplete]=\"auto\"\r\n            (focusout)=\"communityOnFocusOut($event)\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onCommunitySelectionChanged($event)\">\r\n            <mat-option *ngFor=\"let option of communityFilteredOption | async; let i = index\" [value]=\"communityIDs[i]\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <!-- Youtube Video URL Input -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <!-- <input matInput name=\"videoUrl\" [formControl]=\"productForm.controls['videoUrl']\" placeholder=\"Youtube Video URL\" type=\"text\"> -->\r\n          <input matInput name=\"videoUrl\" [formControl]=\"productForm.controls['videoUrl']\" placeholder=\"Youtube Video URL\" type=\"text\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- --------- New Code ----------------- -->\r\n\r\n      <!-- --------- hidden file input --------- -->\r\n      <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" [formControl]=\"productForm.controls['file']\"\r\n        multiple style=\"display: none\" />\r\n\r\n\r\n      <!-- --------- file input click button --------- -->\r\n      <!-- *ngIf=\"data.isNew\"  -->\r\n      <div layout-margin layout-padding>\r\n        <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\" [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n        (false) :\r\n        (this.currentTotalImageCount === this.maxUploadableFileCount)\" type=\"button\">\r\n          Browse Images\r\n          <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.currentTotalImageCount > 0)\"> ({{this.currentTotalImageCount}} / 4)</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"cp_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngFor='let url of urls; let i = index'\r\n          fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n          <mat-card class=\"p-0\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"productForm.invalid || urls.length === 0\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductCrudPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudPopupComponent", function() { return ProductCrudPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _product_crud_common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../product-crud-common.component */ "./src/app/views/product-crud/product-crud-common.component.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var _community_community_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../community/community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
/* harmony import */ var app_model_ProductModel_model___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/model/ProductModel.model  */ "./src/app/model/ProductModel.model .ts");
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
    function ProductCrudPopupComponent(data, dialogRef, clientService, surveyService, authService, fb, snackBar, communityService, appInfoService) {
        var _this = _super.call(this, surveyService, clientService) || this;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.clientService = clientService;
        _this.surveyService = surveyService;
        _this.authService = authService;
        _this.fb = fb;
        _this.snackBar = snackBar;
        _this.communityService = communityService;
        _this.appInfoService = appInfoService;
        _this.imageUrl = "assets/images/placeholder.jpg";
        // image uploader related properties
        _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({ url: "upload_url" });
        _this.hasBaseDropZoneOver = false;
        //------- new --------
        _this.maxUploadableFileCount = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
        _this.urls = [];
        _this.newlySelectedFileList = [];
        _this.remainImagesID = [];
        _this.currentTotalImageCount = 0;
        _this.communities = [];
        _this.communityIDs = [];
        // .............REGEX for Youtube link validation...............
        _this.youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        _this.youTubeIdRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\/)|(\?v=|\&v=))([^#\&\?]*).*/;
        return _this;
    }
    ProductCrudPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // validate back dates
        this.tomorrow = _utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__["DateValidator"].getTomorrow();
        var detailObj = this.authService.getLoggedUserDetail();
        this.clientId = detailObj.userData.client.id;
        this.getClientCategories(this.clientId);
        if (!this.data.isNew) {
            var images = this.data.payload.imageObjects;
            images.forEach(function (image) {
                var img = environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].productimageUrl + "downloadFile/" + image.id;
                _this.remainImagesID.push(image.id);
                _this.urls.push(img);
            });
            this.currentTotalImageCount = this.remainImagesID.length;
        }
        this.getAllClientCommunities(this.clientId);
        this.buildProductForm(this.data.payload, this.data.isNew);
    };
    ProductCrudPopupComponent.prototype.communityOnChange = function () {
        var _this = this;
        this.communityFilteredOption = this.productForm.controls["communityId"].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._communityFilter(value); }));
        this.onCommunitySelectionChanged();
    };
    ProductCrudPopupComponent.prototype._communityFilter = function (value) {
        if (value === "" || isNaN(Number(value))) {
            var filterValue_1 = value.toLowerCase();
            return this.communities.filter(function (option) {
                return option.toLowerCase().includes(filterValue_1);
            });
        }
    };
    ProductCrudPopupComponent.prototype.onCommunitySelectionChanged = function () {
        var inputVal = this.productForm.controls["communityId"].value;
        var id = this.communityIDs.indexOf(inputVal);
        if (id > -1) {
            this.productForm.controls["communityId"].setValue(this.communities[id]);
            this.selectedCommunityId = inputVal;
        }
        else {
            console.log("============ else ==================");
        }
    };
    ProductCrudPopupComponent.prototype.communityOnFocusOut = function (event) {
        if (!(this.communities.indexOf(event.currentTarget.value) > -1)) {
            this.productForm.controls["communityId"].setValue("");
        }
    };
    ProductCrudPopupComponent.prototype.getAllClientCommunities = function (clientId) {
        var _this = this;
        this.clientService.getClientCommunities(clientId).subscribe(function (data) {
            var communities = data.content;
            communities.forEach(function (element) {
                _this.communities.push(element.name);
                _this.communityIDs.push(element.id);
                _this.communityOnChange();
            });
        });
    };
    ProductCrudPopupComponent.prototype.buildProductForm = function (fieldItem, isNew) {
        // const client = fieldItem.client;
        // const clientId = client ? client.id : null;
        var videoUrl = fieldItem.videoUrl;
        var youtubeUrl = null;
        if (videoUrl) {
            youtubeUrl = isNew
                ? videoUrl
                : "https://www.youtube.com/watch?v=" + videoUrl;
            console.log(youtubeUrl);
        }
        this.productForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.name || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batchNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.quantity || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            expireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            videoUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](youtubeUrl || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.categoryId || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            communityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](fieldItem.communityId || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ProductCrudPopupComponent.prototype.submit = function () {
        var _this = this;
        this.communityService
            .licenseExpireState(this.clientId, "tags")
            .subscribe(function (response) {
            var tempRes = response;
            var quotaExpire = tempRes.content.expired;
            var usage = tempRes.content.usage;
            var quota = tempRes.content.quota;
            var qty = _this.productForm.get("quantity").value;
            var balance = quota - usage;
            if (qty > balance) {
                var infoData = {
                    title: "Quantity Exceed!",
                    message: "To extend the order quantity please contact your Administrator.",
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            else {
                var productRequest = new app_model_ProductModel_model___WEBPACK_IMPORTED_MODULE_16__["ProductCreationRequest"](_this.productForm.value);
                var formData = void 0;
                formData = _this.prepareToSave(productRequest);
                _this.dialogRef.close(formData);
            }
        });
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
        // RAVEEN - 2014/04/04 : client id is no longer an input
        input.append("client", this.clientId);
        if (formvalue.communityId) {
            input.append("communityId", this.selectedCommunityId);
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
        input.append("expireDate", moment__WEBPACK_IMPORTED_MODULE_7__(formvalue.expireDate).format("YYYY-MM-DD"));
        input.append("name", formvalue.name);
        input.append("description", formvalue.description);
        input.append("batchNumber", formvalue.batchNumber);
        input.append("categoryId", formvalue.categoryId);
        if (this.remainImagesID != null && this.remainImagesID.length > 0) {
            input.append("remainImagesID", this.remainImagesID.toString());
        }
        for (var i = 0; i < this.newlySelectedFileList.length; i++) {
            var selectedFile = this.newlySelectedFileList[i];
            var type = selectedFile.type.split("/");
            var imageName = "image_" + i + "." + type[1];
            input.append("file", selectedFile, imageName);
        }
        console.log('------------------------- input', input);
        return input;
    };
    ProductCrudPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-crud-popup",
            template: __webpack_require__(/*! ./product-crud-popup.component.html */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_10__["egretAnimations"],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_8__["SurveyService"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _community_community_service__WEBPACK_IMPORTED_MODULE_14__["ComunityService"],
            _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_15__["AppInfoService"]])
    ], ProductCrudPopupComponent);
    return ProductCrudPopupComponent;
}(_product_crud_common_component__WEBPACK_IMPORTED_MODULE_11__["ProductCommonComponent"]));



/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -------- JA Sprint 1 - MVP -------- -->\r\n<!-- --------- Buddhi Hasanka ---------- -->\r\n\r\n<mat-card class=\"p-10\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n      <input matInput placeholder=\"Search by name...\" value=\"\" (keyup)='updateFilter($event)'>\r\n    </mat-form-field>\r\n\r\n    <div class=\"m-333\">\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n      <span fxFlex></span>\r\n      <button mat-raised-button class=\"mb-05\" (click)=\"handleNewProductSave()\" color=\"accent\">Add Product</button>\r\n    </div>\r\n\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Product Name</th>\r\n          <th width=\"250px\">Description</th>\r\n          <th>Batch Number</th>\r\n          <th>Quantity</th>\r\n          <th>Expire Date</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1\">{{ row?.name }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.description }}</td>\r\n          <td class=\"pt-1 pb-1 text-cente\">{{ row?.batchNumber }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.quantity }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.expireDate }}</td>\r\n          <td class=\"pt-1 pb-1\">\r\n\r\n            <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item (click)=\"openProductPopup(row)\">\r\n                <mat-icon>edit</mat-icon>Edit\r\n              </button>\r\n\r\n              <button mat-menu-item color=\"warn\" (click)=\"deleteProduct(row)\">\r\n                <mat-icon>delete</mat-icon>Delete\r\n              </button>\r\n\r\n              <button mat-menu-item (click)=\"downloadCsv(row)\">\r\n                <mat-icon>file_download</mat-icon>Download CSV\r\n              </button>\r\n            </mat-menu>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <nav aria-label=\"Page navigation example\">\r\n            <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n              <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                <a class=\"page-link\" (click)=\"this.getPageClient(pageNumber-1);\" aria-label=\"Previous\">\r\n                  <span aria-hidden=\"true\">&laquo;</span>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                <a class=\"page-link\" (click)=\"this.getPageClient(page);\">\r\n                  {{page}}\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                <a class=\"page-link\" (click)=\"this.getPageClient(pageNumber+1);\" aria-label=\"Next\">\r\n                  <span aria-hidden=\"true\">&raquo;</span>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <div class=\"pagination\">{{totalRecords}} Total</div>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n  </mat-card-content>\r\n\r\n</mat-card>"

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
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var _community_community_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../community/community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
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
    function ProductFilterTableComponent(prodService, dialog, loader, errDialog, confirmService, downloadService, conversionService, authService, communityService, appInfoService) {
        this.prodService = prodService;
        this.dialog = dialog;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.authService = authService;
        this.communityService = communityService;
        this.appInfoService = appInfoService;
        this.columns = [];
        this.temp = [];
        // pagination
        this.keyword = "";
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
    }
    ProductFilterTableComponent.prototype.ngOnInit = function () {
        var userObj = this.authService.getLoggedUserDetail();
        this.categories = userObj.userData.categories;
        this.clientId = userObj.userData.client.id;
        var predefinedStatus = userObj.userData.role.predefined;
        this.predefined = predefinedStatus ? "1" : "0";
        this.getPageProduct(this.pageNumber);
    };
    ProductFilterTableComponent.prototype.ngOnDestroy = function () {
        if (this.getProductsSub) {
            this.getProductsSub.unsubscribe();
        }
    };
    ProductFilterTableComponent.prototype.downloadCsv = function (selectedRow) {
        var _this = this;
        console.log("------------------------------- ProductFilterTableComponent : SELECTED RAW : " + selectedRow.id);
        this.prodService
            .getProductDetails(selectedRow.id)
            .subscribe(function (successResp) {
            var auths = successResp.content;
            var fileName = selectedRow.name.toUpperCase() +
                "_BATCH_" +
                selectedRow.batchNumber;
            var csvData = _this.conversionService.convertToCsv(auths);
            console.log("fileName : " + fileName);
            _this.downloadService.downloadFile({
                name: fileName,
                type: "csv",
                data: csvData
            });
        });
    };
    ProductFilterTableComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.getPageProduct(this.pageNumber);
    };
    ProductFilterTableComponent.prototype.updateFilter = function (event) {
        if (event.keyCode === 13) {
            this.keyword = event.target.value.toLowerCase();
            this.pageNumber = 1;
            this.getPageProduct(this.pageNumber);
        }
    };
    ProductFilterTableComponent.prototype.getCategoryIDs = function (categories) {
        var categoryIDs = [];
        categories.forEach(function (cat) {
            categoryIDs.push(cat.id);
        });
        return categoryIDs;
    };
    ProductFilterTableComponent.prototype.getPageProduct = function (pageNumber) {
        var _this = this;
        if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
            this.pageNumber = pageNumber;
            this.getProductsSub = this.prodService
                .getPageProducts(this.keyword, this.pageNumber, this.pageSize, this.clientId, this.getCategoryIDs(this.categories), this.predefined)
                .subscribe(function (successResp) {
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
                console.log('------------------------------- ProductFilterTableComponent : error - ', error);
                console.log('------------------------------- ProductFilterTableComponent : error.status - ', error.status);
                _this.errDialog.showError(error);
            });
        }
    };
    ProductFilterTableComponent.prototype.deleteProduct = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Are you sure that you want to delete this product?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.prodService.removeProduct(row, _this.rows).subscribe(function (data) {
                    _this.getPageProduct(_this.pageNumber);
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            }
        });
    };
    ProductFilterTableComponent.prototype.handleNewProductSave = function () {
        var _this = this;
        this.communityService
            .licenseExpireState(this.clientId, "tags")
            .subscribe(function (response) {
            var tempRes = response;
            var quotaExpire = tempRes.content.expired;
            if (quotaExpire) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of tags count has expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            else {
                _this.openProductPopup({}, true);
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
        console.log("------------------------------- ProductFilterTableComponent : RES data - ", data);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            console.log("------------------------------- ProductFilterTableComponent : RES obj - ", res);
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
                                console.log("------------------------------- ProductFilterTableComponent : recent obj - " + JSON.stringify(data.content));
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
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__["AppDataConversionService"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _community_community_service__WEBPACK_IMPORTED_MODULE_11__["ComunityService"],
            _shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__["AppInfoService"]])
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