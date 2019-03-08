import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-community-popup',
  templateUrl: './user-community-popup.component.html'
})
export class UserCommunityPopupComponent implements OnInit {
  public itemForm: FormGroup;
  public roles: any[];
  public formStatus = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserCommunityPopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);

    this.roles = this.data.roles;

  }

  buildItemForm(item) {

    console.log(item);
    

    let role = null;
    let userStatus = 0;
    if (item.id === undefined) {
      this.formStatus = true;
    } else {
      role = item.roles[0].id;
      if(item.status==="ACTIVE"){
        userStatus = 1;
      }
    }


    this.itemForm = this.fb.group({
      // username: new FormControl(item.userName || '', Validators.required),
      // password: new FormControl(item.password || '', Validators.required),
      // email: new FormControl(item.email || '', [Validators.required, Validators.email]),
      // role: new FormControl(role, Validators.required),
      // isActive: new FormControl(userStatus)
    })

    if (item.id !== undefined) {
      role = item.roles[0].id;
      this.itemForm.get('password').clearValidators();
      this.itemForm.get('password').updateValueAndValidity();
    }
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
