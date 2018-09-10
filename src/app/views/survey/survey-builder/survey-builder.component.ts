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
import { EvoteService } from "../../evote/evote-service.service";
import { SurveyService } from "../survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { SurveyModel } from "../../../model/SurveyRequest.model";

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
export class SurveyBuilderComponent extends SurveyCommonComponent
  implements OnInit {
  surveyDetailForm: FormGroup;
  questionForm: FormGroup;

  sub: any;
  isOptional = false;
  surveyName: string;
  surveyId: string;
  surveyQuestions: any[] = [];

  getAnswersTemplatesSub: Subscription;
  ansTemplates: any[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public productService: ProductCrudService,
    public evoteService: EvoteService,
    public surveyService: SurveyService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService
  ) {
    super(productService, evoteService);
  }

  getAllAnsTemplates() {
    this.getAnswersTemplatesSub = this.surveyService
      .getAnswerTemplates()
      .subscribe(
        successResp => {
          this.ansTemplates = successResp.content;
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

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let id = params["id"];
      let name = params["name"];
      let type = params["type"];
      let productId = params["productId"];
      let voteId = params["voteId"];
      let startDate = params["startDate"];
      let endDate = params["endDate"];
      let questions = params["questions"];

      this.surveyName = name;
      this.surveyId = id;
      console.log("id :" + id);
      console.log("name :" + name);
      console.log("type :" + type);
      console.log("productId :" + productId);
      console.log("voteId :" + voteId);
      console.log("startDate :" + startDate);
      console.log("endDate :" + endDate);
      console.log("questions :");
      if (questions) {
        console.log(JSON.parse(questions));
      }

      this.selectedType = type;

      this.buildSurveyForm(name, type, productId, voteId, startDate, endDate);
      this.buildQuestionForm(questions);
      this.getAllAnsTemplates();
      this.popuplateDropdown(this.selectedType);
    });
  }

  buildSurveyForm(name, type, productId, voteId, startDate, endDate) {
    this.surveyDetailForm = this.fb.group({
      topic: [name || ""],
      type: [type || ""],
      productId: [productId || ""],
      voteId: [voteId || ""],
      startDate: [startDate, Validators.required],
      endDate: [endDate, Validators.required]
    });
  }

  buildQuestionForm(questions) {
    this.questionForm = this.fb.group({
      questions: this.fb.array([])
    });
    this.patch(questions);
  }

  patch(fields?) {
    console.log("patch called");

    const control = <FormArray>this.questionForm.controls["questions"];
    console.log("length  and obj  : " + control.length);
    console.log(control);

    if (fields == null) {
      console.log("after imidiate survey creation");
      control.push(this.initQuestionTemplate());
      return;
    }

    let questionArray = JSON.parse(fields);
    console.log("question array length");
    console.log(questionArray.length);
    if (questionArray.length == 0) {
      console.log("without question loading situation");
      control.push(this.initQuestionTemplate());
      return;
    }

    questionArray.forEach(x => {
      if (x.id) {
        this.surveyService.getQuestionById(x.id).subscribe(response => {
          console.log("QUESTION BY ID : ");
          console.log(response);
          console.log("this.surveyQuestions");
          console.log(this.surveyQuestions);
          this.surveyQuestions.unshift(response);
          control.push(
            this.initQuestionTemplate(response.name, response.answerTemplate)
          );
        });
      }
    });

    console.log("myquestions : ");
    console.log(this.surveyQuestions);
  }

  initQuestionTemplate(name?, answerTemplate?) {
    let anstempVal = answerTemplate ? answerTemplate.id : null;
    console.log("anstempVAL : " + anstempVal);
    return this.fb.group({
      name: [name || ""],
      answerTemplate: [anstempVal || ""]
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
    let surveyReq = new SurveyModel({
      topic: this.surveyDetailForm.value.topic,
      type: this.surveyDetailForm.value.type,
      startDate: this.surveyDetailForm.value.startDate,
      endDate: this.surveyDetailForm.value.endDate,
      productId: this.surveyDetailForm.value.productId,
      voteId: this.surveyDetailForm.value.voteId,
      questions: this.questionForm.value
    });

    this.updateSurveyWithQuestions(this.surveyId, surveyReq);
  }

  updateSurveyWithQuestions(id, surveyObj) {
    console.log("sueveyobject");
    console.log(surveyObj);
    this.surveyService.updateSurveyWithQuestions(id, surveyObj).subscribe(
      response => {
        console.log("response after update questions");
        console.log(response.content);
        this.loader.close();
      },
      error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  // checkQuestions(){
  //   console.log('question : ');
  //   console.log(this.questionForm.controls['questions']);
  // }

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
