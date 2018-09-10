import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AnswerTemplatePopupComponent } from "../answer-template-popup/answer-template-popup.component";
import { Subscription } from "rxjs";
import { SurveyService } from "../survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { SurveyTableComponent } from "../survey-table/survey-table.component";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-survey-setting",
  templateUrl: "./survey-setting.component.html",
  animations: egretAnimations
})
export class SurveySettingComponent implements OnInit {
  rows: any[];
  public getAnswersTemplatesSub: Subscription;

  public defaultAnswerTemplate: any = {
    name: "Free Text Answer",
    answerTemplateType: "F",
    answers: [{ lable: "", value: 1, optionNumber: 1 }]
  };

  constructor(
    private dialog: MatDialog,
    private surveyService: SurveyService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private confirmService: AppConfirmService
  ) {}

  ngOnInit() {
    this.getAllAnsTemplates();
  }

  defaultTemplateCreate(templates: any) {
    console.log("passed rows :");
    console.log(templates);
    let result = templates.filter(
      item => item.answerTemplateType.indexOf("F") !== -1
    );
    if (result.length === 0) {
      console.log("need to create Free text ");
      this.loader.open("Installing Default Settings");
      console.log(this.defaultAnswerTemplate);
      this.surveyService
        .addNewAnsTemplate(this.defaultAnswerTemplate,this.rows)
        .subscribe(
          data => {
            this.rows = data;
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
  }

  ngOnDestroy() {
    if (this.getAnswersTemplatesSub) {
      this.getAnswersTemplatesSub.unsubscribe();
    }
  }

  getAllAnsTemplates() {
    this.getAnswersTemplatesSub = this.surveyService
      .getAnswerTemplates()
      .subscribe(
        successResp => {
          this.rows = successResp.content;
          console.log(this.rows);
          this.defaultTemplateCreate(this.rows);
        },
        error => {
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

  openAnswerTemplatePopup(data: any = {}, isNew?) {
    let title = isNew ? "Add New Answer Template " : "Update Answer Template ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      AnswerTemplatePopupComponent,
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
      if (isNew) {
        this.surveyService.addNewAnsTemplate(res, this.rows).subscribe(
          data => {
            console.log("response of creation ");
            console.log(data);
            this.rows = data;
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
      } else {
        this.surveyService.updateAnsTemplate(data.id, res).subscribe(
          response => {
            console.log(response.content);
            this.rows = this.rows.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });

            this.loader.close();
            return this.rows.slice();
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

      console.log("input : ");
      console.log(JSON.stringify(res));
    });
  }

  deleteAnsTemplate(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.surveyService.removeAnsTemplate(row, this.rows).subscribe(
            data => {
              console.log(data);
              this.rows = data;
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
      });
  }

  //for the movement unused
  getAnsTemplateById(id) {
    this.surveyService.getAnsTemplateById(id, this.rows).subscribe(
      successResp => {
        console.log("by id response");
        console.log(successResp);
        this.openAnswerTemplatePopup(successResp);
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

  //{"name":"Free text ","answerTemplateType":"M","answers":[{"lable":"fee","value":1,"optionNumber":1}]}
}
