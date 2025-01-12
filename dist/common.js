(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/views/evote/evote-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/evote/evote-service.service.ts ***!
  \******************************************************/
/*! exports provided: EvoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoteService", function() { return EvoteService; });
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





var EvoteService = /** @class */ (function () {
    function EvoteService(http) {
        this.http = http;
        this.surveyApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].surveyApiURL + "evotes/";
        this.populateVoterUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].surveyApiURL + "voters";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
    }
    EvoteService.prototype.getAllEvotesSuggestions = function () {
        return this.http
            .get(this.surveyApiUrl + "suggestions")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.getAllEvotes = function () {
        return this.http.get(this.surveyApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    EvoteService.prototype.getPageEvotes = function (pageNumber, pageSize) {
        return this.http.get(this.surveyApiUrl + "?pageNumber=" + pageNumber + "&pageSize=" + pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    EvoteService.prototype.removeEvotes = function (row, items) {
        return this.http.delete(this.surveyApiUrl + row.id).pipe(
        // map(data => {
        //   console.log(items);
        //   let i = items.indexOf(row);
        //   console.log('I : ' + i);
        //   items.splice(i, 1);
        //   return items;
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.addEvote = function (evoteObj, items) {
        return this.http.post(this.surveyApiUrl, evoteObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.updateEvote = function (id, item) {
        return this.http
            .put(this.surveyApiUrl + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.populateVoters = function (voteObj) {
        return this.http
            .post(this.populateVoterUrl, voteObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.getEvoteById = function (evoteId) {
        return this.http
            .get(this.surveyApiUrl + evoteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.getEvoteDetails = function (evoteId) {
        return this.http
            .get(environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].surveyApiURL + "eVoterDetails/" + evoteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvoteService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    EvoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EvoteService);
    return EvoteService;
}());



/***/ }),

/***/ "./src/app/views/product-crud/product-crud.service.ts":
/*!************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.service.ts ***!
  \************************************************************/
/*! exports provided: ProductCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudService", function() { return ProductCrudService; });
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





var ProductCrudService = /** @class */ (function () {
    function ProductCrudService(http) {
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
    ProductCrudService.prototype.updateProduct = function (id, item) {
        return this.http
            .put(this.productApiUrl + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.addProduct = function (productObj, items) {
        return this.http.post(this.productApiUrl, productObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(JSON.stringify(response.content.id));
            return response.content.id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getAllProducts = function () {
        return this.http.get(this.productApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.removeProduct = function (row, items) {
        return this.http
            .delete(this.productApiUrl + row.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getAllProductSuggestions = function () {
        return this.http
            .get(this.productApiUrl + "suggestions")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    ProductCrudService.prototype.getPageProducts = function (pageNumber, pageSize) {
        return this.http
            .get(this.productApiUrl +
            "?pageNumber=" +
            pageNumber +
            "&pageSize=" +
            pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    ProductCrudService.prototype.getProductById = function (proId) {
        return this.http
            .get(this.productApiUrl + proId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getProductDetails = function (proId) {
        return this.http
            .get(environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "productDetails/" + proId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.authenticate = function (request) {
        return this.http
            .post(environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "authenticate/customer/", request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ProductCrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductCrudService);
    return ProductCrudService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map