import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductCrudService } from "../product-crud.service";
import { MatDialogRef, MatDialog, DateAdapter, MatSnackBar } from "@angular/material";
import { ProductCrudPopupComponent } from "./product-crud-popup/product-crud-popup.component";

import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

import * as moment from "moment";
import { AppFileDownloadService } from "../../../shared/services/file-download.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AuthenticationService } from "../../sessions/authentication.service";
import { ComunityService } from "../../community/community.service";
import { AppInfoService } from "../../../shared/services/app-info/app-info.service";
import { GlobalVariable } from "app/shared/helpers/global-variable";

@Component({
  selector: "app-product-filter-table",
  templateUrl: "./product-filter-table.component.html",
  animations: egretAnimations
})
export class ProductFilterTableComponent implements OnInit, OnDestroy {

  private globalVariable = new GlobalVariable();
  private products: any[] = [];

  // MatPaginator Inputs
  private keyword = '';
  private pageNumber = 1;
  private length = 0;
  private pageSize = 10;
  private pageSizeOptions: number[] = this.globalVariable.common.pageSize.Option1;

  private getProductsSub: Subscription;

  private categories: any[];
  private clientId: string;
  private predefined: string;

  constructor(
    private prodService: ProductCrudService,
    private dialog: MatDialog,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService: AppDataConversionService,
    private authService: AuthenticationService,
    private communityService: ComunityService,
    private appInfoService: AppInfoService,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() {
    const userObj = this.authService.getLoggedUserDetail();
    this.categories = userObj.userData.categories;
    this.clientId = userObj.userData.client.id;
    this.predefined = Boolean(JSON.parse(userObj.userData.role.predefined)) ? "1" : "0";
    
    this.getPageProduct(this.pageNumber);
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
  }

  getPageProduct(pageNumber) {
    console.log('------------------------------------ test 1');
    

    this.pageNumber = pageNumber;

    this.prodService
      .getPageProducts(this.keyword, this.pageNumber, this.pageSize, this.clientId, this.getCategoryIDs(this.categories), this.predefined)
      .subscribe(
        successResp => {
          console.log('------------------------------------ test 2');
          this.products = successResp.content;
          this.length = successResp.pagination.totalRecords;
          console.log(this.products);
          
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
      );
  }

  handleNewProductSave() {
    this.communityService.licenseExpireState(this.clientId, "tags").subscribe(
      response => {
        const tempRes: any = response;
        const quotaExpire: boolean = tempRes.content.expired;

        if (quotaExpire) {
          const infoData = {
            title: "License",
            message:
              "You subscribed number of tags count has expired!</br>" +
              '<small class="text-muted">Do you like to extend the plan?</small>',
            linkData: {
              url: "https://www.google.com/gmail/",
              buttonText: "Extend"
            }
          };
          this.appInfoService.showInfo(infoData);
        } else {
          this.openProductPopup({}, true);
        }
      });
  }

  deleteProduct(row) {
    this.confirmService
      .confirm({ message: `Are you sure that you want to delete this product?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.prodService.removeProduct(row, this.products).subscribe(
            data => {
              this.getPageProduct(this.pageNumber);
              this.loader.close();
            },
            error => {
              this.loader.close();
              this.errDialog.showError(error);
            }
          );
        }
      });
  }

  openProductPopup(data: any = {}, isNew?) {
    let title = isNew ? "Add new Product" : "Update Product";

    let dialogRef: MatDialogRef<any> = this.dialog.open(
      ProductCrudPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, isNew: isNew }
      }
    );

    console.log("------------------------------- ProductFilterTableComponent : RES data - ", data);

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      console.log("------------------------------- ProductFilterTableComponent : RES obj - ", res);

      if (isNew) {
        this.prodService.addProduct(res, this.products).subscribe(
          response => {
            this.getPageProduct(this.pageNumber);
            this.snack.open("New Product added !", "OK", { duration: 4000 });
            this.loader.close();
          },
          error => {
            this.loader.close();
            this.errDialog.showError(error);
          }
        );
      } else {
        this.prodService.updateProduct(data.id, res).subscribe(
          response => {
            this.getPageProduct(this.pageNumber);
            this.snack.open("Product updated !", "OK", { duration: 4000 });
            this.loader.close();
          },
          error => {
            this.loader.close();
            this.errDialog.showError(error);
          }
        );
      }
    });
  }


  downloadCsv(selectedRow) {
    console.log("------------------------------- ProductFilterTableComponent : SELECTED RAW : " + selectedRow.id);
    this.prodService.getProductDetails(selectedRow.id).subscribe(successResp => {
      let auths = successResp.content;
      const fileName = selectedRow.name.toUpperCase() + "_BATCH_" + selectedRow.batchNumber;
      const csvData = this.conversionService.convertToCsv(auths);
      console.log("fileName : " + fileName);
      this.downloadService.downloadFile({
        name: fileName,
        type: "csv",
        data: csvData
      });
    });
  }

  getCategoryIDs(categories) {
    let categoryIDs = [];
    categories.forEach(cat => {
      categoryIDs.push(cat.id);
    });
    return categoryIDs
  }

  onPageChange(event) {
    if (event) {
      this.pageSize = event.pageSize;
      this.getPageProduct(event.pageIndex + 1);
    }
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.getPageProduct(1);
    }
  }

}
