import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ClientUpdatePopupComponent } from "./client-update-popup/client-update-popup.component";
import { ClientCreatePopupComponent } from "./client-create-popup/client-create-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import { ClientCreateReq, UserData, ClientUpdateReq, ClientLicenseData, CountryData } from "app/model/ClientModel.model";
import { authProperties } from './../../../shared/services/auth/auth-properties';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-client-table",
  templateUrl: "./client-table.component.html",
  animations: egretAnimations
})
export class ClientTableComponent implements OnInit, OnDestroy {

  public clients: any[];
  public statusArray = {
    'A': { status: "Active", style: "primary" },
    'I': { status: "Inactive", style: "accent" }
  };
  public authArray: any;

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
    this.authArray = this.setAuthorities();
    console.log('------------------ auth array ----------------------');
    console.log(this.authArray);
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
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
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
          data: { payload: successResp.content}
        }
      );

      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          // If user press cancel
          return;
        }
        console.log(res);

        this.loader.open();
        const country: CountryData = new CountryData('a65715e919d0995f361360cf0b8c2c03', 'Åland Islands', 'AX');
        const req: ClientUpdateReq = new ClientUpdateReq(
          res[0].name, res[0].description, res[1], res[0].contactNo, res[0].addressLine1, res[0].addressLine2, res[0].city, res[0].state, res[0].zipCode, country
        );

        this.clientService.updateClient(data.id, req).subscribe(
          response => {
            this.getClients();
            this.loader.close();
            this.snack.open("Client Updated!", "OK", { duration: 4000 });
            return this.clients.slice();
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
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );







  }


  clientCreatePopUp() {

    let dialogRef: MatDialogRef<any> = this.dialog.open(
      ClientCreatePopupComponent,
      {
        width: "720px",
        disableClose: true
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
      users.push(new UserData(res[2].username, res[2].email));
      let license: ClientLicenseData = new ClientLicenseData(res[3].tagCount, res[3].userCount, res[3].communityCount, res[3].feedbackCount, res[3].eventCount, res[3].promoCount);
      const req: ClientCreateReq = new ClientCreateReq(res[0].name, res[0].description, res[1], users, license);

      this.clientService.addClient(req).subscribe(
        response => {
          this.getClients();
          this.clients = response;
          this.loader.close();
          this.snack.open("New Client added !", "OK", { duration: 4000 });
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




  navigateUserTable(res: any) {
    this.clientService.getClient(res.id).subscribe(successResp => {
      console.log(successResp.content);
      localStorage.setItem('currentClient', JSON.stringify(successResp.content));
      this.router.navigate(["clients/user/user-table"]);
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
        if (element === 'pc-u') {
          authArray.update = true;
        }
        if (element === 'pc-c') {
          authArray.create = true;
        }
        if (element === 'pc-d') {
          authArray.delete = true;
        }
        if (element === 'pc-v') {
          authArray.view = true;
        }
      });
    }
    return authArray;
  }

}

