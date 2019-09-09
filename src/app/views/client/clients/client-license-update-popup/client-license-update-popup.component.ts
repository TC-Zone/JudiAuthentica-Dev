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
  
  private globalVariable: GlobalVariable = new GlobalVariable();
  private license = this.globalVariable.client.license;
  private regex = this.globalVariable.validators.regex;

  private licenseFormGroup: FormGroup;
  private formStatus = false;
  private url;
  private oldestValue = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ClientLicenseUpdatePopupComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
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

  
  setOldValue() {
    this.oldestValue = this.licenseFormGroup.controls['communityCount'].value;
  }

  validateLicense() {
    let form = this.licenseFormGroup;
    if (form.controls['communityCount'].value !== '') {
      let value = form.controls['communityCount'].value;
      let diff;

      if (value > this.oldestValue) {
        diff = value - this.oldestValue;
        form.controls['feedbackCount'].setValue(+(form.get('feedbackCount').value) + diff);
        form.controls['eventCount'].setValue(+(form.get('eventCount').value) + diff);
        form.controls['promoCount'].setValue(+(form.get('promoCount').value) + diff);
      }
    } else {
      form.controls['communityCount'].setValue(1)
      form.controls['feedbackCount'].setValue(1)
      form.controls['eventCount'].setValue(1)
      form.controls['promoCount'].setValue(1)
    }
  }

  setDefaultValue(control) {
    let form = this.licenseFormGroup;
    if (form.controls[control].value === '') {
      form.controls[control].setValue(1);
    }
  }

  submit() {
    this.dialogRef.close(this.licenseFormGroup.value);
  }


}
