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
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/DateValidator.directive */ "./src/app/directives/DateValidator.directive.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_crud_routing__WEBPACK_IMPORTED_MODULE_4__["ProductCrudRouts"])
            ],
            declarations: [
                _product_filter_table_product_filter_table_component__WEBPACK_IMPORTED_MODULE_2__["ProductFilterTableComponent"],
                _product_filter_table_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_8__["ProductCrudPopupComponent"],
                _directives_DateValidator_directive__WEBPACK_IMPORTED_MODULE_12__["DateValidator"]
            ],
            providers: [_product_crud_service__WEBPACK_IMPORTED_MODULE_7__["ProductCrudService"], _cruds_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"], _survey_survey_service__WEBPACK_IMPORTED_MODULE_14__["SurveyService"]],
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

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n<form [formGroup]=\"productForm\" (ngSubmit)=\"submit()\">\r\n\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"productForm.controls['client']\" required placeholder=\"Select A Client\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"productForm.controls['code']\" required name=\"proCode\"\r\n            positiveNumberAndLetterOnly placeholder=\"Product Code\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"productForm.controls['name']\" required name=\"name\" letterOnly placeholder=\"Product Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"desc\" [formControl]=\"productForm.controls['description']\" required name=\"description\"\r\n            placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"batchNumber\" [formControl]=\"productForm.controls['batchNumber']\"\r\n            positiveNumberAndLetterOnly required placeholder=\"Batch Number\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input type=\"number\" matInput name=\"quantity\" [formControl]=\"productForm.controls['quantity']\"\r\n            positiveNumberOnly required placeholder=\"Quantity\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"33\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"expireDate\" [min]=\"tomorrow\" [matDatepicker]=\"picker\" [formControl]=\"productForm.controls['expireDate']\"\r\n            required placeholder=\"Expire Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"34\" class=\"pr-1\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"productForm.controls['surveyId']\" placeholder=\"Select A Survey\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let survey of surveyRows\" [value]=\"survey.id\">{{survey.topic}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- --------- Old Code ----------------- -->\r\n\r\n      <!-- <div *ngIf='data.isNew' fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-card-content>\r\n          <input (change)=\"onSelectFile($event)\" id=\"imageAvatar\" type=\"file\" [formControl]=\"productForm.controls['file']\"\r\n            multiple />\r\n        </mat-card-content>\r\n      </div>\r\n\r\n\r\n      <div *ngIf='data.isNew' fxFlex=\"100\" class=\"pr-1\">\r\n        <p>Image Preview</p>\r\n        <img width=\"200px\" height=\"250px\" src=\"\" src=\"{{ imageUrl}}\" id=\"dishPhoto\">\r\n        <img *ngFor='let url of urls' [src]=\"url\" height=\"200\"> <br />\r\n      </div> -->\r\n\r\n\r\n\r\n\r\n      <!-- --------- New Code ----------------- -->\r\n\r\n      <!-- --------- hidden file input --------- -->\r\n      <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" [formControl]=\"productForm.controls['file']\"\r\n        multiple style=\"display: none\" />\r\n\r\n\r\n      <!-- --------- file input click button --------- -->\r\n      <div *ngIf=\"data.isNew\" layout-margin layout-padding>\r\n        <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\"\r\n        [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n        (false) :\r\n        (this.selectedFileList.length === this.maxUploadableFileCount)\"\r\n          type=\"button\">\r\n          Browse Images\r\n          <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.selectedFileList.length > 0)\"> ({{this.selectedFileList.length}} / 4)</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"cp_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div *ngFor='let url of urls; let i = index' fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n          <mat-card class=\"p-0\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"productForm.invalid\">Save</button>\r\n    <span fxFlex></span>\r\n    <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductCrudPopupComponent, ProductCreationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudPopupComponent", function() { return ProductCrudPopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreationRequest", function() { return ProductCreationRequest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cruds/crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_dateValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _survey_survey_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../survey/survey.service */ "./src/app/views/survey/survey.service.ts");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
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
var ProductCrudPopupComponent = /** @class */ (function () {
    function ProductCrudPopupComponent(data, dialogRef, clientService, surveyService, fb, snackBar) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.clientService = clientService;
        this.surveyService = surveyService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.imageUrl = "assets/images/placeholder.jpg";
        // image uploader related properties
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: "upload_url" });
        this.hasBaseDropZoneOver = false;
        //------- new --------
        this.urls = [];
        this.selectedFileList = [];
        this.maxUploadableFileCount = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
    }
    ProductCrudPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // validate back dates
        this.tomorrow = _utility_dateValidator__WEBPACK_IMPORTED_MODULE_6__["DateValidator"].dateValidate();
        if (!this.data.isNew) {
            console.log("IPDATE CONTEXT");
            console.log(this.data.payload.imageObjects);
            var images = this.data.payload.imageObjects;
            images.forEach(function (image) {
                var img = environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].imageUrl + "downloadFile/" + image.id;
                _this.clientService.getImageById(img).subscribe(function (data) {
                    console.log("BLOB....................");
                    console.log(data);
                    var file = new File([data], "testfile");
                    console.log("FILE ..............");
                    console.log(file);
                    _this.selectedFileList.push(file);
                });
                _this.urls.push(img);
            });
            console.log("UPDATE URLS ...............................");
            console.log(this.urls);
            console.log("FILE ARRAY....................................");
            console.log(this.selectedFileList);
        }
        this.getAllSurvey();
        this.getClientSuggestions();
        this.buildProductForm(this.data.payload);
        this.filteredClient = this.productForm.get("client").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) { return _this.clientService.search({ name: value }, 1); }));
    };
    ProductCrudPopupComponent.prototype.getClientSuggestions = function () {
        var _this = this;
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.getAllClients = function () {
        var _this = this;
        this.getClientSub = this.clientService.getItems().subscribe(function (data) {
            _this.response = data;
            _this.clients = _this.response.content;
        });
    };
    ProductCrudPopupComponent.prototype.buildProductForm = function (fieldItem) {
        var client = fieldItem.client;
        var clientId = client ? client.id : null;
        this.productForm = this.fb.group({
            client: [clientId || "", { disabled: !this.data.isNew }],
            code: [fieldItem.code || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [fieldItem.name || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [fieldItem.description || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            batchNumber: [fieldItem.batchNumber || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quantity: [fieldItem.quantity || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expireDate: [fieldItem.expireDate || "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surveyId: [fieldItem.surveyId || null],
            file: [fieldItem.file || ""]
        });
    };
    ProductCrudPopupComponent.prototype.submit = function () {
        console.log("PRODUCT FORM VALUES ");
        console.log(this.productForm.value);
        var productRequest = new ProductCreationRequest(this.productForm.value);
        console.log("ProductCreationRequest" + JSON.stringify(productRequest));
        var formData;
        formData = this.prepareToSave(productRequest);
        console.log("-----------  prepared form data ");
        console.log(formData);
        console.log(JSON.stringify(formData));
        this.dialogRef.close(formData);
    };
    // image uploader related functions from here
    ProductCrudPopupComponent.prototype.fileOverBase = function (e) {
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
    ProductCrudPopupComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            if (this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
                ? true
                : this.selectedFileList.length + filesAmount <=
                    this.maxUploadableFileCount) {
                for (var i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.urls.push(event.target.result);
                    };
                    reader.readAsDataURL(event.target.files[i]);
                    this.selectedFileList.push(event.target.files[i]);
                }
            }
            else {
                // alert for file uploa limit
                this.snackBar.open("Can't upload more than " + this.maxUploadableFileCount + " photos", "close", { duration: 2000 });
            }
            this.viewIPArray();
        }
    };
    // --------- For Testing -----------------
    ProductCrudPopupComponent.prototype.viewIPArray = function () {
        console.log("--------------- start ------------------");
        console.log(this.selectedFileList.length);
        console.log("---------------------------------");
        // console.log(this.urls);
        console.log("---------------------------------");
        console.log(this.selectedFileList);
        console.log("--------------- end ------------------");
    };
    ProductCrudPopupComponent.prototype.removeSelectedImg = function (index) {
        console.log("remove -- " + index);
        this.urls.splice(index, 1);
        this.selectedFileList.splice(index, 1);
        this.viewIPArray();
    };
    ProductCrudPopupComponent.prototype.prepareToSave = function (formvalue) {
        var input = new FormData();
        if (formvalue.surveyId) {
            input.append("surveyId", formvalue.surveyId);
        }
        input.append("file", this.imageFile);
        input.append("code", formvalue.code);
        input.append("quantity", formvalue.quantity);
        input.append("client", formvalue.client.id);
        input.append("expireDate", moment__WEBPACK_IMPORTED_MODULE_8__(formvalue.expireDate).format("YYYY-MM-DD"));
        input.append("name", formvalue.name);
        input.append("description", formvalue.description);
        input.append("batchNumber", formvalue.batchNumber);
        for (var i = 0; i < this.selectedFileList.length; i++) {
            var selectedFile = this.selectedFileList[i];
            var type = selectedFile.type.split("/");
            var imageName = "image_" + i + "." + type[1];
            input.append("file", selectedFile, imageName);
        }
        console.log("------------------ tst 01 ");
        console.log(input.get("file_1"));
        return input;
    };
    ProductCrudPopupComponent.prototype.getAllSurvey = function () {
        var _this = this;
        this.getAllSurveySub = this.surveyService
            .getAllSurveys()
            .subscribe(function (successResp) {
            _this.surveyRows = successResp.content;
        });
    };
    ProductCrudPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-crud-popup",
            template: __webpack_require__(/*! ./product-crud-popup.component.html */ "./src/app/views/product-crud/product-filter-table/product-crud-popup/product-crud-popup.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _cruds_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
            _survey_survey_service__WEBPACK_IMPORTED_MODULE_9__["SurveyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ProductCrudPopupComponent);
    return ProductCrudPopupComponent;
}());

var ProductCreationRequest = /** @class */ (function () {
    function ProductCreationRequest(formValue) {
        this.formValue = formValue;
        console.log("SURVEY ID :  " + formValue.surveyId);
        this.client = new ClientSub(formValue.client);
        this.code = formValue.code;
        this.name = formValue.name;
        this.description = formValue.description;
        this.batchNumber = formValue.batchNumber;
        this.quantity = formValue.quantity;
        this.expireDate = formValue.expireDate;
        this.surveyId = formValue.surveyId;
        this.file = formValue.file;
    }
    return ProductCreationRequest;
}());

var ClientSub = /** @class */ (function () {
    function ClientSub(id) {
        this.id = id;
    }
    return ClientSub;
}());


/***/ }),

/***/ "./src/app/views/product-crud/product-filter-table/product-filter-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/product-crud/product-filter-table/product-filter-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n\r\n<div class=\"m-333\">\r\n  <!-- <span fxFlex></span> -->\r\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"openProductPopup({}, true)\">Add Product</button>\r\n</div>\r\n\r\n\r\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\" [rows]=\"rows\" [columns]=\"\">\r\n\r\n      <!-- <ngx-datatable-column name=\"Client\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.client.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column> -->\r\n\r\n      <ngx-datatable-column name=\"Product Code\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.code }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Product Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Batch Number\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.batchNumber }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.quantity }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Expire Date\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.expireDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openProductPopup(row)\"><mat-icon>edit</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" class=\"mr-1\" (click)=\"deleteProduct(row)\"><mat-icon>delete</mat-icon></button>\r\n          <button mat-icon-button mat-sm-button   (click)=\"downloadCsv(row)\"><mat-icon>file_download</mat-icon></button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n\r\n"

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
    function ProductFilterTableComponent(prodService, dialog, loader, errDialog, confirmService, downloadService, conversionService) {
        this.prodService = prodService;
        this.dialog = dialog;
        this.loader = loader;
        this.errDialog = errDialog;
        this.confirmService = confirmService;
        this.downloadService = downloadService;
        this.conversionService = conversionService;
        this.columns = [];
        this.temp = [];
    }
    ProductFilterTableComponent.prototype.ngOnInit = function () {
        this.getAllProduct();
    };
    ProductFilterTableComponent.prototype.ngOnDestroy = function () {
        if (this.getProductsSub) {
            this.getProductsSub.unsubscribe();
        }
    };
    ProductFilterTableComponent.prototype.downloadCsv = function (selectedRow) {
        var _this = this;
        console.log("SELECTED RAW : " + selectedRow.id);
        this.prodService
            .getProductDetails(selectedRow.id)
            .subscribe(function (successResp) {
            var auths = successResp.content;
            var fileName = selectedRow.name +
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
    ProductFilterTableComponent.prototype.updateFilter = function (event) {
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
    ProductFilterTableComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.getProductsSub = this.prodService.getAllProducts().subscribe(function (successResp) {
            _this.rows = _this.temp = successResp.content;
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
    ProductFilterTableComponent.prototype.deleteProduct = function (row) {
        var _this = this;
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.prodService.removeProduct(row, _this.rows).subscribe(function (data) {
                    _this.getAllProduct();
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
    ProductFilterTableComponent.prototype.openProductPopup = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new Product" : "Update Product";
        var dialogRef = this.dialog.open(_product_crud_popup_product_crud_popup_component__WEBPACK_IMPORTED_MODULE_3__["ProductCrudPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, isNew: isNew }
        });
        console.log("RES data :");
        console.log(data);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // if user press cancel.
                return;
            }
            _this.loader.open();
            console.log("RES obj :");
            console.log(res);
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
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
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
                                console.log("recent obj " + JSON.stringify(data.content));
                                return Object.assign({}, i, data.content);
                            }
                            return i;
                        });
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
            _shared_services_data_conversion_service__WEBPACK_IMPORTED_MODULE_9__["AppDataConversionService"]])
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