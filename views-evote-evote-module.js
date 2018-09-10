(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-evote-evote-module"],{

/***/ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n<form [formGroup]=\"evoteForm\" (ngSubmit)=\"submit()\">\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n    <!-- <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput placeholder=\"Choose a client\" [matAutocomplete]=\"auto\" [formControl]=\"productForm.controls['client']\" >\r\n        </mat-form-field>\r\n\r\n        <mat-autocomplete #auto=\"matAutocomplete\" >\r\n            <mat-option *ngFor=\"let user of (filteredClient | async)?.content\" [value]=\"user\">\r\n              <span>{{ user.name }}</span>\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n    </div> -->\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [formControl]=\"evoteForm.controls['topic']\" required name=\"topic\" placeholder=\"topic\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [formControl]=\"evoteForm.controls['code']\" required name=\"proCode\" placeholder=\"Product Code\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"34\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"desc\" [formControl]=\"evoteForm.controls['description']\" required name=\"description\" placeholder=\"Description\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input type=\"number\" matInput name=\"quantity\" [formControl]=\"evoteForm.controls['quantity']\" min=\"1\" postiveNumberOnly\r\n          required placeholder=\"Quantity\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"expireDate\" [min]=\"tomorrow\" [matDatepicker]=\"picker\"  [formControl]=\"evoteForm.controls['expireDate']\" required placeholder=\"Expire Date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n          <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n        </mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxFlex=\"33\" class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput name=\"batchNumber\" [formControl]=\"evoteForm.controls['batchNumber']\" required placeholder=\"Batch Number\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"evoteForm.invalid\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts ***!
  \******************************************************************************/
/*! exports provided: MY_FORMATS, EvotePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvotePopupComponent", function() { return EvotePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _evote_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../evote-service.service */ "./src/app/views/evote/evote-service.service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/dateValidator */ "./src/app/utility/dateValidator.ts");
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
    function EvotePopupComponent(data, fb, evoteService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.evoteService = evoteService;
        this.dialogRef = dialogRef;
    }
    EvotePopupComponent.prototype.ngOnInit = function () {
        this.tomorrow = _utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__["DateValidator"].dateValidate();
        this.buildEvoteForm(this.data.payload);
        // console.log(this.data.payload);
    };
    EvotePopupComponent.prototype.buildEvoteForm = function (fieldItem) {
        this.evoteForm = this.fb.group({
            topic: [fieldItem.topic || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // client: [fieldItem.client || ""],
            code: [fieldItem.code || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantity: [fieldItem.quantity || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expireDate: [fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            batchNumber: [fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EvotePopupComponent.prototype.submit = function () {
        //console.log(this.evoteForm.value)
        this.dialogRef.close(this.evoteForm.value);
    };
    EvotePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evote-popup',
            template: __webpack_require__(/*! ./evote-popup.component.html */ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.html"),
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
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EvotePopupComponent);
    return EvotePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/evote/evote-table/evote-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/evote/evote-table/evote-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"m-333\">\r\n  <!-- <span fxFlex></span> -->\r\n  <button mat-raised-button class=\"mb-05\" (click)=\"openEvotePopup({}, true)\" color=\"primary\">Add Evote</button>\r\n  <span fxFlex></span>\r\n  <button mat-raised-button class=\"mb-05\" (click)=\"openVoterPopup({})\" color=\"accent\">Add Voters</button>\r\n</div>\r\n\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\" [rows]=\"rows\" [columns]=\"\">\r\n\r\n      <ngx-datatable-column name=\"Topic\" [width]=\"250\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.topic }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Code\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.code }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.quantity }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Expire Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.expireDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Batch Number\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.batchNumber }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" (click)=\"openEvotePopup(row)\" class=\"mr-1\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteEvote(row)\"><mat-icon>delete</mat-icon></button>\r\n          <!-- <button mat-icon-button mat-sm-button   (click)=\"downloadCsv(row)\"><mat-icon>file_download</mat-icon></button> -->\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/data-conversion.service */ "./src/app/shared/services/data-conversion.service.ts");
/* harmony import */ var _evote_evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../evote/evote-table/evote-popup/evote-popup.component */ "./src/app/views/evote/evote-table/evote-popup/evote-popup.component.ts");
/* harmony import */ var _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../voter-popup/voter-popup.component */ "./src/app/views/evote/voter-popup/voter-popup.component.ts");
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
    function EvoteTableComponent(evoteService, loader, errDialog, confirmService, downloadService, conversionService, dialog) {
        this.evoteService = evoteService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.dialog = dialog;
        this.columns = [];
        this.temp = [];
    }
    EvoteTableComponent.prototype.ngOnInit = function () {
        this.getAllEvote();
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
    EvoteTableComponent.prototype.getAllEvote = function () {
        var _this = this;
        this.getEvoteSub = this.evoteService.getAllEvotes().subscribe(function (successResp) {
            _this.rows = successResp.content;
        }, function (error) {
            _this.loader.close();
            console.log(error);
            console.log(error.status);
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    EvoteTableComponent.prototype.deleteEvote = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.description + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.evoteService.removeEvotes(row, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    _this.loader.close();
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
    EvoteTableComponent.prototype.openEvotePopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new E vote" : "Update E vote";
        var dialogRef = this.dialog.open(_evote_evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__["EvotePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            console.log("RES obj :");
            console.log(res);
            res.expireDate = moment__WEBPACK_IMPORTED_MODULE_7__(res.expireDate).format("YYYY-MM-DD");
            if (isNew) {
                _this.evoteService.addEvote(res, _this.rows).subscribe(function (data) {
                    _this.rows = data;
                    _this.loader.close();
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
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            }
        });
    };
    EvoteTableComponent.prototype.openVoterPopup = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = "Populate Voters ";
        var dialogRef = this.dialog.open(_voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__["VoterPopupComponent"], {
            width: "400px",
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            console.log("FORM DATA  : ");
            console.log(res);
            _this.evoteService.populateVoters(res).subscribe(function (response) {
                console.log("response of populate voters : ");
                console.log(response);
            }, function (error) {
                _this.loader.close();
                _this.errDialog.showError({
                    title: "Error",
                    status: error.status,
                    type: "http_error"
                });
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
            _shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_8__["AppFileDownloadService"],
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__["AppDataConversionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_evote_routing__WEBPACK_IMPORTED_MODULE_3__["EvoteRouts"])
            ],
            providers: [_evote_service_service__WEBPACK_IMPORTED_MODULE_4__["EvoteService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"]],
            declarations: [_evote_table_evote_table_component__WEBPACK_IMPORTED_MODULE_6__["EvoteTableComponent"], _evote_table_evote_popup_evote_popup_component__WEBPACK_IMPORTED_MODULE_10__["EvotePopupComponent"], _voter_popup_voter_popup_component__WEBPACK_IMPORTED_MODULE_11__["VoterPopupComponent"]],
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

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\n<form [formGroup]=\"voterForm\" (ngSubmit)=\"submit()\">\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\n\n\n    <div fxFlex=\"100\" class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <mat-select [formControl]=\"voterForm.controls['client']\" required placeholder=\"Select A Client\">\n          <mat-option>none</mat-option>\n          <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxFlex=\"100\" class=\"pr-1\">\n      <input type='file' (change)=\"handleFileInput($event.target.files)\" [formControl]=\"voterForm.controls['file']\" required name=\"file\">\n    </div>\n\n    <div fxFlex=\"100\" class=\"mt-1\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"voterForm.invalid\">Save</button>\n      <span fxFlex></span>\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRefVote.close(false)\">Cancel</button>\n    </div>\n\n  </div>\n</form>\n"

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