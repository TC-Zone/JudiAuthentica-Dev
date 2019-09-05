import { Component, OnInit } from '@angular/core';
import { MerchantService } from "./merchant.service";
import { AppLoaderService } from "../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../shared/services/app-error/app-error.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { MerchantActivePopupComponent } from './merchant-active-popup/merchant-active-popup.component';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  animations: egretAnimations
})
export class MerchantComponent implements OnInit {

  private merchants: any[];

  constructor(
    private merchantService: MerchantService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getPageMerchant();
  }

  getPageMerchant() {
    this.merchantService.getMerchants().subscribe(
      successResp => {
        console.log(successResp.content);
        this.merchants = successResp.content;
      },
      error => {
        this.loader.close();
        this.errDialog.showError(error);
      }
    )
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

        // dialogRef.afterClosed().subscribe(res => {
        //   if (!res) {
        //     // If user press cancel
        //     return;
        //   }
        //   console.log(res);

        //   this.loader.open();
        //   const country: CountryData = new CountryData(res[2]);
        //   const req: ClientUpdateReq = new ClientUpdateReq(
        //     res[0].name,
        //     res[0].description,
        //     res[1],
        //     res[0].contactNo,
        //     res[0].addressLine1,
        //     res[0].addressLine2,
        //     res[0].city,
        //     res[0].state,
        //     res[0].zipCode,
        //     country
        //   );

        //   this.clientService.updateClient(data.id, req).subscribe(
        //     response => {
        //       this.getPageClient(this.pageNumber);
        //       this.loader.close();
        //       this.snack.open("Client Updated!", "OK", { duration: 4000 });
        //     },
        //     error => {
        //       this.loader.close();
        //       this.errDialog.showError(error);
        //     }
        //   );
        // });
      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }

}
