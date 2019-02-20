import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "../user.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { UserTablePopupComponent } from "./user-table-popup/user-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { UserCreateReq, ClientData, UserRole } from "app/model/ClientModel.model";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  animations: egretAnimations
})
export class UserTableComponent implements OnInit, OnDestroy {
  
  public clientId;
  public users: any[];
  public roles: any[];
  public statusArray = {
    'Active': "primary",
    'Deactive': "accent"
  };
  public pageSize = 10;
  public name;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private userService: UserService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    this.clientId = currentUser.userData.client.id;
    this.name = currentUser.userData.client.name;

    this.getUsers();
    this.getUserRoles();

  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getUsers() {
    this.getItemSub = this.userService.getUsers(this.clientId).subscribe(successResp => {

      successResp.content.users.forEach((user, index) => {
        user.roles.forEach((role) => {
          if (role.name === "Admin") successResp.content.users.splice(index, 1);
        });
      });
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
    this.getItemSub = this.userService.getRoles().subscribe(successResp => {

      successResp.content.forEach((item, index) => {
        if (item.name === "Super Administrator" || item.name === "Admin") successResp.content.splice(index, 1);
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

        this.userService.addUser(req).subscribe(
          response => {
            this.getUsers();
            this.loader.close();
            this.snack.open("New client added !", "OK", { duration: 4000 });
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
        this.userService.updateUser(data.id, req).subscribe(
          response => {
            this.getUsers();
            this.loader.close();
            this.snack.open("Client Updated!", "OK", { duration: 4000 });
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
}
