import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { MatDialog, MatSnackBar, MatDialogRef } from "@angular/material";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { authProperties } from "./../../../../shared/services/auth/auth-properties";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { AppErrorService } from "app/shared/services/app-error/app-error.service";
import { ComunityService } from "../../community.service";
import { AppWarningService } from "app/shared/services/app-warning/app-warning.service";
import { AppInfoService } from "app/shared/services/app-info/app-info.service";
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { CreateFeedbackPopupComponent } from './create-feedback-popup/create-feedback-popup.component';
import { UserFeedbackService } from '../user-feedback/user-feedback.service';
import { FeedbackCreateReq, CommunityData, FutureSurveyData, FeedbackUpdateReq } from 'app/model/CommunityModel.model';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  animations: egretAnimations
})
export class UserFeedbackComponent implements OnInit {

  public userId;
  public clientId;
  public statusArray = {
    'ACTIVE': "primary",
    'INACTIVE': "accent"
  };

  public quota = 0;
  public quotaExpire = false;
  public usage = 0;


  public feedbacks = [];
  public temFeedbacks = [];
  public indeterminateState = false;
  public selectAll = false;
  public communityName: string;
  public communityId: string;
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;
  public pageSizeArray = [];

  public feedbackPosterUrl: string;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService,
    private activeRoute: ActivatedRoute,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private userFeedbackService: UserFeedbackService,
    private communityService: ComunityService,
    private appWarningService: AppWarningService,
    private appInfoService: AppInfoService,
    private router: Router
  ) {
    this.feedbackPosterUrl = this.communityService.getPosterDownloadUrl("feedback");
  }

  ngOnInit() {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );

    this.userId = userObj.userData.id;
    this.clientId = userObj.userData.client.id;

    this.activeRoute.queryParams.subscribe(params => {
      this.communityId = params["id"];
      this.communityName = params["name"];
    });

    this.fetchAllFeedbacks(this.pageNumber);
    this.communityService
      .licenseExpireState(userObj.userData.client.id, "feedbacks")
      .subscribe(response => {
        const tempRes: any = response;
        this.quotaExpire = tempRes.content.expired;
        this.quota = tempRes.content.quota;
        this.usage = tempRes.content.usage;
      });
  }


  navigateToSurveyEditor(data) {

    this.userFeedbackService.getFeedbackById(data.id).subscribe(successResp => {
      console.log(successResp);
      let extraParam: NavigationExtras = {
        queryParams: {
          surveyId: successResp.content.surveyId,
          communityId: this.communityId,
          communityName: this.communityName
        }
      };
      this.router.navigate(["future-survey/sEditor"], extraParam);
    },
      error => {
        this.errDialog.showError(error);
      }
    );

  }

  feedbackPopUp(data: any = {}, isNew?) {
    this.communityService.licenseExpireState(this.clientId, "feedbacks").subscribe(response => {
      const tempRes: any = response;
      this.quotaExpire = tempRes.content.expired;
      this.quota = tempRes.content.quota;
      this.usage = tempRes.content.usage;

      if (this.quotaExpire && isNew) {
        const infoData = {
          title: "License",
          message:
            "You subscribed number of feedbacks have expired!</br>" +
            '<small class="text-muted">Do you like to extend the plan?</small>',
          linkData: {
            url: "https://www.google.com/gmail/",
            buttonText: "Extend"
          }
        };
        this.appInfoService.showInfo(infoData);
      } else {
        const title = isNew ? "Create New Feedback" : "Update Feedback";
        const dialogRef: MatDialogRef<any> = this.dialog.open(
          CreateFeedbackPopupComponent,
          {
            width: "720px",
            disableClose: true,
            data: { title: title, payload: data, isNew: isNew }
          }
        );
        dialogRef.afterClosed().subscribe(res => {
          if (!res) {
            return;
          } else {
            const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
            if (userObj) {
              if (isNew) {
                let languageJson = "{\"def\":\"en\"}";
                let compatibility = "2";
                let pages = [{ name: 'page1' }];
                let jsonContent = "\"{\\\"locale\\\":\\\"en\\\",\\\"title\\\":\\\"" + res.name + "\\\",\\\"clientId\\\":\\\"faa6643aca8c5318a9583178795542cf\\\",\\\"pages\\\":[{\\\"name\\\":\\\"page1\\\"}]}\"";

                let fsreq: FutureSurveyData = new FutureSurveyData(res.name, this.clientId, "1", "1", languageJson, compatibility, pages, jsonContent);
                let req: FeedbackCreateReq = new FeedbackCreateReq(res.name, this.userId, new CommunityData(this.communityId), fsreq);

                this.createFeedback(req, tempRes.content.usage, tempRes.content.quota);
              } else {
                let req: FeedbackUpdateReq = new FeedbackUpdateReq(res.name, this.getFeedbackStatus(res.status), userObj.id);
                this.userFeedbackService.feedbackUpdateById(data.id, req).subscribe(
                  response => {
                    const temData: any = response;
                    const i = this.feedbacks.indexOf(data);
                    this.feedbacks[i] = temData.content;
                    this.temFeedbacks = this.feedbacks;
                    this.loader.close();
                    this.snack.open("Feedback Updated", "close", {
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
          }
        });
      }

    });

  }

  createFeedback(res, usage, tempQuoata) {
    this.userFeedbackService.createFeedback(res).subscribe(response => {
      const temData: any = response;
      let feedbackId = temData.content.id;

      this.usage += 1;
      if (this.usage === this.quota) {
        this.quotaExpire = true;
      }

      let remain = this.quota - this.usage;
      if (remain === 1) {
        this.appWarningService.showWarning({
          title: "License",
          message:
            "Your subscription plan is about to expire!</br>One more feedback remaining!"
        });
      } else if (remain === 0) {
        const infoData = {
          title: "License",
          message:
            "You subscribed number of feedbacks have expired!</br>" +
            '<small class="text-muted">Do you like to extend the plan?</small>',
          linkData: {
            url: "https://www.google.com/gmail/",
            buttonText: "Extend"
          }
        };
        this.appInfoService.showInfo(infoData);
      }

      this.snack.open("New Feedback Created", "close", {
        duration: 2000
      });
      this.fetchAllFeedbacks(this.pageNumber);
    },
      error => {
        this.loader.close();
        if (error.status !== 401) {
          this.errDialog.showError(error);
        }
      }
    );
  }

  selectToggleOne(feedback, data) {
    const i = this.feedbacks.indexOf(data);
    if (feedback.checked) {
      this.feedbacks[i].selected = true;
      this.indeterminateState = true;
    } else {
      this.feedbacks[i].selected = false;
    }
    this.checkAllSelectedState();
  }

  checkAllSelectedState() {
    let numOfSelectedFeedback = 0;
    this.feedbacks.forEach(data => {
      if (data.selected) {
        numOfSelectedFeedback++;
      }
    });
    if (numOfSelectedFeedback === this.feedbacks.length) {
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      if (this.selectAll) {
        this.selectAll = false;
        this.indeterminateState = true;
      }
      if (numOfSelectedFeedback === 0) {
        this.indeterminateState = false;
      }
    }
  }

  selectToggleAll(feedback) {
    if (feedback.checked) {
      this.feedbacks.forEach(data => {
        data.selected = true;
      });
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      this.feedbacks.forEach(data => {
        data.selected = false;
      });
      this.selectAll = false;
      this.indeterminateState = false;
    }
  }

  deleteSelectedFeedbacks() {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );
    this.confirmService
      .confirm({ message: "Do You want to Delete Selected Feedbacks?" })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedFeedbacks = this.getSelectedFeedbacks();
          const idArray = {
            feedbacks: selectedFeedbacks
          };
          const tempPN = this.setPageNumber(selectedFeedbacks.length);
          this.userFeedbackService.deleteFeedbackList(idArray).subscribe(
            response => {
              this.selectAll = false;
              this.indeterminateState = false;
              this.communityService
                .licenseExpireState(userObj.userData.client.id, "feedbacks")
                .subscribe(resData => {
                  const tempRes: any = resData;
                  this.quotaExpire = tempRes.content.expired;
                  this.quota = tempRes.content.quota;
                  this.usage = tempRes.content.usage;
                });
              this.fetchAllFeedbacks(tempPN);
              this.loader.close();
              this.snack.open("Selected Feedbacks Deleted", "close", {
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

  deleteOneFeedback(data) {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const tempPN = this.setPageNumber(1);
          this.userFeedbackService.feedbackDeleteById(data.id).subscribe(
            response => {
              this.communityService
                .licenseExpireState(userObj.userData.client.id, "feedbacks")
                .subscribe(resData => {
                  const tempRes: any = resData;
                  this.quotaExpire = tempRes.content.expired;
                  this.quota = tempRes.content.quota;
                  this.usage = tempRes.content.usage;
                });
              this.fetchAllFeedbacks(tempPN);
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

  getSelectedFeedbacks(): any {
    const selectedFeedbacks = [];
    this.feedbacks.forEach(data => {
      if (data.selected) {
        selectedFeedbacks.push({ id: data.id });
      }
    });
    return selectedFeedbacks;
  }

  fetchAllFeedbacks(pageNumber) {
    this.userFeedbackService
      .getCommunityFeedbacks(this.communityId, pageNumber, this.pageSize)
      .subscribe(
        response => {
          const tempResponse: any = response;
          const tempFeedbacks = this.createDateTimeObject(tempResponse.content);
          this.feedbacks = this.temFeedbacks = tempFeedbacks;
          this.totalRecords = tempResponse.pagination.totalRecords;
          this.pageNumber = tempResponse.pagination.pageNumber;
          console.log(this.feedbacks);

          this.createPageNavigationBar();
          this.createPaginationPageSizeArray();
        },
        error => {
          if (error.status !== 401) {
            this.errDialog.showError(error);
          }
        }
      );
  }

  createDateTimeObject(feedbacksArray) {
    feedbacksArray.forEach(feedback => {
      feedback.createdDate = new Date(feedback.createdDate);
    });
    return feedbacksArray;
  }

  getFeedbackStatus(feedbackStatus): string {
    if (feedbackStatus) {
      return "ACTIVE";
    } else {
      return "INACTIVE";
    }
  }

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

  updateFilter(feedback) {
    const val = feedback.target.value.toLowerCase();
    const columns = Object.keys(this.temFeedbacks[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temFeedbacks.filter(function (data) {
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
    this.feedbacks = rows;
  }

  changeValue() {
    this.pageNumber = 1;
    this.fetchAllFeedbacks(this.pageNumber);
  }

  appendNewlyCreatedFeedback(feedback) {
    const tempArray = [];
    for (let i = this.feedbacks.length; i >= 1; i--) {
      if (i === this.feedbacks.length) {
        tempArray.push(feedback);
      } else {
        tempArray.push(this.feedbacks[i]);
      }
    }
    this.feedbacks = this.temFeedbacks = tempArray;
    this.totalRecords += 1;
    this.createPageNavigationBar();
  }

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

  setPageNumber(numOfPromo): number {
    const tempTR = this.totalRecords - numOfPromo;
    const devider = tempTR / this.pageSize;
    if (devider < this.totalPages.length) {
      return this.pageNumber - 1;
    } else {
      return this.pageNumber;
    }
  }
}
