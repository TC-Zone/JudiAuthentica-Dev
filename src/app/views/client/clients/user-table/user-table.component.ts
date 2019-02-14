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

  public clientId;
  public users: any[];
  public roles: any[];
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
      this.clientId = params["id"];
      let name = params["name"];
      this.name = name;
      // console.log(id + ' - ' + name);

    });

    this.getUsers();
    this.getUserRoles();
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }

  getUsers() {
    this.getItemSub = this.clientService.getUsers(this.clientId).subscribe(successResp => {
      console.log(successResp);
      this.users = successResp.content.users;
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

  getUserRoles() {
    this.getItemSub = this.clientService.getRoles().subscribe(successResp => {
      this.roles = successResp.content;
      // const index = this.roles.findIndex(x => x.name === auth_key);
      // dataArray.removeAt(index);
      // this.roles = successResp.content.splice(2);
      // delete successResp.content[]
      
      console.log(this.roles);
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

    let title = isNew ? "Add new User" : "Update User";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      UserTablePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, roles: this.roles }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }


      console.log(res);
      

      let roles: UserRole[] = [];
      roles.push(new UserRole(res.role));
      const client: ClientData = new ClientData(this.clientId);
      const req: UserCreateReq = new UserCreateReq(res.username, res.password, res.email, roles, client);

      this.loader.open();
      if (isNew) {

        this.clientService.addUser(req).subscribe(
          response => {
            this.getUsers();
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
        this.clientService.updateUser(data.id, req).subscribe(
          response => {
            this.getUsers();
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



export class UserCreateReq {
  constructor(
    public userName: string,
    public password: string,
    public email: string,
    public roles: any[],
    public client: ClientData,
  ) { }
}

export class ClientData {
  constructor(
    public id: string
  ) { }
}

export class UserRole {
  constructor(
    public id: string
  ) { }
}
