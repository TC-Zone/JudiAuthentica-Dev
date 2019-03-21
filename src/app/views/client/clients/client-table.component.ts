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
import { ClientCreateReq, UserData, ClientUpdateReq, ClientLicenseData, CountryData, ClientData, LicenseUpdateReq, CategoryData } from "app/model/ClientModel.model";
import { authProperties } from './../../../shared/services/auth/auth-properties';
import * as jwt_decode from "jwt-decode";
import { ClientCategoryPopupComponent } from './client-category-popup/client-category-popup.component';
import { ClientLicenseUpdatePopupComponent } from './client-license-update-popup/client-license-update-popup.component';

@Component({
  selector: "app-client-table",
  templateUrl: "./client-table.component.html",
  animations: egretAnimations
})

export class ClientTableComponent implements OnInit, OnDestroy {

  public countries;
  filteredCountries: Observable<string[]>;
  
  public clients: any[];
  public category: any[];
  public statusArray = {
    'A': { status: "Active", style: "primary" },
    'I': { status: "Inactive", style: "accent" }
  };

  public pageSize = 10;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClients();
    this.getCategory();
    this.getCountry()
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getClients() {
    this.getItemSub = this.clientService.getClients().subscribe(successResp => {
      this.clients = successResp.content;
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  getCategory() {
    this.getItemSub = this.clientService.getCategory().subscribe(successResp => {
      this.category = successResp.content;
      console.log(this.category);

    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

  
  getCountry() {
    this.clientService.getCountry().subscribe(successResp => {
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


  clientUpdatePopUp(data: any = {}) {

    this.clientService.getClient(data.id).subscribe(successResp => {
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
          res[0].name, res[0].description, res[1], res[0].contactNo, res[0].addressLine1, res[0].addressLine2, res[0].city, res[0].state, res[0].zipCode, country
        );

        this.clientService.updateClient(data.id, req).subscribe(
          response => {
            this.getClients();
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
        data: { category: this.category }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);

      if (!res) {
        // If user press cancel
        return;
      }

      this.loader.open();

      let users: UserData[] = [];
      let categories: CategoryData[] = [];
      users.push(new UserData(res[2].username, res[2].email));
      let license: ClientLicenseData = new ClientLicenseData(res[3].tagCount, res[3].userCount, res[3].communityCount, res[3].feedbackCount, res[3].eventCount, res[3].promoCount);

      res[4].forEach(element => {
        let category: CategoryData = new CategoryData(element);
        categories.push(category);
      });

      const req: ClientCreateReq = new ClientCreateReq(res[0].name, res[0].description, res[1], users, categories, license);

      this.clientService.addClient(req).subscribe(
        response => {
          this.getClients();
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

  openCategoryPopUp(data: any = {}) {

    this.clientService.getClientCategories(data.id).subscribe(successResp => {
      console.log(successResp);

      let dialogRef: MatDialogRef<any> = this.dialog.open(
        ClientCategoryPopupComponent,
        {
          width: "720px",
          disableClose: true,
          data: { category: this.category, selectedCategory:  successResp}
        }
      );
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          // If user press cancel
          return;
        }
          console.log(res);

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

  openlicensePopUp(data: any = {}) {

    this.clientService.getClient(data.id).subscribe(successResp => {
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
        const req: LicenseUpdateReq = new LicenseUpdateReq(res.tagCount, res.userCount, res.communityCount, res.feedbackCount, res.eventCount, res.promoCount, clientData);

        this.clientService.updateClientLicense(resClient.license.id, req).subscribe(
          response => {
            this.getClients();
            this.clients = response;
            this.loader.close();
            this.snack.open("License Data Updated !", "OK", { duration: 4000 });
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



  navigateUserTable(res: any) {
    this.clientService.getClient(res.id).subscribe(successResp => {
      console.log(successResp.content);
      localStorage.setItem('currentClient', JSON.stringify(successResp.content));
      this.router.navigate(["clients/user/user-table"]);
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

}

