import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-table-popup',
  templateUrl: './user-table-popup.component.html'
})
export class UserTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  public roles: any[] = [];
  public roleStatus = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.roles = this.data.roles;
    this.buildItemForm(this.data.payload);
  }

  buildItemForm(item) {

    let role = null;
    if (item.id !== undefined) {
      console.log(item);
      role = item.role.id;
    }

    this.itemForm = this.fb.group({
      username: new FormControl(item.userName || '', Validators.required),
      email: new FormControl(item.email || '', [Validators.required, Validators.email]),
      role: new FormControl(role, Validators.required),
      // isActive: new FormControl(userStatus)
    })

  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
