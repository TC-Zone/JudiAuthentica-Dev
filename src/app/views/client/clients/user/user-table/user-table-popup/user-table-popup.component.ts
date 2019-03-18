import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-table-popup',
  templateUrl: './user-table-popup.component.html'
})
export class UserTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  public roles: any[];
  public formStatus = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
    console.log(this.data);
    
    this.roles = this.data.roles;

  }

  buildItemForm(item) {
    let role = null;
    let userStatus = 0;
    if (item.id === undefined) {
      this.formStatus = true;
    } else {
      role = item.role.id;
      if(item.status==="ACTIVE"){
        userStatus = 1;
      }
    }


    this.itemForm = this.fb.group({
      username: new FormControl(item.userName || '', Validators.required),
      password: new FormControl(item.password || '', Validators.required),
      email: new FormControl(item.email || '', [Validators.required, Validators.email]),
      role: new FormControl(role, Validators.required),
      // isActive: new FormControl(userStatus)
    })

    if (item.id !== undefined) {
      // role = item.role.id;
      this.itemForm.get('password').clearValidators();
      this.itemForm.get('password').updateValueAndValidity();
    }
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}