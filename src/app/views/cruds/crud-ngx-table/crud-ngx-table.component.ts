import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from '../crud.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { NgxTablePopupComponent } from './ngx-table-popup/ngx-table-popup.component';
import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { Client } from '../user.model';

@Component({
  selector: 'app-crud-ngx-table',
  templateUrl: './crud-ngx-table.component.html',
  animations: egretAnimations
})
export class CrudNgxTableComponent implements OnInit, OnDestroy {
  public items: any[];
  public obj: any;
  public client: Client;
  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: CrudService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService
  ) { }

  ngOnInit() {
    this.getItems()
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getItems() {
    this.getItemSub = this.crudService.getItems()
      .subscribe(data => {
        this.obj = data;
        this.client = this.obj;
        this.items = this.client.content;
        
      })
  }

  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? 'Add new client' : 'Update client';
    let dialogRef: MatDialogRef<any> = this.dialog.open(NgxTablePopupComponent, {
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if (!res) {
          // If user press cancel
          return;
        }
        this.loader.open();
        if (isNew) {
          
          this.crudService.addItem(res)
            .subscribe(data => {
              this.obj = data;    
              this.getItems();        
              this.loader.close();
              this.snack.open('Client Added!', 'OK', { duration: 4000 })
            })
        } else {
          console.log(data.id);
          console.log(res);
          this.crudService.updateItem(data.id, res)
            .subscribe(data => {            
              this.getItems();                 
              this.loader.close();
              this.snack.open('Client Updated!', 'OK', { duration: 4000 })
            })
        }
      })
  }
  deleteItem(row) {
    console.log(row)
    this.confirmService.confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.crudService.removeItem(row.id)
            .subscribe(data => { 
              this.getItems();             
              this.loader.close();
              this.snack.open('Client deleted!', 'OK', { duration: 4000 })
            })
        }
      })
  }
}