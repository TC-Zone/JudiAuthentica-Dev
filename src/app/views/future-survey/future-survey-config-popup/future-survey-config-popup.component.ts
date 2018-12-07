import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CrudService } from "../../cruds/crud.service";
import { FutureSurveyCommonConfigComponent } from "./future-survey-common-config.component";
import {
  FSurveyConfigRequest,
  PrivatePart
} from "../../../model/FSurveyConfigRequest.model";

import { PublicPart } from "../../../model/FSurveyConfigRequest.model";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";

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
  public channel;

  public invitees: any[];

  // default page json for initial saving
  public pageItem: any = [{ name: "page1" }];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyConfigPopupComponent>,
    public fb: FormBuilder,
    public clientService: CrudService,
    public snackBar: MatSnackBar,
    private conversionService: AppDataConversionService,
    public errDialog: AppErrorService
  ) {
    super(clientService, errDialog, snackBar);
  }

  ngOnInit() {
    this.getClientSuggestions();
    this.buildConfigForm(this.data.payload);

    // Manage validation when select private channel
    this.configForm
      .get("channel")
      .valueChanges.subscribe(value => this.setPrivateChannelValidation(value));

    // Manage validation when checked predefined invitee groups.
    this.configForm
      .get("isPreDefined")
      .valueChanges.subscribe(value => this.setInviteeValidations(value));
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
      channel: [fieldItem.channel || "1"],
      inviteeGroupId: [fieldItem.inviteeGroupId || ""],
      isPreDefined: [fieldItem.isPredefined],
      inviteeGroupName: [fieldItem.inviteeGroupName || ""],
      userFile: [fieldItem.userFile]
    });
  }

  onFileChange(event) {
    let files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.csvFileName = files.item(0).name;
      let ext = this.csvFileName
        .substring(this.csvFileName.lastIndexOf(".") + 1)
        .toLowerCase();
      console.log("ext : " + ext);

      if (ext === "csv") {
        this.csvFile = files.item(0);
        let reader: FileReader = new FileReader();

        reader.readAsText(this.csvFile);

        reader.onload = e => {
          let readerResult = reader.result;

          let resultStr = readerResult + "";

          if (resultStr && resultStr.length > 0) {
            let jsonCsv: any[] = this.conversionService.CSV2JSON(readerResult);
            let validationResult = this.validateCSVContent(jsonCsv);
            this.invitees = validationResult.correctSet;
          }
        };
      } else {
        this.snackBar.open(
          "Invalid File type! Please upload csv file!",
          "close",
          { duration: 2000 }
        );
      }
    }
  }

  submit() {
    let title = this.configForm.get("title").value;
    let client = this.configForm.get("client").value;

    let jsonContent: JsonContentPart = new JsonContentPart(
      title,
      client,
      this.pageItem
    );
    let jsonString = JSON.stringify(jsonContent);

    let stringfiedJson = JSON.stringify(jsonString);

    let commonRoot: FSurveyConfigRequest;

    commonRoot = new FSurveyConfigRequest(
      this.configForm.value,
      stringfiedJson,
      this.invitees
    );

    let sendingReq: any;
    let publicRequest: PublicPart;
    let privateRequest: PrivatePart;
    if (commonRoot.channel === "1") {
      publicRequest = new PublicPart(
        commonRoot.title,
        commonRoot.clientId,
        commonRoot.channel,
        commonRoot.jsonContent,
        this.pageItem
      );
      sendingReq = publicRequest;
    }
    if (commonRoot.channel === "2") {
      privateRequest = new PrivatePart(
        commonRoot.title,
        commonRoot.clientId,
        commonRoot.channel,
        commonRoot.jsonContent,
        this.pageItem,
        commonRoot.isPreDefined,
        commonRoot.inviteeGroupId,
        commonRoot.inviteeGroupName,
        commonRoot.invitees
      );
      sendingReq = privateRequest;
    }

    console.log(sendingReq);

    this.dialogRef.close(sendingReq);
  }
}

export class JsonContentPart {
  constructor(public title, public clientId, public pages: any) {}
}