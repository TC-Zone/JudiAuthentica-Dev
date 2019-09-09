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
import { GlobalVariable } from 'app/shared/helpers/global-variable';

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
  private globalVariable: GlobalVariable = new GlobalVariable();
  private regex = this.globalVariable.validators.regex;

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
    this.length = +this.data.customFieldsLength;

    let inviteeFormData = this.data.payload;
    this.inviteeForm = this.fb.group({
      name: [inviteeFormData.name || '', [Validators.required, Validators.pattern(this.regex._Letter)]],
      email: [inviteeFormData.email || '', [Validators.required, Validators.pattern(this.regex._Email)]],
      username: [inviteeFormData.username || '', [Validators.required, Validators.pattern(this.regex._UserName)]],
      password: [inviteeFormData.password || '', Validators.required],
      customField1: [inviteeFormData.customField1 || '', Validators.required],
      customField2: [inviteeFormData.customField2 || '', Validators.required],
      customField3: [inviteeFormData.customField3 || '', [Validators.required]]
    });

    if (this.length < 3) {
      if (this.length === 1) {
        this.inviteeForm.get('customField2').clearValidators();
        this.inviteeForm.get('customField3').clearValidators();
      } else if (this.length === 2) {
        this.inviteeForm.get('customField3').clearValidators();
      }
    }
    this.inviteeForm.updateValueAndValidity();

  }

  submit() {
    this.dialogRef.close(this.inviteeForm.value);
  }

}
