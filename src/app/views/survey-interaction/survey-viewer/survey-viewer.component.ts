import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductCrudService } from "../../product-crud/product-crud.service";
import { EvoteService } from "../../evote/evote-service.service";
import { CrudService } from "../../cruds/crud.service";
import {
  SourceDetail,
  QuestionModel,
  SurveyViewModel
} from "../survey-interaction.service";
import { SurveyService } from "../../survey/survey.service";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-survey-viewer",
  templateUrl: "./survey-viewer.component.html",
  animations: egretAnimations
})
export class SurveyViewerComponent implements OnInit, OnDestroy {
  sourceDetail: any[] = [];
  surveyRecords: any[] = [];
  isLinear: boolean = false;
  surveyViewForm: FormGroup;

  getAnswersTemplatesSub: Subscription;
  ansTemplates: any[];

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductCrudService,
    private evoteService: EvoteService,
    private clientService: CrudService,
    private surveyService: SurveyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("passed params " + JSON.stringify(params));
      this.getAllAnsTemplates();

      if (params.type === "P") {
        this.getProductRecord(params.sourceId);
      }
      if (params.type === "V") {
        this.getEvoteRecord(params.sourceId);
      }

      this.fetchSurveyRecord(params.id);
    });
  }

  ngOnDestroy() {
    if (this.getAnswersTemplatesSub) {
      this.getAnswersTemplatesSub.unsubscribe;
    }
  }

  getAllAnsTemplates() {
    this.getAnswersTemplatesSub = this.surveyService
      .getAnswerTemplates()
      .subscribe(successResp => {
        this.ansTemplates = successResp.content;
      });
  }

  getProductRecord(productId) {
    this.prodService.getProductById(productId).subscribe(productResp => {
      let product = productResp.content;
      this.getClientById(
        product.client.id,
        product.name,
        product.batchNumber,
        product.imageObject
      );
    });
  }

  getEvoteRecord(evoteId) {
    this.evoteService.getEvoteById(evoteId).subscribe(evoteResp => {
      let evote = evoteResp.content;
      this.getClientById(
        evote.clientId,
        evote.topic,
        evote.batchNumber,
        evote.imageName
      );
    });
  }

  getClientById(clientId, sourceName, batchNumber, imageObject) {
    this.clientService.getClientById(clientId).subscribe(clientRes => {
      let imageObj = imageObject
        ? "assets/images/survey_interaction4.png"
        : imageObject;

      this.sourceDetail.unshift(
        new SourceDetail(sourceName, batchNumber, imageObj, clientRes.content)
      );
    });
  }

  fetchSurveyRecord(surveyId) {
    this.surveyService.getSurveyById(surveyId).subscribe(surveyResp => {
      this.surveyRecords.unshift(
        new SurveyViewModel(
          surveyResp.topic,
          surveyResp.type,
          surveyResp.questions
        )
      );

      this.populateQuestions(surveyId, this.surveyRecords[0]);
    });
  }

  populateQuestions(surveyId, questions) {
    console.log("PASSED QUESTIONS");
    console.log(questions);

    this.surveyViewForm = this.fb.group({
      surveyId: [surveyId],
      questions: this.fb.array([])
    });

    this.patchQuestion(questions.questions);
  }

  patchQuestion(questions) {
    const control = <FormArray>this.surveyViewForm.controls["questions"];

    console.log("array ques");
    console.log(questions);

    questions.forEach(question => {
      control.push(
        this.initQuestion(
          question.id,
          question.name,
          question.answerTemplate,
          control
        )
      );
    });
  }

  getTemplate(id): any {
    console.log("ANSWER TEMPS : " + JSON.stringify(this.ansTemplates));
    return this.ansTemplates.filter(temp => {
      return temp.id.indexOf(id) !== -1;
    });
  }

  initQuestion(quesId, name, answerTemp, control) {
    return this.fb.group({
      id: [quesId],
      name: [name],
      answers: this.fb.array([this.initAnswers(answerTemp)])
    });
  }

  initAnswers(answerTemp) {
    let temp = this.getTemplate(answerTemp.id);
    return this.initAnswer(temp);
  }

  initAnswer(temp) {
    return this.fb.group({
      id: [temp.id]
    });
  }

  // patchAnswers(template, control) {
  //   let ansControl = <FormArray>control.controls["answers"];
  //   this.surveyService.getAnsTemplateById(template.id).subscribe(temp => {
  //     ansControl.push(this.initAnswer(temp));
  //   });
  // }
}
