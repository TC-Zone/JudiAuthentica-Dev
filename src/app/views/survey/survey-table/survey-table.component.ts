import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { SurveyCreationPopupComponent } from "../survey-creation-popup/survey-creation-popup.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { LayoutService } from "../../../shared/services/layout.service";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: "app-survey-table",
  templateUrl: "./survey-table.component.html",
  animations: egretAnimations
})
export class SurveyTableComponent implements OnInit {
  constructor(private dialog: MatDialog , private router: Router) {}


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

      console.log("input : ");
      console.log(JSON.stringify(res));

      let extraParam  : NavigationExtras = {
          queryParams : {
            "name" : res.name,
            "surveyType" :res.surveyType
          }
      };

      this.router.navigate(['surveys/builder_v1'],extraParam);


    });
  }


  surveyData = [
    {
      topic: "Addidas Air Survey",
      type: { name: "Product Survey", value: "product" },
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: { name: "Evote Survey", value: "evote" },
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: { name: "Evote Survey", value: "evote" },
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: { name: "Product Survey", value: "product" },
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    },
    {
      topic: "Addidas Air Survey",
      type: { name: "Product Survey", value: "product" },
      source: "Addidas Air XD1",
      start: "2018/04/10",
      end: "2018/05/10"
    }
  ];
}
