import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngx-table-popup',
  templateUrl: './ngx-table-popup.component.html'
})
export class NgxTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  //Raveen : need to implement a custom directive for the pattern validation
  //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NgxTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {

    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      description: [item.description || '', Validators.required],
      code: [item.code || '', Validators.required],
      // company: [item.company || ''],
      // phone: [item.phone || ''],
      // address: [item.address || ''],
      // balance: [item.balance || ''],
      // isActive: [item.isActive || false]
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
