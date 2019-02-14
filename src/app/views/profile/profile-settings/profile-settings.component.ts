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
  public name;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService
    
  ) { }

  ngOnInit() {
    this.buildItemForm();
    this.clientId = "faa6643aca8c5318a9583178795542cf";
    this.userId = "d36eeebd8b1f0cde16210339e97b9408";
    this.name = 'Adida';
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  buildItemForm() {

    this.itemForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
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
        this.snack.open("Client Updated!", "OK", { duration: 4000 });
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
