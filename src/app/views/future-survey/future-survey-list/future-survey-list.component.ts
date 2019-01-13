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
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";
import { FutureSurveyConfigPopupComponent } from "../future-survey-config-popup/future-survey-config-popup.component";
import { FutureSurveyLaunchComponent } from "../future-survey-launch/future-survey-launch.component";
import { FutureSurveyInvitationLaunchComponent } from "../future-survey-invitation-launch/future-survey-invitation-launch.component";

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
    private errDialog: AppErrorService,
    private dialog: MatDialog,
    private snack: MatSnackBar
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

  openPopupValidator(data: any = {}, isLaunched?) {
    const rowObject = data;
    this.futureSurveyService
      .getInvitationBySurvey(rowObject.id)
      .subscribe(response => {
        if (rowObject.channel == "2") {
          const invitationId = response.content.id;
          if (invitationId) {
            this.openLauncherPopup(rowObject, isLaunched);
          } else {
            this.snack.open("Invitation Setting chould not found ! ", "close", {
              duration: 4000
            });
          }
        } else {
          this.openLauncherPopup(rowObject, isLaunched);
        }
      });
  }

  openLauncherPopup(data: any = {}, isLaunched?) {
    let title = isLaunched
      ? "Future Survey Status Setting"
      : "Future Survey Launch Pad";

    let dialogRef: MatDialogRef<any> = this.dialog.open(
      FutureSurveyInvitationLaunchComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, isLaunched: isLaunched }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }

      this.loader.open("Launching in Progress....");
      this.futureSurveyService.launchFutureSurvey(res.id).subscribe(
        response => {
          console.log("LAUNCH RESPONSE");
          console.log(response);
          this.loader.close();
          this.getAllFutureSurveys();
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
    });
  }

  openInvitationPopup(data: any = {}, channel?, isNew?) {
    let isPublic = channel == 1 ? true : false;
    let title = isPublic
      ? "Public Future Survey - Invitee Settings"
      : "Private Future Survey - Invitee Settings";

    let dialogRef: MatDialogRef<any> = this.dialog.open(
      FutureSurveyLaunchComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, isNew: isPublic, isSave: isNew }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }

      let launchText = "";
      if (isPublic) {
        launchText = " Public Survey is Launching...";
      } else {
        launchText = " Uploading Invitee Records....";
      }

      this.loader.open(launchText);

      if (isNew) {
        console.log("create NEW INVITE SETTING!");
        this.futureSurveyService.createInvitationSetting(res).subscribe(
          response => {
            console.log("create invitation RESPONSE");
            console.log(response);
            this.loader.close();
            this.getAllFutureSurveys();
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

  openConfigPopup(data: any = {}, isNew?) {
    let title = isNew ? "Create New Survey" : "Update Survey Settings";

    let dialogRef: MatDialogRef<any> = this.dialog.open(
      FutureSurveyConfigPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data, isNew: isNew }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      //this.loader.open();

      if (isNew) {
        console.log("SAVE CONTEXT");
        console.log(res);
        this.futureSurveyService.submitFutureSurveyContent(res).subscribe(
          response => {
            console.log("...............AFTER SAVED.................");
            console.log(response);
            //this.loader.close();
            this.navigateToSurveyEditor(response);
          },
          error => {
            console.log("ERROR LOGESTERS");

            console.log(error);
            this.loader.close();
            this.errDialog.showError({
              title: "Error",
              status: error.status,
              type: "http_error"
            });
          }
        );
      } else {
        this.loader.open("Survey Configurations Updating..");
        console.log("UPDATE CONTEXT");
        console.log("FutureSurvey ID : " + data.id);
        console.log(res);
        this.futureSurveyService
          .updateFutureSurveyConfig(res, data.id)
          .subscribe(
            response => {
              console.log("...............AFTER UPDATED.................");
              console.log(response);
              this.getAllFutureSurveys();
              this.loader.close();
            },
            error => {
              console.log("ERROR LOGESTERS");
              console.log(error);
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
