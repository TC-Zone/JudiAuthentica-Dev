import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductCrudService } from "../product-crud.service";
import { MatDialogRef, MatDialog, DateAdapter } from "@angular/material";
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

@Component({
  selector: "app-product-filter-table",
  templateUrl: "./product-filter-table.component.html",
  animations: egretAnimations
})
export class ProductFilterTableComponent implements OnInit, OnDestroy {
  rows: any[];
  columns = [];
  temp = [];

  // pagination
  public keyword = "";
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;

  public getProductsSub: Subscription;
  updatable: boolean;

  public categories: any[];
  public clientId: string;
  public predefined: string;

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
    private appInfoService: AppInfoService
  ) { }

  ngOnInit() {
    const userObj = this.authService.getLoggedUserDetail();
    this.categories = userObj.userData.categories;
    this.clientId = userObj.userData.client.id;
    const predefinedStatus: boolean = userObj.userData.role.predefined;
    this.predefined = predefinedStatus ? "1" : "0";
    this.getPageProduct(this.pageNumber);
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
  }

  downloadCsv(selectedRow) {
    console.log("------------------------------- ProductFilterTableComponent : SELECTED RAW : " + selectedRow.id);
    this.prodService
      .getProductDetails(selectedRow.id)
      .subscribe(successResp => {
        let auths = successResp.content;
        const fileName =
          selectedRow.name.toUpperCase() +
          "_BATCH_" +
          selectedRow.batchNumber;
        const csvData = this.conversionService.convertToCsv(auths);
        console.log("fileName : " + fileName);
        this.downloadService.downloadFile({
          name: fileName,
          type: "csv",
          data: csvData
        });
      });
  }


  changeValue() {
    this.pageNumber = 1;
    this.getPageProduct(this.pageNumber);
  }

  updateFilter(event) {
    if (event.keyCode === 13) {
      this.keyword = event.target.value.toLowerCase();
      this.pageNumber = 1;
      this.getPageProduct(this.pageNumber);
    }
  }

  getCategoryIDs(categories) {
    let categoryIDs = [];
    categories.forEach(cat => {
      categoryIDs.push(cat.id);
    });
    return categoryIDs
  }

  getPageProduct(pageNumber) {

    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.getProductsSub = this.prodService
        .getPageProducts(this.keyword, this.pageNumber, this.pageSize, this.clientId, this.getCategoryIDs(this.categories), this.predefined)
        .subscribe(
          successResp => {
            this.rows = this.temp = successResp.content;
            let totalPages = successResp.pagination.totalPages;
            let totalPagesArray = [];

            if (totalPages > 1) {
              for (let i = 1; i <= totalPages; i++) {
                totalPagesArray.push(i);
              }
            }
            this.totalPages = totalPagesArray;
            this.totalRecords = successResp.pagination.totalRecords;
          },
          error => {
            this.loader.close();
            console.log('------------------------------- ProductFilterTableComponent : error - ', error);
            console.log('------------------------------- ProductFilterTableComponent : error.status - ', error.status);
            this.errDialog.showError(error);
          }
        );
    }
  }


  deleteProduct(row) {
    this.confirmService
      .confirm({ message: `Are you sure that you want to delete this product?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.prodService.removeProduct(row, this.rows).subscribe(
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

  handleNewProductSave() {
    this.communityService
      .licenseExpireState(this.clientId, "tags")
      .subscribe(response => {
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

      //res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");

      if (isNew) {
        this.prodService.addProduct(res, this.rows).subscribe(
          data => {
            let id = data;
            this.prodService.getProductById(id).subscribe(data => {
              this.rows = this.rows.concat(data.content);
              console.log(this.rows);
            });

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
            console.log(response.content);
            this.prodService
              .getProductById(response.content.id)
              .subscribe(data => {
                this.rows = this.rows.map(i => {
                  if (i.id === data.content.id) {
                    console.log("------------------------------- ProductFilterTableComponent : recent obj - " + JSON.stringify(data.content));
                    return Object.assign({}, i, data.content);
                  }
                  return i;
                });
              });

            this.loader.close();
            return this.rows.slice();
          },
          error => {
            this.loader.close();
            this.errDialog.showError(error);
          }
        );
      }
    });
  }

  // getProductById(productId) {
  //   this.prodService.getProductById(productId).subscribe(
  //     response => {
  //       this.recentProduct = response.content;
  //       console.log(
  //         "recent product obj : " + JSON.stringify(this.recentProduct)
  //       );
  //     },
  //     error => {
  //       this.loader.close();
  //       this.errDialog.showError({
  //         title: "Error",
  //         status: error.status,
  //         type: "http_error"
  //       });
  //     }
  //   );
  // }
}

export class CSVDTO {
  productDetails: any;
  authenticationCode: any;

  constructor(public proDetails: any, public authCodes: any) { }
}
