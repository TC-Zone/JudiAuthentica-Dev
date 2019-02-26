import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { CommunityViewPopupComponent } from './community-view-popup/community-view-popup.component';
import { NavigationExtras, Router } from '@angular/router';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  animations: egretAnimations
})
export class CommunityViewComponent implements OnInit {
  public communityArray = [
    {
      id: 'comunity_id_01',
      name: 'Community Name 01',
      description: 'Community Description 01',
      status: false
    },
    {
      id: 'comunity_id_02',
      name: 'Community Name 02',
      description: 'Community Description 02',
      status: true
    }
  ];
  public pageSize: any = 10;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private router: Router,
    private confirmService: AppConfirmService
  ) { }

  ngOnInit() {
  }

  openPopUp(data: any = {}, isNew?) {
    const title = isNew ? 'Add New Community' : 'Update Community';
    const dialogRef: MatDialogRef<any> = this.dialog.open(
      CommunityViewPopupComponent,
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
          console.log('------------ Create new Community ------------');
          console.log(res);
          this.snack.open('New Community Created', 'close', {
            duration: 2000
          });
        } else {
          console.log('------------ Update Community ------------');
          console.log(res);
          this.snack.open('Community Updated', 'close', {
            duration: 2000
          });
        }
      }
    });
  }

  navigateCommunity(row) {
    const extraParam: NavigationExtras = {
      queryParams: {
        id: row.id,
        name: row.name
      }
    };
    this.router.navigate(['community/user-community'], extraParam);
  }

  deleteCommunity(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.snack.open(`${row.name} Deleted`, 'close', {
            duration: 2000
          });
        }
      });
  }

  changeValue() {
    console.log('pagination page size', this.pageSize);
  }

}
