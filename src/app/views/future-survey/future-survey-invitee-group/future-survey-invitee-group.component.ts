import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";

@Component({
  selector: "app-future-survey-invitee-group",
  templateUrl: "./future-survey-invitee-group.component.html",
  animations: egretAnimations
})
export class FutureSurveyInviteeGroupComponent implements OnInit {
  public allInvitations: any[];

  constructor(
    private futureSurveyService: FutureSurveyService,
    private conversionService: AppDataConversionService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService
  ) {}

  ngOnInit() {
    this.getAllInvitation();
  }

  testClick() {}

  getFailedInteraction(surveyId) {
    console.log('ID : '+surveyId);

    this.futureSurveyService
      .getFailedInteractions(surveyId)
      .subscribe(response => {
        console.log(response);
      });
  }

  getAllInvitation() {
    this.futureSurveyService.fetchAllInvitation().subscribe(
      reponse => {
        this.allInvitations = reponse.content;
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
}
