import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../../../shared/services/app-loader/app-loader.service";
import { UserCreatePopupComponent } from "../user-table/user-create-popup/user-create-popup.component";
import { UserTablePopupComponent } from "../user-table/user-table-popup/user-table-popup.component";
import { egretAnimations } from "../../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../../shared/services/app-error/app-error.service";
import { Router, ActivatedRoute } from '@angular/router';
import { UserCreateReq, ClientData, RoleData, CommunityData, CategoryData, UserUpdateReq, UserCategoryUpdateReq, UserCommunityUpdateRequest } from 'app/model/ClientModel.model';
import { UserCategoryPopupComponent } from './user-category-popup/user-category-popup.component';
import { UserCommunityPopupComponent } from './user-community-popup/user-community-popup.component';
import { GlobalVariable } from 'app/shared/helpers/global-variable';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { ComunityService } from 'app/views/community/community.service';
import { AppInfoService } from 'app/shared/services/app-info/app-info.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  animations: egretAnimations
})
export class UserTableComponent implements OnInit {

  private globalVariable = new GlobalVariable();
  private users: any[];
  private roles: any[] = [];
  private statusArray = this.globalVariable.common.matChip.userStatus;
  private clientId;

  private clientCategory;

  // user license
  private quota = 0;
  private quotaExpire = true;
  private usage = 0;

  // MatPaginator Inputs
  private keyword = '';
  private pageNumber = 1;
  private length = 0;
  private pageSize = 10;
  private pageSizeOptions: number[] = this.globalVariable.common.pageSize.Option1;

  constructor(

    private router: Router,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private comunityService: ComunityService,
    private appInfoService: AppInfoService

  ) { }

  ngOnInit() {

    const currentClient = JSON.parse(localStorage.getItem('currentClient'));

    if (currentClient) {

      this.clientId = currentClient.id;

      this.getClientUserRole();
      this.getClientCategories();
      this.getPageUser(this.pageNumber, true);

    } else {

      this.router.navigate(["clients/client-table"]);

    }

  }

  getClientUserRole() {
    this.clientService.getClient(this.clientId).subscribe(successResp => {
      successResp.content.roles.forEach((item) => {
        this.roles.push(item);
      });
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getPageUser(pageNumber, checkLicense?) {
    if (checkLicense) {
      this.checkLicense();
    }
    this.pageNumber = pageNumber;
    this.clientService
      .getUsers(this.clientId, this.keyword, this.pageSize, this.pageNumber, true)
      .subscribe(
        successResp => {
          this.users = successResp.content;
          this.length = successResp.pagination.totalRecords;
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
      );
  }

  getClientCategories() {
    this.clientService.getClientCategories(this.clientId).subscribe(successResp => {
      this.clientCategory = successResp.content;
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  openUserCreatePopup() {
    this.checkLicense('CreatePopup');
  }

  openCommunityUpdatePopUp(data: any = {}) {
    this.getClientAndUserCommunities("CommunityPopUp", data);
  }

  getClientAndUserCommunities(popup, user?) {
    this.clientService.getClientCommunities(this.clientId).subscribe(successResp => {
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

  openPopUp(data: any = {}, component) {

    return new Promise((resolve) => {
      let dialogRef: MatDialogRef<any> = this.dialog.open(
        component,
        {
          width: "720px",
          disableClose: true,
          data: data
        }
      );

      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          // If user press cancel
          return null;
        }

        return resolve(res);

      });
    });

  }

  userCreatePopup(clientCommunity) {

    this.openPopUp({ roles: this.roles, category: this.clientCategory, community: clientCommunity }, UserCreatePopupComponent).then((res: any) => {

      if (res !== null) {

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
          response => { this._handleSuccessResponse('USER_CREATE'); },
          error => {
            this._handleErrorResponse(error);
          }
        );

      }

    });

  }

  openUserUpdatePopUp(data: any = {}) {

    this.openPopUp({ payload: data, roles: this.roles }, UserTablePopupComponent).then((res: any) => {

      if (res !== null) {

        let role: RoleData = new RoleData(res.role);
        const req: UserUpdateReq = new UserUpdateReq(res.username, res.email, role, res.status);

        this.loader.open();
        this.clientService.updateUser(data.id, req).subscribe(
          response => {
            this._handleSuccessResponse('USER_UPDATE');
          },
          error => {
            this._handleErrorResponse(error);
          }
        );

      }

    });

  }

  communityPopup(userId, clientCommunities, userCommunities) {

    this.openPopUp({ community: clientCommunities, selectedCommunity: userCommunities }, UserCommunityPopupComponent).then((res: any) => {

      if (res !== null) {

        let community: CommunityData[] = [];
        res.forEach(element => {
          community.push(new CommunityData(element.id));
        });
        const req: UserCommunityUpdateRequest = new UserCommunityUpdateRequest(community);

        this.loader.open();
        this.clientService.updateUserCommunity(userId, req).subscribe(response => {
          this._handleSuccessResponse('COMMUNITY_UPDATE');
        },
          error => {
            this._handleErrorResponse(error);
          }
        );

      }

    });

  }

  openCategoryUpdatePopUp(data: any = {}) {

    this.clientService.getUser(data.id).subscribe(successResp => {

      this.openPopUp({ category: this.clientCategory, selectedCategory: successResp.content.categories }, UserCategoryPopupComponent).then((res: any) => {

        if (res !== null) {

          let categories: CategoryData[] = [];
          res.forEach(element => {
            categories.push(new CategoryData(element.id));
          });

          const req: UserCategoryUpdateReq = new UserCategoryUpdateReq(categories);

          this.loader.open();
          this.clientService.updateUserCategories(data.id, req).subscribe(
            response => {
              this._handleSuccessResponse('CATEGORY_UPDATE');
            },
            error => {
              this._handleErrorResponse(error);
            }
          );

        }

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
          this.loader.open();
          this.clientService.deleteUser(data.id).subscribe(
            response => {
              this._handleSuccessResponse('USER_DALETE');
            },
            error => {
              this.errDialog.showError(error);
            }
          );
        }
      });

  }

  checkLicense(keyword?: string) {

    this.comunityService.licenseExpireState(this.clientId, "users").subscribe(response => {

      this.setLicenseDetails(response);

      if (keyword === "CreatePopup") {

        if (this.quotaExpire) {
          const infoData = {
            title: "License",
            message:
              "Number of user accounts you subscribed has exceeded!</br>" +
              '<small class="text-muted">Do you like to extend the plan?</small>',
            linkData: {
              url: "https://www.google.com/",
              buttonText: "Extend"
            }
          };
          this.appInfoService.showInfo(infoData);

        } else {
          this.getClientAndUserCommunities("UserCreatePopup");
        }

      }

    });

  }

  setLicenseDetails(response) {
    console.log(response);
    const tempRes: any = response;
    this.quotaExpire = tempRes.content.expired;
    this.quota = tempRes.content.quota;
    this.usage = tempRes.content.usage;
  }

  onPageChange(event) {
    if (event) {
      this.pageSize = event.pageSize;
      this.getPageUser(event.pageIndex + 1);
    }
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.getPageUser(1);
    }
  }



  _handleSuccessResponse(name) {

    this.loader.close();

    if (name === 'USER_CREATE') {
      this.getPageUser(this.pageNumber, true);
      this.snack.open("New User added !", "OK", { duration: 4000 });
    } else if (name === 'USER_UPDATE') {
      this.getPageUser(this.pageNumber, true);
      this.snack.open("User Updated !", "OK", { duration: 4000 });
    } else if (name === 'COMMUNITY_UPDATE') {
      this.getPageUser(this.pageNumber);
      this.snack.open("User Community Updated!", "OK", { duration: 4000 });
    } else if (name === 'CATEGORY_UPDATE') {
      this.snack.open("User Category Updated!", "OK", { duration: 4000 });
    } else if (name === 'USER_DELETE') {
      this.getPageUser(this.pageNumber, true);
      this.snack.open("User Deleted!", "OK", { duration: 4000 });
    }

  }

  _handleErrorResponse(error) {
    this.loader.close();
    this.errDialog.showError({ title: "Error", status: error.status, type: "http_error" });
  }


}



