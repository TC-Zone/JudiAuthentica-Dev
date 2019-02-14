import { Component, OnInit, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { RoleTablePopupComponent } from "./role-table-popup/role-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  animations: egretAnimations
})
export class RoleTableComponent implements OnInit, OnDestroy {
  public items: any[];
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
    this.getItems();
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }
  getItems() {
    this.getItemSub = this.clientService.getItems().subscribe(
      successResp => {
        this.items = successResp.content;
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

  navigateUserTable(res: any) {
    let extraParam: NavigationExtras = {
      queryParams: {
        id: res.id,
        code: res.code,
        name: res.name
      }
    };
    this.router.navigate(["clients/user-table"], extraParam);
  }

  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? "Add new client" : "Update client";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      RoleTablePopupComponent,
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
        this.clientService.addItem(res, this.items).subscribe(
          response => {
            this.items = response;
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
        this.clientService.updateItem(data.id, res).subscribe(
          response => {
            this.items = this.items.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });
            this.loader.close();
            this.snack.open("Client Updated!", "OK", { duration: 4000 });
            return this.items.slice();
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
  deleteItem(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.clientService.removeItem(row.id).subscribe(
            data => {
              console.log(row);
              console.log(this.items[0]);
              let i = this.items.indexOf(row);
              this.items.splice(i, 1);
              this.loader.close();
              this.snack.open("Client deleted!", "OK", { duration: 4000 });
              return this.items.slice();
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
}
