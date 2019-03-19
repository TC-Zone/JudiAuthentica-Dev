import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ClientData, profileUpdateReq } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar } from '@angular/material';
import { egretAnimations } from "app/shared/animations/egret-animations";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  animations: egretAnimations,
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;
  public clientId;
  public userId;
  public userName;
  public email;
  public url;

  public accountSettingsForm: FormGroup;
  public passwordSettingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    public snackBar: MatSnackBar
    
  ) { }

  ngOnInit() {
    
    let currentuser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentuser.userData.id;
    this.userName = currentuser.userData.accountName;
    this.email = currentuser.userData.email;
    this.buildItemForm(currentuser.userData);
    
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  buildItemForm(data) {

    this.accountSettingsForm = this.fb.group({
      username: new FormControl(data.accountName || '', Validators.required),
      email: new FormControl(data.email || '', [Validators.required, Validators.email]),
    })

    this.passwordSettingsForm = this.fb.group({
      currentPassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })

  }

  
  // File uploader validation and upload
  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {

      let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      let pattern = /image-*/;
      let reader = new FileReader();
      if (!file.type.match(pattern)) {
        this.snackBar.open(
          "Invalid Format!",
          "close",
          { duration: 2000 }
        );
        return;
      }
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(file);

    } else {
      this.snackBar.open(
        "Can't upload",
        "close",
        { duration: 2000 }
      );
    }

  }

  removeSelectedImg() {
    this.url = null;
  }

  updateProfile() {
    const itemForm = this.accountSettingsForm.value;
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
