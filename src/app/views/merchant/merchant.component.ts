import { Component, OnInit } from '@angular/core';
import { MerchantService } from "./merchant.service";
import { AppLoaderService } from "../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../shared/services/app-error/app-error.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { MerchantActivePopupComponent } from './merchant-active-popup/merchant-active-popup.component';
import { GlobalVariable } from 'app/shared/helpers/global-variable';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  animations: egretAnimations
})
export class MerchantComponent implements OnInit {

  private globalVariable = new GlobalVariable();
  private statusArray = this.globalVariable.common.matChip.userStatus;
  private merchants: any[];

  // MatPaginator Inputs
  private status = '';
  private keyword = '';
  private pageNumber = 1;
  private length = 0;
  private pageSize = 10;
  private pageSizeOptions: number[] = this.globalVariable.common.pageSize.Option1;

  constructor(
    private merchantService: MerchantService,
    private snack: MatSnackBar,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.getPageMerchant(this.pageNumber);

  }

  getPageMerchant(pageNumber) {
    this.pageNumber = pageNumber;
    this.merchantService
      .getMerchants(this.keyword, this.status, this.pageSize, this.pageNumber)
      .subscribe(
        successResp => {
          this.merchants = successResp.content;
          this.length = successResp.pagination.totalRecords;
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
      );
  }


  onPageChange(event) {
    if (event) {
      this.pageSize = event.pageSize;
      this.getPageMerchant(event.pageIndex + 1);
    }
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.getPageMerchant(1);
    }
  }

  showMerchantDetails(data: any = {}) {
    this.merchantService.getMerchant(data.id).subscribe(
      successResp => {
        console.log("--mer suc", successResp.content);

        let dialogRef: MatDialogRef<any> = this.dialog.open(
          MerchantActivePopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: { payload: successResp.content }
          }
        );
        //there is no related service to update states.for now showing only snack message.
        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            return;
          } else {
            this.loader.close();
            this.snack.open("Status Updated", "close", {
              duration: 2000
            });

          }
        })
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

}
