(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cruds-cruds-module"],{

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
var Content = /** @class */ (function () {
    function Content(id, name) {
        this.id = id;
        this.name = name;
    }
    return Content;
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

/***/ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\r\n  <!-- <span fxFlex></span> -->\r\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Client</button>\r\n\r\n</div>\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable\r\n          class=\"material ml-0 mr-0\"\r\n          [rows]=\"items\"\r\n          [columnMode]=\"'flex'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rowHeight]=\"'auto'\">\r\n          <ngx-datatable-column name=\"Client Code\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{ row?.code }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{ row?.name }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Contacts\" [flexGrow]=\"2\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{ row?.description }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n\r\n          <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\"><mat-icon>edit</mat-icon></button>\r\n              <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\"><mat-icon>delete</mat-icon></button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts ***!
  \************************************************************************/
/*! exports provided: CrudNgxTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudNgxTableComponent", function() { return CrudNgxTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-table-popup/ngx-table-popup.component */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrudNgxTableComponent = /** @class */ (function () {
    function CrudNgxTableComponent(dialog, snack, crudService, confirmService, loader, errDialog) {
        this.dialog = dialog;
        this.snack = snack;
        this.crudService = crudService;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
    }
    CrudNgxTableComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    CrudNgxTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    CrudNgxTableComponent.prototype.getItems = function () {
        var _this = this;
        this.getItemSub = this.crudService.getItems().subscribe(function (successResp) {
            _this.items = successResp.content;
        }, function (error) {
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    CrudNgxTableComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new client" : "Update client";
        var dialogRef = this.dialog.open(_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["NgxTablePopupComponent"], {
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
                _this.crudService.addItem(res, _this.items).subscribe(function (response) {
                    _this.items = response;
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
                _this.crudService.updateItem(data.id, res).subscribe(function (response) {
                    _this.items = _this.items.map(function (i) {
                        if (i.id === data.id) {
                            return Object.assign({}, i, response.content);
                        }
                        return i;
                    });
                    _this.loader.close();
                    _this.snack.open("Client Updated!", "OK", { duration: 4000 });
                    return _this.items.slice();
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
    CrudNgxTableComponent.prototype.deleteItem = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.crudService.removeItem(row.id).subscribe(function (data) {
                    console.log(row);
                    console.log(_this.items[0]);
                    var i = _this.items.indexOf(row);
                    _this.items.splice(i, 1);
                    _this.loader.close();
                    _this.snack.open("Client deleted!", "OK", { duration: 4000 });
                    return _this.items.slice();
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
    CrudNgxTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-crud-ngx-table",
            template: __webpack_require__(/*! ./crud-ngx-table.component.html */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"]])
    ], CrudNgxTableComponent);
    return CrudNgxTableComponent;
}());



/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"code\" [formControl]=\"itemForm.controls['code']\" \r\n          positiveNumberAndLetterOnly placeholder=\"Client Code\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"clientName\" [formControl]=\"itemForm.controls['name']\" \r\n          letterOnly placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Contacts\" [formControl]=\"itemForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NgxTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTablePopupComponent", function() { return NgxTablePopupComponent; });
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



var NgxTablePopupComponent = /** @class */ (function () {
    //Raveen : need to implement a custom directive for the pattern validation
    //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
    function NgxTablePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    NgxTablePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
    };
    NgxTablePopupComponent.prototype.buildItemForm = function (item) {
        this.itemForm = this.fb.group({
            name: [item.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [item.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [item.code || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    NgxTablePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    NgxTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-table-popup',
            template: __webpack_require__(/*! ./ngx-table-popup.component.html */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NgxTablePopupComponent);
    return NgxTablePopupComponent;
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
        this.clientApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].productApiURL + "clients/";
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

/***/ "./src/app/views/cruds/cruds.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/cruds/cruds.module.ts ***!
  \*********************************************/
/*! exports provided: CrudsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudsModule", function() { return CrudsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-ngx-table/crud-ngx-table.component */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts");
/* harmony import */ var _cruds_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cruds.routing */ "./src/app/views/cruds/cruds.routing.ts");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crud-ngx-table/ngx-table-popup/ngx-table-popup.component */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CrudsModule = /** @class */ (function () {
    function CrudsModule() {
    }
    CrudsModule = __decorate([
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_cruds_routing__WEBPACK_IMPORTED_MODULE_9__["CrudsRoutes"])
            ],
            declarations: [_crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_8__["CrudNgxTableComponent"], _crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["NgxTablePopupComponent"]],
            providers: [_crud_service__WEBPACK_IMPORTED_MODULE_10__["CrudService"]],
            entryComponents: [_crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["NgxTablePopupComponent"]]
        })
    ], CrudsModule);
    return CrudsModule;
}());



/***/ }),

/***/ "./src/app/views/cruds/cruds.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/views/cruds/cruds.routing.ts ***!
  \**********************************************/
/*! exports provided: CrudsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudsRoutes", function() { return CrudsRoutes; });
/* harmony import */ var _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-ngx-table/crud-ngx-table.component */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts");

var CrudsRoutes = [
    {
        path: 'ngx-table',
        component: _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_0__["CrudNgxTableComponent"],
        data: { title: 'Client Section', breadcrumb: 'Client' }
    }
];


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
    userApiUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/user",
    productimageUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/product",
    evoteimageUrl: "https://authenticak84f365ea.ca1.hana.ondemand.com/survey",
    // LOCALE
    // productApiURL: "http://localhost:10001/api/",
    // surveyApiURL: "http://localhost:10002/api/",
    // productimageUrl: "http://localhost:10001/",
    // evoteimageUrl: "http://localhost:10002/",
    // SAP OLD
    // productApiURL: "https://productzg4t4ks63a.hana.ondemand.com/product/api/",
    // surveyApiURL: "https://surveyzg4t4ks63a.hana.ondemand.com/survey/api/",
    // productimageUrl: "https://productzg4t4ks63a.hana.ondemand.com/product/",
    // evoteimageUrl : 'https://surveyzg4t4ks63a.hana.ondemand.com/survey/'
    frontEndBaseUrl: 'https://judedw.github.io/JudiAuthentica-Dev/',
};


/***/ })

}]);
//# sourceMappingURL=views-cruds-cruds-module.js.map