import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GlobalVariable } from 'app/shared/helpers/global-variable';

@Component({
  selector: 'app-user-table-popup',
  templateUrl: './user-table-popup.component.html'
})
export class UserTablePopupComponent implements OnInit {

  private itemForm: FormGroup;
  private roles: any[] = [];
  private roleStatus = false;
  private isActive;
  private userStatus;
  private oldUserStatus;
  private globalVariable = new GlobalVariable();
  private statusArray = this.globalVariable.common.matChip.userStatus;
  private message = this.globalVariable.common.message;
  private regex = this.globalVariable.validators.regex;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<UserTablePopupComponent>,
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
      username: new FormControl(item.accountName || '', [Validators.required, Validators.pattern(this.regex._UserName)]),
      email: new FormControl(item.email || '', [Validators.required, Validators.pattern(this.regex._Email)]),
      role: new FormControl(role, Validators.required),
      status: new FormControl({ value: this.isActive, disabled: this.userStatus === 'DELETED' && this.data.quotaExpire })
    })

  }

  changeUserStatus() {
    if (this.isActive) {
      this.userStatus = "ACTIVE";
    } else {
      if (this.oldUserStatus === "ACTIVE") {
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
