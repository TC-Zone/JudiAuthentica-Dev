import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ClientData, profileUpdateReq } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;
  public itemForm: FormGroup;
  public clientId;
  public userId;
  public userName;
  public email;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService
    
  ) { }

  ngOnInit() {
    
    let currentuser = JSON.parse(localStorage.getItem('currentUser'));

    this.userId = currentuser.userData.id;
    this.userName = currentuser.userData.userName;
    this.email = currentuser.userData.email;
    this.buildItemForm(currentuser.userData);

  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  buildItemForm(data) {

    this.itemForm = this.fb.group({
      username: new FormControl(data.userName || '', Validators.required),
      email: new FormControl(data.email || '', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  }


  updateProfile() {
    const itemForm = this.itemForm.value;
    const client: ClientData = new ClientData(this.clientId);
    const req: profileUpdateReq = new profileUpdateReq(itemForm.username, itemForm.password, itemForm.email);

    this.profileService.updateUser(this.userId, req).subscribe(
      response => {
        // this.getUsers();
        this.loader.close();
        this.snack.open("Profile Updated!", "OK", { duration: 4000 });
        // return this.users.slice();
      },
      error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );

  }

}
