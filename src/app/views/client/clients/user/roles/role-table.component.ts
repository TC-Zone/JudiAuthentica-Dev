import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../../../shared/services/app-loader/app-loader.service";
import { RoleTablePopupComponent } from "./role-table-popup/role-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import { UserService } from './../../../../sessions/UserService.service';
import { authProperties } from './../../../../../shared/services/auth/auth-properties';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  animations: egretAnimations
})
export class RoleTableComponent implements OnInit, OnDestroy {
  public items: any[];
  public pageSize = 10;

  public componentList = [];
  public editRoleId: String;
  public authArray: any;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getItems();
    this.authArray = this.setAuthorities();
    console.log('------------------ auth array ----------------------');
    console.log(this.authArray);
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  /*
  * Get All Roles And Create to the Ngx table
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getItems() {
    this.getItemSub = this.clientService.getAllUserRoles().subscribe(
      response => {
        // console.log('-------------- get all roles response--------------');
        // console.log(response);
        this.items = response.content;
      },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  /*
  * Open Create and Update Role popup window
  * Created by Prasad Kumara
  * 14/02/2019
  */
  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? "Create New User Role" : "Update User Role";
    data['isNew'] = isNew;
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      RoleTablePopupComponent,
      {
        width: "900px",
        disableClose: true,
        data: { title: title, payload: data }
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
        // console.log(res);
        this.clientService.createNewRole(res).subscribe(response => {
          // console.log('--------------- create user role response ----------------');
          // console.log(response);
          this.snack.open('User Role Created', 'close', {
            duration: 2000
          });
          this.getItems();
        });
      } else {
        // console.log('------------ update user role object ---------------');
        res['localizedName'] = '';
        // console.log(res);
        this.clientService.updateRloe(this.editRoleId, res)
          .subscribe(response => {
            // console.log('--------------- create user role response ----------------');
            // console.log(response);
            this.snack.open('User Role Updated', 'close', {
              duration: 2000
            });
            this.getItems();
          });
      }
      this.loader.close();
    });
  }

  /*
  * Edit User Role
  * Created by Prasad Kumara
  * 14/02/2019
  */
  editRole(role) {
    // console.log('------------- edit role ----------------');
    // console.log(role);
    this.editRoleId = role.id;
    this.clientService.getOneRoleAuthorities(role.id)
      .subscribe(response => {
        // console.log(response.content);
        const roleData = {
          name: response.content.name,
          description: response.content.description,
          authorities: response.content.authorities
        };
        this.openPopUp(roleData, false);
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
          this.getItems();
        }
      });
  }

  setAuthorities(): any {
    const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
    const authArray = {
      create: false,
      search: false,
      update: false,
      delete: false,
      view: false,
    };
    if (userObj) {
      const decodedToken = jwt_decode(userObj.token);
      const authorities = decodedToken.authorities;
      authorities.forEach(element => {
        if (element === 'pur-u') {
          authArray.update = true;
        }
        if (element === 'pur-c') {
          authArray.create = true;
        }
        if (element === 'pur-d') {
          authArray.delete = true;
        }
        if (element === 'pur-v') {
          authArray.view = true;
        }
      });
    }
    return authArray;
  }

}
