import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-future-survey-invitee-group",
  templateUrl: "./future-survey-invitee-group.component.html",
  animations: egretAnimations
})
export class FutureSurveyInviteeGroupComponent implements OnInit {
  public allInvitations: any[];
  public customHeader = [];


  constructor(
    private futureSurveyService: FutureSurveyService,
    private conversionService: AppDataConversionService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllInvitation();
  }

  getFailedInteraction(surveyId) {
    console.log('ID : ' + surveyId);

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
        this.allInvitations[0].inviteeGroup.customFields.forEach(element => {
          this.customHeader.push(element.displayName);
        });

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


  navigateInviteeGroupView(id) {
    let extraParam: NavigationExtras = {
      queryParams: {
        id: id
      }
    };

    this.router.navigate(["future-survey/inviteeGroupsTest"], extraParam);
  }
}
