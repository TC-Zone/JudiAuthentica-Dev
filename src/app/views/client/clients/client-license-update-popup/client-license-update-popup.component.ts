import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { GlobalVariable } from 'app/shared/helpers/global-variable';


@Component({
  selector: 'app-client-license-update-popup',
  templateUrl: './client-license-update-popup.component.html',
  animations: egretAnimations,
})
export class ClientLicenseUpdatePopupComponent implements OnInit {
  
  public globalVariable: GlobalVariable = new GlobalVariable();
  public license = this.globalVariable.client.license;
  public regex = this.globalVariable.validators.regex;

  public licenseFormGroup: FormGroup;
  public formStatus = false;
  public url;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientLicenseUpdatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload.license)
  }

  buildItemForm(item) {

    console.log(item);
    
    this.licenseFormGroup = this.fb.group({
      tagCount: [item.tagCount || '', Validators.required],
      userCount: [item.userCount || '', Validators.required],
      communityCount: [item.communityCount || '', Validators.required],
      feedbackCount: [item.feedbackCount || '', Validators.required],
      eventCount: [item.eventCount || '', Validators.required],
      promoCount: [item.promoCount || '', Validators.required]
    });

  }

  submit() {
    this.dialogRef.close(this.licenseFormGroup.value);
  }


}
