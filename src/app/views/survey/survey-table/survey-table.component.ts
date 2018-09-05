import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { SurveyCreationPopupComponent } from "../survey-creation-popup/survey-creation-popup.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { LayoutService } from "../../../shared/services/layout.service";
import { NavigationExtras, Router } from "@angular/router";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import * as moment from "moment";

@Component({
  selector: "app-survey-table",
  templateUrl: "./survey-table.component.html",
  animations: egretAnimations
})
export class SurveyTableComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

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

      console.log("INPUT : ");
      console.log(JSON.stringify(res));


      res.startDate = moment(res.startDate).format("YYYY-MM-DD");
      res.endDate = moment(res.endDate).format("YYYY-MM-DD");

      let extraParam: NavigationExtras = {
        queryParams: {
          name: res.topic,
          type: res.type,
          productId : res.productId,
          voteId : res.voteId,
          startDate : res.startDate,
          endDate : res.endDate
        }
      };

      this.router.navigate(["surveys/builder_v1"], extraParam);
    });
  }

  surveyData = [
    {
      topic: "Addidas Air Survey",
      type: "P",
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: "V",
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: "V",
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: "P",
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: "P",
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    }
  ];
}
