import { Component, OnInit, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";

@Component({
  selector: "app-future-survey-launch",
  templateUrl: "./future-survey-launch.component.html",
  animations: egretAnimations
})
export class FutureSurveyLaunchComponent implements OnInit {
  public launchForm: FormGroup;
  public link;
  public title;
  public isPublic: boolean;
  public surveyObj;

  public statusArray = [
    { id: 0, status: "On Premise", style: "accent" },
    { id: 1, status: "Launched", style: "primary" },
    { id: 2, status: "Offline", style: "default" }
  ];

  public currentStatus;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyLaunchComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.surveyObj = this.data.payload;
    this.isPublic = this.surveyObj.channel == 1 ? true : false;
    this.title = this.surveyObj.title;
    let surveyStatus = this.surveyObj.status;
    this.currentStatus = this.statusArray.filter(function(status) {
      return status.id == surveyStatus;
    });

    console.log("current Status");
    console.log(this.currentStatus[0]);

    if (this.isPublic) {
      // this.buildLaunchForm(this.data);
      console.log("SURVEY ID : " + this.surveyObj.id);
      this.link = this.futureSurveyService.getPublicSurveyLink(
        this.surveyObj.id
      );
      console.log("The link : " + this.link);
    }
  }

  buildLaunchForm(fieldItem) {
    this.launchForm = this.fb.group({
      shareLink: [fieldItem.shareLink || ""]
    });
  }

  launchFutureSurvey(surveyObj) {
    this.dialogRef.close(surveyObj);
    console.log("surveyOBJ ");
    console.log(surveyObj);
  }
}
