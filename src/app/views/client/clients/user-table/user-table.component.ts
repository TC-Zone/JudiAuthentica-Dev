import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClientService } from "../../client.service";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../../shared/services/app-loader/app-loader.service";
import { UserTablePopupComponent } from "../user-table/user-table-popup/user-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { AppErrorService } from "../../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  animations: egretAnimations
})
export class UserTableComponent implements OnInit {

  public users: any[];
  public roles = ['Super Admin','Admin','Manager','Human Resources','Employee'];
  public statusArray = {
    'Active': "primary",
    'Deactive': "accent"
  };
  public pageSize = 10;
  public name;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private clientService: ClientService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(params => {
      let id = params["id"];
      let code = params["code"];
      let name = params["name"];
      this.name = name;
      console.log(id + ' - ' + code + ' - ' + name);

    });

    this.getFakeUser();
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getFakeUser() {
    this.users = this.clientService.getAllFakeUsers();
  }



  // getItems() {
  //   this.getItemSub = this.clientService.getItems().subscribe(
  //     successResp => {
  //       this.users = successResp.content;
  //     },
  //     error => {
  //       this.errDialog.showError({
  //         title: "Error",
  //         status: error.status,
  //         type: "http_error"
  //       });
  //     }
  //   );
  // }

  navigateUserTable(res: any) {
    // let extraParam: NavigationExtras = {
    //   queryParams: {
    //     id: res.id,
    //     name: res.topic,
    //     type: res.type,
    //     productId: res.productId,
    //     voteId: res.voteId,
    //     startDate: res.startDate,
    //     endDate: res.endDate,
    //     questions: JSON.stringify(res.questions)
    //   }
    // };
    // this.router.navigate(["surveys/builder_v1"], extraParam);
    this.router.navigate(["clients/user-table"]);
  }

  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? "Add new User" : "Update User";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserTablePopupComponent,
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
        this.clientService.addItem(res, this.users).subscribe(
          response => {
            this.users = response;
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
            this.users = this.users.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });
            this.loader.close();
            this.snack.open("Client Updated!", "OK", { duration: 4000 });
            return this.users.slice();
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
    // this.confirmService
    //   .confirm({ message: `Delete ${row.name}?` })
    //   .subscribe(res => {
    //     if (res) {
    //       this.loader.open();
    //       this.clientService.removeItem(row.id).subscribe(
    //         data => {
    //           console.log(row);
    //           console.log(this.users[0]);
    //           let i = this.users.indexOf(row);
    //           this.users.splice(i, 1);
    //           this.loader.close();
    //           this.snack.open("Client deleted!", "OK", { duration: 4000 });
    //           return this.users.slice();
    //         },
    //         error => {
    //           this.loader.close();
    //           this.errDialog.showError({
    //             title: "Error",
    //             status: error.status,
    //             type: "http_error"
    //           });
    //         }
    //       );
    //     }
    //   });
  }
}
