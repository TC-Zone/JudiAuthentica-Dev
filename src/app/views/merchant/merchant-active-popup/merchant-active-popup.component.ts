import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { egretAnimations } from "../../../shared/animations/egret-animations";

@Component({
  selector: 'app-merchant-active-popup',
  templateUrl: './merchant-active-popup.component.html',
  animations: egretAnimations,
})
export class MerchantActivePopupComponent implements OnInit {

  private merchant = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MerchantActivePopupComponent>,
  ) { }

  ngOnInit() {
    this.merchant = this.data.payload;
    console.log("--merchant", this.merchant);

  }

}
