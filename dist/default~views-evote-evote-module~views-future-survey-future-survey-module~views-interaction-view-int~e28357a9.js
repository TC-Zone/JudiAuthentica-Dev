(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-int~e28357a9"],{

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



/***/ })

}]);
//# sourceMappingURL=default~views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-int~e28357a9.js.map