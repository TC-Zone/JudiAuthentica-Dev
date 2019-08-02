import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../../../shared/services/app-loader/app-loader.service";
import { RoleTablePopupComponent } from "./role-table-popup/role-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../../shared/services/app-error/app-error.service";

import { AuthenticationService } from "../../../../sessions/authentication.service";
import { authProperties } from "./../../../../../shared/services/auth/auth-properties";
import * as jwt_decode from "jwt-decode";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  animations: egretAnimations
})
export class RoleTableComponent implements OnInit, OnDestroy {
  public pageSize = 10;

  public roles: any[];
  public adminRoleId;
  public adminRoleAuthorities;
  public commonAndAdminAuthorities = [];

  public componentList = [];
  public editRoleId: String;
  public clientId;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    if (currentClient) {
      this.clientId = currentClient.id;
      this.getClientRoles();
      this.getCommonAndAdminAuthorities();
    }
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getClientRoles() {
    this.getItemSub = this.clientService.getClient(this.clientId).subscribe(successResp => {
      this.roles = successResp.content.roles;
      this.roles.forEach(role => {
        if (role.predefined === 'true') {
          this.adminRoleId = role.id;
        }
      });
      this.getAdminAuthorities(this.adminRoleId);
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getAdminAuthorities(id) {
    this.clientService.getAdminAuthority(id).subscribe(response => {
      this.adminRoleAuthorities = response.content;
    });
  }

  getCommonAndAdminAuthorities() {
    this.clientService.getCommonAndAdminAuthority().subscribe(response => {
      response.content.forEach(section => {
        section.authorities.forEach(authority => {
          this.commonAndAdminAuthorities.push(authority);
        });
      });
    });
  }

  openPopUp(roleData: any = {}, isNew?) {
    let title = isNew ? "Create New User Role" : "Update User Role";
    roleData["isNew"] = isNew;
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      RoleTablePopupComponent,
      {
        width: "900px",
        disableClose: true,
        data: {
          title: title,
          roleData: roleData,
          clientID: this.clientId,
          adminRoleAuthorities: this.adminRoleAuthorities,
          commonAndAdminAuthorities: this.commonAndAdminAuthorities
        }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }
      this.loader.open();
      if (isNew) {
        // console.log('------------ create user role object ---------------');
        console.log(res);
        this.clientService.createNewRole(res).subscribe(response => {
          // console.log('--------------- create user role response ----------------');
          // console.log(response);
          this.snack.open('User Role Created', 'close', {
            duration: 2000
          });
          this.getClientRoles();
        },
          error => {
            this.errDialog.showError(error);
          });
      } else {
        console.log('------------ update user role object ---------------');
        console.log(res);
        this.clientService.updateRloe(this.editRoleId, res).subscribe(
          response => {
            // console.log('--------------- create user role response ----------------');
            // console.log(response);
            this.snack.open("User Role Updated", "close", {
              duration: 2000
            });
            this.getClientRoles();
          },
          error => {
            this.errDialog.showError(error);
          });
      }
      this.loader.close();
    });
  }

  editRole(role) {
    this.editRoleId = role.id;
    this.clientService.getRoleAuthorities(role.id).subscribe(
      response => {
        const roleData = {
          name: response.content.name,
          description: response.content.description,
          predefined: response.content.predefined,
          authorities: response.content.authorities
        };
        this.openPopUp(roleData, false);
      },
      error => {
        this.errDialog.showError(error);
      });
  }

  deleteRole(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.getClientRoles();
        }
      });
  }
}
