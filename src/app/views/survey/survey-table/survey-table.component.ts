import { Component, OnInit, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { SurveyCreationPopupComponent } from "../survey-creation-popup/survey-creation-popup.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { LayoutService } from "../../../shared/services/layout.service";
import { NavigationExtras, Router } from "@angular/router";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import * as moment from "moment";
import { SurveyService } from "../survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-survey-table",
  templateUrl: "./survey-table.component.html",
  animations: egretAnimations
})
export class SurveyTableComponent implements OnInit, OnDestroy {
  rows: any[];
  getSurveysSub: Subscription;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private surveyService: SurveyService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) {}

  ngOnInit() {
    this.getAllSurvey();
  }

  ngOnDestroy() {
    if (this.getSurveysSub) {
      this.getSurveysSub.unsubscribe();
    }
  }

  onDetailToggle(value) {
    console.log("cliecked : " + value);
  }

  openSurveyPopup(data: any = {}, isNew?) {
    let title = isNew ? "Add New Survey " : "Update Survey ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      SurveyCreationPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      this.loader.open();

      res.startDate = moment(res.startDate).format("YYYY-MM-DD");
      res.endDate = moment(res.endDate).format("YYYY-MM-DD");

      console.log("INPUT : ");
      console.log(JSON.stringify(res));

      if (isNew) {
        this.surveyService.addNewSurvey(res, this.rows).subscribe(
          data => {
            this.rows = data;
            console.log("survey response : ");
            console.log(this.rows);
            this.loader.close();
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

      this.navigateSurveyBuilder(res);

    });
  }

  getAllSurvey() {
    this.getSurveysSub = this.surveyService.getAllSurveys().subscribe(
      successResp => {
        this.rows = successResp.content;
      },
      error => {
        this.loader.close();
        console.log(error);
        console.log(error.status);
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  navigateSurveyBuilder(res: any) {
    let extraParam: NavigationExtras = {
      queryParams: {
        name: res.topic,
        type: res.type,
        productId: res.productId,
        voteId: res.voteId,
        startDate: res.startDate,
        endDate: res.endDate,
        questions: res.questions
      }
    };

    this.router.navigate(["surveys/builder_v1"], extraParam);
  }
}
