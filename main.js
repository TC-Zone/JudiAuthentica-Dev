(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/app-calendar/app-calendar.module": [
		"./src/app/views/app-calendar/app-calendar.module.ts",
		"common",
		"views-app-calendar-app-calendar-module"
	],
	"./views/app-inbox/app-inbox.module": [
		"./src/app/views/app-inbox/app-inbox.module.ts",
		"views-app-inbox-app-inbox-module"
	],
	"./views/client/client.module": [
		"./src/app/views/client/client.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"common",
		"views-client-client-module"
	],
	"./views/evote/evote.module": [
		"./src/app/views/evote/evote.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"views-evote-evote-module~views-product-crud-product-crud-module~views-profile-profile-module",
		"common",
		"views-evote-evote-module"
	],
	"./views/future-survey/future-survey.module": [
		"./src/app/views/future-survey/future-survey.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"views-future-survey-future-survey-module~views-interaction-view-interaction-view-module~views-invite~c94c07c0",
		"common"
	],
	"./views/interaction-view/interaction-view.module": [
		"./src/app/views/interaction-view/interaction-view.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"views-future-survey-future-survey-module~views-interaction-view-interaction-view-module~views-invite~c94c07c0",
		"common",
		"views-interaction-view-interaction-view-module"
	],
	"./views/invitee-interaction-view/invitee-interaction-view.module": [
		"./src/app/views/invitee-interaction-view/invitee-interaction-view.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"views-future-survey-future-survey-module~views-interaction-view-interaction-view-module~views-invite~c94c07c0",
		"common",
		"views-invitee-interaction-view-invitee-interaction-view-module"
	],
	"./views/product-crud/product-crud.module": [
		"./src/app/views/product-crud/product-crud.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"views-evote-evote-module~views-product-crud-product-crud-module~views-profile-profile-module",
		"common",
		"views-product-crud-product-crud-module"
	],
	"./views/profile/profile.module": [
		"./src/app/views/profile/profile.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-product-crud-product-crud-module~views-profile-profile-module",
		"common",
		"views-profile-profile-module"
	],
	"./views/sessions/sessions.module": [
		"./src/app/views/sessions/sessions.module.ts",
		"views-sessions-sessions-module"
	],
	"./views/survey/survey.module": [
		"./src/app/views/survey/survey.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~a7ea736f",
		"views-evote-evote-module~views-future-survey-future-survey-module~views-interaction-view-interaction~e560b57b",
		"common",
		"views-survey-survey-module"
	],
	"./views/user/user.module": [
		"./src/app/views/user/user.module.ts",
		"views-client-client-module~views-evote-evote-module~views-future-survey-future-survey-module~views-i~43f37882",
		"common",
		"views-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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









var AppComponent = /** @class */ (function () {
    function AppComponent(title, router, activeRoute, routePartsService, themeService, renderer, userService, document) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.themeService = themeService;
        this.renderer = renderer;
        this.userService = userService;
        this.document = document;
        this.appTitle = "CP Authentica";
        this.pageTitle = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.changePageTitle();
        this.checkLoginUser();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.themeService.applyMatTheme(this.renderer);
    };
    AppComponent.prototype.changePageTitle = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            if (!routeParts.length)
                return _this.title.setTitle(_this.appTitle);
            // Extract title from parts;
            _this.pageTitle = routeParts
                .reverse()
                .map(function (part) { return part.title; })
                .reduce(function (partA, partI) {
                return partA + " > " + partI;
            });
            _this.pageTitle += " | " + _this.appTitle;
            _this.title.setTitle(_this.pageTitle);
        });
    };
    AppComponent.prototype.checkLoginUser = function () {
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name));
        var currentPath = this.document.location.href;
        var origin = this.document.location.origin;
        var navigationPath = currentPath.replace(origin + '/', '');
        if (userObj) {
            var isTokenExired = this.userService.isTokenExpired(userObj.token);
            if (isTokenExired) {
                // this.router.navigate([navigationPath]);
                this.removeLocalStorageElement();
                this.router.navigate(['sessions/signin']);
            } //else {
            //this.removeLocalStorageElement();
            //this.router.navigate(['sessions/signin']);
            //}
        }
        else {
            this.removeLocalStorageElement();
            if (navigationPath === 'sessions/signin') {
                this.router.navigate(['sessions/signin']);
            }
            else {
                this.router.navigate([navigationPath]);
            }
        }
    };
    AppComponent.prototype.removeLocalStorageElement = function () {
        localStorage.removeItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name);
        localStorage.removeItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].componentList);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"],
            _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            Document])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
/* harmony import */ var _shared_services_auth_add_header_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/auth/add-header-interceptor */ "./src/app/shared/services/auth/add-header-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: false })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            providers: [
                // ANGULAR MATERIAL SLIDER FIX
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_4__["GestureConfig"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_services_auth_add_header_interceptor__WEBPACK_IMPORTED_MODULE_12__["AddHeaderInterceptor"], multi: true },
                _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");



var rootRouterConfig = [
    {
        path: "",
        redirectTo: "sessions/signin",
        pathMatch: "full"
    },
    {
        path: "",
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: "sessions",
                loadChildren: "./views/sessions/sessions.module#SessionsModule",
                data: { title: "Session" }
            },
            {
                path: "interaction",
                loadChildren: "./views/interaction-view/interaction-view.module#InteractionViewModule",
                data: { title: "Interaction View" }
            },
            {
                path: "eVote",
                loadChildren: "./views/invitee-interaction-view/invitee-interaction-view.module#InviteeInteractionViewModule",
                data: { title: "Invitee Interaction View" }
            },
            {
                path: "Survey",
                loadChildren: "./views/invitee-interaction-view/invitee-interaction-view.module#InviteeInteractionViewModule",
                data: { title: "Invitee Interaction View" }
            }
        ]
    },
    {
        path: "",
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: "profile",
                loadChildren: "./views/profile/profile.module#ProfileModule",
                data: { title: "Profile", breadcrumb: "PROFILE" }
            },
            {
                path: "inbox",
                loadChildren: "./views/app-inbox/app-inbox.module#AppInboxModule",
                data: { title: "Inbox", breadcrumb: "INBOX" }
            },
            {
                path: "calendar",
                loadChildren: "./views/app-calendar/app-calendar.module#AppCalendarModule",
                data: { title: "Calendar", breadcrumb: "CALENDAR" }
            },
            {
                path: "users",
                loadChildren: "./views/user/user.module#UserModule",
                data: { title: "Users", breadcrumb: "Users" }
            },
            {
                path: "clients",
                loadChildren: "./views/client/client.module#ClientModule",
                data: { title: "Clients", breadcrumb: "Client" }
            },
            {
                path: "productCrud",
                loadChildren: "./views/product-crud/product-crud.module#ProductCrudModule",
                data: { title: "Product Catalogue", breadcrumb: "" }
            },
            {
                path: "surveys",
                loadChildren: "./views/survey/survey.module#SurveyModule",
                data: { title: "Survey Service", breadcrumb: "" }
            },
            {
                path: "future-survey",
                loadChildren: "./views/future-survey/future-survey.module#FutureSurveyModule",
                data: { title: "Future Survey", breadcrumb: "Future Survey" }
            },
            {
                path: "evote",
                loadChildren: "./views/evote/evote.module#EvoteModule",
                data: { title: "E - Vote", breadcrumb: "E Vote" }
            }
        ]
    },
    {
        path: "**",
        redirectTo: "sessions/404"
    }
];


/***/ }),

/***/ "./src/app/directives/Letter.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/Letter.directive.ts ***!
  \************************************************/
/*! exports provided: LetterOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterOnly", function() { return LetterOnly; });
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

var LetterOnly = /** @class */ (function () {
    function LetterOnly(el) {
        this.el = el;
        // Allow positive number greater than 0
        // private regex: RegExp = new RegExp(/^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$/);
        this.regex = new RegExp(/^(?:[A-Za-z]+)(?:[A-Za-z _]*)$/);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ["Backspace", "Tab", "End", "Home"];
    }
    LetterOnly.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], LetterOnly.prototype, "onKeyDown", null);
    LetterOnly = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[letterOnly]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LetterOnly);
    return LetterOnly;
}());



/***/ }),

/***/ "./src/app/directives/PositiveNumber.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/PositiveNumber.directive.ts ***!
  \********************************************************/
/*! exports provided: PositiveNumberOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositiveNumberOnly", function() { return PositiveNumberOnly; });
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

var PositiveNumberOnly = /** @class */ (function () {
    function PositiveNumberOnly(el) {
        this.el = el;
        // Allow positive number greater than 0
        this.regex = new RegExp(/^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$/);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ["Backspace", "Tab", "End", "Home"];
    }
    PositiveNumberOnly.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PositiveNumberOnly.prototype, "onKeyDown", null);
    PositiveNumberOnly = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[positiveNumberOnly]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PositiveNumberOnly);
    return PositiveNumberOnly;
}());



/***/ }),

/***/ "./src/app/directives/PositiveNumberAndLetter.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/directives/PositiveNumberAndLetter.directive.ts ***!
  \*****************************************************************/
/*! exports provided: PositiveNumberAndLetterOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositiveNumberAndLetterOnly", function() { return PositiveNumberAndLetterOnly; });
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

var PositiveNumberAndLetterOnly = /** @class */ (function () {
    function PositiveNumberAndLetterOnly(el) {
        this.el = el;
        // Allow positive number greater than 0
        this.regex = new RegExp(/^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$/);
        // private regex: RegExp = new RegExp(/^[a-zA-Z0-9._-]+$/);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ["Backspace", "Tab", "End", "Home"];
    }
    PositiveNumberAndLetterOnly.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PositiveNumberAndLetterOnly.prototype, "onKeyDown", null);
    PositiveNumberAndLetterOnly = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[positiveNumberAndLetterOnly]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PositiveNumberAndLetterOnly);
    return PositiveNumberAndLetterOnly;
}());



/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-bar\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'simple'\">\r\n  <ul class=\"breadcrumb\">\r\n    <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\">{{part.breadcrumb | translate}}</a></li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"breadcrumb-title\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'title'\">\r\n  <h1 class=\"bc-title\">{{routeParts[routeParts.length -1]['breadcrumb'] | translate}}</h1>\r\n  <ul class=\"breadcrumb\" *ngIf=\"routeParts.length > 1\">\r\n    <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\" class=\"text-muted\">{{part.breadcrumb | translate}}</a></li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    // public isEnabled: boolean = true;
    function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
        var _this = this;
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routerEventSub = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            // generate url from parts
            _this.routeParts.reverse().map(function (item, i) {
                item.breadcrumb = _this.parseText(item);
                item.urlSegments.forEach(function (urlSegment, j) {
                    if (j === 0)
                        return item.url = "" + urlSegment.path;
                    item.url += "/" + urlSegment.path;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = _this.routeParts[i - 1].url + "/" + item.url;
                return item;
            });
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    BreadcrumbComponent.prototype.parseText = function (part) {
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
            var r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-customizer\">\r\n  <div class=\"handle\" *ngIf=\"!isCustomizerOpen\">\r\n    <button \r\n    mat-fab\r\n    color=\"warn\" \r\n    (click)=\"isCustomizerOpen = true\">\r\n      <mat-icon>settings</mat-icon>\r\n    </button>\r\n  </div>\r\n  <mat-card class=\"p-0\" *ngIf=\"isCustomizerOpen\">\r\n    <mat-card-title class=\"mat-bg-warn\">\r\n      <div class=\"card-title-text\">\r\n        <span>Settings</span>\r\n        <span fxFlex></span>\r\n        <button \r\n        class=\"card-control\" \r\n        mat-icon-button\r\n        (click)=\"isCustomizerOpen = false\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <div class=\"pb-1\">\r\n        <h5 class=\"mt-0\">Layouts</h5>\r\n        <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"selectedLayout\" (change)=\"changeLayoutStyle($event)\">\r\n            <mat-radio-button [value]=\"'top'\"> Top Navigation </mat-radio-button>\r\n            <mat-radio-button [value]=\"'side'\"> Side Navigation </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n        <mat-checkbox [(ngModel)]=\"isTopbarFixed\" (change)=\"toggleTopbarFixed($event)\" [disabled]=\"selectedLayout === 'top'\" [value]=\"selectedLayout !== 'top'\">Fixed Topbar</mat-checkbox>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n        <mat-checkbox [(ngModel)]=\"layoutConf.breadcrumb\" (change)=\"toggleBreadcrumb($event)\">Use breadcrumb</mat-checkbox>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n          <h6 class=\"mt-0\">Breadcrumb Style</h6>\r\n          <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"layoutConf.breadcrumb\">\r\n              <mat-radio-button [value]=\"'simple'\"> Simple </mat-radio-button>\r\n              <mat-radio-button [value]=\"'title'\"> Simple with title </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      <div class=\"pb-1 pos-rel\">\r\n        <h6 class=\"m-0 pb-1\">Choose a Navigation Style</h6>\r\n        <mat-radio-group \r\n        fxLayout=\"column\" \r\n        [(ngModel)]=\"selectedMenu\" \r\n        (change)=\"changeSidenav($event)\" \r\n        [disabled]=\"selectedLayout === 'top'\">\r\n          <mat-radio-button \r\n          *ngFor=\"let type of sidenavTypes\" \r\n          [value]=\"type.value\">\r\n            {{type.name}}\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      \r\n      <div class=\"pb-1 pt-1\">\r\n        <mat-checkbox [(ngModel)]=\"isRTL\" (change)=\"toggleDir($event)\">RTL</mat-checkbox>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-customizer {\n  position: fixed;\n  z-index: 100;\n  bottom: 16px;\n  right: 24px; }\n  #app-customizer .handle {\n    float: right; }\n  #app-customizer .mat-card-content {\n    padding: 1rem 1.5rem 2rem; }\n  .pos-rel {\n  position: relative;\n  z-index: 99; }\n  .pos-rel .olay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 100; }\n"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, layout) {
        this.navService = navService;
        this.layout = layout;
        this.isCustomizerOpen = false;
        this.sidenavTypes = [{
                name: 'Default Menu',
                value: 'default-menu'
            }, {
                name: 'Separator Menu',
                value: 'separator-menu'
            }, {
                name: 'Icon Menu',
                value: 'icon-menu'
            }];
        this.selectedMenu = 'icon-menu';
        this.isTopbarFixed = false;
        this.isRTL = false;
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === 'rtl';
    };
    CustomizerComponent.prototype.changeLayoutStyle = function (data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    };
    CustomizerComponent.prototype.changeSidenav = function (data) {
        this.navService.publishNavigationChange(data.value);
    };
    CustomizerComponent.prototype.toggleBreadcrumb = function (data) {
        this.layout.publishLayoutChange({ breadcrumb: data.checked });
    };
    CustomizerComponent.prototype.toggleTopbarFixed = function (data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    };
    CustomizerComponent.prototype.toggleDir = function (data) {
        var dir = data.checked ? 'rtl' : 'ltr';
        this.layout.publishLayoutChange({ dir: dir });
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/components/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/components/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header-side/header-side.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function() { return HeaderSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/local-storage */ "./src/app/shared/helpers/local-storage.ts");
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







var HeaderSideComponent = /** @class */ (function (_super) {
    __extends(HeaderSideComponent, _super);
    function HeaderSideComponent(themeService, layout, translate, renderer, userService, router) {
        var _this = _super.call(this) || this;
        _this.themeService = themeService;
        _this.layout = layout;
        _this.translate = translate;
        _this.renderer = renderer;
        _this.userService = userService;
        _this.router = router;
        _this.currentLang = 'en';
        _this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
        return _this;
    }
    HeaderSideComponent.prototype.ngOnInit = function () {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
        this.translate.use(this.currentLang);
    };
    HeaderSideComponent.prototype.setLang = function (e) {
        console.log(e);
        this.translate.use(this.currentLang);
    };
    HeaderSideComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderSideComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderSideComponent.prototype.toggleSidenav = function () {
        console.log('TOGGLE NAV');
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderSideComponent.prototype.toggleCollapse = function () {
        console.log('TOGGLE CLSPS');
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact'
        }, { transitionClass: true });
    };
    HeaderSideComponent.prototype.signOut = function () {
        console.log('sign out called HEADER SIDE');
        this.userService.logout();
        if (localStorage.getItem('currentUser')) {
            console.log('NULL OI');
        }
        this.router.navigate(['/sessions/signin']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderSideComponent.prototype, "notificPanel", void 0);
    HeaderSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-side',
            template: __webpack_require__(/*! ./header-side.template.html */ "./src/app/shared/components/header-side/header-side.template.html")
        }),
        __metadata("design:paramtypes", [_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HeaderSideComponent);
    return HeaderSideComponent;
}(_helpers_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHandler"]));



/***/ }),

/***/ "./src/app/shared/components/header-side/header-side.template.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.template.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"topbar\">\r\n  <!-- Sidenav toggle button -->\r\n  <button\r\n  *ngIf=\"layoutConf.sidebarStyle !== 'compact'\"\r\n  mat-icon-button\r\n  id=\"sidenavToggle\"\r\n  (click)=\"toggleSidenav()\"\r\n  matTooltip=\"Toggle Hide/Open\">\r\n  <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <!-- Sidenav toggle collapse -->\r\n  <button\r\n  *ngIf=\"layoutConf.sidebarStyle !== 'closed'\"\r\n  mat-icon-button\r\n  id=\"collapseToggle\"\r\n  fxHide.lt-md=\"true\"\r\n  (click)=\"toggleCollapse()\"\r\n  matTooltip=\"Toggle Collapse\"\r\n  class=\"toggle-collapsed\">\r\n  <mat-icon>chevron_left</mat-icon>\r\n  </button>\r\n  <!-- Search form -->\r\n  <!-- <div\r\n  fxFlex\r\n  fxHide.lt-sm=\"true\"\r\n  class=\"search-bar\">\r\n    <form class=\"top-search-form\">\r\n      <mat-icon role=\"img\">search</mat-icon>\r\n      <input autofocus=\"true\" placeholder=\"Search\" type=\"text\">\r\n    </form>\r\n  </div> -->\r\n  <span fxFlex></span>\r\n  <!-- Language Switcher -->\r\n  <!-- <mat-select\r\n  placeholder=\"\"\r\n  id=\"langToggle\"\r\n  [style.width]=\"'auto'\"\r\n  name=\"currentLang\"\r\n  [(ngModel)]=\"currentLang\"\r\n  (selectionChange)=\"setLang($event)\">\r\n    <mat-option\r\n    *ngFor=\"let lang of availableLangs\"\r\n    [value]=\"lang.code\" ngDefaultControl>{{ lang.name }}</mat-option>\r\n  </mat-select> -->\r\n  <!-- Theme Switcher -->\r\n  <button\r\n  mat-icon-button\r\n  id=\"schemeToggle\"\r\n  [style.overflow]=\"'visible'\"\r\n  matTooltip=\"Color Schemes\"\r\n  [matMenuTriggerFor]=\"themeMenu\"\r\n  class=\"topbar-button-right\">\r\n    <mat-icon>format_color_fill</mat-icon>\r\n  </button>\r\n  <mat-menu #themeMenu=\"matMenu\">\r\n    <mat-grid-list\r\n    class=\"theme-list\"\r\n    cols=\"2\"\r\n    rowHeight=\"48px\">\r\n      <mat-grid-tile\r\n      *ngFor=\"let theme of egretThemes\"\r\n      (click)=\"changeTheme(theme)\">\r\n        <div mat-menu-item [title]=\"theme.name\">\r\n          <div [style.background]=\"theme.baseColor\" class=\"egret-swatch\"></div>\r\n          <mat-icon class=\"active-icon\" *ngIf=\"theme.isActive\">check</mat-icon>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-menu>\r\n  <!-- Notification toggle button -->\r\n  <button\r\n  mat-icon-button\r\n  matTooltip=\"Notifications\"\r\n  (click)=\"toggleNotific()\"\r\n  [style.overflow]=\"'visible'\"\r\n  class=\"topbar-button-right\">\r\n    <mat-icon>notifications</mat-icon>\r\n    <span class=\"notification-number mat-bg-warn\">3</span>\r\n  </button>\r\n  <!-- Top left user menu -->\r\n  <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right img-button\">\r\n    <img src=\"{{currentUser.image}}\" alt=\"\">\r\n  </button>\r\n  <mat-menu #accountMenu=\"matMenu\">\r\n    <button mat-menu-item [routerLink]=\"['/profile/']\">\r\n      <mat-icon>account_box</mat-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button mat-menu-item [routerLink]=\"['/profile/settings']\">\r\n      <mat-icon>settings</mat-icon>\r\n      <span>Account Settings</span>\r\n    </button>\r\n    <!-- <button mat-menu-item>\r\n      <mat-icon>notifications_off</mat-icon>\r\n      <span>Disable alerts</span>\r\n    </button> -->\r\n    <button mat-menu-item (click)=\"signOut()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Sign out</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/shared/components/header-top/header-top.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-topnav mat-elevation-z2\">\r\n  <div class=\"container\">\r\n    <div class=\"topnav\">\r\n      <!-- App Logo -->\r\n      <div class=\"topbar-branding\">\r\n        <img src=\"assets/images/cp_logo.png\" alt=\"\" class=\"app-logo\">\r\n      </div>\r\n\r\n      <ul class=\"menu\" *ngIf=\"!layoutConf.isMobile\">\r\n        <li *ngFor=\"let item of menuItems; let i = index;\">\r\n          <div *ngIf=\"item.type !== 'separator'\" routerLinkActive=\"open\">\r\n            <a matRipple routerLink=\"/{{item.state}}\" *ngIf=\"item.type === 'link'\">\r\n              <mat-icon>{{item.icon}}</mat-icon>\r\n              {{item.name | translate}}\r\n            </a>\r\n            <div *ngIf=\"item.type === 'dropDown'\">\r\n              <label matRipple for=\"drop-{{i}}\" class=\"toggle\"><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</label>\r\n              <a matRipple><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</a>\r\n              <input type=\"checkbox\" id=\"drop-{{i}}\" />\r\n              <ul>\r\n                <li *ngFor=\"let itemLvL2 of item.sub; let j = index;\" routerLinkActive=\"open\">\r\n                  <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\"\r\n                  *ngIf=\"itemLvL2.type !== 'dropDown'\">\r\n                    <mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>\r\n                    {{itemLvL2.name | translate}}\r\n                  </a>\r\n\r\n                  <div *ngIf=\"itemLvL2.type === 'dropDown'\">\r\n                    <label matRipple for=\"drop-{{i}}{{j}}\" class=\"toggle\">{{itemLvL2.name | translate}}</label>\r\n                    <a matRipple><mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>  {{itemLvL2.name | translate}}</a>\r\n                    <input type=\"checkbox\" id=\"drop-{{i}}{{j}}\" />\r\n                    <!-- Level 3 -->\r\n                    <ul>\r\n                      <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" routerLinkActive=\"open\">\r\n                        <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\">\r\n                          <mat-icon *ngIf=\"itemLvL3.icon\">{{itemLvL3.icon}}</mat-icon>\r\n                          {{itemLvL3.name | translate}}\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <span fxFlex></span>\r\n      <!-- End Navigation -->\r\n\r\n      <!-- Language Switcher -->\r\n      <mat-select\r\n      *ngIf=\"!layoutConf.isMobile\"\r\n      placeholder=\"\"\r\n      id=\"langToggle\"\r\n      [style.width]=\"'auto'\"\r\n      name=\"currentLang\"\r\n      [(ngModel)]=\"currentLang\"\r\n      (selectionChange)=\"setLang()\"\r\n      class=\"topbar-button-right\">\r\n        <mat-option\r\n        *ngFor=\"let lang of availableLangs\"\r\n        [value]=\"lang.code\" ngDefaultControl>{{ lang.name }}</mat-option>\r\n      </mat-select>\r\n      <!-- Theme Switcher -->\r\n      <button\r\n      mat-icon-button\r\n      id=\"schemeToggle\"\r\n      [style.overflow]=\"'visible'\"\r\n      matTooltip=\"Color Schemes\"\r\n      [matMenuTriggerFor]=\"themeMenu\"\r\n      class=\"topbar-button-right\">\r\n        <mat-icon>format_color_fill</mat-icon>\r\n      </button>\r\n      <mat-menu #themeMenu=\"matMenu\">\r\n        <mat-grid-list\r\n        class=\"theme-list\"\r\n        cols=\"2\"\r\n        rowHeight=\"48px\">\r\n          <mat-grid-tile\r\n          *ngFor=\"let theme of egretThemes\"\r\n          (click)=\"changeTheme(theme)\">\r\n            <div mat-menu-item [title]=\"theme.name\">\r\n              <div [style.background]=\"theme.baseColor\" class=\"egret-swatch\"></div>\r\n              <mat-icon class=\"active-icon\" *ngIf=\"theme.isActive\">check</mat-icon>\r\n            </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-menu>\r\n      <!-- Notification toggle button -->\r\n      <button\r\n      mat-icon-button\r\n      matTooltip=\"Notifications\"\r\n      (click)=\"toggleNotific()\"\r\n      [style.overflow]=\"'visible'\"\r\n      class=\"topbar-button-right\">\r\n        <mat-icon>notifications</mat-icon>\r\n        <span class=\"notification-number mat-bg-warn\">3</span>\r\n      </button>\r\n      <!-- Top left user menu -->\r\n      <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right mr-1 img-button\">\r\n        <img src=\"{{currentUser.image}}\" alt=\"\">\r\n      </button>\r\n      <mat-menu #accountMenu=\"matMenu\">\r\n        <button mat-menu-item [routerLink]=\"['/profile/']\">\r\n          <mat-icon>account_box</mat-icon>\r\n          <span>Profile</span>\r\n        </button>\r\n        <button mat-menu-item [routerLink]=\"['/profile/settings']\">\r\n          <mat-icon>settings</mat-icon>\r\n          <span>Account Settings</span>\r\n        </button>\r\n        <!-- <button mat-menu-item>\r\n          <mat-icon>notifications_off</mat-icon>\r\n          <span>Disable alerts</span>\r\n        </button> -->\r\n        <button mat-menu-item (click)=\"signOut()\" >\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          <span>Sign out</span>\r\n        </button>\r\n      </mat-menu>\r\n      <!-- Mobile screen menu toggle -->\r\n      <button\r\n      mat-icon-button\r\n      class=\"mr-1\"\r\n      (click)=\"toggleSidenav()\"\r\n      *ngIf=\"layoutConf.isMobile\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/header-top/header-top.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/local-storage */ "./src/app/shared/helpers/local-storage.ts");
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








var HeaderTopComponent = /** @class */ (function (_super) {
    __extends(HeaderTopComponent, _super);
    function HeaderTopComponent(layout, navService, themeService, translate, renderer, userService, router) {
        var _this = _super.call(this) || this;
        _this.layout = layout;
        _this.navService = navService;
        _this.themeService = themeService;
        _this.translate = translate;
        _this.renderer = renderer;
        _this.userService = userService;
        _this.router = router;
        _this.egretThemes = [];
        _this.currentLang = 'en';
        _this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
        return _this;
    }
    HeaderTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConf = this.layout.layoutConf;
        this.egretThemes = this.themeService.egretThemes;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(function (res) {
            res = res.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
            var limit = 4;
            var mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return _this.menuItems = mainItems;
            }
            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            _this.menuItems = mainItems;
        });
    };
    HeaderTopComponent.prototype.ngOnDestroy = function () {
        this.menuItemSub.unsubscribe();
    };
    HeaderTopComponent.prototype.setLang = function () {
        this.translate.use(this.currentLang);
    };
    HeaderTopComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderTopComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderTopComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderTopComponent.prototype.signOut = function () {
        console.log('sign out called HEADER TOP');
        this.userService.logout();
        if (localStorage.getItem('currentUser')) {
            console.log('NULL OI');
        }
        this.router.navigate(['/sessions/signin']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderTopComponent.prototype, "notificPanel", void 0);
    HeaderTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-top',
            template: __webpack_require__(/*! ./header-top.component.html */ "./src/app/shared/components/header-top/header-top.component.html")
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HeaderTopComponent);
    return HeaderTopComponent;
}(_helpers_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHandler"]));



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, translate, themeService, layout, media) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.media = media;
        this.isModuleLoading = false;
        this.layoutConf = {};
        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            // --------- Original Code -----------------
            // Close sidenav after route change in mobile
            // this.layout.adjustLayout({ route: routeChange.url });
            // --------- Costomized Code -----------------
            // costomized adjust full width routes layout
            _this.layout.costomizedAdjustScreenOptions({ route: routeChange.url });
        });
        // Translator init
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("sideBarStatus", "full");
        this.layoutConf = this.layout.layoutConf;
        // this.layout.adjustLayout();
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                _this.isModuleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this.isModuleLoading = false;
            }
        });
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        this.layout.adjustLayout(event);
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutConfSub = this.layout.layoutConf$.subscribe(function (change) {
            _this.initBodyPS(change);
        });
    };
    AdminLayoutComponent.prototype.initBodyPS = function (layoutConf) {
        if (layoutConf === void 0) { layoutConf = {}; }
        if (layoutConf.navigationPos === 'side' && layoutConf.topbarFixed) {
            if (this.bodyPS)
                this.bodyPS.destroy();
            if (this.headerFixedBodyPS)
                this.headerFixedBodyPS.destroy();
            this.headerFixedBodyPS = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"]('.rightside-content-hold', {
                suppressScrollX: true
            });
            this.scrollToTop('.rightside-content-hold');
        }
        else {
            if (this.bodyPS)
                this.bodyPS.destroy();
            if (this.headerFixedBodyPS)
                this.headerFixedBodyPS.destroy();
            this.bodyPS = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"]('.main-content-wrap', {
                suppressScrollX: true
            });
            this.scrollToTop('.main-content-wrap');
        }
    };
    AdminLayoutComponent.prototype.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    AdminLayoutComponent.prototype.closeSidebar = function () {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onResize", null);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.template.html */ "./src/app/shared/components/layouts/admin-layout/admin-layout.template.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.template.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.template.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap\" [dir]='layoutConf.dir'>\r\n  <!-- Header for top navigation layout -->\r\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT -->\r\n  <app-header-top \r\n    *ngIf=\"layoutConf.navigationPos === 'top'\" \r\n    [notificPanel]=\"notificationPanel\">\r\n  </app-header-top>\r\n  <!-- Main Container -->\r\n  <mat-sidenav-container \r\n  [dir]='layoutConf.dir'\r\n  class=\"app-admin-container app-side-nav-container mat-drawer-transition\"\r\n  [ngClass]=\"{\r\n    'navigation-top': layoutConf.navigationPos === 'top',\r\n    'sidebar-full': layoutConf.sidebarStyle === 'full',\r\n    'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',\r\n    'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',\r\n    'layout-intransition': layoutConf.layoutInTransition,\r\n    'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',\r\n    'sidebar-closed': layoutConf.sidebarStyle === 'closed',\r\n    'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'\r\n  }\">\r\n  <!-- SIDEBAR -->\r\n  <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\r\n  <app-sidebar-side *ngIf=\"layoutConf.navigationPos === 'side'\"></app-sidebar-side>\r\n  \r\n  <!-- Top navigation layout (navigation for mobile screen) -->\r\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION MOBILE LAYOUT -->\r\n  <app-sidebar-top *ngIf=\"layoutConf.navigationPos === 'top' && layoutConf.isMobile\"></app-sidebar-top>\r\n\r\n    <!-- App content -->\r\n    <div class=\"main-content-wrap\">\r\n      <!-- Header for side navigation layout -->\r\n      <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\r\n      <app-header-side \r\n        *ngIf=\"layoutConf.navigationPos === 'side'\"\r\n        [notificPanel]=\"notificationPanel\">\r\n      </app-header-side>\r\n\r\n      <div class=\"rightside-content-hold\">\r\n        <!-- View Loader -->\r\n        <div class=\"view-loader\" *ngIf=\"isModuleLoading\">\r\n          <div class=\"spinner\">\r\n            <div class=\"double-bounce1 mat-bg-accent\"></div>\r\n            <div class=\"double-bounce2 mat-bg-primary\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- Breadcrumb -->\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <!-- View outlet -->\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n    <!-- View overlay for mobile navigation -->\r\n    <div class=\"sidebar-backdrop\"\r\n    [ngClass]=\"{'visible': layoutConf.sidebarStyle !== 'closed' && layoutConf.isMobile}\"\r\n    (click)=\"closeSidebar()\"></div>\r\n    \r\n    <!-- Notificaation bar -->\r\n    <mat-sidenav #notificationPanel mode=\"over\" class=\"\" position=\"end\">\r\n      <div class=\"navigation-hold\" fxLayout=\"column\">\r\n        <app-notifications [notificPanel]=\"notificationPanel\"></app-notifications>\r\n      </div>\r\n    </mat-sidenav>\r\n  </mat-sidenav-container>\r\n</div>\r\n\r\n\r\n<!-- Only for demo purpose -->\r\n<!-- Remove this from your production version -->\r\n<app-customizer></app-customizer>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
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

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/notifications/notifications.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mat-bg-primary pt-1 pb-1\">\r\n  <h6 class=\"m-0\">Notifications</h6>\r\n</div>\r\n<mat-nav-list class=\"notification-list\" role=\"list\">\r\n  <!-- Notification item -->\r\n  <mat-list-item *ngFor=\"let n of notifications\" class=\"notific-item\" role=\"listitem\" routerLinkActive=\"open\">\r\n    <mat-icon [color]=\"n.color\" class=\"notific-icon\">{{n.icon}}</mat-icon>\r\n    <a [routerLink]=\"[n.route || '/dashboard']\">\r\n      <div class=\"mat-list-text\">\r\n        <h4 class=\"message\">{{n.message}}</h4>\r\n        <small class=\"time text-muted\">{{n.time}}</small>\r\n      </div>\r\n    </a>\r\n  </mat-list-item>\r\n</mat-nav-list>\r\n<div class=\"text-center mt-1\" *ngIf=\"notifications.length\">\r\n  <small><a href=\"#\" (click)=\"clearAll($event)\">Clear all notifications</a></small>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/notifications/notifications.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routeChange) {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.notificPanel.close();
            }
        });
    };
    NotificationsComponent.prototype.clearAll = function (e) {
        e.preventDefault();
        this.notifications = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotificationsComponent.prototype, "notificPanel", void 0);
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/shared/components/notifications/notifications.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar-side/sidebar-side.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\r\n  <div id=\"scroll-area\" class=\"navigation-hold\" fxLayout=\"column\">\r\n    <!-- App Logo -->\r\n    <div class=\"branding default-bg\">\r\n      <img src=\"assets/images/cp_logo.png\" alt=\"\" class=\"app-logo\">\r\n      <!-- Two different logos for dark and light themes -->\r\n      <img src=\"assets/images/clear-picture-logo.png\" alt=\"\" class=\"app-logo-text\" *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') !== -1\">\r\n      <img src=\"assets/images/cp_logo_text.png\" alt=\"\" class=\"app-logo-text\" *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') === -1\">\r\n    </div>\r\n\r\n    <!-- Sidebar user -->\r\n    <div class=\"app-user\">\r\n      <div class=\"app-user-photo\">\r\n        <img src=\"{{currentUser.image}}\" alt=\"\">\r\n      </div>\r\n      <span class=\"app-user-name mb-05\">\r\n        <mat-icon class=\"icon-xs text-muted\">lock</mat-icon>\r\n        {{currentUser.profilename}}\r\n      </span>\r\n      <!-- Small buttons -->\r\n      <div class=\"app-user-controls\">\r\n        <button class=\"text-muted\" mat-icon-button mat-xs-button [matMenuTriggerFor]=\"appUserMenu\">\r\n          <mat-icon>settings</mat-icon>\r\n        </button>\r\n        <button class=\"text-muted\" mat-icon-button mat-xs-button matTooltip=\"Inbox\" routerLink=\"/inbox\">\r\n          <mat-icon>email</mat-icon>\r\n        </button>\r\n\r\n        <mat-menu #appUserMenu=\"matMenu\">\r\n          <!-- routerLink=\"/profile/overview\" -->\r\n          <button mat-menu-item routerLink=\"/profile/\">\r\n            <mat-icon>account_box</mat-icon>\r\n            <span>Profile</span>\r\n          </button>\r\n          <button mat-menu-item routerLink=\"/profile/settings\">\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Account Settings</span>\r\n          </button>\r\n          <button mat-menu-item routerLink=\"/calendar\">\r\n            <mat-icon>date_range</mat-icon>\r\n            <span>Calendar</span>\r\n          </button>\r\n\r\n        </mat-menu>\r\n      </div>\r\n    </div>\r\n    <!-- Navigation -->\r\n    <app-sidenav [items]=\"menuItems\" [hasIconMenu]=\"hasIconTypeMenuItem\" [iconMenuTitle]=\"iconTypeMenuTitle\"></app-sidenav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar-side/sidebar-side.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function() { return SidebarSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _helpers_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/local-storage */ "./src/app/shared/helpers/local-storage.ts");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
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






var SidebarSideComponent = /** @class */ (function (_super) {
    __extends(SidebarSideComponent, _super);
    function SidebarSideComponent(navService, themeService, userService) {
        var _this = _super.call(this) || this;
        _this.navService = navService;
        _this.themeService = themeService;
        _this.userService = userService;
        return _this;
    }
    SidebarSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem;
            var removeItemList = _this.userService.setComponetDisable();
            removeItemList.forEach(function (element) {
                var index = _this.menuItems.findIndex(function (x) { return x.name === element; });
                if (index >= 0) {
                    _this.menuItems[index].disabled = true;
                }
            });
            console.log('=====================================');
            console.log(_this.menuItems);
            //Checks item list has any icon type.
            _this.hasIconTypeMenuItem = !!_this.menuItems.filter(function (item) { return item.type === 'icon'; }).length;
        });
    };
    SidebarSideComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.sidebarPS = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"]('#scroll-area', {
                suppressScrollX: true
            });
        });
    };
    SidebarSideComponent.prototype.ngOnDestroy = function () {
        if (this.sidebarPS) {
            this.sidebarPS.destroy();
        }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-side',
            template: __webpack_require__(/*! ./sidebar-side.component.html */ "./src/app/shared/components/sidebar-side/sidebar-side.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SidebarSideComponent);
    return SidebarSideComponent;
}(_helpers_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHandler"]));



/***/ }),

/***/ "./src/app/shared/components/sidebar-top/sidebar-top.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\r\n  <div id=\"sidebar-top-scroll-area\" class=\"navigation-hold\" fxLayout=\"column\">\r\n    <app-sidenav [items]=\"menuItems\"></app-sidenav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/sidebar-top/sidebar-top.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function() { return SidebarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarTopComponent = /** @class */ (function () {
    function SidebarTopComponent(navService) {
        this.navService = navService;
    }
    SidebarTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
        });
    };
    SidebarTopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.sidebarPS = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"]('#sidebar-top-scroll-area', {
                suppressScrollX: true
            });
        });
    };
    SidebarTopComponent.prototype.ngOnDestroy = function () {
        if (this.sidebarPS) {
            this.sidebarPS.destroy();
        }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-top',
            template: __webpack_require__(/*! ./sidebar-top.component.html */ "./src/app/shared/components/sidebar-top/sidebar-top.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], SidebarTopComponent);
    return SidebarTopComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
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

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.menuItems = [];
    }
    SidenavComponent.prototype.ngOnInit = function () { };
    // Only for demo purpose
    SidenavComponent.prototype.addMenuItem = function () {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('items'),
        __metadata("design:type", Array)
    ], SidenavComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hasIconMenu'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "hasIconTypeMenuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('iconMenuTitle'),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "iconTypeMenuTitle", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.template.html */ "./src/app/shared/components/sidenav/sidenav.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.template.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-hold\">\r\n  <div class=\"icon-menu\" *ngIf=\"hasIconTypeMenuItem\">\r\n    <!-- Icon menu separator -->\r\n    <div class=\"mt-1 mb-1 nav-item-sep\">\r\n      <mat-divider [ngStyle]=\"{margin: '0 -24px'}\"></mat-divider>\r\n      <span class=\"text-muted icon-menu-title\">{{iconTypeMenuTitle}}</span>\r\n    </div>\r\n    <!-- Icon menu items -->\r\n    <div class=\"icon-menu-item\" *ngFor=\"let item of menuItems\">\r\n      <button *ngIf=\"!item.disabled && item.type === 'icon'\" mat-raised-button [matTooltip]=\"item.tooltip\" routerLink=\"/{{item.state}}\"\r\n        routerLinkActive=\"mat-bg-primary\">\r\n        <mat-icon>{{item.icon}}</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ul appDropdown class=\"sidenav\">\r\n    <li *ngFor=\"let item of menuItems\" appDropdownLink routerLinkActive=\"open\">\r\n      <div class=\"nav-item-sep\" *ngIf=\"item.type === 'separator'\">\r\n        <mat-divider></mat-divider>\r\n        <span class=\"text-muted\">{{item.name }}</span>\r\n      </div>\r\n      <div *ngIf=\"!item.disabled && item.type !== 'separator' && item.type !== 'icon'\" class=\"lvl1\">\r\n        <a routerLink=\"/{{item.state}}\" appDropdownToggle matRipple *ngIf=\"item.type === 'link'\">\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name }}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n        </a>\r\n        <!-- <a [href]=\"item.state\" appDropdownToggle matRipple *ngIf=\"item.type === 'extLink'\" target=\"_blank\">\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name }}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n        </a> -->\r\n\r\n        <!-- DropDown -->\r\n        <a *ngIf=\"item.type === 'dropDown'\" appDropdownToggle matRipple>\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name }}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n          <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\r\n        </a>\r\n        <!-- LEVEL 2 -->\r\n        <ul class=\"submenu lvl2\" appDropdown *ngIf=\"item.type === 'dropDown'\">\r\n          <li *ngFor=\"let itemLvL2 of item.sub\" appDropdownLink routerLinkActive=\"open\">\r\n\r\n            <a routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\" appDropdownToggle *ngIf=\"itemLvL2.type !== 'dropDown'\"\r\n              matRipple>\r\n              <span class=\"item-name lvl2\">{{itemLvL2.name }}</span>\r\n              <span fxFlex></span>\r\n            </a>\r\n\r\n            <a *ngIf=\"itemLvL2.type === 'dropDown'\" appDropdownToggle matRipple>\r\n              <span class=\"item-name lvl2\">{{itemLvL2.name }}</span>\r\n              <span fxFlex></span>\r\n              <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\r\n            </a>\r\n\r\n            <!-- LEVEL 3 -->\r\n            <ul class=\"submenu lvl3\" appDropdown *ngIf=\"itemLvL2.type === 'dropDown'\">\r\n              <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" appDropdownLink routerLinkActive=\"open\">\r\n                <a routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\" appDropdownToggle\r\n                  matRipple>\r\n                  <span class=\"item-name lvl3\">{{itemLvL3.name }}</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
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


var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownAnchorDirective.prototype, "onClick", null);
    DropdownAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])),
        __metadata("design:paramtypes", [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]])
    ], DropdownAnchorDirective);
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
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


var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DropdownLinkDirective.prototype, "open", null);
    DropdownLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]])
    ], DropdownLinkDirective);
    return DropdownLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppDropdownDirective);
    return AppDropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/egret-side-nav-toggle.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: EgretSideNavToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSideNavToggleDirective", function() { return EgretSideNavToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var EgretSideNavToggleDirective = /** @class */ (function () {
    function EgretSideNavToggleDirective(media, sideNav) {
        this.media = media;
        this.sideNav = sideNav;
    }
    EgretSideNavToggleDirective.prototype.ngOnInit = function () {
        console.log("CALLED EGRET");
        this.initSideNav();
    };
    EgretSideNavToggleDirective.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    EgretSideNavToggleDirective.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    };
    EgretSideNavToggleDirective.prototype.initSideNav = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.updateSidenav();
        });
    };
    EgretSideNavToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[EgretSideNavToggle]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"]])
    ], EgretSideNavToggleDirective);
    return EgretSideNavToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/font-size.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/font-size.directive.ts ***!
  \**********************************************************/
/*! exports provided: FontSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function() { return FontSizeDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FontSizeDirective = /** @class */ (function () {
    function FontSizeDirective(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    FontSizeDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.fontSize = this.fontSize;
    };
    FontSizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[fontSize]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('fontSize')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FontSizeDirective);
    return FontSizeDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ;
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ;
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "smoothScroll", null);
    ScrollToDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[scrollTo]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('scrollTo')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "./src/app/shared/fake-db/cp-users.ts":
/*!********************************************!*\
  !*** ./src/app/shared/fake-db/cp-users.ts ***!
  \********************************************/
/*! exports provided: CpUsersDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpUsersDB", function() { return CpUsersDB; });
var CpUsersDB = /** @class */ (function () {
    function CpUsersDB() {
        this.users = [
            {
                id: "1",
                user_name: "judec",
                profile_name: "Jude Cedric",
                password: "jude123",
                image: "assets/images/cp_users/Jude-Weerasekara.jpg",
                company: "Clear Picture - Canada",
                position: "Product Owner"
            },
            {
                id: "2",
                user_name: "shalindraw",
                profile_name: "Shalindra Weliwita",
                password: "shalindra123",
                image: "assets/images/cp_users/cp_user_1.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Project Manager"
            },
            {
                id: "3",
                user_name: "raveens",
                profile_name: "Yasas Ravindu",
                password: "raveen123",
                image: "assets/images/cp_users/raveen sankalpa.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Senior Software Engineer"
            },
            {
                id: "4",
                user_name: "kushanp",
                profile_name: "Kushan Pabasara",
                password: "kushan123",
                image: "assets/images/cp_users/kushan pabasara.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "UI/UX Engineer"
            },
            {
                id: "5",
                user_name: "nuwanp",
                profile_name: "Nuwan Prasanna",
                password: "nuwan123",
                image: "assets/images/cp_users/nuwan prasanna.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Tech Lead"
            },
            {
                id: "6",
                user_name: "amilaj",
                profile_name: "Amila Jayanga",
                password: "amila123",
                image: "assets/images/cp_users/amila ayya.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Android Developer"
            },
            {
                id: "7",
                user_name: "buddhi",
                profile_name: "Buddhi Hasanka",
                password: "hbh123",
                image: "assets/images/cp_users/buddhi_hasanka.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Software Engineer"
            }, {
                id: "8",
                user_name: "scottm",
                profile_name: "Scott Murray",
                password: "scott123",
                image: "assets/images/cp_users/scott.jpg",
                company: "Clear Picture - Global",
                position: "President & Chief Executive Officer"
            }, {
                id: "9",
                user_name: "hasitham",
                profile_name: "Hasitha De Mel",
                password: "hasitha123",
                image: "assets/images/cp_users/hasitha.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "iOS Development"
            }, {
                id: "10",
                user_name: "andrewf",
                profile_name: "Andrew Fraser",
                password: "andrew123",
                image: "assets/images/cp_users/andrew_replace.png",
                company: "Clear Picture - Global",
                position: "Service Delivery"
            }, {
                id: "11",
                user_name: "rashmid",
                profile_name: "Rashmi Deldeniya",
                password: "rashmi123",
                image: "assets/images/cp_users/rashmi.jpg",
                company: "Clear Picture - Sri Lanka",
                position: "Quality Assurance"
            }
        ];
    }
    return CpUsersDB;
}());



/***/ }),

/***/ "./src/app/shared/helpers/local-storage.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/helpers/local-storage.ts ***!
  \*************************************************/
/*! exports provided: LocalStorageHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageHandler", function() { return LocalStorageHandler; });
var LocalStorageHandler = /** @class */ (function () {
    function LocalStorageHandler() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log("current user obj : ");
        console.log(this.currentUser);
    }
    return LocalStorageHandler;
}());



/***/ }),

/***/ "./src/app/shared/helpers/url.helper.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/helpers/url.helper.ts ***!
  \**********************************************/
/*! exports provided: getQueryParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParam", function() { return getQueryParam; });
function getQueryParam(prop) {
    var params = {};
    var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
    var definitions = search.split('&');
    definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
    });
    return (prop && prop in params) ? params[prop] : params;
}


/***/ }),

/***/ "./src/app/shared/pipes/array-filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/array-filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: ArrayFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFilter", function() { return ArrayFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayFilter = /** @class */ (function () {
    function ArrayFilter() {
    }
    ArrayFilter.prototype.transform = function (items, filterVal, arrType) {
        var _this = this;
        //console.log("filterVal : " + filterVal);
        if (!items) {
            //console.log("no items");
            return items;
        }
        if (!filterVal) {
            console.log("no filterValue");
            return items;
        }
        // console.log(' here items : ');
        // console.log('filterVal : '+filterVal);
        // console.log(items);
        return items.filter(function (item) { return _this.applyFilter(item, filterVal, arrType); });
    };
    ArrayFilter.prototype.applyFilter = function (item, filterVal, arrType) {
        switch (arrType) {
            case "answer_types":
                return item.id.indexOf(filterVal) !== -1;
            case "products":
                return item.id.indexOf(filterVal) !== -1;
            case "evotes":
                return item.id.indexOf(filterVal) !== -1;
            case "clients":
                return item.id.indexOf(filterVal) !== -1;
            default:
                break;
        }
    };
    ArrayFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "arrayFilter",
            pure: false
        })
    ], ArrayFilter);
    return ArrayFilter;
}());



/***/ }),

/***/ "./src/app/shared/pipes/excerpt.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'excerpt' })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/relative-time.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date))
            value = new Date(value);
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    RelativeTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'relativeTime' })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var AppComfirmComponent = /** @class */ (function () {
    function AppComfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AppComfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: "<h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-raised-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">OK</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-raised-button \n    (click)=\"dialogRef.close(false)\">Cancel</button>\n    </div>",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], AppComfirmComponent);
    return AppComfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfirmService = /** @class */ (function () {
    function AppConfirmService(dialog) {
        this.dialog = dialog;
    }
    AppConfirmService.prototype.confirm = function (data) {
        if (data === void 0) { data = {}; }
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        var dialogRef;
        dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
            width: '380px',
            disableClose: true,
            data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed();
    };
    AppConfirmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], AppConfirmService);
    return AppConfirmService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-error/app-error.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-error/app-error.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{ data.title}}</h1>\r\n<div mat-dialog-content>{{ data.message}}</div>\r\n<div mat-dialog-actions>\r\n\r\n  <span fxFlex></span>\r\n  <button type=\"button\" color=\"warn\" mat-raised-button (click)=\"dialogRef.close(false)\">OK</button>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/services/app-error/app-error.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/app-error/app-error.component.ts ***!
  \******************************************************************/
/*! exports provided: AppErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function() { return AppErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var AppErrorComponent = /** @class */ (function () {
    function AppErrorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AppErrorComponent.prototype.ngOnInit = function () {
    };
    AppErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-error',
            template: __webpack_require__(/*! ./app-error.component.html */ "./src/app/shared/services/app-error/app-error.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AppErrorComponent);
    return AppErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-error/app-error.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/app-error/app-error.service.ts ***!
  \****************************************************************/
/*! exports provided: AppErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorService", function() { return AppErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-error.component */ "./src/app/shared/services/app-error/app-error.component.ts");
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.messages */ "./src/app/shared/services/app-error/error.messages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppErrorService = /** @class */ (function () {
    function AppErrorService(dialog) {
        this.dialog = dialog;
    }
    AppErrorService.prototype.showHttpError = function (error) {
        if (error === void 0) { error = {}; }
        console.log("error status : " + error.status);
        if (error.status == "400") {
            return "Error occured due to invalid inputs !";
        }
        else if (error.status == "404") {
            return "Resource could not found ! ";
        }
        else if (error.status == "500") {
            return "Internal Service issue !";
        }
        else
            return "Something went  wrong !";
    };
    AppErrorService.prototype.showError = function (error) {
        if (error === void 0) { error = {}; }
        error.title = error.title || "Error";
        error.type = error.type || "common_error";
        var errorMsg;
        if (error.type == "http_error") {
            errorMsg = this.showHttpError(error);
        }
        else if (error.type == "client_error") {
            errorMsg = error.clientError;
        }
        else {
            errorMsg = "CP Judi Authentica : Something went wrong ";
        }
        var dialogRef;
        dialogRef = this.dialog.open(_app_error_component__WEBPACK_IMPORTED_MODULE_2__["AppErrorComponent"], {
            width: "380px",
            disableClose: true,
            data: { title: error.title, message: errorMsg }
        });
        return dialogRef.afterClosed();
    };
    // show popup window for custom error message (by prasad kumara)
    AppErrorService.prototype.handleCustomError = function (error) {
        if (error === void 0) { error = {}; }
        var errorTitle = this.removeUnderscore(error.title);
        if (_error_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessages"].hasOwnProperty(error.type)) {
            var jsonArrayKey = this.getEnumKey(error.message);
            if (_error_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessages"][error.type].hasOwnProperty(jsonArrayKey)) {
                this.openPopUpWindow(errorTitle, _error_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessages"][error.type][jsonArrayKey]);
            }
            else {
                this.openPopUpWindow(errorTitle, error.message);
            }
        }
        else {
            this.openPopUpWindow(errorTitle, error.message);
        }
    };
    // handle custom error (by prasad kumara)
    AppErrorService.prototype.showErrorWithMessage = function (error) {
        console.log('view survey error with message');
        console.log(error);
        if (error.error !== null) {
            if (error.error.hasOwnProperty('validationFailures')) {
                this.handleCustomError({
                    title: error.error.status,
                    message: error.error.validationFailures[0].code,
                    type: error.error.validationFailures[0].field,
                    status: error.status,
                    clientError: ''
                });
            }
            else {
                this.openPopUpWindow(this.removeUnderscore(error.error.status), 'CP Judi Authentica : Something went wrong');
            }
        }
        else {
            this.showHttpError({
                title: 'Error',
                message: '',
                type: 'http_error',
                status: error.status,
                clientError: ''
            });
        }
    };
    // convert error messages to camell case message (by prasad kumara)
    AppErrorService.prototype.getEnumKey = function (string) {
        var stringArray = string.split('.');
        var enumkey = '';
        for (var i = 0; i < stringArray.length; i++) {
            if (i === 0) {
                enumkey += stringArray[i].substring(0, 1).toLowerCase() + stringArray[i].substring(1);
            }
            else {
                enumkey += stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1);
            }
        }
        return enumkey;
    };
    // Remove _ from Error Title
    AppErrorService.prototype.removeUnderscore = function (string) {
        var stringArray = string.split('_');
        var errorTitle = '';
        for (var i = 0; i < stringArray.length; i++) {
            errorTitle += stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1).toLowerCase() + ' ';
        }
        return errorTitle;
    };
    // open pop up window
    AppErrorService.prototype.openPopUpWindow = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(_app_error_component__WEBPACK_IMPORTED_MODULE_2__["AppErrorComponent"], {
            width: '380px',
            disableClose: true,
            data: { title: title, message: message }
        });
        return dialogRef.afterClosed();
    };
    AppErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppErrorService);
    return AppErrorService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-error/error.messages.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/app-error/error.messages.ts ***!
  \*************************************************************/
/*! exports provided: errorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
var errorMessages = {
    name: {
        answerTemplateCreateRequestNameDuplicate: 'Answer Name is Duplicated.'
    },
    answerTemplate: {
        answerTemplateUpdateRequestAnswerTemplateNotExist: 'Answer Template is not Found.',
        answerTemplateDeleteRequestAnswerTemplateNotExist: 'Answer Template is not Found.'
    },
    votersZero: {
        eVoteCreateRequestEVoteVotersNotExists: 'Evote Voters are not Found.'
    },
    eVote: {
        eVoteViewRequestEVoteNotExist: 'Evote is not Found.',
        eVoteUpdateRequestEVoteNotExist: 'Evote is not Found.',
        eVoteDeleteRequestEVoteNotExist: 'Evote is not Found.',
        eVoteCreateRequestCanNotStoreFile: 'Canot Store File.',
        eVoteUpdateRequestCanNotStoreFile: 'Canot Store File.'
    },
    evote_image: {
        evoteImageRetrieveEvoteImageNotExists: 'Image is not Found.'
    },
    imageName: {
        ProductCreateRequestImageNameAlreadyExist: 'Image Name All Ready Exist.'
    },
    element: {
        futureSurveyAnswerRequestQuestionElementDoesNotExists: 'Question Element is not Found.'
    },
    futureSurvey: {
        updateConfigErrorConfigUpdate: 'Error Configure Update.',
        futureSurveytUpdateRequestFutureSurveyNotExist: 'Survey is not Exist.',
        futureSurveyDeleteRequestFutureSurveyNotExist: 'Survey is not Exist.',
        futureSurveyViewFutureSurveyNotExist: 'Survey is not Exist.',
        futureSurveyViewInvalidId: 'Invalid Survey Id.'
    },
    futureSurveyInteraction: {
        interactionViewInteractionDoesNotExists: 'Interaction is not Found.',
        updateErrorWhenUpdate: 'Can not Update at this Time.',
        interactLoginCouldNotFindrecord: 'Record is not Found.',
        interactLoginPostCouldNotFindRecord: 'Record is not Found.',
        deleteInteractionBySurvey: 'Can not Delete at this Time.'
    },
    interaction: {
        fetchAllInteractionsInteractionsNotExists: 'Interaction is not Exist.',
        fetchGroupByClientIdGroupsNotExists: 'Groups are not Exists.',
        getAssignedInviteesGroupDetailsDoesNotExists: 'Group Details are not Exist.'
    },
    inviteeGroup: {
        findGroupByIdInviteeGroupNotExist: 'Invitee Group is not Exist.'
    },
    question: {
        questionViewRequestQuestionNotExist: 'Question is not Exist.',
        questionUpdateRequestQuestionNotExist: 'Question is not Exist.',
        questionDeleteRequestQuestionNotExist: 'Question is not Exist.'
    },
    survey: {
        surveyUpdateRequestSurveyNotExist: 'Survey is not Exist.',
        EVoteCreateRequestSurveyInvalid: 'Invalid Survey.',
        surveyViewRequestSurveyNotExist: 'Survey is not Exist.'
    },
    client: {
        EVoteCreateRequestClientEmpty: 'Invalid Client.',
        EVoteCreateRequestClientInvalid: 'Invalid Client.',
        EVoteRequestClientEmpty: 'Invalid Client.',
        EVoteUpdateRequestClientEmpty: 'Invalid Client.',
        productsCreateRequestClientInvalid: 'Invalid Client.',
        clientViewRequestClientNotExist: 'Client is not Exist.',
        clientUpdateRequestClientNotExist: 'Client is not Exist.',
        clientDeleteRequestClientNotExist: 'Client is not Exist.',
        productCreateRequestClientNotExist: 'Client is not Exist.'
    },
    answer: {
        platformAnswerSubmitRequestAnswerAlreadyExpired: 'Answers Expired.'
    },
    surveyId: {
        productsCreateRequestSurveyIdInvalid: 'Invalid Survey.'
    },
    product: {
        productViewRequestProductNotExist: 'Product is not Exist.',
        productUpdateRequestProductNotExist: ''
    },
    product_image: {
        productImageRetrieveProducImageNotExists: 'Product Image is not Exist.'
    }
};


/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\r\n  min-height: 122px;\r\n}"

/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <h6 class=\"m-0 pb-1\">{{ title }}</h6>\r\n    <div mat-dialog-content>\r\n        <mat-spinner [style.margin]=\"'auto'\"></mat-spinner>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: AppLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function() { return AppLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppLoaderComponent = /** @class */ (function () {
    function AppLoaderComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AppLoaderComponent.prototype.ngOnInit = function () {
    };
    AppLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-loader',
            template: __webpack_require__(/*! ./app-loader.component.html */ "./src/app/shared/services/app-loader/app-loader.component.html"),
            styles: [__webpack_require__(/*! ./app-loader.component.css */ "./src/app/shared/services/app-loader/app-loader.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], AppLoaderComponent);
    return AppLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
  \******************************************************************/
/*! exports provided: AppLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderService", function() { return AppLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-loader.component */ "./src/app/shared/services/app-loader/app-loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppLoaderService = /** @class */ (function () {
    function AppLoaderService(dialog) {
        this.dialog = dialog;
    }
    AppLoaderService.prototype.open = function (title) {
        if (title === void 0) { title = 'Please wait'; }
        this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], { disableClose: true, backdropClass: 'light-backdrop' });
        this.dialogRef.updateSize('200px');
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    };
    AppLoaderService.prototype.close = function () {
        if (this.dialogRef)
            this.dialogRef.close();
    };
    AppLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppLoaderService);
    return AppLoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/add-header-interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/auth/add-header-interceptor.ts ***!
  \****************************************************************/
/*! exports provided: AddHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderInterceptor", function() { return AddHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var _views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../views/sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddHeaderInterceptor = /** @class */ (function () {
    function AddHeaderInterceptor(userService) {
        this.userService = userService;
        this.gloable_user = _auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].gloable_user;
        this.gloable_secret = _auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].gloable_secret;
        this.storage_name = _auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].storage_name;
        this.blackListUrls = [
            'Url which is not need to set Bearer token'
        ];
    }
    AddHeaderInterceptor.prototype.intercept = function (request, next) {
        var userObj = JSON.parse(localStorage.getItem(this.storage_name));
        var authTokenUrlValidation = this.outhTokenUrlValidate(request.url);
        if (userObj) {
            var token = userObj.token;
            var tokenExpireState = this.userService.isTokenExpired(token);
            var blaklistStatus = this.getBlackListUrl(request.url);
            console.log(request.url);
            console.log(blaklistStatus);
            if (!blaklistStatus) {
                if (tokenExpireState) {
                    if (authTokenUrlValidation) {
                        request = request.clone({
                            headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
                        });
                    }
                }
                else {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }
                    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
                }
            }
        }
        else {
            console.log('IN LOG CONTTX............................');
            if (authTokenUrlValidation) {
                request = request.clone({
                    headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
                });
            }
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    AddHeaderInterceptor.prototype.getBlackListUrl = function (url) {
        var status = false;
        if (url.match(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].userApiUrl)) {
            var subUrl = url.replace(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].userApiUrl, '');
            for (var i = 0; i < this.blackListUrls.length; i++) {
                if (this.blackListUrls[i] === subUrl) {
                    console.log(subUrl);
                    status = true;
                    break;
                }
            }
        }
        if (url.match(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].surveyApiURL)) {
            status = true;
        }
        if (url.match(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].productApiURL)) {
            status = true;
        }
        if (url.match(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].productimageUrl)) {
            status = true;
        }
        if (url.match(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].evoteimageUrl)) {
            status = true;
        }
        return status;
    };
    AddHeaderInterceptor.prototype.outhTokenUrlValidate = function (url) {
        var authTokenUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].authTokenUrl + 'oauth/token';
        if (authTokenUrl === url) {
            return true;
        }
        else {
            return false;
        }
    };
    AddHeaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_views_sessions_UserService_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AddHeaderInterceptor);
    return AddHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/auth-properties.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/auth/auth-properties.ts ***!
  \*********************************************************/
/*! exports provided: authProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authProperties", function() { return authProperties; });
var authProperties = {
    gloable_user: 'CPAP',
    gloable_secret: 'Cp43&$^fdgd*+!!@#Agdo4Ged',
    storage_name: 'currentUser',
    componentList: 'componentList'
};


/***/ }),

/***/ "./src/app/shared/services/auth/auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/auth/auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.isAuthenticated = true; // Set this value dynamically
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        this.router.navigate(["/sessions/signin"]);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/data-conversion.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/data-conversion.service.ts ***!
  \************************************************************/
/*! exports provided: AppDataConversionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataConversionService", function() { return AppDataConversionService; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppDataConversionService = /** @class */ (function () {
    function AppDataConversionService() {
    }
    //public requiredFields = ["name", "email", "username", "password"];
    AppDataConversionService.prototype.convertToCsv = function (dataArray) {
        var arr = typeof dataArray != "object" ? JSON.parse(dataArray) : dataArray;
        var str = "";
        var row = "";
        for (var index in dataArray[0]) {
            row += index + ",";
        }
        row = row.slice(0, -1);
        str += row + "\r\n";
        for (var i = 0; i < arr.length; i++) {
            var line = "";
            for (var index in arr[i]) {
                if (line != "")
                    line += ",";
                line += arr[i][index];
            }
            str += line + "\r\n";
        }
        return str;
    };
    AppDataConversionService.prototype.CSVToArray = function (strData, strDelimiter) {
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = strDelimiter || ",";
        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
        // Delimiters.
        "(\\" +
            strDelimiter +
            "|\\r?\\n|\\r|^)" +
            // Quoted fields.
            '(?:"([^"]*(?:""[^"]*)*)"|' +
            // Standard fields.
            '([^"\\' +
            strDelimiter +
            "\\r\\n]*))", "gi");
        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];
        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;
        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while ((arrMatches = objPattern.exec(strData))) {
            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[1];
            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push([]);
            }
            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[2]) {
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
            }
            else {
                // We found a non-quoted value.
                var strMatchedValue = arrMatches[3];
            }
            // Now that we have our value string, let's add
            // it to the data array.
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        // Return the parsed data.
        return arrData;
    };
    AppDataConversionService.prototype.CSV2JSON = function (csvArray) {
        var objArray = [];
        for (var i = 1; i < csvArray.length; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < csvArray[0].length && k < csvArray[i].length; k++) {
                var key = csvArray[0][k];
                objArray[i - 1][key] = csvArray[i][k];
            }
        }
        var json = JSON.stringify(objArray);
        var str = json.replace(/},/g, "},\r\n");
        return objArray;
    };
    AppDataConversionService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppDataConversionService);
    return AppDataConversionService;
}());



/***/ }),

/***/ "./src/app/shared/services/file-download.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/file-download.service.ts ***!
  \**********************************************************/
/*! exports provided: AppFileDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFileDownloadService", function() { return AppFileDownloadService; });
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

var AppFileDownloadService = /** @class */ (function () {
    function AppFileDownloadService() {
    }
    AppFileDownloadService.prototype.getTypeString = function (type) {
        switch (type) {
            case "csv":
                return "text/csv;charset=utf-8;";
            default:
                return "undefined";
        }
    };
    AppFileDownloadService.prototype.downloadFile = function (fileInfor) {
        var type = this.getTypeString(fileInfor.type);
        var blob = new Blob([fileInfor.data], { type: type });
        var downloadLnk = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf("Safari") != -1 &&
            navigator.userAgent.indexOf("Chrome") == -1;
        if (isSafariBrowser) {
            // if Safari open in new window to save file with random filename.
            downloadLnk.setAttribute("target", "_blank");
        }
        downloadLnk.setAttribute("href", url);
        downloadLnk.setAttribute("download", fileInfor.name + '.' + fileInfor.type);
        downloadLnk.style.visibility = "hidden";
        document.body.appendChild(downloadLnk);
        downloadLnk.click();
        document.body.removeChild(downloadLnk);
    };
    AppFileDownloadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppFileDownloadService);
    return AppFileDownloadService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/url.helper */ "./src/app/shared/helpers/url.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutService = /** @class */ (function () {
    function LayoutService(router) {
        this.router = router;
        this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['future-survey'];
        this.compactRoutes = ['surveys', 'clients'];
        this.setAppLayout();
    }
    LayoutService.prototype.setAppLayout = function () {
        //******** SET YOUR LAYOUT OPTIONS HERE *********
        this.layoutConf = {
            "navigationPos": "side",
            "sidebarStyle": "full",
            "dir": "ltr",
            "useBreadcrumb": false,
            "topbarFixed": false,
            "breadcrumb": "title"
        };
        //******* Only for demo purpose ***
        this.setLayoutFromQuery();
        //**********************
    };
    LayoutService.prototype.publishLayoutChange = function (lc, opt) {
        var _this = this;
        if (opt === void 0) { opt = {}; }
        var duration = opt.duration || 250;
        if (!opt.transitionClass) {
            this.layoutConf = Object.assign(this.layoutConf, lc);
            return this.layoutConfSubject.next(this.layoutConf);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc, { layoutInTransition: true });
        this.layoutConfSubject.next(this.layoutConf);
        setTimeout(function () {
            _this.layoutConf = Object.assign(_this.layoutConf, { layoutInTransition: false });
            _this.layoutConfSubject.next(_this.layoutConf);
        }, duration);
    };
    LayoutService.prototype.setLayoutFromQuery = function () {
        var layoutConfString = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__["getQueryParam"])('layout');
        try {
            this.layoutConf = JSON.parse(layoutConfString);
        }
        catch (e) { }
    };
    LayoutService.prototype.adjustLayout = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : 'full';
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach(function (route) {
                console.log(_this.currentRoute);
                if (_this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: sidebarStyle
        });
    };
    LayoutService.prototype.isSm = function () {
        return window.matchMedia("(max-width: 959px)").matches;
    };
    // --------- Costomized Code -----------------
    // adjust full width routes layout
    LayoutService.prototype.costomizedAdjustScreenOptions = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (this.isSm()) {
            this.publishLayoutChange({ sidebarStyle: 'closed' });
        }
        this.currentRoute = options.route || this.currentRoute;
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach(function (route) {
                if (_this.currentRoute.indexOf(route) !== -1) {
                    _this.publishLayoutChange({ sidebarStyle: 'closed' });
                }
            });
            this.compactRoutes.forEach(function (route) {
                if (_this.currentRoute.indexOf(route) !== -1) {
                    _this.publishLayoutChange({ sidebarStyle: 'compact' });
                }
            });
        }
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/services/localization.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/localization.service.ts ***!
  \*********************************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_localization_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/localization/localization */ "./src/app/utility/localization/localization.ts");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout */ "./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalizationService = /** @class */ (function () {
    function LocalizationService() {
        // add your language like this
        // first index what is the name of you added
        // second index is name of object that you added Localization class
        this.locArray = [["sinhala", "sinhalaStrings"], ["hindi", "hindiStrings"]];
        var loc = new _utility_localization_localization__WEBPACK_IMPORTED_MODULE_1__["Localization"]();
        this.loc = loc.Object;
    }
    LocalizationService.prototype.ngOnInit = function () { };
    LocalizationService.prototype.addlocalization = function () {
        var _this = this;
        this.locArray.forEach(function (element) {
            // console.log("--------------------------------------");
            // console.log(element[0]);
            // console.log(this.myloc[element[1]]);
            // console.log("--------------------------------------");
            survey_knockout__WEBPACK_IMPORTED_MODULE_2__["surveyLocalization"].locales[element[0]] = _this.loc[element[1]];
            survey_angular__WEBPACK_IMPORTED_MODULE_3__["surveyLocalization"].locales[element[0]] = _this.loc[element[1]];
        });
    };
    LocalizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalizationService);
    return LocalizationService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        // defaultMenu: IMenuItem[] = [
        //   {
        //     name: 'DASHBOARD',
        //     type: 'link',
        //     tooltip: 'Dashboard',
        //     icon: 'dashboard',
        //     state: 'dashboard'
        //   },
        //   {
        //     name: 'INBOX',
        //     type: 'link',
        //     tooltip: 'Inbox',
        //     icon: 'inbox',
        //     state: 'inbox'
        //   },
        //   {
        //     name: 'CHAT',
        //     type: 'link',
        //     tooltip: 'Chat',
        //     icon: 'chat',
        //     state: 'chat'
        //   },
        //   {
        //     name: 'CRUD Table',
        //     type: 'link',
        //     tooltip: 'CRUD Table',
        //     icon: 'format_list_bulleted',
        //     state: 'cruds/ngx-table'
        //   },
        //   {
        //     name: 'CALENDAR',
        //     type: 'link',
        //     tooltip: 'Calendar',
        //     icon: 'date_range',
        //     state: 'calendar'
        //   },
        //   {
        //     name: 'DIALOGS',
        //     type: 'dropDown',
        //     tooltip: 'Dialogs',
        //     icon: 'filter_none',
        //     state: 'dialogs',
        //     sub: [
        //       { name: 'CONFIRM', state: 'confirm' },
        //       { name: 'LOADER', state: 'loader' },
        //     ]
        //   },
        //   {
        //     name: 'MATERIAL',
        //     type: 'dropDown',
        //     tooltip: 'Material',
        //     icon: 'favorite',
        //     state: 'material',
        //     sub: [
        //       { name: 'BUTTONS', state: 'buttons' },
        //       { name: 'CARDS', state: 'cards' },
        //       { name: 'GRIDS', state: 'grids' },
        //       { name: 'LISTS', state: 'lists' },
        //       { name: 'MENU', state: 'menu' },
        //       { name: 'TABS', state: 'tabs' },
        //       { name: 'SELECT', state: 'select' },
        //       { name: 'RADIO', state: 'radio' },
        //       { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        //       { name: 'SLIDER', state: 'slider' },
        //       { name: 'PROGRESS', state: 'progress' },
        //       { name: 'SNACKBAR', state: 'snackbar' },
        //     ]
        //   },
        //   {
        //     name: 'FORMS',
        //     type: 'dropDown',
        //     tooltip: 'Forms',
        //     icon: 'description',
        //     state: 'forms',
        //     sub: [
        //       { name: 'BASIC', state: 'basic' },
        //       { name: 'EDITOR', state: 'editor' },
        //       { name: 'UPLOAD', state: 'upload' },
        //       { name: 'WIZARD', state: 'wizard' }
        //     ]
        //   },
        //   {
        //     name: 'TABLES',
        //     type: 'dropDown',
        //     tooltip: 'Tables',
        //     icon: 'format_line_spacing',
        //     state: 'tables',
        //     sub: [
        //       { name: 'FULLSCREEN', state: 'fullscreen' },
        //       { name: 'PAGING', state: 'paging' },
        //       { name: 'FILTER', state: 'filter' },
        //     ]
        //   },
        //   {
        //     name: 'PROFILE',
        //     type: 'dropDown',
        //     tooltip: 'Profile',
        //     icon: 'person',
        //     state: 'profile',
        //     sub: [
        //       { name: 'OVERVIEW', state: 'overview' },
        //       { name: 'SETTINGS', state: 'settings' },
        //       { name: 'BLANK', state: 'blank' },
        //     ]
        //   },
        //   {
        //     name: 'TOUR',
        //     type: 'link',
        //     tooltip: 'Tour',
        //     icon: 'flight_takeoff',
        //     state: 'tour'
        //   },
        //   {
        //     name: 'MAP',
        //     type: 'link',
        //     tooltip: 'Map',
        //     icon: 'add_location',
        //     state: 'map'
        //   },
        //   {
        //     name: 'CHARTS',
        //     type: 'link',
        //     tooltip: 'Charts',
        //     icon: 'show_chart',
        //     state: 'charts'
        //   },
        //   {
        //     name: 'DND',
        //     type: 'link',
        //     tooltip: 'Drag and Drop',
        //     icon: 'adjust',
        //     state: 'dragndrop'
        //   },
        //   {
        //     name: 'SESSIONS',
        //     type: 'dropDown',
        //     tooltip: 'Pages',
        //     icon: 'view_carousel',
        //     state: 'sessions',
        //     sub: [
        //       { name: 'SIGNUP', state: 'signup' },
        //       { name: 'SIGNIN', state: 'signin' },
        //       { name: 'FORGOT', state: 'forgot-password' },
        //       { name: 'LOCKSCREEN', state: 'lockscreen' },
        //       { name: 'NOTFOUND', state: '404' },
        //       { name: 'ERROR', state: 'error' }
        //     ]
        //   },
        //   {
        //     name: 'OTHERS',
        //     type: 'dropDown',
        //     tooltip: 'Others',
        //     icon: 'blur_on',
        //     state: 'others',
        //     sub: [
        //       { name: 'GALLERY', state: 'gallery' },
        //       { name: 'PRICINGS', state: 'pricing' },
        //       { name: 'USERS', state: 'users' },
        //       { name: 'BLANK', state: 'blank' },
        //     ]
        //   },
        //   {
        //     name: 'MATICONS',
        //     type: 'link',
        //     tooltip: 'Material Icons',
        //     icon: 'store',
        //     state: 'icons'
        //   },
        //   {
        //     name: 'DOC',
        //     type: 'extLink',
        //     tooltip: 'Documentation',
        //     icon: 'library_books',
        //     state: 'http://egret-doc.mhrafi.com/'
        //   }
        // ]
        // separatorMenu: IMenuItem[] = [
        //   {
        //     type: 'separator',
        //     name: 'Custom components'
        //   },
        //   {
        //     name: 'DASHBOARD',
        //     type: 'link',
        //     tooltip: 'Dashboard',
        //     icon: 'dashboard',
        //     state: 'dashboard'
        //   },
        //   {
        //     name: 'INBOX',
        //     type: 'link',
        //     tooltip: 'Inbox',
        //     icon: 'inbox',
        //     state: 'inbox'
        //   },
        //   {
        //     name: 'CHAT',
        //     type: 'link',
        //     tooltip: 'Chat',
        //     icon: 'chat',
        //     state: 'chat'
        //   },
        //   {
        //     name: 'CRUD Table',
        //     type: 'link',
        //     tooltip: 'CRUD Table',
        //     icon: 'format_list_bulleted',
        //     state: 'cruds/ngx-table'
        //   },
        //   {
        //     name: 'DIALOGS',
        //     type: 'dropDown',
        //     tooltip: 'Dialogs',
        //     icon: 'filter_none',
        //     state: 'dialogs',
        //     sub: [
        //       { name: 'CONFIRM', state: 'confirm' },
        //       { name: 'LOADER', state: 'loader' },
        //     ]
        //   },
        //   {
        //     name: 'PROFILE',
        //     type: 'dropDown',
        //     tooltip: 'Profile',
        //     icon: 'person',
        //     state: 'profile',
        //     sub: [
        //       { name: 'OVERVIEW', state: 'overview' },
        //       { name: 'SETTINGS', state: 'settings' },
        //       { name: 'BLANK', state: 'blank' },
        //     ]
        //   },
        //   {
        //     name: 'TOUR',
        //     type: 'link',
        //     tooltip: 'Tour',
        //     icon: 'flight_takeoff',
        //     state: 'tour'
        //   },
        //   {
        //     type: 'separator',
        //     name: 'Integrated components'
        //   },
        //   {
        //     name: 'CALENDAR',
        //     type: 'link',
        //     tooltip: 'Calendar',
        //     icon: 'date_range',
        //     state: 'calendar'
        //   },
        //   {
        //     name: 'MATERIAL',
        //     type: 'dropDown',
        //     tooltip: 'Material',
        //     icon: 'favorite',
        //     state: 'material',
        //     sub: [
        //       { name: 'BUTTONS', state: 'buttons' },
        //       { name: 'CARDS', state: 'cards' },
        //       { name: 'GRIDS', state: 'grids' },
        //       { name: 'LISTS', state: 'lists' },
        //       { name: 'MENU', state: 'menu' },
        //       { name: 'TABS', state: 'tabs' },
        //       { name: 'SELECT', state: 'select' },
        //       { name: 'RADIO', state: 'radio' },
        //       { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        //       { name: 'SLIDER', state: 'slider' },
        //       { name: 'PROGRESS', state: 'progress' },
        //       { name: 'SNACKBAR', state: 'snackbar' },
        //     ]
        //   },
        //   {
        //     name: 'FORMS',
        //     type: 'dropDown',
        //     tooltip: 'Forms',
        //     icon: 'description',
        //     state: 'forms',
        //     sub: [
        //       { name: 'BASIC', state: 'basic' },
        //       { name: 'EDITOR', state: 'editor' },
        //       { name: 'UPLOAD', state: 'upload' },
        //       { name: 'WIZARD', state: 'wizard' }
        //     ]
        //   },
        //   {
        //     name: 'TABLES',
        //     type: 'dropDown',
        //     tooltip: 'Tables',
        //     icon: 'format_line_spacing',
        //     state: 'tables',
        //     sub: [
        //       { name: 'FULLSCREEN', state: 'fullscreen' },
        //       { name: 'PAGING', state: 'paging' },
        //       { name: 'FILTER', state: 'filter' },
        //     ]
        //   },
        //   {
        //     name: 'MAP',
        //     type: 'link',
        //     tooltip: 'Map',
        //     icon: 'add_location',
        //     state: 'map'
        //   },
        //   {
        //     name: 'CHARTS',
        //     type: 'link',
        //     tooltip: 'Charts',
        //     icon: 'show_chart',
        //     state: 'charts'
        //   },
        //   {
        //     name: 'DND',
        //     type: 'link',
        //     tooltip: 'Drag and Drop',
        //     icon: 'adjust',
        //     state: 'dragndrop'
        //   },
        //   {
        //     type: 'separator',
        //     name: 'Other components'
        //   },
        //   {
        //     name: 'SESSIONS',
        //     type: 'dropDown',
        //     tooltip: 'Pages',
        //     icon: 'view_carousel',
        //     state: 'sessions',
        //     sub: [
        //       { name: 'SIGNUP', state: 'signup' },
        //       { name: 'SIGNIN', state: 'signin' },
        //       { name: 'FORGOT', state: 'forgot-password' },
        //       { name: 'LOCKSCREEN', state: 'lockscreen' },
        //       { name: 'NOTFOUND', state: '404' },
        //       { name: 'ERROR', state: 'error' }
        //     ]
        //   },
        //   {
        //     name: 'OTHERS',
        //     type: 'dropDown',
        //     tooltip: 'Others',
        //     icon: 'blur_on',
        //     state: 'others',
        //     sub: [
        //       { name: 'GALLERY', state: 'gallery' },
        //       { name: 'PRICINGS', state: 'pricing' },
        //       { name: 'USERS', state: 'users' },
        //       { name: 'BLANK', state: 'blank' },
        //     ]
        //   },
        //   {
        //     name: 'MATICONS',
        //     type: 'link',
        //     tooltip: 'Material Icons',
        //     icon: 'store',
        //     state: 'icons'
        //   },
        //   {
        //     name: 'DOC',
        //     type: 'extLink',
        //     tooltip: 'Documentation',
        //     icon: 'library_books',
        //     state: 'http://egret-doc.mhrafi.com/'
        //   }
        // ]
        this.iconMenu = [
            {
                name: "User Management",
                type: "link",
                tooltip: "Client management",
                icon: "person",
                state: "users/user-table",
                disabled: false
            },
            {
                name: "Client Management",
                type: "link",
                tooltip: "Client Management",
                icon: "person",
                state: "clients/client-table",
                disabled: false
            },
            {
                name: "Product Catalogue",
                type: "link",
                tooltip: "Product management",
                icon: "assignment",
                state: "productCrud/show",
                disabled: false
            },
            {
                name: "Instant Feedback",
                type: "link",
                tooltip: "Feedback Management",
                icon: "feedback",
                state: "surveys",
                disabled: false
            },
            {
                name: "E-Vote",
                type: "link",
                tooltip: "E-Vote",
                icon: "thumbs_up_down",
                state: "evote/showEvote",
                disabled: false
            },
            {
                name: "Future Survey",
                type: "link",
                tooltip: "Future Survey",
                icon: "language",
                state: "future-survey",
                disabled: false
            },
            // ,
            // {
            //   name: "Interaction View",
            //   type: "link",
            //   tooltip: "E-Vote",
            //   icon: "thumbs_up_down",
            //   state: "interaction/viewInteraction"
            // },
            // ,{
            //   name: 'INBOX',
            //   type: 'link',
            //   tooltip: 'Inbox',
            //   icon: 'inbox',
            //   state: 'inbox',
            //   badges: [{ color: 'primary', value: '4' }],
            // },
            // {
            //   name: 'CHAT',
            //   type: 'link',
            //   tooltip: 'Chat',
            //   icon: 'chat',
            //   state: 'chat',
            //   badges: [{ color: 'warn', value: '1' }]
            // },
            // {
            //   name: 'CALENDAR',
            //   type: 'link',
            //   tooltip: 'Calendar',
            //   icon: 'date_range',
            //   state: 'calendar'
            // },
            // {
            //   name: 'DIALOGS',
            //   type: 'dropDown',
            //   tooltip: 'Dialogs',
            //   icon: 'filter_none',
            //   state: 'dialogs',
            //   sub: [
            //     { name: 'CONFIRM', state: 'confirm' },
            //     { name: 'LOADER', state: 'loader' },
            //   ]
            // },
            // {
            //   name: 'MATERIAL',
            //   type: 'dropDown',
            //   tooltip: 'Material',
            //   icon: 'favorite',
            //   state: 'material',
            //   sub: [
            //     { name: 'BUTTONS', state: 'buttons' },
            //     { name: 'CARDS', state: 'cards' },
            //     { name: 'GRIDS', state: 'grids' },
            //     { name: 'LISTS', state: 'lists' },
            //     { name: 'MENU', state: 'menu' },
            //     { name: 'TABS', state: 'tabs' },
            //     { name: 'SELECT', state: 'select' },
            //     { name: 'RADIO', state: 'radio' },
            //     { name: 'AUTOCOMPLETE', state: 'autocomplete' },
            //     { name: 'SLIDER', state: 'slider' },
            //     { name: 'PROGRESS', state: 'progress' },
            //     { name: 'SNACKBAR', state: 'snackbar' },
            //   ]
            // },
            // {
            //   name: 'FORMS',
            //   type: 'dropDown',
            //   tooltip: 'Forms',
            //   icon: 'description',
            //   state: 'forms',
            //   sub: [
            //     { name: 'BASIC', state: 'basic' },
            //     { name: 'EDITOR', state: 'editor' },
            //     { name: 'UPLOAD', state: 'upload' },
            //     { name: 'WIZARD', state: 'wizard' }
            //   ]
            // },
            // {
            //   name: 'TABLES',
            //   type: 'dropDown',
            //   tooltip: 'Tables',
            //   icon: 'format_line_spacing',
            //   state: 'tables',
            //   sub: [
            //     { name: 'FULLSCREEN', state: 'fullscreen' },
            //     { name: 'PAGING', state: 'paging' },
            //     { name: 'FILTER', state: 'filter' },
            //   ]
            // },
            // {
            //   name: 'PROFILE',
            //   type: 'dropDown',
            //   tooltip: 'Profile',
            //   icon: 'person',
            //   state: 'profile',
            //   badges: [{ color: 'primary', value: '2' }],
            //   sub: [
            //     { name: 'OVERVIEW', state: 'overview' },
            //     { name: 'SETTINGS', state: 'settings' },
            //     { name: 'BLANK', state: 'blank' },
            //   ]
            // },
            // {
            //   name: 'TOUR',
            //   type: 'link',
            //   tooltip: 'Tour',
            //   icon: 'flight_takeoff',
            //   state: 'tour'
            // },
            // {
            //   name: 'MAP',
            //   type: 'link',
            //   tooltip: 'Map',
            //   icon: 'add_location',
            //   state: 'map'
            // },
            // {
            //   name: 'CHARTS',
            //   type: 'link',
            //   tooltip: 'Charts',
            //   icon: 'show_chart',
            //   state: 'charts'
            // },
            // {
            //   name: 'DND',
            //   type: 'link',
            //   tooltip: 'Drag and Drop',
            //   icon: 'adjust',
            //   state: 'dragndrop'
            // },
            // {
            //   name: 'SESSIONS',
            //   type: 'dropDown',
            //   tooltip: 'Pages',
            //   icon: 'view_carousel',
            //   state: 'sessions',
            //   sub: [
            //     { name: 'SIGNUP', state: 'signup' },
            //     { name: 'SIGNIN', state: 'signin' },
            //     { name: 'FORGOT', state: 'forgot-password' },
            //     { name: 'LOCKSCREEN', state: 'lockscreen' },
            //     { name: 'NOTFOUND', state: '404' },
            //     { name: 'ERROR', state: 'error' }
            //   ]
            // },
            // {
            //   name: 'OTHERS',
            //   type: 'dropDown',
            //   tooltip: 'Others',
            //   icon: 'blur_on',
            //   state: 'others',
            //   sub: [
            //     { name: 'GALLERY', state: 'gallery' },
            //     { name: 'PRICINGS', state: 'pricing' },
            //     { name: 'USERS', state: 'users' },
            //     { name: 'BLANK', state: 'blank' }
            //   ]
            // },
            // {
            //   name: 'MATICONS',
            //   type: 'link',
            //   tooltip: 'Material Icons',
            //   icon: 'store',
            //   state: 'icons'
            // },
            // {
            //   name: 'Multi Level',
            //   type: 'dropDown',
            //   tooltip: 'Multi Level',
            //   icon: 'format_align_center',
            //   state: '',
            //   sub: [
            //     {
            //       name: 'Level Two', type: 'dropDown', state: 'fake-1', sub: [
            //         { name: 'Level Three', state: 'fake-2' },
            //         { name: 'Level Three', state: 'fake-3' }
            //       ]
            //     },
            //     { name: 'Level Two', state: 'fake-4' },
            //     { name: 'Level Two', state: 'fake-5' }
            //   ]
            // },
            {
                name: "DOC",
                type: "extLink",
                tooltip: "Documentation",
                icon: "library_books",
                state: "http://egret-doc.mhrafi.com/"
            }
        ];
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = "Frequently Accessed";
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    NavigationService.prototype.publishNavigationChange = function (menuType) {
        switch (menuType) {
            case "separator-menu":
                //this.menuItems.next(this.separatorMenu);
                break;
            case "icon-menu":
                this.menuItems.next(this.iconMenu);
                break;
            default:
        }
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/shared/services/route-parts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/route-parts.service.ts ***!
  \********************************************************/
/*! exports provided: RoutePartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePartsService", function() { return RoutePartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutePartsService = /** @class */ (function () {
    function RoutePartsService(router) {
        this.router = router;
    }
    RoutePartsService.prototype.ngOnInit = function () {
    };
    RoutePartsService.prototype.generateRouteParts = function (snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    };
    RoutePartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutePartsService);
    return RoutePartsService;
}());



/***/ }),

/***/ "./src/app/shared/services/theme.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/theme.service.ts ***!
  \**************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/url.helper */ "./src/app/shared/helpers/url.helper.ts");
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



var ThemeService = /** @class */ (function () {
    function ThemeService(document) {
        this.document = document;
        this.egretThemes = [
            // {
            //   "name": "egret-dark-purple",
            //   "baseColor": "#9c27b0",
            //   "isActive": false
            // }, {
            //   "name": "egret-dark-pink",
            //   "baseColor": "#e91e63",
            //   "isActive": false
            // },
            {
                "name": "egret-blue",
                "baseColor": "#247ba0",
                "isActive": false
            }, {
                "name": "egret-indigo",
                "baseColor": "#3f51b5",
                "isActive": true
            }
        ];
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    ThemeService.prototype.applyMatTheme = function (r) {
        /*
        ****** (SET YOUR DEFAULT THEME HERE) *******
        * Assign new Theme to activatedTheme
        */
        // this.activatedTheme = this.egretThemes[0]; 
        // this.activatedTheme = this.egretThemes[1]; 
        // this.activatedTheme = this.egretThemes[2]; 
        this.activatedTheme = this.egretThemes[1];
        // *********** ONLY FOR DEMO **********
        this.setThemeFromQuery();
        // ************************************
        this.changeTheme(r, this.activatedTheme);
    };
    ThemeService.prototype.changeTheme = function (r, theme) {
        r.removeClass(this.document.body, this.activatedTheme.name);
        r.addClass(this.document.body, theme.name);
        this.flipActiveFlag(theme);
    };
    ThemeService.prototype.flipActiveFlag = function (theme) {
        var _this = this;
        this.egretThemes.forEach(function (t) {
            t.isActive = false;
            if (t.name === theme.name) {
                t.isActive = true;
                _this.activatedTheme = theme;
            }
        });
    };
    // *********** ONLY FOR DEMO **********
    ThemeService.prototype.setThemeFromQuery = function () {
        var themeStr = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])('theme');
        try {
            this.activatedTheme = JSON.parse(themeStr);
            this.flipActiveFlag(this.activatedTheme);
        }
        catch (e) { }
    };
    ThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_header_side_header_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header-side/header-side.component */ "./src/app/shared/components/header-side/header-side.component.ts");
/* harmony import */ var _components_sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar-side/sidebar-side.component */ "./src/app/shared/components/sidebar-side/sidebar-side.component.ts");
/* harmony import */ var _components_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header-top/header-top.component */ "./src/app/shared/components/header-top/header-top.component.ts");
/* harmony import */ var _components_sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar-top/sidebar-top.component */ "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
/* harmony import */ var _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/customizer/customizer.component */ "./src/app/shared/components/customizer/customizer.component.ts");
/* harmony import */ var _components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
/* harmony import */ var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/app-loader/app-loader.component */ "./src/app/shared/services/app-loader/app-loader.component.ts");
/* harmony import */ var _directives_font_size_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/font-size.directive */ "./src/app/shared/directives/font-size.directive.ts");
/* harmony import */ var _directives_scroll_to_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/egret-side-nav-toggle.directive */ "./src/app/shared/directives/egret-side-nav-toggle.directive.ts");
/* harmony import */ var _directives_PositiveNumber_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../directives/PositiveNumber.directive */ "./src/app/directives/PositiveNumber.directive.ts");
/* harmony import */ var _directives_PositiveNumberAndLetter_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../directives/PositiveNumberAndLetter.directive */ "./src/app/directives/PositiveNumberAndLetter.directive.ts");
/* harmony import */ var _directives_Letter_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../directives/Letter.directive */ "./src/app/directives/Letter.directive.ts");
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/relative-time.pipe */ "./src/app/shared/pipes/relative-time.pipe.ts");
/* harmony import */ var _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/excerpt.pipe */ "./src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _services_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/app-error/app-error.component */ "./src/app/shared/services/app-error/app-error.component.ts");
/* harmony import */ var _services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _services_file_download_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _services_data_conversion_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/data-conversion.service */ "./src/app/shared/services/data-conversion.service.ts");
/* harmony import */ var _pipes_array_filter_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/array-filter.pipe */ "./src/app/shared/pipes/array-filter.pipe.ts");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/localization.service */ "./src/app/shared/services/localization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT


// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT


// ONLY FOR DEMO (Removable without changing any layout configuration)

// ALL TIME REQUIRED







// DIRECTIVES









// PIPES


// SERVICES









/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
// import { LandingPageService } from '../shared/services/landing-page.service';




var classesToInclude = [
    _components_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTopComponent"],
    _components_sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_10__["SidebarTopComponent"],
    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"],
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"],
    _components_sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_8__["SidebarSideComponent"],
    _components_header_side_header_side_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSideComponent"],
    _components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
    _components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbComponent"],
    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_17__["AppComfirmComponent"],
    _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_18__["AppLoaderComponent"],
    _services_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_37__["AppErrorComponent"],
    _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__["CustomizerComponent"],
    _directives_font_size_directive__WEBPACK_IMPORTED_MODULE_19__["FontSizeDirective"],
    _directives_scroll_to_directive__WEBPACK_IMPORTED_MODULE_20__["ScrollToDirective"],
    _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_21__["AppDropdownDirective"],
    _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_22__["DropdownAnchorDirective"],
    _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_23__["DropdownLinkDirective"],
    _directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_24__["EgretSideNavToggleDirective"],
    _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_28__["RelativeTimePipe"],
    _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_29__["ExcerptPipe"],
    _pipes_array_filter_pipe__WEBPACK_IMPORTED_MODULE_41__["ArrayFilter"],
    _directives_PositiveNumber_directive__WEBPACK_IMPORTED_MODULE_25__["PositiveNumberOnly"],
    _directives_PositiveNumberAndLetter_directive__WEBPACK_IMPORTED_MODULE_26__["PositiveNumberAndLetterOnly"],
    _directives_Letter_directive__WEBPACK_IMPORTED_MODULE_27__["LetterOnly"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
            ],
            entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_17__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_18__["AppLoaderComponent"], _services_app_error_app_error_component__WEBPACK_IMPORTED_MODULE_37__["AppErrorComponent"]],
            providers: [
                _services_theme_service__WEBPACK_IMPORTED_MODULE_30__["ThemeService"],
                _services_layout_service__WEBPACK_IMPORTED_MODULE_31__["LayoutService"],
                _services_navigation_service__WEBPACK_IMPORTED_MODULE_32__["NavigationService"],
                _services_route_parts_service__WEBPACK_IMPORTED_MODULE_33__["RoutePartsService"],
                _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"],
                _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_35__["AppConfirmService"],
                _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_36__["AppLoaderService"],
                _services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_38__["AppErrorService"],
                _services_file_download_service__WEBPACK_IMPORTED_MODULE_39__["AppFileDownloadService"],
                _services_data_conversion_service__WEBPACK_IMPORTED_MODULE_40__["AppDataConversionService"],
                // LandingPageService
                _services_localization_service__WEBPACK_IMPORTED_MODULE_42__["LocalizationService"],
            ],
            declarations: classesToInclude,
            exports: classesToInclude
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/utility/localization/localization.ts":
/*!******************************************************!*\
  !*** ./src/app/utility/localization/localization.ts ***!
  \******************************************************/
/*! exports provided: Localization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localization", function() { return Localization; });
//Uncomment this line on creating a translation file
//import { surveyLocalization } from "../surveyStrings";
var Localization = /** @class */ (function () {
    function Localization() {
        this.Object = {
            sinhalaStrings: {
                pagePrevText: "පෙර",
                pageNextText: "ඊළඟ",
                completeText: "සම්පූර්ණයි",
                startSurveyText: "ආරම්භ කරන්න",
                otherItemText: "වෙනත් (විස්තර කරන්න)",
                noneItemText: "නැත",
                selectAllItemText: "සියල්ල තෝරන්න",
                progressText: "පිටුව {0} , {1}",
                emptySurvey: "සමීක්ෂණය තුළ දෘශ්යමාන පිටුවක් හෝ ප්රශ්නයක් නොමැත.",
                completingSurvey: "සමීක්ෂණය සම්පූර්ණ කිරීම සඳහා ස්තූතියි!",
                completingSurveyBefore: "අපගේ වාර්තා දැනටමත් ඔබ මෙම සමීක්ෂණය සම්පූර්ණ කර ඇති බව පෙන්වයි.",
                loadingSurvey: "සමීක්ෂණ ප්රවේශනය...",
                optionsCaption: "තෝරන්න...",
                value: "අගය",
                requiredError: "කරුණාකර ප්රශ්නයට පිලිතුරු දෙන්න.",
                requiredErrorInPanel: "අවම වශයෙන් එක් ප්රශ්නයක් හෝ පිළිතුරු දෙන්න.",
                requiredInAllRowsError: "කරුණාකර සියළු පේළි වල පිළිතුරු ලබා ගන්න.",
                numericError: "එහි වටිනාකම සංඛ්යාත්මක විය යුතුය.",
                textMinLength: "කරුණාකර අවම වශයෙන් {0} අක්ෂර ඇතුළත් කරන්න.",
                textMaxLength: "කරුණාකර {0} ට අඩු අකුරු ඇතුලත් කරන්න.",
                textMinMaxLength: "කරුණාකර {0} හා {1} වඩා අඩු අකුරු ගණනකට වඩා ඇතුළත් කරන්න.",
                minRowCountError: "කරුණාකර අවම වශයෙන් {0} පේළි පුරවන්න..",
                minSelectError: "කරුණාකර අවම වශයෙන් {0} තෝරාගන්න.",
                maxSelectError: "කරුණාකර {0} වඩා වෙනස් කරන්න එපා.",
                numericMinMax: "'{0}' {1} ට සමාන හෝ ඊට වඩා වැඩි විය යුතු අතර {2} ට සමාන හෝ ඊට වඩා අඩු විය යුතුය.",
                numericMin: "'{0}' සමාන හෝ වැඩි ගණනක් {1}",
                numericMax: "'{0}' {1} ට සමාන හෝ ඊට වඩා අඩු විය යුතුය.",
                invalidEmail: "කරණාකර වලංගු ඊතැපැල් ලිපිනයක් ඇතුළු කරන්න.",
                invalidExpression: "ප්රකාශය: {0} නැවත සත්ය කළ යුතුය.",
                urlRequestError: "ඉල්ලීම ආපසු පැමිණියේ '{0}'. {1}",
                urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
                exceedMaxSize: "ගොනු විශාලත්වය {0} ඉක්මවිය යුතුය.",
                otherRequiredError: "කරුණාකර වෙනත් අගය ඇතුලත් කරන්න.",
                uploadingFile: "ඔබගේ ගොනුව උඩුගත වේ. තත්පර කිහිපයක් රැඳී නැවත උත්සාහ කරන්න.",
                loadingFile: "Loading...",
                chooseFile: "ගොනුව තෝරන්න...",
                confirmDelete: "ඔබට වාර්තාව මැකීමට අවශ්යද?",
                keyDuplicationError: "මෙම අගය අද්විතීය විය යුතුය.",
                addColumn: "තීරුව එකතු කරන්න",
                addRow: "පේළි එකතු කරන්න",
                removeRow: "ඉවත් කරන්න",
                addPanel: "අලුතින් එකතු කරන්න",
                removePanel: "ඉවත් කරන්න",
                choices_Item: "අයිතමය",
                matrix_column: "තීරුව",
                matrix_row: "පේළි",
                savingData: "ප්රතිඵල සේවාදායකයේ ඉතිරි කර ඇත...",
                savingDataError: "දෝෂයක් හටගෙන ඇති අතර ප්රතිඵල සුරැකීමට නොහැකි විය.",
                savingDataSuccess: "ප්රතිඵල සාර්ථකව සුරකින ලදි!",
                saveAgainButton: "නැවත උත්සහා කරන්න",
                timerMin: "මිනිත්තු",
                timerSec: "තත්පර",
                timerSpentAll: "ඔබ මෙම පිටුවෙහි {0} සහ {1} සම්පූර්ණ වශයෙන් වැය කර ඇත.",
                timerSpentPage: "ඔබ මෙම පිටුවෙහි {0} වැය කර ඇත.",
                timerSpentSurvey: "ඔබ සම්පූර්ණ වශයෙන් {0} වැය කර ඇත.",
                timerLimitAll: "ඔබ මෙම පිටුවෙහි {0} සහ {2} සම්පූර්ණ {3} {3} වැය කර ඇත.",
                timerLimitPage: "ඔබ මෙම පිටුවෙහි {0} {1} වැය කර ඇත.",
                timerLimitSurvey: "ඔබ {0} සම්පූර්ණ {1} වැය කර ඇත.",
                cleanCaption: "පිරිසිදු කරන්න",
                clearCaption: "පැහැදිලිව",
                removeFileCaption: "මෙම ගොනුව ඉවත් කරන්න"
            },
            hindiStrings: {
                pagePrevText: "से पहले",
                pageNextText: "अगला",
                completeText: "पूरा",
                startSurveyText: "प्रारंभ",
                otherItemText: "अन्य (वर्णन)",
                noneItemText: "None",
                selectAllItemText: "Select All",
                progressText: "Page {0} of {1}",
                emptySurvey: "There is no visible page or question in the survey.",
                completingSurvey: "Thank you for completing the survey!",
                completingSurveyBefore: "Our records show that you have already completed this survey.",
                loadingSurvey: "Loading Survey...",
                optionsCaption: "Choose...",
                value: "value",
                requiredError: "Please answer the question.",
                requiredErrorInPanel: "Please answer at least one question.",
                requiredInAllRowsError: "Please answer questions in all rows.",
                numericError: "The value should be numeric.",
                textMinLength: "Please enter at least {0} characters.",
                textMaxLength: "Please enter less than {0} characters.",
                textMinMaxLength: "Please enter more than {0} and less than {1} characters.",
                minRowCountError: "Please fill in at least {0} rows.",
                minSelectError: "Please select at least {0} variants.",
                maxSelectError: "Please select no more than {0} variants.",
                numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
                numericMin: "The '{0}' should be equal or more than {1}",
                numericMax: "The '{0}' should be equal or less than {1}",
                invalidEmail: "Please enter a valid e-mail address.",
                invalidExpression: "The expression: {0} should return 'true'.",
                urlRequestError: "The request returned error '{0}'. {1}",
                urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
                exceedMaxSize: "The file size should not exceed {0}.",
                otherRequiredError: "Please enter the other value.",
                uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
                loadingFile: "Loading...",
                chooseFile: "Choose file(s)...",
                confirmDelete: "Do you want to delete the record?",
                keyDuplicationError: "This value should be unique.",
                addColumn: "Add column",
                addRow: "Add row",
                removeRow: "Remove",
                addPanel: "Add new",
                removePanel: "Remove",
                choices_Item: "item",
                matrix_column: "Column",
                matrix_row: "Row",
                savingData: "The results are saving on the server...",
                savingDataError: "An error occurred and we could not save the results.",
                savingDataSuccess: "The results were saved successfully!",
                saveAgainButton: "Try again",
                timerMin: "min",
                timerSec: "sec",
                timerSpentAll: "You have spent {0} on this page and {1} in total.",
                timerSpentPage: "You have spent {0} on this page.",
                timerSpentSurvey: "You have spent {0} in total.",
                timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total.",
                timerLimitPage: "You have spent {0} of {1} on this page.",
                timerLimitSurvey: "You have spent {0} of {1} in total.",
                cleanCaption: "Clean",
                clearCaption: "Clear",
                removeFileCaption: "Remove this file"
            }
        };
    }
    return Localization;
}());



/***/ }),

/***/ "./src/app/views/sessions/UserService.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/sessions/UserService.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_fake_db_cp_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/fake-db/cp-users */ "./src/app/shared/fake-db/cp-users.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
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
        this.baseAuthUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].authTokenUrl;
        this.storage_name = _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name;
        this.componentList = _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].componentList;
        this.userApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].userApiUrl;
        var user = new _shared_fake_db_cp_users__WEBPACK_IMPORTED_MODULE_2__["CpUsersDB"]();
        this.users = user.users;
    }
    /*
     * User Login function
     * Created by Prasad Kumara
     * 14/02/2019
     */
    UserService.prototype.login = function (signinFormData) {
        var payload = new FormData();
        payload.append("grant_type", "password");
        payload.append("username", signinFormData.username);
        payload.append("password", signinFormData.password);
        return this.http.post(this.baseAuthUrl + "oauth/token", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*
     * User Log out function
     * Created by Prasad Kumara
     * 14/02/2019
     */
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem(this.storage_name);
        localStorage.removeItem(this.componentList);
    };
    /*
     * Get Jwt token Expire date
     * Created by Prasad Kumara
     * 14/02/2019
     */
    UserService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        if (decoded.exp === undefined) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    /*
     * Get Jwt token Expire or not
     * Created by Prasad Kumara
     * 14/02/2019
     */
    UserService.prototype.isTokenExpired = function (token) {
        if (!token) {
            token = "";
        }
        if (!token) {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    };
    UserService.prototype.activateUser = function (code, password) {
        console.log("CALLED  service" + code);
        console.log(password);
        return this.http
            .post(this.userApiUrl + "platform-users/activations/" + code, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log("SUCESS");
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*
     * Get User data using user id
     * Created by Prasad Kumara
     * 14/02/2019
     */
    UserService.prototype.getUserData = function (userId) {
        return this.http.get(this.userApiUrl + "platform-users/" + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*
     * Get Jwt refrsh token Expire or not
     * Created by Prasad Kumara
     * 15/02/2019
     */
    UserService.prototype.getUserRefreshToken = function (refreshToken) {
        var payload = new FormData();
        payload.append("grant_type", "refresh_token");
        payload.append("refresh_token", refreshToken);
        return this.http.post(this.baseAuthUrl + "oauth/token", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*
     * Get Jwt refrsh token Expire or not
     * Created by Prasad Kumara
     * 15/02/2019
     * Not working properly. Still lokking for solution
     */
    UserService.prototype.setComponetDisable = function () {
        var userObj = JSON.parse(localStorage.getItem(this.storage_name));
        var arrayList = [];
        if (userObj) {
            console.log('--------------- setComponetDisable ----------------');
            console.log(userObj.userData.roles[0].name);
            var roleName = userObj.userData.roles[0].name;
            if (roleName === 'Super Administrator') {
                arrayList = [
                    'User Management'
                ];
                return arrayList;
            }
            else if (roleName === 'Admin') {
                arrayList = [
                    'Client Management',
                    'User Management'
                ];
                return arrayList;
            }
        }
    };
    UserService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
    apiURL: "productionApi",
    // SAP NEW 64GB
    // productApiURL:'https://authentican60aazs63l.ca1.hana.ondemand.com/product/api/',
    // surveyApiURL : 'https://authentican60aazs63l.ca1.hana.ondemand.com/survey/api/',
    // productimageUrl :"https://authentican60aazs63l.ca1.hana.ondemand.com/product/",
    // evoteimageUrl: "https://authentican60aazs63l.ca1.hana.ondemand.com/survey/",
    // SAP NEW 32GB -  DEV TEST
    productApiURL: "https://authenticak84f365ea.ca1.hana.ondemand.com/product/api/",
    surveyApiURL: "https://authenticak84f365ea.ca1.hana.ondemand.com/survey/api/",
    // userApiUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/user",
    productimageUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/product",
    evoteimageUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/survey",
    // LOCALE
    // authTokenUrl:"http://localhost:10000/",
    // userApiUrl: "http://localhost:10000/api/",
    // productApiURL: "http://localhost:10001/api/",
    // surveyApiURL: "http://localhost:10002/api/",
    // productimageUrl: "http://localhost:10001/",
    // evoteimageUrl: "http://localhost:10002/",
    authTokenUrl: "https://userk84f365ea.ca1.hana.ondemand.com/user/",
    userApiUrl: "https://userk84f365ea.ca1.hana.ondemand.com/user/api/",
    // SAP OLD
    // productApiURL: "https://productzg4t4ks63a.hana.ondemand.com/product/api/",
    // surveyApiURL: "https://surveyzg4t4ks63a.hana.ondemand.com/survey/api/",
    // productimageUrl: "https://productzg4t4ks63a.hana.ondemand.com/product/",
    // evoteimageUrl : 'https://surveyzg4t4ks63a.hana.ondemand.com/survey/'
    frontEndBaseUrl: 'https://judedw.github.io/JudiAuthentica-Dev/',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    productApiURL: 'http://localhost:10001/api/',
    surveyApiURL: 'http://localhost:10002/api/',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ClearPicture\CP Zone\cp_authentica_dev\Dev-JudiAuthentica-Dev\JudiAuthentica-Dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map