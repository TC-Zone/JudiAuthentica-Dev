import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariable } from 'app/shared/helpers/global-variable';

@Component({
  selector: 'app-merchant-active-popup',
  templateUrl: './merchant-active-popup.component.html',
  animations: egretAnimations,
})
export class MerchantActivePopupComponent implements OnInit {

  private globalVariable = new GlobalVariable();
  private statusArray = this.globalVariable.common.matChip.userStatus;

  private merchant = [];

  public merchantForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MerchantActivePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.merchant = this.data.payload;
    console.log("--merchant", this.merchant);
    this.buildMerchantForm(this.data.payload);
  }

  //there should be add proper coding for this state change function.
  buildMerchantForm(merchant) {
    let status = false;
    if (merchant.user.status === 'ACTIVE') {
      status = true;
    }
    this.merchantForm = this.fb.group({
      status: [status || false, Validators.required]
    });
  }

  submitMerchantForm(): any {
    this.dialogRef.close(this.merchantForm.value);
  }

}
