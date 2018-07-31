import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-product-crud-popup',
  templateUrl: './product-crud-popup.component.html'
})
export class ProductCrudPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>) {
  }

  ngOnInit() {
  }

}
