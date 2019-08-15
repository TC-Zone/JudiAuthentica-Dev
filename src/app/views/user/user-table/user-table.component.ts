import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { ClientService } from "../../client/client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { UserCreatePopupComponent } from "../user-table/user-create-popup/user-create-popup.component";
import { UserTablePopupComponent } from "../user-table/user-table-popup/user-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { ActivatedRoute } from '@angular/router';
import { UserCreateReq, ClientData, RoleData, CommunityData, CategoryData, UserUpdateReq, UserCategoryUpdateReq, UserCommunityUpdateRequest } from 'app/model/ClientModel.model';
import { UserCategoryPopupComponent } from './user-category-popup/user-category-popup.component';
import { UserCommunityPopupComponent } from './user-community-popup/user-community-popup.component';
import { AuthenticationService } from 'app/views/sessions/authentication.service';
import { GlobalVariable } from 'app/shared/helpers/global-variable';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  animations: egretAnimations
})
export class UserTableComponent implements OnInit {

  public users: any[];
  public roles: any[] = [];
  public statusArray = new GlobalVariable().common.matChip.userStatus;
  public clientId;
  public name;
  public url;

  public clientCategory;

  // pagination
  public keyword = '';
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private confirmService: AppConfirmService,
  ) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.clientId = currentUser.userData.client.id;

      this.getClient();
      this.getPageUser(this.pageNumber);
      this.getClientCategories();
    }
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }


  getClient() {
    this.getItemSub = this.clientService.getClient(this.clientId).subscribe(successResp => {
      // this.users = successResp.content.users;
      // this.users.forEach((item, index) => {
      //   if (item.role.name === "Super Administrator") this.users.splice(index, 1);
      // });
      successResp.content.roles.forEach((item) => {
        this.roles.push(item);
      });
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getPageUser(pageNumber) {

    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.clientService
        .getUsers(this.clientId, this.keyword, this.pageSize, this.pageNumber, false)
        .subscribe(
          successResp => {
            this.users = successResp.content;
            let totalPages = successResp.pagination.totalPages;
            let totalPagesArray = [];

            if (totalPages > 1) {
              for (let i = 1; i <= totalPages; i++) {
                totalPagesArray.push(i);
              }
            }
            this.totalPages = totalPagesArray;
            this.totalRecords = successResp.pagination.totalRecords;
          },
          error => {
            this.loader.close();
            console.log('------------------------------- UserTableComponent : error - ', error);
            console.log('------------------------------- UserTableComponent : error.status - ', error.status);
            this.errDialog.showError(error);
          }
        );
    }
  }


  changeValue() {
    this.pageNumber = 1;
    this.getPageUser(this.pageNumber);
  }

  updateFilter(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.pageNumber = 1;
      this.getPageUser(this.pageNumber);
    }
  }

  getClientCategories() {
    this.getItemSub = this.clientService.getClientCategories(this.clientId).subscribe(successResp => {
      this.clientCategory = successResp.content;
      console.log(this.clientCategory);
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getClientAndUserCommunities(popup, user?) {
    this.getItemSub = this.clientService.getClientCommunities(this.clientId).subscribe(successResp => {
      let clientCommunity = successResp.content;

      if (popup === 'UserCreatePopup') {
        this.userCreatePopup(clientCommunity);
      } else if (popup === 'CommunityPopUp') {

        this.clientService.getUser(user.id).subscribe(successResp => {
          let userCommunity = successResp.content.communities;
          this.communityPopup(user.id, clientCommunity, userCommunity);
        },
          error => {
            this.errDialog.showError(error);
          }
        );

      }

    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }


  openUserCreatePopup() {
    this.getClientAndUserCommunities("UserCreatePopup");
  }

  userCreatePopup(clientCommunity) {
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserCreatePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { roles: this.roles, category: this.clientCategory, community: clientCommunity }
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
      res[2].forEach(element => {
        communities.push(new CommunityData(element.id));
      });

      let categories: CategoryData[] = [];
      res[1].forEach(element => {
        categories.push(new CategoryData(element.id));
      });

      const client: ClientData = new ClientData(this.clientId);

      const req: UserCreateReq = new UserCreateReq(res[0].username, res[0].password, res[0].email, role, client, communities, categories);

      this.clientService.addUser(req).subscribe(
        response => {
          this.getPageUser(this.pageNumber);
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
      const req: UserUpdateReq = new UserUpdateReq(res.username, res.email, role, res.status);

      this.loader.open();
      this.clientService.updateUser(data.id, req).subscribe(
        response => {
          this.getPageUser(this.pageNumber);
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
    this.getClientAndUserCommunities("CommunityPopUp", data);
  }


  communityPopup(userId, clientCommunities, userCommunities) {
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserCommunityPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { community: clientCommunities, selectedCommunity: userCommunities }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }
      console.log(res);

      let community: CommunityData[] = [];
      res.forEach(element => {
        community.push(new CommunityData(element.id));
      });
      const req: UserCommunityUpdateRequest = new UserCommunityUpdateRequest(community);

      this.loader.open();
      this.clientService.updateUserCommunity(userId, req).subscribe(
        response => {
          this.getPageUser(this.pageNumber);
          this.loader.close();
          this.snack.open("User Community Updated!", "OK", { duration: 4000 });
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
  }


  openCategoryPopUp(data: any = {}) {

    this.getItemSub = this.clientService.getUser(data.id).subscribe(successResp => {
      console.log(successResp);
      console.log(successResp.content.role.id);

      let dialogRef: MatDialogRef<any> = this.dialog.open(
        UserCategoryPopupComponent,
        {
          width: "720px",
          disableClose: true,
          data: { category: this.clientCategory, selectedCategory: successResp.content.categories }
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
          categories.push(new CategoryData(element.id));
        });

        const req: UserCategoryUpdateReq = new UserCategoryUpdateReq(categories);

        this.loader.open();
        this.clientService.updateUserCategories(data.id, req).subscribe(
          response => {
            this.loader.close();
            this.snack.open("User Category Updated!", "OK", { duration: 4000 });
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

  removeUser(data: any = {}) {

    this.confirmService
      .confirm({ message: `Do You Want to Delete ${data.userName}?` })
      .subscribe(res => {
        if (res) {
          this.clientService.deleteUser(data.id).subscribe(
            successResp => {
              console.log(successResp.content);
              this.getPageUser(this.pageNumber);
              this.snack.open("User Deleted!", "OK", {
                duration: 4000
              });
            },
            error => {
              this.errDialog.showError(error);
            }
          );
        }
      });

  }

}
