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
  public countries;
  filteredCountries: Observable<string[]>;

  public clientId;
  public clients: any[] = [];
  public category: any[];
  public sections: any[];
  public statusArray = new GlobalVariable().common.matChip.clientStatus;


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
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;
    this.getPageClient(this.pageNumber);
    this.getCategory();
    this.getCountry();
    this.getDisplayAuthority();
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getPageClient(pageNumber) {

    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.clientService
        .getClientsByFilter(this.keyword, this.pageSize, this.pageNumber)
        .subscribe(
          successResp => {
            this.clients = successResp.content;
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
            if (error) {
              console.log('------------------------------- ClentTableComponent : error - ', error);
              console.log('------------------------------- ClentTableComponent : error.status - ', error.status);
              this.errDialog.showError(error);
            }
          }
        );
    }
  }

  changeValue() {
    this.pageNumber = 1;
    this.getPageClient(this.pageNumber);
  }

  updateFilter(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.pageNumber = 1;
      this.getPageClient(this.pageNumber);
    }
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

  clientUpdatePopUp(data: any = {}) {
    this.clientService.getClient(data.id).subscribe(
      successResp => {
        let dialogRef: MatDialogRef<any> = this.dialog.open(
          ClientUpdatePopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: { payload: successResp.content, country: this.countries }
          }
        );

        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            // If user press cancel
            return;
          }
          console.log(res);

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
              this.getPageClient(this.pageNumber);
              this.loader.close();
              this.snack.open("Client Updated!", "OK", { duration: 4000 });
            },
            error => {
              this.loader.close();
              this.errDialog.showError(error);
            }
          );
        });
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  clientCreatePopUp() {
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      ClientCreatePopupComponent,
      {
        width: "900px",
        disableClose: true,
        data: { category: this.category, section: this.sections }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);

      if (!res) {
        // If user press cancel
        return;
      }

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
          this.getPageClient(this.pageNumber);
          this.clients = response;
          this.loader.close();
          this.snack.open("New Client added !", "OK", { duration: 4000 });
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
      );
    });
  }

  categoryUpdatePopUp(data: any = {}) {
    this.clientService.getClientCategories(data.id).subscribe(
      successResp => {
        console.log(successResp);

        this.clientService.getClientCategories(data.id).subscribe(successResp => {
          console.log(successResp);

          let dialogRef: MatDialogRef<any> = this.dialog.open(
            ClientCategoryPopupComponent,
            {
              width: "720px",
              disableClose: true,
              data: { category: this.category, selectedCategory: successResp }
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


            const req: ClientCategoryUpdateReq = new ClientCategoryUpdateReq(categories);

            this.loader.open();
            this.clientService.updateClientCategory(this.clientId, req).subscribe(
              response => {
                this.loader.close();
                this.snack.open("Client Category Updated!", "OK", { duration: 4000 });
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

          // this.loader.open();
          // const country: CountryData = new CountryData('a65715e919d0995f361360cf0b8c2c03', 'Åland Islands', 'AX');
          // const req: ClientUpdateReq = new ClientUpdateReq(
          //   res[0].name, res[0].description, res[1], res[0].contactNo, res[0].addressLine1, res[0].addressLine2, res[0].city, res[0].state, res[0].zipCode, country
          // );

          // this.clientService.updateClient(data.id, req).subscribe(
          //   response => {
          //     this.getClients();
          //     this.loader.close();
          //     this.snack.open("Client Updated!", "OK", { duration: 4000 });
          //   },
          //   error => {
          //     this.loader.close();
          //     this.errDialog.showError(error);
          //   }
          // );
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

        let dialogRef: MatDialogRef<any> = this.dialog.open(
          ClientLicenseUpdatePopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: { payload: resClient }
          }
        );
        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            // If user press cancel
            return;
          }
          console.log(res);

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
                this.getPageClient(this.pageNumber);
                this.clients = response;
                this.loader.close();
                this.snack.open("License Data Updated !", "OK", {
                  duration: 4000
                });
              },
              error => {
                this.loader.close();
                this.errDialog.showError(error);
              }
            );
        });
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  updateClientStatus(data: any = {}) {
    this.clientService.updateClientStatus(data.id).subscribe(
      successResp => {
        console.log(successResp.content);
        this.snack.open("Client Status Successfully Updated !", "OK", {
          duration: 4000
        });
        this.getPageClient(this.pageNumber);
      },
      error => {
        this.errDialog.showError(error);
      }
    );
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

// Raveen : Buddi's code : 2019/04/11
// this.clientService.getClient(res.id).subscribe(
//     successResp => {
//       console.log(successResp.content);
//       localStorage.setItem(
//         "currentClient",
//         JSON.stringify(successResp.content)
//       );
//       this.router.navigate(["clients/user/user-table"]);
//     },
//     error => {
//       this.errDialog.showError(error);
//     }
//   );
