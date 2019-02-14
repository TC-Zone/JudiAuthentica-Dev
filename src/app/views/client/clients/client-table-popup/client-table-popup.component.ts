import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-client-table-popup',
  templateUrl: './client-table-popup.component.html'
})
export class ClientTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  public formStatus = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {


    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      description: [item.description || '', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

    if (item.name === undefined) {
      this.formStatus = true;
    } else {
      this.itemForm.get('username').clearValidators();
      this.itemForm.get('username').updateValueAndValidity();
      this.itemForm.get('email').clearValidators();
      this.itemForm.get('email').updateValueAndValidity();
    }


  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
