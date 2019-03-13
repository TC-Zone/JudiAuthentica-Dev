import { Component, OnInit, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-future-survey-invitation-launch",
  templateUrl: "./future-survey-invitation-launch.component.html",
  animations: egretAnimations
})
export class FutureSurveyInvitationLaunchComponent implements OnInit {
  public title: String;
  public surveyObject: any;
  public currentStatus: any;
  public isPublic: boolean;
  public link;
  public origin: string;
  public surveyId: any;

  public futureSurveys: any[] = [];

  public statusArray = [
    { id: 0, status: "On Premise", style: "accent" },
    { id: 1, status: "Launched", style: "primary" },
    { id: 4, status: "Offline", style: "default" }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyInvitationLaunchComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private conversionService: AppDataConversionService,
    private loader: AppLoaderService,
    private confirmService: AppConfirmService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyObject = this.data.payload;
    this.title = this.surveyObject.title;
    this.surveyId = this.surveyObject.id;
    this.origin = this.surveyObject.origin == "2" ? "E Vote" : "Survey";

    let surveyStatus = this.surveyObject.status;
    this.currentStatus = this.statusArray.filter(function(status) {
      return status.id == surveyStatus;
    });

    console.log("current Status");
    console.log(this.currentStatus[0]);

    this.isPublic = this.surveyObject.channel == 1 ? true : false;
    if (this.isPublic) {
      this.link = this.futureSurveyService.getPublicSurveyLink(this.surveyId);
    }
  }

  launchSurvey() {
    console.log("DATA");
    console.log(this.data.payload);

    this.dialogRef.close(this.data.payload);
  }

  putOffline(surveyId) {
    console.log("DO OOFLINE " + surveyId);
    this.confirmService
      .confirm({
        message: "You are about to Offline the broadcast! Are you Sure ?"
      })
      .subscribe(res => {
        if (res) {
          this.futureSurveyService.changeSurveyStatus(surveyId, 4).subscribe(
            data => {
              console.log("...........OFFLINE RESPONSE/..........");
              console.log(data);
              this.dialogRef.close("OFFLINE");
            },
            error => {
              this.loader.close();
              this.errDialog.showError(error);
            }
          );
        }
      });
  }
}
