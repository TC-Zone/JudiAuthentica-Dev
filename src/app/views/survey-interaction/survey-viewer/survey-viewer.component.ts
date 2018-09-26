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
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";
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
  ansTemplate: any;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductCrudService,
    private evoteService: EvoteService,
    private clientService: CrudService,
    private surveyService: SurveyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getAllAnsTemplates();

    this.route.params.subscribe(params => {
      console.log("passed params " + JSON.stringify(params));

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
      this.getAnswersTemplatesSub.unsubscribe();
    }
  }

  getAllAnsTemplates() {
    console.log("CALLED ANS TEMPLATES ");
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

      console.log("this.sourceDetail" + this.sourceDetail);
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
      this.getAllAnsTemplates();
      this.initMainForm(surveyId, this.surveyRecords[0]);
    });
  }

  getTemplate(id): any {
    this.surveyService.getAnsTemplateById(id).subscribe(response => {
      this.ansTemplate = response;
      console.log("anstemplate ");
      console.log(this.ansTemplate);
    });

    // console.log("ANSWER TEMPS : " + JSON.stringify(this.ansTemplates));
    // return this.ansTemplates.filter(temp => {
    //   return temp.id.indexOf(id) !== -1;
    // });
  }

  initMainForm(surveyId, questions) {
    console.log("QUESTIONS : ");
    console.log(questions.questions);

    let questionArr: FormArray = new FormArray([]);
    let answers: FormArray = new FormArray([]);

    this.surveyViewForm = new FormGroup({
      surveyId: new FormControl(surveyId),
      questions: questionArr
    });

    questions.questions.forEach((question, qIndex) => {
      this.addQuestion(question);

      this.surveyService
        .getAnsTemplateById(question.answerTemplate.id)
        .subscribe(response => {
          this.ansTemplate = response;
          console.log("TEMP OBJ :");
          console.log(this.ansTemplate);
          console.log(this.ansTemplate.answerTemplateType);
          this.ansTemplate.answers.forEach((answer, ansIndex) => {
            console.log('INDEX : '+ qIndex);
            this.addAnswer(qIndex, answer, this.ansTemplate);
          });
        });
    });
  }

  addQuestion(questionObj) {
    let id = questionObj.id;
    let name = questionObj.name;
    let answers = new FormArray([]);
    let answerTypeId = questionObj.answerTemplate.id;
    (<FormArray>this.surveyViewForm.controls["questions"]).push(
      this.returnQuestion(id, name, answers,answerTypeId)
    );
  }

  returnQuestion(id, name, answers,answerTypeId) {
    return this.fb.group({
      id: [id || ""],
      name: [name || ""],
      answers: answers,
      answerTypeId : answerTypeId
    });
  }

  addAnswer(questionIndex, answer, ansTemplate) {
    console.log("answers :" + JSON.stringify(ansTemplate));
    console.log(answer);
    (<FormArray>(
      (<FormGroup>(
        (<FormArray>this.surveyViewForm.controls["questions"]).controls[
          questionIndex
        ]
      )).controls["answers"]
    )).push(this.returnAnswer(answer.id, ansTemplate, answer));
  }

  returnAnswer(id, ansTemplate, answer) {
    return this.fb.group({
      id: id,
      answerTemplateType: new FormControl(ansTemplate.answerTemplateType),
      answer: answer
    });
  }

  printQuestion() {
    const con = <FormArray>this.surveyViewForm.controls["questions"];
    const con2   =  <FormArray>(
      (<FormGroup>(
        (<FormArray>this.surveyViewForm.controls["questions"]).controls[0]
      )).controls["answers"].value
    );
    console.log(con2[0]);
  }
}
