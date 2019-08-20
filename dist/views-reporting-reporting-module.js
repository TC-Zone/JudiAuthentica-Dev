(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reporting-reporting-module"],{

/***/ "./src/app/shared/fake-db/chart.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/fake-db/chart.ts ***!
  \*****************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
var Chart = /** @class */ (function () {
    function Chart() {
        this.products = [
            {
                "id": "001",
                "code": "PRO01",
                "name": "ADIDAS Questar ride shoes",
                "total_auth": 1000,
                "factories": 20,
                "merchandizers": 30,
                "customer": 200,
                "country": [
                    { "name": "Canada", "code": "CA", "sale": "" },
                    { "name": "United States", "code": "US", "sale": "" },
                ]
            },
            {
                "id": "002",
                "code": "PRO02",
                "name": "ADIDAS Galaxy 4 shoes",
                "total_auth": 1500,
                "factories": 25,
                "merchandizers": 60,
                "customer": 270,
                "country": [
                    { "name": "Italy", "code": "IT", "sale": 300 },
                    { "name": "France", "code": "FR", "sale": 600 },
                ]
            }
        ];
        this.country = [
            {
                "name": "Canada",
                "code": "CA",
                "total_auth": 1430,
                "factories": 50,
                "merchandizers": 80,
                "customer": 230,
                "region": [
                    { "name": "Nova Scotia", "sale": 540 },
                    { "name": "Canadian Prairies", "sale": 460 }
                ]
            },
            {
                "name": "United States",
                "code": "US",
                "total_auth": 3000,
                "factories": 95,
                "merchandizers": 64,
                "customer": 820,
                "region": [
                    { "name": "Alaska", "sale": 500 },
                    { "name": "Georgia", "sale": 300 }
                ]
            },
            {
                "name": "Italy",
                "code": "IT",
                "total_auth": 5050,
                "factories": 75,
                "merchandizers": 62,
                "customer": 400,
                "region": [
                    { "name": "Rome", "sale": "" },
                    { "name": "Verona", "sale": "" }
                ]
            },
            {
                "name": "France",
                "code": "FR",
                "total_auth": 3790,
                "factories": 100,
                "merchandizers": 84,
                "customer": 890,
                "region": [
                    { "name": "Burgundy", "sale": 600 },
                    { "name": "Paris", "sale": 300 }
                ]
            },
        ];
    }
    return Chart;
}());



/***/ }),

/***/ "./src/app/views/reporting/auth-count-country/auth-count-country.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/reporting/auth-count-country/auth-count-country.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First row -->\r\n<!-- <div class=\"pt-2\">\r\n  <mat-card class=\"p-0\" [@animate]=\"{ value: '*', params: { scale: '.9', delay: '300ms' } }\">\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-green\" color=\"warn\">show_chart</mat-icon>\r\n          <h4 class=\"m-0\">{{statObj === null ? 0 : (statObj.total_auth === null ? \"0\" : statObj.total_auth)}}</h4>\r\n          <small class=\"m-0 \">Total Authentication</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-blue\">location_city</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.factories === null ? \"0\" : statObj.factories)}}</h4>\r\n          <small class=\"m-0 \">Factories</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-green\" color=\"primary\">shop</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.merchandizers === null ? \"0\" : statObj.merchandizers)}}</h4>\r\n          <small class=\"m-0 \">Merchandizers</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-blue\" color=\"accent\">person</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.customer === null ? \"0\" : statObj.customer)}}</h4>\r\n          <small class=\"m-0 \">Customers</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div> -->\r\n<!--/ End first row -->\r\n<div fxLayout=\"row wrap\" class=\"pt-2\">\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\">\r\n    <mat-card>\r\n      <form class=\"example-form\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"itemForm.controls['product']\" placeholder=\"Search Product\" [matAutocomplete]=\"autoProduct\">\r\n          <mat-autocomplete autoActiveFirstOption #autoProduct=\"matAutocomplete\" (optionSelected)=\"selectedProduct($event)\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product\">\r\n              {{product.name}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field *ngIf=\"itemForm.controls['product'].value\" class=\"full-width\">\r\n          <input matInput [formControl]=\"itemForm.controls['countries']\" placeholder=\"Search Country\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"selectedCountry($event)\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let country of filteredCountry | async\" [value]=\"country\">\r\n              {{country.name}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field> -->\r\n      </form>\r\n\r\n\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"75\" fxFlex.sm=\"75\">\r\n    <mat-card>\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Vertical Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas class=\"chart\" baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [options]=\"doughnutOptions\"\r\n          [colors]=\"pieChartColors\" [chartType]=\"pieChartType\" (chartHover)=\"pieChartHovered($event)\" (chartClick)=\"pieChartClicked($event)\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/auth-count-country/auth-count-country.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/reporting/auth-count-country/auth-count-country.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9hdXRoLWNvdW50LWNvdW50cnkvYXV0aC1jb3VudC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/reporting/auth-count-country/auth-count-country.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/reporting/auth-count-country/auth-count-country.component.ts ***!
  \************************************************************************************/
/*! exports provided: AuthCountCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCountCountryComponent", function() { return AuthCountCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_fake_db_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/fake-db/chart */ "./src/app/shared/fake-db/chart.ts");
/* harmony import */ var _reporting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reporting.service */ "./src/app/views/reporting/reporting.service.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthCountCountryComponent = /** @class */ (function () {
    function AuthCountCountryComponent(fb, reportingService) {
        this.fb = fb;
        this.reportingService = reportingService;
        this.proObj = null;
        this.countryObj = null;
        this.statObj = null;
        this.pieChartType = 'pie';
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [];
        this.backgroundColor = [];
        // -------------------------------------------------------------------------------------------------//
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.chart = new _shared_fake_db_chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]();
    }
    AuthCountCountryComponent.prototype.ngOnInit = function () {
        //----service subscription---//
        //  this.reportingService.getAllProducts().subscribe(data => {
        //       this.products = data.content;
        //  });
        var _this = this;
        this.products = this.chart.products;
        this.getCountries = this.chart.country;
        this.buildItemForm();
        this.filteredProducts = this.itemForm.get("product").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filterProduct(value); }));
    };
    // -------------------------------------------------------------------------------------------------
    AuthCountCountryComponent.prototype.buildItemForm = function () {
        this.itemForm = this.fb.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            countries: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AuthCountCountryComponent.prototype._filterProduct = function (value) {
        var filterValue = value;
        return this.products.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AuthCountCountryComponent.prototype._filterCounty = function (value) {
        var filterValue = value;
        return this.countries.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AuthCountCountryComponent.prototype.selectedProduct = function (event) {
        var _this = this;
        this.proObj = event.option.value;
        this.statObj = this.proObj;
        this.itemForm.get('countries').setValue('');
        this.countries = this.proObj.country;
        this.chartupdate.data.length = 0;
        this.chartupdate.labels.length = 0;
        this.proObj.country.forEach(function (element) {
            _this.pieChartLabels.push(element.name);
            _this.pieChartData.push(element.sale);
            _this.backgroundColor.push(_this.getRandomColor());
        });
        this.pieChartColors = [{ backgroundColor: this.backgroundColor }];
        this.chartupdate.chart.update();
        console.log(this.proObj);
        console.log(this.countries);
        this.filteredCountry = this.itemForm.get("countries").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filterCounty(value); }));
    };
    AuthCountCountryComponent.prototype.selectedCountry = function (event) {
        var _this = this;
        this.countryObj = event.option.value;
        this.getCountries.forEach(function (country) {
            if (country.code === _this.countryObj.code) {
                _this.statObj = country;
                _this.chartupdate.data.length = 0;
                _this.chartupdate.labels.length = 0;
                country.region.forEach(function (region) {
                    console.log(region);
                    _this.pieChartLabels.push(region.name);
                    _this.pieChartData.push(region.sale);
                    _this.backgroundColor.push(_this.getRandomColor());
                });
                _this.pieChartColors = [{ backgroundColor: _this.backgroundColor }];
                _this.chartupdate.chart.update();
            }
        });
    };
    AuthCountCountryComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    AuthCountCountryComponent.prototype.displayFn = function (value) {
        console.log("displayfn" + value);
        return value ? value.name : value;
    };
    /*
   * Pie Chart Options
   */
    // public pieChartLabels: string[] = ['Afghanistan', 'Åland Islands'];
    // public pieChartData: number[] = [400, 500];
    // public pieChartLabels: string[] = this.country;
    // public pieChartData: number[] = this.sale;
    // public pieChartType: string = 'pie';
    // public pieChartColors: Array<any> = [{
    //   backgroundColor: ['rgba(255, 217, 125, 0.8)', 'rgba(36, 123, 160, 0.8)', 'rgba(244, 67, 54, 0.8)']
    // }];
    /*
    * Pie Chart Event Handler
    */
    AuthCountCountryComponent.prototype.pieChartClicked = function (e) {
    };
    AuthCountCountryComponent.prototype.pieChartHovered = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]),
        __metadata("design:type", ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"])
    ], AuthCountCountryComponent.prototype, "chartupdate", void 0);
    AuthCountCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-count-country',
            template: __webpack_require__(/*! ./auth-count-country.component.html */ "./src/app/views/reporting/auth-count-country/auth-count-country.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./auth-count-country.component.scss */ "./src/app/views/reporting/auth-count-country/auth-count-country.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _reporting_service__WEBPACK_IMPORTED_MODULE_5__["ReportingService"]])
    ], AuthCountCountryComponent);
    return AuthCountCountryComponent;
}());



/***/ }),

/***/ "./src/app/views/reporting/feedback-rate/feedback-rate.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/reporting/feedback-rate/feedback-rate.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"pt-2\">\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\">\r\n    <mat-card>\r\n      <form>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select A Product\">\r\n            <mat-option [value]=\"\">NIKE Shoes</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select Style\">\r\n            <mat-option [value]=\"\">Nike Air Max</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select Country\">\r\n            <mat-option [value]=\"\">Canada</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </form>\r\n\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"75\" fxFlex.sm=\"75\">\r\n    <mat-card>\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Horizontal Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartHorizontalOptions\"\r\n          [colors]=\"chartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartHorizontalType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/feedback-rate/feedback-rate.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/reporting/feedback-rate/feedback-rate.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9mZWVkYmFjay1yYXRlL2ZlZWRiYWNrLXJhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/reporting/feedback-rate/feedback-rate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/reporting/feedback-rate/feedback-rate.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedbackRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRateComponent", function() { return FeedbackRateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackRateComponent = /** @class */ (function () {
    function FeedbackRateComponent() {
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        // Horizontal Bar Chart
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [5, 6, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.sharedChartOptions);
    }
    FeedbackRateComponent.prototype.ngOnInit = function () {
    };
    /*
   * Bar Chart Event Handler
   */
    FeedbackRateComponent.prototype.barChartClicked = function (e) {
    };
    FeedbackRateComponent.prototype.barChartHovered = function (e) {
    };
    FeedbackRateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-rate',
            template: __webpack_require__(/*! ./feedback-rate.component.html */ "./src/app/views/reporting/feedback-rate/feedback-rate.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./feedback-rate.component.scss */ "./src/app/views/reporting/feedback-rate/feedback-rate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackRateComponent);
    return FeedbackRateComponent;
}());



/***/ }),

/***/ "./src/app/views/reporting/reporting.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/reporting/reporting.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2\">\r\n  <mat-card class=\"\" [@animate]=\"{ value: '*', params: { scale: '.9', delay: '300ms' } }\">\r\n    <h6 class=\"pl-1 pt-1 m-0 \">Chart Details</h6>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"pt-2\">\r\n      <div fxFlex=\"100\">\r\n        <mat-divider></mat-divider>\r\n        <nav mat-tab-nav-bar>\r\n          <a mat-tab-link routerLink=\"/reporting/sales-region\" [queryParams]=\"queryParams\" routerLinkActive #rla1=\"routerLinkActive\"\r\n            [active]=\"rla1.isActive\">\r\n            <mat-icon class=\"icon-mr\" color=\"primary\">add_location</mat-icon>Sales by Region\r\n          </a>\r\n          <a mat-tab-link routerLink=\"/reporting/auth-count-country\" [queryParams]=\"queryParams\" routerLinkActive #rla2=\"routerLinkActive\"\r\n            [active]=\"rla2.isActive\">\r\n            <mat-icon class=\"icon-mr\" color=\"primary\">add_location</mat-icon>Authenticate Count by Country\r\n          </a>\r\n          <!-- <a mat-tab-link routerLink=\"/reporting/sales-time\" [queryParams]=\"queryParams\" routerLinkActive #rla3=\"routerLinkActive\"\r\n            [active]=\"rla3.isActive\">\r\n            <mat-icon class=\"icon-mr\" color=\"primary\">timer</mat-icon>Sales by Time\r\n          </a>\r\n          <a mat-tab-link routerLink=\"/reporting/sales-retailers\" [queryParams]=\"queryParams\" routerLinkActive #rla4=\"routerLinkActive\"\r\n            [active]=\"rla4.isActive\">\r\n            <mat-icon class=\"icon-mr\" color=\"primary\">people</mat-icon>Sales by Retailers\r\n          </a>\r\n          <a mat-tab-link routerLink=\"/reporting/feedback-rate\" [queryParams]=\"queryParams\" routerLinkActive #rla5=\"routerLinkActive\"\r\n            [active]=\"rla5.isActive\">\r\n            <mat-icon class=\"icon-mr\" color=\"primary\">person</mat-icon>Customer Feedback Rate\r\n          </a> -->\r\n        </nav>\r\n      </div>\r\n      <div fxFlex=\"100\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/reporting.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/reporting/reporting.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9yZXBvcnRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/reporting/reporting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/reporting/reporting.component.ts ***!
  \********************************************************/
/*! exports provided: ReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingComponent", function() { return ReportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingComponent = /** @class */ (function () {
    function ReportingComponent() {
    }
    ReportingComponent.prototype.ngOnInit = function () {
    };
    ReportingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting',
            template: __webpack_require__(/*! ./reporting.component.html */ "./src/app/views/reporting/reporting.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./reporting.component.scss */ "./src/app/views/reporting/reporting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "./src/app/views/reporting/reporting.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/reporting/reporting.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingModule", function() { return ReportingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting.component */ "./src/app/views/reporting/reporting.component.ts");
/* harmony import */ var _reporting_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reporting.routing */ "./src/app/views/reporting/reporting.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sales_region_sales_region_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-region/sales-region.component */ "./src/app/views/reporting/sales-region/sales-region.component.ts");
/* harmony import */ var _sales_time_sales_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-time/sales-time.component */ "./src/app/views/reporting/sales-time/sales-time.component.ts");
/* harmony import */ var _sales_retailers_sales_retailers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-retailers/sales-retailers.component */ "./src/app/views/reporting/sales-retailers/sales-retailers.component.ts");
/* harmony import */ var _feedback_rate_feedback_rate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback-rate/feedback-rate.component */ "./src/app/views/reporting/feedback-rate/feedback-rate.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reporting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reporting.service */ "./src/app/views/reporting/reporting.service.ts");
/* harmony import */ var _auth_count_country_auth_count_country_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-count-country/auth-count-country.component */ "./src/app/views/reporting/auth-count-country/auth-count-country.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ReportingModule = /** @class */ (function () {
    function ReportingModule() {
    }
    ReportingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reporting_component__WEBPACK_IMPORTED_MODULE_3__["ReportingComponent"],
                _sales_region_sales_region_component__WEBPACK_IMPORTED_MODULE_7__["SalesRegionComponent"],
                _sales_time_sales_time_component__WEBPACK_IMPORTED_MODULE_8__["SalesTimeComponent"],
                _sales_retailers_sales_retailers_component__WEBPACK_IMPORTED_MODULE_9__["SalesRetailersComponent"],
                _feedback_rate_feedback_rate_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackRateComponent"],
                _auth_count_country_auth_count_country_component__WEBPACK_IMPORTED_MODULE_14__["AuthCountCountryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_reporting_routing__WEBPACK_IMPORTED_MODULE_4__["ReportingRoute"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ],
            providers: [
                _reporting_service__WEBPACK_IMPORTED_MODULE_13__["ReportingService"]
            ]
        })
    ], ReportingModule);
    return ReportingModule;
}());



/***/ }),

/***/ "./src/app/views/reporting/reporting.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/reporting/reporting.routing.ts ***!
  \******************************************************/
/*! exports provided: ReportingRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingRoute", function() { return ReportingRoute; });
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporting.component */ "./src/app/views/reporting/reporting.component.ts");
/* harmony import */ var _sales_region_sales_region_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-region/sales-region.component */ "./src/app/views/reporting/sales-region/sales-region.component.ts");
/* harmony import */ var _sales_time_sales_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-time/sales-time.component */ "./src/app/views/reporting/sales-time/sales-time.component.ts");
/* harmony import */ var _sales_retailers_sales_retailers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-retailers/sales-retailers.component */ "./src/app/views/reporting/sales-retailers/sales-retailers.component.ts");
/* harmony import */ var _feedback_rate_feedback_rate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback-rate/feedback-rate.component */ "./src/app/views/reporting/feedback-rate/feedback-rate.component.ts");
/* harmony import */ var _auth_count_country_auth_count_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-count-country/auth-count-country.component */ "./src/app/views/reporting/auth-count-country/auth-count-country.component.ts");






var ReportingRoute = [
    {
        path: "",
        component: _reporting_component__WEBPACK_IMPORTED_MODULE_0__["ReportingComponent"],
        children: [
            {
                path: 'sales-region',
                component: _sales_region_sales_region_component__WEBPACK_IMPORTED_MODULE_1__["SalesRegionComponent"],
                data: { title: 'Sales by Region', breadcrumb: 'Sales by Region' }
            },
            {
                path: 'auth-count-country',
                component: _auth_count_country_auth_count_country_component__WEBPACK_IMPORTED_MODULE_5__["AuthCountCountryComponent"],
                data: { title: 'Authenticate Count by Country', breadcrumb: 'Authenticate Count by Country' }
            },
            {
                path: 'sales-time',
                component: _sales_time_sales_time_component__WEBPACK_IMPORTED_MODULE_2__["SalesTimeComponent"],
                data: { title: 'Sales by Time', breadcrumb: 'Sales by Time' }
            },
            {
                path: 'sales-retailers',
                component: _sales_retailers_sales_retailers_component__WEBPACK_IMPORTED_MODULE_3__["SalesRetailersComponent"],
                data: { title: 'Sales by Retailers', breadcrumb: 'Sales by Retailers' }
            },
            {
                path: 'feedback-rate',
                component: _feedback_rate_feedback_rate_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackRateComponent"],
                data: { title: 'Customer Feedback Rate', breadcrumb: 'Customer Feedback Rate' }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/views/reporting/reporting.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/reporting/reporting.service.ts ***!
  \******************************************************/
/*! exports provided: ReportingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingService", function() { return ReportingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportingService = /** @class */ (function () {
    function ReportingService(http) {
        this.http = http;
        this.productApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "products/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
        console.log("URL : " + this.productApiUrl);
    }
    ReportingService.prototype.getAllProducts = function () {
        return this.http.get(this.productApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ReportingService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ReportingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportingService);
    return ReportingService;
}());



/***/ }),

/***/ "./src/app/views/reporting/sales-region/sales-region.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/reporting/sales-region/sales-region.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First row -->\r\n<div class=\"pt-2\">\r\n  <mat-card class=\"p-0\" [@animate]=\"{ value: '*', params: { scale: '.9', delay: '300ms' } }\">\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-green\" color=\"warn\">show_chart</mat-icon>\r\n          <h4 class=\"m-0\">{{statObj === null ? 0 : (statObj.total_auth === null ? \"0\" : statObj.total_auth)}}</h4>\r\n          <small class=\"m-0 \">Total Authentication</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-blue\">location_city</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.factories === null ? \"0\" : statObj.factories)}}</h4>\r\n          <small class=\"m-0 \">Factories</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-green\" color=\"primary\">shop</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.merchandizers === null ? \"0\" : statObj.merchandizers)}}</h4>\r\n          <small class=\"m-0 \">Merchandizers</small>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\r\n        <div class=\"text-center pt-1 pb-1 border-right-light\">\r\n          <mat-icon class=\"text-blue\" color=\"accent\">person</mat-icon>\r\n          <h4 class=\"m-0 \">{{statObj === null ? 0 : (statObj.customer === null ? \"0\" : statObj.customer)}}</h4>\r\n          <small class=\"m-0 \">Customers</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n<!--/ End first row -->\r\n<div fxLayout=\"row wrap\" class=\"pt-2\">\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\">\r\n    <mat-card>\r\n      <form class=\"example-form\">\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput [formControl]=\"itemForm.controls['product']\" placeholder=\"Search Product\" id=\"getProduct\"\r\n            (keyup)=\"emptyProduct($event)\" [matAutocomplete]=\"autoProduct\">\r\n          <mat-autocomplete autoActiveFirstOption #autoProduct=\"matAutocomplete\" (optionSelected)=\"selectedProduct($event)\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product\">\r\n              {{product.name}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <mat-form-field *ngIf=\"noData && itemForm.controls['product'].value\" class=\"full-width\">\r\n          <input matInput [formControl]=\"itemForm.controls['countries']\" placeholder=\"Search Country\" (keyup)=\"emptyCountry($event)\"\r\n            [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"selectedCountry($event)\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let country of filteredCountry | async\" [value]=\"country\">\r\n              {{country.name}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </form>\r\n      <!-- {{noData}}\r\n      {{noDataSecond}} -->\r\n\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"75\" fxFlex.sm=\"75\">\r\n    <mat-card>\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Vertical Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas *ngIf=\"noData && noDataSecond\" class=\"chart\" baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\"\r\n          [options]=\"doughnutOptions\" [colors]=\"pieChartColors\" [chartType]=\"pieChartType\" (chartHover)=\"pieChartHovered($event)\"\r\n          (chartClick)=\"pieChartClicked($event)\"></canvas>\r\n        <div *ngIf=\"!noData\" class=\"alert alert-warning\" role=\"alert\">\r\n          No sales identified for the selected product\r\n        </div>\r\n        <div *ngIf=\"!noDataSecond\" class=\"alert alert-warning\" role=\"alert\">\r\n          No sales identified for the selected country\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/sales-region/sales-region.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/reporting/sales-region/sales-region.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9zYWxlcy1yZWdpb24vc2FsZXMtcmVnaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/reporting/sales-region/sales-region.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/reporting/sales-region/sales-region.component.ts ***!
  \************************************************************************/
/*! exports provided: SalesRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRegionComponent", function() { return SalesRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_fake_db_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/fake-db/chart */ "./src/app/shared/fake-db/chart.ts");
/* harmony import */ var _reporting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reporting.service */ "./src/app/views/reporting/reporting.service.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SalesRegionComponent = /** @class */ (function () {
    function SalesRegionComponent(fb, reportingService) {
        this.fb = fb;
        this.reportingService = reportingService;
        this.proObj = null;
        this.countryObj = null;
        this.statObj = null;
        // public selectCounty;
        //public countryDet;
        this.noData = true;
        this.noDataSecond = true;
        this.pieChartType = 'pie';
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [];
        this.backgroundColor = [];
        // -------------------------------------------------------------------------------------------------//
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.chart = new _shared_fake_db_chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]();
    }
    SalesRegionComponent.prototype.ngOnInit = function () {
        //----service subscription---//
        //  this.reportingService.getAllProducts().subscribe(data => {
        //       this.products = data.content;
        //  });
        var _this = this;
        this.products = this.chart.products;
        this.getCountries = this.chart.country;
        this.buildItemForm();
        this.filteredProducts = this.itemForm.get("product").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filterProduct(value); }));
    };
    // -------------------------------------------------------------------------------------------------
    SalesRegionComponent.prototype.buildItemForm = function () {
        this.itemForm = this.fb.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            countries: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SalesRegionComponent.prototype._filterProduct = function (value) {
        var filterValue = value;
        return this.products.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SalesRegionComponent.prototype._filterCounty = function (value) {
        var filterValue = value;
        return this.countries.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SalesRegionComponent.prototype.selectedProduct = function (event) {
        var _this = this;
        console.log(event);
        if (event.option !== undefined) {
            this.proObj = event.option.value;
            this.statObj = this.proObj;
            this.itemForm.get('countries').setValue('');
            this.countries = this.proObj.country;
            // this.chartupdate.data.length = 0;
            // this.chartupdate.labels.length = 0;
            this.pieChartLabels.length = 0;
            this.pieChartData.length = 0;
            this.proObj.country.forEach(function (element) {
                _this.pieChartLabels.push(element.name);
                _this.pieChartData.push(element.sale);
                _this.backgroundColor.push(_this.getRandomColor());
            });
            this.pieChartData.forEach(function (element) {
                if (element !== '') {
                    _this.noData = true;
                    _this.pieChartColors = [{ backgroundColor: _this.backgroundColor }];
                    //this.chartupdate.chart.update();
                    _this.filteredCountry = _this.itemForm.get("countries").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filterCounty(value); }));
                }
                else {
                    _this.noData = false;
                }
            });
        }
    };
    SalesRegionComponent.prototype.selectedCountry = function (event) {
        var _this = this;
        console.log(event);
        this.countryObj = event.option.value;
        this.getCountries.forEach(function (country) {
            if (country.code === _this.countryObj.code) {
                _this.statObj = country;
                _this.pieChartLabels.length = 0;
                _this.pieChartData.length = 0;
                country.region.forEach(function (region) {
                    console.log(region);
                    _this.pieChartLabels.push(region.name);
                    _this.pieChartData.push(region.sale);
                    _this.backgroundColor.push(_this.getRandomColor());
                });
                _this.pieChartData.forEach(function (element) {
                    if (element !== '') {
                        _this.noDataSecond = true;
                        _this.pieChartColors = [{ backgroundColor: _this.backgroundColor }];
                    }
                    else {
                        _this.noDataSecond = false;
                    }
                });
            }
        });
    };
    SalesRegionComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    SalesRegionComponent.prototype.displayFn = function (value) {
        console.log("displayfn" + value);
        return value ? value.name : value;
    };
    SalesRegionComponent.prototype.emptyCountry = function (event) {
        var _this = this;
        if (event) {
            if (event.target.value === null || event.target.value === "") {
                this.noData = true;
                this.pieChartLabels.length = 0;
                this.pieChartData.length = 0;
                this.proObj.country.forEach(function (element) {
                    _this.pieChartLabels.push(element.name);
                    _this.pieChartData.push(element.sale);
                    _this.backgroundColor.push(_this.getRandomColor());
                });
                this.pieChartColors = [{ backgroundColor: this.backgroundColor }];
            }
        }
    };
    SalesRegionComponent.prototype.emptyProduct = function (event) {
        console.log(event);
        if (event) {
            if (event.target.value === null || event.target.value === "") {
                this.noDataSecond = true;
                this.pieChartLabels.length = 0;
                this.pieChartData.length = 0;
                this.chartupdate.chart.update();
            }
        }
    };
    /*
   * Pie Chart Options
   */
    // public pieChartLabels: string[] = ['Afghanistan', 'Åland Islands'];
    // public pieChartData: number[] = [400, 500];
    // public pieChartLabels: string[] = this.country;
    // public pieChartData: number[] = this.sale;
    // public pieChartType: string = 'pie';
    // public pieChartColors: Array<any> = [{
    //   backgroundColor: ['rgba(255, 217, 125, 0.8)', 'rgba(36, 123, 160, 0.8)', 'rgba(244, 67, 54, 0.8)']
    // }];
    /*
    * Pie Chart Event Handler
    */
    SalesRegionComponent.prototype.pieChartClicked = function (e) {
    };
    SalesRegionComponent.prototype.pieChartHovered = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]),
        __metadata("design:type", ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"])
    ], SalesRegionComponent.prototype, "chartupdate", void 0);
    SalesRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-region',
            template: __webpack_require__(/*! ./sales-region.component.html */ "./src/app/views/reporting/sales-region/sales-region.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./sales-region.component.scss */ "./src/app/views/reporting/sales-region/sales-region.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _reporting_service__WEBPACK_IMPORTED_MODULE_5__["ReportingService"]])
    ], SalesRegionComponent);
    return SalesRegionComponent;
}());



/***/ }),

/***/ "./src/app/views/reporting/sales-retailers/sales-retailers.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/reporting/sales-retailers/sales-retailers.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"pt-2\">\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\">\r\n    <mat-card>\r\n      <form>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select A Product\">\r\n            <mat-option [value]=\"\">NIKE Shoes</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select Style\">\r\n            <mat-option [value]=\"\">Sport Shoes</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select A Country\">\r\n            <mat-option [value]=\"\">Canada</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"75\" fxFlex.sm=\"75\">\r\n    <mat-card>\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Horizontal Bar chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartHorizontalOptions\"\r\n          [colors]=\"chartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartHorizontalType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/sales-retailers/sales-retailers.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/reporting/sales-retailers/sales-retailers.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9zYWxlcy1yZXRhaWxlcnMvc2FsZXMtcmV0YWlsZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/reporting/sales-retailers/sales-retailers.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/reporting/sales-retailers/sales-retailers.component.ts ***!
  \******************************************************************************/
/*! exports provided: SalesRetailersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRetailersComponent", function() { return SalesRetailersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesRetailersComponent = /** @class */ (function () {
    function SalesRetailersComponent() {
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        // Horizontal Bar Chart
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [5, 6, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.sharedChartOptions);
    }
    SalesRetailersComponent.prototype.ngOnInit = function () {
    };
    /*
   * Bar Chart Event Handler
   */
    SalesRetailersComponent.prototype.barChartClicked = function (e) {
    };
    SalesRetailersComponent.prototype.barChartHovered = function (e) {
    };
    SalesRetailersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-retailers',
            template: __webpack_require__(/*! ./sales-retailers.component.html */ "./src/app/views/reporting/sales-retailers/sales-retailers.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./sales-retailers.component.scss */ "./src/app/views/reporting/sales-retailers/sales-retailers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesRetailersComponent);
    return SalesRetailersComponent;
}());



/***/ }),

/***/ "./src/app/views/reporting/sales-time/sales-time.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/reporting/sales-time/sales-time.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"pt-2\">\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\">\r\n    <mat-card>\r\n      <form>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select a Product\">\r\n            <mat-option [value]=\"\">NIKE Shoes</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select required placeholder=\"Select A Time Frame\">\r\n            <mat-option [value]=\"\">Within last month</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </form>\r\n\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"50\" fxFlex.gt-sm=\"75\" fxFlex.sm=\"75\">\r\n    <mat-card>\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">Basic Line chart</div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <canvas baseChart class=\"chart\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n          [colors]=\"chartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/reporting/sales-time/sales-time.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/reporting/sales-time/sales-time.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydGluZy9zYWxlcy10aW1lL3NhbGVzLXRpbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/reporting/sales-time/sales-time.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/reporting/sales-time/sales-time.component.ts ***!
  \********************************************************************/
/*! exports provided: SalesTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesTimeComponent", function() { return SalesTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesTimeComponent = /** @class */ (function () {
    function SalesTimeComponent() {
        this.sharedChartOptions = {
            responsive: true,
            // maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.chartColors = [{
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        /*
         * Line Chart Options
         */
        this.lineChartData = [{
                data: [5, 5, 7, 8, 4, 5, 5],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 3, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.sharedChartOptions);
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.sharedChartOptions);
    }
    SalesTimeComponent.prototype.ngOnInit = function () {
    };
    /*
    * Line Chart Event Handler
    */
    SalesTimeComponent.prototype.lineChartClicked = function (e) {
    };
    SalesTimeComponent.prototype.lineChartHovered = function (e) {
    };
    SalesTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-time',
            template: __webpack_require__(/*! ./sales-time.component.html */ "./src/app/views/reporting/sales-time/sales-time.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./sales-time.component.scss */ "./src/app/views/reporting/sales-time/sales-time.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesTimeComponent);
    return SalesTimeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-reporting-reporting-module.js.map