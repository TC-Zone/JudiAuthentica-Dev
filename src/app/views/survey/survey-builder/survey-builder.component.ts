import { Component, OnInit, ViewChild } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { LayoutService } from "../../../shared/services/layout.service";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { Subscription } from "rxjs";

import { ProductCrudService } from "../../product-crud/product-crud.service";
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { SurveyCommonComponent } from "../survey-common.component";
import { EvoteService } from '../../evote/evote-service.service';

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
  selector: "app-survey-builder",
  templateUrl: "./survey-builder.component.html",
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
export class SurveyBuilderComponent extends SurveyCommonComponent implements OnInit {
  questionForm: FormGroup;
  sub: any;
  isOptional = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public productService: ProductCrudService,
    public evoteService: EvoteService
  ) {
    super(productService, evoteService);
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let name = params["name"];
      let type = params["type"];
      let productId = params["productId"];
      let voteId = params["voteId"];
      let startDate = params["startDate"];
      let endDate = params["endDate"];
      console.log("name :" + name);
      console.log("type :" + type);
      console.log("productId :" + productId);
      console.log("voteId :" + voteId);
      console.log("startDate :" + startDate);
      console.log("endDate :" + endDate);
      this.selectedType = type;
      this.buildSurveyForm(name, type, productId, voteId, startDate, endDate);
      this.popuplateDropdown(this.selectedType);
    });
  }

  buildSurveyForm(name, type, productId, voteId, startDate, endDate) {
    this.questionForm = this.fb.group({
      topic: [name || ""],
      type: [type || ""],
      productId: [productId || ""],
      voteId: [voteId || ""],
      startDate: [startDate, Validators.required],
      endDate: [endDate, Validators.required],
      questions: this.fb.array([this.initQuestionTemplate()])
    });
  }

  initQuestionTemplate() {
    return this.fb.group({
      name: [],
      answerTemplate: []
    });
  }

  addQuestion() {
    const question = <FormArray>this.questionForm.controls["questions"];
    question.push(this.initQuestionTemplate());
  }

  removeQuestion(index: number) {
    const question = <FormArray>this.questionForm.controls["questions"];
    question.removeAt(index);
  }

  hideRemoveButton() {
    return this.questionForm.controls["answers"].value.length > 1;
  }

  submit() {
    console.log(JSON.stringify(this.questionForm.value));
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
