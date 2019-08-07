(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-module"],{

/***/ "./node_modules/ng2-charts/ng2-charts.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-charts/ng2-charts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-charts/index.js"));


/***/ }),

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


/***/ }),

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content, ClientCreateReq, ClientLicenseData, ClientUpdateReq, CountryData, UserData, AdminRoleData, AuthorityData, UserCreateReq, UserUpdateReq, UserCategoryUpdateReq, UserCommunityUpdateRequest, ClientCategoryUpdateReq, ClientData, LicenseUpdateReq, RoleData, CommunityData, CategoryData, LicenseUpdateRequest, profileUpdateReq, passwordUpdateReq, userImageReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateReq", function() { return ClientCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLicenseData", function() { return ClientLicenseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdateReq", function() { return ClientUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoleData", function() { return AdminRoleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityData", function() { return AuthorityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateReq", function() { return UserCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateReq", function() { return UserUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryUpdateReq", function() { return UserCategoryUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCommunityUpdateRequest", function() { return UserCommunityUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCategoryUpdateReq", function() { return ClientCategoryUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateReq", function() { return LicenseUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleData", function() { return RoleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityData", function() { return CommunityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryData", function() { return CategoryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateRequest", function() { return LicenseUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateReq", function() { return profileUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdateReq", function() { return passwordUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userImageReq", function() { return userImageReq; });
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
    function CountryData(id) {
        this.id = id;
    }
    return CountryData;
}());

var UserData = /** @class */ (function () {
    function UserData(accountName, email, role) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
    }
    return UserData;
}());

var AdminRoleData = /** @class */ (function () {
    function AdminRoleData(name, description, authorities) {
        this.name = name;
        this.description = description;
        this.authorities = authorities;
    }
    return AdminRoleData;
}());

var AuthorityData = /** @class */ (function () {
    function AuthorityData(id) {
        this.id = id;
    }
    return AuthorityData;
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

var UserUpdateReq = /** @class */ (function () {
    function UserUpdateReq(accountName, email, role, status) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
        this.status = status;
    }
    return UserUpdateReq;
}());

var UserCategoryUpdateReq = /** @class */ (function () {
    function UserCategoryUpdateReq(categories) {
        this.categories = categories;
    }
    return UserCategoryUpdateReq;
}());

var UserCommunityUpdateRequest = /** @class */ (function () {
    function UserCommunityUpdateRequest(communities) {
        this.communities = communities;
    }
    return UserCommunityUpdateRequest;
}());

// export class UserCategoryUpdateReq {
//   constructor(
//     public accountName: string,
//     public email: string,
//     public role: RoleData,
//     public categories: CategoryData[]
//   ) { }
// }
var ClientCategoryUpdateReq = /** @class */ (function () {
    function ClientCategoryUpdateReq(categories) {
        this.categories = categories;
    }
    return ClientCategoryUpdateReq;
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
    function profileUpdateReq(id, accountName, email) {
        this.id = id;
        this.accountName = accountName;
        this.email = email;
    }
    return profileUpdateReq;
}());

var passwordUpdateReq = /** @class */ (function () {
    function passwordUpdateReq(id, password, newPassword) {
        this.id = id;
        this.password = password;
        this.newPassword = newPassword;
    }
    return passwordUpdateReq;
}());

var userImageReq = /** @class */ (function () {
    function userImageReq(id, imageContent, profileImage) {
        this.id = id;
        this.imageContent = imageContent;
        this.profileImage = profileImage;
    }
    return userImageReq;
}());



/***/ }),

/***/ "./src/app/shared/helpers/global-variable.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/global-variable.ts ***!
  \***************************************************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/**
  * Buddhi
  * DO NOT DELETE!
  */
var GlobalVariable = /** @class */ (function () {
    function GlobalVariable() {
        this.validators = {
            regex: { _Letter: '^(?:[A-Za-z]+)(?:[A-Za-z _]*)$', _PosNumber: '^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$', _PosNumberAndLetter: '^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$' }
        };
        /**
          * Client License Max Limits
          */
        this.client = {
            license: { tagCount: 1000000, userCount: 1000, comunityCount: 100, feedbackCount: 1000, eventCount: 1000, promoCount: 1000 }
        };
        this.common = {
            matChip: {
                /**
                * Colors
                * primary / accent / warn / default
                */
                userStatusInUpdateUser: { true: "primary", false: "default" },
                clientStatus: {
                    A: { status: "Active", style: "primary", opposite: { value: "Inactive", icon: "block" } },
                    I: { status: "Inactive", style: "accent", opposite: { value: "Active", icon: "beenhere" } },
                    D: { status: "Deleted", style: "warn", opposite: { value: "Active", icon: "beenhere" } }
                },
                userStatus: {
                    ACTIVE: { code: "A", display: "ACTIVE", style: "primary" },
                    INACTIVE: { code: "I", display: "INACTIVE", style: "default" },
                    DELETED: { code: "D", display: "DELETED", style: "warn" },
                    PENDING_ACTIVATION: { code: "PEA", display: "PENDING", style: "default" },
                    TEMP_LOCKED_BAD_CREDENTIALS: { code: "TELBC", display: "LOCKED", style: "accent" }
                },
                colorForStatus01: {
                    'ACTIVE': "primary",
                    'INACTIVE': "default"
                },
                colorForSurveyStatus01: {
                    0: { id: 0, status: "On Premise", style: "accent" },
                    1: { id: 1, status: "Launched", style: "primary" },
                    4: { id: 4, status: "Offline", style: "default" }
                },
                confirmPasswordStatus: {
                    // false : { id: 0, value: "Passwords do not match!", style: "primary" },
                    false: { id: 0, value: "Passwords Mismatch!", style: "custom-text-red" },
                    true: { id: 1, value: "Password OK!", style: "custom-text-green" }
                },
            }
        };
    }
    return GlobalVariable;
}());



/***/ }),

/***/ "./src/app/views/profile/account-settings/account-settings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/account-settings/account-settings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <form [formGroup]=\"accountSettingsForm\" (ngSubmit)=\"submit()\">\r\n    <mat-card-title>\r\n      <div class=\"card-title-text\">Account Details</div>\r\n      <mat-divider></mat-divider>\r\n\r\n    </mat-card-title>\r\n    <mat-card-content class=\"mat-typography mt-2\">\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n        <div fxFlex=\"100\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"clientName\" [formControl]=\"accountSettingsForm.controls['name']\" letterOnly\r\n              placeholder=\"Name\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput name=\"description\" placeholder=\"Description\"\r\n              [formControl]=\"accountSettingsForm.controls['description']\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"contactNo\" [formControl]=\"accountSettingsForm.controls['contactNo']\"\r\n              placeholder=\"Contact No\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"addressLine1\" [formControl]=\"accountSettingsForm.controls['addressLine1']\"\r\n              placeholder=\"Address Line 1\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"addressLine2\" [formControl]=\"accountSettingsForm.controls['addressLine2']\"\r\n              placeholder=\"Address Line 2\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"city\" [formControl]=\"accountSettingsForm.controls['city']\" letterOnly\r\n              placeholder=\"City\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"state\" [formControl]=\"accountSettingsForm.controls['state']\"\r\n              positiveNumberAndLetterOnly placeholder=\"State\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"zipCode\" [formControl]=\"accountSettingsForm.controls['zipCode']\" positiveNumberOnly\r\n              placeholder=\"ZipCode\" maxlength=\"6\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput [formControl]=\"accountSettingsForm.controls['country']\" placeholder=\"Country\"  (focus)='loadCountryDD()'\r\n              [matAutocomplete]=\"auto\" (blur)=\"onBlurCountry()\">\r\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filteredCountries | async\" [value]=\"option.name\">\r\n                {{option.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <!-- --------- hidden file input --------- -->\r\n        <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\"\r\n          [formControl]=\"accountSettingsForm.controls['profilePic']\" base-sixty-four-input>\r\n\r\n\r\n        <!-- --------- file input click button --------- -->\r\n        <!-- <div fxFlex=\"50\" class=\"pr-1\">\r\n          <div layout-margin layout-padding>\r\n            <button mat-raised-button class=\"mr-1 mb-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n              Browse Images</button>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div layout-margin layout-padding class=\"pr-1\">\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n            Browse Images</button>\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"removeSelectedImg()\" type=\"button\" *ngIf=\"url\">\r\n            Clear Images</button>\r\n        </div>\r\n\r\n\r\n        <!-- --------- start images preview container --------- -->\r\n        <div id=\"client_create_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n          <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;\">\r\n\r\n            <img class=\"clientProfilePic\" [src]=\"url\" (error)=\"removeSelectedImg()\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!-- --------- end images preview container --------- -->\r\n\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"100\" class=\"mt-1\">\r\n          <!-- <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"\">Save</button> -->\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"accountSettingsForm.invalid || !url\">Save</button>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n\r\n  </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/account-settings/account-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/account-settings/account-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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










var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(fb, profileService, loader, snack, errDialog, snackBar) {
        this.fb = fb;
        this.profileService = profileService;
        this.loader = loader;
        this.snack = snack;
        this.errDialog = errDialog;
        this.snackBar = snackBar;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'upload_url' });
        this.imgBaseURL = 'http://localhost:10000/api/downloads/client/';
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        this.clientId = currentuser.userData.client.id;
        this.buildItemForm();
        this.getClient();
        this.getCountry();
    };
    AccountSettingsComponent.prototype.buildItemForm = function () {
        this.accountSettingsForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            profilePic: [''],
            contactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AccountSettingsComponent.prototype.getClient = function () {
        var _this = this;
        this.profileService.getClient(this.clientId).subscribe(function (successResp) {
            var data = successResp.content;
            _this.accountSettingsForm.patchValue({
                name: data.name,
                description: data.description,
                contactNo: data.primaryContactNo,
                addressLine1: data.addressLine1,
                addressLine2: data.addressLine2,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                country: data.country != null ? data.country.name : ''
            });
            _this.selectedCountry = data.country != null ? data.country.id : '';
            _this.onBlurCountry();
            getBase64ImageFromUrl(_this.imgBaseURL + _this.clientId)
                .then(function (result) { return _this.url = result; })
                .catch(function (err) { return console.error(err); });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    AccountSettingsComponent.prototype.getCountry = function () {
        var _this = this;
        this.profileService.getCountry().subscribe(function (successResp) {
            _this.countries = successResp.content;
            _this.filteredCountries = _this.accountSettingsForm.get("country").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return _this._filter(value); }));
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    AccountSettingsComponent.prototype.submit = function () {
        var _this = this;
        var country = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["CountryData"](this.selectedCountry);
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["ClientUpdateReq"](this.accountSettingsForm.get('name').value, this.accountSettingsForm.get('description').value, this.url, this.accountSettingsForm.get('contactNo').value, this.accountSettingsForm.get('addressLine1').value, this.accountSettingsForm.get('addressLine2').value, this.accountSettingsForm.get('city').value, this.accountSettingsForm.get('state').value, this.accountSettingsForm.get('zipCode').value, country);
        this.profileService.updateClientDetails(this.clientId, req).subscribe(function (response) {
            _this.snack.open("Client Details Updated!", "OK", { duration: 4000 });
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    //  ----------------------- Account Setting ---------------------------------------------------------
    AccountSettingsComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.countries.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    // File uploader validation and upload
    AccountSettingsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
                console.log(_this.url);
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    AccountSettingsComponent.prototype.removeSelectedImg = function () {
        this.url = null;
        this.accountSettingsForm.controls['profilePic'].setValue('');
    };
    AccountSettingsComponent.prototype.onBlurCountry = function () {
        var _this = this;
        var value = this.accountSettingsForm.get("country").value;
        var status = true;
        this.countries.forEach(function (element) {
            if (element.name === value) {
                _this.selectedCountry = element.id;
                status = false;
            }
        });
        if (status) {
            this.selectedCountry = null;
            this.accountSettingsForm.get("country").setValue("");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AccountSettingsComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], AccountSettingsComponent.prototype, "matAutocomplete", void 0);
    AccountSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.component.html */ "./src/app/views/profile/account-settings/account-settings.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__["egretAnimations"],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
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

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS1ibGFuay9wcm9maWxlLWJsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-blank works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBlankComponent", function() { return ProfileBlankComponent; });
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

var ProfileBlankComponent = /** @class */ (function () {
    function ProfileBlankComponent() {
    }
    ProfileBlankComponent.prototype.ngOnInit = function () {
    };
    ProfileBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-blank',
            template: __webpack_require__(/*! ./profile-blank.component.html */ "./src/app/views/profile/profile-blank/profile-blank.component.html"),
            styles: [__webpack_require__(/*! ./profile-blank.component.css */ "./src/app/views/profile/profile-blank/profile-blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileBlankComponent);
    return ProfileBlankComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-license/profile-license.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-license/profile-license.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"p-0\">\r\n  <mat-tab-group>\r\n\r\n\r\n\r\n\r\n    <!-- <mat-tab label=\"Update License\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"licenseFormGroup\"  (ngSubmit)=\"submitLicense()\" class=\"\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\" mt-1\">\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"tagCount\" placeholder=\"Tag Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['tagCount']\">\r\n              </mat-form-field>\r\n              <span *ngIf=\"licenseFormGroup.controls['tagCount'].hasError('max')\" class=\"form-error-msg\">\r\n                {{this.license.tagCount}} max ! </span>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"userCount\" placeholder=\"User Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['userCount']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"communityCount\" placeholder=\"Community Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['communityCount']\" (blur)=\"validateLicense()\"\r\n                  (focus)='setOldValue()'>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"feedbackCount\" placeholder=\"Feedback Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['feedbackCount']\" (blur)=\"setDefaultValue('feedbackCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"eventkCount\" placeholder=\"Event Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['eventCount']\" (blur)=\"setDefaultValue('eventCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"promoCount\" placeholder=\"Promo Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['promoCount']\" (blur)=\"setDefaultValue('promoCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"mt-1\">\r\n              <button mat-raised-button color=\"primary\" [disabled]=\"licenseFormGroup.invalid\" (click)=\"updateLicense()\">Save</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab> -->\r\n\r\n\r\n    <mat-tab label=\"Category\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"categoryFormGroup\">\r\n          <ng-template matStepLabel>Category</ng-template>\r\n\r\n          <mat-form-field class=\"matAutocomplete-chip-list\">\r\n\r\n            <mat-chip-list #chipList>\r\n              <mat-chip *ngFor=\"let category of selectedCategories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                (removed)=\"remove(category)\">\r\n                {{category.name}}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n              </mat-chip>\r\n              <input matInput placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"auto\"\r\n                [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (focus) = \"onFocusCategoryDD()\"\r\n                (matChipInputTokenEnd)=\"add($event)\" [matChipInputAddOnBlur]=\"addOnBlur\" aria-label=\"Category\">\r\n            </mat-chip-list>    \r\n        \r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n              <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category.id\">\r\n                <span>{{category.name}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n        \r\n          </mat-form-field>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"mt-1\">\r\n              <button mat-raised-button color=\"primary\" matStepperNext [disabled]='categoryFormStatus' (click)=\"updateCategory()\">Save</button>\r\n              <span fxFlex></span>\r\n              <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/profile-license/profile-license.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/profile/profile-license/profile-license.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileLicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLicenseComponent", function() { return ProfileLicenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileLicenseComponent = /** @class */ (function () {
    function ProfileLicenseComponent(fb, snackBar, profileService, errDialog, loader, snack) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.profileService = profileService;
        this.errDialog = errDialog;
        this.loader = loader;
        this.snack = snack;
        // public globalVariable: GlobalVariable = new GlobalVariable();
        // public license = this.globalVariable.client.license;
        // public regex = this.globalVariable.validators.regex;
        // public licenseFormGroup: FormGroup;
        this.formStatus = false;
        this.oldestValue = 0;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.allCategories = [];
        this.selectedCategories = [];
    }
    ProfileLicenseComponent.prototype.ngOnInit = function () {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        this.clientId = currentuser.userData.client.id;
        this.getCategory();
        this.getClientCategory();
        this.buildItemForm();
        // this.buildItemForm(this.data.payload.license)
    };
    ProfileLicenseComponent.prototype.buildItemForm = function () {
        // this.licenseFormGroup = this.fb.group({
        //   tagCount: ['', Validators.required],
        //   userCount: ['', Validators.required],
        //   communityCount: ['', Validators.required],
        //   feedbackCount: ['', Validators.required],
        //   eventCount: ['', Validators.required],
        //   promoCount: ['', Validators.required]
        // });
        this.categoryFormGroup = this.fb.group({
            category: this.categoryCtrl
        });
        // this.getClient();
    };
    ProfileLicenseComponent.prototype.getCategory = function () {
        var _this = this;
        this.profileService.getCategory().subscribe(function (successResp) {
            _this.allCategories = successResp.content;
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ProfileLicenseComponent.prototype.getClientCategory = function () {
        var _this = this;
        this.profileService.getClientCategories(this.clientId).subscribe(function (successResp) {
            successResp.content.forEach(function (element) {
                _this.addSelectedCategory(element.id);
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    // getClient() {
    //   this.getItemSub = this.profileService.getClient(this.clientId).subscribe(successResp => {
    //     this.license = successResp.content.license;
    //     this.licenseFormGroup.patchValue({
    //       tagCount: this.license.tagCount,
    //       userCount: this.license.userCount,
    //       communityCount: this.license.communityCount,
    //       feedbackCount: this.license.feedbackCount,
    //       eventCount: this.license.eventCount,
    //       promoCount: this.license.promoCount
    //     });
    //   },
    //     error => {
    //       this.errDialog.showError({
    //         title: "Error",
    //         status: error.status,
    //         type: "http_error"
    //       });
    //     }
    //   );
    // }
    // setOldValue() {
    //   this.oldestValue = this.licenseFormGroup.controls['communityCount'].value;
    // }
    // validateLicense() {
    //   let form = this.licenseFormGroup;
    //   if (form.controls['communityCount'].value !== '') {
    //     let value = form.controls['communityCount'].value;
    //     let diff;
    //     if (value > this.oldestValue) {
    //       diff = value - this.oldestValue;
    //       form.controls['feedbackCount'].setValue(+(form.get('feedbackCount').value) + diff);
    //       form.controls['eventCount'].setValue(+(form.get('eventCount').value) + diff);
    //       form.controls['promoCount'].setValue(+(form.get('promoCount').value) + diff);
    //     }
    //   } else {
    //     form.controls['communityCount'].setValue(1)
    //     form.controls['feedbackCount'].setValue(1)
    //     form.controls['eventCount'].setValue(1)
    //     form.controls['promoCount'].setValue(1)
    //   }
    // }
    // setDefaultValue(control) {
    //   let form = this.licenseFormGroup;
    //   if (form.controls[control].value === '') {
    //     form.controls[control].setValue(1);
    //   }
    // }
    // updateLicense() {
    //   let form = this.licenseFormGroup;
    //   let clientData: ClientData = new ClientData(this.clientId);
    //   const req: LicenseUpdateReq = new LicenseUpdateReq(form.get('tagCount').value, form.get('userCount').value, form.get('communityCount').value, form.get('feedbackCount').value, form.get('eventCount').value, form.get('promoCount').value, clientData);
    //   this.profileService.updateClientLicense(this.license.id, req).subscribe(
    //     response => {
    //       this.snack.open("License Data Updated !", "OK", { duration: 4000 });
    //       // this.getClients();
    //       // this.clients = response;
    //       // this.loader.close();
    //       // this.snack.open("License Data Updated !", "OK", { duration: 4000 });
    //     },
    //     error => {
    //       this.errDialog.showError({
    //         title: "Error",
    //         status: error.status,
    //         type: "http_error"
    //       });
    //     }
    //   );
    // }
    //  ----------------------- Categoty Setting --------------------------------------------------------
    ProfileLicenseComponent.prototype.onFocusCategoryDD = function () {
        var _this = this;
        this.filteredCategories = this.categoryCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (category) { return category ? _this._filterCategories(category) : _this.allCategories.slice(); }));
    };
    ProfileLicenseComponent.prototype.updateCategory = function () {
        var _this = this;
        console.log('---------------------- Category ', this.selectedCategories);
        var categories = [];
        this.selectedCategories.forEach(function (element) {
            categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__["CategoryData"](element.id));
        });
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__["ClientCategoryUpdateReq"](categories);
        this.loader.open();
        this.profileService.updateClientCategory(this.clientId, req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Client Category Updated!", "OK", { duration: 4000 });
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    ProfileLicenseComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    ProfileLicenseComponent.prototype.selected = function (event) {
        this.addSelectedCategory(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    ProfileLicenseComponent.prototype.addSelectedCategory = function (id) {
        var _this = this;
        this.allCategories.forEach(function (item, index) {
            if (item.id === id) {
                _this.selectedCategories.push(item);
                _this.allCategories.splice(index, 1);
            }
        });
    };
    ProfileLicenseComponent.prototype.remove = function (category) {
        var _this = this;
        this.selectedCategories.forEach(function (item, index) {
            if (item.id === category.id) {
                _this.allCategories.push(category);
                _this.selectedCategories.splice(index, 1);
            }
        });
    };
    ProfileLicenseComponent.prototype._filterCategories = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileLicenseComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], ProfileLicenseComponent.prototype, "matAutocomplete", void 0);
    ProfileLicenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-license',
            template: __webpack_require__(/*! ./profile-license.component.html */ "./src/app/views/profile/profile-license/profile-license.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ProfileLicenseComponent);
    return ProfileLicenseComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS1vdmVydmlldy9wcm9maWxlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <!-- Time line -->\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Timeline</mat-card-title>\r\n      <mat-card-content>\r\n        <div class=\"timeline\">\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-6.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Jhone Doe</b> updated his status</a>\r\n                <span class=\"text-muted\">1 hour ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus natus fugit porro at sunt mollitia repellendus deserunt, libero similique.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Henry krick</b> added a new photo</a>\r\n                <span class=\"text-muted\">15 hours ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <img src=\"assets/images/photo-600_220.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-primary\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>New follower</b></a>\r\n                <span class=\"text-muted\">2 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p><a class=\"mat-color-primary\" href=\"\">Kevin Huyn</a> and 34 others followed you.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-warn\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Membership upgraded</b></a>\r\n                <span class=\"text-muted\">5 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Membership has been upgraded to pro</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- End Time line -->\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Uploaded Photos</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n          <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\r\n              <!-- Gallery item -->\r\n              <mat-grid-tile *ngFor=\"let photo of photos\">\r\n                <img [src]=\"photo.url\" alt=\"\">\r\n                <!-- item detail, show on hover -->\r\n                <div class=\"gallery-control-wrap\">\r\n                  <div class=\"gallery-control\">\r\n                    <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\r\n                    <span fxFlex></span>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\r\n                      <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <mat-menu #photoMenu=\"matMenu\">\r\n                      <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\r\n                      <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\r\n                      <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\r\n                    </mat-menu>\r\n                  </div>\r\n                </div>\r\n              </mat-grid-tile>\r\n            </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Support Tickets</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <mat-list class=\"compact-list mb-1\">\r\n          <mat-list-item class=\"\" *ngFor=\"let t of tickets\">\r\n            <img mat-list-avatar class=\"mr-1\" [src]=\"t.img\" alt=\"\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\">\r\n              <h6 class=\"m-0 mr-1\">{{t.name}}</h6>\r\n              <span fxFlex></span>\r\n              <div fxFlex=\"40\">{{t.text | excerpt:20 }}</div>\r\n              <span fxFlex></span>\r\n              <small class=\"text-muted mr-1 ml-1\">{{ t.date | relativeTime}}</small>\r\n            </div>\r\n            <mat-chip mat-sm-chip [color]=\"'warn'\" [selected]=\"t.isOpen\">{{t.isOpen ? 'active' : 'closed'}}</mat-chip>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <div class=\"text-right\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Assigned Tasks</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <div class=\"list-tasktype\">\r\n          <div class=\"tasktype-item\" *ngFor=\"let t of tasks\">\r\n            <mat-checkbox class=\"mr-1\"></mat-checkbox>\r\n            <span>{{t.text}}</span>\r\n            <span fxFlex></span>\r\n            <mat-chip mat-sm-chip color=\"primary\" [selected]=\"t.status ? true : false\">{{t.status ? 'completed' : 'pending'}}</mat-chip>\r\n            <button mat-icon-button mat-sm-button [matMenuTriggerFor]=\"taskMenu\" class=\"tasktype-action ml-1\">\r\n                <mat-icon class=\"text-muted\">more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #taskMenu=\"matMenu\">\r\n              <button mat-menu-item>\r\n                <mat-icon>done</mat-icon>\r\n                <span>Completed</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>edit</mat-icon>\r\n                <span>Edit</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Delete</span>\r\n              </button>\r\n            </mat-menu>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Activity</mat-card-title>\r\n      <mat-card-content class=\"p-0\" fxLayout=\"column\">\r\n        <div class=\"activity-data\">\r\n          <ngx-datatable class=\"material bg-white\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [limit]=\"4\"\r\n          [rows]=\"activityData\">\r\n            <ngx-datatable-column name=\"Month\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.month }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Spent\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.spent }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Opened\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.opened }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Closed\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.closed }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
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

var ProfileOverviewComponent = /** @class */ (function () {
    function ProfileOverviewComponent() {
        this.activityData = [{
                month: 'January',
                spent: 240,
                opened: 8,
                closed: 30
            }, {
                month: 'February',
                spent: 140,
                opened: 6,
                closed: 20
            }, {
                month: 'March',
                spent: 220,
                opened: 10,
                closed: 20
            }, {
                month: 'April',
                spent: 440,
                opened: 40,
                closed: 60
            }, {
                month: 'May',
                spent: 340,
                opened: 40,
                closed: 60
            }];
        this.tasks = [{
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Dake',
                text: 'Payment confirmation.',
                date: new Date('04/10/2017'),
                isOpen: false
            }];
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
    }
    ProfileOverviewComponent.prototype.ngOnInit = function () {
    };
    ProfileOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-overview',
            template: __webpack_require__(/*! ./profile-overview.component.html */ "./src/app/views/profile/profile-overview/profile-overview.component.html"),
            styles: [__webpack_require__(/*! ./profile-overview.component.css */ "./src/app/views/profile/profile-overview/profile-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-tab-group>\r\n\r\n    <mat-tab label=\"Profile Settings\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"profileSettingsForm\" (ngSubmit)=\"updateProfile()\" class=\"userProfileForm\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"accountName\" [formControl]=\"profileSettingsForm.controls['accountName']\"\r\n                  positiveNumberAndLetterOnly placeholder=\"Name\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1 mb-3\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"email\" [formControl]=\"profileSettingsForm.controls['email']\" placeholder=\"Email\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"profileSettingsForm.invalid\">Save</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Password Settings\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"passwordSettingsForm\" (ngSubmit)=\"changePassword()\" class=\"userProfileForm\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"password\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['currentPassword']\" positiveNumberAndLetterOnly\r\n                  placeholder=\"Current Password\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"password\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['password']\" positiveNumberAndLetterOnly\r\n                  placeholder=\"Password\" (keyup)=checkConfirmPassword()>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1 mb-3\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"confirmPassword\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['confirmPassword']\" positiveNumberAndLetterOnly\r\n                  placeholder=\"Confirm Password\" (keyup)=checkConfirmPassword()>\r\n              </mat-form-field>\r\n\r\n              <span class=\"input-bottom-msg\"><span *ngIf=\"passwordStatus !== null\"\r\n                  class=\"{{statusArray[passwordStatus].style}}\">{{statusArray[passwordStatus].value}}</span></span>\r\n            </div>\r\n          </div>\r\n          <button mat-raised-button color=\"primary\"\r\n            [disabled]=\"passwordSettingsForm.invalid || passwordStatus !== true\">Save</button>\r\n\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n\r\n    <mat-tab label=\"Profile Picture\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form class=\"userProfileForm\">\r\n          <div class=\"mb-1\">\r\n\r\n            <!-- --------- hidden file input --------- -->\r\n            <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\" base-sixty-four-input>\r\n\r\n            <!-- --------- file input click button --------- -->\r\n            <div layout-margin layout-padding class=\"mb-2\">\r\n              <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n                Browse Images</button>\r\n              <!-- <button mat-raised-button class=\"mr-1\" (click)=\"removeSelectedImg()\" type=\"button\" *ngIf=\"url\">\r\n                Clear Images</button> -->\r\n              <button mat-raised-button class=\"mr-1\" (click)=\"updateProfilePic()\" type=\"button\"\r\n                *ngIf=\"url && imageName\">\r\n                Save</button>\r\n            </div>\r\n\r\n            <!-- --------- start images preview container --------- -->\r\n            <div id=\"client_create_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n              <!-- --------- start card --------- -->\r\n              <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\"\r\n                style=\"display: flex;\">\r\n\r\n                <img id=\"userProfilePic\" [src]=\"url\">\r\n\r\n              </div>\r\n              <!-- --------- end card --------- -->\r\n\r\n            </div>\r\n            <!-- --------- end images preview container --------- -->\r\n\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/app-profile/interaction.service */ "./src/app/shared/services/app-profile/interaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent(fb, profileService, loader, snack, errDialog, snackBar, r, _interactionService) {
        this.fb = fb;
        this.profileService = profileService;
        this.loader = loader;
        this.snack = snack;
        this.errDialog = errDialog;
        this.snackBar = snackBar;
        this.r = r;
        this._interactionService = _interactionService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'upload_url' });
        this.hasBaseDropZoneOver = false;
        this.passwordStatus = null;
        this.statusArray = new app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"]().common.matChip.confirmPasswordStatus;
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = this.currentUser.userData.id;
        this.buildItemForm(this.currentUser.userData);
        // ---------------------------------- UserProfile -------------------------------
        this._interactionService.changeProfilePicture$.subscribe(function (url) {
            _this.url = url;
        });
        // ------------------------------------------------------------------------------
    };
    ProfileSettingsComponent.prototype.buildItemForm = function (data) {
        this.profileSettingsForm = this.fb.group({
            accountName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.accountName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
        this.passwordSettingsForm = this.fb.group({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // File uploader validation and upload
    ProfileSettingsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        console.log(event);
        if (event.target.files && event.target.files[0]) {
            var file_1 = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file_1.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
                _this.imageName = file_1.name;
            };
            reader.readAsDataURL(file_1);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    ProfileSettingsComponent.prototype.removeSelectedImg = function () {
        this.url = null;
    };
    ProfileSettingsComponent.prototype.updateProfile = function () {
        var _this = this;
        var itemForm = this.profileSettingsForm.value;
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["profileUpdateReq"](this.userId, itemForm.accountName, itemForm.email);
        this.profileService.updateUser(req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Profile Updated!", "OK", { duration: 4000 });
            _this.currentUser.userData.accountName = _this.currentUser.accountName = response.content.accountName;
            _this.currentUser.userData.email = response.content.email;
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
            _this.changeProfileDetails(response.content.accountName);
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent.prototype.changeProfileDetails = function (userName) {
        this._interactionService.changeProfileDetails(userName);
    };
    ProfileSettingsComponent.prototype.checkConfirmPassword = function () {
        var itemForm = this.passwordSettingsForm.value;
        if (itemForm.password !== null && itemForm.confirmPassword !== null && itemForm.password !== '' && itemForm.confirmPassword !== '') {
            if (itemForm.password !== itemForm.confirmPassword) {
                this.passwordStatus = false;
            }
            else {
                this.passwordStatus = true;
            }
        }
        else {
            this.passwordStatus = null;
        }
    };
    ProfileSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        var itemForm = this.passwordSettingsForm.value;
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["passwordUpdateReq"](this.userId, itemForm.currentPassword, itemForm.confirmPassword);
        this.profileService.updateUserPassword(req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Password Updated!", "OK", { duration: 4000 });
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent.prototype.updateProfilePic = function () {
        var _this = this;
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["userImageReq"](this.userId, this.url, this.imageName);
        this.profileService.updateProfilePic(req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Profile Picture Updated!", "OK", { duration: 4000 });
            _this._interactionService.changeProfilePicture(_this.userId);
            _this.imageName = null;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/views/profile/profile-settings/profile-settings.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__["egretAnimations"],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_11__["InteractionService"]])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"{{this.profileImg}}\" alt=\"\" />\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{this.userDisplayName}}</div>\r\n        <div class=\"subtitle mb-05\">{{ currentUser.company }}</div>\r\n        <div class=\"text-muted\">\r\n          Hi {{this.userDisplayName}}! Hope you are doing great at\r\n          {{ currentUser.company }}\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"profile-actions text-center mb-1\">\r\n        <button color=\"primary\" mat-raised-button=\"\" class=\"mat-raised-button mat-primary mr-1\">\r\n          <span class=\"mat-button-wrapper\">Message</span>\r\n          <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\r\n          <div class=\"mat-button-focus-overlay\"></div>\r\n        </button><button color=\"accent\" mat-raised-button=\"\" class=\"mat-raised-button mat-accent\">\r\n          <span class=\"mat-button-wrapper\">Follow</span>\r\n          <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\r\n          <div class=\"mat-button-focus-overlay\"></div>\r\n        </button>\r\n      </div> -->\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <!--\r\n            <mat-list-item routerLink=\"/profile/overview\" routerLinkActive=\"list-item-active\">\r\n              <mat-icon>home</mat-icon>\r\n              Overview\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n          -->\r\n          <mat-list-item routerLink=\"/profile/profile-settings\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>portrait</mat-icon>\r\n            Profile Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/profile/account-settings\" routerLinkActive=\"list-item-active\"\r\n            [roleAuthorization]=\"'isPredefined'\">\r\n            <mat-icon>work</mat-icon>\r\n            Account Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n\r\n          <mat-list-item routerLink=\"/profile/general-settings\" routerLinkActive=\"list-item-active\"\r\n            [roleAuthorization]=\"'isPredefined'\">\r\n            <mat-icon>settings</mat-icon>\r\n            General Settings\r\n          </mat-list-item>\r\n          <!-- <mat-list-item routerLink=\"/profile/blank\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>content_paste</mat-icon>\r\n            Blank\r\n          </mat-list-item> -->\r\n\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helpers_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/local-storage */ "./src/app/shared/helpers/local-storage.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-profile/interaction.service */ "./src/app/shared/services/app-profile/interaction.service.ts");
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





var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(router, authService, _interactionService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.authService = authService;
        _this._interactionService = _interactionService;
        _this.activeView = "overview";
        // Doughnut
        _this.doughnutChartColors = [
            {
                backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"]
            }
        ];
        _this.total1 = 500;
        _this.data1 = 200;
        _this.doughnutChartData1 = [_this.data1, _this.total1 - _this.data1];
        _this.total2 = 1000;
        _this.data2 = 400;
        _this.doughnutChartData2 = [_this.data2, _this.total2 - _this.data2];
        _this.doughnutChartType = "doughnut";
        _this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
                position: "bottom"
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: {
                enabled: false
            }
        };
        return _this;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeView = this.router.snapshot.params["view"];
        // ---------------------------------- UserProfile -------------------------------
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userDisplayName = this.currentUser.accountName;
        this._interactionService.changeProfileDetails$.subscribe(function (userName) {
            _this.userDisplayName = userName;
        });
        this._interactionService.changeProfilePicture$.subscribe(function (url) {
            _this.profileImg = url;
        });
        // ------------------------------------------------------------------------------
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]])
    ], ProfileComponent);
    return ProfileComponent;
}(_shared_helpers_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageHandler"]));



/***/ }),

/***/ "./src/app/views/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "./src/app/views/profile/account-settings/account-settings.component.ts");
/* harmony import */ var _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile-license/profile-license.component */ "./src/app/views/profile/profile-license/profile-license.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile.routing */ "./src/app/views/profile/profile.routing.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile.service */ "./src/app/views/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_profile_routing__WEBPACK_IMPORTED_MODULE_16__["ProfileRoutes"])
            ],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_17__["ProfileService"]],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__["ProfileOverviewComponent"], _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__["ProfileSettingsComponent"], _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_13__["AccountSettingsComponent"], _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_14__["ProfileLicenseComponent"], _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_15__["ProfileBlankComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/views/profile/profile.routing.ts ***!
  \**************************************************/
/*! exports provided: ProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutes", function() { return ProfileRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "./src/app/views/profile/account-settings/account-settings.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");
/* harmony import */ var _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-license/profile-license.component */ "./src/app/views/profile/profile-license/profile-license.component.ts");






var ProfileRoutes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        children: [{
                path: 'overview',
                component: _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__["ProfileOverviewComponent"],
                data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
            },
            {
                path: 'profile-settings',
                component: _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsComponent"],
                data: { title: 'Profile Settings', breadcrumb: 'PROFILE SETTINGS' }
            },
            {
                path: 'account-settings',
                component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsComponent"],
                data: { title: 'Account Settings', breadcrumb: 'ACCOUNT SETTINGS' }
            },
            {
                path: 'general-settings',
                component: _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_5__["ProfileLicenseComponent"],
                data: { title: 'General Settings', breadcrumb: 'GENERAL SETTINGS' }
            },
            {
                path: 'blank',
                component: _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_4__["ProfileBlankComponent"],
                data: { title: 'Blank', breadcrumb: 'BLANK' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/profile/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/views/profile/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.userUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.userProfileUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-profiles";
        this.clientUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "clients";
        this.licenseUrl = this.clientUrl + "/license";
        this.specsUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "spec";
        this.geoUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "geo";
        this.imgBaseURL = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + 'downloads';
    }
    ProfileService.prototype.updateUser = function (item) {
        return this.http
            .put(this.userProfileUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        // return this.http
        //   .put<any>(this.userProfileUrl +"/"+ id, item)
        //   .pipe(catchError(this.handleError));
    };
    ProfileService.prototype.updateUserPassword = function (item) {
        return this.http
            .put(this.userProfileUrl + "/change-password", item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateProfilePic = function (item) {
        return this.http
            .post(this.userUrl + "/profileImage", item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getClient = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getCategory = function () {
        return this.http.get(this.specsUrl + "/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getCountry = function () {
        return this.http.get(this.geoUrl + "/countries").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getClientCategories = function (id) {
        return this.http.get(this.clientUrl + "/categories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientLicense = function (id, item) {
        return this.http
            .put(this.licenseUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientCategory = function (id, item) {
        return this.http
            .put(this.clientUrl + "/categories/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientDetails = function (id, item) {
        return this.http
            .put(this.clientUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=views-profile-profile-module.js.map