import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { MatDialog, MatSnackBar, MatDialogRef } from "@angular/material";
import { CreateEventPopupComponent } from "./create-event-popup/create-event-popup.component";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { authProperties } from "./../../../../shared/services/auth/auth-properties";
import { ActivatedRoute } from "@angular/router";
import { UserEventService } from "./user-event.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { AppErrorService } from "app/shared/services/app-error/app-error.service";
import { ComunityService } from "../../community.service";
import { AppWarningService } from "app/shared/services/app-warning/app-warning.service";
import { AppInfoService } from "app/shared/services/app-info/app-info.service";

@Component({
  selector: "app-user-event",
  templateUrl: "./user-event.component.html",
  animations: egretAnimations
})
export class UserEventComponent implements OnInit {
  public events = [];
  public temEvents = [];
  public indeterminateState = false;
  public selectAll = false;
  public comunityName: String;
  public comunityId: String;
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 2;
  public pageSizeArray = [];
  public quota = 0;
  public quotaExpire = false;

  public eventPosterUrl: string;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService,
    private activeRoute: ActivatedRoute,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private userEventService: UserEventService,
    private comunityService: ComunityService,
    private appWarningService: AppWarningService,
    private appInfoService: AppInfoService
  ) {
    this.eventPosterUrl = this.comunityService.getPosterDownloadUrl("event");
  }

  ngOnInit() {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params["id"];
      this.comunityName = params["name"];
    });
    this.fetchAllEvents(this.pageNumber);
    this.comunityService
      .licenseExpireState(userObj.userData.client.id, "events")
      .subscribe(response => {
        const tempRes: any = response;
        this.quotaExpire = tempRes.content.expired;
        this.quota = tempRes.content.quota;
      });
  }

  /*
   * expantion pannel prevent expantion
   * 05-03-2019
   * Prasad Kumara
   */
  stopProp(event) {
    event.stopPropagation();
  }

  /*
   * Event create and update popup window
   * 05-03-2019
   * Prasad Kumara
   */
  eventPopUp(data: any = {}, isNew?) {
    if (this.quotaExpire && isNew) {
      const infoData = {
        title: "License",
        message:
          "Number of events you subscribed has exceeded!</br>" +
          '<small class="text-muted">Do you like to extend the plan?</small>',
        linkData: {
          url: "https://www.google.com/gmail/",
          buttonText: "Extend"
        }
      };
      this.appInfoService.showInfo(infoData);
    } else {
      const title = isNew ? "Create New Event" : "Update Event";
      const dialogRef: MatDialogRef<any> = this.dialog.open(
        CreateEventPopupComponent,
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
          this.loader.open();
          const userObj: any = JSON.parse(
            localStorage.getItem(authProperties.storage_name)
          );
          if (userObj) {
            if (isNew) {
              res["createdUserId"] = userObj.userData.id;
              res["client"] = {
                id: userObj.userData.client.id
              };
              res["community"] = {
                id: this.comunityId
              };
              const clientId = userObj.userData.client.id;
              res.status = this.getEventStatus(res.status);
              this.comunityService
                .licenseExpireState(clientId, "events")
                .subscribe(response => {
                  const tempRes: any = response;
                  this.quotaExpire = tempRes.content.expired;
                  this.quota = tempRes.content.quota;
                  if (!tempRes.content.expired) {
                    this.loader.close();
                    this.createEvent(
                      res,
                      tempRes.content.usage,
                      tempRes.content.quota
                    );
                  }
                });
            } else {
              res["lastModifiedUserId"] = userObj.id;
              res.status = this.getEventStatus(res.status);
              this.userEventService.eventUpdateById(data.id, res).subscribe(
                response => {
                  const temData: any = response;
                  const i = this.events.indexOf(data);
                  this.events[i] = temData.content;
                  this.temEvents = this.events;
                  this.loader.close();
                  this.snack.open("Event Updated", "close", {
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
  }

  createEvent(res, usage, tempQuoata) {
    this.userEventService.createEvent(res).subscribe(
      response => {
        const temData: any = response;
        if (this.events.length === this.pageSize) {
          this.appendNewlyCreatedEvent(temData.content);
        } else {
          this.events.push(temData.content);
          this.temEvents = this.events;
          this.totalRecords += 1;
        }
        // this.fetchAllEvents();
        if (this.totalRecords === this.quota) {
          this.quotaExpire = true;
        }
        this.loader.close();
        if (usage < tempQuoata - 1 && tempQuoata - usage === 2) {
          this.appWarningService.showWarning({
            title: "License",
            message:
              "Your subscription plan is about to expire!</br>One more event remaining!"
          });
        } else if (usage < tempQuoata && tempQuoata - usage === 1) {
          const infoData = {
            title: "License",
            message:
              "Number of events you subscribed has exceeded!</br>" +
              '<small class="text-muted">Do you like to extend the plan?</small>',
            linkData: {
              url: "https://www.google.com/gmail/",
              buttonText: "Extend"
            }
          };
          this.appInfoService.showInfo(infoData);
        } // else {
        this.snack.open("New Event Created", "close", {
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

  /*
   * set selected status of one event
   * 05-03-2019
   * Prasad Kumara
   */
  selectToggleOne(event, data) {
    const i = this.events.indexOf(data);
    if (event.checked) {
      this.events[i].selected = true;
      this.indeterminateState = true;
    } else {
      this.events[i].selected = false;
    }
    this.checkAllSelectedState();
  }

  /*
   * set selectd status of all events
   * 05-03-2019
   * Prasad Kumara
   */
  checkAllSelectedState() {
    let numOfSelectedEvent = 0;
    this.events.forEach(data => {
      if (data.selected) {
        numOfSelectedEvent++;
      }
    });
    if (numOfSelectedEvent === this.events.length) {
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      if (this.selectAll) {
        this.selectAll = false;
        this.indeterminateState = true;
      }
      if (numOfSelectedEvent === 0) {
        this.indeterminateState = false;
      }
    }
  }

  /*
   * Select toggle events status
   * 05-03-2019
   * Prasad Kumara
   */
  selectToggleAll(event) {
    if (event.checked) {
      this.events.forEach(data => {
        data.selected = true;
      });
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      this.events.forEach(data => {
        data.selected = false;
      });
      this.selectAll = false;
      this.indeterminateState = false;
    }
  }

  /*
   * Delete Selected events
   * 05-03-2019
   * Prasad Kumara
   */
  deleteSelectedEvents() {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );
    this.confirmService
      .confirm({ message: "Do You want to Delete Selected Events?" })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedEvents = this.getSelectedEvents();
          const idArray = {
            events: selectedEvents
          };
          const tempPN = this.setPageNumber(selectedEvents.length);
          this.userEventService.deleteEventList(idArray).subscribe(
            response => {
              this.selectAll = false;
              this.indeterminateState = false;
              this.comunityService
                .licenseExpireState(userObj.userData.client.id, "events")
                .subscribe(resData => {
                  const tempRes: any = resData;
                  this.quotaExpire = tempRes.content.expired;
                  this.quota = tempRes.content.quota;
                });
              this.fetchAllEvents(tempPN);
              this.loader.close();
              this.snack.open("Selected Events Deleted", "close", {
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

  /*
   * Delete one event
   * 05-03-2019
   * Prasad Kumara
   */
  deleteOneEvent(data) {
    const userObj: any = JSON.parse(
      localStorage.getItem(authProperties.storage_name)
    );
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const tempPN = this.setPageNumber(1);
          this.userEventService.eventDeleteById(data.id).subscribe(
            response => {
              this.comunityService
                .licenseExpireState(userObj.userData.client.id, "events")
                .subscribe(resData => {
                  const tempRes: any = resData;
                  this.quotaExpire = tempRes.content.expired;
                  this.quota = tempRes.content.quota;
                });
              this.fetchAllEvents(tempPN);
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

  /*
   * Get Selected events
   * 05-03-2019
   * Prasad Kumara
   */
  getSelectedEvents(): any {
    const selectedEvents = [];
    this.events.forEach(data => {
      if (data.selected) {
        selectedEvents.push({ id: data.id });
      }
    });
    return selectedEvents;
  }

  /*
   * Fetch all events using community id
   * 05-03-2019
   * Prasad Kumara
   */
  fetchAllEvents(pageNumber) {
    this.userEventService
      .fetchAllEvents(this.comunityId, pageNumber, this.pageSize)
      .subscribe(
        response => {
          const tempResponse: any = response;
          const tempEvents = this.createDateTimeObject(tempResponse.content);
          this.events = this.temEvents = tempEvents;
          this.totalRecords = tempResponse.pagination.totalRecords;
          this.pageNumber = tempResponse.pagination.pageNumber;
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

  /*
   * Convert String date to Date Time Object
   * 05-03-2019
   * Prasad Kumara
   */
  createDateTimeObject(eventsArray) {
    eventsArray.forEach(event => {
      event.startDateTime = new Date(event.startDateTime);
      event.endDateTime = new Date(event.endDateTime);
      event.createdDate = new Date(event.createdDate);
      // const eventStatus = this.getEventStatus(event.eventStatus);
      // event.eventStatus = eventStatus;
    });
    return eventsArray;
  }

  /*
   * Convert boolean event status to string status
   * 05-03-2019
   * Prasad Kumara
   */
  getEventStatus(eventStatus): string {
    if (eventStatus) {
      return "ACTIVE";
    } else {
      return "INACTIVE";
    }
  }

  /*
   * Create pagination page size element array
   * 07-03-2019
   * Prasad Kumara
   */
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

  /*
   * Search Event in viewed event list
   * 07-03-2019
   * Prasad Kumara
   */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temEvents[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temEvents.filter(function (data) {
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
    this.events = rows;
  }

  /*
   * Page size change and update event list according to the page size
   * 06-03-2019
   * Prasad Kumara
   */
  changeValue() {
    this.pageNumber = 1;
    this.fetchAllEvents(this.pageNumber);
  }

  /*
   * Append newly created event to the event array
   * 06-03-2019
   * Prasad Kumara
   */
  appendNewlyCreatedEvent(event) {
    const tempArray = [];
    for (let i = this.events.length; i >= 1; i--) {
      if (i === this.events.length) {
        tempArray.push(event);
      } else {
        tempArray.push(this.events[i]);
      }
    }
    this.events = this.temEvents = tempArray;
    this.totalRecords += 1;
    this.createPageNavigationBar();
  }

  /*
   * Create pagination bottom navigation bar
   * 07-03-2019
   * Prasad Kumara
   */
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

  /*
   * Set page number according to the total records
   * 07-03-2019
   * Prasad Kumara
   */
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
