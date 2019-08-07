(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-community-community-module"],{

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js ***!
  \************************************************************************************/
/*! exports provided: OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_LOCALE_PROVIDER, DateTimeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function() { return OWL_DATE_TIME_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function() { return OWL_DATE_TIME_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function() { return DateTimeAdapter; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OWL_DATE_TIME_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OWL_DATE_TIME_LOCALE');
var OWL_DATE_TIME_LOCALE_PROVIDER = { provide: OWL_DATE_TIME_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"] };
var DateTimeAdapter = (function () {
    function DateTimeAdapter() {
        this._localeChanges = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.millisecondsInDay = 86400000;
        this.milliseondsInMinute = 60000;
    }
    Object.defineProperty(DateTimeAdapter.prototype, "localeChanges", {
        get: function () {
            return this._localeChanges;
        },
        enumerable: true,
        configurable: true
    });
    DateTimeAdapter.prototype.compare = function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        var dateFirst = this.clone(first);
        var dateSecond = this.clone(second);
        var diff = this.getTime(dateFirst) - this.getTime(dateSecond);
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            return diff;
        }
    };
    DateTimeAdapter.prototype.compareYear = function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        var yearLeft = this.getYear(first);
        var yearRight = this.getYear(second);
        var diff = yearLeft - yearRight;
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    DateTimeAdapter.prototype.deserialize = function (value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    };
    DateTimeAdapter.prototype.setLocale = function (locale) {
        this.locale = locale;
        this._localeChanges.next();
    };
    DateTimeAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compare(date, min) < 0) {
            return min;
        }
        if (max && this.compare(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateTimeAdapter;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js ***!
  \***********************************************************************************/
/*! exports provided: OWL_DATE_TIME_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function() { return OWL_DATE_TIME_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var OWL_DATE_TIME_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OWL_DATE_TIME_FORMATS');


/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js ***!
  \*******************************************************************************************/
/*! exports provided: NativeDateTimeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateTimeAdapter", function() { return NativeDateTimeAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
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
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
var DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var NativeDateTimeAdapter = (function (_super) {
    __extends(NativeDateTimeAdapter, _super);
    function NativeDateTimeAdapter(owlDateTimeLocale) {
        var _this = _super.call(this) || this;
        _this.owlDateTimeLocale = owlDateTimeLocale;
        _super.prototype.setLocale.call(_this, owlDateTimeLocale);
        _this.useUtcForDisplay = !(typeof document === 'object' && !!document &&
            /(msie|trident)/i.test(navigator.userAgent));
        return _this;
    }
    NativeDateTimeAdapter.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    NativeDateTimeAdapter.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    NativeDateTimeAdapter.prototype.getDay = function (date) {
        return date.getDay();
    };
    NativeDateTimeAdapter.prototype.getDate = function (date) {
        return date.getDate();
    };
    NativeDateTimeAdapter.prototype.getHours = function (date) {
        return date.getHours();
    };
    NativeDateTimeAdapter.prototype.getMinutes = function (date) {
        return date.getMinutes();
    };
    NativeDateTimeAdapter.prototype.getSeconds = function (date) {
        return date.getSeconds();
    };
    NativeDateTimeAdapter.prototype.getTime = function (date) {
        return date.getTime();
    };
    NativeDateTimeAdapter.prototype.getNumDaysInMonth = function (date) {
        var lastDateOfMonth = this.createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0);
        return this.getDate(lastDateOfMonth);
    };
    NativeDateTimeAdapter.prototype.differenceInCalendarDays = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            var dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
            var dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
            var timeStampLeft = this.getTime(dateLeftStartOfDay) - dateLeftStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
            var timeStampRight = this.getTime(dateRightStartOfDay) - dateRightStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
            return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
        }
        else {
            return null;
        }
    };
    NativeDateTimeAdapter.prototype.getYearName = function (date) {
        if (SUPPORTS_INTL_API) {
            var dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric' });
            return this.stripDirectionalityCharacters(dtf.format(date));
        }
        return String(this.getYear(date));
    };
    NativeDateTimeAdapter.prototype.getMonthNames = function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style });
            return range(12, function (i) { return _this.stripDirectionalityCharacters(dtf_1.format(new Date(2017, i, 1))); });
        }
        return DEFAULT_MONTH_NAMES[style];
    };
    NativeDateTimeAdapter.prototype.getDayOfWeekNames = function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var dtf_2 = new Intl.DateTimeFormat(this.locale, { weekday: style });
            return range(7, function (i) {
                return _this.stripDirectionalityCharacters(dtf_2.format(new Date(2017, 0, i + 1)));
            });
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    NativeDateTimeAdapter.prototype.toIso8601 = function (date) {
        return date.toISOString();
    };
    NativeDateTimeAdapter.prototype.isEqual = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            return dateLeft.getTime() === dateRight.getTime();
        }
        else {
            return false;
        }
    };
    NativeDateTimeAdapter.prototype.isSameDay = function (dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            var dateLeftStartOfDay = this.clone(dateLeft);
            var dateRightStartOfDay = this.clone(dateRight);
            dateLeftStartOfDay.setHours(0, 0, 0, 0);
            dateRightStartOfDay.setHours(0, 0, 0, 0);
            return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
        }
        else {
            return false;
        }
    };
    NativeDateTimeAdapter.prototype.isValid = function (date) {
        return date && !isNaN(date.getTime());
    };
    NativeDateTimeAdapter.prototype.invalid = function () {
        return new Date(NaN);
    };
    NativeDateTimeAdapter.prototype.isDateInstance = function (obj) {
        return obj instanceof Date;
    };
    NativeDateTimeAdapter.prototype.addCalendarYears = function (date, amount) {
        return this.addCalendarMonths(date, amount * 12);
    };
    NativeDateTimeAdapter.prototype.addCalendarMonths = function (date, amount) {
        var result = this.clone(date);
        amount = Number(amount);
        var desiredMonth = result.getMonth() + amount;
        var dateWithDesiredMonth = new Date(0);
        dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
        dateWithDesiredMonth.setHours(0, 0, 0, 0);
        var daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
        result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
        return result;
    };
    NativeDateTimeAdapter.prototype.addCalendarDays = function (date, amount) {
        var result = this.clone(date);
        amount = Number(amount);
        result.setDate(result.getDate() + amount);
        return result;
    };
    NativeDateTimeAdapter.prototype.setHours = function (date, amount) {
        var result = this.clone(date);
        result.setHours(amount);
        return result;
    };
    NativeDateTimeAdapter.prototype.setMinutes = function (date, amount) {
        var result = this.clone(date);
        result.setMinutes(amount);
        return result;
    };
    NativeDateTimeAdapter.prototype.setSeconds = function (date, amount) {
        var result = this.clone(date);
        result.setSeconds(amount);
        return result;
    };
    NativeDateTimeAdapter.prototype.createDate = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hours < 0 || hours > 23) {
            throw Error("Invalid hours \"" + hours + "\". Hours has to be between 0 and 23.");
        }
        if (minutes < 0 || minutes > 59) {
            throw Error("Invalid minutes \"" + minutes + "\". Minutes has to between 0 and 59.");
        }
        if (seconds < 0 || seconds > 59) {
            throw Error("Invalid seconds \"" + seconds + "\". Seconds has to be between 0 and 59.");
        }
        var result = this.createDateWithOverflow(year, month, date, hours, minutes, seconds);
        if (result.getMonth() !== month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    NativeDateTimeAdapter.prototype.clone = function (date) {
        return new Date(date.getTime());
    };
    NativeDateTimeAdapter.prototype.now = function () {
        return new Date();
    };
    NativeDateTimeAdapter.prototype.format = function (date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('JSNativeDate: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            if (this.useUtcForDisplay) {
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
                displayFormat = __assign({}, displayFormat, { timeZone: 'utc' });
            }
            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this.stripDirectionalityCharacters(dtf.format(date));
        }
        return this.stripDirectionalityCharacters(date.toDateString());
    };
    NativeDateTimeAdapter.prototype.parse = function (value, parseFormat) {
        if (typeof value === 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    };
    NativeDateTimeAdapter.prototype.deserialize = function (value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            if (ISO_8601_REGEX.test(value)) {
                var date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return _super.prototype.deserialize.call(this, value);
    };
    NativeDateTimeAdapter.prototype.createDateWithOverflow = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        var result = new Date(year, month, date, hours, minutes, seconds);
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    NativeDateTimeAdapter.prototype.stripDirectionalityCharacters = function (str) {
        return str.replace(/[\u200e\u200f]/g, '');
    };
    NativeDateTimeAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    NativeDateTimeAdapter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["OWL_DATE_TIME_LOCALE"],] },] },
    ]; };
    return NativeDateTimeAdapter;
}(_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeAdapter"]));



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js ***!
  \******************************************************************************************/
/*! exports provided: OWL_NATIVE_DATE_TIME_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_NATIVE_DATE_TIME_FORMATS", function() { return OWL_NATIVE_DATE_TIME_FORMATS; });
var OWL_NATIVE_DATE_TIME_FORMATS = {
    parseInput: null,
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    timePickerInput: { hour: 'numeric', minute: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};


/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js ***!
  \************************************************************************************/
/*! exports provided: NativeDateTimeModule, OwlNativeDateTimeModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateTimeModule", function() { return NativeDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function() { return OwlNativeDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js");
/* harmony import */ var _date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var _native_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./native-date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js");





var NativeDateTimeModule = (function () {
    function NativeDateTimeModule() {
    }
    NativeDateTimeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        { provide: _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeAdapter"], useClass: _native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["NativeDateTimeAdapter"] },
                        _date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["OWL_DATE_TIME_LOCALE_PROVIDER"],
                    ],
                },] },
    ];
    NativeDateTimeModule.ctorParameters = function () { return []; };
    return NativeDateTimeModule;
}());

var ɵ0 = _native_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__["OWL_NATIVE_DATE_TIME_FORMATS"];
var OwlNativeDateTimeModule = (function () {
    function OwlNativeDateTimeModule() {
    }
    OwlNativeDateTimeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [NativeDateTimeModule],
                    providers: [{ provide: _date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"], useValue: ɵ0 }],
                },] },
    ];
    OwlNativeDateTimeModule.ctorParameters = function () { return []; };
    return OwlNativeDateTimeModule;
}());




/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/calendar-body.component.js ***!
  \****************************************************************************/
/*! exports provided: CalendarCell, OwlCalendarBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCell", function() { return CalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlCalendarBodyComponent", function() { return OwlCalendarBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var CalendarCell = (function () {
    function CalendarCell(value, displayValue, ariaLabel, enabled, out) {
        if (out === void 0) { out = false; }
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.out = out;
    }
    return CalendarCell;
}());

var OwlCalendarBodyComponent = (function () {
    function OwlCalendarBodyComponent(elmRef, ngZone) {
        this.elmRef = elmRef;
        this.ngZone = ngZone;
        this.activeCell = 0;
        this.allowDisabledCellSelection = false;
        this.numCols = 7;
        this.cellRatio = 1;
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "owlDTCalendarBodyClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    OwlCalendarBodyComponent.prototype.ngOnInit = function () {
    };
    OwlCalendarBodyComponent.prototype.cellClicked = function (cell) {
        if (!this.allowDisabledCellSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    OwlCalendarBodyComponent.prototype.isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        return cellNumber === this.activeCell;
    };
    OwlCalendarBodyComponent.prototype.isSelected = function (value) {
        if (!this.selectedValues || this.selectedValues.length === 0) {
            return false;
        }
        if (this.isInSingleMode) {
            return value === this.selectedValues[0];
        }
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            var toValue = this.selectedValues[1];
            return value === fromValue || value === toValue;
        }
    };
    OwlCalendarBodyComponent.prototype.isInRange = function (value) {
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            var toValue = this.selectedValues[1];
            if (fromValue !== null && toValue !== null) {
                return value >= fromValue && value <= toValue;
            }
            else {
                return value === fromValue || value === toValue;
            }
        }
    };
    OwlCalendarBodyComponent.prototype.isRangeFrom = function (value) {
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            return fromValue !== null && value === fromValue;
        }
    };
    OwlCalendarBodyComponent.prototype.isRangeTo = function (value) {
        if (this.isInRangeMode) {
            var toValue = this.selectedValues[1];
            return toValue !== null && value === toValue;
        }
    };
    OwlCalendarBodyComponent.prototype.focusActiveCell = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
                _this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
            });
        });
    };
    OwlCalendarBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[owl-date-time-calendar-body]',
                    exportAs: 'owlDateTimeCalendarBody',
                    template: "<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngFor=\"let item of row; let colIndex = index\" class=\"owl-dt-calendar-cell\" [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.owl-dt-calendar-cell-active]=\"isActiveCell(rowIndex, colIndex)\" [class.owl-dt-calendar-cell-disabled]=\"!item.enabled\" [class.owl-dt-calendar-cell-in-range]=\"isInRange(item.value)\" [class.owl-dt-calendar-cell-range-from]=\"isRangeFrom(item.value)\" [class.owl-dt-calendar-cell-range-to]=\"isRangeTo(item.value)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellRatio / numCols\" [style.paddingBottom.%]=\"50 * cellRatio / numCols\" (click)=\"cellClicked(item)\"><span class=\"owl-dt-calendar-cell-content\" [ngClass]=\"{\n                'owl-dt-calendar-cell-out': item.out,\n                'owl-dt-calendar-cell-today': item.value === todayValue,\n                'owl-dt-calendar-cell-selected': isSelected(item.value)\n              }\">{{item.displayValue}}</span></td></tr>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlCalendarBodyComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    OwlCalendarBodyComponent.propDecorators = {
        "activeCell": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "allowDisabledCellSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numCols": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cellRatio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "todayValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedValues": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "owlDTCalendarBodyClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar-body',] },],
    };
    return OwlCalendarBodyComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js ***!
  \**********************************************************************************/
/*! exports provided: OwlMonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlMonthViewComponent", function() { return OwlMonthViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-body.component */ "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");






var DAYS_PER_WEEK = 7;
var WEEKS_PER_VIEW = 6;
var OwlMonthViewComponent = (function () {
    function OwlMonthViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._selecteds = [];
        this.localeSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.initiated = false;
        this.selectedDates = [];
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(OwlMonthViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            var oldSelected = this._selected;
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
                this.setSelectedDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
            this.setSelectedDates();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
            this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);
            if (!this.isSameMonth(oldMoment, this._pickerMoment) && this.initiated) {
                this.generateCalendar();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateCalendar();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateCalendar();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateCalendar();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "weekdays", {
        get: function () {
            return this._weekdays;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "days", {
        get: function () {
            return this._days;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "activeCell", {
        get: function () {
            if (this.pickerMoment) {
                return this.dateTimeAdapter.getDate(this.pickerMoment) + this.firstRowOffset - 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateWeekDays();
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
            _this.generateWeekDays();
            _this.generateCalendar();
            _this.cdRef.markForCheck();
        });
    };
    OwlMonthViewComponent.prototype.ngAfterContentInit = function () {
        this.generateCalendar();
        this.initiated = true;
    };
    OwlMonthViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
    };
    OwlMonthViewComponent.prototype.dateSelected = function (date) {
        var daysDiff = date - 1;
        var selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        if ((this.isInSingleMode && this.selectedDates[0] !== date) ||
            this.isInRangeMode) {
            this.selectedChange.emit(selected);
        }
        this.userSelection.emit();
    };
    OwlMonthViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) -
                    this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_UP"]:
                moment = event.altKey ?
                    this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1) :
                    this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_DOWN"]:
                moment = event.altKey ?
                    this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1) :
                    this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"]:
                if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
                    this.dateSelected(this.dateTimeAdapter.getDate(this.pickerMoment));
                }
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    OwlMonthViewComponent.prototype.generateWeekDays = function () {
        var longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long');
        var shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short');
        var narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow');
        var firstDayOfWeek = this.firstDayOfWeek;
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, short: shortWeekdays[i], narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        return;
    };
    OwlMonthViewComponent.prototype.generateCalendar = function () {
        if (!this.pickerMoment) {
            return;
        }
        this.todayDate = null;
        var startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
        var firstDayOfWeek = this.firstDayOfWeek;
        var daysDiff = 0 - (startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) % DAYS_PER_WEEK;
        this.firstRowOffset = Math.abs(daysDiff);
        this._days = [];
        for (var i = 0; i < WEEKS_PER_VIEW; i++) {
            var week = [];
            for (var j = 0; j < DAYS_PER_WEEK; j++) {
                var date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
                var dateCell = this.createDateCell(date, daysDiff);
                if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
                    this.todayDate = daysDiff + 1;
                }
                week.push(dateCell);
                daysDiff += 1;
            }
            this._days.push(week);
        }
        this.setSelectedDates();
    };
    OwlMonthViewComponent.prototype.createDateCell = function (date, daysDiff) {
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
        var dateNum = this.dateTimeAdapter.getDate(date);
        var ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
        var enabled = this.isDateEnabled(date);
        var dayValue = daysDiff + 1;
        var out = dayValue < 1 || dayValue > daysInMonth;
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCell"](dayValue, dateNum.toString(), ariaLabel, enabled, out);
    };
    OwlMonthViewComponent.prototype.isDateEnabled = function (date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
            (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
    };
    OwlMonthViewComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlMonthViewComponent.prototype.isSameMonth = function (dateLeft, dateRight) {
        return !!(dateLeft && dateRight &&
            this.dateTimeAdapter.isValid(dateLeft) && this.dateTimeAdapter.isValid(dateRight) &&
            this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight) &&
            this.dateTimeAdapter.getMonth(dateLeft) === this.dateTimeAdapter.getMonth(dateRight));
    };
    OwlMonthViewComponent.prototype.setSelectedDates = function () {
        var _this = this;
        this.selectedDates = [];
        if (!this.firstDateOfMonth) {
            return;
        }
        if (this.isInSingleMode && this.selected) {
            var dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
            this.selectedDates[0] = dayDiff + 1;
            return;
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedDates = this.selecteds.map(function (selected) {
                if (_this.dateTimeAdapter.isValid(selected)) {
                    var dayDiff = _this.dateTimeAdapter.differenceInCalendarDays(selected, _this.firstDateOfMonth);
                    return dayDiff + 1;
                }
                else {
                    return null;
                }
            });
        }
    };
    OwlMonthViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlMonthViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time-month-view',
                    exportAs: 'owlYearView',
                    template: "<table class=\"owl-dt-calendar-table\"><thead class=\"owl-dt-calendar-header\"><tr class=\"owl-dt-weekdays\"><th *ngFor=\"let weekday of weekdays\" [attr.aria-label]=\"weekday.long\" class=\"owl-dt-weekday\" scope=\"col\"><span>{{weekday.short}}</span></th></tr><tr><th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"7\"></th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [rows]=\"days\" [todayValue]=\"todayDate\" [selectedValues]=\"selectedDates\" [selectMode]=\"selectMode\" [activeCell]=\"activeCell\" (keydown)=\"handleCalendarKeydown($event)\" (selectedValueChange)=\"dateSelected($event)\"></tbody></table>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlMonthViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlMonthViewComponent.propDecorators = {
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selecteds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMoment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "userSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pickerMomentChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "calendarBodyElm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"],] },],
        "owlDTCalendarView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar-view',] },],
    };
    return OwlMonthViewComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js ***!
  \***************************************************************************************/
/*! exports provided: YEARS_PER_ROW, YEAR_ROWS, OwlMultiYearViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARS_PER_ROW", function() { return YEARS_PER_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_ROWS", function() { return YEAR_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlMultiYearViewComponent", function() { return OwlMultiYearViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _calendar_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-body.component */ "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");





var YEARS_PER_ROW = 3;
var YEAR_ROWS = 7;
var OwlMultiYearViewComponent = (function () {
    function OwlMultiYearViewComponent(pickerIntl, dateTimeAdapter) {
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this._selecteds = [];
        this.initiated = false;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            var oldSelected = this._selected;
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
                this.setSelectedYears();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
            this.setSelectedYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
            if (oldMoment && this._pickerMoment &&
                !this.isSameYearList(oldMoment, this._pickerMoment)) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "todayYear", {
        get: function () {
            return this._todayYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "years", {
        get: function () {
            return this._years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selectedYears", {
        get: function () {
            return this._selectedYears;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "activeCell", {
        get: function () {
            if (this._pickerMoment) {
                return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "tableHeader", {
        get: function () {
            if (this._years && this._years.length > 0) {
                return this._years[0][0].displayValue + " ~ " + this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "prevButtonLabel", {
        get: function () {
            return this.pickerIntl.prevMultiYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "nextButtonLabel", {
        get: function () {
            return this.pickerIntl.nextMultiYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarMultiYearView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlMultiYearViewComponent.prototype.ngOnInit = function () {
    };
    OwlMultiYearViewComponent.prototype.ngAfterContentInit = function () {
        this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
        this.generateYearList();
        this.initiated = true;
    };
    OwlMultiYearViewComponent.prototype.yearSelected = function (year) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.selectedChange.emit(selected);
    };
    OwlMultiYearViewComponent.prototype.prevYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    };
    OwlMultiYearViewComponent.prototype.nextYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    };
    OwlMultiYearViewComponent.prototype.generateYearList = function () {
        this._years = [];
        var pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
        var offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS);
        for (var i = 0; i < YEAR_ROWS; i++) {
            var row = [];
            for (var j = 0; j < YEARS_PER_ROW; j++) {
                var year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW);
                var yearCell = this.createYearCell(year);
                row.push(yearCell);
            }
            this._years.push(row);
        }
        return;
    };
    OwlMultiYearViewComponent.prototype.previousEnabled = function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
    };
    OwlMultiYearViewComponent.prototype.nextEnabled = function () {
        return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
    };
    OwlMultiYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, (YEARS_PER_ROW * YEAR_ROWS) - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                this.yearSelected(this.dateTimeAdapter.getYear(this._pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    OwlMultiYearViewComponent.prototype.createYearCell = function (year) {
        var startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        var ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_2__["CalendarCell"](year, year.toString(), ariaLabel, this.isYearEnabled(year));
    };
    OwlMultiYearViewComponent.prototype.setSelectedYears = function () {
        var _this = this;
        this._selectedYears = [];
        if (this.isInSingleMode && this.selected) {
            this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this._selectedYears = this.selecteds.map(function (selected) {
                if (_this.dateTimeAdapter.isValid(selected)) {
                    return _this.dateTimeAdapter.getYear(selected);
                }
                else {
                    return null;
                }
            });
        }
    };
    OwlMultiYearViewComponent.prototype.isYearEnabled = function (year) {
        if (year === undefined || year === null ||
            (this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this.dateTimeAdapter.getYear(this.minDate))) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        var firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        for (var date = firstOfYear; this.dateTimeAdapter.getYear(date) == year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    OwlMultiYearViewComponent.prototype.isSameYearList = function (date1, date2) {
        return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) ===
            Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS));
    };
    OwlMultiYearViewComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlMultiYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlMultiYearViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time-multi-year-view',
                    template: "<button class=\"owl-dt-control-button owl-dt-control-arrow-button\" [disabled]=\"!previousEnabled()\" [attr.aria-label]=\"prevButtonLabel\" type=\"button\" tabindex=\"0\" (click)=\"prevYearList($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Left\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/></svg><!-- </editor-fold> --></span></button><table class=\"owl-dt-calendar-table owl-dt-calendar-multi-year-table\"><thead class=\"owl-dt-calendar-header\"><tr><th colspan=\"3\">{{tableHeader}}</th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [allowDisabledCellSelection]=\"true\" [rows]=\"years\" [numCols]=\"3\" [cellRatio]=\"3 / 7\" [activeCell]=\"activeCell\" [todayValue]=\"todayYear\" [selectedValues]=\"selectedYears\" [selectMode]=\"selectMode\" (keydown)=\"handleCalendarKeydown($event)\" (selectedValueChange)=\"yearSelected($event)\"></tbody></table><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" [disabled]=\"!nextEnabled()\" [attr.aria-label]=\"nextButtonLabel\" type=\"button\" tabindex=\"0\" (click)=\"nextYearList($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Right\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"><path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z\"/></svg><!-- </editor-fold> --></span></button>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlMultiYearViewComponent.ctorParameters = function () { return [
        { type: _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeIntl"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    OwlMultiYearViewComponent.propDecorators = {
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selecteds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMoment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pickerMomentChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyboardEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "calendarBodyElm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_calendar_body_component__WEBPACK_IMPORTED_MODULE_2__["OwlCalendarBodyComponent"],] },],
        "owlDTCalendarView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar-view',] },],
        "owlDTCalendarMultiYearView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar-multi-year-view',] },],
    };
    return OwlMultiYearViewComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js ***!
  \*********************************************************************************/
/*! exports provided: OwlYearViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlYearViewComponent", function() { return OwlYearViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-body.component */ "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");






var MONTHS_PER_YEAR = 12;
var MONTHS_PER_ROW = 3;
var OwlYearViewComponent = (function () {
    function OwlYearViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._selecteds = [];
        this.localeSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.initiated = false;
        this.selectedMonths = [];
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthNames = this.dateTimeAdapter.getMonthNames('short');
    }
    Object.defineProperty(OwlYearViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            this._selecteds = [];
            for (var i = 0; i < values.length; i++) {
                var value = this.dateTimeAdapter.deserialize(values[i]);
                this._selecteds.push(this.getValidDate(value));
            }
            this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
            if (!this.hasSameYear(oldMoment, this._pickerMoment) && this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "months", {
        get: function () {
            return this._months;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "activeCell", {
        get: function () {
            if (this._pickerMoment) {
                return this.dateTimeAdapter.getMonth(this._pickerMoment);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlYearViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
            _this.generateMonthList();
            _this.cdRef.markForCheck();
        });
    };
    OwlYearViewComponent.prototype.ngAfterContentInit = function () {
        this.generateMonthList();
        this.initiated = true;
    };
    OwlYearViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
    };
    OwlYearViewComponent.prototype.monthSelected = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.selectedChange.emit(selected);
    };
    OwlYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_UP"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 : -1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["PAGE_DOWN"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 : 1);
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"]:
                this.monthSelected(this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    OwlYearViewComponent.prototype.generateMonthList = function () {
        if (!this.pickerMoment) {
            return;
        }
        this.setSelectedMonths();
        this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
        this._months = [];
        for (var i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
            var row = [];
            for (var j = 0; j < MONTHS_PER_ROW; j++) {
                var month = j + i * MONTHS_PER_ROW;
                var monthCell = this.createMonthCell(month);
                row.push(monthCell);
            }
            this._months.push(row);
        }
        return;
    };
    OwlYearViewComponent.prototype.createMonthCell = function (month) {
        var startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        var ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
        return new _calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCell"](month, this.monthNames[month], ariaLabel, this.isMonthEnabled(month));
    };
    OwlYearViewComponent.prototype.isMonthEnabled = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        for (var date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (!!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
                return true;
            }
        }
        return false;
    };
    OwlYearViewComponent.prototype.getMonthInCurrentYear = function (date) {
        if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
            var result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);
            if (result < 0) {
                return -1;
            }
            else if (result > 0) {
                return 12;
            }
            else {
                return this.dateTimeAdapter.getMonth(date);
            }
        }
        else {
            return null;
        }
    };
    OwlYearViewComponent.prototype.setSelectedMonths = function () {
        this.selectedMonths = [];
        if (this.isInSingleMode && this.selected) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
            this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
        }
    };
    OwlYearViewComponent.prototype.hasSameYear = function (dateLeft, dateRight) {
        return !!(dateLeft && dateRight &&
            this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight));
    };
    OwlYearViewComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlYearViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time-year-view',
                    exportAs: 'owlMonthView',
                    template: "<table class=\"owl-dt-calendar-table\"><thead class=\"owl-dt-calendar-header\"><tr><th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"3\"></th></tr></thead><tbody owl-date-time-calendar-body role=\"grid\" [allowDisabledCellSelection]=\"true\" [rows]=\"months\" [numCols]=\"3\" [cellRatio]=\"3 / 7\" [activeCell]=\"activeCell\" [todayValue]=\"todayMonth\" [selectedValues]=\"selectedMonths\" [selectMode]=\"selectMode\" (keydown)=\"handleCalendarKeydown($event)\" (selectedValueChange)=\"monthSelected($event)\"></tbody></table>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlYearViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlYearViewComponent.propDecorators = {
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selecteds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMoment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pickerMomentChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyboardEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "calendarBodyElm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_calendar_body_component__WEBPACK_IMPORTED_MODULE_1__["OwlCalendarBodyComponent"],] },],
        "owlDTCalendarView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar-view',] },],
    };
    return OwlYearViewComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/calendar.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/calendar.component.js ***!
  \***********************************************************************/
/*! exports provided: OwlCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlCalendarComponent", function() { return OwlCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OwlCalendarComponent = (function () {
    function OwlCalendarComponent(elmRef, pickerIntl, ngZone, dateTimeAdapter, dateTimeFormats) {
        var _this = this;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.ngZone = ngZone;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this.firstDayOfWeek = 0;
        this._selecteds = [];
        this.startView = 'month';
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateFilterForViews = function (date) {
            return !!date &&
                (!_this.dateFilter || _this.dateFilter(date)) &&
                (!_this.minDate || _this.dateTimeAdapter.compare(date, _this.minDate) >= 0) &&
                (!_this.maxDate || _this.dateTimeAdapter.compare(date, _this.maxDate) <= 0);
        };
    }
    Object.defineProperty(OwlCalendarComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._minDate = value ?
                this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._maxDate = value ?
                this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonText", {
        get: function () {
            return this.isMonthView ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel) :
                this.dateTimeAdapter.getYearName(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonLabel", {
        get: function () {
            return this.isMonthView ? this.pickerIntl.switchToMultiYearViewLabel :
                this.pickerIntl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "prevButtonLabel", {
        get: function () {
            if (this._currentView === 'month') {
                return this.pickerIntl.prevMonthLabel;
            }
            else if (this._currentView === 'year') {
                return this.pickerIntl.prevYearLabel;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "nextButtonLabel", {
        get: function () {
            if (this._currentView === 'month') {
                return this.pickerIntl.nextMonthLabel;
            }
            else if (this._currentView === 'year') {
                return this.pickerIntl.nextYearLabel;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "currentView", {
        get: function () {
            return this._currentView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "showControlArrows", {
        get: function () {
            return this._currentView !== 'multi-years';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isMonthView", {
        get: function () {
            return this._currentView === 'month';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "owlDTCalendarClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlCalendarComponent.prototype.ngOnInit = function () {
    };
    OwlCalendarComponent.prototype.ngAfterContentInit = function () {
        this._currentView = this.startView;
    };
    OwlCalendarComponent.prototype.toggleViews = function () {
        this._currentView = this._currentView == 'month' ? 'multi-years' : 'month';
    };
    OwlCalendarComponent.prototype.previousClicked = function () {
        this.pickerMoment = this.isMonthView ?
            this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1) :
            this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
    };
    OwlCalendarComponent.prototype.nextClicked = function () {
        this.pickerMoment = this.isMonthView ?
            this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1) :
            this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
    };
    OwlCalendarComponent.prototype.dateSelected = function (date) {
        if (!this.dateFilterForViews(date)) {
            return;
        }
        if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }
    };
    OwlCalendarComponent.prototype.goToDateInView = function (date, view) {
        this.handlePickerMomentChange(date);
        this._currentView = view;
        return;
    };
    OwlCalendarComponent.prototype.handlePickerMomentChange = function (date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
    };
    OwlCalendarComponent.prototype.userSelected = function () {
        this.userSelection.emit();
    };
    OwlCalendarComponent.prototype.prevButtonEnabled = function () {
        return !this.minDate || !this.isSameView(this.pickerMoment, this.minDate);
    };
    OwlCalendarComponent.prototype.nextButtonEnabled = function () {
        return !this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate);
    };
    OwlCalendarComponent.prototype.focusActiveCell = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
                _this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
            });
        });
    };
    OwlCalendarComponent.prototype.isSameView = function (date1, date2) {
        if (this._currentView === 'month') {
            return !!(date1 && date2 &&
                this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) === this.dateTimeAdapter.getMonth(date2));
        }
        else if (this._currentView === 'year') {
            return !!(date1 && date2 &&
                this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2));
        }
        else {
            return false;
        }
    };
    OwlCalendarComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlCalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time-calendar',
                    exportAs: 'owlDateTimeCalendar',
                    template: "<div class=\"owl-dt-calendar-control\"><!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) --> <button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [style.visibility]=\"showControlArrows? 'visible': 'hidden'\" [disabled]=\"!prevButtonEnabled()\" [attr.aria-label]=\"prevButtonLabel\" (click)=\"previousClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Left\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/></svg><!-- </editor-fold> --></span></button><div class=\"owl-dt-calendar-control-content\"><button class=\"owl-dt-control-button owl-dt-control-period-button\" type=\"button\" tabindex=\"0\" [attr.aria-label]=\"periodButtonLabel\" (click)=\"toggleViews()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\">{{periodButtonText}} <span class=\"owl-dt-control-button-arrow\" [style.transform]=\"'rotate(' + (isMonthView? 0 : 180) +'deg)'\"><!-- <editor-fold desc=\"SVG Arrow\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"50%\" height=\"50%\" viewBox=\"0 0 292.362 292.362\" style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\"><g><path d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\"/></g></svg><!-- </editor-fold> --></span></span></button></div><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [style.visibility]=\"showControlArrows? 'visible': 'hidden'\" [disabled]=\"!nextButtonEnabled()\" [attr.aria-label]=\"nextButtonLabel\" (click)=\"nextClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Right\"> --> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"><path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z\"/></svg><!-- </editor-fold> --></span></button></div><div class=\"owl-dt-calendar-main\" cdkMonitorSubtreeFocus [ngSwitch]=\"currentView\"><owl-date-time-month-view *ngSwitchCase=\"'month'\" [pickerMoment]=\"pickerMoment\" [firstDayOfWeek]=\"firstDayOfWeek\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (selectedChange)=\"dateSelected($event)\" (userSelection)=\"userSelected()\"></owl-date-time-month-view><owl-date-time-year-view *ngSwitchCase=\"'year'\" [pickerMoment]=\"pickerMoment\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" (keyboardEnter)=\"focusActiveCell()\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (selectedChange)=\"goToDateInView($event, 'month')\"></owl-date-time-year-view><owl-date-time-multi-year-view *ngSwitchCase=\"'multi-years'\" [pickerMoment]=\"pickerMoment\" [selected]=\"selected\" [selecteds]=\"selecteds\" [selectMode]=\"selectMode\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateFilter]=\"dateFilter\" (keyboardEnter)=\"focusActiveCell()\" (pickerMomentChange)=\"handlePickerMomentChange($event)\" (selectedChange)=\"goToDateInView($event, 'year')\"></owl-date-time-multi-year-view></div>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlCalendarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlCalendarComponent.propDecorators = {
        "dateFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMoment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selecteds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMomentChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "userSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "owlDTCalendarClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-calendar',] },],
    };
    return OwlCalendarComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js ***!
  \*******************************************************************************/
/*! exports provided: OWL_DATETIME_VALUE_ACCESSOR, OwlDateTimeInlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALUE_ACCESSOR", function() { return OWL_DATETIME_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function() { return OwlDateTimeInlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _date_time_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time.class */ "./node_modules/ng-pick-datetime/date-time/date-time.class.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time-picker-container.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");
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







var OWL_DATETIME_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OwlDateTimeInlineComponent; }),
    multi: true
};
var OwlDateTimeInlineComponent = (function (_super) {
    __extends(OwlDateTimeInlineComponent, _super);
    function OwlDateTimeInlineComponent(changeDetector, dateTimeAdapter, dateTimeFormats) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.dateTimeFormats = dateTimeFormats;
        _this._pickerType = 'both';
        _this._disabled = false;
        _this._selectMode = 'single';
        _this._values = [];
        _this._selecteds = [];
        _this.onModelChange = function () {
        };
        _this.onModelTouched = function () {
        };
        return _this;
    }
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerType", {
        get: function () {
            return this._pickerType;
        },
        set: function (val) {
            if (val !== this._pickerType) {
                this._pickerType = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "disabled", {
        get: function () {
            return !!this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (mode) {
            if (mode !== 'single' && mode !== 'range' &&
                mode !== 'rangeFrom' && mode !== 'rangeTo') {
                throw Error('OwlDateTime Error: invalid selectMode value!');
            }
            this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "startAt", {
        get: function () {
            if (this._startAt) {
                return this._startAt;
            }
            if (this.selectMode === 'single') {
                return this.value || null;
            }
            else if (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom') {
                return this.values[0] || null;
            }
            else if (this.selectMode === 'rangeTo') {
                return this.values[1] || null;
            }
            else {
                return null;
            }
        },
        set: function (date) {
            this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "dateTimeFilter", {
        get: function () {
            return this._dateTimeFilter;
        },
        set: function (filter) {
            this._dateTimeFilter = filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "minDateTime", {
        get: function () {
            return this._min || null;
        },
        set: function (value) {
            this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "maxDateTime", {
        get: function () {
            return this._max || null;
        },
        set: function (value) {
            this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._value = value;
            this.selected = value;
            this.container.pickerMoment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (values) {
            var _this = this;
            if (values && values.length > 0) {
                values = values.map(function (v) {
                    v = _this.dateTimeAdapter.deserialize(v);
                    v = _this.getValidDate(v);
                    return v ? _this.dateTimeAdapter.clone(v) : null;
                });
                this._values = values.slice();
                this.selecteds = values.slice();
            }
            else {
                this._values = [];
                this.selecteds = [];
            }
            this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            this._selecteds = values;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerMode", {
        get: function () {
            return 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInSingleMode", {
        get: function () {
            return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInRangeMode", {
        get: function () {
            return this._selectMode === 'range' || this._selectMode === 'rangeFrom'
                || this._selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeInlineComponent.prototype.ngOnInit = function () {
        this.container.picker = this;
    };
    OwlDateTimeInlineComponent.prototype.writeValue = function (value) {
        if (this.isInSingleMode) {
            this.value = value;
        }
        else {
            this.values = value;
        }
    };
    OwlDateTimeInlineComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    OwlDateTimeInlineComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    OwlDateTimeInlineComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    OwlDateTimeInlineComponent.prototype.select = function (date) {
        if (this.disabled) {
            return;
        }
        if (Array.isArray(date)) {
            this.values = date.slice();
        }
        else {
            this.value = date;
        }
        this.onModelChange(date);
        this.onModelTouched();
    };
    OwlDateTimeInlineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time-inline',
                    template: "<owl-date-time-container></owl-date-time-container>",
                    styles: [""],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    providers: [
                        OWL_DATETIME_VALUE_ACCESSOR,
                    ],
                },] },
    ];
    OwlDateTimeInlineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlDateTimeInlineComponent.propDecorators = {
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"],] },],
        "pickerType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startAt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateTimeFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['owlDateTimeFilter',] },],
        "minDateTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['min',] },],
        "maxDateTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['max',] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "values": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return OwlDateTimeInlineComponent;
}(_date_time_class__WEBPACK_IMPORTED_MODULE_3__["OwlDateTime"]));



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js ***!
  \*****************************************************************************************/
/*! exports provided: OwlDateTimeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeContainerComponent", function() { return OwlDateTimeContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.component */ "./node_modules/ng-pick-datetime/date-time/calendar.component.js");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.component */ "./node_modules/ng-pick-datetime/date-time/timer.component.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");







var OwlDateTimeContainerComponent = (function () {
    function OwlDateTimeContainerComponent(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeSelectedIndex = 0;
        this.isAnimating = false;
        this._containerState = 'init';
        this.hidePicker$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.confirmSelected$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "hidePickerStream", {
        get: function () {
            return this.hidePicker$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "confirmSelectedStream", {
        get: function () {
            return this.confirmSelected$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerMoment", {
        get: function () {
            return this._clamPickerMoment;
        },
        set: function (value) {
            if (value) {
                this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
            }
            this.cdRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerType", {
        get: function () {
            return this.picker.pickerType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "cancelLabel", {
        get: function () {
            return this.pickerIntl.cancelBtnLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "setLabel", {
        get: function () {
            return this.pickerIntl.setBtnLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromLabel", {
        get: function () {
            return this.pickerIntl.rangeFromLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toLabel", {
        get: function () {
            return this.pickerIntl.rangeToLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromFormattedValue", {
        get: function () {
            var value = this.picker.selecteds[0];
            return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toFormattedValue", {
        get: function () {
            var value = this.picker.selecteds[1];
            return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "showControlButtons", {
        get: function () {
            return this.picker.pickerMode === 'dialog' ||
                (this.picker.pickerType !== 'calendar' && this.picker.pickerMode !== 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "containerElm", {
        get: function () {
            return this.elmRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTPopupContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'popup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTDialogContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'dialog';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTInlineContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerDisabledClass", {
        get: function () {
            return this.picker.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerId", {
        get: function () {
            return this.picker.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerAnimation", {
        get: function () {
            return this._containerState;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeContainerComponent.prototype.ngOnInit = function () {
    };
    OwlDateTimeContainerComponent.prototype.ngAfterContentInit = function () {
        this.initPicker();
    };
    OwlDateTimeContainerComponent.prototype.ngAfterViewInit = function () {
        this.focusPicker();
    };
    OwlDateTimeContainerComponent.prototype.showPickerViaAnimation = function () {
        this._containerState = 'visible';
        this.cdRef.markForCheck();
    };
    OwlDateTimeContainerComponent.prototype.hidePickerViaAnimation = function () {
        this._containerState = 'hidden';
        this.cdRef.markForCheck();
    };
    OwlDateTimeContainerComponent.prototype.dateSelected = function (date) {
        var result;
        if (this.picker.isInSingleMode) {
            result = this.dateSelectedInSingleMode(date);
            if (result) {
                this.pickerMoment = result;
                this.picker.select(result);
            }
            return;
        }
        if (this.picker.isInRangeMode) {
            result = this.dateSelectedInRangeMode(date);
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex];
                this.picker.select(result);
            }
        }
    };
    OwlDateTimeContainerComponent.prototype.timeSelected = function (time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);
        if (!this.picker.dateTimeChecker(time)) {
            return;
        }
        if (this.picker.isInSingleMode) {
            this.picker.select(time);
            return;
        }
        if (this.picker.isInRangeMode) {
            var selecteds = this.picker.selecteds.slice();
            if ((this.activeSelectedIndex === 0 && selecteds[1] && this.dateTimeAdapter.compare(time, selecteds[1]) === 1) ||
                (this.activeSelectedIndex === 1 && selecteds[0] && this.dateTimeAdapter.compare(time, selecteds[0]) === -1)) {
                selecteds[0] = time;
                selecteds[1] = time;
            }
            else {
                selecteds[this.activeSelectedIndex] = time;
            }
            this.picker.select(selecteds);
        }
    };
    OwlDateTimeContainerComponent.prototype.onAnimationStart = function (event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    };
    OwlDateTimeContainerComponent.prototype.onAnimationDone = function (event) {
        var _this = this;
        var toState = event.toState;
        if (toState === 'visible' || toState === 'hidden') {
            Promise.resolve().then(function () {
                _this.animationStateChanged.emit(event);
                _this.isAnimating = false;
            });
        }
    };
    OwlDateTimeContainerComponent.prototype.onCancelClicked = function (event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
    };
    OwlDateTimeContainerComponent.prototype.onSetClicked = function (event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            this.hidePicker$.next(null);
            event.preventDefault();
            return;
        }
        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
    };
    OwlDateTimeContainerComponent.prototype.toggleRangeActiveIndex = function () {
        if (this.picker.selectMode === 'range') {
            this.activeSelectedIndex =
                this.activeSelectedIndex === 0 ? 1 : 0;
            var selected = this.picker.selecteds[this.activeSelectedIndex];
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected);
            }
        }
        return;
    };
    OwlDateTimeContainerComponent.prototype.initPicker = function () {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
    };
    OwlDateTimeContainerComponent.prototype.dateSelectedInSingleMode = function (date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
            return null;
        }
        return this.updateAndCheckCalendarDate(date);
    };
    OwlDateTimeContainerComponent.prototype.dateSelectedInRangeMode = function (date) {
        var from = this.picker.selecteds[0];
        var to = this.picker.selecteds[1];
        var result = this.updateAndCheckCalendarDate(date);
        if (!result) {
            return null;
        }
        if (this.picker.selectMode === 'range') {
            if (this.picker.selecteds && this.picker.selecteds.length && !to && from &&
                this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
                to = result;
                this.activeSelectedIndex = 1;
            }
            else {
                from = result;
                to = null;
                this.activeSelectedIndex = 0;
            }
        }
        else if (this.picker.selectMode === 'rangeFrom') {
            from = result;
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = null;
            }
        }
        else if (this.picker.selectMode === 'rangeTo') {
            to = result;
            if (from && this.dateTimeAdapter.compare(from, to) > 0) {
                from = null;
            }
        }
        return [from, to];
    };
    OwlDateTimeContainerComponent.prototype.updateAndCheckCalendarDate = function (date) {
        var result;
        if (this.picker.pickerType === 'both') {
            result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
            result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
        }
        else {
            result = this.dateTimeAdapter.clone(date);
        }
        return this.picker.dateTimeChecker(result) ? result : null;
    };
    OwlDateTimeContainerComponent.prototype.focusPicker = function () {
        if (this.picker.pickerMode === 'inline') {
            return;
        }
        if (this.calendar) {
            this.calendar.focusActiveCell();
        }
        else if (this.timer) {
            this.timer.focus();
        }
    };
    OwlDateTimeContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    exportAs: 'owlDateTimeContainer',
                    selector: 'owl-date-time-container',
                    template: "<div [cdkTrapFocus]=\"picker.pickerMode !== 'inline'\" class=\"owl-dt-container-inner\"><owl-date-time-calendar *ngIf=\"pickerType === 'both' || pickerType === 'calendar'\" class=\"owl-dt-container-row\" [firstDayOfWeek]=\"picker.firstDayOfWeek\" [(pickerMoment)]=\"pickerMoment\" [selected]=\"picker.selected\" [selecteds]=\"picker.selecteds\" [selectMode]=\"picker.selectMode\" [minDate]=\"picker.minDateTime\" [maxDate]=\"picker.maxDateTime\" [dateFilter]=\"picker.dateTimeFilter\" [startView]=\"picker.startView\" (selectedChange)=\"dateSelected($event)\"></owl-date-time-calendar><owl-date-time-timer *ngIf=\"pickerType === 'both' || pickerType === 'timer'\" class=\"owl-dt-container-row\" [pickerMoment]=\"pickerMoment\" [minDateTime]=\"picker.minDateTime\" [maxDateTime]=\"picker.maxDateTime\" [showSecondsTimer]=\"picker.showSecondsTimer\" [hour12Timer]=\"picker.hour12Timer\" [stepHour]=\"picker.stepHour\" [stepMinute]=\"picker.stepMinute\" [stepSecond]=\"picker.stepSecond\" (selectedChange)=\"timeSelected($event)\"></owl-date-time-timer><div *ngIf=\"picker.isInRangeMode\" role=\"radiogroup\" class=\"owl-dt-container-info owl-dt-container-row\" (click)=\"toggleRangeActiveIndex()\"><div role=\"radio\" [attr.aria-checked]=\"activeSelectedIndex === 0\" class=\"owl-dt-container-range owl-dt-container-from\" [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 0}\"><span class=\"owl-dt-container-info-label\">{{fromLabel}}:</span> <span class=\"owl-dt-container-info-value\">{{fromFormattedValue}}</span></div><div role=\"radio\" [attr.aria-checked]=\"activeSelectedIndex === 1\" class=\"owl-dt-container-range owl-dt-container-to\" [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 1}\"><span class=\"owl-dt-container-info-label\">{{toLabel}}:</span> <span class=\"owl-dt-container-info-value\">{{toFormattedValue}}</span></div></div><div *ngIf=\"showControlButtons\" class=\"owl-dt-container-buttons owl-dt-container-row\"><button class=\"owl-dt-control-button owl-dt-container-control-button\" type=\"button\" tabindex=\"0\" (click)=\"onCancelClicked($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\">{{cancelLabel}}</span></button> <button class=\"owl-dt-control-button owl-dt-container-control-button\" type=\"button\" tabindex=\"0\" (click)=\"onSetClicked($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\">{{setLabel}}</span></button></div></div>",
                    styles: [""],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('containerAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in')]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-out'))
                        ])
                    ]
                },] },
    ];
    OwlDateTimeContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_2__["OwlDateTimeIntl"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_5__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    OwlDateTimeContainerComponent.propDecorators = {
        "calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_calendar_component__WEBPACK_IMPORTED_MODULE_3__["OwlCalendarComponent"],] },],
        "timer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_timer_component__WEBPACK_IMPORTED_MODULE_4__["OwlTimerComponent"],] },],
        "owlDTContainerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-container',] },],
        "owlDTPopupContainerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-popup-container',] },],
        "owlDTDialogContainerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-dialog-container',] },],
        "owlDTInlineContainerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-inline-container',] },],
        "owlDTContainerDisabledClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-container-disabled',] },],
        "owlDTContainerId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] },],
        "owlDTContainerAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['@containerAnimation',] },],
        "onAnimationStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['@containerAnimation.start', ['$event'],] },],
        "onAnimationDone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['@containerAnimation.done', ['$event'],] },],
    };
    return OwlDateTimeContainerComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js ***!
  \*************************************************************************************/
/*! exports provided: OWL_DATETIME_VALUE_ACCESSOR, OWL_DATETIME_VALIDATORS, OwlDateTimeInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALUE_ACCESSOR", function() { return OWL_DATETIME_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATETIME_VALIDATORS", function() { return OWL_DATETIME_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInputDirective", function() { return OwlDateTimeInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time-picker.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");







var OWL_DATETIME_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OwlDateTimeInputDirective; }),
    multi: true
};
var OWL_DATETIME_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OwlDateTimeInputDirective; }),
    multi: true
};
var OwlDateTimeInputDirective = (function () {
    function OwlDateTimeInputDirective(elmRef, renderer, dateTimeAdapter, dateTimeFormats) {
        var _this = this;
        this.elmRef = elmRef;
        this.renderer = renderer;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._selectMode = 'single';
        this.rangeSeparator = '~';
        this._values = [];
        this.dateTimeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateTimeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtPickerSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
        this.localeSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
        this.lastValueValid = true;
        this.onModelChange = function () {
        };
        this.onModelTouched = function () {
        };
        this.validatorOnChange = function () {
        };
        this.parseValidator = function () {
            return _this.lastValueValid ?
                null : { 'owlDateTimeParse': { 'text': _this.elmRef.nativeElement.value } };
        };
        this.minValidator = function (control) {
            if (_this.isInSingleMode) {
                var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
                return (!_this.min || !controlValue ||
                    _this.dateTimeAdapter.compare(_this.min, controlValue) <= 0) ?
                    null : { 'owlDateTimeMin': { 'min': _this.min, 'actual': controlValue } };
            }
            else if (_this.isInRangeMode && control.value) {
                var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
                var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
                return (!_this.min || !controlValueFrom || !controlValueTo ||
                    _this.dateTimeAdapter.compare(_this.min, controlValueFrom) <= 0) ?
                    null : { 'owlDateTimeMin': { 'min': _this.min, 'actual': [controlValueFrom, controlValueTo] } };
            }
        };
        this.maxValidator = function (control) {
            if (_this.isInSingleMode) {
                var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
                return (!_this.max || !controlValue ||
                    _this.dateTimeAdapter.compare(_this.max, controlValue) >= 0) ?
                    null : { 'owlDateTimeMax': { 'max': _this.max, 'actual': controlValue } };
            }
            else if (_this.isInRangeMode && control.value) {
                var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
                var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
                return (!_this.max || !controlValueFrom || !controlValueTo ||
                    _this.dateTimeAdapter.compare(_this.max, controlValueTo) >= 0) ?
                    null : { 'owlDateTimeMax': { 'max': _this.max, 'actual': [controlValueFrom, controlValueTo] } };
            }
        };
        this.filterValidator = function (control) {
            var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
            return !_this._dateTimeFilter || !controlValue || _this._dateTimeFilter(controlValue) ?
                null : { 'owlDateTimeFilter': true };
        };
        this.rangeValidator = function (control) {
            if (_this.isInSingleMode || !control.value) {
                return null;
            }
            var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
            var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
            return !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0 ?
                null : { 'owlDateTimeRange': true };
        };
        this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator, this.rangeValidator]);
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this.dateTimeAdapter) {
            throw Error("OwlDateTimePicker: No provider found for DateTimePicker. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        if (!this.dateTimeFormats) {
            throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTime", {
        set: function (value) {
            this.registerDateTimePicker(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeFilter", {
        set: function (filter) {
            this._dateTimeFilter = filter;
            this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "dateTimeFilter", {
        get: function () {
            return this._dateTimeFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (this._disabled !== value) {
                this._disabled = value;
                this.disabledChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (mode) {
            if (mode !== 'single' && mode !== 'range' &&
                mode !== 'rangeFrom' && mode !== 'rangeTo') {
                throw Error('OwlDateTime Error: invalid selectMode value!');
            }
            this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this.lastValueValid = !value || this.dateTimeAdapter.isValid(value);
            value = this.getValidDate(value);
            var oldDate = this.value;
            this._value = value;
            this.renderer.setProperty(this.elmRef.nativeElement, 'value', value ? this.dateTimeAdapter.format(value, this.dtPicker.formatString) : '');
            if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
                this.valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (values) {
            var _this = this;
            if (values && values.length > 0) {
                this._values = values.map(function (v) {
                    v = _this.dateTimeAdapter.deserialize(v);
                    return _this.getValidDate(v);
                });
                var from = this._values[0];
                var to = this._values[1];
                this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
                var fromFormatted = from ? this.dateTimeAdapter.format(from, this.dtPicker.formatString) : '';
                var toFormatted = to ? this.dateTimeAdapter.format(to, this.dtPicker.formatString) : '';
                if (!fromFormatted && !toFormatted) {
                    this.renderer.setProperty(this.elmRef.nativeElement, 'value', null);
                }
                else {
                    if (this._selectMode === 'range') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted + ' ' + this.rangeSeparator + ' ' + toFormatted);
                    }
                    else if (this._selectMode === 'rangeFrom') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted);
                    }
                    else if (this._selectMode === 'rangeTo') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', toFormatted);
                    }
                }
            }
            else {
                this._values = [];
                this.renderer.setProperty(this.elmRef.nativeElement, 'value', '');
            }
            this.valueChange.emit(this._values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "elementRef", {
        get: function () {
            return this.elmRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "isInSingleMode", {
        get: function () {
            return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "isInRangeMode", {
        get: function () {
            return this._selectMode === 'range' || this._selectMode === 'rangeFrom'
                || this._selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaHaspopup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputAriaOwns", {
        get: function () {
            return (this.dtPicker.opened && this.dtPicker.id) || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "minIso8601", {
        get: function () {
            return this.min ? this.dateTimeAdapter.toIso8601(this.min) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "maxIso8601", {
        get: function () {
            return this.max ? this.dateTimeAdapter.toIso8601(this.max) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInputDirective.prototype, "owlDateTimeInputDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeInputDirective.prototype.ngOnInit = function () {
        if (!this.dtPicker) {
            throw Error("OwlDateTimePicker: the picker input doesn't have any associated owl-date-time component");
        }
    };
    OwlDateTimeInputDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.dtPickerSub = this.dtPicker.confirmSelectedChange.subscribe(function (selecteds) {
            if (Array.isArray(selecteds)) {
                _this.values = selecteds;
            }
            else {
                _this.value = selecteds;
            }
            _this.onModelChange(selecteds);
            _this.onModelTouched();
            _this.dateTimeChange.emit({ source: _this, value: selecteds, input: _this.elmRef.nativeElement });
        });
    };
    OwlDateTimeInputDirective.prototype.ngOnDestroy = function () {
        this.dtPickerSub.unsubscribe();
        this.localeSub.unsubscribe();
        this.valueChange.complete();
        this.disabledChange.complete();
    };
    OwlDateTimeInputDirective.prototype.writeValue = function (value) {
        if (this.isInSingleMode) {
            this.value = value;
        }
        else {
            this.values = value;
        }
    };
    OwlDateTimeInputDirective.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    OwlDateTimeInputDirective.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    OwlDateTimeInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    OwlDateTimeInputDirective.prototype.validate = function (c) {
        return this.validator ? this.validator(c) : null;
    };
    OwlDateTimeInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this.validatorOnChange = fn;
    };
    OwlDateTimeInputDirective.prototype.handleKeydownOnHost = function (event) {
        if (event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
            this.dtPicker.open();
            event.preventDefault();
        }
    };
    OwlDateTimeInputDirective.prototype.handleBlurOnHost = function (event) {
        this.onModelTouched();
    };
    OwlDateTimeInputDirective.prototype.handleInputOnHost = function (event) {
        var value = event.target.value;
        if (this._selectMode === 'single') {
            this.changeInputInSingleMode(value);
        }
        else if (this._selectMode === 'range') {
            this.changeInputInRangeMode(value);
        }
        else {
            this.changeInputInRangeFromToMode(value);
        }
    };
    OwlDateTimeInputDirective.prototype.handleChangeOnHost = function (event) {
        var v;
        if (this.isInSingleMode) {
            v = this.value;
        }
        else if (this.isInRangeMode) {
            v = this.values;
        }
        this.dateTimeChange.emit({
            source: this,
            value: v,
            input: this.elmRef.nativeElement
        });
    };
    OwlDateTimeInputDirective.prototype.registerDateTimePicker = function (picker) {
        if (picker) {
            this.dtPicker = picker;
            this.dtPicker.registerInput(this);
        }
    };
    OwlDateTimeInputDirective.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlDateTimeInputDirective.prototype.convertTimeStringToDateTimeString = function (timeString, dateTime) {
        if (timeString) {
            var v = dateTime || this.dateTimeAdapter.now();
            var dateString = this.dateTimeAdapter.format(v, this.dateTimeFormats.datePickerInput);
            return dateString + ' ' + timeString;
        }
        else {
            return null;
        }
    };
    OwlDateTimeInputDirective.prototype.changeInputInSingleMode = function (inputValue) {
        var value = inputValue;
        if (this.dtPicker.pickerType === 'timer') {
            value = this.convertTimeStringToDateTimeString(value, this.value);
        }
        var result = this.dateTimeAdapter.parse(value, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);
        this._value = result;
        this.valueChange.emit(result);
        this.onModelChange(result);
        this.dateTimeInput.emit({ source: this, value: result, input: this.elmRef.nativeElement });
    };
    OwlDateTimeInputDirective.prototype.changeInputInRangeFromToMode = function (inputValue) {
        var originalValue = this._selectMode === 'rangeFrom' ? this._values[0] : this._values[1];
        if (this.dtPicker.pickerType === 'timer') {
            inputValue = this.convertTimeStringToDateTimeString(inputValue, originalValue);
        }
        var result = this.dateTimeAdapter.parse(inputValue, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);
        this._values = this._selectMode === 'rangeFrom' ? [result, this._values[1]] : [this._values[0], result];
        this.valueChange.emit(this._values);
        this.onModelChange(this._values);
        this.dateTimeInput.emit({ source: this, value: this._values, input: this.elmRef.nativeElement });
    };
    OwlDateTimeInputDirective.prototype.changeInputInRangeMode = function (inputValue) {
        var selecteds = inputValue.split(this.rangeSeparator);
        var fromString = selecteds[0];
        var toString = selecteds[1];
        if (this.dtPicker.pickerType === 'timer') {
            fromString = this.convertTimeStringToDateTimeString(fromString, this.values[0]);
            toString = this.convertTimeStringToDateTimeString(toString, this.values[1]);
        }
        var from = this.dateTimeAdapter.parse(fromString, this.dateTimeFormats.parseInput);
        var to = this.dateTimeAdapter.parse(toString, this.dateTimeFormats.parseInput);
        this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
        from = this.getValidDate(from);
        to = this.getValidDate(to);
        this._values = [from, to];
        this.valueChange.emit(this._values);
        this.onModelChange(this._values);
        this.dateTimeInput.emit({ source: this, value: this._values, input: this.elmRef.nativeElement });
    };
    OwlDateTimeInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[owlDateTime]',
                    exportAs: 'owlDateTimeInput',
                    providers: [
                        OWL_DATETIME_VALUE_ACCESSOR,
                        OWL_DATETIME_VALIDATORS,
                    ],
                },] },
    ];
    OwlDateTimeInputDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_5__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlDateTimeInputDirective.propDecorators = {
        "owlDateTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "owlDateTimeFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "min": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rangeSeparator": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "values": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateTimeChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dateTimeInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "owlDateTimeInputAriaHaspopup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-haspopup',] },],
        "owlDateTimeInputAriaOwns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-owns',] },],
        "minIso8601": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.min',] },],
        "maxIso8601": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] },],
        "owlDateTimeInputDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['disabled',] },],
        "handleKeydownOnHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
        "handleBlurOnHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
        "handleInputOnHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] },],
        "handleChangeOnHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change', ['$event'],] },],
    };
    return OwlDateTimeInputDirective;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js ***!
  \**********************************************************************************/
/*! exports provided: OwlDateTimeIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function() { return OwlDateTimeIntl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var OwlDateTimeIntl = (function () {
    function OwlDateTimeIntl() {
        this.upSecondLabel = 'Add a second';
        this.downSecondLabel = 'Minus a second';
        this.upMinuteLabel = 'Add a minute';
        this.downMinuteLabel = 'Minus a minute';
        this.upHourLabel = 'Add a hour';
        this.downHourLabel = 'Minus a hour';
        this.prevMonthLabel = 'Previous month';
        this.nextMonthLabel = 'Next month';
        this.prevYearLabel = 'Previous year';
        this.nextYearLabel = 'Next year';
        this.prevMultiYearLabel = 'Previous 21 years';
        this.nextMultiYearLabel = 'Next 21 years';
        this.switchToMonthViewLabel = 'Change to month view';
        this.switchToMultiYearViewLabel = 'Choose month and year';
        this.cancelBtnLabel = 'Cancel';
        this.setBtnLabel = 'Set';
        this.rangeFromLabel = 'From';
        this.rangeToLabel = 'To';
        this.hour12AMLabel = 'AM';
        this.hour12PMLabel = 'PM';
    }
    OwlDateTimeIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    OwlDateTimeIntl.ctorParameters = function () { return []; };
    return OwlDateTimeIntl;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js ***!
  \***************************************************************************************/
/*! exports provided: OwlDateTimeTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeTriggerDirective", function() { return OwlDateTimeTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-picker.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");





var OwlDateTimeTriggerDirective = (function () {
    function OwlDateTimeTriggerDirective(changeDetector) {
        this.changeDetector = changeDetector;
        this.stateChanges = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
    }
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "owlDTTriggerDisabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeTriggerDirective.prototype.ngOnInit = function () {
    };
    OwlDateTimeTriggerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.datepicker) {
            this.watchStateChanges();
        }
    };
    OwlDateTimeTriggerDirective.prototype.ngAfterContentInit = function () {
        this.watchStateChanges();
    };
    OwlDateTimeTriggerDirective.prototype.ngOnDestroy = function () {
        this.stateChanges.unsubscribe();
    };
    OwlDateTimeTriggerDirective.prototype.handleClickOnHost = function (event) {
        if (this.dtPicker) {
            this.dtPicker.open();
            event.stopPropagation();
        }
    };
    OwlDateTimeTriggerDirective.prototype.watchStateChanges = function () {
        var _this = this;
        this.stateChanges.unsubscribe();
        var inputDisabled = this.dtPicker && this.dtPicker.dtInput ?
            this.dtPicker.dtInput.disabledChange : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])();
        var pickerDisabled = this.dtPicker ?
            this.dtPicker.disabledChange : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])();
        this.stateChanges = Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(pickerDisabled, inputDisabled)
            .subscribe(function () {
            _this.changeDetector.markForCheck();
        });
    };
    OwlDateTimeTriggerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[owlDateTimeTrigger]',
                },] },
    ];
    OwlDateTimeTriggerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    OwlDateTimeTriggerDirective.propDecorators = {
        "dtPicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['owlDateTimeTrigger',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "owlDTTriggerDisabledClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-trigger-disabled',] },],
        "handleClickOnHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return OwlDateTimeTriggerDirective;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js ***!
  \*******************************************************************************/
/*! exports provided: OWL_DTPICKER_SCROLL_STRATEGY, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, OwlDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY", function() { return OWL_DTPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER", function() { return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function() { return OwlDateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time-picker-container.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony import */ var _date_time_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-time.class */ "./node_modules/ng-pick-datetime/date-time/date-time.class.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog */ "./node_modules/ng-pick-datetime/dialog/index.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators/take */ "./node_modules/rxjs-compat/_esm5/operators/take.js");
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















var OWL_DTPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dtpicker-scroll-strategy');
function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
var OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DTPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]],
    useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
var OwlDateTimeComponent = (function (_super) {
    __extends(OwlDateTimeComponent, _super);
    function OwlDateTimeComponent(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, scrollStrategy, dateTimeFormats, document) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
        _this.overlay = overlay;
        _this.viewContainerRef = viewContainerRef;
        _this.dialogService = dialogService;
        _this.ngZone = ngZone;
        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.scrollStrategy = scrollStrategy;
        _this.dateTimeFormats = dateTimeFormats;
        _this.document = document;
        _this._pickerType = 'both';
        _this._pickerMode = 'popup';
        _this._disabled = false;
        _this.afterPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.afterPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.confirmSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dtInputSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_11__["Subscription"].EMPTY;
        _this.focusedElementBeforeOpen = null;
        _this._selecteds = [];
        return _this;
    }
    Object.defineProperty(OwlDateTimeComponent.prototype, "startAt", {
        get: function () {
            if (this._startAt) {
                return this._startAt;
            }
            if (this._dtInput) {
                if (this._dtInput.selectMode === 'single') {
                    return this._dtInput.value || null;
                }
                else if (this._dtInput.selectMode === 'range' ||
                    this._dtInput.selectMode === 'rangeFrom') {
                    return this._dtInput.values[0] || null;
                }
                else if (this._dtInput.selectMode === 'rangeTo') {
                    return this._dtInput.values[1] || null;
                }
            }
            else {
                return null;
            }
        },
        set: function (date) {
            this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "pickerType", {
        get: function () {
            return this._pickerType;
        },
        set: function (val) {
            if (val !== this._pickerType) {
                this._pickerType = val;
                if (this._dtInput.isInSingleMode) {
                    this._dtInput.value = this._dtInput.value;
                }
                else {
                    this._dtInput.values = this._dtInput.values;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "pickerMode", {
        get: function () {
            return this._pickerMode;
        },
        set: function (mode) {
            if (mode === 'popup') {
                this._pickerMode = mode;
            }
            else {
                this._pickerMode = 'dialog';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined && this._dtInput ?
                this._dtInput.disabled : !!this._disabled;
        },
        set: function (value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            if (value !== this._disabled) {
                this._disabled = value;
                this.disabledChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "dtInput", {
        get: function () {
            return this._dtInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            this._selecteds = values;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "minDateTime", {
        get: function () {
            return this._dtInput && this._dtInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "maxDateTime", {
        get: function () {
            return this._dtInput && this._dtInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "dateTimeFilter", {
        get: function () {
            return this._dtInput && this._dtInput.dateTimeFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "selectMode", {
        get: function () {
            return this._dtInput.selectMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "isInSingleMode", {
        get: function () {
            return this._dtInput.isInSingleMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeComponent.prototype, "isInRangeMode", {
        get: function () {
            return this._dtInput.isInRangeMode;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeComponent.prototype.ngOnInit = function () {
    };
    OwlDateTimeComponent.prototype.ngOnDestroy = function () {
        this.clean();
        this.dtInputSub.unsubscribe();
        this.disabledChange.complete();
        if (this.popupRef) {
            this.popupRef.dispose();
        }
    };
    OwlDateTimeComponent.prototype.registerInput = function (input) {
        var _this = this;
        if (this._dtInput) {
            throw Error('A Owl DateTimePicker can only be associated with a single input.');
        }
        this._dtInput = input;
        this.dtInputSub = this._dtInput.valueChange.subscribe(function (value) {
            if (Array.isArray(value)) {
                _this.selecteds = value;
            }
            else {
                _this.selected = value;
            }
        });
    };
    OwlDateTimeComponent.prototype.open = function () {
        var _this = this;
        if (this.opened || this.disabled) {
            return;
        }
        if (!this._dtInput) {
            throw Error('Attempted to open an DateTimePicker with no associated input.');
        }
        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement;
        }
        if (this.isInSingleMode) {
            this.selected = this._dtInput.value;
        }
        else if (this.isInRangeMode) {
            this.selecteds = this._dtInput.values;
        }
        this.pickerMode === 'dialog' ?
            this.openAsDialog() :
            this.openAsPopup();
        this.pickerContainer.picker = this;
        this.hidePickerStreamSub = this.pickerContainer.hidePickerStream
            .subscribe(function () {
            _this.close();
        });
        this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream
            .subscribe(function (event) {
            _this.confirmSelect(event);
        });
        this.opened = true;
    };
    OwlDateTimeComponent.prototype.select = function (date) {
        if (Array.isArray(date)) {
            this.selecteds = date.slice();
        }
        else {
            this.selected = date;
        }
        if (this.pickerMode !== 'dialog' &&
            this.pickerType === 'calendar' &&
            (this.isInSingleMode || (this.isInRangeMode && this.selecteds[0] && this.selecteds[1]))) {
            this.confirmSelect();
        }
    };
    OwlDateTimeComponent.prototype.close = function (event) {
        if (!this.opened) {
            return;
        }
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        if (this.popupRef) {
            this.pickerContainer.hidePickerViaAnimation();
        }
    };
    OwlDateTimeComponent.prototype.confirmSelect = function (event) {
        if (this.isInSingleMode) {
            var selected = this.selected || this.startAt || this.dateTimeAdapter.now();
            this.confirmSelectedChange.emit(selected);
        }
        else if (this.isInRangeMode) {
            this.confirmSelectedChange.emit(this.selecteds);
        }
        this.close(event);
        return;
    };
    OwlDateTimeComponent.prototype.openAsDialog = function () {
        var _this = this;
        this.dialogRef = this.dialogService.open(_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"], {
            autoFocus: false,
            paneClass: 'owl-dt-dialog',
            viewContainerRef: this.viewContainerRef,
        });
        this.pickerContainer = this.dialogRef.componentInstance;
        this.dialogRef.afterOpen().subscribe(function () { return _this.afterPickerOpen.emit(null); });
        this.dialogRef.afterClosed().subscribe(function () { return _this.clean(); });
    };
    OwlDateTimeComponent.prototype.openAsPopup = function () {
        var _this = this;
        if (!this.pickerContainerPortal) {
            this.pickerContainerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"], this.viewContainerRef);
        }
        if (!this.popupRef) {
            this.createPopup();
        }
        if (!this.popupRef.hasAttached()) {
            var componentRef = this.popupRef.attach(this.pickerContainerPortal);
            this.pickerContainer = componentRef.instance;
            this.pickerContainer.showPickerViaAnimation();
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
                _this.popupRef.updatePosition();
            });
        }
        Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef.keydownEvents().pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) { return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"]; }))).subscribe(function () { return _this.close(); });
        this.pickerContainer.animationStateChanged.subscribe(function (event) {
            if (event.phaseName === 'done' && event.toState === 'visible') {
                _this.afterPickerOpen.emit(null);
            }
            if (event.phaseName === 'done' && event.toState === 'hidden') {
                _this.clean();
            }
        });
    };
    OwlDateTimeComponent.prototype.createPopup = function () {
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.scrollStrategy(),
            panelClass: 'owl-dt-popup',
        });
        this.popupRef = this.overlay.create(overlayConfig);
    };
    OwlDateTimeComponent.prototype.createPopupPositionStrategy = function () {
        var fallbackOffset = 0;
        return this.overlay.position()
            .connectedTo(this._dtInput.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, undefined, fallbackOffset)
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }, undefined, fallbackOffset)
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, undefined, 181)
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, undefined, 362);
    };
    OwlDateTimeComponent.prototype.clean = function () {
        var _this = this;
        if (!this.opened) {
            return;
        }
        if (this.popupRef && this.popupRef.hasAttached()) {
            this.popupRef.detach();
        }
        if (this.pickerContainerPortal && this.pickerContainerPortal.isAttached) {
            this.pickerContainerPortal.detach();
        }
        if (this.hidePickerStreamSub) {
            this.hidePickerStreamSub.unsubscribe();
            this.hidePickerStreamSub = null;
        }
        if (this.confirmSelectedStreamSub) {
            this.confirmSelectedStreamSub.unsubscribe();
            this.confirmSelectedStreamSub = null;
        }
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
        var completeClose = function () {
            if (_this.opened) {
                _this.opened = false;
                _this.afterPickerClosed.emit(null);
                _this.focusedElementBeforeOpen = null;
            }
        };
        if (this.focusedElementBeforeOpen &&
            typeof this.focusedElementBeforeOpen.focus === 'function') {
            this.focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    OwlDateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-date-time',
                    exportAs: 'owlDateTime',
                    template: "",
                    styles: [""],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    OwlDateTimeComponent.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _dialog__WEBPACK_IMPORTED_MODULE_10__["OwlDialogService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_7__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [OWL_DTPICKER_SCROLL_STRATEGY,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_8__["OWL_DATE_TIME_FORMATS"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
    ]; };
    OwlDateTimeComponent.propDecorators = {
        "startAt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pickerMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "afterPickerClosed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "afterPickerOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return OwlDateTimeComponent;
}(_date_time_class__WEBPACK_IMPORTED_MODULE_9__["OwlDateTime"]));



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time.class.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time.class.js ***!
  \********************************************************************/
/*! exports provided: OwlDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTime", function() { return OwlDateTime; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");




var nextUniqueId = 0;
var OwlDateTime = (function () {
    function OwlDateTime(dateTimeAdapter, dateTimeFormats) {
        var _this = this;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this._showSecondsTimer = false;
        this._hour12Timer = false;
        this.startView = 'month';
        this._stepHour = 1;
        this._stepMinute = 1;
        this._stepSecond = 1;
        this._firstDayOfWeek = 0;
        this.dateTimeChecker = function (dateTime) {
            return !!dateTime &&
                (!_this.dateTimeFilter || _this.dateTimeFilter(dateTime)) &&
                (!_this.minDateTime || _this.dateTimeAdapter.compare(dateTime, _this.minDateTime) >= 0) &&
                (!_this.maxDateTime || _this.dateTimeAdapter.compare(dateTime, _this.maxDateTime) <= 0);
        };
        if (!this.dateTimeAdapter) {
            throw Error("OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        if (!this.dateTimeFormats) {
            throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        this._id = "owl-dt-picker-" + nextUniqueId++;
    }
    Object.defineProperty(OwlDateTime.prototype, "showSecondsTimer", {
        get: function () {
            return this._showSecondsTimer;
        },
        set: function (val) {
            this._showSecondsTimer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "hour12Timer", {
        get: function () {
            return this._hour12Timer;
        },
        set: function (val) {
            this._hour12Timer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepHour", {
        get: function () {
            return this._stepHour;
        },
        set: function (val) {
            this._stepHour = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepMinute", {
        get: function () {
            return this._stepMinute;
        },
        set: function (val) {
            this._stepMinute = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepSecond", {
        get: function () {
            return this._stepSecond;
        },
        set: function (val) {
            this._stepSecond = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "firstDayOfWeek", {
        get: function () {
            return this._firstDayOfWeek;
        },
        set: function (value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value, 0);
            if (value > 6 || value < 0) {
                this._firstDayOfWeek = 0;
            }
            else {
                this._firstDayOfWeek = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "formatString", {
        get: function () {
            return this.pickerType === 'both' ? this.dateTimeFormats.fullPickerInput :
                this.pickerType === 'calendar' ? this.dateTimeFormats.datePickerInput :
                    this.dateTimeFormats.timePickerInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "disabled", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTime.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlDateTime.ctorParameters = function () { return [
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"],] },] },
    ]; };
    OwlDateTime.propDecorators = {
        "showSecondsTimer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hour12Timer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepHour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepMinute": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepSecond": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return OwlDateTime;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/date-time.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/date-time.module.js ***!
  \*********************************************************************/
/*! exports provided: OwlDateTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function() { return OwlDateTimeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-time-picker-trigger.directive */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js");
/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-time-picker.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
/* harmony import */ var _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time-picker-container.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js");
/* harmony import */ var _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-time-picker-input.directive */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js");
/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
/* harmony import */ var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-month-view.component */ "./node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js");
/* harmony import */ var _calendar_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-body.component */ "./node_modules/ng-pick-datetime/date-time/calendar-body.component.js");
/* harmony import */ var _calendar_year_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-year-view.component */ "./node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js");
/* harmony import */ var _calendar_multi_year_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-multi-year-view.component */ "./node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js");
/* harmony import */ var _timer_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timer-box.component */ "./node_modules/ng-pick-datetime/date-time/timer-box.component.js");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timer.component */ "./node_modules/ng-pick-datetime/date-time/timer.component.js");
/* harmony import */ var _numberedFixLen_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./numberedFixLen.pipe */ "./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar.component */ "./node_modules/ng-pick-datetime/date-time/calendar.component.js");
/* harmony import */ var _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./date-time-inline.component */ "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialog */ "./node_modules/ng-pick-datetime/dialog/index.js");



















var OwlDateTimeModule = (function () {
    function OwlDateTimeModule() {
    }
    OwlDateTimeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _dialog__WEBPACK_IMPORTED_MODULE_18__["OwlDialogModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"]],
                    exports: [
                        _date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeTriggerDirective"],
                        _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeInputDirective"],
                        _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeComponent"],
                        _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__["OwlDateTimeInlineComponent"],
                    ],
                    declarations: [
                        _date_time_picker_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeTriggerDirective"],
                        _date_time_picker_input_directive__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeInputDirective"],
                        _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeComponent"],
                        _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"],
                        _calendar_multi_year_view_component__WEBPACK_IMPORTED_MODULE_12__["OwlMultiYearViewComponent"],
                        _calendar_year_view_component__WEBPACK_IMPORTED_MODULE_11__["OwlYearViewComponent"],
                        _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__["OwlMonthViewComponent"],
                        _timer_component__WEBPACK_IMPORTED_MODULE_14__["OwlTimerComponent"],
                        _timer_box_component__WEBPACK_IMPORTED_MODULE_13__["OwlTimerBoxComponent"],
                        _calendar_component__WEBPACK_IMPORTED_MODULE_16__["OwlCalendarComponent"],
                        _calendar_body_component__WEBPACK_IMPORTED_MODULE_10__["OwlCalendarBodyComponent"],
                        _numberedFixLen_pipe__WEBPACK_IMPORTED_MODULE_15__["NumberFixedLenPipe"],
                        _date_time_inline_component__WEBPACK_IMPORTED_MODULE_17__["OwlDateTimeInlineComponent"],
                    ],
                    providers: [
                        _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeIntl"],
                        _date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER"],
                    ],
                    entryComponents: [
                        _date_time_picker_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeContainerComponent"],
                    ]
                },] },
    ];
    OwlDateTimeModule.ctorParameters = function () { return []; };
    return OwlDateTimeModule;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/index.js ***!
  \**********************************************************/
/*! exports provided: OwlDateTimeModule, OwlDateTimeIntl, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE_PROVIDER, OWL_DATE_TIME_LOCALE, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeInlineComponent, OwlDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_time_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time.module */ "./node_modules/ng-pick-datetime/date-time/date-time.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function() { return _date_time_module__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeModule"]; });

/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function() { return _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"]; });

/* harmony import */ var _adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/native-date-time.module */ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function() { return _adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_2__["OwlNativeDateTimeModule"]; });

/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function() { return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_LOCALE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function() { return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function() { return _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["DateTimeAdapter"]; });

/* harmony import */ var _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapter/date-time-format.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function() { return _adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_4__["OWL_DATE_TIME_FORMATS"]; });

/* harmony import */ var _date_time_inline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-time-inline.component */ "./node_modules/ng-pick-datetime/date-time/date-time-inline.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function() { return _date_time_inline_component__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeInlineComponent"]; });

/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time-picker.component */ "./node_modules/ng-pick-datetime/date-time/date-time-picker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function() { return _date_time_picker_component__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeComponent"]; });










/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js ***!
  \************************************************************************/
/*! exports provided: NumberFixedLenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFixedLenPipe", function() { return NumberFixedLenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NumberFixedLenPipe = (function () {
    function NumberFixedLenPipe() {
    }
    NumberFixedLenPipe.prototype.transform = function (num, len) {
        var number = Math.floor(num);
        var length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        var numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    };
    NumberFixedLenPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'numberFixedLen'
                },] },
    ];
    NumberFixedLenPipe.ctorParameters = function () { return []; };
    return NumberFixedLenPipe;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/timer-box.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/timer-box.component.js ***!
  \************************************************************************/
/*! exports provided: OwlTimerBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlTimerBoxComponent", function() { return OwlTimerBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/operators/distinctUntilChanged.js");






var OwlTimerBoxComponent = (function () {
    function OwlTimerBoxComponent() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputStream = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.inputStreamSub = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
    }
    Object.defineProperty(OwlTimerBoxComponent.prototype, "displayValue", {
        get: function () {
            return this.boxValue || this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlTimerBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputStreamSub = this.inputStream.pipe(Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (val) {
            if (val) {
                var inputValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(val, 0);
                _this.updateValueViaInput(inputValue);
            }
        });
    };
    OwlTimerBoxComponent.prototype.ngOnDestroy = function () {
        this.inputStreamSub.unsubscribe();
    };
    OwlTimerBoxComponent.prototype.upBtnClicked = function () {
        this.updateValue(this.value + this.step);
    };
    OwlTimerBoxComponent.prototype.downBtnClicked = function () {
        this.updateValue(this.value - this.step);
    };
    OwlTimerBoxComponent.prototype.handleInputChange = function (val) {
        this.inputStream.next(val);
    };
    OwlTimerBoxComponent.prototype.updateValue = function (value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.valueChange.emit(value);
    };
    OwlTimerBoxComponent.prototype.updateValueViaInput = function (value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    };
    OwlTimerBoxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    exportAs: 'owlDateTimeTimerBox',
                    selector: 'owl-date-time-timer-box',
                    template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [disabled]=\"upBtnDisabled || value >= max\" [attr.aria-label]=\"upBtnAriaLabel\" (click)=\"upBtnClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Up\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\" style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/></svg><!-- </editor-fold> --></span></button><label class=\"owl-dt-timer-content\"><input class=\"owl-dt-timer-input\" maxlength=\"2\" [value]=\"displayValue | numberFixedLen : 2\" (input)=\"handleInputChange(valueInput.value)\" #valueInput> <span class=\"owl-hidden-accessible\">{{inputLabel}}</span></label><button class=\"owl-dt-control-button owl-dt-control-arrow-button\" type=\"button\" tabindex=\"0\" [disabled]=\"downBtnDisabled || value <= min\" [attr.aria-label]=\"downBtnAriaLabel\" (click)=\"downBtnClicked()\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\"><!-- <editor-fold desc=\"SVG Arrow Down\"> --> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\" style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"><path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/></svg><!-- </editor-fold> --></span></button>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlTimerBoxComponent.ctorParameters = function () { return []; };
    OwlTimerBoxComponent.propDecorators = {
        "showDivider": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "upBtnAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "upBtnDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "downBtnAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "downBtnDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boxValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "min": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "step": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inputLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "valueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "inputChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "owlDTTimerBoxClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-timer-box',] },],
    };
    return OwlTimerBoxComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/date-time/timer.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/date-time/timer.component.js ***!
  \********************************************************************/
/*! exports provided: OwlTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlTimerComponent", function() { return OwlTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-picker-intl.service */ "./node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js");
/* harmony import */ var _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OwlTimerComponent = (function () {
    function OwlTimerComponent(ngZone, elmRef, pickerIntl, dateTimeAdapter) {
        this.ngZone = ngZone;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.isPM = false;
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(OwlTimerComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "minDateTime", {
        get: function () {
            return this._minDateTime;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "maxDateTime", {
        get: function () {
            return this._maxDateTime;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hourValue", {
        get: function () {
            return this.dateTimeAdapter.getHours(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hourBoxValue", {
        get: function () {
            var hours = this.hourValue;
            if (!this.hour12Timer) {
                return hours;
            }
            else {
                if (hours === 0) {
                    hours = 12;
                    this.isPM = false;
                }
                else if (hours > 0 && hours < 12) {
                    this.isPM = false;
                }
                else if (hours === 12) {
                    this.isPM = true;
                }
                else if (hours > 12 && hours < 24) {
                    hours = hours - 12;
                    this.isPM = true;
                }
                return hours;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "minuteValue", {
        get: function () {
            return this.dateTimeAdapter.getMinutes(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "secondValue", {
        get: function () {
            return this.dateTimeAdapter.getSeconds(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upHourButtonLabel", {
        get: function () {
            return this.pickerIntl.upHourLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downHourButtonLabel", {
        get: function () {
            return this.pickerIntl.downHourLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upMinuteButtonLabel", {
        get: function () {
            return this.pickerIntl.upMinuteLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downMinuteButtonLabel", {
        get: function () {
            return this.pickerIntl.downMinuteLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upSecondButtonLabel", {
        get: function () {
            return this.pickerIntl.upSecondLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downSecondButtonLabel", {
        get: function () {
            return this.pickerIntl.downSecondLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hour12ButtonLabel", {
        get: function () {
            return this.isPM ? this.pickerIntl.hour12PMLabel : this.pickerIntl.hour12AMLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimeTabIndex", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    OwlTimerComponent.prototype.ngOnInit = function () {
    };
    OwlTimerComponent.prototype.focus = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                _this.elmRef.nativeElement.focus();
            });
        });
    };
    OwlTimerComponent.prototype.setHourValueViaInput = function (hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12;
        }
        else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0;
        }
        this.setHourValue(hours);
    };
    OwlTimerComponent.prototype.setHourValue = function (hours) {
        var m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
    };
    OwlTimerComponent.prototype.setMinuteValue = function (minutes) {
        var m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
    };
    OwlTimerComponent.prototype.setSecondValue = function (seconds) {
        var m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
    };
    OwlTimerComponent.prototype.setMeridiem = function (event) {
        this.isPM = !this.isPM;
        var hours = this.hourValue;
        if (this.isPM) {
            hours = hours + 12;
        }
        else {
            hours = hours - 12;
        }
        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours);
        }
        event.preventDefault();
    };
    OwlTimerComponent.prototype.upHourEnabled = function () {
        return !this.maxDateTime || this.compareHours(this.stepHour, this.maxDateTime) < 1;
    };
    OwlTimerComponent.prototype.downHourEnabled = function () {
        return !this.minDateTime || this.compareHours(-this.stepHour, this.minDateTime) > -1;
    };
    OwlTimerComponent.prototype.upMinuteEnabled = function () {
        return !this.maxDateTime || this.compareMinutes(this.stepMinute, this.maxDateTime) < 1;
    };
    OwlTimerComponent.prototype.downMinuteEnabled = function () {
        return !this.minDateTime || this.compareMinutes(-this.stepMinute, this.minDateTime) > -1;
    };
    OwlTimerComponent.prototype.upSecondEnabled = function () {
        return !this.maxDateTime || this.compareSeconds(this.stepSecond, this.maxDateTime) < 1;
    };
    OwlTimerComponent.prototype.downSecondEnabled = function () {
        return !this.minDateTime || this.compareSeconds(-this.stepSecond, this.minDateTime) > -1;
    };
    OwlTimerComponent.prototype.compareHours = function (amount, comparedDate) {
        var hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        hours = Math.max(0, Math.min(hours, 23));
        var result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    OwlTimerComponent.prototype.compareMinutes = function (amount, comparedDate) {
        var minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        minutes = Math.max(0, Math.min(minutes, 59));
        var result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    OwlTimerComponent.prototype.compareSeconds = function (amount, comparedDate) {
        var seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        seconds = Math.max(0, Math.min(seconds, 59));
        var result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    OwlTimerComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlTimerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    exportAs: 'owlDateTimeTimer',
                    selector: 'owl-date-time-timer',
                    template: "<owl-date-time-timer-box [upBtnAriaLabel]=\"upHourButtonLabel\" [downBtnAriaLabel]=\"downHourButtonLabel\" [upBtnDisabled]=\"!upHourEnabled()\" [downBtnDisabled]=\"!downHourEnabled()\" [boxValue]=\"hourBoxValue\" [value]=\"hourValue\" [min]=\"0\" [max]=\"23\" [step]=\"stepHour\" [inputLabel]=\"'Hour'\" (inputChange)=\"setHourValueViaInput($event)\" (valueChange)=\"setHourValue($event)\"></owl-date-time-timer-box><owl-date-time-timer-box [showDivider]=\"true\" [upBtnAriaLabel]=\"upMinuteButtonLabel\" [downBtnAriaLabel]=\"downMinuteButtonLabel\" [upBtnDisabled]=\"!upMinuteEnabled()\" [downBtnDisabled]=\"!downMinuteEnabled()\" [value]=\"minuteValue\" [min]=\"0\" [max]=\"59\" [step]=\"stepMinute\" [inputLabel]=\"'Minute'\" (inputChange)=\"setMinuteValue($event)\" (valueChange)=\"setMinuteValue($event)\"></owl-date-time-timer-box><owl-date-time-timer-box *ngIf=\"showSecondsTimer\" [showDivider]=\"true\" [upBtnAriaLabel]=\"upSecondButtonLabel\" [downBtnAriaLabel]=\"downSecondButtonLabel\" [upBtnDisabled]=\"!upSecondEnabled()\" [downBtnDisabled]=\"!downSecondEnabled()\" [value]=\"secondValue\" [min]=\"0\" [max]=\"59\" [step]=\"stepSecond\" [inputLabel]=\"'Second'\" (inputChange)=\"setSecondValue($event)\" (valueChange)=\"setSecondValue($event)\"></owl-date-time-timer-box><div *ngIf=\"hour12Timer\" class=\"owl-dt-timer-hour12\"><button class=\"owl-dt-control-button owl-dt-timer-hour12-box\" type=\"button\" tabindex=\"0\" (click)=\"setMeridiem($event)\"><span class=\"owl-dt-control-button-content\" tabindex=\"-1\">{{hour12ButtonLabel}}</span></button></div>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    OwlTimerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeIntl"], },
        { type: _adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    OwlTimerComponent.propDecorators = {
        "pickerMoment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDateTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDateTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSecondsTimer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hour12Timer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepHour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepMinute": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "stepSecond": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectedChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "owlDTTimerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dt-timer',] },],
        "owlDTTimeTabIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] },],
    };
    return OwlTimerComponent;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/dialog-config.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/dialog-config.class.js ***!
  \*********************************************************************/
/*! exports provided: OwlDialogConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDialogConfig", function() { return OwlDialogConfig; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js");

var uniqueId = 0;
var OwlDialogConfig = (function () {
    function OwlDialogConfig() {
        this.ariaDescribedBy = null;
        this.autoFocus = true;
        this.hasBackdrop = true;
        this.data = null;
        this.disableClose = false;
        this.role = 'dialog';
        this.paneClass = '';
        this.event = null;
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        this.closeOnNavigation = true;
        this.width = '';
        this.height = '';
        this.maxWidth = '85vw';
        this.scrollStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["NoopScrollStrategy"]();
        this.id = "owl-dialog-" + uniqueId++;
    }
    return OwlDialogConfig;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/dialog-container.component.js ***!
  \****************************************************************************/
/*! exports provided: OwlDialogContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDialogContainerComponent", function() { return OwlDialogContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js");
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





var zoomFadeIn = { opacity: 0, transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})' };
var zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
var OwlDialogContainerComponent = (function (_super) {
    __extends(OwlDialogContainerComponent, _super);
    function OwlDialogContainerComponent(changeDetector, elementRef, focusTrapFactory, document) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.document = document;
        _this.ariaLabelledBy = null;
        _this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAnimating = false;
        _this.state = 'enter';
        _this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        _this.elementFocusedBeforeDialogWasOpened = null;
        return _this;
    }
    Object.defineProperty(OwlDialogContainerComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerTabIndex", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerId", {
        get: function () {
            return this._config.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerRole", {
        get: function () {
            return this._config.role || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaLabelledby", {
        get: function () {
            return this.ariaLabelledBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaDescribedby", {
        get: function () {
            return this._config.ariaDescribedBy || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAnimation", {
        get: function () {
            return { value: this.state, params: this.params };
        },
        enumerable: true,
        configurable: true
    });
    OwlDialogContainerComponent.prototype.ngOnInit = function () {
    };
    OwlDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    OwlDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        throw new Error('Method not implemented.');
    };
    OwlDialogContainerComponent.prototype.setConfig = function (config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    };
    OwlDialogContainerComponent.prototype.onAnimationStart = function (event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    };
    OwlDialogContainerComponent.prototype.onAnimationDone = function (event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    };
    OwlDialogContainerComponent.prototype.startExitAnimation = function () {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    };
    OwlDialogContainerComponent.prototype.calculateZoomOrigin = function (event) {
        if (!event) {
            return;
        }
        var clientX = event.clientX;
        var clientY = event.clientY;
        var wh = window.innerWidth / 2;
        var hh = window.innerHeight / 2;
        var x = clientX - wh;
        var y = clientY - hh;
        var ox = clientX / window.innerWidth;
        var oy = clientY / window.innerHeight;
        this.params.x = x + "px";
        this.params.y = y + "px";
        this.params.ox = ox * 100 + "%";
        this.params.oy = oy * 100 + "%";
        this.params.scale = 0;
        return;
    };
    OwlDialogContainerComponent.prototype.savePreviouslyFocusedElement = function () {
        var _this = this;
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
            Promise.resolve().then(function () { return _this.elementRef.nativeElement.focus(); });
        }
    };
    OwlDialogContainerComponent.prototype.trapFocus = function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    OwlDialogContainerComponent.prototype.restoreFocus = function () {
        var toFocus = this.elementFocusedBeforeDialogWasOpened;
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    OwlDialogContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'owl-dialog-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideModal', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(zoomFadeInFrom),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])('*')),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1.05)', offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(.95)', offset: 0.8 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', offset: 1.0 })
                                ])),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()
                            ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%', scale: 1 } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('enter => exit', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(zoomFadeIn))
                            ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
                        ])
                    ]
                },] },
    ];
    OwlDialogContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    OwlDialogContainerComponent.propDecorators = {
        "portalOutlet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"],] },],
        "owlDialogContainerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.owl-dialog-container',] },],
        "owlDialogContainerTabIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] },],
        "owlDialogContainerId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] },],
        "owlDialogContainerRole": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] },],
        "owlDialogContainerAriaLabelledby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-labelledby',] },],
        "owlDialogContainerAriaDescribedby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-describedby',] },],
        "owlDialogContainerAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['@slideModal',] },],
        "onAnimationStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['@slideModal.start', ['$event'],] },],
        "onAnimationDone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['@slideModal.done', ['$event'],] },],
    };
    return OwlDialogContainerComponent;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]));



/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js ***!
  \******************************************************************/
/*! exports provided: OwlDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDialogRef", function() { return OwlDialogRef; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/take */ "./node_modules/rxjs-compat/_esm5/operators/take.js");





var OwlDialogRef = (function () {
    function OwlDialogRef(overlayRef, container, id, location) {
        var _this = this;
        this.overlayRef = overlayRef;
        this.container = container;
        this.id = id;
        this._beforeClose$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._afterOpen$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._afterClosed$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.locationChanged = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this.disableClose = this.container.config.disableClose;
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function () {
            _this._afterOpen$.next();
            _this._afterOpen$.complete();
        });
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function () {
            _this.overlayRef.dispose();
            _this.locationChanged.unsubscribe();
            _this._afterClosed$.next(_this.result);
            _this._afterClosed$.complete();
            _this.componentInstance = (null);
        });
        this.overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ESCAPE"] && !_this.disableClose; }))
            .subscribe(function () { return _this.close(); });
        if (location) {
            this.locationChanged = location.subscribe(function () {
                if (_this.container.config.closeOnNavigation) {
                    _this.close();
                }
            });
        }
    }
    OwlDialogRef.prototype.close = function (dialogResult) {
        var _this = this;
        this.result = dialogResult;
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.phaseName === 'start'; }), Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function () {
            _this._beforeClose$.next(dialogResult);
            _this._beforeClose$.complete();
            _this.overlayRef.detachBackdrop();
        });
        this.container.startExitAnimation();
    };
    OwlDialogRef.prototype.backdropClick = function () {
        return this.overlayRef.backdropClick();
    };
    OwlDialogRef.prototype.keydownEvents = function () {
        return this.overlayRef.keydownEvents();
    };
    OwlDialogRef.prototype.updatePosition = function (position) {
        var strategy = this.getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this.overlayRef.updatePosition();
        return this;
    };
    OwlDialogRef.prototype.updateSize = function (width, height) {
        if (width === void 0) { width = 'auto'; }
        if (height === void 0) { height = 'auto'; }
        this.getPositionStrategy().width(width).height(height);
        this.overlayRef.updatePosition();
        return this;
    };
    OwlDialogRef.prototype.isAnimating = function () {
        return this.container.isAnimating;
    };
    OwlDialogRef.prototype.afterOpen = function () {
        return this._afterOpen$.asObservable();
    };
    OwlDialogRef.prototype.beforeClose = function () {
        return this._beforeClose$.asObservable();
    };
    OwlDialogRef.prototype.afterClosed = function () {
        return this._afterClosed$.asObservable();
    };
    OwlDialogRef.prototype.getPositionStrategy = function () {
        return this.overlayRef.getConfig().positionStrategy;
    };
    return OwlDialogRef;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/dialog.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/dialog.module.js ***!
  \***************************************************************/
/*! exports provided: OwlDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDialogModule", function() { return OwlDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.service */ "./node_modules/ng-pick-datetime/dialog/dialog.service.js");
/* harmony import */ var _dialog_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-container.component */ "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js");







var OwlDialogModule = (function () {
    function OwlDialogModule() {
    }
    OwlDialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"]],
                    exports: [],
                    declarations: [
                        _dialog_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDialogContainerComponent"],
                    ],
                    providers: [
                        _dialog_service__WEBPACK_IMPORTED_MODULE_5__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER"],
                        _dialog_service__WEBPACK_IMPORTED_MODULE_5__["OwlDialogService"],
                    ],
                    entryComponents: [
                        _dialog_container_component__WEBPACK_IMPORTED_MODULE_6__["OwlDialogContainerComponent"],
                    ]
                },] },
    ];
    OwlDialogModule.ctorParameters = function () { return []; };
    return OwlDialogModule;
}());



/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/dialog.service.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/dialog.service.js ***!
  \****************************************************************/
/*! exports provided: OWL_DIALOG_DATA, OWL_DIALOG_SCROLL_STRATEGY, OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OWL_DIALOG_DEFAULT_OPTIONS, OwlDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_DATA", function() { return OWL_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY", function() { return OWL_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DIALOG_DEFAULT_OPTIONS", function() { return OWL_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDialogService", function() { return OwlDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-config.class */ "./node_modules/ng-pick-datetime/dialog/dialog-config.class.js");
/* harmony import */ var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-ref.class */ "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js");
/* harmony import */ var _dialog_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-container.component */ "./node_modules/ng-pick-datetime/dialog/dialog-container.component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/ng-pick-datetime/utils/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_observable_defer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/observable/defer */ "./node_modules/rxjs-compat/_esm5/observable/defer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js");











var OWL_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OwlDialogData');
var OWL_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dialog-scroll-strategy');
function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
var OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]],
    useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
var OWL_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('owl-dialog-default-options');
var OwlDialogService = (function () {
    function OwlDialogService(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
        var _this = this;
        this.overlay = overlay;
        this.injector = injector;
        this.location = location;
        this.scrollStrategy = scrollStrategy;
        this.defaultOptions = defaultOptions;
        this.parentDialog = parentDialog;
        this.overlayContainer = overlayContainer;
        this.ariaHiddenElements = new Map();
        this._openDialogsAtThisLevel = [];
        this._afterOpenAtThisLevel = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterAllClosedAtThisLevel = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterAllClosed = Object(rxjs_observable_defer__WEBPACK_IMPORTED_MODULE_7__["defer"])(function () {
            return _this._openDialogsAtThisLevel.length ?
                _this._afterAllClosed :
                _this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(undefined));
        });
        if (!parentDialog && location) {
            location.subscribe(function () { return _this.closeAll(); });
        }
    }
    Object.defineProperty(OwlDialogService.prototype, "openDialogs", {
        get: function () {
            return this.parentDialog ? this.parentDialog.openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogService.prototype, "afterOpen", {
        get: function () {
            return this.parentDialog ? this.parentDialog.afterOpen : this._afterOpenAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogService.prototype, "_afterAllClosed", {
        get: function () {
            var parent = this.parentDialog;
            return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    OwlDialogService.prototype.open = function (componentOrTemplateRef, config) {
        var _this = this;
        config = applyConfigDefaults(config, this.defaultOptions);
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }
        var overlayRef = this.createOverlay(config);
        var dialogContainer = this.attachDialogContainer(overlayRef, config);
        var dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        if (!this.openDialogs.length) {
            this.hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this.removeOpenDialog(dialogRef); });
        this.afterOpen.next(dialogRef);
        return dialogRef;
    };
    OwlDialogService.prototype.closeAll = function () {
        var i = this.openDialogs.length;
        while (i--) {
            this.openDialogs[i].close();
        }
    };
    OwlDialogService.prototype.getDialogById = function (id) {
        return this.openDialogs.find(function (dialog) { return dialog.id === id; });
    };
    OwlDialogService.prototype.attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["OwlDialogRef"](overlayRef, dialogContainer, config.id, this.location);
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
        }
        else {
            var injector = this.createInjector(config, dialogRef, dialogContainer);
            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    };
    OwlDialogService.prototype.createInjector = function (config, dialogRef, dialogContainer) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injectionTokens = new WeakMap();
        injectionTokens.set(_dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["OwlDialogRef"], dialogRef);
        injectionTokens.set(_dialog_container_component__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponent"], dialogContainer);
        injectionTokens.set(OWL_DIALOG_DATA, config.data);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalInjector"](userInjector || this.injector, injectionTokens);
    };
    OwlDialogService.prototype.createOverlay = function (config) {
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    OwlDialogService.prototype.attachDialogContainer = function (overlayRef, config) {
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["ComponentPortal"](_dialog_container_component__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponent"], config.viewContainerRef);
        var containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.setConfig(config);
        return containerRef.instance;
    };
    OwlDialogService.prototype.getOverlayConfig = function (dialogConfig) {
        var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayConfig"]({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
            panelClass: dialogConfig.paneClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    };
    OwlDialogService.prototype.removeOpenDialog = function (dialogRef) {
        var index = this._openDialogsAtThisLevel.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            if (!this.openDialogs.length) {
                this.ariaHiddenElements.forEach(function (previousValue, element) {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this.ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    };
    OwlDialogService.prototype.hideNonDialogContentFromAssistiveTechnology = function () {
        var overlayContainer = this.overlayContainer.getContainerElement();
        if (overlayContainer.parentElement) {
            var siblings = overlayContainer.parentElement.children;
            for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this.ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    };
    OwlDialogService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    OwlDialogService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [OWL_DIALOG_SCROLL_STRATEGY,] },] },
        { type: _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogConfig"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [OWL_DIALOG_DEFAULT_OPTIONS,] },] },
        { type: OwlDialogService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], },
    ]; };
    return OwlDialogService;
}());

function applyConfigDefaults(config, defaultOptions) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extendObject"])(new _dialog_config_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogConfig"](), config, defaultOptions);
}


/***/ }),

/***/ "./node_modules/ng-pick-datetime/dialog/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng-pick-datetime/dialog/index.js ***!
  \*******************************************************/
/*! exports provided: OwlDialogModule, OwlDialogService, OwlDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.module */ "./node_modules/ng-pick-datetime/dialog/dialog.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDialogModule", function() { return _dialog_module__WEBPACK_IMPORTED_MODULE_0__["OwlDialogModule"]; });

/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.service */ "./node_modules/ng-pick-datetime/dialog/dialog.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_1__["OwlDialogService"]; });

/* harmony import */ var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-ref.class */ "./node_modules/ng-pick-datetime/dialog/dialog-ref.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDialogRef", function() { return _dialog_ref_class__WEBPACK_IMPORTED_MODULE_2__["OwlDialogRef"]; });






/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/a11y.es5.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/a11y.es5.js ***!
  \**********************************************************************************/
/*! exports provided: FocusTrapDirective, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER_FACTORY, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, FocusTrapDeprecatedDirective, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_ELEMENT_TOKEN, LiveAnnouncer, LIVE_ANNOUNCER_PROVIDER_FACTORY, LIVE_ANNOUNCER_PROVIDER, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER_FACTORY, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapDirective", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapDeprecatedDirective", function() { return FocusTrapDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/take */ "./node_modules/rxjs-compat/_esm5/operators/take.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators/tap */ "./node_modules/rxjs-compat/_esm5/operators/tap.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var /** @type {?} */ frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            var /** @type {?} */ frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
        var /** @type {?} */ tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"], },
    ]; };
    return InteractivityChecker;
}());
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return /** @type {?} */ (window.frameElement);
    }
    catch (/** @type {?} */ e) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var /** @type {?} */ tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var /** @type {?} */ tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    var /** @type {?} */ inputType = nodeName === 'input' && (/** @type {?} */ (element)).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
var FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._enabled = val;
            if (this._startAnchor && this._endAnchor) {
                this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    function () {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     */
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?}
     */
    FocusTrap.prototype.attachAnchors = /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
        }
        if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
        }
        this._ngZone.runOutsideAngular(function () {
            /** @type {?} */ ((_this._startAnchor)).addEventListener('focus', function () {
                _this.focusLastTabbableElement();
            }); /** @type {?} */
            ((_this._endAnchor)).addEventListener('focus', function () {
                _this.focusFirstTabbableElement();
            });
            if (_this._element.parentNode) {
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._startAnchor)), _this._element);
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._endAnchor)), _this._element.nextSibling);
            }
        });
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ markers = /** @type {?} */ (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]")));
        for (var /** @type {?} */ i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "'," +
                    (" use 'cdkFocusRegion" + bound + "' instead."), markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "'," +
                    (" use 'cdkFocusRegion" + bound + "' instead."), markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ redirectToElement = /** @type {?} */ (this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]"));
        if (this._element.hasAttribute("cdk-focus-initial")) {
            console.warn("Found use of deprecated attribute 'cdk-focus-initial'," +
                " use 'cdkFocusInitial' instead.", this._element);
        }
        if (redirectToElement) {
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = children.length - 1; i >= 0; i--) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Creates an anchor element.
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = /**
     * Creates an anchor element.
     * @return {?}
     */
    function () {
        var /** @type {?} */ anchor = this._document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
    ]; };
    return FocusTrapFactory;
}());
/**
 * Directive for trapping focus within a region.
 * \@docs-private
 * @deprecated
 * \@deletion-target 6.0.0
 */
var FocusTrapDeprecatedDirective = /** @class */ (function () {
    function FocusTrapDeprecatedDirective(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(FocusTrapDeprecatedDirective.prototype, "disabled", {
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return !this.focusTrap.enabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.focusTrap.enabled = !Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FocusTrapDeprecatedDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
    };
    /**
     * @return {?}
     */
    FocusTrapDeprecatedDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
    };
    FocusTrapDeprecatedDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-focus-trap',
                },] },
    ];
    /** @nocollapse */
    FocusTrapDeprecatedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: FocusTrapFactory, },
    ]; };
    FocusTrapDeprecatedDirective.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return FocusTrapDeprecatedDirective;
}());
/**
 * Directive for trapping focus within a region.
 */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this.focusTrap.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        get: /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */
        function () { return this._autoCapture; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = /** @type {?} */ (this._document.activeElement);
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    CdkTrapFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] },
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: FocusTrapFactory, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
    ]; };
    CdkTrapFocus.propDecorators = {
        "enabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkTrapFocus',] },],
        "autoCapture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkTrapFocusAutoCapture',] },],
    };
    return CdkTrapFocus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * IDs are deliminated by an empty space, as per the spec.
 */
var ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    if (ids.some(function (existingId) { return existingId.trim() == id.trim(); })) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    var /** @type {?} */ filteredIds = ids.filter(function (val) { return val != id.trim(); });
    el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Interface used to register message elements and keep a count of how many registrations have
 * the same message and the reference to the message element used for the `aria-describedby`.
 * @record
 */

/**
 * ID used for the body container where all messages are appended.
 */
var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 */
var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 */
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 */
var nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 */
var messageRegistry = new Map();
/**
 * Container for all registered messages.
 */
var messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 * \@docs-private
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.describe = /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.removeDescription = /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    AriaDescriber.prototype.ngOnDestroy = /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    function () {
        var /** @type {?} */ describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var /** @type {?} */ i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._createMessageElement = /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ messageElement = this._document.createElement('div');
        messageElement.setAttribute('id', CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++);
        messageElement.appendChild(/** @type {?} */ ((this._document.createTextNode(message))));
        if (!messagesContainer) {
            this._createMessagesContainer();
        } /** @type {?} */
        ((messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessageElement = /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    AriaDescriber.prototype._createMessagesContainer = /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    function () {
        messagesContainer = this._document.createElement('div');
        messagesContainer.setAttribute('id', MESSAGES_CONTAINER_ID);
        messagesContainer.setAttribute('aria-hidden', 'true');
        messagesContainer.style.display = 'none';
        this._document.body.appendChild(messagesContainer);
    };
    /**
     * Deletes the global messages container.
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessagesContainer = /**
     * Deletes the global messages container.
     * @return {?}
     */
    function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        var /** @type {?} */ originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._addMessageReference = /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._removeMessageReference = /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._isElementDescribedByMessage = /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._canBeDescribed = /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        return element.nodeType === this._document.ELEMENT_NODE && message != null &&
            !!("" + message).trim();
    };
    AriaDescriber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
    ]; };
    return AriaDescriber;
}());
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private
 */
var ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), AriaDescriber],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * This interface is for items that can be passed to a ListKeyManager.
 * @record
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
var ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
        this._items = _items;
        this._activeItemIndex = -1;
        this._wrap = false;
        this._letterKeyStream = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._typeaheadSubscription = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._vertical = true;
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = function (item) { return item.disabled; };
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        _items.changes.subscribe(function (newItems) {
            if (_this._activeItem) {
                var /** @type {?} */ itemArray = newItems.toArray();
                var /** @type {?} */ newIndex = itemArray.indexOf(_this._activeItem);
                if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                    _this._activeItemIndex = newIndex;
                }
            }
        });
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    ListKeyManager.prototype.skipPredicate = /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    function (predicate) {
        this._skipPredicateFn = predicate;
        return this;
    };
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     */
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @return {?}
     */
    ListKeyManager.prototype.withWrap = /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @return {?}
     */
    function () {
        this._wrap = true;
        return this;
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    ListKeyManager.prototype.withVerticalOrientation = /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = true; }
        this._vertical = enabled;
        return this;
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    ListKeyManager.prototype.withHorizontalOrientation = /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    function (direction) {
        this._horizontal = direction;
        return this;
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    ListKeyManager.prototype.withTypeAhead = /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if (this._items.length && this._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_12__["tap"])(function (keyCode) { return _this._pressedLetters.push(keyCode); }), Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(debounceInterval), Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._pressedLetters.length > 0; }), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_11__["map"])(function () { return _this._pressedLetters.join(''); })).subscribe(function (inputString) {
            var /** @type {?} */ items = _this._items.toArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var /** @type {?} */ i = 1; i < items.length + 1; i++) {
                var /** @type {?} */ index = (_this._activeItemIndex + i) % items.length;
                var /** @type {?} */ item = items[index];
                if (!_this._skipPredicateFn(item) && /** @type {?} */ ((item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    _this.setActiveItem(index);
                    break;
                }
            }
            _this._pressedLetters = [];
        });
        return this;
    };
    /**
     * Sets the active item to the item at the index specified.
     * @param index The index of the item to be set as active.
     */
    /**
     * Sets the active item to the item at the index specified.
     * @param {?} index The index of the item to be set as active.
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = /**
     * Sets the active item to the item at the index specified.
     * @param {?} index The index of the item to be set as active.
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ previousIndex = this._activeItemIndex;
        this._activeItemIndex = index;
        this._activeItem = this._items.toArray()[index];
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(index);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]:
                if (this._vertical) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]:
                if (this._vertical) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["RIGHT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setNextItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["LEFT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setPreviousItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                }
                else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["NINE"])) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: /**
         * Index of the currently active item.
         * @return {?}
         */
        function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: /**
         * The active item.
         * @return {?}
         */
        function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     */
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    function (index) {
        this._activeItemIndex = index;
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @param {?=} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @param {?=} items
     * @return {?}
     */
    function (delta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        this._wrap ? this._setActiveInWrapMode(delta, items)
            : this._setActiveInDefaultMode(delta, items);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    function (delta, items) {
        for (var /** @type {?} */ i = 1; i <= items.length; i++) {
            var /** @type {?} */ index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            var /** @type {?} */ item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    function (delta, items) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta, items);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @param {?=} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @param {?=} items
     * @return {?}
     */
    function (index, fallbackDelta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    return ListKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
 * Each item must know how to style itself as active or inactive and whether or not it is
 * currently disabled.
 * @record
 */

var ActiveDescendantKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     */
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * This is the interface for focusable items (used by the FocusKeyManager).
 * Each item must know how to focus itself, whether or not it is currently disabled
 * and be able to supply it's label.
 * @record
 */

var FocusKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FocusKeyManager, _super);
    function FocusKeyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._origin = 'program';
        return _this;
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    FocusKeyManager.prototype.setFocusOrigin = /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    function (origin) {
        this._origin = origin;
        return this;
    };
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     */
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     * @param {?} index
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    };
    return FocusKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('liveAnnouncerElement');
var LiveAnnouncer = /** @class */ (function () {
    function LiveAnnouncer(elementToken, _document) {
        this._document = _document;
        // We inject the live element as `any` because the constructor signature cannot reference
        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
        // causes TypeScript to preserve the constructor signature types.
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    LiveAnnouncer.prototype.announce = /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this._liveElement.textContent = message;
                resolve();
            }, 100);
        });
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ liveEl = this._document.createElement('div');
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    };
    LiveAnnouncer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LiveAnnouncer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
    ]; };
    return LiveAnnouncer;
}());
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @param {?} liveElement
 * @param {?} _document
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement, _document) {
    return parentDispatcher || new LiveAnnouncer(liveElement, _document);
}
/**
 * \@docs-private
 */
var LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
var TOUCH_BUFFER_MS = 650;
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
var FocusMonitor = /** @class */ (function () {
    function FocusMonitor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * A map of global objects to lists of current listeners.
         */
        this._unregisterGlobalListeners = function () { };
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
    }
    /**
     * @param {?} element
     * @param {?=} renderer
     * @param {?=} checkChildren
     * @return {?}
     */
    FocusMonitor.prototype.monitor = /**
     * @param {?} element
     * @param {?=} renderer
     * @param {?=} checkChildren
     * @return {?}
     */
    function (element, renderer, checkChildren) {
        var _this = this;
        // TODO(mmalerba): clean up after deprecated signature is removed.
        if (!(renderer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])) {
            checkChildren = renderer;
        }
        checkChildren = !!checkChildren;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        }
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(element)) {
            var /** @type {?} */ cachedInfo = this._elementInfo.get(element); /** @type {?} */
            ((cachedInfo)).checkChildren = checkChildren;
            return /** @type {?} */ ((cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        var /** @type {?} */ info = {
            unlisten: function () { },
            checkChildren: checkChildren,
            subject: new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]()
        };
        this._elementInfo.set(element, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        var /** @type {?} */ focusListener = function (event) { return _this._onFocus(event, element); };
        var /** @type {?} */ blurListener = function (event) { return _this._onBlur(event, element); };
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('focus', focusListener, true);
            element.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            element.removeEventListener('focus', focusListener, true);
            element.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    FocusMonitor.prototype.stopMonitoring = /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(element);
            this._elementInfo.delete(element);
            this._decrementMonitoredElementCount();
        }
    };
    /**
     * Focuses the element via the specified focus origin.
     * @param element The element to focus.
     * @param origin The focus origin.
     */
    /**
     * Focuses the element via the specified focus origin.
     * @param {?} element The element to focus.
     * @param {?} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype.focusVia = /**
     * Focuses the element via the specified focus origin.
     * @param {?} element The element to focus.
     * @param {?} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        this._setOriginForCurrentEventQueue(origin);
        element.focus();
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementInfo.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    FocusMonitor.prototype._registerGlobalListeners = /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    function () {
        var _this = this;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return;
        }
        // On keydown record the origin and clear any touch event that may be in progress.
        var /** @type {?} */ documentKeydownListener = function () {
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        };
        // On mousedown record the origin only if there is not touch target, since a mousedown can
        // happen as a result of a touch event.
        var /** @type {?} */ documentMousedownListener = function () {
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        };
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 0ms). Instead we wait 650ms to
        // see if a focus happens.
        var /** @type {?} */ documentTouchstartListener = function (event) {
            if (_this._touchTimeoutId != null) {
                clearTimeout(_this._touchTimeoutId);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeoutId = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        };
        // Make a note of when the window regains focus, so we can restore the origin info for the
        // focused element.
        var /** @type {?} */ windowFocusListener = function () {
            _this._windowFocused = true;
            _this._windowFocusTimeoutId = setTimeout(function () { return _this._windowFocused = false; }, 0);
        };
        // Note: we listen to events in the capture phase so we can detect them even if the user stops
        // propagation.
        this._ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', documentKeydownListener, true);
            document.addEventListener('mousedown', documentMousedownListener, true);
            document.addEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.addEventListener('focus', windowFocusListener);
        });
        this._unregisterGlobalListeners = function () {
            document.removeEventListener('keydown', documentKeydownListener, true);
            document.removeEventListener('mousedown', documentMousedownListener, true);
            document.removeEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.removeEventListener('focus', windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(_this._windowFocusTimeoutId);
            clearTimeout(_this._touchTimeoutId);
            clearTimeout(_this._originTimeoutId);
        };
    };
    /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    FocusMonitor.prototype._toggleClass = /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    function (element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype._setClasses = /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    FocusMonitor.prototype._setOriginForCurrentEventQueue = /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        this._origin = origin;
        this._originTimeoutId = setTimeout(function () { return _this._origin = null; }, 0);
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    FocusMonitor.prototype._wasCausedByTouch = /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        var /** @type {?} */ focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onFocus = /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        if (!this._origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                this._origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                this._origin = 'touch';
            }
            else {
                this._origin = 'program';
            }
        }
        this._setClasses(element, this._origin);
        elementInfo.subject.next(this._origin);
        this._lastFocusOrigin = this._origin;
        this._origin = null;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onBlur = /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        elementInfo.subject.next(null);
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._incrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1) {
            this._registerGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._decrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            this._unregisterGlobalListeners();
            this._unregisterGlobalListeners = function () { };
        }
    };
    FocusMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FocusMonitor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"], },
    ]; };
    return FocusMonitor;
}());
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = /** @class */ (function () {
    function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef.nativeElement, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    /**
     * @return {?}
     */
    CdkMonitorFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
        this._monitorSubscription.unsubscribe();
    };
    CdkMonitorFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
                },] },
    ];
    /** @nocollapse */
    CdkMonitorFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: FocusMonitor, },
    ]; };
    CdkMonitorFocus.propDecorators = {
        "cdkFocusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CdkMonitorFocus;
}());
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private
 */
var FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var A11yModule = /** @class */ (function () {
    function A11yModule() {
    }
    A11yModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"]],
                    declarations: [CdkTrapFocus, FocusTrapDeprecatedDirective, CdkMonitorFocus],
                    exports: [CdkTrapFocus, FocusTrapDeprecatedDirective, CdkMonitorFocus],
                    providers: [
                        InteractivityChecker,
                        FocusTrapFactory,
                        AriaDescriber,
                        LIVE_ANNOUNCER_PROVIDER,
                        ARIA_DESCRIBER_PROVIDER,
                        FOCUS_MONITOR_PROVIDER,
                    ]
                },] },
    ];
    /** @nocollapse */
    A11yModule.ctorParameters = function () { return []; };
    return A11yModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=a11y.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \**********************************************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc');
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var /** @type {?} */ bodyDir = _document.body ? _document.body.dir : null;
            var /** @type {?} */ htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            this.value = /** @type {?} */ ((bodyDir || htmlDir || 'ltr'));
        }
    }
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DIR_DOCUMENT,] },] },
    ]; };
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var /** @type {?} */ old = this._dir;
            this._dir = v;
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[dir]': 'dir' },
                    exportAs: 'dir',
                },] },
    ];
    /** @nocollapse */
    Dir.ctorParameters = function () { return []; };
    Dir.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['dirChange',] },],
        "dir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                    providers: [
                        { provide: DIR_DOCUMENT, useExisting: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"] },
                        Directionality,
                    ]
                },] },
    ];
    /** @nocollapse */
    BidiModule.ctorParameters = function () { return []; };
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \**************************************************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \**************************************************************************************/
/*! exports provided: UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END, ENTER, SPACE, TAB, ESCAPE, BACKSPACE, DELETE, A, Z, ZERO, NINE, COMMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var HOME = 36;
var END = 35;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;
var ESCAPE = 27;
var BACKSPACE = 8;
var DELETE = 46;
var A = 65;
var Z = 90;
var ZERO = 48;
var NINE = 57;
var COMMA = 188;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/overlay.es5.js ***!
  \*************************************************************************************/
/*! exports provided: Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, ViewportRuler, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, VIEWPORT_RULER_PROVIDER, ConnectedOverlayDirective, OverlayOrigin, OverlayConfig, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, CdkScrollable, ScrollDispatcher, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OVERLAY_PROVIDERS, OverlayModule, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayDirective", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators/take */ "./node_modules/rxjs-compat/_esm5/operators/take.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Subscription */ "./node_modules/rxjs-compat/_esm5/Subscription.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Initial configuration used when creating an overlay.
 */
var OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * The direction of the text in the overlay panel.
         */
        this.direction = 'ltr';
        if (config) {
            Object.keys(config)
                .filter(function (key) { return typeof config[key] !== 'undefined'; })
                .forEach(function (key) { return _this[key] = config[key]; });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A connection point on the origin element.
 * @record
 */

/**
 * A connection point on the overlay element.
 * @record
 */

/**
 * The points of the origin element and the overlay element to connect.
 */
var ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
var ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, /** @docs-private */
        scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair, },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return ConnectedOverlayPositionChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
 * @record
 */

/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Config options for the CloseScrollStrategy.
 * @record
 */

/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        var /** @type {?} */ stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                var /** @type {?} */ scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > /** @type {?} */ ((/** @type {?} */ ((_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            var /** @type {?} */ root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = -this._previousScrollPosition.left + "px";
            root.style.top = -this._previousScrollPosition.top + "px";
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            var /** @type {?} */ html = this._document.documentElement;
            var /** @type {?} */ body = this._document.body;
            var /** @type {?} */ previousHtmlScrollBehavior = html.style['scrollBehavior'] || '';
            var /** @type {?} */ previousBodyScrollBehavior = body.style['scrollBehavior'] || '';
            this._isEnabled = false;
            html.style.left = this._previousHTMLStyles.left;
            html.style.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            html.style['scrollBehavior'] = body.style['scrollBehavior'] = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            html.style['scrollBehavior'] = previousHtmlScrollBehavior;
            body.style['scrollBehavior'] = previousBodyScrollBehavior;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @return {?}
     */
    function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var /** @type {?} */ html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var /** @type {?} */ body = this._document.body;
        var /** @type {?} */ viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        var /** @type {?} */ outsideAbove = element.bottom < containerBounds.top;
        var /** @type {?} */ outsideBelow = element.top > containerBounds.bottom;
        var /** @type {?} */ outsideLeft = element.right < containerBounds.left;
        var /** @type {?} */ outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        var /** @type {?} */ clippedAbove = element.top < scrollContainerRect.top;
        var /** @type {?} */ clippedBelow = element.bottom > scrollContainerRect.bottom;
        var /** @type {?} */ clippedLeft = element.left < scrollContainerRect.left;
        var /** @type {?} */ clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Config options for the RepositionScrollStrategy.
 * @record
 */

/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var /** @type {?} */ overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var /** @type {?} */ parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) {
            return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config);
        };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) {
            return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config);
        };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"], },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _pane, _config, _ngZone, _keyboardDispatcher, _document) {
        this._portalOutlet = _portalOutlet;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._backdropElement = null;
        this._backdropClick = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ attachResult = this._portalOutlet.attach(portal);
        if (this._config.positionStrategy) {
            this._config.positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            if (Array.isArray(this._config.panelClass)) {
                this._config.panelClass.forEach(function (cls) { return _this._pane.classList.add(cls); });
            }
            else {
                this._pane.classList.add(this._config.panelClass);
            }
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._config.positionStrategy && this._config.positionStrategy.detach) {
            this._config.positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        var /** @type {?} */ detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking
        this._keyboardDispatcher.remove(this);
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        var /** @type {?} */ isAttached = this.hasAttached();
        if (this._config.positionStrategy) {
            this._config.positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEvents.asObservable();
    };
    /** Gets the the current overlay configuration, which is immutable. */
    /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._config.positionStrategy) {
            this._config.positionStrategy.apply();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    function () {
        this._pane.setAttribute('dir', /** @type {?} */ ((this._config.direction)));
    };
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    function () {
        if (this._config.width || this._config.width === 0) {
            this._pane.style.width = formatCssUnit(this._config.width);
        }
        if (this._config.height || this._config.height === 0) {
            this._pane.style.height = formatCssUnit(this._config.height);
        }
        if (this._config.minWidth || this._config.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._config.minWidth);
        }
        if (this._config.minHeight || this._config.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._config.minHeight);
        }
        if (this._config.maxWidth || this._config.maxWidth === 0) {
            this._pane.style.maxWidth = formatCssUnit(this._config.maxWidth);
        }
        if (this._config.maxHeight || this._config.maxHeight === 0) {
            this._pane.style.maxHeight = formatCssUnit(this._config.maxHeight);
        }
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._backdropElement.classList.add(this._config.backdropClass);
        } /** @type {?} */
        ((
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._pane.parentElement)).insertBefore(this._backdropElement, this._pane);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    function () {
        if (this._pane.nextSibling) {
            /** @type {?} */ ((this._pane.parentNode)).appendChild(this._pane);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var /** @type {?} */ finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            if (this._config.backdropClass) {
                backdropToDetach.classList.remove(this._config.backdropClass);
            }
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () {
                setTimeout(finishDetach_1, 500);
            });
        }
    };
    return OverlayRef;
}());
/**
 * @param {?} value
 * @return {?}
 */
function formatCssUnit(value) {
    return typeof value === 'string' ? /** @type {?} */ (value) : value + "px";
}
/**
 * Size properties for an overlay.
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, _connectedTo, _viewportRuler, _document) {
        this._connectedTo = _connectedTo;
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        /**
         * Layout direction of the position strategy.
         */
        this._dir = 'ltr';
        /**
         * The offset in pixels for the overlay connection point on the x-axis
         */
        this._offsetX = 0;
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         */
        this._offsetY = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Subscription to viewport resize events.
         */
        this._resizeSubscription = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Whether the position strategy is applied currently.
         */
        this._applied = false;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        this._onPositionChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._onPositionChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this._pane = overlayRef.overlayElement;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () { return _this.apply(); });
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._applied = false;
        this._resizeSubscription.unsubscribe();
        this._onPositionChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._applied = false;
        this._resizeSubscription.unsubscribe();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the  old position, in order to
        // prevent the overlay from jumping around.
        if (this._applied && this._positionLocked && this._lastConnectedPosition) {
            this.recalculateLastPosition();
            return;
        }
        this._applied = true;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var /** @type {?} */ element = this._pane;
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = element.getBoundingClientRect();
        // We use the viewport size to determine whether a position would go off-screen.
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        // Fallback point if none of the fallbacks fit into the viewport.
        var /** @type {?} */ fallbackPoint;
        var /** @type {?} */ fallbackPosition;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, pos);
            var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportSize, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayRect, overlayPoint, pos);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                return;
            }
            else if (!fallbackPoint || fallbackPoint.visibleArea < overlayPoint.visibleArea) {
                fallbackPoint = overlayPoint;
                fallbackPosition = pos;
            }
        }
        // If none of the preferred positions were in the viewport, take the one
        // with the largest visible area.
        this._setElementPosition(element, overlayRect, /** @type {?} */ ((fallbackPoint)), /** @type {?} */ ((fallbackPosition)));
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        // If the overlay has never been positioned before, do nothing.
        if (!this._lastConnectedPosition) {
            return;
        }
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = this._pane.getBoundingClientRect();
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        var /** @type {?} */ lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportSize, lastPosition);
        this._setElementPosition(this._pane, overlayRect, overlayPoint, lastPosition);
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        var /** @type {?} */ position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    function (dir) {
        this._dir = dir;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions.slice();
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._origin = origin.nativeElement;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getStartX = /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getEndX = /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        var /** @type {?} */ originStartX = this._getStartX(originRect);
        var /** @type {?} */ originEndX = this._getEndX(originRect);
        var /** @type {?} */ x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        var /** @type {?} */ y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} viewportSize
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} viewportSize
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, viewportSize, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var /** @type {?} */ overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var /** @type {?} */ overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) offsets of the overlay based on the current position.
        var /** @type {?} */ offsetX = typeof pos.offsetX === 'undefined' ? this._offsetX : pos.offsetX;
        var /** @type {?} */ offsetY = typeof pos.offsetY === 'undefined' ? this._offsetY : pos.offsetY;
        // The (x, y) coordinates of the overlay.
        var /** @type {?} */ x = originPoint.x + overlayStartX + offsetX;
        var /** @type {?} */ y = originPoint.y + overlayStartY + offsetY;
        // How much the overlay would overflow at this position, on each side.
        var /** @type {?} */ leftOverflow = 0 - x;
        var /** @type {?} */ rightOverflow = (x + overlayRect.width) - viewportSize.width;
        var /** @type {?} */ topOverflow = 0 - y;
        var /** @type {?} */ bottomOverflow = (y + overlayRect.height) - viewportSize.height;
        // Visible parts of the element on each axis.
        var /** @type {?} */ visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        var /** @type {?} */ visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        var /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        var /** @type {?} */ fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x: x, y: y, fitsInViewport: fitsInViewport, visibleArea: visibleArea };
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    function (overlay) {
        var /** @type {?} */ originBounds = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayBounds = overlay.getBoundingClientRect();
        var /** @type {?} */ scrollContainerBounds = this.scrollables.map(function (s) { return s.getElementRef().nativeElement.getBoundingClientRect(); });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._setElementPosition = /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    function (element, overlayRect, overlayPoint, pos) {
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear above
        // or below the origin and the direction in which the element will expand.
        var /** @type {?} */ verticalStyleProperty = pos.overlayY === 'bottom' ? 'bottom' : 'top';
        // When using `bottom`, we adjust the y position such that it is the distance
        // from the bottom of the viewport rather than the top.
        var /** @type {?} */ y = verticalStyleProperty === 'top' ?
            overlayPoint.y :
            this._document.documentElement.clientHeight - (overlayPoint.y + overlayRect.height);
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var /** @type {?} */ horizontalStyleProperty;
        if (this._dir === 'rtl') {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        var /** @type {?} */ x = horizontalStyleProperty === 'left' ?
            overlayPoint.x :
            this._document.documentElement.clientWidth - (overlayPoint.x + overlayRect.width);
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        ['top', 'bottom', 'left', 'right'].forEach(function (p) { return element.style[p] = null; });
        element.style[verticalStyleProperty] = y + "px";
        element.style[horizontalStyleProperty] = x + "px";
        // Notify that the position has been changed along with its change properties.
        var /** @type {?} */ scrollableViewProperties = this._getScrollVisibility(element);
        var /** @type {?} */ positionChange = new ConnectedOverlayPositionChange(pos, scrollableViewProperties);
        this._onPositionChange.next(positionChange);
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy(_document) {
        this._document = _document;
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
        /**
         * A lazily-created wrapper for the overlay element that is used as a flex container.
         */
        this._wrapper = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     *
     * @returns Resolved when the styles have been applied.
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @return {?} Resolved when the styles have been applied.
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @return {?} Resolved when the styles have been applied.
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef.hasAttached()) {
            return;
        }
        var /** @type {?} */ element = this._overlayRef.overlayElement;
        if (!this._wrapper && element.parentNode) {
            this._wrapper = this._document.createElement('div'); /** @type {?} */
            ((this._wrapper)).classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(/** @type {?} */ ((this._wrapper)), element); /** @type {?} */
            ((this._wrapper)).appendChild(element);
        }
        var /** @type {?} */ styles = element.style;
        var /** @type {?} */ parentStyles = (/** @type {?} */ (element.parentNode)).style;
        var /** @type {?} */ config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        parentStyles.justifyContent = config.width === '100%' ? 'flex-start' : this._justifyContent;
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /** Removes the wrapper element from the DOM. */
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy(this._document);
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     */
    /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    OverlayPositionBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(_document) {
        this._document = _document;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribeFromKeydownEvents();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Lazily start dispatcher once first overlay is added
        if (!this._keydownEventSubscription) {
            this._subscribeToKeydownEvents();
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._unsubscribeFromKeydownEvents();
        }
    };
    /**
     * Subscribe to keydown events that land on the body and dispatch those
     * events to the appropriate overlay.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._subscribeToKeydownEvents = /**
     * Subscribe to keydown events that land on the body and dispatch those
     * events to the appropriate overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ bodyKeydownEvents = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._document.body, 'keydown', true);
        this._keydownEventSubscription = bodyKeydownEvents.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_9__["filter"])(function () { return !!_this._attachedOverlays.length; })).subscribe(function (event) {
            // Dispatch keydown event to the correct overlay.
            // Dispatch keydown event to the correct overlay.
            _this._selectOverlayFromEvent(event)._keydownEvents.next(event);
        });
    };
    /**
     * Removes the global keydown subscription.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._unsubscribeFromKeydownEvents = /**
     * Removes the global keydown subscription.
     * @return {?}
     */
    function () {
        if (this._keydownEventSubscription) {
            this._keydownEventSubscription.unsubscribe();
            this._keydownEventSubscription = null;
        }
    };
    /**
     * Select the appropriate overlay from a keydown event.
     * @param {?} event
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._selectOverlayFromEvent = /**
     * Select the appropriate overlay from a keydown event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Check if any overlays contain the event
        var /** @type {?} */ targetedOverlay = this._attachedOverlays.find(function (overlay) {
            return overlay.overlayElement === event.target ||
                overlay.overlayElement.contains(/** @type {?} */ (event.target));
        });
        // Use the overlay if it exists, otherwise choose the most recently attached one
        return targetedOverlay || this._attachedOverlays[this._attachedOverlays.length - 1];
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private
 */
var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    return OverlayContainer;
}());
/**
 * \@docs-private
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private
 */
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayContainer],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ) // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Next overlay unique ID.
 */
var nextUniqueId = 0;
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _appRef, _injector, _ngZone, _document) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        var /** @type {?} */ pane = this._createPaneElement();
        var /** @type {?} */ portalOutlet = this._createPortalOutlet(pane);
        return new OverlayRef(portalOutlet, pane, new OverlayConfig(config), this._ngZone, this._keyboardDispatcher, this._document);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @return {?} Newly-created pane element
     */
    function () {
        var /** @type {?} */ pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions, },
        { type: OverlayContainer, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: OverlayPositionBuilder, },
        { type: OverlayKeyboardDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] },] },
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
var defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, _scrollStrategy, _dir) {
        this._overlay = _overlay;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._backdropSubscription = rxjs_Subscription__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this._offsetX = 0;
        this._offsetY = 0;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = this._scrollStrategy();
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](templateRef, viewContainerRef);
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._position.withOffsetX(offsetX);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._position.withOffsetY(offsetY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOrigin", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.origin; },
        set: /**
         * @param {?} _origin
         * @return {?}
         */
        function (_origin) { this.origin = _origin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedPositions", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.positions; },
        set: /**
         * @param {?} _positions
         * @return {?}
         */
        function (_positions) { this.positions = _positions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOffsetX", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.offsetX; },
        set: /**
         * @param {?} _offsetX
         * @return {?}
         */
        function (_offsetX) { this.offsetX = _offsetX; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOffsetY", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.offsetY; },
        set: /**
         * @param {?} _offsetY
         * @return {?}
         */
        function (_offsetY) { this.offsetY = _offsetY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedWidth", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.width; },
        set: /**
         * @param {?} _width
         * @return {?}
         */
        function (_width) { this.width = _width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedHeight", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.height; },
        set: /**
         * @param {?} _height
         * @return {?}
         */
        function (_height) { this.height = _height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedMinWidth", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.minWidth; },
        set: /**
         * @param {?} _minWidth
         * @return {?}
         */
        function (_minWidth) { this.minWidth = _minWidth; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedMinHeight", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.minHeight; },
        set: /**
         * @param {?} _minHeight
         * @return {?}
         */
        function (_minHeight) { this.minHeight = _minHeight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedBackdropClass", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.backdropClass; },
        set: /**
         * @param {?} _backdropClass
         * @return {?}
         */
        function (_backdropClass) { this.backdropClass = _backdropClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedScrollStrategy", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.scrollStrategy; },
        set: /**
         * @param {?} _scrollStrategy
         * @return {?}
         */
        function (_scrollStrategy) {
            this.scrollStrategy = _scrollStrategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOpen", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.open; },
        set: /**
         * @param {?} _open
         * @return {?}
         */
        function (_open) { this.open = _open; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedHasBackdrop", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.hasBackdrop; },
        set: /**
         * @param {?} _hasBackdrop
         * @return {?}
         */
        function (_hasBackdrop) { this.hasBackdrop = _hasBackdrop; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            if (changes['positions'] || changes['_deprecatedPositions']) {
                this._position.withPositions(this.positions);
            }
            if (changes['lockPosition']) {
                this._position.withLockedPosition(this.lockPosition);
            }
            if (changes['origin'] || changes['_deprecatedOrigin']) {
                this._position.setOrigin(this.origin.elementRef);
                if (this.open) {
                    this._position.apply();
                }
            }
        }
        if (changes['open'] || changes['_deprecatedOpen']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @return {?}
     */
    function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    function () {
        var /** @type {?} */ positionStrategy = this._position = this._createPositionStrategy();
        var /** @type {?} */ overlayConfig = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        return overlayConfig;
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ primaryPosition = this.positions[0];
        var /** @type {?} */ originPoint = { originX: primaryPosition.originX, originY: primaryPosition.originY };
        var /** @type {?} */ overlayPoint = { overlayX: primaryPosition.overlayX, overlayY: primaryPosition.overlayY };
        var /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY)
            .withLockedPosition(this.lockPosition);
        for (var /** @type {?} */ i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        strategy.onPositionChange.subscribe(function (pos) { return _this.positionChange.emit(pos); });
        return strategy;
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay(); /** @type {?} */
            ((this._overlayRef)).keydownEvents().subscribe(function (event) {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ESCAPE"]) {
                    _this._detachOverlay();
                }
            });
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
        }
        this._position.withDirection(this.dir);
        this._overlayRef.setDirection(this.dir);
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    CdkConnectedOverlay.prototype._destroyOverlay = /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    CdkConnectedOverlay.propDecorators = {
        "origin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOrigin',] },],
        "positions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayPositions',] },],
        "offsetX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetX',] },],
        "offsetY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetY',] },],
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayWidth',] },],
        "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHeight',] },],
        "minWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinWidth',] },],
        "minHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinHeight',] },],
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayBackdropClass',] },],
        "scrollStrategy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOpen',] },],
        "hasBackdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] },],
        "lockPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayLockPosition',] },],
        "_deprecatedOrigin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['origin',] },],
        "_deprecatedPositions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['positions',] },],
        "_deprecatedOffsetX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['offsetX',] },],
        "_deprecatedOffsetY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['offsetY',] },],
        "_deprecatedWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] },],
        "_deprecatedHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['height',] },],
        "_deprecatedMinWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minWidth',] },],
        "_deprecatedMinHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minHeight',] },],
        "_deprecatedBackdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['backdropClass',] },],
        "_deprecatedScrollStrategy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['scrollStrategy',] },],
        "_deprecatedOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] },],
        "_deprecatedHasBackdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hasBackdrop',] },],
        "backdropClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "positionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "attach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "detach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CdkConnectedOverlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [OVERLAY_PROVIDERS, ScrollStrategyOptions],
                },] },
    ];
    /** @nocollapse */
    OverlayModule.ctorParameters = function () { return []; };
    return OverlayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        var /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        var /** @type {?} */ parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (document.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', fn);
        }
        else if (document.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', fn);
        }
        else if ((/** @type {?} */ (document)).mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', fn);
        }
        else if ((/** @type {?} */ (document)).msFullscreenEnabled) {
            document.addEventListener('MSFullscreenChange', fn);
        }
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            (/** @type {?} */ (document)).mozFullScreenElement ||
            (/** @type {?} */ (document)).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return []; };
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/platform.es5.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \**************************************************************************************/
/*! exports provided: Platform, supportsPassiveEventListeners, getSupportedInputTypes, PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (typeof Intl !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    function Platform() {
        /**
         * Whether the Angular application is being rendered in the browser.
         */
        this.isBrowser = typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(/** @type {?} */ (window)).MSStream;
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return []; };
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', /** @type {?} */ ((null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Cached result Set of input types support by the current browser.
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 */
var candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var /** @type {?} */ featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [Platform]
                },] },
    ];
    /** @nocollapse */
    PlatformModule.ctorParameters = function () { return []; };
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/portal.es5.js ***!
  \************************************************************************************/
/*! exports provided: DomPortalHost, PortalHostDirective, TemplatePortalDirective, BasePortalHost, Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, CdkPortalOutlet, PortalModule, PortalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Interface that can be used to generically type a class.
 * @record
 */

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 */
var Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return /** @type {?} */ (host.attach(this));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * A `PortalOutlet` is an space that can contain a single `Portal`.
 * @record
 */

/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var DomPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortal", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortalHost", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "_deprecatedPortal": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['portalHost',] },],
        "_deprecatedPortalHost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkPortalHost',] },],
        "attached": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['attached',] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    /** @nocollapse */
    PortalModule.ctorParameters = function () { return []; };
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        var /** @type {?} */ value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \***************************************************************************************/
/*! exports provided: DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER_FACTORY, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER_FACTORY, VIEWPORT_RULER_PROVIDER, ScrollDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/ng-pick-datetime/node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_operators_auditTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators/auditTime */ "./node_modules/rxjs-compat/_esm5/operators/auditTime.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Time in ms to throttle the scrolling events by default.
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        var /** @type {?} */ scrollSubscription = scrollable.elementScrolled()
            .subscribe(function () { return _this._scrolled.next(scrollable); });
        this.scrollContainers.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        var /** @type {?} */ scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        return this._platform.isBrowser ? rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var /** @type {?} */ subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators_auditTime__WEBPACK_IMPORTED_MODULE_6__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        }) : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])();
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        var /** @type {?} */ ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        var /** @type {?} */ scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        var /** @type {?} */ element = elementRef.nativeElement;
        var /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"], },
    ]; };
    return ScrollDispatcher;
}());
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(_elementRef, _scroll, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._elementScrolled = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._scrollListener = function (event) { return _this._elementScrolled.next(event); };
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this.getElementRef().nativeElement.addEventListener('scroll', _this._scrollListener);
        });
        this._scroll.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this.getElementRef().nativeElement.removeEventListener('scroll', this._scrollListener);
        }
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled.asObservable();
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this._elementRef;
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: ScrollDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Time in ms to throttle the resize events by default.
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        this._change = _platform.isBrowser ? ngZone.runOutsideAngular(function () {
            return Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_8__["merge"])(Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize'), Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'orientationchange'));
        }) : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])();
        this._invalidateCache = this.change().subscribe(function () { return _this._updateViewportSize(); });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var /** @type {?} */ output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = /** @type {?} */ ((null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var /** @type {?} */ scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var /** @type {?} */ documentRect = document.documentElement.getBoundingClientRect();
        var /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttle Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators_auditTime__WEBPACK_IMPORTED_MODULE_6__["auditTime"])(throttleTime)) : this._change;
    };
    /**
     * Updates the cached viewport size.
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return ViewportRuler;
}());
/**
 * \@docs-private
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
                    exports: [CdkScrollable],
                    declarations: [CdkScrollable],
                    providers: [SCROLL_DISPATCHER_PROVIDER],
                },] },
    ];
    /** @nocollapse */
    ScrollDispatchModule.ctorParameters = function () { return []; };
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/ng-pick-datetime/picker.js":
/*!*************************************************!*\
  !*** ./node_modules/ng-pick-datetime/picker.js ***!
  \*************************************************/
/*! exports provided: OwlDateTimeModule, OwlDateTimeIntl, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE_PROVIDER, OWL_DATE_TIME_LOCALE, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeInlineComponent, OwlDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time */ "./node_modules/ng-pick-datetime/date-time/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlNativeDateTimeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_LOCALE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["DateTimeAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OWL_DATE_TIME_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeInlineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["OwlDateTimeComponent"]; });




/***/ }),

/***/ "./node_modules/ng-pick-datetime/utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ng-pick-datetime/utils/index.js ***!
  \******************************************************/
/*! exports provided: extendObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.utils */ "./node_modules/ng-pick-datetime/utils/object.utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendObject", function() { return _object_utils__WEBPACK_IMPORTED_MODULE_0__["extendObject"]; });




/***/ }),

/***/ "./node_modules/ng-pick-datetime/utils/object.utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng-pick-datetime/utils/object.utils.js ***!
  \*************************************************************/
/*! exports provided: extendObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObject", function() { return extendObject; });
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Subscription.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subscription.js ***!
  \********************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]; });


//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/defer.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/defer.js ***!
  \************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"]; });


//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/auditTime.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/auditTime.js ***!
  \***************************************************************/
/*! exports provided: auditTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["auditTime"]; });


//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/debounceTime.js ***!
  \******************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"]; });


//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/tap.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/tap.js ***!
  \*********************************************************/
/*! exports provided: tap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"]; });


//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "./src/app/model/CommunityModel.model.ts":
/*!***********************************************!*\
  !*** ./src/app/model/CommunityModel.model.ts ***!
  \***********************************************/
/*! exports provided: FeedbackCreateReq, CommunityData, FutureSurveyData, FeedbackUpdateReq, CommunityCreateReq, CommunityUpdateReq, ClientData, UserData, InviteeCreateeReq, InviteeGroupData, InviteeUpdateReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackCreateReq", function() { return FeedbackCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityData", function() { return CommunityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureSurveyData", function() { return FutureSurveyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackUpdateReq", function() { return FeedbackUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityCreateReq", function() { return CommunityCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityUpdateReq", function() { return CommunityUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeCreateeReq", function() { return InviteeCreateeReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeGroupData", function() { return InviteeGroupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteeUpdateReq", function() { return InviteeUpdateReq; });
var FeedbackCreateReq = /** @class */ (function () {
    function FeedbackCreateReq(name, createdUserId, community, futureSurvey) {
        this.name = name;
        this.createdUserId = createdUserId;
        this.community = community;
        this.futureSurvey = futureSurvey;
    }
    return FeedbackCreateReq;
}());

var CommunityData = /** @class */ (function () {
    function CommunityData(id) {
        this.id = id;
    }
    return CommunityData;
}());

var FutureSurveyData = /** @class */ (function () {
    function FutureSurveyData(title, clientId, origin, channel, languageJson, compatibility, pages, jsonContent) {
        this.title = title;
        this.clientId = clientId;
        this.origin = origin;
        this.channel = channel;
        this.languageJson = languageJson;
        this.compatibility = compatibility;
        this.pages = pages;
        this.jsonContent = jsonContent;
    }
    return FutureSurveyData;
}());

var FeedbackUpdateReq = /** @class */ (function () {
    function FeedbackUpdateReq(name, status, lastModifiedUserId) {
        this.name = name;
        this.status = status;
        this.lastModifiedUserId = lastModifiedUserId;
    }
    return FeedbackUpdateReq;
}());

var CommunityCreateReq = /** @class */ (function () {
    function CommunityCreateReq(name, status, description, createdUserId, client, users) {
        this.name = name;
        this.status = status;
        this.description = description;
        this.createdUserId = createdUserId;
        this.client = client;
        this.users = users;
    }
    return CommunityCreateReq;
}());

var CommunityUpdateReq = /** @class */ (function () {
    function CommunityUpdateReq(name, status, description, lastModifiedUserId) {
        this.name = name;
        this.status = status;
        this.description = description;
        this.lastModifiedUserId = lastModifiedUserId;
    }
    return CommunityUpdateReq;
}());

var ClientData = /** @class */ (function () {
    function ClientData(id) {
        this.id = id;
    }
    return ClientData;
}());

var UserData = /** @class */ (function () {
    function UserData(id) {
        this.id = id;
    }
    return UserData;
}());

var InviteeCreateeReq = /** @class */ (function () {
    function InviteeCreateeReq(name, email, username, password, customField1, customField2, customField3, inviteeGroup) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.customField1 = customField1;
        this.customField2 = customField2;
        this.customField3 = customField3;
        this.inviteeGroup = inviteeGroup;
    }
    return InviteeCreateeReq;
}());

var InviteeGroupData = /** @class */ (function () {
    function InviteeGroupData(id) {
        this.id = id;
    }
    return InviteeGroupData;
}());

var InviteeUpdateReq = /** @class */ (function () {
    function InviteeUpdateReq(name, email, username, password, customField1, customField2, customField3) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.customField1 = customField1;
        this.customField2 = customField2;
        this.customField3 = customField3;
    }
    return InviteeUpdateReq;
}());



/***/ }),

/***/ "./src/app/views/community/community-view/community-view-popup/community-view-popup.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/community/community-view/community-view-popup/community-view-popup.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"communityForm\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n            <!-- if necessary use -->\r\n            <!-- letterOnly -->\r\n          <input matInput name=\"name\" [formControl]=\"communityForm.controls['name']\" placeholder=\"Community Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Description\" [formControl]=\"communityForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"pr-1\" *ngIf=\"!data.isNew\">\r\n        <mat-slide-toggle [formControl]=\"communityForm.controls['status']\">Activate Community</mat-slide-toggle>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"100\" class=\"mt-1\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"submitCommunityForm()\" [disabled]=\"communityForm.invalid\">Save</button>\r\n          <span fxFlex></span>\r\n          <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n        </div>\r\n      </div>\r\n  </mat-dialog-content>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/community/community-view/community-view-popup/community-view-popup.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/community/community-view/community-view-popup/community-view-popup.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CommunityViewPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityViewPopupComponent", function() { return CommunityViewPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _community_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
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






var CommunityViewPopupComponent = /** @class */ (function () {
    function CommunityViewPopupComponent(data, dialogRef, fb, errDialog, comunityService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.errDialog = errDialog;
        this.comunityService = comunityService;
    }
    CommunityViewPopupComponent.prototype.ngOnInit = function () {
        if (!this.data.isNew) {
            this.getCommunityById(this.data.payload.id);
        }
        this.buildCommunityForm(this.data.payload);
    };
    /*
    * Build community create and update form
    * 05-03-2019
    * Prasad Kumara
    */
    CommunityViewPopupComponent.prototype.buildCommunityForm = function (community) {
        this.communityForm = this.fb.group({
            name: [community.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [community.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [community.status || false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /*
    * Get community details using cimmunity id
    * 05-03-2019
    * Prasad Kumara
    */
    CommunityViewPopupComponent.prototype.getCommunityById = function (communityId) {
        var _this = this;
        this.comunityService.getCommunityById(communityId)
            .subscribe(function (response) {
            if (response.status === 'ACTIVE') {
                response.status = true;
            }
            else {
                response.status = false;
            }
            _this.buildCommunityForm(response);
        }, function (error) {
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    /*
    * Submit community create and update form
    * 05-03-2019
    * Prasad Kumara
    */
    CommunityViewPopupComponent.prototype.submitCommunityForm = function () {
        this.dialogRef.close(this.communityForm.value);
    };
    CommunityViewPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community-view-popup',
            template: __webpack_require__(/*! ./community-view-popup.component.html */ "./src/app/views/community/community-view/community-view-popup/community-view-popup.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            _community_service__WEBPACK_IMPORTED_MODULE_4__["ComunityService"]])
    ], CommunityViewPopupComponent);
    return CommunityViewPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/community/community-view/community-view.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/community/community-view/community-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field *ngIf=\"this.temCommunities.length > 0\" class=\"margin-333\" style=\"width: 99%\">\r\n  <input matInput placeholder=\"Type to filter all columns\" value=\"\" (keyup)='updateFilter($event)'>\r\n</mat-form-field>\r\n<div class=\"m-333\">\r\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"communityPopUp({}, true)\" [roleAuthorization]=\"'c-c'\">Add Community</button>\r\n  <span fxFlex></span>\r\n  <p *ngIf=\"this.temCommunities.length > 0\" class=\"mat-select-lable\"> Page Size: </p>\r\n  <mat-select *ngIf=\"this.temCommunities.length > 0\" class=\"mat-raised-select\" [(value)]=\"pageSize\"\r\n    (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n    <mat-option *ngFor=\"let item of pageSizeArray\" [value]=\"item\">{{item}}</mat-option>\r\n  </mat-select>\r\n</div>\r\n<mat-card *ngIf=\"this.temCommunities.length > 0\" class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-content class=\"p-0\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Community Name</th>\r\n          <th class=\"pl-1\">Status</th>\r\n          <th class=\"pl-1\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of communities;\">\r\n          <td class=\"pt-1 pb-1\">{{ row?.name }}</td>\r\n          <td class=\"pt-1 pb-1\">\r\n            <mat-chip *ngIf=\"row.status === 'ACTIVE'\" mat-sm-chip color=\"primary\" [selected]=\"true\">Active</mat-chip>\r\n            <mat-chip *ngIf=\"row.status === 'INACTIVE'\" mat-sm-chip color=\"warn\" [selected]=\"true\">Inactive</mat-chip>\r\n          </td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <button mat-icon-button class=\"hidden-on-open\" [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item (click)=\"navigateCommunity(row)\">\r\n                <mat-icon>list</mat-icon> View\r\n              </button>\r\n              <button mat-menu-item (click)=\"communityPopUp(row, false)\"  [roleAuthorization]=\"'c-u'\">\r\n                <mat-icon>edit</mat-icon> Edit\r\n              </button>\r\n              <button mat-menu-item (click)=\"deleteCommunity(row)\" [roleAuthorization]=\"'c-d'\">\r\n                <mat-icon>delete</mat-icon> Delete\r\n              </button>\r\n            </mat-menu>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\">{{totalRecords}} Created, {{usage}} Usage, {{quota}} Quota</div>\r\n          </td>\r\n          <td colspan=\"7\" class=\"text-center\">\r\n            <nav aria-label=\"Page navigation example\">\r\n              <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                  <a class=\"page-link\" (click)=\"fetchAllCommunities(pageNumber-1)\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                  <a class=\"page-link\" (click)=\"fetchAllCommunities(page)\">\r\n                    {{page}}\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                  <a class=\"page-link\" (click)=\"fetchAllCommunities(pageNumber+1)\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div *ngIf=\"this.temCommunities.length === 0 && this.communities.length === 0\" fxLayout=\"row\" fxLayoutAlign=\"center\"\r\n  style=\"margin-top: 10rem;\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" class=\"text-center\">\r\n    <h1 class=\"text-muted\">Create New Community</h1>\r\n  </div>\r\n  <div fxFlex=\"100\" class=\"text-center\">\r\n    <h2 class=\"text-muted\">Click \"Add Community\" Button</h2>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/community/community-view/community-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/community/community-view/community-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommunityViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityViewComponent", function() { return CommunityViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _community_view_popup_community_view_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./community-view-popup/community-view-popup.component */ "./src/app/views/community/community-view/community-view-popup/community-view-popup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _community_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/app-warning/app-warning.service */ "./src/app/shared/services/app-warning/app-warning.service.ts");
/* harmony import */ var app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/model/CommunityModel.model */ "./src/app/model/CommunityModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CommunityViewComponent = /** @class */ (function () {
    function CommunityViewComponent(dialog, snack, router, confirmService, loader, errDialog, communityService, appWarningService, appInfoService, authService) {
        this.dialog = dialog;
        this.snack = snack;
        this.router = router;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.communityService = communityService;
        this.appWarningService = appWarningService;
        this.appInfoService = appInfoService;
        this.authService = authService;
        this.statusArray = {
            'ACTIVE': "primary",
            'INACTIVE': "accent"
        };
        this.quota = 0;
        this.quotaExpire = false;
        this.usage = 0;
        this.communities = [];
        this.temCommunities = [];
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
        this.pageSizeArray = [];
    }
    CommunityViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_9__["authProperties"].storage_name));
        this.userId = userObj.userData.id;
        this.clientId = userObj.userData.client.id;
        this.fetchAllCommunities(this.pageNumber);
        this.communityService
            .licenseExpireState(userObj.userData.client.id, "communities")
            .subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
            _this.usage = tempRes.content.usage;
        });
    };
    CommunityViewComponent.prototype.communityPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.communityService.licenseExpireState(this.clientId, "communities").subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
            _this.usage = tempRes.content.usage;
            if (_this.quotaExpire && isNew) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of communities have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            else {
                var title = isNew ? "Create New Community" : "Update Community";
                var dialogRef = _this.dialog.open(_community_view_popup_community_view_popup_component__WEBPACK_IMPORTED_MODULE_3__["CommunityViewPopupComponent"], {
                    width: "720px",
                    disableClose: true,
                    data: { title: title, payload: data, isNew: isNew }
                });
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        return;
                    }
                    else {
                        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_9__["authProperties"].storage_name));
                        if (userObj) {
                            if (isNew) {
                                var users = [];
                                users.push(new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["UserData"](_this.userId));
                                var req = new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["CommunityCreateReq"](res.name, _this.getCommunityStatus(res.status), res.description, _this.userId, new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["ClientData"](_this.clientId), users);
                                _this.createCommunity(req);
                            }
                            else {
                                var req = new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["CommunityUpdateReq"](res.name, _this.getCommunityStatus(res.status), res.description, _this.userId);
                                _this.communityService.updateCommunityById(data.id, req).subscribe(function (response) {
                                    var temData = response;
                                    var i = _this.communities.indexOf(data);
                                    _this.communities[i] = temData.content;
                                    _this.temCommunities = _this.communities;
                                    _this.loader.close();
                                    _this.snack.open("Community Updated", "close", {
                                        duration: 2000
                                    });
                                }, function (error) {
                                    _this.loader.close();
                                    if (error.status !== 401) {
                                        _this.errDialog.showError(error);
                                    }
                                });
                            }
                        }
                    }
                });
            }
        });
        // if (this.quotaExpire && isNew) {
        //   const infoData = {
        //     title: "License",
        //     message:
        //       "You subscribed number of communities have expired!</br>" +
        //       '<small class="text-muted">Do you like to extend the plan?</small>',
        //     linkData: {
        //       url: "https://www.google.com/gmail/",
        //       buttonText: "Extend"
        //     }
        //   };
        //   this.appInfoService.showInfo(infoData);
        // } else {
        //   const title = isNew ? "Add New Community" : "Update Community";
        //   const dialogRef: MatDialogRef<any> = this.dialog.open(
        //     CommunityViewPopupComponent,
        //     {
        //       width: "720px",
        //       disableClose: true,
        //       data: { title: title, payload: data, isNew: isNew }
        //     }
        //   );
        //   dialogRef.afterClosed().subscribe(res => {
        //     if (!res) {
        //       return;
        //     } else {
        //       const userObj: any = JSON.parse(
        //         localStorage.getItem(authProperties.storage_name)
        //       );
        //       if (userObj) {
        //         this.loader.open();
        //         if (isNew) {
        //           res["createdUserId"] = userObj.id;
        //           res["client"] = {
        //             id: userObj.userData.client.id
        //           };
        //           res["users"] = [
        //             {
        //               id: userObj.id
        //             }
        //           ];
        //           res.status = this.getCommunityStatus(res.status);
        //           const clientId = userObj.userData.client.id;
        //           this.communityService
        //             .licenseExpireState(clientId, "communities")
        //             .subscribe(response => {
        //               const tempRes: any = response;
        //               this.quotaExpire = tempRes.content.expired;
        //               this.quota = tempRes.content.quota;
        //               this.usage = tempRes.content.usage;
        //               if (!tempRes.content.expired) {
        //                 this.loader.close();
        //                 this.createCommunity(
        //                   res,
        //                   tempRes.content.usage,
        //                   tempRes.content.quota
        //                 );
        //               }
        //             });
        //         } else {
        //           res["lastModifiedUserId"] = userObj.id;
        //           res.status = this.getCommunityStatus(res.status);
        //           this.communityService.updateCommunityById(data.id, res).subscribe(
        //             response => {
        //               const temData: any = response;
        //               const i = this.communities.indexOf(data);
        //               this.communities[i] = temData.content;
        //               this.temCommunities = this.communities;
        //               this.loader.close();
        //               this.snack.open("Community Updated", "close", {
        //                 duration: 2000
        //               });
        //             },
        //             error => {
        //               this.loader.close();
        //               if (error.status !== 401) {
        //                 this.errDialog.showError(error);
        //               }
        //             }
        //           );
        //         }
        //       }
        //     }
        //   });
        // }
    };
    CommunityViewComponent.prototype.createCommunity = function (res) {
        var _this = this;
        this.communityService.createCommunity(res).subscribe(function (response) {
            var temData = response;
            _this.usage += 1;
            if (_this.usage === _this.quota) {
                _this.quotaExpire = true;
            }
            var remain = _this.quota - _this.usage;
            if (remain === 1) {
                _this.appWarningService.showWarning({
                    title: "License",
                    message: "Your subscription plan is about to expire!</br>One more community remaining!"
                });
            }
            else if (remain === 0) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of communities have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            _this.snack.open("New Community Created", "close", {
                duration: 2000
            });
            _this.fetchAllCommunities(_this.pageNumber);
        }, function (error) {
            _this.loader.close();
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    CommunityViewComponent.prototype.fetchAllCommunities = function (pageNumber) {
        var _this = this;
        if (pageNumber === 1 ||
            (0 < pageNumber && pageNumber <= this.totalPages.length)) {
            // const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
            var userObj = this.authService.getLoggedUserDetail();
            if (userObj) {
                var user = userObj.userData;
                var predefined = user.role.predefined;
                var userId = predefined === "true" ? undefined : user.id;
                this.communityService
                    .fetchAllComunities(user.client.id, userId, pageNumber, this.pageSize)
                    .subscribe(function (response) {
                    var resData = response;
                    _this.communities = _this.temCommunities = resData.content;
                    _this.totalRecords = resData.pagination.totalRecords;
                    _this.pageNumber = resData.pagination.pageNumber;
                    _this.createPageNavigationBar();
                    _this.createPaginationPageSizeArray();
                }, function (error) {
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        }
    };
    CommunityViewComponent.prototype.navigateCommunity = function (row) {
        var extraParam = {
            queryParams: {
                id: row.id,
                name: row.name
            }
        };
        this.router.navigate(["community/user-community/user-feedback"], extraParam);
    };
    /*
     * Delete community
     * 27-02-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.deleteCommunity = function (row) {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_9__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var tempPN_1 = _this.setPageNumber(1);
                _this.communityService.deleteCommunityById(row.id).subscribe(function (response) {
                    _this.communityService
                        .licenseExpireState(userObj.userData.client.id, "communities")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                        _this.usage = tempRes.content.usage;
                    });
                    _this.fetchAllCommunities(tempPN_1);
                    _this.loader.close();
                    _this.snack.open(row.name + " Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    /*
     * According to the page size get the table records from data base
     * 27-02-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.fetchAllCommunities(this.pageNumber);
    };
    /*
     * Table search function according to the typing words
     * 27-02-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temCommunities[0]);
        columns.splice(columns.length - 1);
        if (!columns.length) {
            return;
        }
        var rows = this.temCommunities.filter(function (data) {
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
        this.communities = rows;
    };
    /*
     * Append newly created community to the community array
     * 06-03-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.appendNewlyCreatedCommunity = function (community) {
        var tempArray = [];
        for (var i = 1; i <= this.communities.length; i++) {
            if (i === this.communities.length) {
                tempArray.push(community);
            }
            else {
                tempArray.push(this.communities[i]);
            }
        }
        this.communities = this.temCommunities = tempArray;
        this.totalRecords += 1;
        this.createPageNavigationBar();
    };
    /*
     * Create pagination bottom navigation bar
     * 07-03-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.createPageNavigationBar = function () {
        var devider = this.totalRecords / this.pageSize;
        var numOfPage = Math.ceil(devider);
        if (numOfPage > 1) {
            var temPages = [];
            for (var i = 1; i <= numOfPage; i++) {
                temPages.push(i);
            }
            this.totalPages = temPages;
        }
        else {
            this.totalPages = [];
        }
    };
    /*
     * Create pagination page size element array
     * 06-03-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.createPaginationPageSizeArray = function () {
        var totalRec = this.totalRecords;
        var tempArray = [];
        if (totalRec > 10) {
            var rem = totalRec % 10;
            if (rem !== 0) {
                totalRec = totalRec + 10;
            }
            for (var i = 10; i < totalRec;) {
                tempArray.push(i);
                i = i + 10;
            }
        }
        else {
            tempArray.push(this.pageSize);
        }
        this.pageSizeArray = tempArray;
    };
    /*
     * Set page number according to the total records
     * 06-03-2019 #780*621#
     * Prasad Kumara 1b 2d 3b 4c 5c 6c 7b 8a 9a 10d
     */
    CommunityViewComponent.prototype.setPageNumber = function (numOfComm) {
        var tempTR = this.totalRecords - numOfComm;
        var devider = tempTR / this.pageSize;
        if (devider < this.totalPages.length) {
            return this.pageNumber - 1;
        }
        else {
            return this.pageNumber;
        }
    };
    /*
     * Convert boolean event status to string status
     * 07-03-2019
     * Prasad Kumara
     */
    CommunityViewComponent.prototype.getCommunityStatus = function (eventStatus) {
        if (eventStatus) {
            return "ACTIVE";
        }
        else {
            return "INACTIVE";
        }
    };
    CommunityViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-community-view",
            template: __webpack_require__(/*! ./community-view.component.html */ "./src/app/views/community/community-view/community-view.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_7__["AppLoaderService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__["AppErrorService"],
            _community_service__WEBPACK_IMPORTED_MODULE_6__["ComunityService"],
            app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_10__["AppWarningService"],
            app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_11__["AppInfoService"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], CommunityViewComponent);
    return CommunityViewComponent;
}());



/***/ }),

/***/ "./src/app/views/community/community.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/community/community.module.ts ***!
  \*****************************************************/
/*! exports provided: CommunityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityModule", function() { return CommunityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _community_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community.routing */ "./src/app/views/community/community.routing.ts");
/* harmony import */ var _community_view_community_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./community-view/community-view.component */ "./src/app/views/community/community-view/community-view.component.ts");
/* harmony import */ var _community_view_community_view_popup_community_view_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./community-view/community-view-popup/community-view-popup.component */ "./src/app/views/community/community-view/community-view-popup/community-view-popup.component.ts");
/* harmony import */ var _user_community_user_community_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-community/user-community.component */ "./src/app/views/community/user-community/user-community.component.ts");
/* harmony import */ var _user_community_user_event_create_event_popup_create_event_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-community/user-event/create-event-popup/create-event-popup.component */ "./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _user_community_user_event_user_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-community/user-event/user-event.component */ "./src/app/views/community/user-community/user-event/user-event.component.ts");
/* harmony import */ var _user_community_user_feedback_user_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-community/user-feedback/user-feedback.component */ "./src/app/views/community/user-community/user-feedback/user-feedback.component.ts");
/* harmony import */ var _user_community_user_feedback_create_feedback_popup_create_feedback_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-community/user-feedback/create-feedback-popup/create-feedback-popup.component */ "./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.ts");
/* harmony import */ var _user_community_user_promotion_user_promotion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-community/user-promotion/user-promotion.component */ "./src/app/views/community/user-community/user-promotion/user-promotion.component.ts");
/* harmony import */ var _user_community_user_promotion_create_promotion_popup_create_promotion_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-community/user-promotion/create-promotion-popup/create-promotion-popup.component */ "./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var _community_user_community_user_feedback_user_feedback_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../community/user-community/user-feedback/user-feedback.service */ "./src/app/views/community/user-community/user-feedback/user-feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var CommunityModule = /** @class */ (function () {
    function CommunityModule() {
    }
    CommunityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlNativeDateTimeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_community_routing__WEBPACK_IMPORTED_MODULE_9__["CommunityRouts"])
            ],
            declarations: [
                _community_view_community_view_component__WEBPACK_IMPORTED_MODULE_10__["CommunityViewComponent"],
                _community_view_community_view_popup_community_view_popup_component__WEBPACK_IMPORTED_MODULE_11__["CommunityViewPopupComponent"],
                _user_community_user_community_component__WEBPACK_IMPORTED_MODULE_12__["UserCommunityComponent"],
                _user_community_user_event_create_event_popup_create_event_popup_component__WEBPACK_IMPORTED_MODULE_13__["CreateEventPopupComponent"],
                _user_community_user_event_user_event_component__WEBPACK_IMPORTED_MODULE_15__["UserEventComponent"],
                _user_community_user_feedback_user_feedback_component__WEBPACK_IMPORTED_MODULE_16__["UserFeedbackComponent"],
                _user_community_user_promotion_user_promotion_component__WEBPACK_IMPORTED_MODULE_18__["UserPromotionComponent"],
                _user_community_user_promotion_create_promotion_popup_create_promotion_popup_component__WEBPACK_IMPORTED_MODULE_19__["CreatePromotionPopupComponent"],
                _user_community_user_feedback_create_feedback_popup_create_feedback_popup_component__WEBPACK_IMPORTED_MODULE_17__["CreateFeedbackPopupComponent"]
            ],
            entryComponents: [
                _community_view_community_view_popup_community_view_popup_component__WEBPACK_IMPORTED_MODULE_11__["CommunityViewPopupComponent"],
                _user_community_user_event_create_event_popup_create_event_popup_component__WEBPACK_IMPORTED_MODULE_13__["CreateEventPopupComponent"],
                _user_community_user_promotion_create_promotion_popup_create_promotion_popup_component__WEBPACK_IMPORTED_MODULE_19__["CreatePromotionPopupComponent"],
                _user_community_user_feedback_create_feedback_popup_create_feedback_popup_component__WEBPACK_IMPORTED_MODULE_17__["CreateFeedbackPopupComponent"]
            ],
            providers: [_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticationService"], _community_user_community_user_feedback_user_feedback_service__WEBPACK_IMPORTED_MODULE_21__["UserFeedbackService"]]
        })
    ], CommunityModule);
    return CommunityModule;
}());



/***/ }),

/***/ "./src/app/views/community/community.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/community/community.routing.ts ***!
  \******************************************************/
/*! exports provided: CommunityRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityRouts", function() { return CommunityRouts; });
/* harmony import */ var _community_view_community_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community-view/community-view.component */ "./src/app/views/community/community-view/community-view.component.ts");
/* harmony import */ var _user_community_user_community_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-community/user-community.component */ "./src/app/views/community/user-community/user-community.component.ts");
/* harmony import */ var _user_community_user_event_user_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-community/user-event/user-event.component */ "./src/app/views/community/user-community/user-event/user-event.component.ts");
/* harmony import */ var _user_community_user_feedback_user_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-community/user-feedback/user-feedback.component */ "./src/app/views/community/user-community/user-feedback/user-feedback.component.ts");
/* harmony import */ var _user_community_user_promotion_user_promotion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-community/user-promotion/user-promotion.component */ "./src/app/views/community/user-community/user-promotion/user-promotion.component.ts");





var CommunityRouts = [
    {
        path: 'community-view',
        component: _community_view_community_view_component__WEBPACK_IMPORTED_MODULE_0__["CommunityViewComponent"],
        data: { title: 'Communities', breadcrumb: 'Communities' }
    },
    {
        path: 'user-community',
        component: _user_community_user_community_component__WEBPACK_IMPORTED_MODULE_1__["UserCommunityComponent"],
        data: { title: 'User Community', breadcrumb: 'User Community' },
        children: [
            {
                path: 'user-feedback',
                component: _user_community_user_feedback_user_feedback_component__WEBPACK_IMPORTED_MODULE_3__["UserFeedbackComponent"],
                data: { title: 'User Feedback', breadcrumb: 'User Feedback' }
            },
            {
                path: 'user-event',
                component: _user_community_user_event_user_event_component__WEBPACK_IMPORTED_MODULE_2__["UserEventComponent"],
                data: { title: 'User Event', breadcrumb: 'User Event' }
            },
            {
                path: 'user-offer',
                component: _user_community_user_promotion_user_promotion_component__WEBPACK_IMPORTED_MODULE_4__["UserPromotionComponent"],
                data: { title: 'User Offer', breadcrumb: 'User Offer' }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/views/community/user-community/user-community.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-community.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"community-background\">\r\n  <div fxFlex=\"100\">\r\n    <div class=\"m-333\">\r\n      <b class=\"ml-50\">{{ comunityName }}</b>\r\n      <span fxFlex></span>\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"accent\" (click)=\"backToComunityView()\">Back</button>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <nav mat-tab-nav-bar>\r\n      <a mat-tab-link routerLink=\"/community/user-community/user-feedback\" [queryParams]=\"queryParams\" routerLinkActive\r\n        #rla1=\"routerLinkActive\" [active]=\"rla1.isActive\">\r\n        <mat-icon class=\"icon-mr\">feedback</mat-icon>Feedbacks\r\n      </a>\r\n      <a mat-tab-link routerLink=\"/community/user-community/user-event\" [queryParams]=\"queryParams\" routerLinkActive\r\n        #rla2=\"routerLinkActive\" [active]=\"rla2.isActive\">\r\n        <mat-icon class=\"icon-mr\">event</mat-icon>Events\r\n      </a>\r\n      <a mat-tab-link routerLink=\"/community/user-community/user-offer\" [queryParams]=\"queryParams\" routerLinkActive\r\n        #rla3=\"routerLinkActive\" [active]=\"rla3.isActive\">\r\n        <mat-icon class=\"icon-mr\">local_offer</mat-icon>Promotions\r\n      </a>\r\n    </nav>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-community.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-community.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserCommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCommunityComponent", function() { return UserCommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCommunityComponent = /** @class */ (function () {
    function UserCommunityComponent(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;
    }
    UserCommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.comunityId = params['id'];
            _this.comunityName = params['name'];
        });
        this.queryParams = {
            id: this.comunityId,
            name: this.comunityName
        };
    };
    /*
    * Return to community view page
    * 05-03-2019
    * Prasad Kumara
    */
    UserCommunityComponent.prototype.backToComunityView = function () {
        this.router.navigate(['community/community-view']);
    };
    UserCommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-community',
            template: __webpack_require__(/*! ./user-community.component.html */ "./src/app/views/community/user-community/user-community.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCommunityComponent);
    return UserCommunityComponent;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"eventForm\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"name\" [formControl]=\"eventForm.controls['name']\" placeholder=\"Event Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Description\" [formControl]=\"eventForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <!-- <input matInput name=\"startDateTime\" [min]=\"startDateMin\" [max]=\"startDateMax\" (dateChange)=\"validateDatePickerMinMax()\" [matDatepicker]=\"picker1\" [formControl]=\"eventForm.controls['startDateTime']\" required placeholder=\"Start Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker> -->\r\n          <input matInput name=\"startDateTime\" [min]=\"startDateMin\" (ngModelChange)=\"validateDatePickerMinMax()\" [max]=\"startDateMax\"\r\n            [owlDateTime]=\"picker1\" [owlDateTimeTrigger]=\"picker1\" [formControl]=\"eventForm.controls['startDateTime']\"\r\n            required placeholder=\"Start Date\">\r\n          <button [owlDateTimeTrigger]=\"picker1\" mat-icon-button matSuffix>\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n          </button>\r\n          <owl-date-time #picker1></owl-date-time>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <!-- <input matInput name=\"endDateTime\" [min]=\"endDateMin\" [max]=\"endDateMax\" (dateChange)=\"validateDatePickerMinMax()\"  [matDatepicker]=\"picker2\" [formControl]=\"eventForm.controls['endDateTime']\" required placeholder=\"End Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker> -->\r\n          <input matInput name=\"endDateTime\" [min]=\"endDateMin\" (ngModelChange)=\"validateDatePickerMinMax()\" [max]=\"endDateMax\"\r\n            [owlDateTime]=\"picker2\" [owlDateTimeTrigger]=\"picker2\" [formControl]=\"eventForm.controls['endDateTime']\"\r\n            required placeholder=\"End Date\">\r\n          <button [owlDateTimeTrigger]=\"picker2\" mat-icon-button matSuffix>\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n          </button>\r\n          <owl-date-time #picker2></owl-date-time>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <!-- --------- hidden file input --------- -->\r\n        <input (change)=\"onSelectFile($event)\" #eventImgs type=\"file\" [formControl]=\"eventForm.controls['poster']\"\r\n          multiple style=\"display: none\" />\r\n        <!-- --------- file input click button --------- -->\r\n        <div layout-margin layout-padding>\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"eventImgs.click()\" [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.currentTotalImageCount === this.maxUploadableFileCount)\"\r\n            type=\"button\">\r\n            Browse Images\r\n            <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n            (false) :\r\n            (this.currentTotalImageCount > 0)\">\r\n              ({{this.currentTotalImageCount}} / {{this.maxUploadableFileCount}})</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-slide-toggle *ngIf=\"!data.isNew\" [formControl]=\"eventForm.controls['status']\">Activate Event</mat-slide-toggle>\r\n      </div>\r\n      <!-- <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngFor='let url of urls; let i = index' fxFlex=\"100\"\r\n        fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n        <mat-card class=\"p-0\">\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <img [src]=\"url\">\r\n        </mat-card>\r\n      </div> -->\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"event_update_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\" class=\"mt-1\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;max-height: 200px\">\r\n          <mat-card class=\"p-0\">\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n              <span fxFlex></span>\r\n              <button type=\"button\" class=\"close p-1\" aria-label=\"Close\" (click)=\"removeSelectedImg()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"eventFormSubmit()\" [disabled]=\"eventForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MY_FORMATS, CreateEventPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventPopupComponent", function() { return CreateEventPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-event.service */ "./src/app/views/community/user-community/user-event/user-event.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var MY_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD'
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'YYYY-MM-DD',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
var CreateEventPopupComponent = /** @class */ (function () {
    function CreateEventPopupComponent(data, dialogRef, fb, snackBar, activeRoute, datePipe, errDialog, userEventService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.activeRoute = activeRoute;
        this.datePipe = datePipe;
        this.errDialog = errDialog;
        this.userEventService = userEventService;
        this.currentTotalImageCount = 0;
        this.maxUploadableFileCount = 1;
        this.newlySelectedFileList = [];
        this.urls = [];
        this.remainImagesID = [];
        this.minHeight = 200;
        this.minWidth = 400;
    }
    CreateEventPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.isNew) {
            this.getEventById(this.data.payload.id);
        }
        this.buildEventForm(this.data.payload);
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.comunityId = params['id'];
            _this.comunityName = params['name'];
        });
        this.setStartDateMin();
        //edited by kushan
        this.imgBaseURL = this.userEventService.imageUrl;
    };
    /*
    * Build Event Create and Update Form
    * 05-03-2019
    * Prasad Kumara
    * Edited by Kushan Pabasara
    */
    CreateEventPopupComponent.prototype.buildEventForm = function (eventformdata) {
        var _this = this;
        console.log(eventformdata);
        this.eventForm = this.fb.group({
            name: [eventformdata.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [eventformdata.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [eventformdata.status || false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            startDateTime: [eventformdata.startDateTime, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDateTime: [eventformdata.endDateTime, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            poster: ['']
        });
        getBase64ImageFromUrl(this.imgBaseURL + eventformdata.id)
            .then(function (result) { return _this.url = result; })
            .catch(function (err) { return console.error(err); });
        console.log(this.eventForm);
    };
    /*
    * Get event data by event id
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.getEventById = function (eventId) {
        var _this = this;
        this.userEventService.getEventById(eventId)
            .subscribe(function (response) {
            var tempArr = response;
            var event = _this.createDateTimeObject(tempArr.content);
            console.log(event);
            _this.buildEventForm(event);
            _this.createImgUrls(event);
        }, function (error) {
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    /*
    * Set Start date minimum value
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.setStartDateMin = function () {
        var payload = this.data.payload;
        var today = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_4__["DateValidator"].getToday();
        if (payload) {
            var startDate = new Date(payload.startDateTime);
            if (startDate < today) {
                this.startDateMin = startDate;
            }
            else {
                this.startDateMin = today;
            }
        }
    };
    /*
    * Validate Date time picker minimum and maximum value
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.validateDatePickerMinMax = function () {
        var startDateValue = this.eventForm.get('startDateTime').value;
        var endDateValue = this.eventForm.get('endDateTime').value;
        if (startDateValue == null && endDateValue == null) {
            this.startDateMin = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_4__["DateValidator"].getToday();
            this.endDateMin = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_4__["DateValidator"].getToday();
        }
        else {
            if (startDateValue != null) {
                this.endDateMin = startDateValue;
            }
            if (endDateValue != null) {
                this.startDateMax = endDateValue;
            }
        }
    };
    /*
    * Image file upload function
    * 05-03-2019
    * Prasad Kumara
    * edited by kushan pabasara
    */
    CreateEventPopupComponent.prototype.onSelectFile = function (event) {
        // if (event.target.files && event.target.files[0]) {
        //   const filesAmount = event.target.files.length;
        //   if (
        //     this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
        //       ? true
        //       : this.currentTotalImageCount + filesAmount <=
        //       this.maxUploadableFileCount
        //   ) {
        //     for (let i = 0; i < filesAmount; i++) {
        //       const fileName = event.target.files[i].name;
        //       const fileExtension = fileName.replace(/^.*\./, '');
        //       console.log(fileExtension);
        var _this = this;
        //       if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
        //         const reader = new FileReader();
        //         reader.onload = (ev: any) => {
        //           const img = new Image();
        //           img.src = ev.target.result;
        //           img.onload = () => {
        //             const widthReminder = img.width % 4;
        //             const heightReminder = img.height % 3;
        //             console.log(this.urls);
        //             if (img.width < this.minWidth || img.height < this.minHeight) {
        //               this.snackBar.open(
        //                 'Image minimum dimension should be ' + this.minWidth + 'X' + this.minHeight,
        //                 'close',
        //                 { duration: 3000 }
        //               );
        //               this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
        //               this.currentTotalImageCount--;
        //               return;
        //             }
        //             if (widthReminder !== 0 || heightReminder !== 0) {
        //               this.snackBar.open(
        //                 'Image aspect ratio should be 4:3 (' + this.minWidth + 'X' + this.minHeight + ')',
        //                 'close',
        //                 { duration: 3000 }
        //               );
        //               this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
        //               this.currentTotalImageCount--;
        //               return;
        //             }
        //             console.log(this.urls);
        //             this.urls.push(ev.target.result);
        //             this.eventForm.controls['poster'].setErrors(null);
        //           };
        //         };
        //         reader.readAsDataURL(event.target.files[i]);
        //         this.newlySelectedFileList.push(event.target.files[i]);
        //         this.currentTotalImageCount++;
        //       } else {
        //         this.snackBar.open(
        //           'Upload valiid images. Only PNG, JPG or JPEG are allowed!',
        //           'close',
        //           { duration: 3000 }
        //         );
        //         this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
        //         this.currentTotalImageCount--;
        //         return;
        //       }
        //     }
        //   } else {
        //     // alert for file upload limit
        //     this.snackBar.open(
        //       'Can\'t upload more than ' + this.maxUploadableFileCount + ' photos',
        //       'close',
        //       { duration: 2000 }
        //     );
        //   }
        // }
        if (event.target.files && event.target.files[0]) {
            // const fileName = event.target.files[i].name;
            // const fileExtension = fileName.replace(/^.*\./, '');
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            console.log(file);
            reader.onload = function (event) {
                var img = new Image();
                img.src = event.target.result;
                img.onload = function () {
                    if (img.width < _this.minWidth || img.height < _this.minHeight) {
                        _this.url = event.target.result;
                    }
                    else {
                        _this.snackBar.open('Image minimum dimension should be ' + _this.minWidth + 'X' + _this.minHeight, 'close', { duration: 3000 });
                        _this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
                        return;
                    }
                };
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    /*
    * Remove selected images
    * 05-03-2019
    * Prasad Kumara
    * edited by kushan pabasara
    */
    CreateEventPopupComponent.prototype.removeSelectedImg = function (index) {
        // this.url.splice(index, 1);
        // this.currentTotalImageCount -= 1;
        // this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
        // if (this.remainImagesID.length < index + 1) {
        //   this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
        // } else {
        //   this.remainImagesID.splice(index, 1);
        // }
        this.url = null;
    };
    /*
    * Convert Json Event data to formData
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.prepareEventFormData = function (formValues) {
        var eventFormData = new FormData();
        eventFormData.append('communityId', this.comunityId);
        eventFormData.append('name', formValues.name);
        eventFormData.append('description', formValues.description);
        eventFormData.append('startDateTime', formValues.startDateTime);
        eventFormData.append('endDateTime', formValues.endDateTime);
        eventFormData.append('status', formValues.status);
        for (var i = 0; i < this.newlySelectedFileList.length; i++) {
            var selectedFile = this.newlySelectedFileList[i];
            var type = selectedFile.type.split("/");
            var imageName = 'image_' + i + '.' + type[1];
            eventFormData.append('poster', selectedFile, imageName);
        }
        console.log(eventFormData);
        return eventFormData;
    };
    /*
    * Create and Update Event Submit function
    * 05-03-2019
    * Prasad Kumara
    * edited by kushan pabasara
    */
    CreateEventPopupComponent.prototype.eventFormSubmit = function () {
        // const eventFormData = this.prepareEventFormData(this.eventForm.value);
        var eventFormData = this.eventForm.value;
        console.log(eventFormData);
        if (this.url) {
            eventFormData.poster = this.url;
            var startDateTime = this.datePipe.transform(this.eventForm.value.startDateTime, 'yyy-MM-dd HH:mm');
            var endDateTime = this.datePipe.transform(this.eventForm.value.endDateTime, 'yyy-MM-dd HH:mm');
            eventFormData.startDateTime = startDateTime;
            eventFormData.endDateTime = endDateTime;
            console.log(eventFormData);
            this.dialogRef.close(eventFormData);
        }
        else {
            this.snackBar.open("Please upload image", "close", { duration: 2000 });
            this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
        }
    };
    /*
    * Create image Urls from bite array
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.createImgUrls = function (event) {
        if (event.hasOwnProperty('poster')) {
            this.urls.push(event.poster);
            this.currentTotalImageCount = 1;
        }
    };
    /*
    * Convert string date time to Date time object
    * 05-03-2019
    * Prasad Kumara
    */
    CreateEventPopupComponent.prototype.createDateTimeObject = function (event) {
        event.startDateTime = new Date(event.startDateTime);
        event.endDateTime = new Date(event.endDateTime);
        event.createdDate = new Date(event.createdDate);
        if (event.status === 'INACTIVE') {
            event.status = false;
        }
        else {
            event.status = true;
        }
        return event;
    };
    CreateEventPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event-popup',
            template: __webpack_require__(/*! ./create-event-popup.component.html */ "./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_8__["AppErrorService"],
            _user_event_service__WEBPACK_IMPORTED_MODULE_7__["UserEventService"]])
    ], CreateEventPopupComponent);
    return CreateEventPopupComponent;
}());

/* created by kushan pabasara */
function getBase64ImageFromUrl(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(imageUrl)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.addEventListener("load", function () {
                                resolve(reader.result);
                            }, false);
                            reader.onerror = function () {
                                return reject(_this);
                            };
                            reader.readAsDataURL(blob);
                        })];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/views/community/user-community/user-event/user-event.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-event/user-event.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messages-wrap\">\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\">\r\n    <!-- multiple events select and control -->\r\n    <mat-checkbox (change)=\"selectToggleAll($event)\" [indeterminate]=\"indeterminateState\" [checked]=\"selectAll\"\r\n      class=\"inbox-toggle-all mr-1\"><small>All</small></mat-checkbox>\r\n    <button mat-icon-button matTooltip=\"Add event\" (click)=\"eventPopUp({}, true)\">\r\n      <mat-icon>add_box</mat-icon>\r\n    </button>\r\n    <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"indeterminateState || selectAll\"\r\n      (click)=\"deleteSelectedEvents()\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button>\r\n    <span fxFlex></span>\r\n    <mat-form-field *ngIf=\"this.temEvents.length > 0\" style=\"font-size: 15px; width: 30%; margin-top: 10px;\">\r\n      <input matInput placeholder=\"Search\" value=\"\" (keyup)='updateFilter($event)'>\r\n    </mat-form-field>\r\n    <p *ngIf=\"this.temEvents.length > 0\" class=\"mat-select-lable\"> Page Size: </p>\r\n    <mat-select *ngIf=\"this.temEvents.length > 0\" class=\"mat-raised-select\" [(value)]=\"pageSize\"\r\n      (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n      <mat-option *ngFor=\"let item of pageSizeArray\" [value]=\"item\">{{item}}</mat-option>\r\n    </mat-select>\r\n  </mat-toolbar>\r\n  <mat-accordion>\r\n    <mat-expansion-panel *ngFor=\"let eventObj of events\" expanded=\"false\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-checkbox (change)=\"selectToggleOne($event, eventObj)\" [checked]=\"eventObj.selected\"\r\n            (click)=\"stopProp($event)\" class=\"mail-checkbox hide-on-open\"></mat-checkbox>\r\n          <span style=\"width: 130px; overflow: hidden;\r\n          white-space: nowrap;\r\n          text-overflow: ellipsis;\" class=\"hide-on-open\">{{ eventObj.name }}</span>\r\n          <div fxFlex=\"1 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"show-on-open\">\r\n            <!-- <img [src]=\"eventObj.file\" alt=\"\" class=\"inbox-face mr-1\"> -->\r\n            <div fxLayout=\"column\">\r\n              <span class=\"m-0\">{{ eventObj.name }}</span>\r\n              <small class=\"text-muted m-0\">Start Date : {{eventObj.startDateTime | date}}, End Date :\r\n                {{eventObj.endDateTime | date}}</small>\r\n            </div>\r\n          </div>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"mail-subject text-sm mat-color-default hide-on-open\">\r\n            <mat-chip *ngIf=\"eventObj.status === 'ACTIVE'\" mat-sm-chip color=\"primary\" [selected]=\"true\">Active\r\n            </mat-chip>\r\n            <mat-chip *ngIf=\"eventObj.status === 'INACTIVE'\" mat-sm-chip color=\"warn\" [selected]=\"true\">Inactive\r\n            </mat-chip>\r\n          </span>\r\n          <span fxFlex></span>\r\n          <span class=\"text-sm\" fxHide.lt-sm=\"true\">{{eventObj.createdDate | relativeTime}}</span>\r\n          <button mat-icon-button [matMenuTriggerFor]=\"msgMenu\" (click)=\"stopProp($event)\" class=\"hidden-on-open\">\r\n            <mat-icon class=\"text-muted\">more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #msgMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"eventPopUp(eventObj, false)\">\r\n              <mat-icon>edit</mat-icon> Edit\r\n            </button>\r\n            <button mat-menu-item (click)=\"deleteOneEvent(eventObj)\">\r\n              <mat-icon>delete</mat-icon> Delete\r\n            </button>\r\n          </mat-menu>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"40\" class=\"pr-1\">\r\n          <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n            <img style=\"padding: 10px;\" mat-card-image [src]=\"eventPosterUrl+eventObj.id\" alt=\"Photo of a Shiba Inu\">\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex=\"60\" class=\"pr-1\">\r\n          <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n                <small class=\"text-muted\">Event Description</small>\r\n              </div>\r\n              <p style=\"padding-top: 10px;\" class=\"md-body-1\">{{ eventObj.description }}</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"50\" fxFlex.gt-sm=\"19.5\" fxFlex.sm=\"25\" class=\"p-0\"\r\n          [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n          <mat-card>\r\n            <mat-card-title fxLayoutAlign=\"start center\">\r\n              <small class=\"text-muted\">Start Date & Time</small>\r\n              <span fxFlex></span>\r\n              <mat-icon color=\"primary\">play_arrow</mat-icon>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n              <h6 class=\"m-0 font-normal\">{{ eventObj.startDateTime | date:'MMM d, y, h:mm a'}}</h6>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex=\"50\" fxFlex.gt-sm=\"19.5\" fxFlex.sm=\"25\" class=\"p-0\"\r\n          [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n          <mat-card>\r\n            <mat-card-title fxLayoutAlign=\"start center\">\r\n              <small class=\"text-muted\">End Date & Time</small>\r\n              <span fxFlex></span>\r\n              <mat-icon color=\"warn\">stop</mat-icon>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n              <h6 class=\"m-0 font-normal\">{{ eventObj.endDateTime | date:'MMM d, y, h:mm a'}}</h6>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\" *ngIf=\"this.events.length > 0\" style=\"font-size: 12px;\">\r\n    <div class=\"pagination\">{{totalRecords}} Created,</div>\r\n    <div class=\"pagination ml-1\">{{quota}} Quota</div>\r\n    <span fxFlex></span>\r\n    <ng-container>\r\n      <nav aria-label=\"Promotion Page Navigation\" style=\"color: black;\">\r\n        <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n          <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllEvents(pageNumber-1)\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllEvents(page)\">\r\n              {{page}}\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllEvents(pageNumber+1)\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </ng-container>\r\n  </mat-toolbar>\r\n  <div *ngIf=\"this.temEvents.length === 0 && this.events.length === 0\" fxLayout=\"row\" fxLayoutAlign=\"center\"\r\n    style=\"margin-top: 10rem;\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h1 class=\"text-muted\">Create New Event</h1>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h2 class=\"text-muted\">Click \"Add\" Button</h2>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-event/user-event.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-event/user-event.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventComponent", function() { return UserEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_event_popup_create_event_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-event-popup/create-event-popup.component */ "./src/app/views/community/user-community/user-event/create-event-popup/create-event-popup.component.ts");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-event.service */ "./src/app/views/community/user-community/user-event/user-event.service.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _community_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/app-warning/app-warning.service */ "./src/app/shared/services/app-warning/app-warning.service.ts");
/* harmony import */ var app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserEventComponent = /** @class */ (function () {
    function UserEventComponent(dialog, snack, confirmService, activeRoute, loader, errDialog, userEventService, comunityService, appWarningService, appInfoService) {
        this.dialog = dialog;
        this.snack = snack;
        this.confirmService = confirmService;
        this.activeRoute = activeRoute;
        this.loader = loader;
        this.errDialog = errDialog;
        this.userEventService = userEventService;
        this.comunityService = comunityService;
        this.appWarningService = appWarningService;
        this.appInfoService = appInfoService;
        this.events = [];
        this.temEvents = [];
        this.indeterminateState = false;
        this.selectAll = false;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 2;
        this.pageSizeArray = [];
        this.quota = 0;
        this.quotaExpire = false;
        this.eventPosterUrl = this.comunityService.getPosterDownloadUrl("event");
    }
    UserEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_5__["authProperties"].storage_name));
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.comunityId = params["id"];
            _this.comunityName = params["name"];
        });
        this.fetchAllEvents(this.pageNumber);
        this.comunityService
            .licenseExpireState(userObj.userData.client.id, "events")
            .subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
        });
    };
    /*
     * expantion pannel prevent expantion
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    /*
     * Event create and update popup window
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.eventPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (this.quotaExpire && isNew) {
            var infoData = {
                title: "License",
                message: "You subscribed number of events have expired!</br>" +
                    '<small class="text-muted">Do you like to extend the plan?</small>',
                linkData: {
                    url: "https://www.google.com/gmail/",
                    buttonText: "Extend"
                }
            };
            this.appInfoService.showInfo(infoData);
        }
        else {
            var title = isNew ? "Create New Event" : "Update Event";
            var dialogRef = this.dialog.open(_create_event_popup_create_event_popup_component__WEBPACK_IMPORTED_MODULE_3__["CreateEventPopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { title: title, payload: data, isNew: isNew }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    return;
                }
                else {
                    _this.loader.open();
                    var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_5__["authProperties"].storage_name));
                    if (userObj) {
                        if (isNew) {
                            res["createdUserId"] = userObj.id;
                            res["client"] = {
                                id: userObj.userData.client.id
                            };
                            res["community"] = {
                                id: _this.comunityId
                            };
                            var clientId = userObj.userData.client.id;
                            res.status = _this.getEventStatus(res.status);
                            _this.comunityService
                                .licenseExpireState(clientId, "events")
                                .subscribe(function (response) {
                                var tempRes = response;
                                _this.quotaExpire = tempRes.content.expired;
                                _this.quota = tempRes.content.quota;
                                if (!tempRes.content.expired) {
                                    _this.loader.close();
                                    _this.createEvent(res, tempRes.content.usage, tempRes.content.quota);
                                }
                            });
                        }
                        else {
                            res["lastModifiedUserId"] = userObj.id;
                            res.status = _this.getEventStatus(res.status);
                            _this.userEventService.eventUpdateById(data.id, res).subscribe(function (response) {
                                var temData = response;
                                var i = _this.events.indexOf(data);
                                _this.events[i] = temData.content;
                                _this.temEvents = _this.events;
                                _this.loader.close();
                                _this.snack.open("Event Updated", "close", {
                                    duration: 2000
                                });
                            }, function (error) {
                                _this.loader.close();
                                if (error.status !== 401) {
                                    _this.errDialog.showError(error);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    UserEventComponent.prototype.createEvent = function (res, usage, tempQuoata) {
        var _this = this;
        this.userEventService.createEvent(res).subscribe(function (response) {
            var temData = response;
            if (_this.events.length === _this.pageSize) {
                _this.appendNewlyCreatedEvent(temData.content);
            }
            else {
                _this.events.push(temData.content);
                _this.temEvents = _this.events;
                _this.totalRecords += 1;
            }
            // this.fetchAllEvents();
            if (_this.totalRecords === _this.quota) {
                _this.quotaExpire = true;
            }
            _this.loader.close();
            if (usage < tempQuoata - 1 && tempQuoata - usage === 2) {
                _this.appWarningService.showWarning({
                    title: "License",
                    message: "Your subscription plan is about to expire!</br>One more event remaining!"
                });
            }
            else if (usage < tempQuoata && tempQuoata - usage === 1) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of events have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            } // else {
            _this.snack.open("New Event Created", "close", {
                duration: 2000
            });
            // }
        }, function (error) {
            _this.loader.close();
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    /*
     * set selected status of one event
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.selectToggleOne = function (event, data) {
        var i = this.events.indexOf(data);
        if (event.checked) {
            this.events[i].selected = true;
            this.indeterminateState = true;
        }
        else {
            this.events[i].selected = false;
        }
        this.checkAllSelectedState();
    };
    /*
     * set selectd status of all events
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.checkAllSelectedState = function () {
        var numOfSelectedEvent = 0;
        this.events.forEach(function (data) {
            if (data.selected) {
                numOfSelectedEvent++;
            }
        });
        if (numOfSelectedEvent === this.events.length) {
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            if (this.selectAll) {
                this.selectAll = false;
                this.indeterminateState = true;
            }
            if (numOfSelectedEvent === 0) {
                this.indeterminateState = false;
            }
        }
    };
    /*
     * Select toggle events status
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.selectToggleAll = function (event) {
        if (event.checked) {
            this.events.forEach(function (data) {
                data.selected = true;
            });
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            this.events.forEach(function (data) {
                data.selected = false;
            });
            this.selectAll = false;
            this.indeterminateState = false;
        }
    };
    /*
     * Delete Selected events
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.deleteSelectedEvents = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_5__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete Selected Events?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var selectedEvents = _this.getSelectedEvents();
                var idArray = {
                    events: selectedEvents
                };
                var tempPN_1 = _this.setPageNumber(selectedEvents.length);
                _this.userEventService.deleteEventList(idArray).subscribe(function (response) {
                    _this.selectAll = false;
                    _this.indeterminateState = false;
                    _this.comunityService
                        .licenseExpireState(userObj.userData.client.id, "events")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                    });
                    _this.fetchAllEvents(tempPN_1);
                    _this.loader.close();
                    _this.snack.open("Selected Events Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    /*
     * Delete one event
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.deleteOneEvent = function (data) {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_5__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete " + data.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var tempPN_2 = _this.setPageNumber(1);
                _this.userEventService.eventDeleteById(data.id).subscribe(function (response) {
                    _this.comunityService
                        .licenseExpireState(userObj.userData.client.id, "events")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                    });
                    _this.fetchAllEvents(tempPN_2);
                    _this.loader.close();
                    _this.snack.open(data.name + " Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    /*
     * Get Selected events
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.getSelectedEvents = function () {
        var selectedEvents = [];
        this.events.forEach(function (data) {
            if (data.selected) {
                selectedEvents.push({ id: data.id });
            }
        });
        return selectedEvents;
    };
    /*
     * Fetch all events using community id
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.fetchAllEvents = function (pageNumber) {
        var _this = this;
        this.userEventService
            .fetchAllEvents(this.comunityId, pageNumber, this.pageSize)
            .subscribe(function (response) {
            var tempResponse = response;
            var tempEvents = _this.createDateTimeObject(tempResponse.content);
            _this.events = _this.temEvents = tempEvents;
            _this.totalRecords = tempResponse.pagination.totalRecords;
            _this.pageNumber = tempResponse.pagination.pageNumber;
            _this.createPageNavigationBar();
            _this.createPaginationPageSizeArray();
        }, function (error) {
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    /*
     * Convert String date to Date Time Object
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.createDateTimeObject = function (eventsArray) {
        eventsArray.forEach(function (event) {
            event.startDateTime = new Date(event.startDateTime);
            event.endDateTime = new Date(event.endDateTime);
            event.createdDate = new Date(event.createdDate);
            // const eventStatus = this.getEventStatus(event.eventStatus);
            // event.eventStatus = eventStatus;
        });
        return eventsArray;
    };
    /*
     * Convert boolean event status to string status
     * 05-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.getEventStatus = function (eventStatus) {
        if (eventStatus) {
            return "ACTIVE";
        }
        else {
            return "INACTIVE";
        }
    };
    /*
     * Create pagination page size element array
     * 07-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.createPaginationPageSizeArray = function () {
        var totalRec = this.totalRecords;
        var tempArray = [];
        if (totalRec > 10) {
            var rem = totalRec % 10;
            if (rem !== 0) {
                totalRec = totalRec + 10;
            }
            for (var i = 10; i < totalRec;) {
                tempArray.push(i);
                i = i + 10;
            }
        }
        else {
            tempArray.push(10);
        }
        this.pageSizeArray = tempArray;
    };
    /*
     * Search Event in viewed event list
     * 07-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temEvents[0]);
        columns.splice(columns.length - 1);
        if (!columns.length) {
            return;
        }
        var rows = this.temEvents.filter(function (data) {
            for (var i = 0; i <= columns.length; i++) {
                var col = columns[i];
                if (data[col] &&
                    data[col]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.events = rows;
    };
    /*
     * Page size change and update event list according to the page size
     * 06-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.fetchAllEvents(this.pageNumber);
    };
    /*
     * Append newly created event to the event array
     * 06-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.appendNewlyCreatedEvent = function (event) {
        var tempArray = [];
        for (var i = this.events.length; i >= 1; i--) {
            if (i === this.events.length) {
                tempArray.push(event);
            }
            else {
                tempArray.push(this.events[i]);
            }
        }
        this.events = this.temEvents = tempArray;
        this.totalRecords += 1;
        this.createPageNavigationBar();
    };
    /*
     * Create pagination bottom navigation bar
     * 07-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.createPageNavigationBar = function () {
        var devider = this.totalRecords / this.pageSize;
        var numOfPage = Math.ceil(devider);
        if (numOfPage > 1) {
            var temPages = [];
            for (var i = 1; i <= numOfPage; i++) {
                temPages.push(i);
            }
            this.totalPages = temPages;
        }
        else {
            this.totalPages = [];
        }
    };
    /*
     * Set page number according to the total records
     * 07-03-2019
     * Prasad Kumara
     */
    UserEventComponent.prototype.setPageNumber = function (numOfPromo) {
        var tempTR = this.totalRecords - numOfPromo;
        var devider = tempTR / this.pageSize;
        if (devider < this.totalPages.length) {
            return this.pageNumber - 1;
        }
        else {
            return this.pageNumber;
        }
    };
    UserEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-event",
            template: __webpack_require__(/*! ./user-event.component.html */ "./src/app/views/community/user-community/user-event/user-event.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_4__["AppConfirmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__["AppErrorService"],
            _user_event_service__WEBPACK_IMPORTED_MODULE_7__["UserEventService"],
            _community_service__WEBPACK_IMPORTED_MODULE_10__["ComunityService"],
            app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_11__["AppWarningService"],
            app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__["AppInfoService"]])
    ], UserEventComponent);
    return UserEventComponent;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-event/user-event.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-event/user-event.service.ts ***!
  \*********************************************************************************/
/*! exports provided: UserEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventService", function() { return UserEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var UserEventService = /** @class */ (function () {
    function UserEventService(http) {
        this.http = http;
        this.userApiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].userApiUrl;
        //edited by kushan
        this.imageUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].userApiUrl + 'downloads/event/';
    }
    /*
    * Create new Event
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.createEvent = function (createEventData) {
        return this.http.
            post(this.userApiUrl + 'events', createEventData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Fetch all events using community id
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.fetchAllEvents = function (communityId, pageNumber, pageSize) {
        return this.http.
            get(this.userApiUrl + 'events/community/' + communityId + '?pageNumber=' +
            pageNumber + '&pageSize=' + pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Get Event Details using Event Id
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.getEventById = function (eventId) {
        return this.http.
            get(this.userApiUrl + 'events/' + eventId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Update Event
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.eventUpdateById = function (eventId, eventData) {
        return this.http.
            put(this.userApiUrl + 'events/' + eventId, eventData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Delete Event
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.eventDeleteById = function (eventId) {
        return this.http.
            delete(this.userApiUrl + 'events/' + eventId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserEventService.prototype.deleteEventList = function (eventIdList) {
        return this.http.request('delete', this.userApiUrl + 'events', { body: eventIdList })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Handle http response error
    * 05-03-2019
    * Prasad Kumara
    */
    UserEventService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    UserEventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserEventService);
    return UserEventService;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"feedbackForm\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{this.data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"name\" [formControl]=\"feedbackForm.controls['name']\" placeholder=\"Feedback Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-slide-toggle *ngIf=\"!data.isNew\" [formControl]=\"feedbackForm.controls['status']\">Activate Event\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"submit()\" [disabled]=\"feedbackForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CreateFeedbackPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFeedbackPopupComponent", function() { return CreateFeedbackPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-feedback.service */ "./src/app/views/community/user-community/user-feedback/user-feedback.service.ts");
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





var CreateFeedbackPopupComponent = /** @class */ (function () {
    function CreateFeedbackPopupComponent(data, dialogRef, fb, snackBar, userFeedbackService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.userFeedbackService = userFeedbackService;
    }
    CreateFeedbackPopupComponent.prototype.ngOnInit = function () {
        this.buildFeedbackForm(this.data.payload);
    };
    CreateFeedbackPopupComponent.prototype.buildFeedbackForm = function (data) {
        var status = false;
        if (data.status === "ACTIVE") {
            status = true;
        }
        this.feedbackForm = this.fb.group({
            name: [data.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CreateFeedbackPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.feedbackForm.value);
    };
    CreateFeedbackPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-feedback-popup',
            template: __webpack_require__(/*! ./create-feedback-popup.component.html */ "./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _user_feedback_service__WEBPACK_IMPORTED_MODULE_4__["UserFeedbackService"]])
    ], CreateFeedbackPopupComponent);
    return CreateFeedbackPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-feedback/user-feedback.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-feedback/user-feedback.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messages-wrap\">\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\">\r\n    <mat-checkbox (change)=\"selectToggleAll($event)\" [indeterminate]=\"indeterminateState\" [checked]=\"selectAll\"\r\n      class=\"inbox-toggle-all mr-1\"><small>All</small></mat-checkbox>\r\n    <button mat-icon-button matTooltip=\"Add feedback\" (click)=\"feedbackPopUp({}, true)\" [roleAuthorization]=\"'f-c'\">\r\n      <mat-icon>add_box</mat-icon>\r\n    </button>\r\n    <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"indeterminateState || selectAll\"\r\n      (click)=\"deleteSelectedFeedbacks()\"  [roleAuthorization]=\"'f-md'\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button>\r\n    <span fxFlex></span>\r\n    <mat-form-field *ngIf=\"this.temFeedbacks.length > 0\" style=\"font-size: 15px; width: 30%; margin-top: 10px;\">\r\n      <input matInput placeholder=\"Search\" value=\"\" (keyup)='updateFilter($event)'>\r\n    </mat-form-field>\r\n    <p *ngIf=\"this.temFeedbacks.length > 0\" class=\"mat-select-lable\"> Page Size: </p>\r\n    <mat-select *ngIf=\"this.temFeedbacks.length > 0\" class=\"mat-raised-select\" [(value)]=\"pageSize\"\r\n      (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n      <mat-option *ngFor=\"let item of pageSizeArray\" [value]=\"item\">{{item}}</mat-option>\r\n    </mat-select>\r\n  </mat-toolbar>\r\n\r\n\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n      <tr *ngFor=\"let feedback of this.feedbacks\">\r\n        <td>\r\n          <div fxLayout=\"row wrap\">\r\n\r\n            <div fxFlex=\"5\">\r\n              <div style=\"padding-top: 5px;\">\r\n                <mat-checkbox (change)=\"selectToggleOne($event, feedback)\" [checked]=\"feedback.selected\"\r\n                  class=\"mail-checkbox hide-on-open\"></mat-checkbox>\r\n              </div>\r\n            </div>\r\n            <div fxFlex=\"55\">\r\n              <div class=\"custom-vertical-align-middle\" style=\"padding-top: 10px;\">{{  feedback.name }}</div>\r\n            </div>\r\n            <div fxFlex=\"20\">\r\n              <div class=\"custom-vertical-align-middle custom-float-right\" style=\"padding-top: 10px;\">\r\n                <mat-chip mat-sm-chip color=\"{{statusArray[feedback.status]}}\" [selected]=\"true\">\r\n                  {{feedback.status}}\r\n                </mat-chip>\r\n              </div>\r\n            </div>\r\n            <div fxFlex=\"20\">\r\n              <div class=\"custom-float-right\">\r\n                <button mat-icon-button class=\"hidden-on-open\" [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"navigateToSurveyEditor(feedback)\">\r\n                    <mat-icon>view_headline</mat-icon> View\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"feedbackPopUp(feedback, false)\" [roleAuthorization]=\"'f-u'\">\r\n                    <mat-icon>edit</mat-icon> Edit\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"deleteOneFeedback(feedback)\" [roleAuthorization]=\"'f-d'\">\r\n                    <mat-icon>delete</mat-icon> Delete\r\n                  </button>\r\n                </mat-menu>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\" *ngIf=\"this.feedbacks.length > 0\" style=\"font-size: 12px;\">\r\n    <div class=\"pagination\">{{totalRecords}} Created,</div>\r\n    <div class=\"pagination ml-1\">{{usage}} Usage</div>\r\n    <div class=\"pagination ml-1\">{{quota}} Quota</div>\r\n    <span fxFlex></span>\r\n    <ng-container>\r\n      <nav aria-label=\"Promotion Page Navigation\" style=\"color: black;\">\r\n        <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n          <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllFeedbacks(pageNumber-1)\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllFeedbacks(page)\">\r\n              {{page}}\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllFeedbacks(pageNumber+1)\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </ng-container>\r\n  </mat-toolbar>\r\n  <div *ngIf=\"this.temFeedbacks.length === 0 && this.feedbacks.length === 0\" fxLayout=\"row\" fxLayoutAlign=\"center\"\r\n    style=\"margin-top: 10rem;\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h1 class=\"text-muted\">Create New Feedback</h1>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h2 class=\"text-muted\">Click \"Add\" Button</h2>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-feedback/user-feedback.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-feedback/user-feedback.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedbackComponent", function() { return UserFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _community_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/app-warning/app-warning.service */ "./src/app/shared/services/app-warning/app-warning.service.ts");
/* harmony import */ var app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_feedback_popup_create_feedback_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-feedback-popup/create-feedback-popup.component */ "./src/app/views/community/user-community/user-feedback/create-feedback-popup/create-feedback-popup.component.ts");
/* harmony import */ var _user_feedback_user_feedback_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-feedback/user-feedback.service */ "./src/app/views/community/user-community/user-feedback/user-feedback.service.ts");
/* harmony import */ var app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/model/CommunityModel.model */ "./src/app/model/CommunityModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var UserFeedbackComponent = /** @class */ (function () {
    function UserFeedbackComponent(dialog, snack, confirmService, activeRoute, loader, errDialog, userFeedbackService, communityService, appWarningService, appInfoService, router) {
        this.dialog = dialog;
        this.snack = snack;
        this.confirmService = confirmService;
        this.activeRoute = activeRoute;
        this.loader = loader;
        this.errDialog = errDialog;
        this.userFeedbackService = userFeedbackService;
        this.communityService = communityService;
        this.appWarningService = appWarningService;
        this.appInfoService = appInfoService;
        this.router = router;
        this.statusArray = {
            'ACTIVE': "primary",
            'INACTIVE': "accent"
        };
        this.quota = 0;
        this.quotaExpire = false;
        this.usage = 0;
        this.feedbacks = [];
        this.temFeedbacks = [];
        this.indeterminateState = false;
        this.selectAll = false;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
        this.pageSizeArray = [];
        this.feedbackPosterUrl = this.communityService.getPosterDownloadUrl("feedback");
    }
    UserFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].storage_name));
        this.userId = userObj.userData.id;
        this.clientId = userObj.userData.client.id;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.communityId = params["id"];
            _this.communityName = params["name"];
        });
        this.fetchAllFeedbacks(this.pageNumber);
        this.communityService
            .licenseExpireState(userObj.userData.client.id, "feedbacks")
            .subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
            _this.usage = tempRes.content.usage;
        });
    };
    UserFeedbackComponent.prototype.navigateToSurveyEditor = function (data) {
        var _this = this;
        this.userFeedbackService.getFeedbackById(data.id).subscribe(function (successResp) {
            console.log(successResp);
            var extraParam = {
                queryParams: {
                    surveyId: successResp.content.surveyId,
                    communityId: _this.communityId,
                    communityName: _this.communityName
                }
            };
            _this.router.navigate(["future-survey/sEditor"], extraParam);
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserFeedbackComponent.prototype.feedbackPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.communityService.licenseExpireState(this.clientId, "feedbacks").subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
            _this.usage = tempRes.content.usage;
            if (_this.quotaExpire && isNew) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of feedbacks have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            else {
                var title = isNew ? "Create New Feedback" : "Update Feedback";
                var dialogRef = _this.dialog.open(_create_feedback_popup_create_feedback_popup_component__WEBPACK_IMPORTED_MODULE_11__["CreateFeedbackPopupComponent"], {
                    width: "720px",
                    disableClose: true,
                    data: { title: title, payload: data, isNew: isNew }
                });
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        return;
                    }
                    else {
                        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].storage_name));
                        if (userObj) {
                            if (isNew) {
                                var languageJson = "{\"def\":\"en\"}";
                                var compatibility = "2";
                                var pages = [{ name: 'page1' }];
                                var jsonContent = "\"{\\\"locale\\\":\\\"en\\\",\\\"title\\\":\\\"" + res.name + "\\\",\\\"clientId\\\":\\\"faa6643aca8c5318a9583178795542cf\\\",\\\"pages\\\":[{\\\"name\\\":\\\"page1\\\"}]}\"";
                                var fsreq = new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["FutureSurveyData"](res.name, _this.clientId, "1", "1", languageJson, compatibility, pages, jsonContent);
                                var req = new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["FeedbackCreateReq"](res.name, _this.userId, new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["CommunityData"](_this.communityId), fsreq);
                                _this.createFeedback(req);
                            }
                            else {
                                var req = new app_model_CommunityModel_model__WEBPACK_IMPORTED_MODULE_13__["FeedbackUpdateReq"](res.name, _this.getFeedbackStatus(res.status), userObj.id);
                                _this.userFeedbackService.feedbackUpdateById(data.id, req).subscribe(function (response) {
                                    var temData = response;
                                    var i = _this.feedbacks.indexOf(data);
                                    _this.feedbacks[i] = temData.content;
                                    _this.temFeedbacks = _this.feedbacks;
                                    _this.loader.close();
                                    _this.snack.open("Feedback Updated", "close", {
                                        duration: 2000
                                    });
                                }, function (error) {
                                    _this.loader.close();
                                    if (error.status !== 401) {
                                        _this.errDialog.showError(error);
                                    }
                                });
                            }
                        }
                    }
                });
            }
        });
    };
    UserFeedbackComponent.prototype.createFeedback = function (res) {
        var _this = this;
        this.userFeedbackService.createFeedback(res).subscribe(function (response) {
            var temData = response;
            var feedbackId = temData.content.id;
            _this.usage += 1;
            if (_this.usage === _this.quota) {
                _this.quotaExpire = true;
            }
            var remain = _this.quota - _this.usage;
            if (remain === 1) {
                _this.appWarningService.showWarning({
                    title: "License",
                    message: "Your subscription plan is about to expire!</br>One more feedback remaining!"
                });
            }
            else if (remain === 0) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of feedbacks have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            }
            _this.snack.open("New Feedback Created", "close", {
                duration: 2000
            });
            _this.fetchAllFeedbacks(_this.pageNumber);
        }, function (error) {
            _this.loader.close();
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    UserFeedbackComponent.prototype.selectToggleOne = function (feedback, data) {
        var i = this.feedbacks.indexOf(data);
        if (feedback.checked) {
            this.feedbacks[i].selected = true;
            this.indeterminateState = true;
        }
        else {
            this.feedbacks[i].selected = false;
        }
        this.checkAllSelectedState();
    };
    UserFeedbackComponent.prototype.checkAllSelectedState = function () {
        var numOfSelectedFeedback = 0;
        this.feedbacks.forEach(function (data) {
            if (data.selected) {
                numOfSelectedFeedback++;
            }
        });
        if (numOfSelectedFeedback === this.feedbacks.length) {
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            if (this.selectAll) {
                this.selectAll = false;
                this.indeterminateState = true;
            }
            if (numOfSelectedFeedback === 0) {
                this.indeterminateState = false;
            }
        }
    };
    UserFeedbackComponent.prototype.selectToggleAll = function (feedback) {
        if (feedback.checked) {
            this.feedbacks.forEach(function (data) {
                data.selected = true;
            });
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            this.feedbacks.forEach(function (data) {
                data.selected = false;
            });
            this.selectAll = false;
            this.indeterminateState = false;
        }
    };
    UserFeedbackComponent.prototype.deleteSelectedFeedbacks = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete Selected Feedbacks?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var selectedFeedbacks = _this.getSelectedFeedbacks();
                var idArray = {
                    feedbacks: selectedFeedbacks
                };
                var tempPN_1 = _this.setPageNumber(selectedFeedbacks.length);
                _this.userFeedbackService.deleteFeedbackList(idArray).subscribe(function (response) {
                    _this.selectAll = false;
                    _this.indeterminateState = false;
                    _this.communityService
                        .licenseExpireState(userObj.userData.client.id, "feedbacks")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                        _this.usage = tempRes.content.usage;
                    });
                    _this.fetchAllFeedbacks(tempPN_1);
                    _this.loader.close();
                    _this.snack.open("Selected Feedbacks Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    UserFeedbackComponent.prototype.deleteOneFeedback = function (data) {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_4__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete " + data.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var tempPN_2 = _this.setPageNumber(1);
                _this.userFeedbackService.feedbackDeleteById(data.id).subscribe(function (response) {
                    _this.communityService
                        .licenseExpireState(userObj.userData.client.id, "feedbacks")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                        _this.usage = tempRes.content.usage;
                    });
                    _this.fetchAllFeedbacks(tempPN_2);
                    _this.loader.close();
                    _this.snack.open(data.name + " Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    UserFeedbackComponent.prototype.getSelectedFeedbacks = function () {
        var selectedFeedbacks = [];
        this.feedbacks.forEach(function (data) {
            if (data.selected) {
                selectedFeedbacks.push({ id: data.id });
            }
        });
        return selectedFeedbacks;
    };
    UserFeedbackComponent.prototype.fetchAllFeedbacks = function (pageNumber) {
        var _this = this;
        this.userFeedbackService
            .getCommunityFeedbacks(this.communityId, pageNumber, this.pageSize)
            .subscribe(function (response) {
            var tempResponse = response;
            var tempFeedbacks = _this.createDateTimeObject(tempResponse.content);
            _this.feedbacks = _this.temFeedbacks = tempFeedbacks;
            _this.totalRecords = tempResponse.pagination.totalRecords;
            _this.pageNumber = tempResponse.pagination.pageNumber;
            console.log(_this.feedbacks);
            _this.createPageNavigationBar();
            _this.createPaginationPageSizeArray();
        }, function (error) {
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    UserFeedbackComponent.prototype.createDateTimeObject = function (feedbacksArray) {
        feedbacksArray.forEach(function (feedback) {
            feedback.createdDate = new Date(feedback.createdDate);
        });
        return feedbacksArray;
    };
    UserFeedbackComponent.prototype.getFeedbackStatus = function (feedbackStatus) {
        if (feedbackStatus) {
            return "ACTIVE";
        }
        else {
            return "INACTIVE";
        }
    };
    UserFeedbackComponent.prototype.createPaginationPageSizeArray = function () {
        var totalRec = this.totalRecords;
        var tempArray = [];
        if (totalRec > 10) {
            var rem = totalRec % 10;
            if (rem !== 0) {
                totalRec = totalRec + 10;
            }
            for (var i = 10; i < totalRec;) {
                tempArray.push(i);
                i = i + 10;
            }
        }
        else {
            tempArray.push(10);
        }
        this.pageSizeArray = tempArray;
    };
    UserFeedbackComponent.prototype.updateFilter = function (feedback) {
        var val = feedback.target.value.toLowerCase();
        var columns = Object.keys(this.temFeedbacks[0]);
        columns.splice(columns.length - 1);
        if (!columns.length) {
            return;
        }
        var rows = this.temFeedbacks.filter(function (data) {
            for (var i = 0; i <= columns.length; i++) {
                var col = columns[i];
                if (data[col] &&
                    data[col]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.feedbacks = rows;
    };
    UserFeedbackComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.fetchAllFeedbacks(this.pageNumber);
    };
    UserFeedbackComponent.prototype.appendNewlyCreatedFeedback = function (feedback) {
        var tempArray = [];
        for (var i = this.feedbacks.length; i >= 1; i--) {
            if (i === this.feedbacks.length) {
                tempArray.push(feedback);
            }
            else {
                tempArray.push(this.feedbacks[i]);
            }
        }
        this.feedbacks = this.temFeedbacks = tempArray;
        this.totalRecords += 1;
        this.createPageNavigationBar();
    };
    UserFeedbackComponent.prototype.createPageNavigationBar = function () {
        var devider = this.totalRecords / this.pageSize;
        var numOfPage = Math.ceil(devider);
        if (numOfPage > 1) {
            var temPages = [];
            for (var i = 1; i <= numOfPage; i++) {
                temPages.push(i);
            }
            this.totalPages = temPages;
        }
        else {
            this.totalPages = [];
        }
    };
    UserFeedbackComponent.prototype.setPageNumber = function (numOfPromo) {
        var tempTR = this.totalRecords - numOfPromo;
        var devider = tempTR / this.pageSize;
        if (devider < this.totalPages.length) {
            return this.pageNumber - 1;
        }
        else {
            return this.pageNumber;
        }
    };
    UserFeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-feedback',
            template: __webpack_require__(/*! ./user-feedback.component.html */ "./src/app/views/community/user-community/user-feedback/user-feedback.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _user_feedback_user_feedback_service__WEBPACK_IMPORTED_MODULE_12__["UserFeedbackService"],
            _community_service__WEBPACK_IMPORTED_MODULE_7__["ComunityService"],
            app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_8__["AppWarningService"],
            app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_9__["AppInfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], UserFeedbackComponent);
    return UserFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-feedback/user-feedback.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-feedback/user-feedback.service.ts ***!
  \***************************************************************************************/
/*! exports provided: UserFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedbackService", function() { return UserFeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFeedbackService = /** @class */ (function () {
    function UserFeedbackService(http) {
        this.http = http;
        this.feedbackUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "feedback";
    }
    UserFeedbackService.prototype.getFeedbackById = function (id) {
        return this.http.get(this.feedbackUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // getCommunityFeedbacks(id: string): Observable<any> {
    //   return this.http.get(this.feedbackUrl + "/community/" + id).pipe(catchError(this.handleError));
    // }
    UserFeedbackService.prototype.createFeedback = function (createEventData) {
        return this.http.
            post(this.feedbackUrl, createEventData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserFeedbackService.prototype.getCommunityFeedbacks = function (communityId, pageNumber, pageSize) {
        return this.http.
            get(this.feedbackUrl + "/community/" + communityId + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserFeedbackService.prototype.feedbackUpdateById = function (feedbackId, feedbackData) {
        return this.http.put(this.feedbackUrl + "/" + feedbackId, feedbackData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserFeedbackService.prototype.feedbackDeleteById = function (feedbackId) {
        return this.http.delete(this.feedbackUrl + "/" + feedbackId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserFeedbackService.prototype.deleteFeedbackList = function (feedbackIdList) {
        return this.http.request('delete', this.feedbackUrl, { body: feedbackIdList }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserFeedbackService.prototype.handleError = function (error) {
        // console.log(error);
        if (error.status !== 401) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
    };
    UserFeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserFeedbackService);
    return UserFeedbackService;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"promotionForm\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"name\" [formControl]=\"promotionForm.controls['name']\" placeholder=\"Promotion Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Description\" [formControl]=\"promotionForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"start\" [min]=\"startDateMin\" [max]=\"startDateMax\" (dateChange)=\"validateDatePickerMinMax()\"\r\n            [matDatepicker]=\"picker1\" [formControl]=\"promotionForm.controls['startDate']\" required placeholder=\"Start Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"end\" [min]=\"endDateMin\" [max]=\"endDateMax\" (dateChange)=\"validateDatePickerMinMax()\"\r\n            [matDatepicker]=\"picker2\" [formControl]=\"promotionForm.controls['endDate']\" required placeholder=\"End Date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"percentage\" [formControl]=\"promotionForm.controls['percentage']\" positiveNumberOnly\r\n            placeholder=\"Discount\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <!-- --------- hidden file input --------- -->\r\n        <input (change)=\"onSelectFile($event)\" #eventImgs type=\"file\" [formControl]=\"promotionForm.controls['promoPoster']\"\r\n          multiple style=\"display: none\" />\r\n        <!-- --------- file input click button --------- -->\r\n        <div layout-margin layout-padding>\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"eventImgs.click()\" [disabled]=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n          (false) :\r\n          (this.currentTotalImageCount === this.maxUploadableFileCount)\"\r\n            type=\"button\">\r\n            Browse Images\r\n            <span *ngIf=\"this.maxUploadableFileCount === null || this.maxUploadableFileCount < 1 ?\r\n            (false) :\r\n            (this.currentTotalImageCount > 0)\">\r\n              ({{this.currentTotalImageCount}} / {{this.maxUploadableFileCount}})</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"100\" class=\"pr-1\" *ngIf=\"!data.isNew\">\r\n        <mat-slide-toggle [formControl]=\"promotionForm.controls['status']\">Activate Event</mat-slide-toggle>\r\n      </div>\r\n      <!-- <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngFor='let url of urls; let i = index' fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" style=\"display: flex;\">\r\n        <mat-card class=\"p-0\">\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"removeSelectedImg(i)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <img [src]=\"url\">\r\n        </mat-card>\r\n      </div> -->\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"event_update_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\" class=\"mt-1\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;max-height: 200px\">\r\n          <mat-card class=\"p-0\">\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n              <span fxFlex></span>\r\n              <button type=\"button\" class=\"close p-1\" aria-label=\"Close\" (click)=\"removeSelectedImg()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"promotionFormSubmit()\" [disabled]=\"promotionForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: MY_FORMATS, CreatePromotionPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePromotionPopupComponent", function() { return CreatePromotionPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/utility/dateValidator */ "./src/app/utility/dateValidator.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_promotion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-promotion.service */ "./src/app/views/community/user-community/user-promotion/user-promotion.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var MY_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD'
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'YYYY-MM-DD',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
var CreatePromotionPopupComponent = /** @class */ (function () {
    function CreatePromotionPopupComponent(data, dialogRef, fb, snackBar, datePipe, activeRoute, errDialog, userPromotionService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.activeRoute = activeRoute;
        this.errDialog = errDialog;
        this.userPromotionService = userPromotionService;
        this.currentTotalImageCount = 0;
        this.maxUploadableFileCount = 1;
        this.newlySelectedFileList = [];
        this.urls = [];
        this.remainImagesID = [];
        this.minHeight = 200;
        this.minWidth = 400;
    }
    CreatePromotionPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.isNew) {
            this.getPromotionById(this.data.payload.id);
        }
        this.buildPromotionForm(this.data.payload);
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.comunityId = params['id'];
            _this.comunityName = params['name'];
        });
        this.setStartDateMin();
        //edited by kushan
        this.imgBaseURL = this.userPromotionService.imageUrl;
    };
    /*
    * Build promotion create and update form
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.buildPromotionForm = function (promotionFormData) {
        var _this = this;
        this.promotionForm = this.fb.group({
            name: [promotionFormData.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [promotionFormData.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [promotionFormData.status || false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            percentage: [promotionFormData.percentage || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: [promotionFormData.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: [promotionFormData.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            promoPoster: ['']
        });
        getBase64ImageFromUrl(this.imgBaseURL + promotionFormData.id)
            .then(function (result) { return _this.url = result; })
            .catch(function (err) { return console.error(err); });
    };
    /*
    * Set start date min value
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.setStartDateMin = function () {
        var payload = this.data.payload;
        var today = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__["DateValidator"].getToday();
        var startDate = new Date(payload.start);
        if (payload) {
            if (startDate < today) {
                this.startDateMin = startDate;
            }
            else {
                this.startDateMin = today;
            }
        }
    };
    /*
    * Validate start and end date min and max value
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.validateDatePickerMinMax = function () {
        var startDateValue = this.promotionForm.get('startDate').value;
        var endDateValue = this.promotionForm.get('endDate').value;
        if (startDateValue == null && endDateValue == null) {
            this.startDateMin = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__["DateValidator"].getToday();
            this.endDateMin = app_utility_dateValidator__WEBPACK_IMPORTED_MODULE_5__["DateValidator"].getToday();
        }
        else {
            if (startDateValue != null) {
                this.endDateMin = startDateValue;
            }
            if (endDateValue != null) {
                this.startDateMax = endDateValue;
            }
        }
    };
    /*
    * Image upload function
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.onSelectFile = function (event) {
        // if (event.target.files && event.target.files[0]) {
        //   const filesAmount = event.target.files.length;
        //   if (
        //     this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
        //       ? true
        //       : this.currentTotalImageCount + filesAmount <=
        //       this.maxUploadableFileCount
        //   ) {
        //     for (let i = 0; i < filesAmount; i++) {
        //       const fileName = event.target.files[i].name;
        //       const fileExtension = fileName.replace(/^.*\./, '');
        //       if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
        //         const reader = new FileReader();
        //         reader.onload = (ev: any) => {
        //           const img = new Image();
        //           img.src = ev.target.result;
        //           img.onload = () => {
        //             const widthReminder = img.width % 4;
        //             const heightReminder = img.height % 3;
        //             if (img.width < this.minWidth && img.height < this.minHeight) {
        //               this.snackBar.open(
        //                 'Image minimum dimension should be ' + this.minWidth + 'X' + this.minHeight,
        //                 'close',
        //                 { duration: 3000 }
        //               );
        //               this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
        //               this.currentTotalImageCount--;
        //               return;
        //             }
        //             if (widthReminder !== 0 || heightReminder !== 0) {
        //               this.snackBar.open(
        //                 'Image aspect ratio should be 4:3 (' + this.minWidth + 'X' + this.minHeight + ')' ,
        //                 'close',
        //                 { duration: 3000 }
        //               );
        //               this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
        //               this.currentTotalImageCount--;
        //               return;
        //             }
        //             this.urls.push(ev.target.result);
        //             this.promotionForm.controls['promoPoster'].setErrors(null);
        //           };
        //         };
        //         reader.readAsDataURL(event.target.files[i]);
        //         this.newlySelectedFileList.push(event.target.files[i]);
        //         this.currentTotalImageCount++;
        //       } else {
        //         this.snackBar.open(
        //           'Upload valiid images. Only PNG, JPG and JPEG are allowed!',
        //           'close',
        //           { duration: 3000 }
        //         );
        //         this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
        //         this.currentTotalImageCount--;
        //         return;
        //       }
        //     }
        var _this = this;
        //   } else {
        //     // alert for file upload limit
        //     this.snackBar.open(
        //       'Can\'t upload more than ' + this.maxUploadableFileCount + ' photos',
        //       'close',
        //       { duration: 2000 }
        //     );
        //   }
        // }
        if (event.target.files && event.target.files[0]) {
            // const fileName = event.target.files[i].name;
            // const fileExtension = fileName.replace(/^.*\./, '');
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            console.log(file);
            reader.onload = function (event) {
                var img = new Image();
                img.src = event.target.result;
                img.onload = function () {
                    if (img.width < _this.minWidth || img.height < _this.minHeight) {
                        _this.url = event.target.result;
                    }
                    else {
                        _this.snackBar.open('Image minimum dimension should be ' + _this.minWidth + 'X' + _this.minHeight, 'close', { duration: 3000 });
                        _this.promotionForm.controls['promoPoster'].setErrors({ 'incorrect': true });
                        return;
                    }
                };
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    /*
    * Remove uploade image
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.removeSelectedImg = function (index) {
        // this.urls.splice(index, 1);
        // this.currentTotalImageCount -= 1;
        // this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
        // if (this.remainImagesID.length < index + 1) {
        //   this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
        // } else {
        //   this.remainImagesID.splice(index, 1);
        // }
        this.url = null;
    };
    /*
    * Convert Json to form data
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.prepareOfferFormData = function (formValues) {
        var promotionFormData = new FormData();
        promotionFormData.append('communityId', this.comunityId);
        promotionFormData.append('name', formValues.name);
        promotionFormData.append('description', formValues.description);
        promotionFormData.append('startDate', formValues.startDate);
        promotionFormData.append('endDate', formValues.endDate);
        promotionFormData.append('status', formValues.status);
        promotionFormData.append('percentage', formValues.percentage);
        for (var i = 0; i < this.newlySelectedFileList.length; i++) {
            var selectedFile = this.newlySelectedFileList[i];
            var type = selectedFile.type.split("/");
            var imageName = 'image_' + i + '.' + type[1];
            promotionFormData.append('promoPoster', selectedFile, imageName);
        }
        return promotionFormData;
    };
    /*
    * Promotion form value submit
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.promotionFormSubmit = function () {
        // const promotionFormData = this.prepareOfferFormData(this.promotionForm.value);
        var promotionFormData = this.promotionForm.value;
        if (this.url) {
            promotionFormData.promoPoster = this.url;
            var startDate = this.datePipe.transform(this.promotionForm.value.startDate, 'yyy-MM-dd');
            var endDate = this.datePipe.transform(this.promotionForm.value.endDate, 'yyy-MM-dd');
            promotionFormData.startDate = startDate;
            promotionFormData.endDate = endDate;
            console.log(promotionFormData);
            this.dialogRef.close(promotionFormData);
        }
        else {
            this.snackBar.open("Please upload image", "close", { duration: 2000 });
            this.promotionForm.controls['poster'].setErrors({ 'incorrect': true });
        }
    };
    /*
    * Create image url
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.createImgUrls = function (promotion) {
        if (promotion.hasOwnProperty('promoPoster')) {
            this.urls.push(promotion.promoPoster);
            this.currentTotalImageCount = 1;
        }
    };
    /*
    * Get promtion data using promotion id
    * 06-03-2019
    * Prasad Kumara
    */
    CreatePromotionPopupComponent.prototype.getPromotionById = function (promotionId) {
        var _this = this;
        this.userPromotionService.getPromotionById(promotionId)
            .subscribe(function (response) {
            var tempArr = response;
            if (tempArr.content.status === 'INACTIVE') {
                tempArr.content.status = false;
            }
            else {
                tempArr.content.status = true;
            }
            _this.buildPromotionForm(tempArr.content);
            _this.createImgUrls(tempArr.content);
        }, function (error) {
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    CreatePromotionPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-promotion-popup',
            template: __webpack_require__(/*! ./create-promotion-popup.component.html */ "./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"],
                    deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__["AppErrorService"],
            _user_promotion_service__WEBPACK_IMPORTED_MODULE_8__["UserPromotionService"]])
    ], CreatePromotionPopupComponent);
    return CreatePromotionPopupComponent;
}());

/* created by kushan pabasara */
function getBase64ImageFromUrl(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(imageUrl)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.addEventListener("load", function () {
                                resolve(reader.result);
                            }, false);
                            reader.onerror = function () {
                                return reject(_this);
                            };
                            reader.readAsDataURL(blob);
                        })];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/views/community/user-community/user-promotion/user-promotion.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-promotion/user-promotion.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messages-wrap\">\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\">\r\n    <!-- multiple promotions select and control -->\r\n    <mat-checkbox (change)=\"selectToggleAll($event)\" [indeterminate]=\"indeterminateState\" [checked]=\"selectAll\" class=\"inbox-toggle-all mr-1\"><small>All</small></mat-checkbox>\r\n    <button mat-icon-button matTooltip=\"Add Promotion\" (click)=\"promotionPopUp({}, true)\"><mat-icon>add_box</mat-icon></button>\r\n    <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"indeterminateState || selectAll\" (click)=\"deleteSelectedPromotions()\"><mat-icon>delete</mat-icon></button>\r\n    <span fxFlex></span>\r\n    <mat-form-field *ngIf=\"this.temPromotions.length > 0\" style=\"font-size: 15px; width: 30%; margin-top: 10px;\">\r\n      <input matInput placeholder=\"Search\" value=\"\" (keyup)='updateFilter($event)'>\r\n    </mat-form-field>\r\n    <p *ngIf=\"this.temPromotions.length > 0\" class=\"mat-select-lable\"> Page Size: </p>\r\n    <mat-select *ngIf=\"this.temPromotions.length > 0\" class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\" placeholder=\"Favorite food\">\r\n      <mat-option *ngFor=\"let item of pageSizeArray\" [value]=\"item\">{{item}}</mat-option>\r\n      <!-- <mat-option [value]=\"20\">20</mat-option> -->\r\n    </mat-select>\r\n  </mat-toolbar>\r\n  <mat-accordion>\r\n    <mat-expansion-panel *ngFor=\"let promoObj of promotions\" expanded=\"false\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-checkbox (change)=\"selectToggleOne($event, promoObj)\" [checked]=\"promoObj.selected\" (click)=\"stopProp($event)\" class=\"mail-checkbox hide-on-open\"></mat-checkbox>\r\n          <span style=\"width: 130px; overflow: hidden;\r\n          white-space: nowrap;\r\n          text-overflow: ellipsis;\" class=\"hide-on-open\">{{ promoObj.name }}</span>\r\n          <div fxFlex=\"1 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"show-on-open\">\r\n            <!-- <img [src]=\"promoObj.file\" alt=\"\" class=\"inbox-face mr-1\"> -->\r\n            <div fxLayout=\"column\">\r\n              <span class=\"m-0\">{{ promoObj.name }}</span>\r\n              <small class=\"text-muted m-0\">Start Date : {{promoObj.startDate | date}}, End Date :\r\n                {{promoObj.endDate | date}}</small>\r\n            </div>\r\n          </div>\r\n          <span fxFlex></span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"mail-subject text-sm mat-color-default hide-on-open\">\r\n            <mat-chip *ngIf=\"promoObj.status === 'ACTIVE'\" mat-sm-chip color=\"primary\" [selected]=\"true\">Active</mat-chip>\r\n            <mat-chip *ngIf=\"promoObj.status === 'INACTIVE'\" mat-sm-chip color=\"warn\" [selected]=\"true\">Inactive</mat-chip>\r\n          </span>\r\n          <span fxFlex></span>\r\n          <span class=\"text-sm\" fxHide.lt-sm=\"true\">{{promoObj.createdDate | relativeTime}}</span>\r\n          <button mat-icon-button [matMenuTriggerFor]=\"msgMenu\" (click)=\"stopProp($event)\" class=\"hidden-on-open\">\r\n            <mat-icon class=\"text-muted\">more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #msgMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"promotionPopUp(promoObj, false)\">\r\n              <mat-icon>edit</mat-icon> Edit\r\n            </button>\r\n            <button mat-menu-item (click)=\"deletePromotion(promoObj)\">\r\n              <mat-icon>delete</mat-icon> Delete\r\n            </button>\r\n          </mat-menu>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"40\" class=\"pr-1\">\r\n          <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n            <img style=\"padding: 10px;\" mat-card-image [src]=\"promoPosterUrl+promoObj.id\" alt=\"promoObj.name\">\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex=\"60\" class=\"pr-1\">\r\n          <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\">\r\n              <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n                <mat-card-content>\r\n                  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n                    <small class=\"text-muted\">Event Description</small>\r\n                  </div>\r\n                  <p style=\"padding-top: 10px;\" class=\"md-body-1\">{{ promoObj.description }}</p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\">\r\n              <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"30\">\r\n                  <mat-card>\r\n                    <mat-card-title fxLayoutAlign=\"start center\">\r\n                      <small class=\"text-muted\">Start Date & Time</small>\r\n                      <span fxFlex></span>\r\n                      <mat-icon color=\"primary\">play_arrow</mat-icon>\r\n                    </mat-card-title>\r\n                    <mat-card-content>\r\n                      <h6 class=\"m-0 font-normal\">{{ promoObj.startDate | date:'MMM d, y, h:mm a'}}</h6>\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n                </div>\r\n                <div fxFlex=\"30\">\r\n                  <mat-card>\r\n                    <mat-card-title fxLayoutAlign=\"start center\">\r\n                      <small class=\"text-muted\">End Date & Time</small>\r\n                      <span fxFlex></span>\r\n                      <mat-icon color=\"warn\">stop</mat-icon>\r\n                    </mat-card-title>\r\n                    <mat-card-content>\r\n                      <h6 class=\"m-0 font-normal\">{{ promoObj.endDate | date:'MMM d, y, h:mm a'}}</h6>\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n                </div>\r\n                <div fxFlex=\"40\">\r\n                  <mat-card>\r\n                    <mat-card-content>\r\n                      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                        <div fxFlex=\"40\" >\r\n                          <small class=\"text-muted discount-mt\">DISCOUNT</small>\r\n                        </div>\r\n                        <div fxFlex=\"60\">\r\n                          <h6 class=\"m-0 discount-font\">{{ promoObj.percentage }} %</h6>\r\n                        </div>\r\n                      </div>\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n  <mat-toolbar color=\"primary\" class=\"inbox-toolbar\" *ngIf=\"this.temPromotions.length > 0\" style=\"font-size: 12px;\">\r\n    <div class=\"pagination\">{{totalRecords}} Created,</div>\r\n    <div class=\"pagination ml-1\">{{quota}} Quota</div>\r\n    <span fxFlex></span>\r\n    <ng-container>\r\n      <nav aria-label=\"Promotion Page Navigation\" style=\"color: black;\">\r\n        <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n          <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllPromotions(pageNumber-1)\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllPromotions(page)\">\r\n              {{page}}\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\"  [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n            <a class=\"page-link\" (click)=\"fetchAllPromotions(pageNumber+1)\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </ng-container>\r\n  </mat-toolbar>\r\n  <div *ngIf=\"this.temPromotions.length === 0 && this.promotions.length === 0\" fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin-top: 10rem;\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h1 class=\"text-muted\">Create New Promotion</h1>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"text-center\">\r\n      <h2 class=\"text-muted\">Click \"Add\" Button</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/community/user-community/user-promotion/user-promotion.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-promotion/user-promotion.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPromotionComponent", function() { return UserPromotionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _create_promotion_popup_create_promotion_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-promotion-popup/create-promotion-popup.component */ "./src/app/views/community/user-community/user-promotion/create-promotion-popup/create-promotion-popup.component.ts");
/* harmony import */ var _user_promotion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-promotion.service */ "./src/app/views/community/user-community/user-promotion/user-promotion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../shared/services/auth/auth-properties */ "./src/app/shared/services/auth/auth-properties.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _community_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../community.service */ "./src/app/views/community/community.service.ts");
/* harmony import */ var app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/app-warning/app-warning.service */ "./src/app/shared/services/app-warning/app-warning.service.ts");
/* harmony import */ var app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/app-info/app-info.service */ "./src/app/shared/services/app-info/app-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserPromotionComponent = /** @class */ (function () {
    function UserPromotionComponent(dialog, snack, activeRoute, confirmService, loader, errDialog, userPromotionService, comunityService, appWarningService, appInfoService) {
        this.dialog = dialog;
        this.snack = snack;
        this.activeRoute = activeRoute;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.userPromotionService = userPromotionService;
        this.comunityService = comunityService;
        this.appWarningService = appWarningService;
        this.appInfoService = appInfoService;
        this.promotions = [];
        this.temPromotions = [];
        this.indeterminateState = false;
        this.selectAll = false;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalPages = [];
        this.totalRecords = 0;
        this.pageSizeArray = [];
        this.quota = 0;
        this.quotaExpire = false;
        this.promoPosterUrl = this.comunityService.getPosterDownloadUrl("promo");
    }
    UserPromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name));
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.comunityId = params["id"];
            _this.comunityName = params["name"];
        });
        this.fetchAllPromotions(this.pageNumber, true);
        this.comunityService
            .licenseExpireState(userObj.userData.client.id, "promos")
            .subscribe(function (response) {
            var tempRes = response;
            _this.quotaExpire = tempRes.content.expired;
            _this.quota = tempRes.content.quota;
        });
    };
    /*
     * Expantion pannel prevent expantion
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    /*
     * Promotion Create and Update popup window
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.promotionPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (this.quotaExpire && isNew) {
            var infoData = {
                title: "License",
                message: "You subscribed number of promotions have expired!</br>" +
                    '<small class="text-muted">Do you like to extend the plan?</small>',
                linkData: {
                    url: "https://www.google.com/gmail/",
                    buttonText: "Extend"
                }
            };
            this.appInfoService.showInfo(infoData);
        }
        else {
            var title = isNew ? "Create New Promotion" : "Update Promotion";
            var dialogRef = this.dialog.open(_create_promotion_popup_create_promotion_popup_component__WEBPACK_IMPORTED_MODULE_4__["CreatePromotionPopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { title: title, payload: data, isNew: isNew }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    return;
                }
                else {
                    _this.loader.open();
                    var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name));
                    if (userObj) {
                        if (isNew) {
                            res["community"] = {
                                id: _this.comunityId
                            };
                            var clientId = userObj.userData.client.id;
                            res.status = _this.getPromotionStatus(res.status);
                            _this.comunityService
                                .licenseExpireState(clientId, "promos")
                                .subscribe(function (response) {
                                var tempRes = response;
                                _this.quotaExpire = tempRes.content.expired;
                                if (!tempRes.content.expired) {
                                    _this.loader.close();
                                    _this.createPromotion(res, tempRes.content.usage, tempRes.content.quota);
                                }
                            });
                            // this.createPromotion(res);
                        }
                        else {
                            res["lastModifiedUserId"] = userObj.id;
                            res.status = _this.getPromotionStatus(res.status);
                            _this.userPromotionService
                                .updatePromotionById(data.id, res)
                                .subscribe(function (response) {
                                var temData = response;
                                var i = _this.promotions.indexOf(data);
                                _this.promotions[i] = temData.content;
                                _this.temPromotions = _this.promotions;
                                _this.loader.close();
                                _this.snack.open("Promotion Updated", "close", {
                                    duration: 2000
                                });
                            }, function (error) {
                                _this.loader.close();
                                if (error.status !== 401) {
                                    _this.errDialog.showError(error);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    UserPromotionComponent.prototype.createPromotion = function (res, usage, tempQuoata) {
        var _this = this;
        this.userPromotionService.createPromotion(res).subscribe(function (response) {
            var temData = response;
            if (_this.promotions.length === _this.pageSize) {
                _this.appendNewlyCreatedPromotion(temData.content);
            }
            else {
                _this.promotions.push(temData.content);
                _this.temPromotions = _this.promotions;
                _this.totalRecords += 1;
            }
            _this.loader.close();
            if (_this.totalRecords === _this.quota) {
                _this.quotaExpire = true;
            }
            // this.fetchAllPromotions(this.pageNumber);
            if (usage < tempQuoata - 1 && tempQuoata - usage === 2) {
                _this.appWarningService.showWarning({
                    title: "License",
                    message: "Your subscription plan is about to expire!</br>One more promotion remaining!"
                });
            }
            else if (usage < tempQuoata && tempQuoata - usage === 1) {
                var infoData = {
                    title: "License",
                    message: "You subscribed number of promotions have expired!</br>" +
                        '<small class="text-muted">Do you like to extend the plan?</small>',
                    linkData: {
                        url: "https://www.google.com/gmail/",
                        buttonText: "Extend"
                    }
                };
                _this.appInfoService.showInfo(infoData);
            } // else {
            _this.snack.open("New Promotion Created", "close", {
                duration: 2000
            });
            // }
        }, function (error) {
            _this.loader.close();
            if (error.status !== 401) {
                _this.errDialog.showError(error);
            }
        });
    };
    /*
     * Set Selected status in one promotion
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.selectToggleOne = function (event, data) {
        var i = this.promotions.indexOf(data);
        if (event.checked) {
            this.promotions[i].selected = true;
            this.indeterminateState = true;
        }
        else {
            this.promotions[i].selected = false;
        }
        this.checkAllSelectedState();
    };
    /*
     * Set selectd status of all promotions
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.checkAllSelectedState = function () {
        var numOfSelectedEvent = 0;
        this.promotions.forEach(function (data) {
            if (data.selected) {
                numOfSelectedEvent++;
            }
        });
        if (numOfSelectedEvent === this.promotions.length) {
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            if (this.selectAll) {
                this.selectAll = false;
                this.indeterminateState = true;
            }
            if (numOfSelectedEvent === 0) {
                this.indeterminateState = false;
            }
        }
    };
    /*
     * Select toggle promotions status
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.selectToggleAll = function (event) {
        if (event.checked) {
            this.promotions.forEach(function (data) {
                data.selected = true;
            });
            this.selectAll = true;
            this.indeterminateState = false;
        }
        else {
            this.promotions.forEach(function (data) {
                data.selected = false;
            });
            this.selectAll = false;
            this.indeterminateState = false;
        }
    };
    /*
     * Delete selected events
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.deleteSelectedPromotions = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete Selected Promotions?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var selectedEvents = _this.getSelectedPromotions();
                var idArray = {
                    promos: selectedEvents
                };
                var tempPN_1 = _this.setPageNumber(selectedEvents.length);
                _this.userPromotionService.deletePromotionList(idArray).subscribe(function (response) {
                    _this.loader.close();
                    _this.selectAll = false;
                    _this.indeterminateState = false;
                    _this.fetchAllPromotions(tempPN_1);
                    _this.comunityService
                        .licenseExpireState(userObj.userData.client.id, "promos")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                    });
                    _this.snack.open("Selected Promotions Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    /*
     * Delete one promotion
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.deletePromotion = function (data) {
        var _this = this;
        var userObj = JSON.parse(localStorage.getItem(_shared_services_auth_auth_properties__WEBPACK_IMPORTED_MODULE_7__["authProperties"].storage_name));
        this.confirmService
            .confirm({ message: "Do You want to Delete " + data.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                var tempPN_2 = _this.setPageNumber(1);
                _this.userPromotionService.deletePromotionById(data.id).subscribe(function (response) {
                    _this.comunityService
                        .licenseExpireState(userObj.userData.client.id, "promos")
                        .subscribe(function (resData) {
                        var tempRes = resData;
                        _this.quotaExpire = tempRes.content.expired;
                        _this.quota = tempRes.content.quota;
                    });
                    _this.fetchAllPromotions(tempPN_2);
                    _this.loader.close();
                    _this.snack.open(data.name + " Deleted", "close", {
                        duration: 2000
                    });
                }, function (error) {
                    _this.loader.close();
                    if (error.status !== 401) {
                        _this.errDialog.showError(error);
                    }
                });
            }
        });
    };
    /*
     * Return all selected promotions id list
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.getSelectedPromotions = function () {
        var selectedEvents = [];
        this.promotions.forEach(function (data) {
            if (data.selected) {
                selectedEvents.push({ id: data.id });
            }
        });
        return selectedEvents;
    };
    /*
     * Search all events with pagination
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.fetchAllPromotions = function (pageNumber, firstTime) {
        var _this = this;
        if (firstTime === void 0) { firstTime = false; }
        if (pageNumber === 1 ||
            (0 < pageNumber && pageNumber <= this.totalPages.length)) {
            this.userPromotionService
                .fetchAllPromotions(this.comunityId, pageNumber, this.pageSize)
                .subscribe(function (response) {
                var resData = response;
                _this.promotions = _this.temPromotions = resData.content;
                _this.totalRecords = resData.pagination.totalRecords;
                _this.pageNumber = resData.pagination.pageNumber;
                _this.createPageNavigationBar();
                _this.createPaginationPageSizeArray();
            });
        }
    };
    /*
     * Search Promotions in viewed promotion list
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temPromotions[0]);
        columns.splice(columns.length - 1);
        if (!columns.length) {
            return;
        }
        var rows = this.temPromotions.filter(function (data) {
            for (var i = 0; i <= columns.length; i++) {
                var col = columns[i];
                if (data[col] &&
                    data[col]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.promotions = rows;
    };
    /*
     * Page size change and update promotion list according to the page size
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.changeValue = function () {
        this.pageNumber = 1;
        this.fetchAllPromotions(this.pageNumber);
    };
    /*
     * Create pagination page size element array
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.createPaginationPageSizeArray = function () {
        var totalRec = this.totalRecords;
        var tempArray = [];
        if (totalRec > 10) {
            var rem = totalRec % 10;
            if (rem !== 0) {
                totalRec = totalRec + 10;
            }
            for (var i = 10; i < totalRec;) {
                tempArray.push(i);
                i = i + 10;
            }
        }
        else {
            tempArray.push(10);
        }
        this.pageSizeArray = tempArray;
    };
    /*
     * Append newly created promotion to the promotion array
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.appendNewlyCreatedPromotion = function (promotion) {
        var tempArray = [];
        for (var i = 1; i <= this.promotions.length; i++) {
            if (i === this.promotions.length) {
                tempArray.push(promotion);
            }
            else {
                tempArray.push(this.promotions[i]);
            }
        }
        this.promotions = this.temPromotions = tempArray;
        this.totalRecords += 1;
        this.createPageNavigationBar();
    };
    /*
     * Create pagination bottom navigation bar
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.createPageNavigationBar = function () {
        var devider = this.totalRecords / this.pageSize;
        var numOfPage = Math.ceil(devider);
        if (numOfPage > 1) {
            var temPages = [];
            for (var i = 1; i <= numOfPage; i++) {
                temPages.push(i);
            }
            this.totalPages = temPages;
        }
        else {
            this.totalPages = [];
        }
    };
    /*
     * Set page number according to the total records
     * 06-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.setPageNumber = function (numOfPromo) {
        var tempTR = this.totalRecords - numOfPromo;
        var devider = tempTR / this.pageSize;
        if (devider < this.totalPages.length) {
            return this.pageNumber - 1;
        }
        else {
            return this.pageNumber;
        }
    };
    /*
     * Convert boolean event status to string status
     * 07-03-2019
     * Prasad Kumara
     */
    UserPromotionComponent.prototype.getPromotionStatus = function (eventStatus) {
        if (eventStatus) {
            return "ACTIVE";
        }
        else {
            return "INACTIVE";
        }
    };
    UserPromotionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-promotion",
            template: __webpack_require__(/*! ./user-promotion.component.html */ "./src/app/views/community/user-community/user-promotion/user-promotion.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_9__["AppErrorService"],
            _user_promotion_service__WEBPACK_IMPORTED_MODULE_5__["UserPromotionService"],
            _community_service__WEBPACK_IMPORTED_MODULE_10__["ComunityService"],
            app_shared_services_app_warning_app_warning_service__WEBPACK_IMPORTED_MODULE_11__["AppWarningService"],
            app_shared_services_app_info_app_info_service__WEBPACK_IMPORTED_MODULE_12__["AppInfoService"]])
    ], UserPromotionComponent);
    return UserPromotionComponent;
}());



/***/ }),

/***/ "./src/app/views/community/user-community/user-promotion/user-promotion.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/community/user-community/user-promotion/user-promotion.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserPromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPromotionService", function() { return UserPromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var UserPromotionService = /** @class */ (function () {
    function UserPromotionService(http) {
        this.http = http;
        this.userApiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].userApiUrl;
        //edited by kushan
        this.imageUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].userApiUrl + 'downloads/promo/';
    }
    /*
    * Create Promotion
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.createPromotion = function (promotionData) {
        return this.http.
            post(this.userApiUrl + 'promotions', promotionData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Update Promotion using promotion id
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.updatePromotionById = function (promotionId, promotionData) {
        return this.http.
            put(this.userApiUrl + 'promotions/' + promotionId, promotionData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Delete Promotion using promotion id
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.deletePromotionById = function (promotionId) {
        return this.http.
            delete(this.userApiUrl + 'promotions/' + promotionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Delete Promotion list
    * Here delete request is not working properly with body parameter. That's why request method used
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.deletePromotionList = function (promotionIdList) {
        return this.http.request('delete', this.userApiUrl + 'promotions', { body: promotionIdList })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Get promotion details using promotion id
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.getPromotionById = function (promotionId) {
        return this.http.
            get(this.userApiUrl + 'promotions/' + promotionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Promotion search with pagination
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.fetchAllPromotions = function (communityId, pageNumber, pageSize) {
        return this.http.
            get(this.userApiUrl + 'promotions/community/' + communityId + '?pageNumber=' +
            pageNumber + '&pageSize=' + pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /*
    * Handle http response errors
    * 06-03-2019
    * Prasad Kumara
    */
    UserPromotionService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    UserPromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserPromotionService);
    return UserPromotionService;
}());



/***/ })

}]);
//# sourceMappingURL=views-community-community-module.js.map