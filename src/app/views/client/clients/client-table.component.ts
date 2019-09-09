import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ClientUpdatePopupComponent } from "./client-update-popup/client-update-popup.component";
import { ClientCreatePopupComponent } from "./client-create-popup/client-create-popup.component";
import { Subscription, Observable } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import {
  ClientCreateReq,
  UserData,
  ClientUpdateReq,
  ClientLicenseData,
  CountryData,
  ClientData,
  LicenseUpdateReq,
  CategoryData,
  ClientCategoryUpdateReq,
  AdminRoleData,
  AuthorityData
} from "app/model/ClientModel.model";
import { authProperties } from "./../../../shared/services/auth/auth-properties";
import * as jwt_decode from "jwt-decode";
import { ClientCategoryPopupComponent } from "./client-category-popup/client-category-popup.component";
import { ClientLicenseUpdatePopupComponent } from "./client-license-update-popup/client-license-update-popup.component";
import { GlobalVariable } from "app/shared/helpers/global-variable";
import { AuthenticationService } from "app/views/sessions/authentication.service";

@Component({
  selector: "app-client-table",
  templateUrl: "./client-table.component.html",
  animations: egretAnimations
})
export class ClientTableComponent implements OnInit, OnDestroy {
  private countries;
  private filteredCountries: Observable<string[]>;

  private globalVariable = new GlobalVariable();
  private clientId;
  private clients: any[];
  private category: any[];
  private sections: any[];
  private statusArray = this.globalVariable.common.matChip.clientStatus;



  // MatPaginator Inputs
  private keyword = '';
  private pageNumber = 1;
  private length = 0;
  private pageSize = 10;
  private pageSizeOptions: number[] = this.globalVariable.common.pageSize.Option1;

  private getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;
    this.getCategory();
    this.getCountry();
    this.getPageClient(this.pageNumber);
    this.getDisplayAuthority();
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getPageClient(pageNumber) {

    this.pageNumber = pageNumber;

    this.clientService.getClientsByFilter(this.keyword, this.pageSize, this.pageNumber).subscribe(
      successResp => {

        this.clients = successResp.content;
        this.length = successResp.pagination.totalRecords;

      },
      error => {
        if (error) {
          console.log('------------------------------- ClentTableComponent : error - ', error);
          console.log('------------------------------- ClentTableComponent : error.status - ', error.status);
          this.errDialog.showError(error);
        }
      }
    );

  }

  getCategory() {
    this.clientService.getCategory().subscribe(
      successResp => {
        this.category = successResp.content;
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getCountry() {
    this.clientService.getCountry().subscribe(
      successResp => {
        this.countries = successResp.content;
        // this.filteredCountries = this.accountSettingsForm.get("country").valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(value))
        // );
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getDisplayAuthority() {
    this.clientService.getDisplayAuthority().subscribe(
      successResp => {
        this.sections = successResp.content;
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  openPopUp(data: any = {}, component, width = "720px") {

    return new Promise((resolve) => {
      let dialogRef: MatDialogRef<any> = this.dialog.open(
        component,
        {
          width: width,
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


  clientCreatePopUp() {

    this.openPopUp({ category: this.category, section: this.sections }, ClientCreatePopupComponent, "900px").then((res: any) => {

      if (res !== null) {

        this.loader.open();

        let authorities: AuthorityData[] = [];
        res[5].forEach(element => {
          authorities.push(new AuthorityData(element));
        });
        let role: AdminRoleData = new AdminRoleData('Admin role', 'Admin description', authorities);

        let users: UserData[] = [];
        users.push(new UserData(res[2].username, res[2].email, role));

        let license: ClientLicenseData = new ClientLicenseData(
          res[3].tagCount,
          res[3].userCount,
          res[3].communityCount,
          res[3].feedbackCount,
          res[3].eventCount,
          res[3].promoCount
        );

        let categories: CategoryData[] = [];
        res[4].forEach(element => {
          categories.push(new CategoryData(element.id));
        });

        const req: ClientCreateReq = new ClientCreateReq(
          res[0].name,
          res[0].description,
          res[1],
          users,
          categories,
          license
        );

        this.clientService.addClient(req).subscribe(
          response => {
            this.clients = response;
            this._handleSuccessResponse('CLIENT_CREATE');
          },
          error => {
            this._handleErrorResponse(error);
          }
        );

      }

    });

  }

  clientUpdatePopUp(data: any = {}) {

    this.clientService.getClient(data.id).subscribe(
      successResp => {

        this.openPopUp({ payload: successResp.content, country: this.countries }, ClientUpdatePopupComponent).then((res: any) => {

          if (res !== null) {

            this.loader.open();
            const country: CountryData = new CountryData(res[2]);
            const req: ClientUpdateReq = new ClientUpdateReq(
              res[0].name,
              res[0].description,
              res[1],
              res[0].contactNo,
              res[0].addressLine1,
              res[0].addressLine2,
              res[0].city,
              res[0].state,
              res[0].zipCode,
              country
            );

            this.clientService.updateClient(data.id, req).subscribe(
              response => {
                this._handleSuccessResponse('CLIENT_UPDATE');
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

  categoryUpdatePopUp(data: any = {}) {

    this.clientService.getClientCategories(data.id).subscribe(
      successResp => {

        this.openPopUp({ category: this.category, selectedCategory: successResp }, ClientCategoryPopupComponent).then((res: any) => {

          if (res !== null) {

            let categories: CategoryData[] = [];
            res.forEach(element => { categories.push(new CategoryData(element.id)); });
            const req: ClientCategoryUpdateReq = new ClientCategoryUpdateReq(categories);
            this.loader.open();
            this.clientService.updateClientCategory(data.id, req).subscribe(

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


  licenseUpdatePopUp(data: any = {}) {
    this.clientService.getClient(data.id).subscribe(
      successResp => {
        let resClient = successResp.content;

        this.openPopUp({ payload: resClient }, ClientLicenseUpdatePopupComponent).then((res: any) => {

          if (res !== null) {

            this.loader.open();
            let clientData: ClientData = new ClientData(resClient.id);
            const req: LicenseUpdateReq = new LicenseUpdateReq(
              res.tagCount,
              res.userCount,
              res.communityCount,
              res.feedbackCount,
              res.eventCount,
              res.promoCount,
              clientData
            );
            this.clientService
              .updateClientLicense(resClient.license.id, req)
              .subscribe(
                response => {
                  this.clients = response;
                  this._handleSuccessResponse('LICENSE_UPDATE');
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

  updateClientStatus(data: any = {}) {
    this.loader.open();
    this.clientService.updateClientStatus(data.id).subscribe(
      successResp => {
        this._handleSuccessResponse('CLIENT_STATUS_UPDATE');
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }



  _handleSuccessResponse(name) {

    this.loader.close();
    this.getPageClient(this.pageNumber);

    if (name === 'CLIENT_CREATE') {
      this.snack.open("New Client added !", "OK", { duration: 4000 });
    } else if (name === 'CLIENT_UPDATE') {
      this.snack.open("Client Updated!", "OK", { duration: 4000 });
    } else if (name === 'CATEGORY_UPDATE') {
      this.snack.open("Client Category Updated!", "OK", { duration: 4000 });
    } else if (name === 'LICENSE_UPDATE') {
      this.snack.open("License Updated !", "OK", { duration: 4000 });
    } else if (name === 'CLIENT_STATUS_UPDATE') {
      this.snack.open("Client Status Successfully Updated !", "OK", { duration: 4000 });
    }

  }

  _handleErrorResponse(error) {
    this.loader.close();
    this.errDialog.showError({ title: "Error", status: error.status, type: "http_error" });
  }

  onPageChange(event) {
    if (event) {
      this.pageSize = event.pageSize;
      this.getPageClient(event.pageIndex + 1);
    }
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.getPageClient(1);
    }
  }

  navigateUserTable(res: any) {

    // let extraParam: NavigationExtras = {
    //   queryParams: {
    //     clientId: res.id,
    //     clientName: res.name
    //   }
    // };
    // this.router.navigate(["clients/user/user-table"], extraParam);
    // this.router.navigate(["clients/user/user-table;clientId=" + res.id]);

    this.clientService.getClient(res.id).subscribe(
      successResp => {
        console.log(successResp.content);
        localStorage.setItem("currentClient", JSON.stringify(successResp.content));
        this.router.navigate(["clients/user/user-table"]);
      },
      error => {
        this.errDialog.showError(error);
      }
    );

  }
}

