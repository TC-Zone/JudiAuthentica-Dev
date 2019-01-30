import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { DateValidator } from "../../../utility/dateValidator";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AppDataConversionService } from "app/shared/services/data-conversion.service";
import { LoginRequest } from "../../interaction-view/interaction-view.component";
import * as moment from "moment";

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD"
  },
  display: {
    dateInput: "YYYY-MM-DD",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'app-edit-invitation-setting-popup',
  templateUrl: './edit-invitation-setting-popup.component.html',
  animations: egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EditInvitationSettingPopupComponent implements OnInit {
  public itemForm: FormGroup
  public customField: any[] = [];
  today: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditInvitationSettingPopupComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private conversionService: AppDataConversionService,
    private loader: AppLoaderService
  ) { 
    this.data.payload.customField.forEach(element => {
      this.customField.push(element.displayName);
    });
    this.data.payload.customField = this.customField;
  }

  
  ngOnInit() {
    console.log(this.data);
    // build form group
    this.buildItemForm(this.data.payload)
    // validate back dates
    this.today = DateValidator.getToday();
  }

  buildItemForm(item) {
    console.log(item);
    this.itemForm = this.fb.group({
      groupName: new FormControl({value: item.groupName || '', disabled: true}, Validators.required),
      customField: new FormControl({value: item.customField || '', disabled: true}, Validators.required),
      endDate: [item.endDate || '', Validators.required]
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }

  
}