import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GlobalVariable } from 'app/shared/helpers/global-variable';

@Component({
  selector: 'app-user-table-popup',
  templateUrl: './user-table-popup.component.html'
})
export class UserTablePopupComponent implements OnInit {

  public itemForm: FormGroup;
  public roles: any[] = [];
  public roleStatus = false;
  public isActive;
  public userStatus;
  public oldUserStatus;
  public statusArray = new GlobalVariable().common.matChip.userStatus;

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
      this.userStatus = this.oldUserStatus = item.status;
      this.isActive = item.status === "ACTIVE" ? true : false;
    }

    this.itemForm = this.fb.group({
      username: new FormControl(item.accountName || '', Validators.required),
      email: new FormControl(item.email || '', [Validators.required, Validators.email]),
      role: new FormControl(role, Validators.required),
      status: new FormControl(this.isActive)
    })

  }

  changeUserStatus() {
    if (this.isActive) {
      this.userStatus = "ACTIVE";
    } else {
      if(this.oldUserStatus === "ACTIVE"){
        this.userStatus = "INACTIVE";
      } else {
        this.userStatus = this.oldUserStatus;
      }
    }
  }

  submit() {
    this.itemForm.value.status = this.userStatus; 
    this.dialogRef.close(this.itemForm.value);
  }
}
