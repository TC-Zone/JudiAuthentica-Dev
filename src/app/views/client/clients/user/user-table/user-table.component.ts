import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../../../shared/services/app-loader/app-loader.service";
import { UserCreatePopupComponent } from "../user-table/user-create-popup/user-create-popup.component";
import { UserTablePopupComponent } from "../user-table/user-table-popup/user-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../../shared/services/app-error/app-error.service";
import { ActivatedRoute } from '@angular/router';
import { UserCreateReq, ClientData, RoleData, CommunityData, CategoryData } from 'app/model/ClientModel.model';
import { UserCategoryPopupComponent } from './user-category-popup/user-category-popup.component';
import { UserCommunityPopupComponent } from './user-community-popup/user-community-popup.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  animations: egretAnimations
})
export class UserTableComponent implements OnInit {

  public users: any[];
  public roles: any[];
  public statusArray = {
    'Active': "primary",
    'Inactive': "accent"
  };
  public pageSize = 10;
  public clientId;
  public name;
  public url;

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

    const client = JSON.parse(localStorage.getItem('currentClient'));
    console.log(client);

    this.clientId = client.id;
    this.name = client.name;
    this.url = client.clientLogo;

    this.getUsers();
    this.getUserRoles();
    // this.getCategory();
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getUsers() {
    this.getItemSub = this.clientService.getUsers(this.clientId).subscribe(successResp => {
      this.users = successResp.content.users;
      console.log(this.users);
    },
      error => {
        this.errDialog.showError(error);
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
        this.errDialog.showError(error);
      }
    );
  }

  getCategory(){
    this.getItemSub = this.clientService.getRoles().subscribe(successResp => {
      successResp.content.forEach((item, index) => {
        if (item.name === "Super Administrator") successResp.content.splice(index, 1);
      });
      this.roles = successResp.content;
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  userCreatePopup() {
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserCreatePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { roles: this.roles }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);

      if (!res) {
        // If user press cancel
        return;
      }

      this.loader.open();
      // let users: UserData[] = [];
      // users.push(new UserData(res[2].username, res[2].email));
      // let license: ClientLicenseData = new ClientLicenseData(res[3].tagCount, res[3].userCount, res[3].communityCount, res[3].feedbackCount, res[3].eventCount, res[3].promoCount);
      // const req: ClientCreateReq = new ClientCreateReq(res[0].name, res[0].description, res[1], users, license);

      // let roles: UserRole[] = [];
      // roles.push(new UserRole(res[0].role));


      let role: RoleData = new RoleData(res[0].role);

      let communities: CommunityData[] = [];
      // communities.push(new CommunityData(res[0].role));

      let categories: CategoryData[] = [];
      categories.push(new CategoryData('d36eeebd8b1f0cde16210339e97b9408'));
      categories.push(new CategoryData('ec21ff12b34a21bece175e48a059ec7f'));

      const client: ClientData = new ClientData(this.clientId);

      const req: UserCreateReq = new UserCreateReq(res[0].username, res[0].password, res[0].email, role, client, communities, categories);
      this.clientService.addUser(req).subscribe(
        response => {
          this.getUsers;
          this.users = response;
          this.loader.close();
          this.snack.open("New User added !", "OK", { duration: 4000 });
        },
          error => {
            this.errDialog.showError(error);
          }
      );

    });
  }

  openEditPopUp(data: any = {}, isNew?) {

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
  }


  openCommunityPopUp(data: any = {}, isNew?) {

    let title = isNew ? "Add new User" : "Update User";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserCommunityPopupComponent,
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
  }


  openCategoryPopUp(data: any = {}, isNew?) {

    let title = isNew ? "Add new User" : "Update User";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserCategoryPopupComponent,
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
  }

}



