(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-evote-evote-module"],{

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

/***/ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"evoteForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content  [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <!-- <div fxFlex=\"34\" class=\"pr-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput placeholder=\"Choose a client\" [matAutocomplete]=\"auto\" [formControl]=\"evoteForm.controls['client']\" >\r\n                </mat-form-field>\r\n\r\n                <mat-autocomplete #auto=\"matAutocomplete\" >\r\n                    <mat-option *ngFor=\"let user of (filteredClient | async)?.content\" [value]=\"user\">\r\n                      <span>{{ user.name }}</span>\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </div> -->\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"evoteForm.controls['topic']\" required name=\"topic\" positiveNumberAndLetterOnly\r\n            placeholder=\"Topic\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select *ngIf='data.isNew' [formControl]=\"evoteForm.controls['clientId']\" required placeholder=\"Select A Client\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.name}}</mat-option>\r\n          </mat-select>\r\n\r\n          <mat-select *ngIf='!data.isNew' [formControl]=\"evoteForm.controls['clientId']\"\r\n            required placeholder=\"Select A Client\">\r\n            <mat-option *ngFor='let client of clients | arrayFilter : evoteForm.controls[\"clientId\"].value : \"clients\"'\r\n              [value]=\"client.id\">{{client.name}}</mat-option>\r\n          </mat-select>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"evoteForm.controls['code']\" required name=\"proCode\"\r\n            positiveNumberAndLetterOnly placeholder=\"E-Vote Code\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"desc\" [formControl]=\"evoteForm.controls['description']\" required name=\"description\"\r\n            positiveNumberAndLetterOnly placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"expireDate\" [min]=\"tomorrow\" [matDatepicker]=\"picker\" [formControl]=\"evoteForm.controls['expireDate']\"\r\n            required placeholder=\"Expire Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"batchNumber\" [formControl]=\"evoteForm.controls['batchNumber']\"\r\n            positiveNumberAndLetterOnly required placeholder=\"Batch Number\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"evoteForm.controls['surveyId']\" placeholder=\"Select A Feedback\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let survey of surveyRows\" [value]=\"survey.id\">{{survey.topic}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- --------- Old Code --------- -->\r\n\r\n      <!-- <div *ngIf='data.isNew' fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-card-content>\r\n          <input (change)=\"onSelectFile($event)\" id=\"imageAvatar\" type=\"file\" [formControl]=\"evoteForm.controls['file']\" />\r\n        </mat-card-content>\r\n      </div>\r\n\r\n      <div *ngIf='data.isNew' fxFlex=\"100\" class=\"pr-1\">\r\n        <p>Image Preview</p>\r\n        <img width=\"200px\" height=\"250px\" src=\"\" src=\"{{ imageUrl}}\" id=\"dishPhoto\">\r\n      </div> -->\r\n\r\n\r\n\r\n     <!-- --------- New Code --------- -->\r\n      <!-- --------- hidden file input --------- -->\r\n      <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" [formControl]=\"evoteForm.controls['file']\"\r\n        multiple style=\"display: none\" />\r\n\r\n\r\n      <!-- --------- file input click button --------- -->\r\n      <!-- *ngIf=\"data.isNew\"  -->\r\n      <div layout-margin layout-padding>\r\n        <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\"\r\n        [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n        (false) :\r\n        (this.currentTotalImageCount === this.maxUploadableFileCount)\"\r\n          type=\"button\">\r\n          Browse Images\r\n          <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.currentTotalImageCount > 0)\"> ({{this.currentTotalImageCount}} / 4)</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"cp_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngFor='let url of urls; let i = index' fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n          <mat-card    class=\"p-0\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <div *ngIf='data.isNew' fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-card-content>\r\n\r\n                <div class=\"mb-1 mt-1\">\r\n                  <p>Upload a Product Image</p>\r\n                  <input (change)=\"onSelectFile($event)\" type=\"file\" [formControl]=\"evoteForm.controls['file']\" ng2FileSelect [uploader]=\"uploader\"\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"mb-1\">\r\n                  <div ng2FileDrop [ngClass]=\"{'dz-file-over': hasBaseDropZoneOver}\" [uploader]=\"uploader\" (fileOver)=\"fileOverBase($event)\"\r\n                    class=\"fileupload-drop-zone\">\r\n                    Drop png/jpeg file here\r\n                  </div>\r\n                </div>\r\n\r\n                <table class=\"default-table mat-box-shadow\" style=\"width: 100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"50%\">Name</th>\r\n                      <th>Size</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody *ngIf=\"uploader.queue.length; else tableNoData\">\r\n                    <tr>\r\n                      <td>{{ imageObject.file.name }}</td>\r\n                      <td nowrap>{{ imageObject.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                      <td nowrap>\r\n                        <button mat-raised-button class=\"mat-warn\" type='button' (click)=\"imageObject.remove()\">Remove</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <ng-template #tableNoData>\r\n                    <p [ngStyle]=\"{padding: '0 1.2rem'}\">Queue is empty</p>\r\n                  </ng-template>\r\n                </table>\r\n\r\n              </mat-card-content>\r\n            </div> -->\r\n\r\n\r\n    </div>\r\n  </mat-dialog-content>\r\n\r\n\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"evoteForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts ***!
  \******************************************************************************/
/*! exports provided: MY_FORMATS, EvotePopupComponent, EvoteCreationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvotePopupComponent", function() { return EvotePopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoteCreationRequest", function() { return EvoteCreationRequest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _evote_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
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
var EvotePopupComponent = /** @class */ (function () {
    function EvotePopupComponent(data, fb, evoteService, clientService, surveyService, snackBar, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.evoteService = evoteService;
        this.clientService = clientService;
        this.surveyService = surveyService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        // image uploader related properties
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({ url: "upload_url" });
        this.hasBaseDropZoneOver = false;
        this.imageUrl = "assets/images/placeholder.jpg";
        //------- new --------
        this.maxUploadableFileCount = null; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
        this.urls = [];
        this.newlySelectedFileList = [];
        this.remainImagesID = [];
        this.currentTotalImageCount = 0;
    }
    EvotePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.isNew) {
            console.log("---------- IN -------------");
            var images = this.data.payload.imageObjects;
            images.forEach(function (image) {
                var img = environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].evoteimageUrl + "downloadFile/" + image.id;
                _this.remainImagesID.push(image.id);
                _this.urls.push(img);
            });
            this.currentTotalImageCount = this.remainImagesID.length;
            this.printTest();
        }
        this.getAllSurvey();
        this.tomorrow = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_9__["DateValidator"].getTomorrow();
        this.buildEvoteForm(this.data.payload);
        this.getClientSuggestions();
        this.getAllSurvey();
        // console.log(this.data.payload);
    };
    EvotePopupComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    // image uploader related functions from here
    EvotePopupComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    // --------- Old Code -----------------
    // onSelectFile(event) {
    //   let x = this.uploader.queue.length - 1;
    //   this.imageObject = this.uploader.queue[x];
    //   let reader = new FileReader();
    //   if (event.target.files && event.target.files.length > 0) {
    //     this.imageFile = event.target.files[0];
    //     reader.readAsDataURL(this.imageFile);
    //     reader.onload = (event: any) => {
    //       this.imageUrl = event.target.result;
    //       console.log("IMAGE URL  : " + this.imageUrl);
    //     };
    //   }
    // }
    // --------- New Code -----------------
    // File uploader validation and upload
    EvotePopupComponent.prototype.onSelectFile = function (event) {
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
                // alert for file uploa limit
                this.snackBar.open("Can't upload more than " + this.maxUploadableFileCount + " photos", "close", { duration: 2000 });
            }
            this.printTest();
        }
    };
    // --------- For Testing -----------------
    EvotePopupComponent.prototype.printTest = function () {
        console.log("--------------- start ------------------");
        console.log("UPDATE URLS ...............................");
        console.log(this.urls);
        console.log("REMAIN IMAGE ID ARRAY ....................................");
        console.log(this.remainImagesID);
        console.log("TOTAL IMAGE COUNT ....................................");
        console.log(this.currentTotalImageCount);
        console.log("NEWLY SELECTED FILE ARRAY  ....................................");
        console.log(this.newlySelectedFileList);
        console.log("--------------- end ------------------");
    };
    EvotePopupComponent.prototype.removeSelectedImg = function (index) {
        console.log("remove -- " + index);
        console.log("remainImagesID.length -- " + this.remainImagesID.length);
        console.log("remove -- " + index);
        this.urls.splice(index, 1);
        this.currentTotalImageCount -= 1;
        if (this.remainImagesID.length < index + 1) {
            this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
        }
        else {
            this.remainImagesID.splice(index, 1);
        }
        this.printTest();
    };
    EvotePopupComponent.prototype.buildEvoteForm = function (fieldItem) {
        this.evoteForm = this.fb.group({
            topic: [fieldItem.topic || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientId: [fieldItem.clientId || "", { disabled: !this.data.isNew }],
            code: [fieldItem.code || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expireDate: [fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            batchNumber: [fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surveyId: [fieldItem.surveyId || null],
            file: [fieldItem.file || ""]
        });
    };
    EvotePopupComponent.prototype.submit = function () {
        console.log("PRODUCT FORM VALUES ");
        console.log(this.evoteForm.value);
        var evoteRequest = new EvoteCreationRequest(this.evoteForm.value);
        console.log("EVOTE CreationRequest" + JSON.stringify(evoteRequest));
        var formData;
        console.log("NEW SAVE CONTEXT");
        console.log(this.prepareToSave(evoteRequest));
        formData = this.prepareToSave(evoteRequest);
        //console.log(this.evoteForm.value)
        console.log("prepared form data ");
        console.log(formData);
        this.dialogRef.close(formData);
    };
    EvotePopupComponent.prototype.prepareToSave = function (formvalue) {
        var input = new FormData();
        if (formvalue.surveyId) {
            input.append("surveyId", formvalue.surveyId);
        }
        input.append("code", formvalue.code);
        input.append("quantity", formvalue.quantity);
        input.append("expireDate", moment__WEBPACK_IMPORTED_MODULE_7__(formvalue.expireDate).format("YYYY-MM-DD"));
        input.append("topic", formvalue.topic);
        input.append("description", formvalue.description);
        input.append("batchNumber", formvalue.batchNumber);
        input.append("clientId", formvalue.clientId.id);
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
    EvotePopupComponent.prototype.getAllSurvey = function () {
        var _this = this;
        this.getAllSurveySub = this.surveyService
            .getAllSurveys()
            .subscribe(function (successResp) {
            _this.surveyRows = successResp.content;
        });
    };
    EvotePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-evote-popup",
            template: __webpack_require__(/*! ./evote-popup.component.html */ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_11__["egretAnimations"],
            providers: [
                {
                    provide: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
                    deps: [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]]
                },
                { provide: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _evote_service_service__WEBPACK_IMPORTED_MODULE_3__["EvoteService"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_8__["SurveyService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EvotePopupComponent);
    return EvotePopupComponent;
}());

var EvoteCreationRequest = /** @class */ (function () {
    function EvoteCreationRequest(formValue) {
        this.formValue = formValue;
        this.code = formValue.code;
        this.quantity = formValue.quantity;
        this.expireDate = formValue.expireDate;
        this.topic = formValue.topic;
        this.description = formValue.description;
        this.batchNumber = formValue.batchNumber;
        this.surveyId = formValue.surveyId;
        this.clientId = new ClientSub(formValue.clientId);
        this.file = formValue.file;
    }
    return EvoteCreationRequest;
}());

var ClientSub = /** @class */ (function () {
    function ClientSub(id) {
        this.id = id;
    }
    return ClientSub;
}());


/***/ }),

/***/ "./src/app/views/evote/evote-table/evote-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -------- JA Sprint 1 - MVP -------- -->\r\n<!-- --------- Buddhi Hasanka ---------- -->\r\n\r\n\r\n\r\n<mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"m-333\">\r\n  <button mat-raised-button class=\"mr-1 mb-05\" (click)=\"openEvotePopup({}, true)\" color=\"primary\">Add E-Vote</button>\r\n  <button mat-raised-button class=\"mb-05\" (click)=\"openVoterPopup({})\" color=\"accent\">Add Voters</button>\r\n  <span fxFlex></span>\r\n  <p class=\"mat-select-lable\"> Page Size: </p>\r\n  <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n    <mat-option [value]=\"10\">10</mat-option>\r\n    <mat-option [value]=\"20\">20</mat-option>\r\n  </mat-select>\r\n</div>\r\n\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n\r\n\r\n    <!-- <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\" [rows]=\"rows\" [columns]=\"\">\r\n\r\n      <ngx-datatable-column name=\"Topic\"  [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.topic }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Client\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <span *ngFor='let client of clients | arrayFilter : row?.clientId : \"clients\"' >{{ client.name }}</span>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Code\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.code }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Expire Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.expireDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Batch Number\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.batchNumber }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" (click)=\"openEvotePopup(row)\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteEvote(row)\"><mat-icon>delete</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button   (click)=\"downloadCsv(row)\"><mat-icon>file_download</mat-icon></button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable> -->\r\n\r\n\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Topic</th>\r\n          <th>Client</th>\r\n          <th>Code</th>\r\n          <th>Description</th>\r\n          <th>Expire Date</th>\r\n          <th>Batch Number</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1 pl-1\">{{ row?.topic }}</td>\r\n          <td class=\"pt-1 pb-1\">\r\n            <span *ngFor='let client of clients | arrayFilter : row?.clientId : \"clients\"'>{{\r\n              client.name }}</span></td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.code }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.description }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.expireDate }}</td>\r\n          <td class=\"pt-1 pb-1\">{{ row?.batchNumber }}</td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <div class=\"pb-1\">\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button color=\"primary\" (click)=\"openEvotePopup(row)\" class=\"mr-1\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteEvote(row)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)=\"downloadCsv(row)\">\r\n                  <mat-icon>file_download</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\"> Total  {{totalRecords}}</div>\r\n          </td>\r\n          <td colspan=\"7\">\r\n\r\n            <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                  <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                    <a class=\"page-link\" (click)=\"this.getPageEvote(pageNumber-1);\" aria-label=\"Previous\">\r\n                      <span aria-hidden=\"true\">&laquo;</span>\r\n                      <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                    <a class=\"page-link\" (click)=\"this.getPageEvote(page);\">\r\n                      {{page}}\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                    <a class=\"page-link\" (click)=\"this.getPageEvote(pageNumber+1);\" aria-label=\"Next\">\r\n                      <span aria-hidden=\"true\">&raquo;</span>\r\n                      <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n\r\n\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/evote/evote-table/evote-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-table.component.ts ***!
  \******************************************************************/
/*! exports provided: EvoteTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoteTableComponent", function() { return EvoteTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _evote_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/data-conversion.service */ "./src/app/shared/services/data-conversion.service.ts");
/* harmony import */ var _evote_evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../evote/evote-table/evote-popup/evote-popup.component */ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts");
/* harmony import */ var _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../voter-popup/voter-popup.component */ "./src/app/views/evote/voter-popup/voter-popup.component.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EvoteTableComponent = /** @class */ (function () {
    function EvoteTableComponent(evoteService, loader, errDialog, confirmService, downloadService, conversionService, dialog, clientService) {
        this.evoteService = evoteService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.dialog = dialog;
        this.clientService = clientService;
        this.columns = [];
        this.temp = [];
        // pagination
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
    }
    EvoteTableComponent.prototype.ngOnInit = function () {
        this.getAllEvote();
        this.getClientSuggestions();
    };
    EvoteTableComponent.prototype.downloadCsv = function (selectedRow) {
        var _this = this;
        console.log("SELECTED RAW : " + selectedRow.id);
        this.evoteService.getEvoteDetails(selectedRow.id).subscribe(function (successResp) {
            var auths = successResp.content;
            var fileName = selectedRow.topic +
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
    EvoteTableComponent.prototype.ngOnDestroy = function () {
        if (this.getClientSub) {
            this.getClientSub.unsubscribe();
        }
    };
    // downloadCsv(selectedRow) {
    //   const fileName  =  selectedRow.topic + '_' + selectedRow.code + '_' + selectedRow.batchNumber;
    //   const csvData =  this.conversionService.convertToCsv(selectedRow.productDetails);
    //   this.downloadService.downloadFile({ name: fileName, type : 'csv' , data : csvData });
    // }
    EvoteTableComponent.prototype.updateFilter = function (event) {
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
    EvoteTableComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
            console.log(_this.clients);
        });
    };
    EvoteTableComponent.prototype.getAllEvote = function () {
        var _this = this;
        this.getEvoteSub = this.evoteService.getAllEvotes().subscribe(function (successResp) {
            _this.rows = successResp.content;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    // --------- BH ----------
    EvoteTableComponent.prototype.getPageEvote = function (pageNumber) {
        var _this = this;
        if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
            this.pageNumber = pageNumber;
            this.getEvoteSub = this.evoteService.getPageEvotes(pageNumber, this.pageSize).subscribe(function (successResp) {
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
    EvoteTableComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.getPageEvote(this.pageNumber);
    };
    // --------- BH ----------
    EvoteTableComponent.prototype.deleteEvote = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.description + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.evoteService.removeEvotes(row, _this.rows).subscribe(function (data) {
                    _this.getAllEvote();
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            }
        });
    };
    EvoteTableComponent.prototype.openEvotePopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add New E-Vote" : "Update E-Vote";
        var dialogRef = this.dialog.open(_evote_evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_9__["EvotePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, isNew: isNew }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            if (isNew) {
                _this.evoteService.addEvote(res, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    _this.loader.close();
                }, function (error) {
                    _this.loader.close();
                    var backEndError = error.error.validationFailures[0].field;
                    console.log(backEndError);
                    if (backEndError == "eVote") {
                        _this.errDialog.showError({
                            title: "Client Error !",
                            clientError: " Voters are not exists for entered batch number !",
                            type: "client_error"
                        });
                    }
                    else {
                        _this.errDialog.showError(error);
                    }
                });
            }
            else {
                _this.evoteService.updateEvote(data.id, res).subscribe(function (response) {
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
                    _this.errDialog.showError(error);
                });
            }
        });
    };
    EvoteTableComponent.prototype.openVoterPopup = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = "Populate Voters ";
        var dialogRef = this.dialog.open(_voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_10__["VoterPopupComponent"], {
            width: "400px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            _this.evoteService.populateVoters(res).subscribe(function (response) {
                console.log('RESPONSE : ');
                console.log(response);
                _this.loader.close();
            }, function (error) {
                _this.loader.close();
                _this.errDialog.showError(error);
            });
        });
    };
    EvoteTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-evote-table",
            template: __webpack_require__(/*! ./evote-table.component.html */ "./src/app/views/evote/evote-table/evote-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_evote_service_service__WEBPACK_IMPORTED_MODULE_1__["EvoteService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_3__["AppErrorService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"],
            _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_7__["AppFileDownloadService"],
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_8__["AppDataConversionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"]])
    ], EvoteTableComponent);
    return EvoteTableComponent;
}());



/***/ }),

/***/ "./src/app/views/evote/evote.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/evote/evote.module.ts ***!
  \*********************************************/
/*! exports provided: EvoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoteModule", function() { return EvoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _evote_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evote.routing */ "./src/app/views/evote/evote.routing.ts");
/* harmony import */ var _evote_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _evote_table_evote_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evote-table/evote-table.component */ "./src/app/views/evote/evote-table/evote-table.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./evote-table/evote-popup/evote-popup.component */ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts");
/* harmony import */ var _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voter-popup/voter-popup.component */ "./src/app/views/evote/voter-popup/voter-popup.component.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var EvoteModule = /** @class */ (function () {
    function EvoteModule() {
    }
    EvoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_evote_routing__WEBPACK_IMPORTED_MODULE_3__["EvoteRouts"])
            ],
            providers: [_evote_service_service__WEBPACK_IMPORTED_MODULE_4__["EvoteService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"], _survey_survey_service__WEBPACK_IMPORTED_MODULE_15__["SurveyService"]],
            declarations: [
                _evote_table_evote_table_component__WEBPACK_IMPORTED_MODULE_6__["EvoteTableComponent"],
                _evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__["EvotePopupComponent"],
                _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__["VoterPopupComponent"],
            ],
            entryComponents: [_evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__["EvotePopupComponent"], _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__["VoterPopupComponent"]]
        })
    ], EvoteModule);
    return EvoteModule;
}());



/***/ }),

/***/ "./src/app/views/evote/evote.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/views/evote/evote.routing.ts ***!
  \**********************************************/
/*! exports provided: EvoteRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoteRouts", function() { return EvoteRouts; });
/* harmony import */ var _evote_table_evote_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evote-table/evote-table.component */ "./src/app/views/evote/evote-table/evote-table.component.ts");

var EvoteRouts = [
    {
        path: 'showEvote',
        component: _evote_table_evote_table_component__WEBPACK_IMPORTED_MODULE_0__["EvoteTableComponent"],
        data: { title: 'E-Vote', breadcrumb: 'E vote' }
    }
];


/***/ }),

/***/ "./src/app/views/evote/voter-popup/voter-popup.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/evote/voter-popup/voter-popup.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"voterForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"voterForm.controls['client']\" required placeholder=\"Select A Client\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <input type='file' (change)=\"handleFileInput($event.target.files)\" [formControl]=\"voterForm.controls['file']\"\r\n          required name=\"file\">\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"voterForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRefVote.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/evote/voter-popup/voter-popup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/evote/voter-popup/voter-popup.component.ts ***!
  \******************************************************************/
/*! exports provided: VoterPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterPopupComponent", function() { return VoterPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _evote_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
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





var VoterPopupComponent = /** @class */ (function () {
    function VoterPopupComponent(data, fb, evoteService, clientService, dialogRefVote) {
        this.data = data;
        this.fb = fb;
        this.evoteService = evoteService;
        this.clientService = clientService;
        this.dialogRefVote = dialogRefVote;
        this.fileObject = null;
    }
    VoterPopupComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.buildVoterForm(this.data.payload);
    };
    VoterPopupComponent.prototype.ngOnDestroy = function () {
        if (this.getClientSub) {
            this.getClientSub.unsubscribe();
        }
    };
    VoterPopupComponent.prototype.getClients = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    VoterPopupComponent.prototype.buildVoterForm = function (fieldItem) {
        this.voterForm = this.fb.group({
            client: [fieldItem.client || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [fieldItem.file || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    VoterPopupComponent.prototype.submit = function () {
        console.log("called submit ");
        this.dialogRefVote.close(this.prepareToSave(this.voterForm.value));
    };
    VoterPopupComponent.prototype.prepareToSave = function (formValue) {
        var formData = new FormData();
        formData.append("client", formValue.client);
        formData.append("file", this.fileObject);
        return formData;
    };
    VoterPopupComponent.prototype.handleFileInput = function (files) {
        console.log("called hande file ");
        var fileItem = files.item(0);
        console.log("file input has changed. The file is", fileItem);
        this.fileObject = fileItem;
    };
    VoterPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-voter-popup",
            template: __webpack_require__(/*! ./voter-popup.component.html */ "./src/app/views/evote/voter-popup/voter-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _evote_service_service__WEBPACK_IMPORTED_MODULE_3__["EvoteService"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], VoterPopupComponent);
    return VoterPopupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-evote-evote-module.js.map