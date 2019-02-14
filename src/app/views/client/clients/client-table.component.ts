import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ClientTablePopupComponent } from "./client-table-popup/client-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-client-table",
  templateUrl: "./client-table.component.html",
  animations: egretAnimations
})
export class ClientTableComponent implements OnInit, OnDestroy {
  public clients: any[];
  public statusArray = {
    'A': {status: "Active", style: "primary"},
    'I': {status: "Inactive", style: "accent"},
    'Deactive': "accent"
  };

  public pageSize = 10;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClients();
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getClients() {
    this.getItemSub = this.clientService.getClients().subscribe(successResp => {
      console.log(successResp);
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

  
}


export class ClientCreateReq {
  constructor(
    public name: string,
    public description: string,
    public users: any[]
  ) { }
}

export class ClientUpdateReq {
  constructor(
    public name: string,
    public description: string
  ) { }
}

export class UserData {
  constructor(
    public userName: string,
    public email: string
  ) { }
}

