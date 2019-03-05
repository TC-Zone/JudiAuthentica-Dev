import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { CommunityViewPopupComponent } from './community-view-popup/community-view-popup.component';
import { NavigationExtras, Router } from '@angular/router';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { ComunityService } from './../community.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { authProperties } from './../../../shared/services/auth/auth-properties';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  animations: egretAnimations
})
export class CommunityViewComponent implements OnInit {

  public rows: any;
  public columns = [];
  public temp = [];
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private router: Router,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private comunityService: ComunityService
  ) { }

  ngOnInit() {
    this.fetchAllCommunities();
  }

  /*
  * Create new community and update community popup window open function
  * 27-02-2019
  * Prasad Kumara
  */
  openPopUp(data: any = {}, isNew?) {
    const title = isNew ? 'Add New Community' : 'Update Community';
    const dialogRef: MatDialogRef<any> = this.dialog.open(
      CommunityViewPopupComponent,
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
        const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
        if (userObj) {
          this.loader.open();
          if (isNew) {
            res['createdUserId'] = userObj.id;
            res['client'] = {
              'id': userObj.userData.client.id
            };
            res['users'] = [
              {
                'id': userObj.id
              }
            ];
            // console.log('------------ Create new Community ------------');
            // console.log(res);
            this.comunityService.createCommunity(res)
              .subscribe(
                response => {
                  // console.log('------------ Create new Community ------------');
                  // console.log(response);
                  this.fetchAllCommunities();
                  this.loader.close();
                  this.snack.open('New Community Created', 'close', {
                    duration: 2000
                  });
                },
                error => {
                  this.loader.close();
                  this.errDialog.showError({
                    title: 'Error',
                    status: error.status,
                    type: 'http_error'
                  });
                }
              );
          } else {
            res['lastModifiedUserId'] = userObj.id;
            res['communityStatus'] = this.getCommunityStatus(res.communityStatus);
            // console.log('------------ Update Community ------------');
            // console.log(res);
            this.comunityService.updateCommunityById(data.id, res)
              .subscribe(
                response => {
                  // console.log('------------ Update Community ------------');
                  // console.log(response);
                  this.fetchAllCommunities();
                  this.loader.close();
                  this.snack.open('Community Updated', 'close', {
                    duration: 2000
                  });
                },
                error => {
                  this.loader.close();
                  this.errDialog.showError({
                    title: 'Error',
                    status: error.status,
                    type: 'http_error'
                  });
                }
              );
          }
        }
      }
    });
  }

  /*
  * Fetch all communities
  * 05-03-2019
  * Prasad Kumara
  */
  fetchAllCommunities() {
    const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
    if (userObj) {
      this.comunityService.fetchAllComunities(userObj.userData.client.id)
        .subscribe(
          response => {
            // console.log('--------- fetch all communities ------');
            // console.log(response);
            this.rows = response;
            this.temp = this.rows;
            this.totalRecords = this.rows.length;
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

  /*
  * Convert community status string status
  * 05-03-2019
  * Prasad Kumara
  */
  getCommunityStatus(communityStatus): string {
    if (communityStatus) {
      return 'A';
    } else {
      return 'I';
    }
  }

  /*
  * Navigate to the selected comunity details page
  * 27-02-2019
  * Prasad Kumara
  */
  navigateCommunity(row) {
    const extraParam: NavigationExtras = {
      queryParams: {
        id: row.id,
        name: row.name
      }
    };
    this.router.navigate(['community/user-community'], extraParam);
  }

  /*
  * Delete community
  * 27-02-2019
  * Prasad Kumara
  */
  deleteCommunity(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.comunityService.deleteCommunityById(row.id)
            .subscribe(
              response => {
                this.fetchAllCommunities();
                this.loader.close();
                this.snack.open(`${row.name} Deleted`, 'close', {
                  duration: 2000
                });
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
      });
  }

  /*
  * According to the page size get the table records from data base
  * 27-02-2019
  * Prasad Kumara
  */
  changeValue() {
    console.log('pagination page size', this.pageSize);
    this.pageNumber = 1;
    this.getPageCommunity(this.pageNumber);
  }

  /*
  * Table search function according to the typing words
  * 27-02-2019
  * Prasad Kumara
  */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temp[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temp.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        if (
          data[column] &&
          data[column]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.rows = rows;
  }

  /*
  * Get Community According to the page number
  * 27-02-2019
  * Prasad Kumara
  */
  getPageCommunity(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;
    }
  }

}
