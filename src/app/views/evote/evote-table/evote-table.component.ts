import { Component, OnInit, OnDestroy } from "@angular/core";
import { EvoteService } from "../evote-service.service";
import { Subscription } from "../../../../../node_modules/rxjs";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import {
  MatDialogRef,
  MatDialog,
  DateAdapter
} from "../../../../../node_modules/@angular/material";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

import * as moment from "moment";
import { AppFileDownloadService } from "../../../shared/services/file-download.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { EvotePopupComponent } from "../../evote/evote-table/evote-popup/evote-popup.component";
import { VoterPopupComponent } from "../voter-popup/voter-popup.component";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { CrudService } from "../../cruds/crud.service";

@Component({
  selector: "app-evote-table",
  templateUrl: "./evote-table.component.html",
  animations: egretAnimations
})
export class EvoteTableComponent implements OnInit, OnDestroy {
  rows: any[];
  columns = [];
  temp = [];

  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;

  public getEvoteSub: Subscription;
  constructor(
    private evoteService: EvoteService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService: AppDataConversionService,
    private dialog: MatDialog,
    private clientService : CrudService
  ) {}

  ngOnInit() {
    this.getAllEvote();
    this.getClientSuggestions();
  }

  ngOnDestroy() {
    if (this.getClientSub) {
      this.getClientSub.unsubscribe();
    }
  }

  // downloadCsv(selectedRow) {
  //   const fileName  =  selectedRow.topic + '_' + selectedRow.code + '_' + selectedRow.batchNumber;
  //   const csvData =  this.conversionService.convertToCsv(selectedRow.productDetails);
  //   this.downloadService.downloadFile({ name: fileName, type : 'csv' , data : csvData });
  // }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    let columns = Object.keys(this.temp[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) return;

    const rows = this.temp.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        let column = columns[i];
        if (
          data[column] &&
          data[column]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.rows = rows;
  }

  getClientSuggestions() {
    console.log('called suggestions')
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
        console.log(this.clients)
      });
  }

  getAllEvote() {
    this.getEvoteSub = this.evoteService.getAllEvotes().subscribe(
      successResp => {
        this.rows = successResp.content;
      },
      error => {
        this.loader.close();
        console.log(error);
        console.log(error.status);
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }
  deleteEvote(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.description}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.evoteService.removeEvotes(row, this.rows).subscribe(
            data => {
              this.getAllEvote();
              this.loader.close();
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

  openEvotePopup(data: any = {}, isNew?) {
    let title = isNew ? "Add new E vote" : "Update E vote";
    let dialogRef: MatDialogRef<any> = this.dialog.open(EvotePopupComponent, {
      width: "720px",
      disableClose: true,
      data: { title: title, payload: data ,isNew: isNew}
    });

    console.log("RES data :");
    console.log(data);

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      console.log("RES obj :");
      console.log(res);


     // res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");

      if (isNew) {
        this.evoteService.addEvote(res, this.rows).subscribe(
          data => {
            this.rows = data;
            this.loader.close();
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
        this.evoteService.updateEvote(data.id, res).subscribe(
          response => {
            console.log(response.content);
            this.rows = this.rows.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });

            this.loader.close();
            return this.rows.slice();
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

  openVoterPopup(data: any = {}) {
    let title = "Populate Voters ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(VoterPopupComponent, {
      width: "400px",
      disableClose: true,
      data: { title: title, payload: data }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      console.log("FORM DATA  : ");
      console.log(res);

      this.evoteService.populateVoters(res).subscribe(
        response => {
          console.log("response of populate voters : ");
          console.log(response);
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
}
