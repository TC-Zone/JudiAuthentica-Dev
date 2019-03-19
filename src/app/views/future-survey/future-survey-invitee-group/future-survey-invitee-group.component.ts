import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router } from "@angular/router";
import {
  MatDialogRef,
  MatDialog,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatSnackBar
} from "@angular/material";
import { EditInvitationSettingPopupComponent } from "../edit-invitation-setting-popup/edit-invitation-setting-popup.component";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as moment from "moment";
import { InvitationRequest} from "../../../model/FutureSurvey.model";


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
  selector: "app-future-survey-invitee-group",
  templateUrl: "./future-survey-invitee-group.component.html",
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
export class FutureSurveyInviteeGroupComponent implements OnInit {
  public allInvitations: any[];
  public customField: any[];

  constructor(
    private futureSurveyService: FutureSurveyService,
    private conversionService: AppDataConversionService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar,
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
      response => {
        console.log(response);

        this.allInvitations = response.content;

        // console.log(this.allInvitations);
        // if(this.allInvitations && this.allInvitations.length != 0){
        //   this.allInvitations[0].inviteeGroup.customFields.forEach(element => {
        //     this.customHeader.push(element.displayName);
        //   });
        // }

      },
      error => {
        this.errDialog.showError(error);
      }
    );
  }


  openPopupEditInvitationSetting(invitationId, groupName, customField, endDate) {
    let item = {}
    item["groupName"] = groupName;
    item["customField"] = customField;
    item["endDate"] = endDate;
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      EditInvitationSettingPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: 'title', payload: item }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      } else {
        console.log(res);
        const endDate = moment(res.endDate).format("YYYY-MM-DD");
        const invitationRequest: InvitationRequest = new InvitationRequest(res.groupName, res.customField, endDate);

        this.futureSurveyService.updateInvitation(invitationId, invitationRequest).subscribe(
          response => {
            console.log('.....INVITEE GROUP....');
            console.log(response);
            this.getAllInvitation();
          },
          error => {
            // this.loader.close();
            this.errDialog.showError(error);
          }
        );

      }
      // this.loader.open();
    });
  }


  navigateInviteeGroupView(surveyId) {
    let extraParam: NavigationExtras = {
      queryParams: {
        surveyId: surveyId
      }
    };

    this.router.navigate(["future-survey/invitationDashboard"], extraParam);
  }
}
