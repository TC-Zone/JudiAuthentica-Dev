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
import { AuthenticationService } from 'app/views/sessions/authentication.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  animations: egretAnimations,
})
export class ProfileSettingsComponent implements OnInit {

  private userId;
  private url;
  private imageName;
  private currentUser;
  private passwordStatus = null;
  private globalVariable: GlobalVariable = new GlobalVariable();
  private statusArray = this.globalVariable.common.message.confirmPasswordStatus;
  private regex = this.globalVariable.validators.regex;
  private formInputMessage = this.globalVariable.common.message.formInput;

  private profileSettingsForm: FormGroup;
  private passwordSettingsForm: FormGroup;

  private imageChangedEvent: any = '';

  constructor(

    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private snackBar: MatSnackBar,
    private _interactionService: InteractionService,
    private authService: AuthenticationService

  ) { }

  ngOnInit() {

    this.currentUser = this.authService.getLoggedUserDetail();

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
      accountName: new FormControl(data.accountName || '', [Validators.required, Validators.pattern(this.regex._UserName)]),
      email: new FormControl(data.email || '', [Validators.required, Validators.pattern(this.regex._Email)]),
    })

    this.passwordSettingsForm = this.fb.group({
      currentPassword: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern(this.regex._Password)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern(this.regex._Password)])
    })

  }


  // ----------------------------------- Kushan ------------------------------------------------------

  // File uploader validation and upload
  onSelectFile(event: any) {
    // console.log(event);
    this.imageChangedEvent = event;
  }

  imageCropped(image: any) {
    // console.log(image);
    // console.log(this.imageChangedEvent);

    this.url = "";
    this.url = image.base64;

    if (this.imageChangedEvent.target.files && this.imageChangedEvent.target.files[0]) {

      let file = this.imageChangedEvent.dataTransfer ? this.imageChangedEvent.dataTransfer.files[0] : this.imageChangedEvent.target.files[0];
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
        // this.url = event.target.result;
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

  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  // -------------------------------------------------------------------------------------------------


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
        this.authService.setLoggedUserDetail(this.currentUser);
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

    const itemForm = this.passwordSettingsForm.value;

    if (itemForm.password === '' && itemForm.confirmPassword === '') {

      this.passwordStatus = null;

    } else if (itemForm.password !== '' || itemForm.confirmPassword !== '') {

      let result = itemForm.password.match(this.regex._Password);
      if (result && result.length > 0) {
        this.passwordStatus = null;
      } else {
        this.passwordStatus = 1; // Regex not match with password
      }

      if (itemForm.password !== '' && itemForm.confirmPassword !== '' && this.passwordStatus === null && itemForm.password !== itemForm.confirmPassword) {
        this.passwordStatus = 2;
      }

    }

  }

  changePassword() {

    const itemForm = this.passwordSettingsForm.value

    const req: passwordUpdateReq = new passwordUpdateReq(this.userId, itemForm.currentPassword, itemForm.confirmPassword);

    this.profileService.updateUserPassword(req).subscribe(

      response => {

        this.passwordSettingsForm.reset();

        Object.keys(this.passwordSettingsForm.controls).forEach((name) => {
          this.passwordSettingsForm.controls[name].setErrors(null);
        });

        this.checkConfirmPassword();
        this.snack.open("Password Updated!", "OK", { duration: 4000 });

      },
      error => {

        console.log("------error", error.error);
        this.errDialog.showError(error);

      }

    );

  }


  updateProfilePic() {

    this.loader.open();

    const req: userImageReq = new userImageReq(this.userId, this.url, this.imageName);

    this.profileService.updateProfilePic(req).subscribe(

      response => {

        this.loader.close();

        // ----------------------------------- Kushan ------------------------------------------------------
        this.imageChangedEvent = "";
        this.imageName = null;
        // -------------------------------------------------------------------------------------------------
        this.snack.open("Profile Picture Updated!", "OK", { duration: 4000 });
        this._interactionService.changeProfilePicture(this.userId);

      },
      error => {

        this.loader.close();
        this.errDialog.showError(error);

      }

    );

  }

}
