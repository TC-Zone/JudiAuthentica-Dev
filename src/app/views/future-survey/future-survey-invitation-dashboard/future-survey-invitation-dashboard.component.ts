import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { FutureSurveyService } from "../future-survey.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { EditMailPopupComponent } from "../edit-mail-popup/edit-mail-popup.component";


@Component({
  selector: "app-future-invitation-dashboard",
  templateUrl: "./future-survey-invitation-dashboard.component.html",
  animations: egretAnimations
})
export class FutureSurveyInvitationDashboardComponent implements OnInit {
  sub: any;
  public allFailedInteraction: any[];
  public inviteeId;
  public surveyId;
  public resendBtnStatus = false;


  constructor(
    private futureSurveyService: FutureSurveyService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.surveyId = params["surveyId"];
      this.getFailedInteraction(this.surveyId);
    });
  }


  getFailedInteraction(surveyId) {
    console.log('ID : ' + surveyId);
    this.futureSurveyService
      .getFailedInteractions(surveyId)
      .subscribe(reponse => {
        console.log(reponse.content.length);
        if (reponse.content.length === 0) {
          this.resendBtnStatus = true;
        } else {
          this.resendBtnStatus = false;
        }
        this.allFailedInteraction = reponse.content;
      });
  }

  openPopupEditmail(inviteeId, name, username, email) {
    let item = {}
    item["id"] = inviteeId;
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
        this.inviteeId = inviteeId;
        this.updateInvitationDetails(inviteeId, res.name, res.username, res.email);
      }
      // this.loader.open();
    });
  }

  updateInvitationDetails(inviteeId, name, username, email) {
    let submitRequest: InvitationTemplate = new InvitationTemplate(name, username, email);
    this.futureSurveyService.updateInvitee(inviteeId, submitRequest).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);
        this.getFailedInteraction(this.surveyId);
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );
  }

  resendEmail(interactionId) {
    this.futureSurveyService.resendSingleInvitation(interactionId).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);

        if (response.content.status) {
          this.snackBar.open('Email Successfully Sent!', 'close', { duration: 2000 });
        } else {
          this.snackBar.open('Email Failed to Sent!', 'close', { duration: 2000 });
        }
        this.getFailedInteraction(this.surveyId);
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );
  }

  resendAllEmails() {
    this.resendBtnStatus = true;
    this.futureSurveyService.resendAllInvitations(this.surveyId).subscribe(
      response => {
        console.log("SUCCESS");
        console.log(response);

        if (response.content.length === 0 ) {
          this.snackBar.open('All Emails Successfully Sent!', 'close', { duration: 2000 });
        } else if (response.content.length === 1) {
          this.snackBar.open('A Email Failed to Sent!', 'close', { duration: 2000 });
        } else {
          this.snackBar.open(response.content.length +' Emails Failed to Sent!', 'close', { duration: 2000 });
        }

        this.getFailedInteraction(this.surveyId);
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );
  }



}



export class InvitationTemplate {
  constructor(public name, public username, public email) { }
}