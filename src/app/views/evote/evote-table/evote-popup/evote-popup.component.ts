import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "../../../../../../node_modules/@angular/material";
import { Subscription } from "../../../../../../node_modules/rxjs";
import {EvoteService } from '../../evote-service.service';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateValidator} from '../../../../utility/dateValidator';

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
  selector: 'app-evote-popup',
  templateUrl: './evote-popup.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EvotePopupComponent implements OnInit {
  
  public evoteForm: FormGroup;
  public getClientSub: Subscription;
  tomorrow : Date;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private evoteService: EvoteService,
    public dialogRef: MatDialogRef<EvotePopupComponent>,
  ) { }

  ngOnInit() {
    this.tomorrow = DateValidator.dateValidate();
    this.buildEvoteForm(this.data.payload);
   // console.log(this.data.payload);
  }

    
  buildEvoteForm(fieldItem) {
    this.evoteForm = this.fb.group({
      topic: [fieldItem.topic || "",Validators.required],
      // client: [fieldItem.client || ""],
      code: [fieldItem.code || "", Validators.required],      
      description: [fieldItem.description || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required]     
      
    });
  }
  submit() {
    //console.log(this.evoteForm.value)
    this.dialogRef.close(this.evoteForm.value);
  }
}
