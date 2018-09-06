import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LayoutService } from "../../../shared/services/layout.service";
import { Subscription } from "rxjs";
import { ProductCrudService } from "../../product-crud/product-crud.service";
import { ResponseModel } from "../../../model/ResponseModel.model";

import { MomentDateAdapter } from "@angular/material-moment-adapter";

import { SurveyCommonComponent } from "../survey-common.component";
import { EvoteService } from "../../evote/evote-service.service";

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
  selector: "app-survey-creation-popup",
  templateUrl: "./survey-creation-popup.component.html",
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
export class SurveyCreationPopupComponent extends SurveyCommonComponent
  implements OnInit, OnDestroy {
  public surveyForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SurveyCreationPopupComponent>,
    public productService: ProductCrudService,
    public evoteService: EvoteService
  ) {
    super(productService, evoteService);
  }

  ngOnInit() {
    this.buildSurveyForm(this.data.payload);
    console.log("this.data.payload.type : " + this.data.payload.type);
    this.selectedType = this.data.payload.type;

    if (this.selectedType && this.selectedType.length > 1) {
      this.selectedType = this.getTypeValue(this.selectedType);
    }
    console.log("this.selectedType : " + this.selectedType);
    this.popuplateDropdown(this.selectedType);
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
    if (this.getEvotesSub) {
      this.getEvotesSub.unsubscribe();
    }
  }

  buildSurveyForm(fieldItem) {
    this.surveyForm = this.fb.group({
      topic: [fieldItem.topic || ""],
      type: [fieldItem.type || ""],
      productId: [fieldItem.productId || ""],
      voteId: [fieldItem.voteId || ""],
      startDate: [fieldItem.startDate, Validators.required],
      endDate: [fieldItem.endDate, Validators.required]
    });
  }

  submit() {
    console.log(JSON.stringify(this.surveyForm.value));
    this.dialogRef.close(this.surveyForm.value);
  }

  surveyTypes = [
    {
      name: "Product Survey",
      value: "P"
    },
    {
      name: "Evote Survey",
      value: "V"
    }
  ];
}
