import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DateValidator } from 'app/utility/dateValidator';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { FutureSurveyService } from '../../future-survey.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-create-invitee-popup',
  templateUrl: './create-invitee-popup.component.html',
  animations: egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    DatePipe
  ]
})
export class CreateInviteePopupComponent implements OnInit {

  public customFields;
  public length;

  public inviteeForm: FormGroup;
  public startDateMin;
  public startDateMax;
  public endDateMin;
  public endDateMax;
  public currentTotalImageCount = 0;
  public maxUploadableFileCount = 1;
  public newlySelectedFileList = [];
  public urls = [];
  public remainImagesID = [];
  public comunityName: string;
  public comunityId: string;
  public minHeight = 200;
  public minWidth = 400;
  public imgBaseURL: string;
  public url;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateInviteePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute,
    private errDialog: AppErrorService,
    private futureSurveyService: FutureSurveyService
  ) { }

  ngOnInit() {
    this.length = this.data.customFields.length;
    console.log(this.length);
    if (length === 1){
      console.log('------------------- 1');
    }
    
    this.buildInviteeForm(this.data.payload);

  }


  buildInviteeForm(inviteeFormData) {
    this.inviteeForm = this.fb.group({
      // name: new FormControl( { value: inviteeFormData.name || "", hidden: false}, Validators.required ),
      // email: new FormControl( { value: inviteeFormData.email || "", hidden: false}, Validators.required ),
      // username: new FormControl( { value: inviteeFormData.username || "", hidden: true}, Validators.required ),
      // password: new FormControl( { value: inviteeFormData.password || "", hidden: true}, Validators.required ),
      // customField1: new FormControl( { value: inviteeFormData.customField1 || "", hidden: true}, Validators.required ),
      // customField2: new FormControl( { value: inviteeFormData.customField2 || "", hidden: true}, Validators.required ),
      // customField3: new FormControl( { value: inviteeFormData.customField3 || "", hidden: true}, Validators.required )
      name: [inviteeFormData.name || '', Validators.required],
      email: [inviteeFormData.email || '', Validators.required],
      username: [inviteeFormData.username || '', Validators.required],
      password: [inviteeFormData.password || '', Validators.required],
      customField1: [inviteeFormData.customField1 || ''],
      customField2: [inviteeFormData.customField2 || ''],
      customField3: [inviteeFormData.customField3 || '']
    });

    // if (length < 3) {
    //   if (length === 1) {
    //     // this.updateForm('customField2');
    //     // this.updateForm('customField3');
    //     let customField2 = this.inviteeForm.get('customField2');
    //     customField2.clearValidators();
    //     customField2.updateValueAndValidity();
    //     let customField3 = this.inviteeForm.get('customField3');
    //     customField3.clearValidators();
    //     customField3.updateValueAndValidity();
    //   } else if (length === 2) {
    //     // this.updateForm('customField3');
    //     let customField = this.inviteeForm.get('customField3');
    //     customField.clearValidators();
    //     customField.updateValueAndValidity();
    //   }
    // }
  }

  submit() {
    this.dialogRef.close(this.inviteeForm.value);
  }

}
