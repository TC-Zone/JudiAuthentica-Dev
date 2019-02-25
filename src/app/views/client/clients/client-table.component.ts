import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ClientTablePopupComponent } from "./client-table-popup/client-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import { ClientCreateReq, UserData, ClientUpdateReq } from "app/model/ClientModel.model";
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
    'A': {status: "Active", style: "primary"},
    'I': {status: "Inactive", style: "accent"}
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

  openPopUp(data: any = {}, isNew?) {

    let title = isNew ? "Add new client" : "Update client";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      ClientTablePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }

      this.loader.open();
      if (isNew) {

      let users: UserData[] = [];
      users.push(new UserData(res.username, res.email));
      const req: ClientCreateReq = new ClientCreateReq(res.name, res.description, users);

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
      } else {

        const req: ClientUpdateReq= new ClientUpdateReq(res.name, res.description);

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
      }
    });
  }

  navigateUserTable(res: any) {
    let extraParam: NavigationExtras = {
      queryParams: {
        id: res.id,
        name: res.name
      }
    };
    this.router.navigate(["clients/user-table"], extraParam);
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

