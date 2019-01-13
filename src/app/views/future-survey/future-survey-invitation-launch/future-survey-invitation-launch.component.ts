import { Component, OnInit, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";

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

  public statusArray = [
    { id: 0, status: "On Premise", style: "accent" },
    { id: 1, status: "Launched", style: "primary" },
    { id: 2, status: "Offline", style: "default" }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyInvitationLaunchComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private conversionService: AppDataConversionService,
    private loader: AppLoaderService
  ) {}

  ngOnInit() {
    this.surveyObject = this.data.payload;
    this.title = this.surveyObject.title;
    const surveyId = this.surveyObject.id;

    let surveyStatus = this.surveyObject.status;
    this.currentStatus = this.statusArray.filter(function(status) {
      return status.id == surveyStatus;
    });

    console.log("current Status");
    console.log(this.currentStatus[0]);

    this.isPublic = this.surveyObject.channel == 1 ? true : false;
    if (this.isPublic) {
      this.link = this.futureSurveyService.getPublicSurveyLink(surveyId);
    }
  }

  launchSurvey() {
    console.log("DATA");
    console.log(this.data.payload);

    this.dialogRef.close(this.data.payload);
  }
}
