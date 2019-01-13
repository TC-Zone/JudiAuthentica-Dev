import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { CrudService } from "../../cruds/crud.service";
import { FutureSurveyCommonConfigComponent } from "./future-survey-common-config.component";

import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { FutureSurveyService } from "../future-survey.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { FSCreateRequest } from "../../../model/FSurveyConfigRequest.model";

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

  // radio button check/unchecked setting
  public channel = "1";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyConfigPopupComponent>,
    public fb: FormBuilder,
    public clientService: CrudService,
    public snackBar: MatSnackBar,
    public errDialog: AppErrorService,
    public futureSurveyService: FutureSurveyService,
    public loader: AppLoaderService
  ) {
    super(clientService, errDialog, snackBar, futureSurveyService, loader);
  }

  ngOnInit() {
    this.getClientSuggestions();
    this.buildConfigForm(this.data.payload);
  }

  ngOnDestroy() {
    if (this.getClientSub) {
      this.getClientSub.unsubscribe();
    }
  }

  buildConfigForm(fieldItem) {
    this.configForm = this.fb.group({
      client: [fieldItem.clientId || "", Validators.required],
      title: [fieldItem.title || "", Validators.required],
      channel: [fieldItem.channel || "1"]
    });
  }

  submitNew(isNew) {
    let title = this.configForm.get("title").value;
    let client = this.configForm.get("client").value;
    let channel = this.configForm.get("channel").value;

    let jsonContent: JsonContentPart = new JsonContentPart(
      title,
      client,
      this.pageItem
    );
    const jsonString = JSON.stringify(JSON.stringify(jsonContent));

    const fsCreateReq: FSCreateRequest = new FSCreateRequest(
      title,
      client,
      channel,
      this.pageItem,
      jsonString
    );

    console.log("FInale REQUEST :");
    console.log(fsCreateReq);

    this.dialogRef.close(fsCreateReq);
  }
}

export class JsonContentPart {
  constructor(public title, public clientId, public pages: any) {}
}

//  Removing invite configuration section from future survey config popup - YS - The Flash Sprint

// submit(isNew) {
//   let title = this.configForm.get("title").value;
//   let client = this.configForm.get("client").value;
//   let sendingReq: any;

//   let jsonContent: JsonContentPart = new JsonContentPart(
//     title,
//     client,
//     this.pageItem
//   );
//   let jsonString = JSON.stringify(jsonContent);

//   let stringfiedJson = JSON.stringify(jsonString);

//   let commonRoot: FSurveyConfigRequest;

//   commonRoot = new FSurveyConfigRequest(
//     this.configForm.value,
//     stringfiedJson,
//     this.invitees
//   );

//   let publicRequest: PublicPart;
//   let privateRequest: PrivatePart;
//   if (commonRoot.channel === "1") {
//     publicRequest = new PublicPart(
//       commonRoot.title,
//       commonRoot.clientId,
//       commonRoot.channel,
//       commonRoot.jsonContent,
//       this.pageItem
//     );
//     sendingReq = publicRequest;
//   }
//   if (commonRoot.channel === "2") {
//     privateRequest = new PrivatePart(
//       commonRoot.title,
//       commonRoot.clientId,
//       commonRoot.channel,
//       commonRoot.jsonContent,
//       this.pageItem,
//       commonRoot.isPreDefined,
//       commonRoot.inviteeGroupId,
//       commonRoot.inviteeGroupName,
//       commonRoot.invitees
//     );
//     sendingReq = privateRequest;
//   }

//   console.log(sendingReq);

//   this.dialogRef.close(sendingReq);
// }
