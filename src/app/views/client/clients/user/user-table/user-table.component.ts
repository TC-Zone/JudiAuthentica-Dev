import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../../../shared/services/app-loader/app-loader.service";
import { UserCreatePopupComponent } from "../user-table/user-create-popup/user-create-popup.component";
import { UserTablePopupComponent } from "../user-table/user-table-popup/user-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../../shared/services/app-error/app-error.service";
import { ActivatedRoute } from "@angular/router";
import {
  UserCreateReq,
  ClientData,
  RoleData,
  CommunityData,
  CategoryData,
  UserUpdateReq,
  UserCategoryUpdateReq
} from "app/model/ClientModel.model";
import { UserCategoryPopupComponent } from "./user-category-popup/user-category-popup.component";
import { UserCommunityPopupComponent } from "./user-community-popup/user-community-popup.component";
import { UserService } from "../../../../user/user.service";
import { AuthenticationService } from "../../../../sessions/authentication.service";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  animations: egretAnimations
})
export class UserTableComponent implements OnInit, OnDestroy {
  public users: any[];
  public roles: any[];
  public statusArray = {
    Active: "primary",
    Inactive: "accent"
  };
  public pageSize = 10;
  public clientId;
  public name;
  public url;

  public clientCategory;
  public clientCommunity;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.clientId = params["clientId"];

      // RAVEEN : 2014/04/11 - Handling situation when client id is not coming from quesry parameter
      if (!this.clientId) {
        const currentUser = this.authService.getLoggedUserDetail();
        this.clientId = currentUser.userData.client.id;
      }

      this.getUsersByClient(this.clientId);
      // RAVEEN - 2014/04/11: THESE THREE SHOULD BE REMOVED - BUDDHI
      this.getUserRoles(this.clientId);
      this.getClientCategories();
      this.getClientCommunities();
    });
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getUsersByClient(clientId) {
    this.getItemSub = this.clientService.getClient(clientId).subscribe(
      successResp => {
        this.users = successResp.content.users;
        // successResp.content.forEach((item, index) => {
        //   if (item.name === "Super Administrator") successResp.content.splice(index, 1);
        // });
        // this.roles = successResp.content;
        console.log(successResp);
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getUserRoles(clientId) {
    this.getItemSub = this.clientService.getRoles().subscribe(
      successResp => {
        successResp.content.forEach((item, index) => {
          if (item.name === "Super Administrator")
            successResp.content.splice(index, 1);
        });
        this.roles = successResp.content;
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getClientCategories() {
    this.getItemSub = this.clientService
      .getClientCategories(this.clientId)
      .subscribe(
        successResp => {
          this.clientCategory = successResp.content;
          console.log(this.clientCategory);
        },
        error => {
          this.errDialog.showError(error);
        }
      );
  }

  getClientCommunities() {
    this.getItemSub = this.clientService
      .getClientCommunities(this.clientId)
      .subscribe(
        successResp => {
          this.clientCommunity = successResp.content;
          console.log(this.clientCommunity);
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
        data: { roles: this.roles, category: this.clientCategory }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);

      if (!res) {
        // If user press cancel
        return;
      }

      this.loader.open();
      let role: RoleData = new RoleData(res[0].role);

      let communities: CommunityData[] = [];
      // communities.push(new CommunityData(res[0].role));

      let categories: CategoryData[] = [];
      res[1].forEach(element => {
        categories.push(new CategoryData(element));
      });

      const client: ClientData = new ClientData(this.clientId);

      const req: UserCreateReq = new UserCreateReq(
        res[0].username,
        res[0].password,
        res[0].email,
        role,
        client,
        communities,
        categories
      );

      this.clientService.addUser(req).subscribe(
        response => {
          this.getUsersByClient(this.clientId);
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

  openEditPopUp(data: any = {}) {
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserTablePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { payload: data, roles: this.roles }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }

      let role: RoleData = new RoleData(res.role);
      const req: UserUpdateReq = new UserUpdateReq(
        res.username,
        res.email,
        role
      );

      this.loader.open();
      this.clientService.updateUser(data.id, req).subscribe(
        response => {
          this.getUsersByClient(this.clientId);
          this.loader.close();
          this.snack.open("User Updated!", "OK", { duration: 4000 });
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
      );
    });
  }

  openCommunityPopUp(data: any = {}) {
    this.getItemSub = this.clientService.getUser(data.id).subscribe(
      successResp => {
        let dialogRef: MatDialogRef<any> = this.dialog.open(
          UserCommunityPopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: {
              community: this.clientCommunity,
              selectedCommunity: successResp.content.communities
            }
          }
        );
        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            // If user press cancel
            return;
          }

          console.log(res);

          // let role: RoleData = new RoleData(successResp.content.role.id);
          // let categories: CategoryData[] = [];
          // res.forEach(element => {
          //   categories.push(new CategoryData(element));
          // });
          // const req: UserCategoryUpdateReq = new UserCategoryUpdateReq(successResp.content.accountName, successResp.content.email, role, categories);

          // this.loader.open();
          // this.clientService.updateUser(data.id, req).subscribe(
          //   response => {
          //     this.getUsers();
          //     this.loader.close();
          //     this.snack.open("User Category Updated!", "OK", { duration: 4000 });
          //   },
          //   error => {
          //     this.loader.close();
          //     this.errDialog.showError({
          //       title: "Error",
          //       status: error.status,
          //       type: "http_error"
          //     });
          //   }
          // );
        });
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  openCategoryPopUp(data: any = {}) {
    this.getItemSub = this.clientService.getUser(data.id).subscribe(
      successResp => {
        console.log(successResp);
        console.log(successResp.content.role.id);

        let dialogRef: MatDialogRef<any> = this.dialog.open(
          UserCategoryPopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: {
              category: this.clientCategory,
              selectedCategory: successResp.content.categories
            }
          }
        );
        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            // If user press cancel
            return;
          }

          console.log(res);

          let categories: CategoryData[] = [];
          res.forEach(element => {
            let category: CategoryData = new CategoryData(element.id);
            categories.push(category);
          });

          this.loader.open();
          this.clientService
            .updateUserCategories(data.id, categories)
            .subscribe(
              response => {
                this.loader.close();
                this.snack.open("User Category Updated!", "OK", {
                  duration: 4000
                });
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
        });
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }
}
