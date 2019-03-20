import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { ClientData, LicenseUpdateReq } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-profile-license',
  templateUrl: './profile-license.component.html'
})
export class ProfileLicenseComponent implements OnInit {

  // public globalVariable: GlobalVariable = new GlobalVariable();
  // public license = this.globalVariable.client.license;
  // public regex = this.globalVariable.validators.regex;

  public licenseFormGroup: FormGroup;
  public formStatus = false;
  public url;
  public oldestValue = 0;
  public clientId;
  public license;
  public getItemSub: Subscription;

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private profileService: ProfileService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private snack: MatSnackBar
  ) { }


  ngOnInit() {
    let currentuser = JSON.parse(localStorage.getItem('currentUser'));
    this.clientId = currentuser.userData.id;
    this.buildItemForm()
    // this.buildItemForm(this.data.payload.license)
  }

  buildItemForm() {

    this.licenseFormGroup = this.fb.group({
      tagCount: ['', Validators.required],
      userCount: ['', Validators.required],
      communityCount: ['', Validators.required],
      feedbackCount: ['', Validators.required],
      eventCount: ['', Validators.required],
      promoCount: ['', Validators.required]
    });

    this.getClient();
  }


  getClient() {
    this.getItemSub = this.profileService.getClient(this.clientId).subscribe(successResp => {
      this.license = successResp.content.license;

      let form = this.licenseFormGroup;
      form.controls['tagCount'].setValue(this.license.tagCount);
      form.controls['userCount'].setValue(this.license.userCount);
      form.controls['communityCount'].setValue(this.license.communityCount);
      form.controls['feedbackCount'].setValue(this.license.feedbackCount);
      form.controls['eventCount'].setValue(this.license.eventCount);
      form.controls['promoCount'].setValue(this.license.promoCount);

    },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
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
    let form = this.licenseFormGroup;
    let clientData: ClientData = new ClientData(this.clientId);
    const req: LicenseUpdateReq = new LicenseUpdateReq(form.get('tagCount').value, form.get('userCount').value, form.get('communityCount').value, form.get('feedbackCount').value, form.get('eventCount').value, form.get('promoCount').value, clientData);

    this.profileService.updateClientLicense(this.license.id, req).subscribe(
      response => {
        this.snack.open("License Data Updated !", "OK", { duration: 4000 });
        // this.getClients();
        // this.clients = response;
        // this.loader.close();
        // this.snack.open("License Data Updated !", "OK", { duration: 4000 });
      },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

}
