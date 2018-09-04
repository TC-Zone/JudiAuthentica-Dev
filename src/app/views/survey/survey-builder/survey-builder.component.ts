import { Component, OnInit, ViewChild } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { LayoutService } from "../../../shared/services/layout.service";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-survey-builder",
  templateUrl: "./survey-builder.component.html",
  animations: egretAnimations
})
export class SurveyBuilderComponent implements OnInit {
  questionForm: FormGroup;
  private sub: any;

  isOptional = false;

  constructor(private fb: FormBuilder, private route : ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let name = params["name"];
      let type = params["surveyType"]
      console.log("name : "+name)
      console.log("type  : "+type)
  });


    this.questionForm = this.fb.group({
      questions:this.fb.array([this.initQuestionTemplate()])
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


  removeQuestion(index : number) {
    const question = <FormArray>this.questionForm.controls["questions"];
    question.removeAt(index);
  }

  hideRemoveButton() {
    return this.questionForm.controls["answers"].value.length > 1;
  }

  submit() {

    console.log( JSON.stringify(this.questionForm.value));
  }
}
