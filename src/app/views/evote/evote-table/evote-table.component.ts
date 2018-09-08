import { Component, OnInit } from '@angular/core';
import {EvoteService } from '../evote-service.service';
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
import { AppDataConversionService } from '../../../shared/services/data-conversion.service';
import { EvotePopupComponent } from '../../evote/evote-table/evote-popup/evote-popup.component';

@Component({
  selector: 'app-evote-table',
  templateUrl: './evote-table.component.html',  
  animations: egretAnimations
})
export class EvoteTableComponent implements OnInit {
  rows: any[];
  columns = [];
  temp = [];
  
  public getEvoteSub: Subscription;
  constructor(
    private evoteService: EvoteService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService : AppDataConversionService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllEvote();
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
        }
      });
  }
  openProductPopup(data: any = {}, isNew?) {
    let title = isNew ? "Add new Product" : "Update Product";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      EvotePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      console.log("RES obj :");
      console.log(res);

      res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");

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
}
