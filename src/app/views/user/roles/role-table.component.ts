import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "../user.service";
import { ClientService } from "../../client/client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { RoleTablePopupComponent } from "./role-table-popup/role-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import { AuthenticationService } from "app/views/sessions/authentication.service";

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
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getLoggedUserDetail();
    if (currentUser) {
      this.clientId = currentUser.userData.client.id;
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
      this.roles.forEach((role, index) => {
        if (role.predefined === 'true') {
          this.adminRoleId = role.id;
          this.roles.splice(index, 1);
        }
      });
    },
      error => {
        this.errDialog.showError(error);
      }
    );
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

    this.clientService.getAdminAuthority(this.adminRoleId).subscribe(response => {
      this.adminRoleAuthorities = response.content;
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

  /*
   * Delete User Role
   * Created by Prasad Kumara
   * 14/02/2019
   */
  deleteRole(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          // this.loader.open();
          this.getClientRoles();
        }
      });
  }
}

