import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { MatSnackBar, MatDialogRef, MatDialog } from "@angular/material";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { authProperties } from "app/shared/services/auth/auth-properties";
import { FutureSurveyService } from "../future-survey.service";
import { AppInfoService } from "app/shared/services/app-info/app-info.service";
import { AppErrorService } from "app/shared/services/app-error/app-error.service";
import { CreateInviteePopupComponent } from "./create-invitee-popup/create-invitee-popup.component";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { InviteeCreateeReq } from "app/model/CommunityModel.model";

@Component({
  selector: "group-invitees",
  templateUrl: "./group-invitees.component.html",
  animations: egretAnimations
})
export class GroupInviteesComponent implements OnInit {
  public inviteeGroupId;
  public inviteeGroupName;
  public filter = "";
  public customFieldsLength;
  public filterValueArray = ['All', 'Draft', 'Sent', 'Responded'];
  public filterValue = "All";
  public numOfSelectedInviteeForInvitation = 0;


  public emailSentStatus = {
    0: { id: 0, status: "Draft", style: "accent" },
    1: { id: 1, status: "Sent", style: "primary" },
    2: { id: 2, status: "Failed", style: "warn" }
  };

  public responStatus = [
    { id: 0, status: "Pending", style: "accent" },
    { id: 1, status: "Responded", style: "primary" }
  ];

  public invitees = [];
  public temInvitees = [];
  public indeterminateState = false;
  public selectAll = false;
  public comunityName: String;
  public comunityId: String;
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;
  public pageSizeArray = [10, 20];
  public quota = 0;
  public quotaExpire = false;

  public promoPosterUrl: string;

  constructor(
    private futureSurveyService: FutureSurveyService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private loader: AppLoaderService,
    private confirmService: AppConfirmService,
    private errDialog: AppErrorService,
    private appInfoService: AppInfoService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.inviteeGroupId = params["inviteeGroupId"];
      this.inviteeGroupName = params["inviteeGroupName"];
      this.customFieldsLength = params["customFieldsLength"];
    });
    this.fetchAllInvitees(this.pageNumber);
  }


  fetchAllInvitees(pageNumber, firstTime = false) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.futureSurveyService
        .getInviteesByFilter(this.inviteeGroupId, pageNumber, this.pageSize, this.filter).subscribe(response => {
          console.log(response);
          const resData: any = response;
          this.invitees = this.temInvitees = resData.content;
          this.totalRecords = resData.pagination.totalRecords;
          this.pageNumber = resData.pagination.pageNumber;
          this.createPageNavigationBar();
          this.createPaginationPageSizeArray();
        });
    }
  }

  filterOnChange() {
    this.filter = "";
    if (this.filterValue === "Draft") {
      this.filter = "&emailSentStatus=0&responStatus=0";
    } else if (this.filterValue === "Sent") {
      this.filter = "&emailSentStatus=1&responStatus=0";
    } else if (this.filterValue === "Responded") {
      this.filter = "&emailSentStatus=1&responStatus=1";
    }
    this.fetchAllInvitees(this.pageNumber);
  }

  stopProp(invitee) {
    invitee.stopPropagation();
  }

  inviteePopUp(data: any = {}, isNew?) {
    console.log(data);

    if (this.quotaExpire && isNew) {
      const infoData = {
        title: "License",
        message:
          "You subscribed number of invitees have expired!</br>" +
          '<small class="text-muted">Do you like to extend the plan?</small>',
        linkData: {
          url: "https://www.google.com/gmail/",
          buttonText: "Extend"
        }
      };
      this.appInfoService.showInfo(infoData);
    } else {
      const title = isNew ? "Create New Invitee" : "Update Invitee";
      const dialogRef: MatDialogRef<any> = this.dialog.open(
        CreateInviteePopupComponent,
        {
          width: "720px",
          disableClose: true,
          data: { title: title, payload: data, isNew: isNew, customFieldsLength: this.customFieldsLength }
        }
      );
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          return;
        } else {

          console.log(res);
          let inviteeId = data.id;


          this.loader.open();
          if (isNew) {

            let inviteeGroup = { id: this.inviteeGroupId };
            // let inviteeGroup:InviteeGroupData[] = [];
            // inviteeGroup.push(new InviteeGroupData(this.inviteeGroupId));
            let req: InviteeCreateeReq = new InviteeCreateeReq(res.name, res.email, res.username, res.password, res.customField1, res.customField2, res.customField3, inviteeGroup);
            this.createInvitee(req);
          } else {
            // let req: FeedbackUpdateReq = new FeedbackUpdateReq(res.name, this.getFeedbackStatus(res.status), userObj.id);
            this.futureSurveyService.updateInvitee(inviteeId, res).subscribe(
              response => {
                const i = this.invitees.indexOf(data);
                this.invitees[i] = response.content;
                this.temInvitees = this.invitees;
                this.loader.close();
                this.snack.open("Invitee Updated", "close", {
                  duration: 2000
                });
              },
              error => {
                this.loader.close();
                if (error.status !== 401) {
                  this.errDialog.showError(error);
                }
              }
            );
          }

        }
      });
    }
  }

  createInvitee(res) {
    this.futureSurveyService.createInvitee(res).subscribe(
      response => {
        const temData: any = response;
        console.log(response);
        this.fetchAllInvitees(this.pageNumber);
        this.loader.close();

        this.snack.open("New Invitee Created", "close", {
          duration: 2000
        });
        // }
      },
      error => {
        this.loader.close();
        if (error.status !== 401) {
          this.errDialog.showError(error);
        }
      }
    );
  }

  selectToggleOne(invitee, data) {

    const i = this.invitees.indexOf(data);
    if (invitee.checked) {
      this.invitees[i].selected = true;
      this.indeterminateState = true;
    } else {
      this.invitees[i].selected = false;
    }
    this.checkAllSelectedState();
  }

  checkAllSelectedState() {
    let numOfSelectedInvitee = 0;
    let numOfSelectedInviteeForInvitation = 0;
    this.invitees.forEach(data => {
      if (data.selected) {
        numOfSelectedInvitee++;
        if (data.futureSurveyInteraction.emailSentStatus !== 1) {
          numOfSelectedInviteeForInvitation++;
        }
      }
    });
    this.numOfSelectedInviteeForInvitation = numOfSelectedInviteeForInvitation;
    if (numOfSelectedInvitee === this.invitees.length) {
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      if (this.selectAll) {
        this.selectAll = false;
        this.indeterminateState = true;
      }
      if (numOfSelectedInvitee === 0) {
        this.indeterminateState = false;
      }
    }
  }

  selectToggleAll(invitee) {
    if (invitee.checked) {
      this.invitees.forEach(data => {
        data.selected = true;
      });
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      this.invitees.forEach(data => {
        data.selected = false;
      });
      this.selectAll = false;
      this.indeterminateState = false;
    }
  }

  deleteInvitee(data) {
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.futureSurveyService.inviteeDeleteById(data.id).subscribe(
            response => {
              this.fetchAllInvitees(this.pageNumber);
              this.loader.close();
              this.snack.open(`${data.name} Deleted`, "close", {
                duration: 2000
              });
            },
            error => {
              this.loader.close();
              if (error.status !== 401) {
                this.errDialog.showError(error);
              }
            }
          );
        }
      });
  }


  deleteSelectedInvitees() {
    this.confirmService
      .confirm({ message: "Do You want to Delete Selected Invitees?" })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedInvitees = this.getSelectedInviteesForDelete();
          const idArray = { invitees: selectedInvitees };
          this.futureSurveyService.deleteInviteeList(idArray).subscribe(
            response => {
              this.fetchAllInvitees(this.pageNumber);
              this.loader.close();
              this.snack.open(`Invitees Deleted`, "close", {
                duration: 2000
              });
            },
            error => {
              this.loader.close();
              if (error.status !== 401) {
                this.errDialog.showError(error);
              }
            }
          );
        }
      });
  }

  getSelectedInviteesForDelete(): any {
    const selectedInvitees = [];
    console.log(this.invitees);

    this.invitees.forEach(data => {
      if (data.selected) {
        selectedInvitees.push({ id: data.id });
      }
    });
    return selectedInvitees;
  }

  getSelectedInviteesForSendMail(): any {
    const selectedInvitees = [];
    this.invitees.forEach(data => {
      if (data.selected && data.futureSurveyInteraction.emailSentStatus !== "1") {
        selectedInvitees.push({ id: data.futureSurveyInteraction.id });
      }
    });
    return selectedInvitees;
  }


  sendMail(group, id?) {

    let selectedInvitees = { "interactions": [] };
    if (group) {
      selectedInvitees["interactions"] = this.getSelectedInviteesForSendMail();
    } else {
      selectedInvitees["interactions"].push({ id: id });
    }
    console.log(selectedInvitees);

    this.futureSurveyService.sendInvitation(selectedInvitees).subscribe(
      response => {
        this.fetchAllInvitees(this.pageNumber);
        this.selectAll = false;
        this.indeterminateState = false;
        this.loader.close();
      },
      error => {
        this.loader.close();
        if (error.status !== 401) {
          this.errDialog.showError(error);
        }
      }
    );
  }


  updateFilter(invitee) {
    const val = invitee.target.value.toLowerCase();
    const columns = Object.keys(this.temInvitees[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temInvitees.filter(function (data) {
      for (let i = 0; i <= columns.length; i++) {
        const col = columns[i];
        if (
          data[col] &&
          data[col]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.invitees = rows;
  }

  // /*
  //  * Page size change and update invitee list according to the page size
  //  * 06-03-2019
  //  * Prasad Kumara
  //  */
  changeValue() {
    console.log(this.pageSize);

    this.pageNumber = 1;
    this.fetchAllInvitees(this.pageNumber);
  }

  // /*
  //  * Create pagination page size element array
  //  * 06-03-2019
  //  * Prasad Kumara
  //  */
  createPaginationPageSizeArray() {
    let totalRec = this.totalRecords;
    const tempArray = [];
    if (totalRec > 10) {
      const rem = totalRec % 10;
      if (rem !== 0) {
        totalRec = totalRec + 10;
      }
      for (let i = 10; i < totalRec;) {
        tempArray.push(i);
        i = i + 10;
      }
    } else {
      tempArray.push(10);
    }
    this.pageSizeArray = tempArray;
  }

  // /*
  //  * Append newly created invitee to the invitee array
  //  * 06-03-2019
  //  * Prasad Kumara
  //  */
  appendNewlyCreatedInvitee(invitee) {
    const tempArray = [];
    for (let i = 1; i <= this.invitees.length; i++) {
      if (i === this.invitees.length) {
        tempArray.push(invitee);
      } else {
        tempArray.push(this.invitees[i]);
      }
    }
    this.invitees = this.temInvitees = tempArray;
    this.totalRecords += 1;
    this.createPageNavigationBar();
  }

  // /*
  //  * Create pagination bottom navigation bar
  //  * 06-03-2019
  //  * Prasad Kumara
  //  */
  createPageNavigationBar() {
    const devider = this.totalRecords / this.pageSize;
    const numOfPage = Math.ceil(devider);
    if (numOfPage > 1) {
      const temPages = [];
      for (let i = 1; i <= numOfPage; i++) {
        temPages.push(i);
      }
      this.totalPages = temPages;
    } else {
      this.totalPages = [];
    }
  }

  // /*
  //  * Set page number according to the total records
  //  * 06-03-2019
  //  * Prasad Kumara
  //  */
  setPageNumber(numOfPromo): number {
    const tempTR = this.totalRecords - numOfPromo;
    const devider = tempTR / this.pageSize;
    if (devider < this.totalPages.length) {
      return this.pageNumber - 1;
    } else {
      return this.pageNumber;
    }
  }

  // /*
  //  * Convert boolean invitee status to string status
  //  * 07-03-2019
  //  * Prasad Kumara
  //  */
  // getInviteeStatus(inviteeStatus): string {
  //   if (inviteeStatus) {
  //     return "ACTIVE";
  //   } else {
  //     return "INACTIVE";
  //   }
  // }
}
