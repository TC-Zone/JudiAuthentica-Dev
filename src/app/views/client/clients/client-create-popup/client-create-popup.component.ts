import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { GlobalVariable } from "../../../../shared/helpers/global-variable";


@Component({
  selector: 'app-client-create-popup',
  templateUrl: './client-create-popup.component.html',
  animations: egretAnimations,
})
export class ClientCreatePopupComponent implements OnInit {

  public globalVariable: GlobalVariable = new GlobalVariable();
  public license = this.globalVariable.client.license;
  public regex = this.globalVariable.validators.regex;

  public clientFormGroup: FormGroup;
  public profilePicFormGroup: FormGroup;
  public adminFormGroup: FormGroup;
  public licenseFormGroup: FormGroup;
  public formStatus = false;
  url;

  constructor(
    public dialogRef: MatDialogRef<ClientCreatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildItemForm()
  }

  buildItemForm() {

    // this.clientFormGroup = this.fb.group({
    //   name: [''],
    //   description: ['']
    // });
    // this.profilePicFormGroup = this.fb.group({
    //   profilePic: [""]
    // });
    // this.adminFormGroup = this.fb.group({
    //   username: [''],
    //   email: ['']
    // });
    // this.licenseFormGroup = this.fb.group({
    //   tagCount: [''],
    //   userCount: [''],
    //   feedbackCount: [''],
    //   comunityCount: [''],
    //   eventCount: [''],
    //   promoCount: ['']
    // });

    this.clientFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regex._Letter)]],
      description: ['', Validators.required]
    });
    this.profilePicFormGroup = this.fb.group({
      profilePic: ["", Validators.required]
    });
    this.adminFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.licenseFormGroup = this.fb.group({
      tagCount: ['', [Validators.required, Validators.max(this.license.tagCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      userCount: ['', [Validators.required, Validators.max(this.license.userCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      comunityCount: ['', [Validators.required, Validators.max(this.license.comunityCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      feedbackCount: ['', [Validators.required, Validators.max(this.license.feedbackCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      eventCount: ['', [Validators.required, Validators.max(this.license.eventCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      promoCount: ['', [Validators.required, Validators.max(this.license.promoCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)]
    });

  }

  submit() {
    let forms = [this.clientFormGroup.value, this.url, this.adminFormGroup.value, this.licenseFormGroup.value];
    this.dialogRef.close(forms);
  }


  // File uploader validation and upload
  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {

      let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      let pattern = /image-*/;
      let reader = new FileReader();
      if (!file.type.match(pattern)) {
        this.snackBar.open(
          "Invalid Format!",
          "close",
          { duration: 2000 }
        );
        return;
      }
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(file);

    } else {
      this.snackBar.open(
        "Can't upload",
        "close",
        { duration: 2000 }
      );
    }

  }

  removeSelectedImg() {
    this.url = null;
  }

}

