(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-client-client-module"],{

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content, ClientCreateReq, ClientUpdateReq, UserData, UserCreateReq, ClientData, UserRole, profileUpdateReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateReq", function() { return ClientCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdateReq", function() { return ClientUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateReq", function() { return UserCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateReq", function() { return profileUpdateReq; });
var Content = /** @class */ (function () {
    function Content(id, name) {
        this.id = id;
        this.name = name;
    }
    return Content;
}());

var ClientCreateReq = /** @class */ (function () {
    function ClientCreateReq(name, description, users) {
        this.name = name;
        this.description = description;
        this.users = users;
    }
    return ClientCreateReq;
}());

var ClientUpdateReq = /** @class */ (function () {
    function ClientUpdateReq(name, description) {
        this.name = name;
        this.description = description;
    }
    return ClientUpdateReq;
}());

var UserData = /** @class */ (function () {
    function UserData(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    return UserData;
}());

var UserCreateReq = /** @class */ (function () {
    function UserCreateReq(userName, password, email, roles, client) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.roles = roles;
        this.client = client;
    }
    return UserCreateReq;
}());

var ClientData = /** @class */ (function () {
    function ClientData(id) {
        this.id = id;
    }
    return ClientData;
}());

var UserRole = /** @class */ (function () {
    function UserRole(id) {
        this.id = id;
    }
    return UserRole;
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

/***/ "./src/app/views/client/client.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/client/client.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/ui_icons/users.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">Clients</div>\r\n        <div class=\"subtitle mb-05\">Judi Authentica</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily manage Users.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/clients/client-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>person</mat-icon>\r\n            Clients\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/clients/role-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            User Roles\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/client/client.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
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


var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/views/client/client.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/views/client/client.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/client/client.module.ts ***!
  \***********************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/views/client/client.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.routing */ "./src/app/views/client/client.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _clients_client_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients/client-table.component */ "./src/app/views/client/clients/client-table.component.ts");
/* harmony import */ var _clients_client_table_popup_client_table_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/client-table-popup/client-table-popup.component */ "./src/app/views/client/clients/client-table-popup/client-table-popup.component.ts");
/* harmony import */ var _clients_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/user-table/user-table.component */ "./src/app/views/client/clients/user-table/user-table.component.ts");
/* harmony import */ var _clients_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/user-table/user-table-popup/user-table-popup.component */ "./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _roles_role_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roles/role-table.component */ "./src/app/views/client/roles/role-table.component.ts");
/* harmony import */ var _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roles/role-table-popup/role-table-popup.component */ "./src/app/views/client/roles/role-table-popup/role-table-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_client_routing__WEBPACK_IMPORTED_MODULE_4__["ClientRoute"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
                _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
                _clients_client_table_component__WEBPACK_IMPORTED_MODULE_11__["ClientTableComponent"],
                _clients_client_table_popup_client_table_popup_component__WEBPACK_IMPORTED_MODULE_12__["ClientTablePopupComponent"],
                _clients_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_13__["UserTableComponent"],
                _clients_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_14__["UserTablePopupComponent"],
                _roles_role_table_component__WEBPACK_IMPORTED_MODULE_15__["RoleTableComponent"],
                _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_16__["RoleTablePopupComponent"]
            ],
            entryComponents: [
                _clients_client_table_popup_client_table_popup_component__WEBPACK_IMPORTED_MODULE_12__["ClientTablePopupComponent"],
                _clients_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_14__["UserTablePopupComponent"],
                _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_16__["RoleTablePopupComponent"]
            ],
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/views/client/client.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/client/client.routing.ts ***!
  \************************************************/
/*! exports provided: ClientRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoute", function() { return ClientRoute; });
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component */ "./src/app/views/client/client.component.ts");
/* harmony import */ var _clients_client_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients/client-table.component */ "./src/app/views/client/clients/client-table.component.ts");
/* harmony import */ var _clients_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients/user-table/user-table.component */ "./src/app/views/client/clients/user-table/user-table.component.ts");
/* harmony import */ var _roles_role_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/role-table.component */ "./src/app/views/client/roles/role-table.component.ts");




var ClientRoute = [
    {
        path: "",
        component: _client_component__WEBPACK_IMPORTED_MODULE_0__["ClientComponent"],
        children: [
            {
                path: "client-table",
                component: _clients_client_table_component__WEBPACK_IMPORTED_MODULE_1__["ClientTableComponent"],
                data: { title: "Clients", breadcrumb: "Clients" }
            },
            {
                path: "user-table",
                component: _clients_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_2__["UserTableComponent"],
                data: { title: "Users", breadcrumb: "Users" }
            },
            {
                path: "role-table",
                component: _roles_role_table_component__WEBPACK_IMPORTED_MODULE_3__["RoleTableComponent"],
                data: { title: "Roles", breadcrumb: "Roles" }
            }
        ]
    }
];


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
        this.userUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.roleUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-roles";
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getUsers = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.getRoles = function () {
        return this.http.get(this.roleUrl + "/suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.addClient = function (item) {
        return this.http.post(this.clientUrl, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.updateClient = function (id, item) {
        return this.http
            .put(this.clientUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ClientService.prototype.addUser = function (item) {
        return this.http.post(this.userUrl, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-table-popup/client-table-popup.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-table-popup/client-table-popup.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"clientName\" [formControl]=\"itemForm.controls['name']\" letterOnly placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Description\"\r\n            [formControl]=\"itemForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\" *ngIf='formStatus'>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1 mt-2 mb-1\">\r\n        <div class=\"card-title-text\">Admin Account</div>\r\n        <mat-divider></mat-divider>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"username\" [formControl]=\"itemForm.controls['username']\" positiveNumberAndLetterOnly\r\n            placeholder=\"Username\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"email\" [formControl]=\"itemForm.controls['email']\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/client-table-popup/client-table-popup.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-table-popup/client-table-popup.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClientTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTablePopupComponent", function() { return ClientTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var ClientTablePopupComponent = /** @class */ (function () {
    function ClientTablePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.formStatus = false;
    }
    ClientTablePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
    };
    ClientTablePopupComponent.prototype.buildItemForm = function (item) {
        this.itemForm = this.fb.group({
            name: [item.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [item.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        if (item.name === undefined) {
            this.formStatus = true;
        }
        else {
            this.itemForm.get('username').clearValidators();
            this.itemForm.get('username').updateValueAndValidity();
            this.itemForm.get('email').clearValidators();
            this.itemForm.get('email').updateValueAndValidity();
        }
    };
    ClientTablePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    ClientTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-table-popup',
            template: __webpack_require__(/*! ./client-table-popup.component.html */ "./src/app/views/client/clients/client-table-popup/client-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ClientTablePopupComponent);
    return ClientTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-table.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/client/clients/client-table.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Clients</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Client</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"clients\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status].style}}\" [selected]=\"true\">{{statusArray[row?.status].status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\"  [maxWidth]=\"200\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"navigateUserTable(row)\">\r\n            <mat-icon>list</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <!-- <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button> -->\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/client/clients/client-table.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/client/clients/client-table.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTableComponent", function() { return ClientTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _client_table_popup_client_table_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-table-popup/client-table-popup.component */ "./src/app/views/client/clients/client-table-popup/client-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ClientTableComponent = /** @class */ (function () {
    function ClientTableComponent(dialog, snack, clientService, loader, errDialog, router) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.router = router;
        this.statusArray = {
            'A': { status: "Active", style: "primary" },
            'I': { status: "Inactive", style: "accent" }
        };
        this.pageSize = 10;
    }
    ClientTableComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    ClientTableComponent.prototype.getClients = function () {
        var _this = this;
        this.getItemSub = this.clientService.getClients().subscribe(function (successResp) {
            _this.clients = successResp.content;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    ClientTableComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new client" : "Update client";
        var dialogRef = this.dialog.open(_client_table_popup_client_table_popup_component__WEBPACK_IMPORTED_MODULE_4__["ClientTablePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            if (isNew) {
                var users = [];
                users.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["UserData"](res.username, res.email));
                var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["ClientCreateReq"](res.name, res.description, users);
                _this.clientService.addClient(req).subscribe(function (response) {
                    _this.getClients();
                    _this.clients = response;
                    _this.loader.close();
                    _this.snack.open("New Client added !", "OK", { duration: 4000 });
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
                var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["ClientUpdateReq"](res.name, res.description);
                _this.clientService.updateClient(data.id, req).subscribe(function (response) {
                    _this.getClients();
                    _this.loader.close();
                    _this.snack.open("Client Updated!", "OK", { duration: 4000 });
                    return _this.clients.slice();
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
    ClientTableComponent.prototype.navigateUserTable = function (res) {
        var extraParam = {
            queryParams: {
                id: res.id,
                name: res.name
            }
        };
        this.router.navigate(["clients/user-table"], extraParam);
    };
    ClientTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-table",
            template: __webpack_require__(/*! ./client-table.component.html */ "./src/app/views/client/clients/client-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ClientTableComponent);
    return ClientTableComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"username\" [formControl]=\"itemForm.controls['username']\" placeholder=\"User Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\"  *ngIf=\"formStatus\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"password\" type=\"password\" [formControl]=\"itemForm.controls['password']\" positiveNumberAndLetterOnly\r\n            placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"email\" [formControl]=\"itemForm.controls['email']\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"itemForm.controls['role']\" placeholder=\"Select A User Role\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UserTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTablePopupComponent", function() { return UserTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var UserTablePopupComponent = /** @class */ (function () {
    function UserTablePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.formStatus = false;
    }
    UserTablePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
        console.log(this.data.payload);
        console.log(this.data.roles);
        this.roles = this.data.roles;
    };
    UserTablePopupComponent.prototype.buildItemForm = function (item) {
        var role = null;
        if (item.id === undefined) {
            this.formStatus = true;
        }
        else {
            role = item.roles[0].id;
        }
        this.itemForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.userName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.password || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        if (item.id !== undefined) {
            role = item.roles[0].id;
            this.itemForm.get('password').clearValidators();
            this.itemForm.get('password').updateValueAndValidity();
        }
    };
    UserTablePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    UserTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table-popup',
            template: __webpack_require__(/*! ./user-table-popup.component.html */ "./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserTablePopupComponent);
    return UserTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user-table/user-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/client/clients/user-table/user-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Users</div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"sub_table_header\">{{this.name}}</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add User</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"users\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      \r\n      <ngx-datatable-column name=\"\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <img mat-list-avatar class=\"\" src=\"assets/images/face-1.jpg\" alt=\"\"\r\n            style=\"flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; object-fit: cover;\">\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.userName }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Email\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.email }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"warn\" [selected]=\"true\">{{row?.roles[0].name}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status]}}\" [selected]=\"true\">{{row?.status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\" [maxWidth]=\"200\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <!-- <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button> -->\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/client/clients/user-table/user-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/client/clients/user-table/user-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-table/user-table-popup/user-table-popup.component */ "./src/app/views/client/clients/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(dialog, snack, clientService, loader, errDialog, activeRoute) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.activeRoute = activeRoute;
        this.statusArray = {
            'Active': "primary",
            'Inactive': "accent"
        };
        this.pageSize = 10;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.clientId = params["id"];
            _this.name = params["name"];
        });
        this.getUsers();
        this.getUserRoles();
    };
    UserTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    UserTableComponent.prototype.getUsers = function () {
        var _this = this;
        this.getItemSub = this.clientService.getUsers(this.clientId).subscribe(function (successResp) {
            console.log(successResp.content);
            _this.users = successResp.content.users;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    UserTableComponent.prototype.getUserRoles = function () {
        var _this = this;
        this.getItemSub = this.clientService.getRoles().subscribe(function (successResp) {
            successResp.content.forEach(function (item, index) {
                if (item.name === "Super Administrator")
                    successResp.content.splice(index, 1);
            });
            _this.roles = successResp.content;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    UserTableComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new User" : "Update User";
        var dialogRef = this.dialog.open(_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_4__["UserTablePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            var roles = [];
            roles.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["UserRole"](res.role));
            var client = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["ClientData"](_this.clientId);
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_8__["UserCreateReq"](res.username, res.password, res.email, roles, client);
            _this.loader.open();
            if (isNew) {
                _this.clientService.addUser(req).subscribe(function (response) {
                    _this.getUsers();
                    _this.loader.close();
                    _this.snack.open("New client added !", "OK", { duration: 4000 });
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
                _this.clientService.updateUser(data.id, req).subscribe(function (response) {
                    _this.getUsers();
                    _this.loader.close();
                    _this.snack.open("Client Updated!", "OK", { duration: 4000 });
                    // return this.users.slice();
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
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/views/client/clients/user-table/user-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/views/client/roles/role-table-popup/role-table-popup.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/client/roles/role-table-popup/role-table-popup.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">{{data.title}}</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" style=\"overflow: unset; max-height: unset;\">\r\n  <form [formGroup]=\"roleFormGroup\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"name\" placeholder=\"Role Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"description\" placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <span>Select Role Authorities</span>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <mat-tab-group>\r\n        <div *ngFor=\"let module of this.componentList; let i = index\">\r\n          <mat-tab label=\"{{module.moduleName}}\">\r\n            <form [formGroup]=\"authoritiesFormGroup\">\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" style=\"padding-top: 5px;\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"50\" class=\"pr-1\" style=\"padding-top: 5px;\" *ngFor=\"let item of module.data\">\r\n                  <mat-checkbox [checked]=\"item.checked\" (change)=\"onChange(item.id, module.moduleName, item.key, $event.checked)\" class=\"full-width\" value=\"{{item.key}}\">{{item.name}}</mat-checkbox>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </div>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"accent\" [disabled]=\"this.selectedAuthorities.length == 0 || roleFormGroup.invalid\" (click)=\"submit()\">Save</button>\r\n  <span fxFlex></span>\r\n  <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/views/client/roles/role-table-popup/role-table-popup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/client/roles/role-table-popup/role-table-popup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RoleTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTablePopupComponent", function() { return RoleTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client.service */ "./src/app/views/client/client.service.ts");
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




var RoleTablePopupComponent = /** @class */ (function () {
    function RoleTablePopupComponent(data, dialogRef, fb, clientService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.clientService = clientService;
        //Raveen : need to implement a custom directive for the pattern validation
        //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
        this.componentList = [];
        this.numberOfComponent = this.componentList.length - 1;
        this.selectedAuthorities = [];
    }
    RoleTablePopupComponent.prototype.ngOnInit = function () {
        this.buildRoleForms(this.data.payload);
        this.buildauthoritiesForm();
        this.getAllAuthorities();
    };
    /*
    * Build New Role Form Group
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.buildRoleForms = function (item) {
        this.roleFormGroup = this.fb.group({
            name: [item.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [item.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /*
    * Create New User Role Authorities Form Group
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.buildauthoritiesForm = function () {
        this.authoritiesFormGroup = this.fb.group({
            data: this.fb.array([])
        });
    };
    /*
    * Form Data Submit
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.submit = function () {
        var roleFormValue = this.roleFormGroup.value;
        var roleData = {
            name: roleFormValue.name,
            description: roleFormValue.description,
            authorities: this.selectedAuthorities
        };
        this.dialogRef.close(roleData);
    };
    /*
    * Check box onchange function for get selected check box value
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.onChange = function (id, name, auth_key, isChecked) {
        var dataArray = this.authoritiesFormGroup.controls.data;
        if (isChecked) {
            dataArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](auth_key));
            var tempJson = {
                id: id
            };
            this.selectedAuthorities.push(tempJson);
        }
        else {
            var index = dataArray.controls.findIndex(function (x) { return x.value === auth_key; });
            dataArray.removeAt(index);
            var i = this.selectedAuthorities.indexOf(id);
            this.selectedAuthorities.splice(i, 1);
        }
    };
    /*
    * Set Selected role authorities when update popup window open
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.setSelectedRoleAuthorities = function () {
        var _this = this;
        if (this.data.payload.hasOwnProperty('authorities')) {
            var temList = this.componentList;
            temList.forEach(function (element) {
                element.data.forEach(function (data) {
                    if (data.checked) {
                        var tempJson = {
                            id: data.id
                        };
                        _this.selectedAuthorities.push(tempJson);
                    }
                });
            });
            // console.log('-------------- setSelectedRoleAuthorities -------------------');
            // console.log(this.selectedAuthorities);
        }
    };
    /*
    * Get All Authorities
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.getAllAuthorities = function () {
        var _this = this;
        this.clientService.getAllAuthorities()
            .subscribe(function (response) {
            _this.createComponentArray(response.content);
        });
    };
    /*
    * Create Componet tab view data array
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.createComponentArray = function (dataArray) {
        var _this = this;
        dataArray.forEach(function (data) {
            var name = _this.getModuleName(data.code);
            if (name === 'Clients') {
                var i = _this.componentList.findIndex(function (x) { return x.moduleName === name; });
                var status_1 = _this.setSelectedAuthorities(data.id);
                if (i < 0) {
                    var tempdata = data;
                    tempdata['checked'] = status_1;
                    _this.componentList.push({
                        moduleName: name,
                        data: [tempdata]
                    });
                }
                else {
                    var tempdata = data;
                    tempdata['checked'] = status_1;
                    _this.componentList[i].data.push(tempdata);
                }
            }
        });
        // console.log('--------------- component list --------------------');
        // console.log(this.componentList);
        this.setSelectedRoleAuthorities();
    };
    /*
    * Get module name according to the code
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.getModuleName = function (code) {
        var x = code.split('-');
        if (x[0] === 'pc' || x[0] === 'pur' || x[0] === 'pu') {
            return 'Clients';
        }
        return null;
    };
    /*
    * Set Selected Authorities checke function
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTablePopupComponent.prototype.setSelectedAuthorities = function (id) {
        var status = false;
        if (this.data.payload.hasOwnProperty('authorities')) {
            var dataArray = this.data.payload.authorities;
            dataArray.forEach(function (elements) {
                if (elements.id === id) {
                    status = true;
                }
            });
        }
        return status;
    };
    RoleTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-table-popup',
            template: __webpack_require__(/*! ./role-table-popup.component.html */ "./src/app/views/client/roles/role-table-popup/role-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], RoleTablePopupComponent);
    return RoleTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/roles/role-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/client/roles/role-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Roles</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Role</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"items\" [columnMode]=\"'flex'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Role Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role Description\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Last Modified Date\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.lastModifiedDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"editRole(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteRole(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n\r\n    <!-- <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Feedback Topic</th>\r\n          <th>Feedback Type</th>\r\n          <th>Start Date</th>\r\n          <th>End Date</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1 pl-1\">{{row?.topic}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.type =='P' ? 'Product' : 'E Vote'}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.startDate}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.endDate}}</td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <div class=\"pb-1\">\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='navigateSurveyBuilder(row)' color=\"primary\" class=\"\">\r\n                  <mat-icon>view_headline</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)=\"deleteSurvey(row)\" color=\"warn\" class=\"\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\">{{totalRecords}} Total</div>\r\n          </td>\r\n          <td colspan=\"4\">\r\n\r\n            <nav aria-label=\"Page navigation example\">\r\n              <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber-1);\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(page);\">\r\n                    {{page}}\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber+1);\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table> -->\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/client/roles/role-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/client/roles/role-table.component.ts ***!
  \************************************************************/
/*! exports provided: RoleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTableComponent", function() { return RoleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-table-popup/role-table-popup.component */ "./src/app/views/client/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RoleTableComponent = /** @class */ (function () {
    function RoleTableComponent(dialog, snack, clientService, confirmService, loader, errDialog, router) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.router = router;
        this.pageSize = 10;
        this.componentList = [];
    }
    RoleTableComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    RoleTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    /*
    * Get All Roles And Create to the Ngx table
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTableComponent.prototype.getItems = function () {
        var _this = this;
        this.getItemSub = this.clientService.getAllUserRoles().subscribe(function (response) {
            // console.log('-------------- get all roles response--------------');
            // console.log(response);
            _this.items = response.content;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    /*
    * Open Create and Update Role popup window
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTableComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Create New User Role" : "Update User Role";
        data['isNew'] = isNew;
        var dialogRef = this.dialog.open(_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["RoleTablePopupComponent"], {
            width: "900px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            if (isNew) {
                // console.log('------------ create user role object ---------------');
                // console.log(res);
                _this.clientService.createNewRole(res).subscribe(function (response) {
                    // console.log('--------------- create user role response ----------------');
                    // console.log(response);
                    _this.snack.open('User Role Created', 'close', {
                        duration: 2000
                    });
                    _this.getItems();
                });
            }
            else {
                // console.log('------------ update user role object ---------------');
                res['localizedName'] = '';
                // console.log(res);
                _this.clientService.updateRloe(_this.editRoleId, res)
                    .subscribe(function (response) {
                    // console.log('--------------- create user role response ----------------');
                    // console.log(response);
                    _this.snack.open('User Role Updated', 'close', {
                        duration: 2000
                    });
                    _this.getItems();
                });
            }
            _this.loader.close();
        });
    };
    /*
    * Edit User Role
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTableComponent.prototype.editRole = function (role) {
        var _this = this;
        // console.log('------------- edit role ----------------');
        // console.log(role);
        this.editRoleId = role.id;
        this.clientService.getOneRoleAuthorities(role.id)
            .subscribe(function (response) {
            // console.log(response.content);
            var roleData = {
                name: response.content.name,
                description: response.content.description,
                authorities: response.content.authorities
            };
            _this.openPopUp(roleData, false);
        });
    };
    /*
    * Delete User Role
    * Created by Prasad Kumara
    * 14/02/2019
    */
    RoleTableComponent.prototype.deleteRole = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                // this.loader.open();
                _this.getItems();
            }
        });
    };
    RoleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-role-table",
            template: __webpack_require__(/*! ./role-table.component.html */ "./src/app/views/client/roles/role-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], RoleTableComponent);
    return RoleTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-client-client-module.js.map