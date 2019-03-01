import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { CreateEventPopupComponent } from './create-event-popup/create-event-popup.component';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  animations: egretAnimations
})
export class UserEventComponent implements OnInit {

  public events = [
    {
      id: 'event_id_01',
      name: 'Event Name 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Blandit volutpat maecenas volutpat blandit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vitae sapien pellentesque habitant morbi tristique. Scelerisque purus semper eget duis at tellus at. Varius duis at consectetur lorem donec massa. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Semper viverra nam libero justo. Vitae auctor eu augue ut lectus arcu. Semper feugiat nibh sed pulvinar proin. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Viverra nam libero justo laoreet sit amet cursus sit amet.',
      startDate: new Date(2019, 1, 2, 8, 0, 0, 0),
      endDate: new Date(2019, 1, 3, 16, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: false,
      selected: false
    },
    {
      id: 'event_id_02',
      name: 'Event Name 02',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Blandit volutpat maecenas volutpat blandit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vitae sapien pellentesque habitant morbi tristique. Scelerisque purus semper eget duis at tellus at. Varius duis at consectetur lorem donec massa. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Semper viverra nam libero justo. Vitae auctor eu augue ut lectus arcu. Semper feugiat nibh sed pulvinar proin. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Viverra nam libero justo laoreet sit amet cursus sit amet.',
      startDate: new Date(2019, 1, 24, 9, 30, 0, 0),
      endDate: new Date(2019, 1, 24, 15, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: true,
      selected: false
    }
  ];
  public indeterminateState = false;
  public selectAll = false;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService
  ) { }

  ngOnInit() {
  }

  stopProp(event) {
    event.stopPropagation();
  }

  eventPopUp(data: any = {}, isNew?) {
    const title = isNew ? 'Create New Event' : 'Update Event';
    const dialogRef: MatDialogRef<any> = this.dialog.open(
      CreateEventPopupComponent,
      {
        width: '720px',
        disableClose: true,
        data: { title: title, payload: data }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      } else {
        if (isNew) {
          console.log('------------ Create new Event ------------');
          console.log(res);
          this.snack.open('New Event Created', 'close', {
            duration: 2000
          });
        } else {
          console.log('------------ Update Event ------------');
          console.log(res);
          this.snack.open('Event Updated', 'close', {
            duration: 2000
          });
        }
      }
    });
  }

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

  deleteSelectedEvent() {
    this.confirmService
      .confirm({ message: 'Do You want to Delete Selected Events?' })
      .subscribe(res => {
        if (res) {
          const selectedEvents = this.getSelectedEvents();
          console.log('--------- Selected Events For Delete ---------');
          console.log(selectedEvents);
        }
    });
  }

  deleteEvent(data) {
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          console.log('--------- Selected Event For Delete ---------');
          console.log(data);
        }
    });
  }

  getSelectedEvents(): any {
    const selectedEvents = [];
    this.events.forEach(data => {
      if (data.selected) {
        selectedEvents.push(data);
      }
    });
    return selectedEvents;
  }

}
