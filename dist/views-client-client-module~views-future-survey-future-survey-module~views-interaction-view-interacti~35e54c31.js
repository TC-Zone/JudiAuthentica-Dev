(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-client-client-module~views-future-survey-future-survey-module~views-interaction-view-interacti~35e54c31"],{

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content, ClientCreateReq, ClientLicenseData, ClientUpdateReq, CountryData, UserData, UserCreateReq, UserUpdateReq, UserCategoryUpdateReq, ClientData, LicenseUpdateReq, RoleData, CommunityData, CategoryData, LicenseUpdateRequest, profileUpdateReq */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateReq", function() { return UserUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryUpdateReq", function() { return UserCategoryUpdateReq; });
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
    function CountryData(id) {
        this.id = id;
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

var UserUpdateReq = /** @class */ (function () {
    function UserUpdateReq(accountName, email, role) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
    }
    return UserUpdateReq;
}());

var UserCategoryUpdateReq = /** @class */ (function () {
    function UserCategoryUpdateReq(accountName, email, role, categories) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
        this.categories = categories;
    }
    return UserCategoryUpdateReq;
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
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getClientsSuggestions = function () {
        return this.http.get(this.clientUrl + "/suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getUsers = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
    ClientService.prototype.getClientCategories = function (id) {
        return this.http.get(this.clientUrl + "/categories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getClientCommunities = function (id) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "communities/client/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
    /*
    * Get Role Assign Authorities
    * Created by Prasad Kumara
    * 14/02/2019
    */
    ClientService.prototype.getOneRoleAuthorities = function (roleId) {
        return this.http.get(this.roleUrl + '/' + roleId)
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



/***/ })

}]);
//# sourceMappingURL=views-client-client-module~views-future-survey-future-survey-module~views-interaction-view-interacti~35e54c31.js.map