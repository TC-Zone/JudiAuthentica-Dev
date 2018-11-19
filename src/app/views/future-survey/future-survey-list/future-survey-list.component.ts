import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { Subscription } from "rxjs";
import { CrudService } from "app/views/cruds/crud.service";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { Router, NavigationExtras } from "@angular/router";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";

@Component({
  selector: "app-future-survey-list",
  templateUrl: "./future-survey-list.component.html",
  animations: egretAnimations
})
export class FutureSurveyListComponent implements OnInit {
  getSurveysSub: Subscription;
  public futureSurveys: any[] = [];
  getClientSub: Subscription;

  public clients: any[];
  public response: ResponseModel;

  constructor(
    private futureSurveyService: FutureSurveyService,
    private clientService: CrudService,
    private router: Router,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) {}

  ngOnInit() {
    this.getAllFutureSurveys();
    this.getAllClients();
  }

  ngOnDestroy() {
    if (this.getSurveysSub) {
      this.getSurveysSub.unsubscribe();
    }
  }

  getAllFutureSurveys() {
    this.getSurveysSub = this.futureSurveyService
      .getAllFutureSurveys()
      .subscribe(data => {
        console.log(data);
        this.futureSurveys = data.content;
      });
  }

  getAllClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;
    });
  }

  navigateToSurveyEditor(res?: any) {
    if (res) {
      let extraParam: NavigationExtras = {
        queryParams: {
          surveyId: res.id
        }
      };
      this.router.navigate(["future-survey/sEditor"], extraParam);
    } else {
      this.router.navigate(["future-survey/sEditor"]);
    }
  }

  navigateToSurveyView(row) {
    let extraParam: NavigationExtras = {
      queryParams: {
        surveyId: row.id
      }
    };
    this.router.navigate(["future-survey/sViewer"], extraParam);
  }

  deleteFutureSurvey(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.title}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.futureSurveyService.deleteFutureSurvey(row).subscribe(
            data => {
              this.getAllFutureSurveys();
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
}
