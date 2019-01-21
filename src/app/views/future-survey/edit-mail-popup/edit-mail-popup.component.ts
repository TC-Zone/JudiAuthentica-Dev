import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-mail-popup',
  templateUrl: './edit-mail-popup.component.html'
})
export class EditMailPopupComponent implements OnInit {
  public itemForm: FormGroup;
  //Raveen : need to implement a custom directive for the pattern validation
  //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditMailPopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {

    console.log(item);


    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      username: [item.username || '', Validators.required],
      email: [item.email || '', [Validators.required, Validators.email]]
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
