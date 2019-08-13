import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { profileUpdateReq, passwordUpdateReq, userImageReq } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar } from '@angular/material';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { GlobalVariable } from 'app/shared/helpers/global-variable';
import { Router } from '@angular/router';
import { InteractionService } from 'app/shared/services/app-profile/interaction.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  animations: egretAnimations,
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;
  public clientId;
  public userId;
  public url;
  public imageName;
  public currentUser;
  public passwordStatus = null;
  public statusArray = new GlobalVariable().common.matChip.confirmPasswordStatus;

  public profileSettingsForm: FormGroup;
  public passwordSettingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    public snackBar: MatSnackBar,
    public r: Router,
    private _interactionService: InteractionService

  ) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.userData.id;
    this.buildItemForm(this.currentUser.userData);

    // ---------------------------------- UserProfile -------------------------------

    this._interactionService.changeProfilePicture$.subscribe(
      url => {
        this.url = url;
      }
    );

    // ------------------------------------------------------------------------------

  }

  buildItemForm(data) {

    this.profileSettingsForm = this.fb.group({
      accountName: new FormControl(data.accountName || '', Validators.required),
      email: new FormControl(data.email || '', [Validators.required, Validators.email]),
    })

    this.passwordSettingsForm = this.fb.group({
      currentPassword: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\d$@$!%*?&].{7,}')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\d$@$!%*?&].{7,}')])
    })

  }

  // File uploader validation and upload
  onSelectFile(event) {
    console.log(event);


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
        this.imageName = file.name;
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
    const itemForm = this.profileSettingsForm.value;
    const req: profileUpdateReq = new profileUpdateReq(this.userId, itemForm.accountName, itemForm.email);

    this.profileService.updateUser(req).subscribe(
      response => {
        this.loader.close();
        this.snack.open("Profile Updated!", "OK", { duration: 4000 });

        this.currentUser.userData.accountName = this.currentUser.accountName = response.content.accountName;
        this.currentUser.userData.email = response.content.email;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.changeProfileDetails(response.content.accountName);
      },
      error => {
        this.loader.close();
        this.errDialog.showError(error);
      }
    );

  }


  changeProfileDetails(userName) {
    this._interactionService.changeProfileDetails(userName);
  }

  checkConfirmPassword() {
    const itemForm = this.passwordSettingsForm.value
    if (itemForm.password !== null && itemForm.confirmPassword !== null && itemForm.password !== '' && itemForm.confirmPassword !== '') {
      if (itemForm.password !== itemForm.confirmPassword) { this.passwordStatus = false; }
      else { this.passwordStatus = true; }
    } else {
      this.passwordStatus = null;
    }

  }

  changePassword() {

    const itemForm = this.passwordSettingsForm.value

    const req: passwordUpdateReq = new passwordUpdateReq(this.userId, itemForm.currentPassword, itemForm.confirmPassword);
    this.profileService.updateUserPassword(req).subscribe(
      response => {
        this.loader.close();
        this.passwordSettingsForm.reset();
        this.checkConfirmPassword();
        this.snack.open("Password Updated!", "OK", { duration: 4000 });

      },
      error => {
        console.log("------error", error.error);
        this.loader.close();
        this.errDialog.showError(error);
      }
    );

  }


  updateProfilePic() {
    const req: userImageReq = new userImageReq(this.userId, this.url, this.imageName);
    this.profileService.updateProfilePic(req).subscribe(
      response => {
        this.loader.close();
        this.snack.open("Profile Picture Updated!", "OK", { duration: 4000 });
        this._interactionService.changeProfilePicture(this.userId);
        this.imageName = null;
      },
      error => {
        this.loader.close();
        this.errDialog.showError(error);
      }
    );

  }

}
