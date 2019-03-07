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
    this.fetchAllEvents(this.pageNumber);
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
                  const temData: any = response;
                  if (this.events.length === this.pageSize) {
                    this.appendNewlyCreatedEvent(temData.content);
                  } else {
                    temData.content['createdDate'] = new Date();
                    console.log(temData.content);
                    this.events.push(temData.content);
                    this.temEvents = this.events;
                    this.totalRecords += 1;
                  }
                  // this.fetchAllEvents();
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
                  const temData: any = response;
                  const i = this.events.indexOf(data);
                  this.events[i] = temData.content;
                  this.temEvents = this.events;
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
          const idArray = {
            events: selectedEvents
          };
          const tempPN = this.setPageNumber(selectedEvents.length);
          this.userEventService.deleteEventList(idArray)
            .subscribe(
              response => {
                this.selectAll = false;
                this.indeterminateState = false;
                this.fetchAllEvents(tempPN);
                this.loader.close();
                this.snack.open('Selected Events Deleted', 'close', {
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
          const tempPN = this.setPageNumber(1);
          this.userEventService.eventDeleteById(data.id)
            .subscribe(
              response => {
                this.fetchAllEvents(tempPN);
                this.loader.close();
                this.snack.open(`${data.name} Deleted`, 'close', {
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
    this.userEventService.fetchAllEvents(this.comunityId, pageNumber, this.pageSize)
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
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
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

  createPaginationPageSizeArray() {
    let totalRec = this.totalRecords;
    const tempArray = [];
    if (totalRec > this.pageSize) {
      const rem = totalRec % this.pageSize;
      if (rem !== 0) {
        totalRec = totalRec + this.pageSize;
      }
      for (let i = this.pageSize; i < totalRec; ) {
        tempArray.push(i);
        i = i + this.pageSize;
      }
    } else {
      tempArray.push(this.pageSize);
    }
    this.pageSizeArray = tempArray;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temEvents[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temEvents.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        const col = columns[i];
        if (data[col] && data[col].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.events = rows;
  }

  changeValue() {
    this.pageNumber = 1;
    this.fetchAllEvents(this.pageNumber);
  }

  appendNewlyCreatedEvent(event) {
    const tempArray = [];
    event['createdDate'] = new Date();
    console.log(event);
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
