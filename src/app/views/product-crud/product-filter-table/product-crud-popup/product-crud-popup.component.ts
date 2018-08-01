import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '../../../../../../node_modules/@angular/material';
import { CrudService } from '../../../cruds/crud.service';
import { Subscription } from '../../../../../../node_modules/rxjs';
import { ResponseModel } from '../../../../model/ResponseModel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter'


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-product-crud-popup',
  templateUrl: './product-crud-popup.component.html',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }

  ]
})
export class ProductCrudPopupComponent implements OnInit {

  public productForm: FormGroup;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    private clientService: CrudService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getAllClients()
    this.buildProductForm(this.data.payload)
  }

  getAllClients() {
    this.getClientSub = this.clientService.getItems()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
        console.log(this.clients);
      })
  }

  buildProductForm(fieldItem) {
    this.productForm = this.fb.group(
      {
        client: [fieldItem.client || '', Validators.required],
        productCode: [fieldItem.productCode || '', Validators.required],
        description: [fieldItem.description || '', Validators.required],
        batchNo: [fieldItem.batchNo || '', Validators.required],
        qty: [fieldItem.qty || '', Validators.required],
        expDate: [fieldItem.expDate || '', Validators.required]
      }
    )

  }


  submit() {
    this.dialogRef.close(this.productForm.value)
  }

}
