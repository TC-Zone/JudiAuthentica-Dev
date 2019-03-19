(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-user-module"],{

/***/ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/user/roles/role-table-popup/role-table-popup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">{{data.title}}</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" style=\"overflow: unset; max-height: unset;\">\r\n  <form [formGroup]=\"roleFormGroup\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"name\" placeholder=\"Role Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"pr-1\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput required formControlName=\"description\" placeholder=\"Description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <span>Select Role Authorities</span>\r\n    </div>\r\n    <div fxFlex=\"100\" class=\"pr-1\">\r\n      <mat-tab-group>\r\n        <div *ngFor=\"let module of this.componentList; let i = index\">\r\n          <mat-tab label=\"{{module.moduleName}}\">\r\n            <form [formGroup]=\"authoritiesFormGroup\">\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" style=\"padding-top: 5px;\" fxLayoutWrap=\"wrap\">\r\n                <div fxFlex=\"50\" class=\"pr-1\" style=\"padding-top: 5px;\" *ngFor=\"let item of module.data\">\r\n                  <mat-checkbox [checked]=\"item.checked\" (change)=\"onChange(item.id, module.moduleName, item.code, $event.checked)\" class=\"full-width\" value=\"{{item.code}}\">{{item.name}}</mat-checkbox>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-tab>\r\n        </div>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"accent\" [disabled]=\"this.selectedAuthorities.length == 0 || roleFormGroup.invalid\" (click)=\"submit()\">Save</button>\r\n  <span fxFlex></span>\r\n  <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n</mat-dialog-actions>\r\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/views/user/user.service.ts");
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
    function RoleTablePopupComponent(data, dialogRef, fb, userService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.userService = userService;
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
        this.userService.getAllAuthorities()
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
            template: __webpack_require__(/*! ./role-table-popup.component.html */ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n    <div class=\"card-title-text\">Roles</div>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"m-333\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Role</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"items\" [columnMode]=\"'flex'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Role Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.name }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role Description\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.description }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Last Modified Date\" [flexGrow]=\"2\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.lastModifiedDate }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <!-- <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"editRole(row)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteRole(row)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button> -->\r\n          <button mat-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"editRole(row)\"><mat-icon>edit</mat-icon>Edit</button>\r\n            <button mat-menu-item (click)=\"deleteRole(row)\"><mat-icon>delete</mat-icon>Delete</button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n\r\n    <!-- <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"pl-1\">Feedback Topic</th>\r\n          <th>Feedback Type</th>\r\n          <th>Start Date</th>\r\n          <th>End Date</th>\r\n          <th width=\"150px\" class=\"\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows;\">\r\n          <td class=\"pt-1 pb-1 pl-1\">{{row?.topic}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.type =='P' ? 'Product' : 'E Vote'}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.startDate}}</td>\r\n          <td class=\"pt-1 pb-1\">{{row?.endDate}}</td>\r\n          <td class=\"pt-1 pb-1 pr-1\">\r\n            <div class=\"pb-1\">\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='navigateSurveyBuilder(row)' color=\"primary\" class=\"\">\r\n                  <mat-icon>view_headline</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)='openSurveyPopup(row,false)' color=\"primary\" class=\"\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                <button mat-icon-button mat-sm-button (click)=\"deleteSurvey(row)\" color=\"warn\" class=\"\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td class=\"pt-1 pb-1 pl-1\">\r\n            <div class=\"pagination\">{{totalRecords}} Total</div>\r\n          </td>\r\n          <td colspan=\"4\">\r\n\r\n            <nav aria-label=\"Page navigation example\">\r\n              <ul class=\"pagination\" *ngIf=\"totalPages.length > 1\">\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber <= 1}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber-1);\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of totalPages\" [ngClass]=\"{'active':pageNumber === page}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(page);\">\r\n                    {{page}}\r\n                  </a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{'disabled':pageNumber >= totalPages.length}\">\r\n                  <a class=\"page-link\" (click)=\"this.getPageSurvey(pageNumber+1);\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table> -->\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-table-popup/role-table-popup.component */ "./src/app/views/user/roles/role-table-popup/role-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RoleTableComponent(dialog, snack, userService, confirmService, loader, errDialog, router) {
        this.dialog = dialog;
        this.snack = snack;
        this.userService = userService;
        this.confirmService = confirmService;
        this.loader = loader;
        this.errDialog = errDialog;
        this.router = router;
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
        this.getItemSub = this.userService.getAllUserRoles().subscribe(function (response) {
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
                _this.userService.createNewRole(res).subscribe(function (response) {
                    // console.log('--------------- create user role response ----------------');
                    // console.log(response);
                    _this.snack.open('User Role Created', 'close', {
                        duration: 2000
                    });
                    _this.getItems();
                });
            }
            else {
                // console.log('------------ update user role object ---------------');
                res['localizedName'] = '';
                // console.log(res);
                _this.userService.updateRloe(_this.editRoleId, res)
                    .subscribe(function (response) {
                    // console.log('--------------- create user role response ----------------');
                    // console.log(response);
                    _this.snack.open('User Role Updated', 'close', {
                        duration: 2000
                    });
                    _this.getItems();
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
        this.userService.getOneRoleAuthorities(role.id)
            .subscribe(function (response) {
            // console.log(response.content);
            var roleData = {
                name: response.content.name,
                description: response.content.description,
                authorities: response.content.authorities
            };
            _this.openPopUp(roleData, false);
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
            template: __webpack_require__(/*! ./role-table.component.html */ "./src/app/views/user/roles/role-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
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

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Category</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\">\r\n\r\n  <mat-form-field class=\"matAutocomplete-chip-list\">\r\n    <mat-chip-list #chipList>\r\n      <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n        (removed)=\"remove(category)\">\r\n        {{category}}\r\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n      </mat-chip>\r\n      <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\">\r\n    </mat-chip-list>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n        {{category}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>"

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

module.exports = "<form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span class=\"title dialog-title\">Community</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-dialog-content class=\"mat-typography mt-1\" id=\"community-popup\">\r\n\r\n    <!-- <div class=\"example-container\">\r\n      <h2>To do</h2>\r\n\r\n      <div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"[doneList]\"\r\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"example-container\">\r\n      <h2>Done</h2>\r\n\r\n      <div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"[todoList]\"\r\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n      <div fxFlex=\"100\" class=\"mt-1\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n        <span fxFlex></span>\r\n        <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</form>"

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

module.exports = "<mat-toolbar matDialogTitle class=\"mat-primary m-0\">\r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"title dialog-title\">Create Client</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-dialog-content class=\"mat-typography mt-1\" id=\"client-create\">\r\n\r\n\r\n  <mat-horizontal-stepper [linear]=\"true\">\r\n\r\n    <mat-step [stepControl]=\"userFormGroup\">\r\n\r\n      <form [formGroup]=\"userFormGroup\">\r\n\r\n        <ng-template matStepLabel>Client</ng-template>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" [formControl]=\"userFormGroup.controls['username']\" placeholder=\"User Name\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"password\" type=\"password\" [formControl]=\"userFormGroup.controls['password']\"\r\n                positiveNumberAndLetterOnly placeholder=\"Password\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"email\" [formControl]=\"userFormGroup.controls['email']\" placeholder=\"Email\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-select [formControl]=\"userFormGroup.controls['role']\" placeholder=\"Select A User Role\">\r\n                <mat-option>none</mat-option>\r\n                <mat-option *ngFor=\"let roles of roles\" [value]=\"roles.id\">{{roles.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </mat-step>\r\n\r\n\r\n    <mat-step [stepControl]=\"categoryFormGroup\">\r\n      <form [formGroup]=\"categoryFormGroup\">\r\n        <ng-template matStepLabel>Category</ng-template>\r\n\r\n        <mat-form-field class=\"matAutocomplete-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(category)\">\r\n              {{category}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryFormGroup.controls['category']\" [matAutocomplete]=\"auto\"\r\n              [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (matChipInputTokenEnd)=\"add($event)\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\">\r\n          </mat-chip-list>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n              {{category}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"communityFormGroup\">\r\n      <form [formGroup]=\"communityFormGroup\">\r\n        <ng-template matStepLabel>Community</ng-template>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n          <div fxFlex=\"100\" class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput name=\"username\" positiveNumberAndLetterOnly placeholder=\"Username\"\r\n                [formControl]=\"communityFormGroup.controls['username']\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n          <div fxFlex=\"100\" class=\"mt-1\">\r\n            <button mat-raised-button color=\"accent\" matStepperPrevious class=\"mr-1\">Back</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\r\n            <span fxFlex></span>\r\n            <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </form>\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n\r\n</mat-dialog-content>"

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

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n  <mat-card-title>\r\n\r\n    <div class=\"m-333 mt-3\">\r\n      <button mat-raised-button class=\"mb-05 ml-05\" color=\"primary\" (click)=\"userCreatePopup()\">Add User</button>\r\n      <span fxFlex></span>\r\n      <p class=\"mat-select-lable\"> Page Size: </p>\r\n      <mat-select class=\"mat-raised-select\" [(value)]=\"pageSize\" (selectionChange)=\"changeValue()\">\r\n        <mat-option [value]=\"10\">10</mat-option>\r\n        <mat-option [value]=\"20\">20</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n\r\n  </mat-card-title>\r\n  <mat-card-content class=\"p-0\">\r\n\r\n    <ngx-datatable class=\"material ml-0 mr-0\" [rows]=\"users\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\" [limit]=\"10\" [rowHeight]=\"'auto'\">\r\n\r\n      <ngx-datatable-column name=\"\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <img mat-list-avatar class=\"\" src=\"assets/images/face-1.jpg\" alt=\"\"\r\n            style=\"flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; object-fit: cover;\">\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.userName }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Email\" [flexGrow]=\"1\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row?.email }}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Role\" [flexGrow]=\"1\"  [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"warn\" [selected]=\"true\">{{row?.role.name}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\" [maxWidth]=\"150\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <mat-chip mat-sm-chip color=\"{{statusArray[row?.status]}}\" [selected]=\"true\">{{row?.status}}</mat-chip>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\" [maxWidth]=\"80\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu1\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu1=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openEditPopUp(row)\">\r\n              <mat-icon>edit</mat-icon>\r\n              <span>Edit</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCommunityPopUp(row)\">\r\n              <mat-icon>assignment_ind</mat-icon>\r\n              <span>Community</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openCategoryPopUp(row)\">\r\n              <mat-icon>assistant</mat-icon>\r\n              <span>Category</span>\r\n            </button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/views/user/user.service.ts");
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
    function UserTableComponent(dialog, snack, userService, loader, errDialog, activeRoute) {
        this.dialog = dialog;
        this.snack = snack;
        this.userService = userService;
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
        var user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(user);
        this.clientId = user.userData.client.id;
        this.name = user.userData.client.name;
        // this.url = client.clientLogo;
        this.getUsers();
        this.getUserRoles();
        this.getCategory();
    };
    UserTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    UserTableComponent.prototype.getUsers = function () {
        var _this = this;
        this.getItemSub = this.userService.getUsers(this.clientId).subscribe(function (successResp) {
            _this.users = successResp.content.users;
            console.log(_this.users);
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    UserTableComponent.prototype.getUserRoles = function () {
        var _this = this;
        this.getItemSub = this.userService.getRoles().subscribe(function (successResp) {
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
        this.getItemSub = this.userService.getRoles().subscribe(function (successResp) {
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
            _this.userService.addUser(req).subscribe(function (response) {
                _this.getUsers;
                _this.users = response;
                _this.loader.close();
                _this.snack.open("New User added !", "OK", { duration: 4000 });
            }, function (error) {
                _this.loader.close();
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
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/views/user/user-table/user-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"],
            _shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
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

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"assets/images/ui_icons/users.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{this.name}}</div>\r\n        <div class=\"subtitle mb-05\">ClearPicture</div>\r\n        <div class=\"text-muted\"> Provides the tools you need to easily manage Users.</div>\r\n      </div>\r\n\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <mat-list-item routerLink=\"users/user-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>person</mat-icon>\r\n            Users\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"users/role-table\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>settings</mat-icon>\r\n            User Roles\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

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
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            console.log(user);
            // this.id = user.client.id;
            // this.name = user.client.name;
            // this.url = client.clientLogo;
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/views/user/user.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user.routing */ "./src/app/views/user/user.routing.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-table/user-table-popup/user-table-popup.component */ "./src/app/views/user/user-table/user-table-popup/user-table-popup.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm5/ngx-intl-tel-input.js");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_15__["UserRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_18__["NgxIntlTelInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_9__["UserTableComponent"],
                _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_17__["UserTablePopupComponent"],
                _user_table_user_create_popup_user_create_popup_component__WEBPACK_IMPORTED_MODULE_10__["UserCreatePopupComponent"],
                _user_table_user_community_popup_user_community_popup_component__WEBPACK_IMPORTED_MODULE_12__["UserCommunityPopupComponent"],
                _user_table_user_category_popup_user_category_popup_component__WEBPACK_IMPORTED_MODULE_11__["UserCategoryPopupComponent"],
                _roles_role_table_component__WEBPACK_IMPORTED_MODULE_13__["RoleTableComponent"],
                _roles_role_table_popup_role_table_popup_component__WEBPACK_IMPORTED_MODULE_14__["RoleTablePopupComponent"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]],
            entryComponents: [
                _user_table_user_table_popup_user_table_popup_component__WEBPACK_IMPORTED_MODULE_17__["UserTablePopupComponent"],
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
    /*
    * Create New User Role
    * Created by Prasad Kumara
    * 14/02/2019
    */
    UserService.prototype.createNewRole = function (roleObj) {
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
    UserService.prototype.updateRloe = function (roleId, roleObj) {
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
    UserService.prototype.getAllUserRoles = function () {
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
    UserService.prototype.getAllAuthorities = function () {
        return this.http.get(environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + 'platform-authorities')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /*
    * Get Role Assign Authorities
    * Created by Prasad Kumara
    * 14/02/2019
    */
    UserService.prototype.getOneRoleAuthorities = function (roleId) {
        return this.http.get(this.roleUrl + '/' + roleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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



/***/ })

}]);
//# sourceMappingURL=views-user-user-module.js.map