import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { NavigationExtras, Router, ActivatedRoute } from "@angular/router";
import { MatDialogRef, MatDialog } from "@angular/material";
import { EditMailPopupComponent } from "../edit-mail-popup/edit-mail-popup.component";


@Component({
  selector: "app-future-survey-invitee-group-test",
  templateUrl: "./future-survey-invitee-group-test.component.html",
  animations: egretAnimations
})
export class FutureSurveyInviteeGroupTestComponent implements OnInit {
  sub: any;
  public allFailedInteraction: any[];

  public id;


  constructor(
    private futureSurveyService: FutureSurveyService,
    private conversionService: AppDataConversionService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let id = params["id"];
      this.getFailedInteraction(id);
    });
  }


  getFailedInteraction(surveyId) {
    console.log('ID : ' + surveyId);
    this.futureSurveyService
      .getFailedInteractions(surveyId)
      .subscribe(reponse => {
        console.log(reponse);
        this.allFailedInteraction = reponse.content;
      });
  }

  openPopupEditmail(id, name, username, email) {
    let item = {}
    item["id"] = id;
    item["name"] = name;
    item["username"] = username;
    item["email"] = email;
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      EditMailPopupComponent,
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
        this.id = id;
        // this.updateInvitationDetails(id, res.name, res.username, res.email);
      }
      // this.loader.open();
    });
  }

  // updateInvitationDetails(id, name, username, email) {
  //   let submitRequest: InvitationTemplate = new InvitationTemplate(id, name, username, email);
  //   this.futureSurveyService.updateInvitation(submitRequest).subscribe(
  //     response => {
  //       console.log("SUCCESS");
  //       console.log(response);
  //     },
  //     error => {
  //       console.log("ERROR");
  //       console.log(error);
  //     }
  //   );
  // }

  resendEmail() {
    this.futureSurveyService.resendSingleInvitation(this.id).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );
  }



}



export class InvitationTemplate {
  constructor(public id, public name, public username, public email) { }
}