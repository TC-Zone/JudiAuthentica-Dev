import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { CreateEventPopupComponent } from './create-event-popup/create-event-popup.component';

@Component({
  selector: 'app-user-community',
  templateUrl: './user-community.component.html',
  animations: egretAnimations
})
export class UserCommunityComponent implements OnInit {

  public comunityName: String;
  public comunityId: String;
  public expandPannelOpen = false;
  public events = [
    {
      id: 'event_id_01',
      name: 'Event Name 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Blandit volutpat maecenas volutpat blandit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vitae sapien pellentesque habitant morbi tristique. Scelerisque purus semper eget duis at tellus at. Varius duis at consectetur lorem donec massa. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Semper viverra nam libero justo. Vitae auctor eu augue ut lectus arcu. Semper feugiat nibh sed pulvinar proin. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Viverra nam libero justo laoreet sit amet cursus sit amet.',
      startDate: new Date('1/25/2019'),
      endDate: new Date('1/26/2019'),
      file: 'assets/images/test_event.jpg',
      status: false
    },
    {
      id: 'event_id_02',
      name: 'Event Name 02',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Blandit volutpat maecenas volutpat blandit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vitae sapien pellentesque habitant morbi tristique. Scelerisque purus semper eget duis at tellus at. Varius duis at consectetur lorem donec massa. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Semper viverra nam libero justo. Vitae auctor eu augue ut lectus arcu. Semper feugiat nibh sed pulvinar proin. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Viverra nam libero justo laoreet sit amet cursus sit amet.',
      startDate: new Date('1/27/2019'),
      endDate: new Date('1/28/2019'),
      file: 'assets/images/test_event.jpg',
      status: true
    }
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private router: Router,
    private confirmService: AppConfirmService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
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
          console.log(res.get('file'));
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

  backToComunityView() {
    this.router.navigate(['community/community-view']);
  }

}
