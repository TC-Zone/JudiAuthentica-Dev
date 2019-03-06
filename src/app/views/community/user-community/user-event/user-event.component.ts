import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { CreateEventPopupComponent } from './create-event-popup/create-event-popup.component';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { authProperties } from './../../../../shared/services/auth/auth-properties';
import { ActivatedRoute } from '@angular/router';
import { UserEventService } from './user-event.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  animations: egretAnimations
})
export class UserEventComponent implements OnInit {

  public events;
  public indeterminateState = false;
  public selectAll = false;
  public comunityName: String;
  public comunityId: String;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService,
    private activeRoute: ActivatedRoute,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private userEventService: UserEventService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.fetchAllEventsByCommunityId();
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
    const title = isNew ? 'Create New Event' : 'Update Event';
    const dialogRef: MatDialogRef<any> = this.dialog.open(
      CreateEventPopupComponent,
      {
        width: '720px',
        disableClose: true,
        data: { title: title, payload: data, isNew: isNew }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      } else {
        this.loader.open();
        const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
        if (userObj) {
          if (isNew) {
            res['createdUserId'] = userObj.id;
            res['client'] = {
              id: userObj.userData.client.id
            };
            res['community'] = {
              id: this.comunityId
            };
            this.userEventService.createEvent(res)
              .subscribe(
                response => {
                  this.fetchAllEventsByCommunityId();
                  this.loader.close();
                  this.snack.open('New Event Created', 'close', {
                    duration: 2000
                  });
                },
                error => {
                  this.loader.close();
                  if (error.status !== 401) {
                    this.errDialog.showError({
                      title: 'Error',
                      status: error.status,
                      type: 'http_error'
                    });
                  }
                }
              );
          } else {
            res['lastModifiedUserId'] = userObj.id;
            const eventStatus = this.getEventStatus(res.eventStatus);
            res.eventStatus = eventStatus;
            this.userEventService.eventUpdateById(data.id, res)
              .subscribe(
                response => {
                  this.fetchAllEventsByCommunityId();
                  this.loader.close();
                  this.snack.open('Event Updated', 'close', {
                    duration: 2000
                  });
                },
                error => {
                  this.loader.close();
                  if (error.status !== 401) {
                    this.errDialog.showError({
                      title: 'Error',
                      status: error.status,
                      type: 'http_error'
                    });
                  }
                }
              );
          }
        }
      }
    });
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
    this.confirmService
      .confirm({ message: 'Do You want to Delete Selected Events?' })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedEvents = this.getSelectedEvents();
          selectedEvents.forEach(event => {
            this.eventDeleteById(event.id);
          });
          this.selectAll = false;
          this.indeterminateState = false;
        }
        this.fetchAllEventsByCommunityId();
        this.loader.close();
        this.snack.open('Selected Events Deleted', 'close', {
          duration: 2000
        });
    });
  }

  /*
  * Delete one event
  * 05-03-2019
  * Prasad Kumara
  */
  deleteOneEvent(data) {
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.eventDeleteById(data.id);
        }
        this.fetchAllEventsByCommunityId();
        this.loader.close();
        this.snack.open(`${data.name} Deleted`, 'close', {
          duration: 2000
        });
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
        selectedEvents.push(data);
      }
    });
    return selectedEvents;
  }

  /*
  * Fetch all events using community id
  * 05-03-2019
  * Prasad Kumara
  */
  fetchAllEventsByCommunityId() {
    this.userEventService.fetchAllEventsByCommunityId(this.comunityId)
      .subscribe(
        response => {
          const tempResponse: any = response;
          const tempEvents = this.createDateTimeObject(tempResponse.content);
          const tempPagination = tempResponse.pagination;
          this.events = tempEvents;
        },
        error => {
          this.errDialog.showError({
            title: 'Error',
            status: error.status,
            type: 'http_error'
          });
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
      const eventStatus = this.getEventStatus(event.eventStatus);
      event.eventStatus = eventStatus;
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
      return 'A';
    } else {
      return 'I';
    }
  }

  /*
  * Delete Event by event id
  * 05-03-2019
  * Prasad Kumara
  */
  eventDeleteById(eventId) {
    this.userEventService.eventDeleteById(eventId)
      .subscribe(
        response => {

        },
        error => {
          this.errDialog.showError({
            title: 'Error',
            status: error.status,
            type: 'http_error'
          });
        }
      );
  }

}
