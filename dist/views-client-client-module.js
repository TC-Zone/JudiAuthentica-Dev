(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-client-client-module"],{

/***/ "./src/app/shared/helpers/countries.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/helpers/countries.ts ***!
  \*********************************************/
/*! exports provided: CountryDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDB", function() { return CountryDB; });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
        this.countries = [
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Åland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'AndorrA', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'S Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'RWANDA', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States', code: 'US' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' }
        ];
    }
    return CountryDB;
}());



/***/ }),

/***/ "./src/app/views/client/client.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/client/client.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <!-- <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/ui_icons/users.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">Clients</div>\r\n        <div class=\"subtitle mb-05\">ClearPicture</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily manage Users.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/clients/client-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>person</mat-icon>\r\n            Clients\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/clients/role-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            User Roles\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n  </div> -->\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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



var ClientComponent = /** @class */ (function () {
    function ClientComponent(router) {
        this.router = router;
    }
    ClientComponent.prototype.ngOnInit = function () {
        // this.router.navigate(["clients/client-table"]);
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/views/client/client.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm5/ngx-intl-tel-input.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _clients_client_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/client-table.component */ "./src/app/views/client/clients/client-table.component.ts");
/* harmony import */ var _clients_client_update_popup_client_update_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/client-update-popup/client-update-popup.component */ "./src/app/views/client/clients/client-update-popup/client-update-popup.component.ts");
/* harmony import */ var _clients_client_create_popup_client_create_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/client-create-popup/client-create-popup.component */ "./src/app/views/client/clients/client-create-popup/client-create-popup.component.ts");
/* harmony import */ var _clients_client_category_popup_client_category_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients/client-category-popup/client-category-popup.component */ "./src/app/views/client/clients/client-category-popup/client-category-popup.component.ts");
/* harmony import */ var _clients_client_license_update_popup_client_license_update_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/client-license-update-popup/client-license-update-popup.component */ "./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.ts");
/* harmony import */ var _clients_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients/user/user.component */ "./src/app/views/client/clients/user/user.component.ts");
/* harmony import */ var _clients_user_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients/user/user-table/user-table.component */ "./src/app/views/client/clients/user/user-table/user-table.component.ts");
/* harmony import */ var _clients_user_user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clients/user/user-table/user-create-popup/user-create-popup.component */ "./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.ts");
/* harmony import */ var _clients_user_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./clients/user/user-table/user-table-popup/user-table-popup.component */ "./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _clients_user_roles_role_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clients/user/roles/role-table.component */ "./src/app/views/client/clients/user/roles/role-table.component.ts");
/* harmony import */ var _clients_user_roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./clients/user/roles/role-table-popup/role-table-popup.component */ "./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _clients_user_user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clients/user/user-table/user-community-popup/user-community-popup.component */ "./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.ts");
/* harmony import */ var _clients_user_user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clients/user/user-table/user-category-popup/user-category-popup.component */ "./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.ts");
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
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["NgxIntlTelInputModule"],
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
                _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
                _clients_client_table_component__WEBPACK_IMPORTED_MODULE_12__["ClientTableComponent"],
                _clients_client_create_popup_client_create_popup_component__WEBPACK_IMPORTED_MODULE_14__["ClientCreatePopupComponent"],
                _clients_client_category_popup_client_category_popup_component__WEBPACK_IMPORTED_MODULE_15__["ClientCategoryPopupComponent"],
                _clients_client_update_popup_client_update_popup_component__WEBPACK_IMPORTED_MODULE_13__["ClientUpdatePopupComponent"],
                _clients_client_license_update_popup_client_license_update_popup_component__WEBPACK_IMPORTED_MODULE_16__["ClientLicenseUpdatePopupComponent"],
                _clients_user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _clients_user_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_18__["UserTableComponent"],
                _clients_user_user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_19__["UserCreatePopupComponent"],
                _clients_user_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_20__["UserTablePopupComponent"],
                _clients_user_roles_role_table_component__WEBPACK_IMPORTED_MODULE_21__["RoleTableComponent"],
                _clients_user_roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_22__["RoleTablePopupComponent"],
                _clients_user_user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_23__["UserCommunityPopupComponent"],
                _clients_user_user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_24__["UserCategoryPopupComponent"]
            ],
            entryComponents: [
                _clients_client_create_popup_client_create_popup_component__WEBPACK_IMPORTED_MODULE_14__["ClientCreatePopupComponent"],
                _clients_client_category_popup_client_category_popup_component__WEBPACK_IMPORTED_MODULE_15__["ClientCategoryPopupComponent"],
                _clients_client_update_popup_client_update_popup_component__WEBPACK_IMPORTED_MODULE_13__["ClientUpdatePopupComponent"],
                _clients_client_license_update_popup_client_license_update_popup_component__WEBPACK_IMPORTED_MODULE_16__["ClientLicenseUpdatePopupComponent"],
                _clients_user_user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_19__["UserCreatePopupComponent"],
                _clients_user_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_20__["UserTablePopupComponent"],
                _clients_user_roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_22__["RoleTablePopupComponent"],
                _clients_user_user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_23__["UserCommunityPopupComponent"],
                _clients_user_user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_24__["UserCategoryPopupComponent"]
            ],
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"]]
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
/* harmony import */ var _clients_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients/user/user.component */ "./src/app/views/client/clients/user/user.component.ts");
/* harmony import */ var _clients_user_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/user/user-table/user-table.component */ "./src/app/views/client/clients/user/user-table/user-table.component.ts");
/* harmony import */ var _clients_user_roles_role_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/user/roles/role-table.component */ "./src/app/views/client/clients/user/roles/role-table.component.ts");





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
                path: "user",
                component: _clients_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                data: { title: "Users", breadcrumb: "Users" },
                children: [
                    {
                        path: "user-table",
                        component: _clients_user_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_3__["UserTableComponent"],
                        data: { title: "Users", breadcrumb: "Users" }
                    },
                    {
                        path: "role-table",
                        component: _clients_user_roles_role_table_component__WEBPACK_IMPORTED_MODULE_4__["RoleTableComponent"],
                        data: { title: "Roles", breadcrumb: "Roles" }
                    }
                ]
            },
            {
                path: "role-table",
                component: _clients_user_roles_role_table_component__WEBPACK_IMPORTED_MODULE_4__["RoleTableComponent"],
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
        this.specsUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "spec";
        this.licenseUrl = this.clientUrl + "/license";
        this.userUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.roleUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-roles";
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
    ClientService.prototype.getClientCategories = function (id) {
        return this.http.get(this.clientUrl + "/categories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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



/***/ }),

/***/ "./src/app/views/client/clients/client-category-popup/client-category-popup.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-category-popup/client-category-popup.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Category</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n  <mat-form-field class=\"matAutocomplete-chip-list\">\r\n    <mat-chip-list #chipList>\r\n      <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n        (removed)=\"remove(category)\">\r\n        {{category}}\r\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n      </mat-chip>\r\n      <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\">\r\n    </mat-chip-list>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n        <mat-option *ngFor=\"let category of filteredCategories | async; let i = index\" [value]=\"categoriesObj[i].id\">\r\n        {{category}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/client/clients/client-category-popup/client-category-popup.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-category-popup/client-category-popup.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ClientCategoryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCategoryPopupComponent", function() { return ClientCategoryPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ClientCategoryPopupComponent = /** @class */ (function () {
    function ClientCategoryPopupComponent(data, dialogRef, fb) {
        var _this = this;
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.formStatus = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = [];
        this.categoriesValue = [];
        this.allCategories = [];
        this.filteredCategories = this.categoryCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (category) { return category ? _this._filter(category) : _this.allCategories.slice(); }));
    }
    ClientCategoryPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesObj = this.data.category;
        this.categoriesObj.forEach(function (element) {
            _this.allCategories.push(element.name);
        });
        this.data.selectedCategory.content.forEach(function (element) {
            _this.categories.push(element.name);
            _this.categoriesValue.push(element.id);
        });
    };
    ClientCategoryPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    ClientCategoryPopupComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    ClientCategoryPopupComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
            this.categoriesValue.splice(index, 1);
        }
    };
    ClientCategoryPopupComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoriesValue.push(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    ClientCategoryPopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClientCategoryPopupComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"])
    ], ClientCategoryPopupComponent.prototype, "matAutocomplete", void 0);
    ClientCategoryPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-category-popup',
            template: __webpack_require__(/*! ./client-category-popup.component.html */ "./src/app/views/client/clients/client-category-popup/client-category-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ClientCategoryPopupComponent);
    return ClientCategoryPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-create-popup/client-create-popup.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-create-popup/client-create-popup.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Create Client</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" id=\"client-create\">\r\n\r\n\r\n  <mat-horizontal-stepper [linear]=\"true\">\r\n\r\n    <mat-step [stepControl]=\"clientFormGroup\">\r\n\r\n      <form [formGroup]=\"clientFormGroup\">\r\n\r\n        <ng-template matStepLabel>Client</ng-template>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"clientName\" letterOnly placeholder=\"Name\"\r\n                [formControl]=\"clientFormGroup.controls['name']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <textarea matInput name=\"description\" placeholder=\"Description\"\r\n                [formControl]=\"clientFormGroup.controls['description']\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </mat-step>\r\n\r\n\r\n    <mat-step [stepControl]=\"profilePicFormGroup\">\r\n      <form [formGroup]=\"profilePicFormGroup\">\r\n        <ng-template matStepLabel>Profile Picture</ng-template>\r\n\r\n        <!-- --------- hidden file input --------- -->\r\n        <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\"\r\n          [formControl]=\"profilePicFormGroup.controls['profilePic']\" base-sixty-four-input>\r\n\r\n\r\n        <!-- --------- file input click button --------- -->\r\n        <div layout-margin layout-padding>\r\n          <button mat-raised-button class=\"mr-1 mb-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n            Browse Images</button>\r\n        </div>\r\n\r\n        <!-- --------- start images preview container --------- -->\r\n        <div id=\"client_create_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n          <!-- --------- start card --------- -->\r\n          <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;\">\r\n            <mat-card class=\"p-0\">\r\n\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n                <span fxFlex></span>\r\n                <button type=\"button\" class=\"close p-1\" aria-label=\"Close\" (click)=\"removeSelectedImg()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <img [src]=\"url\">\r\n            </mat-card>\r\n          </div>\r\n          <!-- --------- end card --------- -->\r\n\r\n        </div>\r\n        <!-- --------- end images preview container --------- -->\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-step>\r\n\r\n\r\n    <mat-step [stepControl]=\"adminFormGroup\">\r\n      <form [formGroup]=\"adminFormGroup\">\r\n        <ng-template matStepLabel>Admin User</ng-template>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" positiveNumberAndLetterOnly placeholder=\"Username\"\r\n                [formControl]=\"adminFormGroup.controls['username']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1 mb-3\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"email\" placeholder=\"Email\" [formControl]=\"adminFormGroup.controls['email']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"categoryFormGroup\">\r\n      <form [formGroup]=\"categoryFormGroup\">\r\n        <ng-template matStepLabel>Category</ng-template>\r\n\r\n        <mat-form-field class=\"matAutocomplete-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(category)\">\r\n              {{category}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryFormGroup.controls['category']\" [matAutocomplete]=\"auto\"\r\n              [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\">\r\n          </mat-chip-list>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let category of filteredCategories | async; let i = index\" [value]=\"categoriesObj[i].id\">\r\n              {{category}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"licenseFormGroup\">\r\n      <form [formGroup]=\"licenseFormGroup\">\r\n        <ng-template matStepLabel>License</ng-template>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          \r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"tagCount\" placeholder=\"Tag Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['tagCount']\">\r\n            </mat-form-field>\r\n            <span *ngIf=\"licenseFormGroup.controls['tagCount'].hasError('max')\" class=\"form-error-msg\">\r\n              {{this.license.tagCount}} max ! </span>\r\n          </div>\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"userCount\" placeholder=\"User Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['userCount']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"comunityCount\" placeholder=\"Comunity Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['comunityCount']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"feedbackCount\" placeholder=\"Feedback Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['feedbackCount']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"eventkCount\" placeholder=\"Event Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['eventCount']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"promoCount\" placeholder=\"Promo Count\" positiveNumberOnly\r\n                [formControl]=\"licenseFormGroup.controls['promoCount']\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/client/clients/client-create-popup/client-create-popup.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-create-popup/client-create-popup.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientCreatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreatePopupComponent", function() { return ClientCreatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var ClientCreatePopupComponent = /** @class */ (function () {
    function ClientCreatePopupComponent(data, dialogRef, fb, snackBar) {
        var _this = this;
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.globalVariable = new _shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]();
        this.license = this.globalVariable.client.license;
        this.regex = this.globalVariable.validators.regex;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = [];
        this.categoriesValue = [];
        this.allCategories = [];
        this.formStatus = false;
        this.filteredCategories = this.categoryCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (category) { return category ? _this._filter(category) : _this.allCategories.slice(); }));
    }
    ClientCreatePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesObj = this.data.category;
        this.categoriesObj.forEach(function (element) {
            _this.allCategories.push(element.name);
        });
        this.buildItemForm();
    };
    ClientCreatePopupComponent.prototype.buildItemForm = function () {
        // this.clientFormGroup = this.fb.group({
        //   name: [''],
        //   description: ['']
        // });
        // this.profilePicFormGroup = this.fb.group({
        //   profilePic: [""]
        // });
        // this.adminFormGroup = this.fb.group({
        //   username: [''],
        //   email: ['']
        // });
        this.clientFormGroup = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regex._Letter)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.profilePicFormGroup = this.fb.group({
            profilePic: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.adminFormGroup = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        this.categoryFormGroup = this.fb.group({
            category: this.categoryCtrl
        });
        this.licenseFormGroup = this.fb.group({
            tagCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comunityCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            feedbackCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            eventCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            promoCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // promoCount: ['', Validators.required, Validators.max(this.license.promoCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)]
    };
    ClientCreatePopupComponent.prototype.submit = function () {
        var forms = [this.clientFormGroup.value, this.url, this.adminFormGroup.value, this.licenseFormGroup.value, this.categoriesValue];
        this.dialogRef.close(forms);
    };
    // File uploader validation and upload
    ClientCreatePopupComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    ClientCreatePopupComponent.prototype.removeSelectedImg = function () {
        this.url = null;
    };
    ClientCreatePopupComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    ClientCreatePopupComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
            this.categoriesValue.splice(index, 1);
        }
    };
    ClientCreatePopupComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoriesValue.push(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    ClientCreatePopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClientCreatePopupComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"])
    ], ClientCreatePopupComponent.prototype, "matAutocomplete", void 0);
    ClientCreatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-create-popup',
            template: __webpack_require__(/*! ./client-create-popup.component.html */ "./src/app/views/client/clients/client-create-popup/client-create-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__["egretAnimations"],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ClientCreatePopupComponent);
    return ClientCreatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"licenseFormGroup\" (ngSubmit)=\"submit()\" id=\"client-update\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">Update Client</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"tagCount\" placeholder=\"Tag Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['tagCount']\">\r\n        </mat-form-field>\r\n        <span *ngIf=\"licenseFormGroup.controls['tagCount'].hasError('max')\" class=\"form-error-msg\">\r\n          {{this.license.tagCount}} max ! </span>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"userCount\" placeholder=\"User Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['userCount']\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"communityCount\" placeholder=\"Community Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['communityCount']\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"feedbackCount\" placeholder=\"Feedback Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['feedbackCount']\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"eventkCount\" placeholder=\"Event Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['eventCount']\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"promoCount\" placeholder=\"Promo Count\" positiveNumberOnly\r\n            [formControl]=\"licenseFormGroup.controls['promoCount']\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n  <mat-card-footer>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"licenseFormGroup.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-card-footer>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ClientLicenseUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLicenseUpdatePopupComponent", function() { return ClientLicenseUpdatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
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





var ClientLicenseUpdatePopupComponent = /** @class */ (function () {
    function ClientLicenseUpdatePopupComponent(data, dialogRef, fb, snackBar) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.globalVariable = new app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]();
        this.license = this.globalVariable.client.license;
        this.regex = this.globalVariable.validators.regex;
        this.formStatus = false;
    }
    ClientLicenseUpdatePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload.license);
    };
    ClientLicenseUpdatePopupComponent.prototype.buildItemForm = function (item) {
        console.log(item);
        this.licenseFormGroup = this.fb.group({
            tagCount: [item.tagCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userCount: [item.userCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            communityCount: [item.communityCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            feedbackCount: [item.feedbackCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            eventCount: [item.eventCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            promoCount: [item.promoCount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ClientLicenseUpdatePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.licenseFormGroup.value);
    };
    ClientLicenseUpdatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-license-update-popup',
            template: __webpack_require__(/*! ./client-license-update-popup.component.html */ "./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__["egretAnimations"],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ClientLicenseUpdatePopupComponent);
    return ClientLicenseUpdatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-table.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/client/clients/client-table.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Clients</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"clientCreatePopUp()\">Add Client</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"clients\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status].style}}\" [selected]=\"true\">\r\n            {{statusArray[row?.status].status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\"  [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\r\n          <!-- <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"navigateUserTable(row)\">\r\n            <mat-icon>list</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button> -->\r\n          <!-- <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button> -->\r\n\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"navigateUserTable(row)\"><mat-icon>list</mat-icon>View</button>\r\n            <button mat-menu-item (click)=\"clientUpdatePopUp(row)\"><mat-icon>edit</mat-icon>Edit</button>\r\n            <button mat-menu-item (click)=\"openlicensePopUp(row)\"><mat-icon>edit</mat-icon>License</button>\r\n            <button mat-menu-item (click)=\"openCategoryPopUp(row)\"><mat-icon>assignment_ind</mat-icon><span>Category</span></button>\r\n            <button mat-menu-item (click)=\"openPopUp(row)\"><mat-icon>delete</mat-icon>Delete</button>\r\n          </mat-menu>\r\n\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var _client_update_popup_client_update_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-update-popup/client-update-popup.component */ "./src/app/views/client/clients/client-update-popup/client-update-popup.component.ts");
/* harmony import */ var _client_create_popup_client_create_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-create-popup/client-create-popup.component */ "./src/app/views/client/clients/client-create-popup/client-create-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var _client_category_popup_client_category_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-category-popup/client-category-popup.component */ "./src/app/views/client/clients/client-category-popup/client-category-popup.component.ts");
/* harmony import */ var _client_license_update_popup_client_license_update_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-license-update-popup/client-license-update-popup.component */ "./src/app/views/client/clients/client-license-update-popup/client-license-update-popup.component.ts");
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
        this.getCategory();
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
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent.prototype.getCategory = function () {
        var _this = this;
        this.getItemSub = this.clientService.getCategory().subscribe(function (successResp) {
            _this.category = successResp.content;
            console.log(_this.category);
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent.prototype.clientUpdatePopUp = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.clientService.getClient(data.id).subscribe(function (successResp) {
            var dialogRef = _this.dialog.open(_client_update_popup_client_update_popup_component__WEBPACK_IMPORTED_MODULE_4__["ClientUpdatePopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { payload: successResp.content }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    // If user press cancel
                    return;
                }
                console.log(res);
                _this.loader.open();
                var country = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CountryData"]('a65715e919d0995f361360cf0b8c2c03', 'Åland Islands', 'AX');
                var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientUpdateReq"](res[0].name, res[0].description, res[1], res[0].contactNo, res[0].addressLine1, res[0].addressLine2, res[0].city, res[0].state, res[0].zipCode, country);
                _this.clientService.updateClient(data.id, req).subscribe(function (response) {
                    _this.getClients();
                    _this.loader.close();
                    _this.snack.open("Client Updated!", "OK", { duration: 4000 });
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent.prototype.clientCreatePopUp = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_client_create_popup_client_create_popup_component__WEBPACK_IMPORTED_MODULE_5__["ClientCreatePopupComponent"], {
            width: "900px",
            disableClose: true,
            data: { category: this.category }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log(res);
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            var users = [];
            var categories = [];
            users.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserData"](res[2].username, res[2].email));
            var license = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientLicenseData"](res[3].tagCount, res[3].userCount, res[3].communityCount, res[3].feedbackCount, res[3].eventCount, res[3].promoCount);
            res[4].forEach(function (element) {
                var category = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CategoryData"](element);
                categories.push(category);
            });
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientCreateReq"](res[0].name, res[0].description, res[1], users, categories, license);
            _this.clientService.addClient(req).subscribe(function (response) {
                _this.getClients();
                _this.clients = response;
                _this.loader.close();
                _this.snack.open("New Client added !", "OK", { duration: 4000 });
            }, function (error) {
                _this.loader.close();
                _this.errDialog.showError(error);
            });
        });
    };
    ClientTableComponent.prototype.openCategoryPopUp = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.clientService.getClientCategories(data.id).subscribe(function (successResp) {
            console.log(successResp);
            var dialogRef = _this.dialog.open(_client_category_popup_client_category_popup_component__WEBPACK_IMPORTED_MODULE_10__["ClientCategoryPopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { category: _this.category, selectedCategory: successResp }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    // If user press cancel
                    return;
                }
                console.log(res);
                // this.loader.open();
                // const country: CountryData = new CountryData('a65715e919d0995f361360cf0b8c2c03', 'Åland Islands', 'AX');
                // const req: ClientUpdateReq = new ClientUpdateReq(
                //   res[0].name, res[0].description, res[1], res[0].contactNo, res[0].addressLine1, res[0].addressLine2, res[0].city, res[0].state, res[0].zipCode, country
                // );
                // this.clientService.updateClient(data.id, req).subscribe(
                //   response => {
                //     this.getClients();
                //     this.loader.close();
                //     this.snack.open("Client Updated!", "OK", { duration: 4000 });
                //   },
                //   error => {
                //     this.loader.close();
                //     this.errDialog.showError(error);
                //   }
                // );
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent.prototype.openlicensePopUp = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.clientService.getClient(data.id).subscribe(function (successResp) {
            var resClient = successResp.content;
            var dialogRef = _this.dialog.open(_client_license_update_popup_client_license_update_popup_component__WEBPACK_IMPORTED_MODULE_11__["ClientLicenseUpdatePopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { payload: resClient }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    // If user press cancel
                    return;
                }
                console.log(res);
                _this.loader.open();
                var clientData = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientData"](resClient.id);
                var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["LicenseUpdateReq"](res.tagCount, res.userCount, res.communityCount, res.feedbackCount, res.eventCount, res.promoCount, clientData);
                _this.clientService.updateClientLicense(resClient.license.id, req).subscribe(function (response) {
                    _this.getClients();
                    _this.clients = response;
                    _this.loader.close();
                    _this.snack.open("License Data Updated !", "OK", { duration: 4000 });
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError(error);
                });
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent.prototype.navigateUserTable = function (res) {
        var _this = this;
        this.clientService.getClient(res.id).subscribe(function (successResp) {
            console.log(successResp.content);
            localStorage.setItem('currentClient', JSON.stringify(successResp.content));
            _this.router.navigate(["clients/user/user-table"]);
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ClientTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-table",
            template: __webpack_require__(/*! ./client-table.component.html */ "./src/app/views/client/clients/client-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ClientTableComponent);
    return ClientTableComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/client-update-popup/client-update-popup.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-update-popup/client-update-popup.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\"  id=\"client-update\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">Update Client</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"clientName\" [formControl]=\"itemForm.controls['name']\" letterOnly placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput name=\"description\" placeholder=\"Description\"\r\n            [formControl]=\"itemForm.controls['description']\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"contactNo\" [formControl]=\"itemForm.controls['contactNo']\"  placeholder=\"Contact No\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"addressLine1\" [formControl]=\"itemForm.controls['addressLine1']\"\r\n            placeholder=\"Address Line 1\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"addressLine2\" [formControl]=\"itemForm.controls['addressLine2']\"\r\n            placeholder=\"Address Line 2\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"city\" [formControl]=\"itemForm.controls['city']\" letterOnly placeholder=\"City\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"state\" [formControl]=\"itemForm.controls['state']\" positiveNumberAndLetterOnly placeholder=\"State\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"zipCode\" [formControl]=\"itemForm.controls['zipCode']\" positiveNumberOnly placeholder=\"ZipCode\" maxlength=\"6\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [formControl]=\"itemForm.controls['country']\" placeholder=\"Country\" [matAutocomplete]=\"auto\" (blur)=\"onBlurCountry()\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.name\">\r\n              {{option.name}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <!-- --------- hidden file input --------- -->\r\n      <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\"\r\n        [formControl]=\"itemForm.controls['profilePic']\" base-sixty-four-input>\r\n\r\n\r\n      <!-- --------- file input click button --------- -->\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <div layout-margin layout-padding>\r\n          <button mat-raised-button class=\"mr-1 mb-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n            Browse Images</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- --------- start images preview container --------- -->\r\n      <div id=\"client_update_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n        <!-- --------- start card --------- -->\r\n        <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;\">\r\n          <mat-card class=\"p-0\">\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n              <span fxFlex></span>\r\n              <button type=\"button\" class=\"close p-1\" aria-label=\"Close\" (click)=\"removeSelectedImg()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n\r\n            <img [src]=\"url\">\r\n          </mat-card>\r\n        </div>\r\n        <!-- --------- end card --------- -->\r\n\r\n      </div>\r\n      <!-- --------- end images preview container --------- -->\r\n\r\n\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n  <mat-card-footer>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-card-footer>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/client-update-popup/client-update-popup.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/client/clients/client-update-popup/client-update-popup.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdatePopupComponent", function() { return ClientUpdatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helpers/countries */ "./src/app/shared/helpers/countries.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
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






var ClientUpdatePopupComponent = /** @class */ (function () {
    function ClientUpdatePopupComponent(data, dialogRef, fb, snackBar) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.countryDB = new _shared_helpers_countries__WEBPACK_IMPORTED_MODULE_4__["CountryDB"]();
        this.countries = this.countryDB.countries;
        this.formStatus = false;
    }
    ClientUpdatePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
    };
    ClientUpdatePopupComponent.prototype.buildItemForm = function (item) {
        var _this = this;
        console.log(item);
        var country = null;
        if (item.country) {
            country = item.country.name;
        }
        this.url = item.clientLogo;
        console.log(this.url);
        this.itemForm = this.fb.group({
            name: [item.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [item.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            profilePic: ['test', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contactNo: [item.primaryContactNo || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine1: [item.addressLine1 || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine2: [item.addressLine2 || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [item.city || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: [item.state || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipCode: [item.zipCode || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: [country || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.filteredOptions = this.itemForm.get("country").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
    };
    ClientUpdatePopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.countries.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    ClientUpdatePopupComponent.prototype.submit = function () {
        var surl = this.url;
        // surl.slice(24)
        var forms = [this.itemForm.value, this.url];
        this.dialogRef.close(forms);
    };
    // File uploader validation and upload
    ClientUpdatePopupComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
                console.log(_this.url);
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    ClientUpdatePopupComponent.prototype.removeSelectedImg = function () {
        this.url = null;
    };
    ClientUpdatePopupComponent.prototype.onBlurCountry = function () {
        var value = this.itemForm.get("country").value;
        var status = true;
        this.countries.forEach(function (element) {
            if (element.name === value) {
                status = false;
            }
        });
        if (status) {
            this.itemForm.get("country").setValue("");
        }
    };
    ClientUpdatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-update-popup',
            template: __webpack_require__(/*! ./client-update-popup.component.html */ "./src/app/views/client/clients/client-update-popup/client-update-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_5__["egretAnimations"],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ClientUpdatePopupComponent);
    return ClientUpdatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">{{data.title}}</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" style=\"overflow: unset; max-height: unset;\">\r\n  <form [formGroup]=\"roleFormGroup\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"name\" placeholder=\"Role Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"description\" placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <span>Select Role Authorities</span>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <mat-tab-group>\r\n        <div *ngFor=\"let module of this.componentList; let i = index\">\r\n          <mat-tab label=\"{{module.moduleName}}\">\r\n            <form [formGroup]=\"authoritiesFormGroup\">\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" style=\"padding-top: 5px;\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"50\" class=\"pr-1\" style=\"padding-top: 5px;\" *ngFor=\"let item of module.data\">\r\n                  <mat-checkbox [checked]=\"item.checked\" (change)=\"onChange(item.id, module.moduleName, item.code, $event.checked)\" class=\"full-width\" value=\"{{item.code}}\">{{item.name}}</mat-checkbox>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </div>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"accent\" [disabled]=\"this.selectedAuthorities.length == 0 || roleFormGroup.invalid\" (click)=\"submit()\">Save</button>\r\n  <span fxFlex></span>\r\n  <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RoleTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTablePopupComponent", function() { return RoleTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../client.service */ "./src/app/views/client/client.service.ts");
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
        console.log('--------- role update onchange -------------');
        if (isChecked) {
            dataArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](auth_key));
            var tempJson = {
                id: id
            };
            console.log(id, auth_key);
            this.selectedAuthorities.push(tempJson);
        }
        else {
            var index = dataArray.controls.findIndex(function (x) { return x.value === auth_key; });
            dataArray.removeAt(index);
            // for (let i = 0; i < this.selectedAuthorities.length; i++) {
            //   if (this.selectedAuthorities[i].id === id) {
            var i = this.selectedAuthorities.findIndex(function (y) { return y.id === id; });
            console.log(id, auth_key, i);
            this.selectedAuthorities.splice(i, 1);
            // break;
            //   }
            // }
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
            console.log('-------------- setSelectedRoleAuthorities -------------------');
            console.log(this.selectedAuthorities);
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
            template: __webpack_require__(/*! ./role-table-popup.component.html */ "./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], RoleTablePopupComponent);
    return RoleTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/roles/role-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/client/clients/user/roles/role-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Roles</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Role</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"items\" [columnMode]=\"'flex'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Role Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role Description\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Last Modified Date\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.lastModifiedDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <!-- <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"editRole(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteRole(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button> -->\r\n          <button mat-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"editRole(row)\"><mat-icon>edit</mat-icon>Edit</button>\r\n            <button mat-menu-item (click)=\"deleteRole(row)\"><mat-icon>delete</mat-icon>Delete</button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n\r\n    <!-- <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Feedback Topic</th>\r\n          <th>Feedback Type</th>\r\n          <th>Start Date</th>\r\n          <th>End Date</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1 pl-1\">{{row?.topic}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.type =='P' ? 'Product' : 'E Vote'}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.startDate}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.endDate}}</td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <div class=\"pb-1\">\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='navigateSurveyBuilder(row)' color=\"primary\" class=\"\">\r\n                  <mat-icon>view_headline</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)=\"deleteSurvey(row)\" color=\"warn\" class=\"\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\">{{totalRecords}} Total</div>\r\n          </td>\r\n          <td colspan=\"4\">\r\n\r\n            <nav aria-label=\"Page navigation example\">\r\n              <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber-1);\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(page);\">\r\n                    {{page}}\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber+1);\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table> -->\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/client/clients/user/roles/role-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/client/clients/user/roles/role-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTableComponent", function() { return RoleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-table-popup/role-table-popup.component */ "./src/app/views/client/clients/user/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sessions_UserService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../sessions/UserService.service */ "./src/app/views/sessions/UserService.service.ts");
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
    function RoleTableComponent(dialog, snack, clientService, confirmService, loader, errDialog, router, userService) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.router = router;
        this.userService = userService;
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
            _this.errDialog.showError(error);
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
                }, function (error) {
                    _this.errDialog.showError(error);
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
                }, function (error) {
                    _this.errDialog.showError(error);
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
        }, function (error) {
            _this.errDialog.showError(error);
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
            template: __webpack_require__(/*! ./role-table.component.html */ "./src/app/views/client/clients/user/roles/role-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _sessions_UserService_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], RoleTableComponent);
    return RoleTableComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Category</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n  <mat-form-field class=\"matAutocomplete-chip-list\">\r\n    <mat-chip-list #chipList>\r\n      <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n        (removed)=\"remove(category)\">\r\n        {{category}}\r\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n      </mat-chip>\r\n      <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\">\r\n    </mat-chip-list>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n        {{category}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserCategoryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryPopupComponent", function() { return UserCategoryPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserCategoryPopupComponent = /** @class */ (function () {
    function UserCategoryPopupComponent(data, dialogRef, fb) {
        var _this = this;
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.formStatus = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = ['Lifestyle'];
        this.allCategories = ['SNKRS Launch Calendar', 'Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Jordan', 'Football', 'Soccer', 'Baseball', 'Golf', 'Skateboarding', 'Tennis', 'Boots'];
        this.filteredCategories = this.categoryCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (category) { return category ? _this._filter(category) : _this.allCategories.slice(); }));
    }
    UserCategoryPopupComponent.prototype.ngOnInit = function () {
    };
    UserCategoryPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    UserCategoryPopupComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    UserCategoryPopupComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    UserCategoryPopupComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    UserCategoryPopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserCategoryPopupComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"])
    ], UserCategoryPopupComponent.prototype, "matAutocomplete", void 0);
    UserCategoryPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-category-popup',
            template: __webpack_require__(/*! ./user-category-popup.component.html */ "./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserCategoryPopupComponent);
    return UserCategoryPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">Community</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\" id=\"community-popup\">\r\n\r\n    <!-- <div class=\"example-container\">\r\n      <h2>To do</h2>\r\n\r\n      <div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"[doneList]\"\r\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"example-container\">\r\n      <h2>Done</h2>\r\n\r\n      <div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"[todoList]\"\r\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UserCommunityPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCommunityPopupComponent", function() { return UserCommunityPopupComponent; });
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



var UserCommunityPopupComponent = /** @class */ (function () {
    function UserCommunityPopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.formStatus = false;
    }
    UserCommunityPopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
        this.roles = this.data.roles;
    };
    UserCommunityPopupComponent.prototype.buildItemForm = function (item) {
        console.log(item);
        var role = null;
        var userStatus = 0;
        if (item.id === undefined) {
            this.formStatus = true;
        }
        else {
            role = item.roles[0].id;
            if (item.status === "ACTIVE") {
                userStatus = 1;
            }
        }
        this.itemForm = this.fb.group({});
        if (item.id !== undefined) {
            role = item.roles[0].id;
            this.itemForm.get('password').clearValidators();
            this.itemForm.get('password').updateValueAndValidity();
        }
    };
    UserCommunityPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    UserCommunityPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-community-popup',
            template: __webpack_require__(/*! ./user-community-popup.component.html */ "./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserCommunityPopupComponent);
    return UserCommunityPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Create Client</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" id=\"client-create\">\r\n\r\n\r\n  <mat-horizontal-stepper [linear]=\"true\">\r\n\r\n    <mat-step [stepControl]=\"userFormGroup\">\r\n\r\n      <form [formGroup]=\"userFormGroup\">\r\n\r\n        <ng-template matStepLabel>Client</ng-template>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" [formControl]=\"userFormGroup.controls['username']\" placeholder=\"User Name\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"password\" type=\"password\" [formControl]=\"userFormGroup.controls['password']\"\r\n                positiveNumberAndLetterOnly placeholder=\"Password\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"email\" [formControl]=\"userFormGroup.controls['email']\" placeholder=\"Email\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-select [formControl]=\"userFormGroup.controls['role']\" placeholder=\"Select A User Role\">\r\n                <mat-option>none</mat-option>\r\n                <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </mat-step>\r\n\r\n\r\n    <mat-step [stepControl]=\"categoryFormGroup\">\r\n      <form [formGroup]=\"categoryFormGroup\">\r\n        <ng-template matStepLabel>Category</ng-template>\r\n\r\n        <mat-form-field class=\"matAutocomplete-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(category)\">\r\n              {{category}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryFormGroup.controls['category']\" [matAutocomplete]=\"auto\"\r\n              [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\">\r\n          </mat-chip-list>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n              {{category}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"communityFormGroup\">\r\n      <form [formGroup]=\"communityFormGroup\">\r\n        <ng-template matStepLabel>Community</ng-template>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" positiveNumberAndLetterOnly placeholder=\"Username\"\r\n                [formControl]=\"communityFormGroup.controls['username']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </form>\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserCreatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreatePopupComponent", function() { return UserCreatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
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







var UserCreatePopupComponent = /** @class */ (function () {
    function UserCreatePopupComponent(data, dialogRef, fb, snackBar) {
        var _this = this;
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.globalVariable = new _shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]();
        this.license = this.globalVariable.client.license;
        this.regex = this.globalVariable.validators.regex;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = ['Lifestyle'];
        this.allCategories = ['SNKRS Launch Calendar', 'Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Jordan', 'Football', 'Soccer', 'Baseball', 'Golf', 'Skateboarding', 'Tennis', 'Boots'];
        this.filteredCategories = this.categoryCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (category) { return category ? _this._filter(category) : _this.allCategories.slice(); }));
    }
    UserCreatePopupComponent.prototype.ngOnInit = function () {
        this.roles = this.data.roles;
        this.buildItemForm();
    };
    UserCreatePopupComponent.prototype.buildItemForm = function () {
        // this.userFormGroup = this.fb.group({
        //   username: new FormControl(''),
        //   password: new FormControl(''),
        //   email: new FormControl(''),
        //   role: new FormControl('')
        // });
        this.userFormGroup = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.categoryFormGroup = this.fb.group({
            category: this.categoryCtrl
        });
        this.communityFormGroup = this.fb.group({
            username: [''],
        });
    };
    UserCreatePopupComponent.prototype.submit = function () {
        var forms = [this.userFormGroup.value, this.categories, this.communityFormGroup.value];
        this.dialogRef.close(forms);
    };
    UserCreatePopupComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    UserCreatePopupComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    UserCreatePopupComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    UserCreatePopupComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserCreatePopupComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"])
    ], UserCreatePopupComponent.prototype, "matAutocomplete", void 0);
    UserCreatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create-popup',
            template: __webpack_require__(/*! ./user-create-popup.component.html */ "./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__["egretAnimations"],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], UserCreatePopupComponent);
    return UserCreatePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"username\" [formControl]=\"itemForm.controls['username']\" placeholder=\"User Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\" *ngIf=\"formStatus\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"password\" type=\"password\" [formControl]=\"itemForm.controls['password']\"\r\n            positiveNumberAndLetterOnly placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"email\" [formControl]=\"itemForm.controls['email']\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"itemForm.controls['role']\" placeholder=\"Select A User Role\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <div fxFlex=\"50\" class=\"pt-1 pr-1\">\r\n        <mat-slide-toggle [formControl]=\"itemForm.controls['isActive']\">Active User</mat-slide-toggle>\r\n      </div> -->\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.ts ***!
  \*****************************************************************************************************/
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
        console.log(this.data);
        this.roles = this.data.roles;
    };
    UserTablePopupComponent.prototype.buildItemForm = function (item) {
        var role = null;
        var userStatus = 0;
        if (item.id === undefined) {
            this.formStatus = true;
        }
        else {
            role = item.role.id;
            if (item.status === "ACTIVE") {
                userStatus = 1;
            }
        }
        this.itemForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.userName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.password || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        if (item.id !== undefined) {
            // role = item.role.id;
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
            template: __webpack_require__(/*! ./user-table-popup.component.html */ "./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserTablePopupComponent);
    return UserTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-table.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n\r\n    <div class=\"m-333 mt-3\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"userCreatePopup()\">Add User</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"users\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n\r\n      <ngx-datatable-column name=\"\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <img mat-list-avatar class=\"\" src=\"assets/images/face-1.jpg\" alt=\"\"\r\n            style=\"flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; object-fit: cover;\">\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.userName }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Email\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.email }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role\" [flexGrow]=\"1\"  [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"warn\" [selected]=\"true\">{{row?.role.name}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status]}}\" [selected]=\"true\">{{row?.status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu1\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu1=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openEditPopUp(row)\">\r\n              <mat-icon>edit</mat-icon>\r\n              <span>Edit</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCommunityPopUp(row)\">\r\n              <mat-icon>assignment_ind</mat-icon>\r\n              <span>Community</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCategoryPopUp(row)\">\r\n              <mat-icon>assistant</mat-icon>\r\n              <span>Category</span>\r\n            </button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/views/client/clients/user/user-table/user-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/client/clients/user/user-table/user-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-table/user-create-popup/user-create-popup.component */ "./src/app/views/client/clients/user/user-table/user-create-popup/user-create-popup.component.ts");
/* harmony import */ var _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-table/user-table-popup/user-table-popup.component */ "./src/app/views/client/clients/user/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var _user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-category-popup/user-category-popup.component */ "./src/app/views/client/clients/user/user-table/user-category-popup/user-category-popup.component.ts");
/* harmony import */ var _user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-community-popup/user-community-popup.component */ "./src/app/views/client/clients/user/user-table/user-community-popup/user-community-popup.component.ts");
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
        var client = JSON.parse(localStorage.getItem('currentClient'));
        console.log(client);
        this.clientId = client.id;
        this.name = client.name;
        this.url = client.clientLogo;
        this.getUsers();
        this.getUserRoles();
        // this.getCategory();
    };
    UserTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    UserTableComponent.prototype.getUsers = function () {
        var _this = this;
        this.getItemSub = this.clientService.getUsers(this.clientId).subscribe(function (successResp) {
            _this.users = successResp.content.users;
            console.log(_this.users);
        }, function (error) {
            _this.errDialog.showError(error);
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
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.getCategory = function () {
        var _this = this;
        this.getItemSub = this.clientService.getRoles().subscribe(function (successResp) {
            successResp.content.forEach(function (item, index) {
                if (item.name === "Super Administrator")
                    successResp.content.splice(index, 1);
            });
            _this.roles = successResp.content;
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.userCreatePopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_4__["UserCreatePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log(res);
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            // let users: UserData[] = [];
            // users.push(new UserData(res[2].username, res[2].email));
            // let license: ClientLicenseData = new ClientLicenseData(res[3].tagCount, res[3].userCount, res[3].communityCount, res[3].feedbackCount, res[3].eventCount, res[3].promoCount);
            // const req: ClientCreateReq = new ClientCreateReq(res[0].name, res[0].description, res[1], users, license);
            // let roles: UserRole[] = [];
            // roles.push(new UserRole(res[0].role));
            var role = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["RoleData"](res[0].role);
            var communities = [];
            // communities.push(new CommunityData(res[0].role));
            var categories = [];
            categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CategoryData"]('d36eeebd8b1f0cde16210339e97b9408'));
            categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CategoryData"]('ec21ff12b34a21bece175e48a059ec7f'));
            var client = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientData"](_this.clientId);
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserCreateReq"](res[0].username, res[0].password, res[0].email, role, client, communities, categories);
            _this.clientService.addUser(req).subscribe(function (response) {
                _this.getUsers;
                _this.users = response;
                _this.loader.close();
                _this.snack.open("New User added !", "OK", { duration: 4000 });
            }, function (error) {
                _this.errDialog.showError(error);
            });
        });
    };
    UserTableComponent.prototype.openEditPopUp = function (data, isNew) {
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new User" : "Update User";
        var dialogRef = this.dialog.open(_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["UserTablePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            // let roles: UserRole[] = [];
            // roles.push(new UserRole(res.role));
            // const client: ClientData = new ClientData(this.clientId);
            // const req: UserCreateReq = new UserCreateReq(res.username, res.password, res.email, roles, client);
            // this.loader.open();
            // if (isNew) {
            //   this.clientService.addUser(req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("New User added !", "OK", { duration: 4000 });
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // } else {
            //   this.clientService.updateUser(data.id, req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("User Updated!", "OK", { duration: 4000 });
            //       // return this.users.slice();
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // }
        });
    };
    UserTableComponent.prototype.openCommunityPopUp = function (data, isNew) {
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new User" : "Update User";
        var dialogRef = this.dialog.open(_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserCommunityPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            // let roles: UserRole[] = [];
            // roles.push(new UserRole(res.role));
            // const client: ClientData = new ClientData(this.clientId);
            // const req: UserCreateReq = new UserCreateReq(res.username, res.password, res.email, roles, client);
            // this.loader.open();
            // if (isNew) {
            //   this.clientService.addUser(req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("New User added !", "OK", { duration: 4000 });
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // } else {
            //   this.clientService.updateUser(data.id, req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("User Updated!", "OK", { duration: 4000 });
            //       // return this.users.slice();
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // }
        });
    };
    UserTableComponent.prototype.openCategoryPopUp = function (data, isNew) {
        if (data === void 0) { data = {}; }
        var title = isNew ? "Add new User" : "Update User";
        var dialogRef = this.dialog.open(_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_10__["UserCategoryPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            // let roles: UserRole[] = [];
            // roles.push(new UserRole(res.role));
            // const client: ClientData = new ClientData(this.clientId);
            // const req: UserCreateReq = new UserCreateReq(res.username, res.password, res.email, roles, client);
            // this.loader.open();
            // if (isNew) {
            //   this.clientService.addUser(req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("New User added !", "OK", { duration: 4000 });
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // } else {
            //   this.clientService.updateUser(data.id, req).subscribe(
            //     response => {
            //       this.getUsers();
            //       this.loader.close();
            //       this.snack.open("User Updated!", "OK", { duration: 4000 });
            //       // return this.users.slice();
            //     },
            //     error => {
            //       this.loader.close();
            //       this.errDialog.showError({
            //         title: "Error",
            //         status: error.status,
            //         type: "http_error"
            //       });
            //     }
            //   );
            // }
        });
    };
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/views/client/clients/user/user-table/user-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/views/client/clients/user/user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/client/clients/user/user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/ui_icons/users.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{this.name}}</div>\r\n        <div class=\"subtitle mb-05\">ClearPicture</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily manage Users.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"/clients/user/user-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>person</mat-icon>\r\n            Users\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/clients/user/role-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            User Roles\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/client/clients/user/user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/client/clients/user/user.component.ts ***!
  \*************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
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



var UserComponent = /** @class */ (function () {
    function UserComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    UserComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('currentClient'))) {
            var client = JSON.parse(localStorage.getItem('currentClient'));
            this.id = client.id;
            this.name = client.name;
            this.url = client.clientLogo;
        }
        else {
            this.router.navigate(["clients/client-table"]);
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/views/client/clients/user/user.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-client-client-module.js.map