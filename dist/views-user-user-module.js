(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-user-module"],{

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

/***/ "./src/app/views/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_user_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/user-table.component */ "./src/app/views/user/users/user-table.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.routing */ "./src/app/views/user/user.routing.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _users_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/user-table-popup/user-table-popup.component */ "./src/app/views/user/users/user-table-popup/user-table-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_9__["UserRoutes"])
            ],
            declarations: [_users_user_table_component__WEBPACK_IMPORTED_MODULE_8__["UserTableComponent"], _users_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserTablePopupComponent"]],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
            entryComponents: [_users_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserTablePopupComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/views/user/user.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/user/user.routing.ts ***!
  \********************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _users_user_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/user-table.component */ "./src/app/views/user/users/user-table.component.ts");

var UserRoutes = [
    {
        path: 'user-table',
        component: _users_user_table_component__WEBPACK_IMPORTED_MODULE_0__["UserTableComponent"],
        data: { title: 'User Section', breadcrumb: 'User' }
    }
];


/***/ }),

/***/ "./src/app/views/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.clientUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "clients";
        this.userUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.roleUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-roles";
    }
    UserService.prototype.getUsers = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.getRoles = function () {
        return this.http.get(this.roleUrl + "/suggestions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.addUser = function (item) {
        return this.http.post(this.userUrl, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.updateUser = function (id, item) {
        return this.http
            .put(this.userUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/user/users/user-table-popup/user-table-popup.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/user/users/user-table-popup/user-table-popup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"username\" [formControl]=\"itemForm.controls['username']\" placeholder=\"User Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\" *ngIf=\"formStatus\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"password\" type=\"password\" [formControl]=\"itemForm.controls['password']\"\r\n            positiveNumberAndLetterOnly placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"email\" [formControl]=\"itemForm.controls['email']\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"itemForm.controls['role']\" placeholder=\"Select A User Role\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/user/users/user-table-popup/user-table-popup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/user/users/user-table-popup/user-table-popup.component.ts ***!
  \*********************************************************************************/
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
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.password || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        if (item.id !== undefined) {
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
            template: __webpack_require__(/*! ./user-table-popup.component.html */ "./src/app/views/user/users/user-table-popup/user-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserTablePopupComponent);
    return UserTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/user/users/user-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/user/users/user-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n    <mat-card-title>\r\n      <div class=\"card-title-text\">Users</div>\r\n      <mat-divider></mat-divider>\r\n      <div class=\"sub_table_header\">{{this.name}}</div>\r\n      <mat-divider></mat-divider>\r\n  \r\n      <div class=\"m-333\">\r\n        <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add User</button>\r\n        <span fxFlex></span>\r\n        <p class=\"mat-select-lable\"> Page Size: </p>\r\n        <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n          <mat-option [value]=\"10\">10</mat-option>\r\n          <mat-option [value]=\"20\">20</mat-option>\r\n        </mat-select>\r\n      </div>\r\n  \r\n  \r\n    </mat-card-title>\r\n    <mat-card-content class=\"p-0\">\r\n  \r\n      <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"users\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n        <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            {{ row?.userName }}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n  \r\n        <ngx-datatable-column name=\"Email\" [flexGrow]=\"1\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            {{ row?.email }}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n  \r\n        <ngx-datatable-column name=\"Role\" [flexGrow]=\"1\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <mat-chip mat-sm-chip color=\"warn\" [selected]=\"true\">{{row?.roles[0].name}}</mat-chip>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n  \r\n        <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <mat-chip mat-sm-chip color=\"{{statusArray[row?.status]}}\" [selected]=\"true\">{{row?.status}}</mat-chip>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n  \r\n  \r\n        <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\" [maxWidth]=\"200\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <!-- <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button> -->\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n  \r\n    </mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "./src/app/views/user/users/user-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/user/users/user-table.component.ts ***!
  \**********************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-table-popup/user-table-popup.component */ "./src/app/views/user/users/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
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
    function UserTableComponent(dialog, snack, userService, loader, errDialog) {
        this.dialog = dialog;
        this.snack = snack;
        this.userService = userService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.statusArray = {
            'Active': "primary",
            'Deactive': "accent"
        };
        this.pageSize = 10;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        this.clientId = "faa6643aca8c5318a9583178795542cf";
        this.name = 'Adida';
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
        this.getItemSub = this.userService.getUsers(this.clientId).subscribe(function (successResp) {
            successResp.content.users.forEach(function (user, index) {
                user.roles.forEach(function (role) {
                    if (role.name === "Admin")
                        successResp.content.users.splice(index, 1);
                });
            });
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
        this.getItemSub = this.userService.getRoles().subscribe(function (successResp) {
            successResp.content.forEach(function (item, index) {
                if (item.name === "Super Administrator" || item.name === "Admin")
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
        var dialogRef = this.dialog.open(_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_4__["UserTablePopupComponent"], {
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
            roles.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_7__["UserRole"](res.role));
            var client = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_7__["ClientData"](_this.clientId);
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_7__["UserCreateReq"](res.username, res.password, res.email, roles, client);
            _this.loader.open();
            if (isNew) {
                _this.userService.addUser(req).subscribe(function (response) {
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
                _this.userService.updateUser(data.id, req).subscribe(function (response) {
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
            selector: "app-user-table",
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/views/user/users/user-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-user-user-module.js.map