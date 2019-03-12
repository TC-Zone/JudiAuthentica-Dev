import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { CreatePromotionPopupComponent } from './create-promotion-popup/create-promotion-popup.component';
import { UserPromotionService } from './user-promotion.service';
import { ActivatedRoute } from '@angular/router';
import { authProperties } from './../../../../shared/services/auth/auth-properties'
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { ComunityService } from '../../community.service';
import { AppWarningService } from 'app/shared/services/app-warning/app-warning.service';
import { AppInfoService } from 'app/shared/services/app-info/app-info.service';

@Component({
  selector: 'app-user-promotion',
  templateUrl: './user-promotion.component.html',
  animations: egretAnimations
})
export class UserPromotionComponent implements OnInit {

  public promotions = [];
  public temPromotions = [];
  public indeterminateState = false;
  public selectAll = false;
  public comunityName: String;
  public comunityId: String;
  public pageNumber = 1;
  public pageSize = 10;
  public totalPages = [];
  public totalRecords = 0;
  public pageSizeArray = [];
  public quota = 0;
  public quotaExpire = false;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private userPromotionService: UserPromotionService,
    private comunityService: ComunityService,
    private appWarningService: AppWarningService,
    private appInfoService: AppInfoService
  ) { }

  ngOnInit() {
    const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.fetchAllPromotions(this.pageNumber, true);
    this.comunityService.licenseExpireState(userObj.userData.client.id, 'promos')
      .subscribe(
        response => {
          const tempRes: any = response;
          this.quotaExpire = tempRes.content.expired;
          this.quota = tempRes.content.quota;
        }
      );
  }

  /*
  * Expantion pannel prevent expantion
  * 06-03-2019
  * Prasad Kumara
  */
  stopProp(event) {
    event.stopPropagation();
  }

  /*
  * Promotion Create and Update popup window
  * 06-03-2019
  * Prasad Kumara
  */
  promotionPopUp(data: any = {}, isNew?) {
    if (this.quotaExpire) {
      const infoData = {
        title: 'License',
        message: 'Allocated Promotion Limit Exceded. Do you want to activate more?',
        linkData: {
          url: '#',
          buttonText: 'Activate'
        }
      };
      this.appInfoService.showInfo(infoData);
    } else {
      const title = isNew ? 'Create New Promotion' : 'Update Promotion';
      const dialogRef: MatDialogRef<any> = this.dialog.open(
        CreatePromotionPopupComponent,
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
              res['community'] = {
                id: this.comunityId
              };
              const clientId = userObj.userData.client.id;
              res.status = this.getPromotionStatus(res.status);
              this.comunityService.licenseExpireState(clientId, 'promos')
                .subscribe(
                  response => {
                    const tempRes: any = response;
                    this.quotaExpire = tempRes.content.expired;
                    if (!tempRes.content.expired) {
                      this.loader.close();
                      if (tempRes.content.usage < (tempRes.content.quota - 1) && (tempRes.content.quota - tempRes.content.usage) === 2) {
                        this.appWarningService.showWarning({
                          title: 'License',
                          message: 'One Event Remaining!'
                        });
                        this.createPromotion(res);
                      } else if (tempRes.content.usage < tempRes.content.quota && (tempRes.content.quota - tempRes.content.usage) === 1) {
                        const infoData = {
                          title: 'License',
                          message: 'Allocated promotions are finished. Do you want to activate more?',
                          linkData: {
                            url: '#',
                            buttonText: 'Activate'
                          }
                        };
                        this.appInfoService.showInfo(infoData);
                        this.createPromotion(res);
                      } else {
                        this.createPromotion(res);
                      }
                    }
                  }
                );
              // this.createPromotion(res);
            } else {
              res['lastModifiedUserId'] = userObj.id;
              res.status = this.getPromotionStatus(res.status);
              this.userPromotionService.updatePromotionById(data.id, res)
                .subscribe(
                  response => {
                    const temData: any = response;
                    const i = this.promotions.indexOf(data);
                    this.promotions[i] = temData.content;
                    this.temPromotions = this.promotions;
                    this.loader.close();
                    this.snack.open('Promotion Updated', 'close', {
                      duration: 2000
                    });
                  },
                  error => {
                    this.loader.close();
                    if (error.status !== 401) {
                      this.errDialog.showErrorWithMessage(error);
                    }
                  }
                );
            }
          }
        }
      });
    }
  }

  createPromotion(res) {
    this.userPromotionService.createPromotion(res)
      .subscribe(
        response => {
          const temData: any = response;
          if (this.promotions.length === this.pageSize) {
            this.appendNewlyCreatedPromotion(temData.content);
          } else {
            this.promotions.push(temData.content);
            this.temPromotions = this.promotions;
            this.totalRecords += 1;
          }
          this.loader.close();
          if(this.totalRecords === this.quota) {
            this.quotaExpire = true;
          }
          // this.fetchAllPromotions(this.pageNumber);
          this.snack.open('New Promotion Created', 'close', {
            duration: 2000
          });
        },
        error => {
          this.loader.close();
          if (error.status !== 401) {
            this.errDialog.showErrorWithMessage(error);
          }
        }
      );
  }

  /*
  * Set Selected status in one promotion
  * 06-03-2019
  * Prasad Kumara
  */
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

  /*
  * Set selectd status of all promotions
  * 06-03-2019
  * Prasad Kumara
  */
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

  /*
  * Select toggle promotions status
  * 06-03-2019
  * Prasad Kumara
  */
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

  /*
  * Delete selected events
  * 06-03-2019
  * Prasad Kumara
  */
  deleteSelectedPromotions() {
    const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
    this.confirmService
      .confirm({ message: 'Do You want to Delete Selected Promotions?' })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedEvents = this.getSelectedPromotions();
          const idArray = {
            promos: selectedEvents
          };
          const tempPN = this.setPageNumber(selectedEvents.length);
          this.userPromotionService.deletePromotionList(idArray)
            .subscribe(
              response => {
                this.loader.close();
                this.selectAll = false;
                this.indeterminateState = false;
                this.fetchAllPromotions(tempPN);
                this.comunityService.licenseExpireState(userObj.userData.client.id, 'promos')
                  .subscribe(
                    resData => {
                      const tempRes: any = resData;
                      this.quotaExpire = tempRes.content.expired;
                      this.quota = tempRes.content.quota;
                    }
                  );
                this.snack.open('Selected Promotions Deleted', 'close', {
                  duration: 2000
                });
              },
              error => {
                this.loader.close();
                if (error.status !== 401) {
                  this.errDialog.showErrorWithMessage(error);
                }
              }
            );
        }
    });
  }

  /*
  * Delete one promotion
  * 06-03-2019
  * Prasad Kumara
  */
  deletePromotion(data) {
    const userObj: any = JSON.parse(localStorage.getItem(authProperties.storage_name));
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const tempPN = this.setPageNumber(1);
          this.userPromotionService.deletePromotionById(data.id)
            .subscribe(
              response => {
                this.comunityService.licenseExpireState(userObj.userData.client.id, 'promos')
                  .subscribe(
                    resData => {
                      const tempRes: any = resData;
                      this.quotaExpire = tempRes.content.expired;
                      this.quota = tempRes.content.quota;
                    }
                  );
                this.fetchAllPromotions(tempPN);
                this.loader.close();
                this.snack.open(`${data.name} Deleted`, 'close', {
                  duration: 2000
                });
              },
              error => {
                this.loader.close();
                if (error.status !== 401) {
                  this.errDialog.showErrorWithMessage(error);
                }
              }
            );
        }
      });
    }

  /*
  * Return all selected promotions id list
  * 06-03-2019
  * Prasad Kumara
  */
  getSelectedPromotions(): any {
    const selectedEvents = [];
    this.promotions.forEach(data => {
      if (data.selected) {
        selectedEvents.push({id: data.id});
      }
    });
    return selectedEvents;
  }

  /*
  * Search all events with pagination
  * 06-03-2019
  * Prasad Kumara
  */
  fetchAllPromotions(pageNumber, firstTime = false) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.userPromotionService.fetchAllPromotions(this.comunityId, pageNumber, this.pageSize)
      .subscribe(
        response => {
          const resData: any = response;
          this.promotions = this.temPromotions = resData.content;
          this.totalRecords = resData.pagination.totalRecords;
          this.pageNumber = resData.pagination.pageNumber;
          this.createPageNavigationBar();
          this.createPaginationPageSizeArray();
        }
      );
    }
  }

  /*
  * Search Promotions in viewed promotion list
  * 06-03-2019
  * Prasad Kumara
  */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temPromotions[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temPromotions.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        const col = columns[i];
        if (data[col] && data[col].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.promotions = rows;
  }

  /*
  * Page size change and update promotion list according to the page size
  * 06-03-2019
  * Prasad Kumara
  */
  changeValue() {
    this.pageNumber = 1;
    this.fetchAllPromotions(this.pageNumber);
  }

  /*
  * Create pagination page size element array
  * 06-03-2019
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
      for (let i = 10; i < totalRec; ) {
        tempArray.push(i);
        i = i + 10;
      }
    } else {
      tempArray.push(10);
    }
    this.pageSizeArray = tempArray;
  }

  /*
  * Append newly created promotion to the promotion array
  * 06-03-2019
  * Prasad Kumara
  */
  appendNewlyCreatedPromotion(promotion) {
    const tempArray = [];
    for (let i = 1; i <= this.promotions.length; i++) {
      if (i === this.promotions.length) {
        tempArray.push(promotion);
      } else {
        tempArray.push(this.promotions[i]);
      }
    }
    this.promotions = this.temPromotions = tempArray;
    this.totalRecords += 1;
    this.createPageNavigationBar();
  }

  /*
  * Create pagination bottom navigation bar
  * 06-03-2019
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
  * 06-03-2019
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

  /*
  * Convert boolean event status to string status
  * 07-03-2019
  * Prasad Kumara
  */
  getPromotionStatus(eventStatus): string {
    if (eventStatus) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }

}
