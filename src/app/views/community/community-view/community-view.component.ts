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

  public communities = [];
  public temCommunities = [];
  public pageNumber = 1;
  public pageSize = 50;
  public totalPages = [];
  public totalRecords = 0;
  public pageSizeArray = [];

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
    this.fetchAllCommunities(this.pageNumber);
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
            res.status = this.getCommunityStatus(res.status);
            this.comunityService.createCommunity(res)
              .subscribe(
                response => {
                  const temData: any = response;
                  if (this.communities.length === this.pageSize) {
                    this.appendNewlyCreatedCommunity(temData.content);
                  } else {
                    this.communities.push(temData.content);
                    this.temCommunities = this.communities;
                    this.totalRecords += 1;
                  }
                  // this.fetchAllCommunities(this.pageNumber);
                  this.loader.close();
                  this.snack.open('New Community Created', 'close', {
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
            res.status = this.getCommunityStatus(res.status);
            this.comunityService.updateCommunityById(data.id, res)
              .subscribe(
                response => {
                  const temData: any = response;
                  const i = this.communities.indexOf(data);
                  this.communities[i] = temData.content;
                  this.temCommunities = this.communities;
                  this.loader.close();
                  this.snack.open('Community Updated', 'close', {
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
  * Fetch all communities
  * 05-03-2019
  * Prasad Kumara
  */
  fetchAllCommunities(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
      if (userObj) {
        this.comunityService.fetchAllComunities(userObj.userData.client.id)
          .subscribe(
            response => {
              console.log(response);
              const resData: any = response;
              this.communities = this.temCommunities = resData.content;
              this.totalRecords = resData.pagination.totalRecords;
              this.pageNumber = resData.pagination.pageNumber;
              this.createPageNavigationBar();
            this.createPaginationPageSizeArray();
            },
            error => {
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
          const tempPN = this.setPageNumber(1);
          this.comunityService.deleteCommunityById(row.id)
            .subscribe(
              response => {
                this.fetchAllCommunities(tempPN);
                this.loader.close();
                this.snack.open(`${row.name} Deleted`, 'close', {
                  duration: 2000
                });
              },
            error => {
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
  * According to the page size get the table records from data base
  * 27-02-2019
  * Prasad Kumara
  */
  changeValue() {
    this.pageNumber = 1;
    this.fetchAllCommunities(this.pageNumber);
  }

  /*
  * Table search function according to the typing words
  * 27-02-2019
  * Prasad Kumara
  */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temCommunities[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temCommunities.filter(function(data) {
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
    this.communities = rows;
  }

  /*
  * Append newly created community to the community array
  * 06-03-2019
  * Prasad Kumara
  */
  appendNewlyCreatedCommunity(community) {
    const tempArray = [];
    for (let i = 1; i <= this.communities.length; i++) {
      if (i === this.communities.length) {
        tempArray.push(community);
      } else {
        tempArray.push(this.communities[i]);
      }
    }
    this.communities = this.temCommunities = tempArray;
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
  * Create pagination page size element array
  * 06-03-2019
  * Prasad Kumara
  */
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

  /*
  * Set page number according to the total records
  * 06-03-2019
  * Prasad Kumara
  */
  setPageNumber(numOfComm): number {
    const tempTR = this.totalRecords - numOfComm;
    const devider = tempTR / this.pageSize;
    if (devider < this.totalPages.length) {
      return this.pageNumber - 1;
    } else {
      return this.pageNumber;
    }
  }

  /*
  * Convert boolean event status to string status
  * 07-03-2019
  * Prasad Kumara
  */
  getCommunityStatus(eventStatus): string {
    if (eventStatus) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }

}
