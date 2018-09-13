import { Component, OnInit, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../shared/animations/egret-animations";
import { Subscription } from "rxjs";
import {
  SurveyInteractionService,
  SurveyDetailModel
} from "./survey-interaction.service";
import { SurveyService } from "../survey/survey.service";
import { AppLoaderService } from "../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../shared/services/app-error/app-error.service";

@Component({
  selector: "app-survey-interaction",
  templateUrl: "./survey-interaction.component.html",
  animations: egretAnimations
})
export class SurveyInteractionComponent implements OnInit, OnDestroy {
  getAllSurveySub: Subscription;
  surveyRows: any[];


  constructor(
    private interactionService: SurveyInteractionService,
    private surveyService: SurveyService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) {}

  ngOnInit() {
    this.getAllSurvey();
  }

  ngOnDestroy() {
    if (this.getAllSurveySub) {
      this.getAllSurveySub.unsubscribe();
    }
  }

  getAllSurvey() {
    this.getAllSurveySub = this.surveyService.getAllSurveys().subscribe(
      successResp => {
        this.surveyRows = successResp.content;
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
}

