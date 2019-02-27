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
      description: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
      <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,
      inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,
      consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
      <blockquote>
      Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi.
      </blockquote>
      <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,
      inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,
      consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
      Thanks<br>
      Jhone`,
      startDate: new Date('1/25/2019'),
      endDate: new Date('1/26/2019'),
      file: 'assets/images/face-1.jpg',
      status: false
    },
    {
      id: 'event_id_02',
      name: 'Event Name 02',
      description: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
      <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,
      inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,
      consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
      <blockquote>
      Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi.
      </blockquote>
      <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,
      temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,
      inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,
      consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
      Thanks<br>
      Jhone`,
      startDate: new Date('1/27/2019'),
      endDate: new Date('1/28/2019'),
      file: 'assets/images/face-1.jpg',
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
