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

@Component({
  selector: 'app-user-promotion',
  templateUrl: './user-promotion.component.html',
  animations: egretAnimations
})
export class UserPromotionComponent implements OnInit {

  public promotions;
  public temPromotions;
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
    private activeRoute: ActivatedRoute,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private userPromotionService: UserPromotionService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.fetchAllPromotions(this.pageNumber, true);
  }

  stopProp(event) {
    event.stopPropagation();
  }

  offerPopUp(data: any = {}, isNew?) {
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
            this.userPromotionService.createPromotion(res)
              .subscribe(
                response => {
                  this.loader.close();
                  this.fetchAllPromotions(this.pageNumber);
                  this.snack.open('New Promotion Created', 'close', {
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
            this.userPromotionService.updatePromotionById(data.id, res)
              .subscribe(
                response => {
                  this.fetchAllPromotions(this.pageNumber);
                  this.loader.close();
                  this.snack.open('Promotion Updated', 'close', {
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
      .confirm({ message: 'Do You want to Delete Selected Promotions?' })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          const selectedEvents = this.getSelectedEvents();
          const idArray = {
            promos: selectedEvents
          };
          this.userPromotionService.deletePromotionList(idArray)
            .subscribe(
              response => {
                this.loader.close();
                this.selectAll = false;
                this.indeterminateState = false;
                this.fetchAllPromotions(this.pageNumber);
                this.snack.open('Selected Promotions Deleted', 'close', {
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

  deleteEvent(data) {
    this.confirmService
      .confirm({ message: `Do You want to Delete ${data.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.userPromotionService.deletePromotionById(data.id)
            .subscribe(
              response => {
                this.fetchAllPromotions(this.pageNumber);
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

  getSelectedEvents(): any {
    const selectedEvents = [];
    this.promotions.forEach(data => {
      if (data.selected) {
        selectedEvents.push({id: data.id});
      }
    });
    return selectedEvents;
  }

  fetchAllPromotions(pageNumber, firstTime = false) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.userPromotionService.fetchAllPromotions(this.comunityId, pageNumber, this.pageSize)
      .subscribe(
        response => {
          const resData: any = response;
          this.promotions = this.temPromotions = resData.content;
          this.totalRecords = resData.pagination.totalRecords;
          this.pageNumber = pageNumber;
          if (firstTime) {
            const totalPages = resData.pagination.totalPages;
            if (totalPages > 1) {
              for (let i = 1; i <= totalPages; i++) {
                this.totalPages.push(i);
              }
            }
            this.createPaginationPageSizeArray();
          }
        }
      );
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const columns = Object.keys(this.temPromotions[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) {
      return;
    }

    const rows = this.temPromotions.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        const col= columns[i];
        if (data[col] && data[col].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.promotions = rows;
  }

  changeValue() {
    this.pageNumber = 1;
    this.fetchAllPromotions(this.pageNumber);
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

}
