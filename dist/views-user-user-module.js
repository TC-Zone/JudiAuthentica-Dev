(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-user-module"],{

/***/ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/user/roles/role-table-popup/role-table-popup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">{{data.title}}</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" style=\"overflow: unset; max-height: unset;\">\r\n  <form [formGroup]=\"roleFormGroup\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"name\" placeholder=\"Role Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"description\" placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <span>Select Role Authorities</span>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <mat-tab-group>\r\n        <div *ngFor=\"let module of this.componentList; let i = index\">\r\n          <mat-tab label=\"{{module.name}}\" *ngIf=\"module.authorities.length !== 0\">\r\n            <form [formGroup]=\"authoritiesFormGroup\">\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"pt-2\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"50\" class=\"pr-1\" style=\"padding-top: 5px;\" *ngFor=\"let item of module.authorities\">\r\n                  <mat-checkbox [checked]=\"item.checked\" (change)=\"onChangeUserRole(item, $event.checked)\"\r\n                    class=\"full-width\" value=\"{{item.code}}\">{{item.name}}</mat-checkbox>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </div>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"accent\" [disabled]=\"this.newDisplayAuthority.length == 0 || roleFormGroup.invalid\"\r\n    (click)=\"submit()\" *ngIf=\"this.predefined === 'true'\">Save</button>\r\n  <button mat-raised-button color=\"accent\" [disabled]=\"this.selectedAuthorities.length == 0 || roleFormGroup.invalid\"\r\n    (click)=\"submit()\" *ngIf=\"this.predefined !== 'true'\">Save</button>\r\n  <span fxFlex></span>\r\n  <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/user/roles/role-table-popup/role-table-popup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RoleTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTablePopupComponent", function() { return RoleTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
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
        this.allAuthority = [];
        this.allDisplayAuthority = [];
        this.adminRoleDisplayAuthority = [];
        this.newDisplayAuthority = [];
        this.removedDisplayAuthority = [];
        this.commonAndAdminAuthorities = [];
        this.selectedAuthorities = [];
        this.componentList = [];
        this.adminComponentList = [];
    }
    RoleTablePopupComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.clientID = this.data.clientID;
        this.predefined = this.data.roleData.predefined;
        this.isNew = this.data.roleData.isNew;
        this.commonAndAdminAuthorities = this.data.commonAndAdminAuthorities;
        if (this.isNew) {
            this.createUserAuthorityComponentList(this.data.adminRoleAuthorities);
        }
        else {
            this.formatRoleAuthority(this.data.roleData);
        }
        this.buildRoleForms(this.data.roleData);
        this.buildauthoritiesForm();
    };
    RoleTablePopupComponent.prototype.formatRoleAuthority = function (data) {
        var _this = this;
        var roleData = JSON.parse(JSON.stringify(data));
        roleData.authorities.forEach(function (authority) {
            if (authority.type === 'U' || authority.type === 'D') {
                _this.selectedAuthorities.push(authority.id);
            }
        });
        this.createUserAuthorityComponentList(this.data.adminRoleAuthorities);
    };
    RoleTablePopupComponent.prototype.createUserAuthorityComponentList = function (data) {
        var _this = this;
        var roleData = JSON.parse(JSON.stringify(data));
        var displayAuthoritySection = { name: "Display Authority", authorities: [] };
        // I had to foreach section twice for update selectedAuthorities and remove unnecessary authorities
        // -------------------------------------------------------------------------------------------------------------
        roleData.forEach(function (section) {
            section.authorities.forEach(function (authority) {
                if (authority.type === 'D' || authority.type === 'U') {
                    var status_1 = false;
                    if (_this.selectedAuthorities.includes(authority.id)) {
                        status_1 = true;
                    }
                    authority['checked'] = status_1;
                }
            });
            section.authorities.forEach(function (authority, index) {
                if (authority.type === 'D') {
                    displayAuthoritySection.authorities.push(authority);
                    section.authorities.splice(index, 1);
                }
                else if (authority.type !== 'D' && authority.type !== 'U') {
                    section.authorities.splice(index, 1);
                }
            });
        });
        // roleData.forEach(section => {
        //   section.authorities.forEach((authority, index) => {
        //     if (authority.type === 'D' || authority.type === 'U') {
        //       let status = false;
        //       if (this.selectedAuthorities.includes(authority.id)) {
        //         status = true;
        //       }
        //       authority['checked'] = status;
        //       if (authority.type === 'D') {
        //         displayAuthoritySection.authorities.push(authority);
        //         section.authorities.splice(index, 1);
        //       }
        //     } else {
        //       console.log(authority);
        //       section.authorities.splice(index, 1);
        //     }
        //   });
        // });
        // -------------------------------------------------------------------------------------------------------------
        roleData.splice(0, 0, displayAuthoritySection);
        this.componentList = roleData;
        console.log('-------------------------------------- componentList', this.componentList);
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
    RoleTablePopupComponent.prototype.submit = function () {
        var _this = this;
        // Add Common Authorities --------------------------------------------------------------------------------
        this.commonAndAdminAuthorities.forEach(function (authority) {
            if (authority.type === 'C') {
                _this.selectedAuthorities.push(authority.id);
            }
        });
        // ------------------------------------------------------------------------------------------------------
        // create selected authorities (AuthorityData) array ------------------------------------------------------
        var authorities = [];
        this.selectedAuthorities.forEach(function (authorityID) {
            authorities.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["AuthorityData"](authorityID));
        });
        // --------------------------------------------------------------------------------------------------------
        // create req ---------------------------------------------------------------------------------------------
        var roleFormValue = this.roleFormGroup.value;
        var roleData = {};
        if (this.isNew) {
            roleData = {
                name: roleFormValue.name,
                description: roleFormValue.description,
                authorities: authorities,
                client: new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["ClientData"](this.clientID)
            };
        }
        else {
            roleData = {
                name: roleFormValue.name,
                description: roleFormValue.description,
                authorities: authorities,
                removedAuthorities: this.removedDisplayAuthority,
                localizedName: ""
            };
        }
        // --------------------------------------------------------------------------------------------------------
        console.log(roleData);
        this.dialogRef.close(roleData);
    };
    RoleTablePopupComponent.prototype.onChangeUserRole = function (authority, isChecked) {
        var dataArray = this.authoritiesFormGroup.controls.data;
        // console.log('------------------------------------------ dataArray', dataArray);
        if (isChecked) {
            dataArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](authority.code));
            this.selectedAuthorities.push(authority.id);
        }
        else {
            var index = dataArray.controls.findIndex(function (x) { return x.value === authority.code; });
            dataArray.removeAt(index);
            var i = this.selectedAuthorities.findIndex(function (y) { return y === authority.id; });
            this.selectedAuthorities.splice(i, 1);
        }
    };
    RoleTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-table-popup',
            template: __webpack_require__(/*! ./role-table-popup.component.html */ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], RoleTablePopupComponent);
    return RoleTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/user/roles/role-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/user/roles/role-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Roles</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\"  [roleAuthorization]=\"'pur-c'\">Add Role</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"roles\" [columnMode]=\"'flex'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Role Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\r\n          <span fxFlex></span>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"editRole(row)\" [roleAuthorization]=\"'pur-u'\">\r\n              <mat-icon>edit</mat-icon>Edit\r\n            </button>\r\n            <button mat-menu-item (click)=\"deleteRole(row)\" [roleAuthorization]=\"'pur-d'\">\r\n              <mat-icon>delete</mat-icon>Delete\r\n            </button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/user/roles/role-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/user/roles/role-table.component.ts ***!
  \**********************************************************/
/*! exports provided: RoleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTableComponent", function() { return RoleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-table-popup/role-table-popup.component */ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/views/sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
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
    function RoleTableComponent(dialog, snack, clientService, confirmService, loader, errDialog, authService) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.authService = authService;
        this.pageSize = 10;
        this.commonAndAdminAuthorities = [];
        this.componentList = [];
    }
    RoleTableComponent.prototype.ngOnInit = function () {
        var currentUser = this.authService.getLoggedUserDetail();
        if (currentUser) {
            this.clientId = currentUser.userData.client.id;
            this.getClientRoles();
            this.getCommonAndAdminAuthorities();
        }
    };
    RoleTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    RoleTableComponent.prototype.getClientRoles = function () {
        var _this = this;
        this.getItemSub = this.clientService.getClient(this.clientId).subscribe(function (successResp) {
            _this.roles = successResp.content.roles;
            _this.roles.forEach(function (role, index) {
                if (role.predefined === 'true') {
                    _this.adminRoleId = role.id;
                    _this.roles.splice(index, 1);
                }
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    RoleTableComponent.prototype.getCommonAndAdminAuthorities = function () {
        var _this = this;
        this.clientService.getCommonAndAdminAuthority().subscribe(function (response) {
            response.content.forEach(function (section) {
                section.authorities.forEach(function (authority) {
                    _this.commonAndAdminAuthorities.push(authority);
                });
            });
        });
    };
    RoleTableComponent.prototype.openPopUp = function (roleData, isNew) {
        var _this = this;
        if (roleData === void 0) { roleData = {}; }
        this.clientService.getAdminAuthority(this.adminRoleId).subscribe(function (response) {
            _this.adminRoleAuthorities = response.content;
            var title = isNew ? "Create New User Role" : "Update User Role";
            roleData["isNew"] = isNew;
            var dialogRef = _this.dialog.open(_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["RoleTablePopupComponent"], {
                width: "900px",
                disableClose: true,
                data: {
                    title: title,
                    roleData: roleData,
                    clientID: _this.clientId,
                    adminRoleAuthorities: _this.adminRoleAuthorities,
                    commonAndAdminAuthorities: _this.commonAndAdminAuthorities
                }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    // If user press cancel
                    return;
                }
                _this.loader.open();
                if (isNew) {
                    // console.log('------------ create user role object ---------------');
                    console.log(res);
                    _this.clientService.createNewRole(res).subscribe(function (response) {
                        // console.log('--------------- create user role response ----------------');
                        // console.log(response);
                        _this.snack.open('User Role Created', 'close', {
                            duration: 2000
                        });
                        _this.getClientRoles();
                    }, function (error) {
                        _this.errDialog.showError(error);
                    });
                }
                else {
                    console.log('------------ update user role object ---------------');
                    console.log(res);
                    _this.clientService.updateRloe(_this.editRoleId, res).subscribe(function (response) {
                        // console.log('--------------- create user role response ----------------');
                        // console.log(response);
                        _this.snack.open("User Role Updated", "close", {
                            duration: 2000
                        });
                        _this.getClientRoles();
                    }, function (error) {
                        _this.errDialog.showError(error);
                    });
                }
                _this.loader.close();
            });
        });
    };
    RoleTableComponent.prototype.editRole = function (role) {
        var _this = this;
        this.editRoleId = role.id;
        this.clientService.getRoleAuthorities(role.id).subscribe(function (response) {
            var roleData = {
                name: response.content.name,
                description: response.content.description,
                predefined: response.content.predefined,
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
                _this.getClientRoles();
            }
        });
    };
    RoleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-role-table",
            template: __webpack_require__(/*! ./role-table.component.html */ "./src/app/views/user/roles/role-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], RoleTableComponent);
    return RoleTableComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-table/user-category-popup/user-category-popup.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-category-popup/user-category-popup.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Category</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n  <mat-form-field class=\"matAutocomplete-chip-list\">\r\n\r\n    <mat-chip-list #chipList>\r\n      <mat-chip *ngFor=\"let category of selectedCategories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n        (removed)=\"remove(category)\">\r\n        {{category.name}}\r\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n      </mat-chip>\r\n      <input matInput placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\"\r\n        [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n        (matChipInputTokenEnd)=\"add($event)\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n        aria-label=\"Category\">\r\n    </mat-chip-list>\r\n\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category.id\">\r\n        <span>{{category.name}}</span>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"submit()\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/user/user-table/user-category-popup/user-category-popup.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-category-popup/user-category-popup.component.ts ***!
  \********************************************************************************************/
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
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.allCategories = [];
        this.selectedCategories = [];
        this.filteredCategories = this.categoryCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (category) { return category ? _this._filterCategories(category) : _this.allCategories.slice(); }));
    }
    UserCategoryPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCategories = JSON.parse(JSON.stringify(this.data.category));
        this.selectedCategories = [];
        if (this.data.selectedCategory.length > 0) {
            this.data.selectedCategory.forEach(function (element) {
                _this.addSelectedCategory(element.id);
            });
        }
    };
    UserCategoryPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.selectedCategories);
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
    UserCategoryPopupComponent.prototype.selected = function (event) {
        this.addSelectedCategory(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    UserCategoryPopupComponent.prototype.addSelectedCategory = function (id) {
        var _this = this;
        this.allCategories.forEach(function (item, index) {
            if (item.id === id) {
                _this.selectedCategories.push(item);
                _this.allCategories.splice(index, 1);
            }
        });
    };
    UserCategoryPopupComponent.prototype.remove = function (category) {
        var _this = this;
        this.selectedCategories.forEach(function (item, index) {
            if (item.id === category.id) {
                _this.allCategories.push(category);
                _this.selectedCategories.splice(index, 1);
            }
        });
    };
    UserCategoryPopupComponent.prototype._filterCategories = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.name.toLowerCase().indexOf(filterValue) === 0; });
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
            template: __webpack_require__(/*! ./user-category-popup.component.html */ "./src/app/views/user/user-table/user-category-popup/user-category-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserCategoryPopupComponent);
    return UserCategoryPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-table/user-community-popup/user-community-popup.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-community-popup/user-community-popup.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Community</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" style=\"overflow: unset; max-height: unset;\">\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-3\" *ngIf=\"allCommunities.length !== 0\">\r\n    <div fxFlex=\"50\" class=\"pr-1\" *ngFor=\"let community of allCommunities\">\r\n      <mat-checkbox [checked]=\"community.isChecked\" (change)=\"onChange($event)\" class=\"full-width\"\r\n        [value]=\"community.id\">\r\n        {{community.name}}</mat-checkbox>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"allCommunities.length === 0\">\r\n    Client has no any assigned communities.!\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-2\">\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"submit()\" *ngIf=\"allCommunities.length !== 0\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/user/user-table/user-community-popup/user-community-popup.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-community-popup/user-community-popup.component.ts ***!
  \**********************************************************************************************/
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
        this.allCommunities = [];
        this.selectedCommunities = [];
    }
    UserCommunityPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCommunities = JSON.parse(JSON.stringify(this.data.community));
        this.selectedCommunities = this.data.selectedCommunity;
        this.allCommunities.forEach(function (element) {
            if (_this.selectedCommunities.length > 0) {
                var status_1 = false;
                _this.selectedCommunities.forEach(function (community) {
                    if (community.id.indexOf(element.id) === 0) {
                        status_1 = true;
                    }
                    element['isChecked'] = status_1;
                });
            }
        });
    };
    UserCommunityPopupComponent.prototype.onChange = function (event) {
        var _this = this;
        if (event.checked) {
            this.allCommunities.forEach(function (item) {
                if (item.id === event.source.value) {
                    _this.selectedCommunities.push(item);
                }
            });
        }
        else {
            this.selectedCommunities.forEach(function (item, index) {
                if (item.id === event.source.value) {
                    _this.selectedCommunities.splice(index, 1);
                }
            });
        }
    };
    UserCommunityPopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.selectedCommunities);
    };
    UserCommunityPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-community-popup',
            template: __webpack_require__(/*! ./user-community-popup.component.html */ "./src/app/views/user/user-table/user-community-popup/user-community-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserCommunityPopupComponent);
    return UserCommunityPopupComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-table/user-create-popup/user-create-popup.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-create-popup/user-create-popup.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Create User</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" id=\"client-create\">\r\n\r\n\r\n  <mat-horizontal-stepper [linear]=\"true\">\r\n\r\n    <mat-step [stepControl]=\"userFormGroup\">\r\n\r\n      <form [formGroup]=\"userFormGroup\">\r\n\r\n        <ng-template matStepLabel>Client</ng-template>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" [formControl]=\"userFormGroup.controls['username']\"\r\n                placeholder=\"User Name\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"password\" type=\"password\" [formControl]=\"userFormGroup.controls['password']\"\r\n                positiveNumberAndLetterOnly placeholder=\"Password\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"email\" [formControl]=\"userFormGroup.controls['email']\" placeholder=\"Email\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-select [formControl]=\"userFormGroup.controls['role']\" placeholder=\"Select A User Role\">\r\n                <mat-option>none</mat-option>\r\n                <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </mat-step>\r\n\r\n\r\n    <mat-step [stepControl]=\"categoryFormGroup\">\r\n      <form [formGroup]=\"categoryFormGroup\">\r\n        <ng-template matStepLabel>Category</ng-template>\r\n\r\n        <mat-form-field class=\"matAutocomplete-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let category of selectedCategories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(category)\">\r\n              {{category.name}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input matInput placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\"\r\n              [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              (matChipInputTokenEnd)=\"add($event)\" [matChipInputAddOnBlur]=\"addOnBlur\" aria-label=\"Category\" [required]=\"this.selectedCategories.length === 0\">\r\n          </mat-chip-list>\r\n\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category.id\">\r\n              <span>{{category.name}}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n\r\n        </mat-form-field>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext\r\n              [disabled]=\"this.selectedCategories.length == 0\">Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"communityFormGroup\">\r\n      <form [formGroup]=\"communityFormGroup\">\r\n        <ng-template matStepLabel>Community</ng-template>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"\"\r\n            *ngIf=\"allCommunities.length !== 0\">\r\n            <div fxFlex=\"50\" class=\"pr-1\" *ngFor=\"let community of allCommunities\">\r\n              <mat-checkbox [checked]=\"community.isChecked\" (change)=\"onChange($event)\" class=\"full-width\"\r\n                [value]=\"community.id\">\r\n                {{community.name}}</mat-checkbox>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"allCommunities.length === 0\">\r\n            Client has no any assigned communities.!\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/views/user/user-table/user-create-popup/user-create-popup.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-create-popup/user-create-popup.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserCreatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreatePopupComponent", function() { return UserCreatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
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
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.allCategories = [];
        this.selectedCategories = [];
        this.allCommunities = [];
        this.selectedCommunities = [];
        this.filteredCategories = this.categoryCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (category) { return category ? _this._filterCategories(category) : _this.allCategories.slice(); }));
    }
    UserCreatePopupComponent.prototype.ngOnInit = function () {
        this.roles = this.data.roles;
        this.allCategories = JSON.parse(JSON.stringify(this.data.category));
        this.allCommunities = JSON.parse(JSON.stringify(this.data.community));
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
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UserCreatePopupComponent.prototype.submit = function () {
        var forms = [this.userFormGroup.value, this.selectedCategories, this.selectedCommunities];
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
    UserCreatePopupComponent.prototype.selected = function (event) {
        this.addSelectedCategory(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    UserCreatePopupComponent.prototype.addSelectedCategory = function (id) {
        var _this = this;
        this.allCategories.forEach(function (item, index) {
            if (item.id === id) {
                _this.selectedCategories.push(item);
                _this.allCategories.splice(index, 1);
            }
        });
    };
    UserCreatePopupComponent.prototype.remove = function (category) {
        var _this = this;
        this.selectedCategories.forEach(function (item, index) {
            if (item.id === category.id) {
                _this.allCategories.push(category);
                _this.selectedCategories.splice(index, 1);
            }
        });
    };
    // Community checkbox onchange event
    UserCreatePopupComponent.prototype.onChange = function (event) {
        var _this = this;
        if (event.checked) {
            this.allCommunities.forEach(function (item) {
                if (item.id === event.source.value) {
                    _this.selectedCommunities.push(item);
                }
            });
        }
        else {
            this.selectedCommunities.forEach(function (item, index) {
                if (item.id === event.source.value) {
                    _this.selectedCommunities.splice(index, 1);
                }
            });
        }
    };
    UserCreatePopupComponent.prototype._filterCategories = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.name.toLowerCase().indexOf(filterValue) === 0; });
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
            template: __webpack_require__(/*! ./user-create-popup.component.html */ "./src/app/views/user/user-table/user-create-popup/user-create-popup.component.html"),
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

/***/ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-table-popup/user-table-popup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">{{data.title}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"username\" [formControl]=\"itemForm.controls['username']\" placeholder=\"User Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\" *ngIf=\"formStatus\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"password\" type=\"password\" [formControl]=\"itemForm.controls['password']\"\r\n            positiveNumberAndLetterOnly placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput name=\"email\" [formControl]=\"itemForm.controls['email']\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-select [formControl]=\"itemForm.controls['role']\" placeholder=\"Select A User Role\">\r\n            <mat-option>none</mat-option>\r\n            <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <div fxFlex=\"50\" class=\"pt-1 pr-1\">\r\n        <mat-slide-toggle [formControl]=\"itemForm.controls['isActive']\">Active User</mat-slide-toggle>\r\n      </div> -->\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/user/user-table/user-table-popup/user-table-popup.component.ts ***!
  \**************************************************************************************/
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
            template: __webpack_require__(/*! ./user-table-popup.component.html */ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserTablePopupComponent);
    return UserTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-table/user-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/user-table/user-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n\r\n    <div class=\"m-333 mt-3\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openUserCreatePopup()\"\r\n        [roleAuthorization]=\"'pu-c'\">Add User</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"users\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n\r\n      <ngx-datatable-column name=\"\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <img mat-list-avatar class=\"\" src=\"assets/images/face-1.jpg\" alt=\"\"\r\n            style=\"flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; object-fit: cover;\">\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.userName }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Email\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.email }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"warn\" [selected]=\"true\">{{row?.role.name}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status]}}\" [selected]=\"true\">{{row?.status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu1\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu1=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openEditPopUp(row)\">\r\n              <mat-icon>edit</mat-icon>\r\n              <span>Edit</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCommunityPopUp(row)\">\r\n              <mat-icon>assignment_ind</mat-icon>\r\n              <span>Community</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCategoryPopUp(row)\">\r\n              <mat-icon>assistant</mat-icon>\r\n              <span>Category</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"removeUser(row)\" [roleAuthorization]=\"'pu-d'\">\r\n              <mat-icon>delete</mat-icon>Delete\r\n            </button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/user/user-table/user-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/user/user-table/user-table.component.ts ***!
  \***************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-table/user-create-popup/user-create-popup.component */ "./src/app/views/user/user-table/user-create-popup/user-create-popup.component.ts");
/* harmony import */ var _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-table/user-table-popup/user-table-popup.component */ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var _user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-category-popup/user-category-popup.component */ "./src/app/views/user/user-table/user-category-popup/user-category-popup.component.ts");
/* harmony import */ var _user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-community-popup/user-community-popup.component */ "./src/app/views/user/user-table/user-community-popup/user-community-popup.component.ts");
/* harmony import */ var app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/views/sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
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
    function UserTableComponent(dialog, snack, clientService, loader, errDialog, activeRoute, authService) {
        this.dialog = dialog;
        this.snack = snack;
        this.clientService = clientService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.activeRoute = activeRoute;
        this.authService = authService;
        this.roles = [];
        this.statusArray = {
            'Active': "primary",
            'Inactive': "accent"
        };
        this.pageSize = 10;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.clientId = currentUser.userData.client.id;
            this.getUsersByClient();
            this.getClientCategories();
        }
        // this.activeRoute.queryParams.subscribe(params => {
        //   this.clientId = params["clientId"];
        //   // // RAVEEN : 2014/04/11 - Handling situation when client id is not coming from quesry parameter
        //   // if (!this.clientId) {
        //   //   const currentUser = this.authService.getLoggedUserDetail();
        //   //   this.clientId = currentUser.userData.client.id;
        //   // }
        //   this.getUsers();
        //   this.getUserRoles();
        //   this.getClientCategories();
        //   this.getClientCommunities();
        // });
    };
    UserTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    UserTableComponent.prototype.getUsersByClient = function () {
        var _this = this;
        this.getItemSub = this.clientService.getClient(this.clientId).subscribe(function (successResp) {
            _this.users = successResp.content.users;
            _this.users.forEach(function (item, index) {
                if (item.role.name === "Super Administrator")
                    _this.users.splice(index, 1);
                if (item.role.predefined === "true")
                    _this.users.splice(index, 1);
            });
            _this.roles = successResp.content.roles;
            _this.roles.forEach(function (item, index) {
                if (item.predefined === "true")
                    _this.roles.splice(index, 1);
            });
            // successResp.content.roles.forEach((item) => {
            //   this.roles.push(item);
            // });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.getClientCategories = function () {
        var _this = this;
        this.getItemSub = this.clientService.getClientCategories(this.clientId).subscribe(function (successResp) {
            _this.clientCategory = successResp.content;
            console.log(_this.clientCategory);
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.getClientAndUserCommunities = function (popup, user) {
        var _this = this;
        this.getItemSub = this.clientService.getClientCommunities(this.clientId).subscribe(function (successResp) {
            var clientCommunity = successResp.content;
            if (popup === 'UserCreatePopup') {
                _this.userCreatePopup(clientCommunity);
            }
            else if (popup === 'CommunityPopUp') {
                _this.clientService.getUser(user.id).subscribe(function (successResp) {
                    var userCommunity = successResp.content.communities;
                    _this.communityPopup(user.id, clientCommunity, userCommunity);
                }, function (error) {
                    _this.errDialog.showError(error);
                });
            }
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.openUserCreatePopup = function () {
        this.getClientAndUserCommunities("UserCreatePopup");
    };
    UserTableComponent.prototype.userCreatePopup = function (clientCommunity) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_4__["UserCreatePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { roles: this.roles, category: this.clientCategory, community: clientCommunity }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log(res);
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            var role = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["RoleData"](res[0].role);
            var communities = [];
            res[2].forEach(function (element) {
                communities.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CommunityData"](element.id));
            });
            var categories = [];
            res[1].forEach(function (element) {
                categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CategoryData"](element.id));
            });
            var client = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["ClientData"](_this.clientId);
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserCreateReq"](res[0].username, res[0].password, res[0].email, role, client, communities, categories);
            _this.clientService.addUser(req).subscribe(function (response) {
                _this.getUsersByClient();
                _this.loader.close();
                _this.snack.open("New User added !", "OK", { duration: 4000 });
            }, function (error) {
                _this.errDialog.showError(error);
            });
        });
    };
    UserTableComponent.prototype.openEditPopUp = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var dialogRef = this.dialog.open(_user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["UserTablePopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { payload: data, roles: this.roles }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            var role = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["RoleData"](res.role);
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserUpdateReq"](res.username, res.email, role);
            _this.loader.open();
            _this.clientService.updateUser(data.id, req).subscribe(function (response) {
                _this.getUsersByClient();
                _this.loader.close();
                _this.snack.open("User Updated!", "OK", { duration: 4000 });
            }, function (error) {
                _this.loader.close();
                _this.errDialog.showError(error);
            });
        });
    };
    UserTableComponent.prototype.openCommunityPopUp = function (data) {
        if (data === void 0) { data = {}; }
        this.getClientAndUserCommunities("CommunityPopUp", data);
    };
    UserTableComponent.prototype.communityPopup = function (userId, clientCommunities, userCommunities) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserCommunityPopupComponent"], {
            width: "720px",
            disableClose: true,
            data: { community: clientCommunities, selectedCommunity: userCommunities }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            console.log(res);
            var community = [];
            res.forEach(function (element) {
                community.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CommunityData"](element.id));
            });
            var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserCommunityUpdateRequest"](community);
            _this.loader.open();
            _this.clientService.updateUserCommunity(userId, req).subscribe(function (response) {
                _this.getUsersByClient();
                _this.loader.close();
                _this.snack.open("User Community Updated!", "OK", { duration: 4000 });
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
    UserTableComponent.prototype.openCategoryPopUp = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.getItemSub = this.clientService.getUser(data.id).subscribe(function (successResp) {
            console.log(successResp);
            console.log(successResp.content.role.id);
            var dialogRef = _this.dialog.open(_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_10__["UserCategoryPopupComponent"], {
                width: "720px",
                disableClose: true,
                data: { category: _this.clientCategory, selectedCategory: successResp.content.categories }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    // If user press cancel
                    return;
                }
                console.log(res);
                var categories = [];
                res.forEach(function (element) {
                    categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["CategoryData"](element.id));
                });
                var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_9__["UserCategoryUpdateReq"](categories);
                _this.loader.open();
                _this.clientService.updateUserCategories(data.id, req).subscribe(function (response) {
                    _this.loader.close();
                    _this.snack.open("User Category Updated!", "OK", { duration: 4000 });
                }, function (error) {
                    _this.loader.close();
                    _this.errDialog.showError({
                        title: "Error",
                        status: error.status,
                        type: "http_error"
                    });
                });
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.removeUser = function (user) {
        console.log('---------------------------- user', user);
    };
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/views/user/user-table/user-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/views/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/ui_icons/users.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{this.name}}</div>\r\n        <div class=\"subtitle mb-05\">ClearPicture</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily manage Users.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"user-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>person</mat-icon>\r\n            Users\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"role-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            User Roles\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
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
    function UserComponent(router, activeRoute, authService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.authService = authService;
    }
    UserComponent.prototype.ngOnInit = function () {
        // if(JSON.parse(localStorage.getItem('currentUser'))){
        //   const user = JSON.parse(localStorage.getItem('currentUser'));
        //   console.log(user);
        //   // this.id = user.client.id;
        //   // this.name = user.client.name;
        //   // this.url = client.clientLogo;
        // }
        var currentUser = this.authService.getLoggedUserDetail();
        this.clientId = currentUser.userData.client.id;
        this.name = currentUser.userData.client.name;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/views/user/user.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserComponent);
    return UserComponent;
}());



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
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.component */ "./src/app/views/user/user.component.ts");
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-table/user-table.component */ "./src/app/views/user/user-table/user-table.component.ts");
/* harmony import */ var _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-table/user-create-popup/user-create-popup.component */ "./src/app/views/user/user-table/user-create-popup/user-create-popup.component.ts");
/* harmony import */ var _user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-table/user-category-popup/user-category-popup.component */ "./src/app/views/user/user-table/user-category-popup/user-category-popup.component.ts");
/* harmony import */ var _user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-table/user-community-popup/user-community-popup.component */ "./src/app/views/user/user-table/user-community-popup/user-community-popup.component.ts");
/* harmony import */ var _roles_role_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./roles/role-table.component */ "./src/app/views/user/roles/role-table.component.ts");
/* harmony import */ var _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./roles/role-table-popup/role-table-popup.component */ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../client/client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user.routing */ "./src/app/views/user/user.routing.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-table/user-table-popup/user-table-popup.component */ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm5/ngx-intl-tel-input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { UserTableComponent } from './users/user-table.component';












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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_16__["UserRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_19__["NgxIntlTelInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_9__["UserTableComponent"],
                _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_18__["UserTablePopupComponent"],
                _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_10__["UserCreatePopupComponent"],
                _user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_12__["UserCommunityPopupComponent"],
                _user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserCategoryPopupComponent"],
                _roles_role_table_component__WEBPACK_IMPORTED_MODULE_13__["RoleTableComponent"],
                _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_14__["RoleTablePopupComponent"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _client_client_service__WEBPACK_IMPORTED_MODULE_15__["ClientService"]],
            entryComponents: [
                _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_18__["UserTablePopupComponent"],
                _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_10__["UserCreatePopupComponent"],
                _user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_12__["UserCommunityPopupComponent"],
                _user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserCategoryPopupComponent"],
                _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_14__["RoleTablePopupComponent"]
            ]
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
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-table/user-table.component */ "./src/app/views/user/user-table/user-table.component.ts");
/* harmony import */ var _roles_role_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/role-table.component */ "./src/app/views/user/roles/role-table.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/views/user/user.component.ts");



var UserRoutes = [
    {
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        data: { title: "User", breadcrumb: "User" },
        children: [
            {
                path: "user-table",
                component: _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_0__["UserTableComponent"],
                data: { title: "Users", breadcrumb: "Users" }
            },
            {
                path: "role-table",
                component: _roles_role_table_component__WEBPACK_IMPORTED_MODULE_1__["RoleTableComponent"],
                data: { title: "Roles", breadcrumb: "Roles" }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-user-user-module.js.map