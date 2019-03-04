import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { CreateOfferPopupComponent } from './create-offer-popup/create-offer-popup.component';

@Component({
  selector: 'app-user-offer',
  templateUrl: './user-offer.component.html',
  animations: egretAnimations
})
export class UserOfferComponent implements OnInit {

  public promotions = [
    {
      id: 'promo_id_01',
      name: 'Promotion Name 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim.',
      startDate: new Date(2019, 1, 2, 8, 0, 0, 0),
      endDate: new Date(2019, 1, 3, 16, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: false,
      discount: 12,
      selected: false
    },
    {
      id: 'promo_id_02',
      name: 'Promotion Name 02',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim.',
      startDate: new Date(2019, 1, 24, 9, 30, 0, 0),
      endDate: new Date(2019, 1, 24, 15, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: true,
      discount: 25,
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

  offerPopUp(data: any = {}, isNew?) {
    const title = isNew ? 'Create New Offer' : 'Update Offer';
    const dialogRef: MatDialogRef<any> = this.dialog.open(
      CreateOfferPopupComponent,
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
          console.log('------------ Create new Offer ------------');
          console.log(res);
          this.snack.open('New Offer Created', 'close', {
            duration: 2000
          });
        } else {
          console.log('------------ Update Offer ------------');
          console.log(res);
          this.snack.open('Offer Updated', 'close', {
            duration: 2000
          });
        }
      }
    });
  }

  selectToggleOne(event, data) {
    const i = this.promotions.indexOf(data);
    if (event.checked) {
      this.promotions[i].selected = true;
      this.indeterminateState = true;
    } else {
      this.promotions[i].selected = false;
    }
    this.checkAllSelectedState();
  }

  checkAllSelectedState() {
    let numOfSelectedEvent = 0;
    this.promotions.forEach(data => {
      if (data.selected) {
        numOfSelectedEvent++;
      }
    });
    if (numOfSelectedEvent === this.promotions.length) {
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
      this.promotions.forEach(data => {
        data.selected = true;
      });
      this.selectAll = true;
      this.indeterminateState = false;
    } else {
      this.promotions.forEach(data => {
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
          console.log('--------- Selected Offer For Delete ---------');
          console.log(data);
        }
    });
  }

  getSelectedEvents(): any {
    const selectedEvents = [];
    this.promotions.forEach(data => {
      if (data.selected) {
        selectedEvents.push(data);
      }
    });
    return selectedEvents;
  }

}
