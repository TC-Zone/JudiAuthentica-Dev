import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { FutureSurveyCommonConfigComponent } from "./future-survey-common-config.component";

import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { FutureSurveyService } from "../future-survey.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import {
  FSCreateRequest,
  FSUpdateRequest
} from "../../../model/FSurveyConfigRequest.model";
import {
  JsonContentPart,
  DefaultLangWrapper
} from "../../../model/FutureSurvey.model";
import { ClientService } from "../../client/client.service";
import { authProperties } from "app/shared/services/auth/auth-properties";
import { AuthenticationService } from "app/views/sessions/authentication.service";

@Component({
  selector: "app-future-survey-config-popup",
  templateUrl: "./future-survey-config-popup.component.html",
  animations: egretAnimations
})
export class FutureSurveyConfigPopupComponent
  extends FutureSurveyCommonConfigComponent
  implements OnInit, OnDestroy {
  public configForm: FormGroup;

  // UI status maintaining variables
  public panelOpenState = false;

  public invitees: any[];

  // default page json for initial saving
  public pageItem: any = [{ name: "page1" }];

  // check box module
  public checkBoxModel = false;

  // survey status error msg status
  public statusError;

  // status of current user role (super admin or not)
  public isSuperAdmin = false;

  public currentUser;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyConfigPopupComponent>,
    public fb: FormBuilder,
    public clientService: ClientService,
    public snackBar: MatSnackBar,
    public errDialog: AppErrorService,
    public futureSurveyService: FutureSurveyService,
    public loader: AppLoaderService,
    private authService: AuthenticationService
  ) {
    super(clientService, errDialog, snackBar, futureSurveyService, loader);
  }

  ngOnInit() {
    this.currentUser = this.authService.getLoggedUserDetail();
    if(this.currentUser){
      this.isSuperAdmin = this.currentUser.isAuthorized;
    }

    this.getClientSuggestions();
    this.getAllSurveyLangs();
    this.buildConfigForm(this.data.payload);
  }

  ngOnDestroy() {
    if (this.getClientSub) {
      this.getClientSub.unsubscribe();
    }
    if (this.getLangsSub) {
      this.getLangsSub.unsubscribe();
    }
  }

  buildConfigForm(fieldItem) {
    let isDisabled1;
    let isDisabled2;
    this.statusError = false;

    if (this.data.isNew) {
      isDisabled1 = isDisabled2 = false;
    } else if (fieldItem.status === 0 || fieldItem.status === 4) {
      isDisabled1 = true;
      isDisabled2 = false;
    } else if (fieldItem.status === 1) {
      this.statusError = true;
      isDisabled1 = isDisabled2 = true;
    }
    
    if(!this.isSuperAdmin){
      fieldItem.clientId = this.currentUser.userData.client.id;
    }

    this.configForm = this.fb.group({
      client: new FormControl(
        { value: fieldItem.clientId || "", disabled: isDisabled1 || !this.isSuperAdmin},
        Validators.required
      ),
      title: new FormControl(
        { value: fieldItem.title || "", disabled: isDisabled2 },
        Validators.required
      ),
      origin: new FormControl(
        { value: +fieldItem.origin, disabled: isDisabled2 },
        Validators.required
      ),
      channel: new FormControl({
        value: fieldItem.channel,
        disabled: isDisabled1
      })
    });

  }

  submitNew(isNew) {
    let title = this.configForm.get("title").value;
    let client = this.configForm.get("client").value;
    let origin = this.configForm.get("origin").value;
    let channel = this.configForm.get("channel").value;
    let lang = "en";
    // RAVEEN :  compatibility feature defines survey types for device : SPRINT 10 - APRIL
    let compatibility = "1";

    let jsonContent: JsonContentPart = new JsonContentPart(
      lang,
      title,
      client,
      this.pageItem
    );
    const jsonString = JSON.stringify(JSON.stringify(jsonContent));
    const defaultLang: DefaultLangWrapper = new DefaultLangWrapper(lang);
    const langString = JSON.stringify(defaultLang);

    let fsReq;
    if (isNew) {
      fsReq = new FSCreateRequest(
        title,
        client,
        origin,
        channel,
        langString,
        compatibility,
        this.pageItem,
        jsonString
      );
    } else {
      fsReq = new FSUpdateRequest(title, origin, channel);
    }

    console.log("FINALE SURVEY CREATION REQUEST:");
    console.log(fsReq);

    this.dialogRef.close(fsReq);
  }
}
