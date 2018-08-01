import { Component, OnInit } from '@angular/core';
import { ProductCrudService } from '../product-crud.service';
import { MatDialogRef, MatDialog, DateAdapter } from '../../../../../node_modules/@angular/material';
import { ProductCrudPopupComponent } from './product-crud-popup/product-crud-popup.component';


@Component({
  selector: 'app-product-filter-table',
  templateUrl: './product-filter-table.component.html'
})
export class ProductFilterTableComponent implements OnInit {

  rows = [];
  columns = [];



  constructor(
    private prodService: ProductCrudService,
    private dialog: MatDialog) { }



  ngOnInit() {
  }


  openProductPopup(data: any = {}, isNew?) {
    let title = isNew ? 'Add new Product' : 'Update Product';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ProductCrudPopupComponent, {
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      
      console.log(res.expDate);
    })

  }

}
