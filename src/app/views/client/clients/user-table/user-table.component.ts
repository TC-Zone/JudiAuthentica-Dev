import { Component, OnInit} from '@angular/core';
import { ClientService } from "../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../../shared/services/app-loader/app-loader.service";
import { UserTablePopupComponent } from '../user/user-table/user-table-popup/user-table-popup.component';
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../shared/services/app-error/app-error.service";
import { ActivatedRoute } from '@angular/router';
import { UserCreateReq, ClientData, UserRole } from 'app/model/ClientModel.model';
import { authProperties } from './../../../../shared/services/auth/auth-properties';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  animations: egretAnimations
})
export class UserTableComponent implements OnInit {

  public clientId;
  public users: any[];
  public roles: any[];
  public statusArray = {
    'Active': "primary",
    'Inactive': "accent"
  };
  public pageSize = 10;
  public name;
  public authArray: any;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(params => {
      this.clientId = params["id"];
      this.name = params["name"];
    });

    this.getUsers();
    this.getUserRoles();
    this.authArray = this.setAuthorities();
    console.log('------------------ auth array ----------------------');
    console.log(this.authArray);

  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getUsers() {
    this.getItemSub = this.clientService.getUsers(this.clientId).subscribe(successResp => {
      console.log(successResp.content);

      this.users = successResp.content.users;

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

  getUserRoles() {
    this.getItemSub = this.clientService.getRoles().subscribe(successResp => {

      successResp.content.forEach((item, index) => {
        if (item.name === "Super Administrator") successResp.content.splice(index, 1);
      });
      this.roles = successResp.content;
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

  openPopUp(data: any = {}, isNew?) {

    let title = isNew ? "Add new User" : "Update User";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserTablePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, roles: this.roles }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }

      let roles: UserRole[] = [];
      roles.push(new UserRole(res.role));
      const client: ClientData = new ClientData(this.clientId);
      const req: UserCreateReq = new UserCreateReq(res.username, res.password, res.email, roles, client);

      this.loader.open();
      if (isNew) {

        this.clientService.addUser(req).subscribe(
          response => {
            this.getUsers();
            this.loader.close();
            this.snack.open("New User added !", "OK", { duration: 4000 });
          },
          error => {
            this.loader.close();
            this.errDialog.showError({
              title: "Error",
              status: error.status,
              type: "http_error"
            });
          }
        );
      } else {
        this.clientService.updateUser(data.id, req).subscribe(
          response => {
            this.getUsers();
            this.loader.close();
            this.snack.open("User Updated!", "OK", { duration: 4000 });
            // return this.users.slice();
          },
          error => {
            this.loader.close();
            this.errDialog.showError({
              title: "Error",
              status: error.status,
              type: "http_error"
            });
          }
        );
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
        if (element === 'pu-u') {
          authArray.update = true;
        }
        if (element === 'pu-c') {
          authArray.create = true;
        }
        if (element === 'pu-d') {
          authArray.delete = true;
        }
        if (element === 'pu-v') {
          authArray.view = true;
        }
      });
    }
    return authArray;
  }

}



