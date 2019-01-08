import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EvoteService } from "../evote-service.service";
import { Subscription } from "rxjs";
import { CrudService } from "../../cruds/crud.service";
import { ResponseModel } from "../../../model/ResponseModel.model";

@Component({
  selector: "app-voter-popup",
  templateUrl: "./voter-popup.component.html"
})
export class VoterPopupComponent implements OnInit, OnDestroy {
  public voterForm: FormGroup;

  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  fileObject: File = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private evoteService: EvoteService,
    private clientService: CrudService,
    public dialogRefVote: MatDialogRef<VoterPopupComponent>
  ) {}

  ngOnInit() {
    this.getClients();
    this.buildVoterForm(this.data.payload);
  }

  ngOnDestroy() {
    if (this.getClientSub) {
      this.getClientSub.unsubscribe();
    }
  }

  getClients() {
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
      });
  }

  buildVoterForm(fieldItem) {
    this.voterForm = this.fb.group({
      client: [fieldItem.client || "", Validators.required],
      file: [fieldItem.file || "", Validators.required]
    });
  }

  submit() {
    console.log("called submit ");
    this.dialogRefVote.close(this.prepareToSave(this.voterForm.value));
  }

  prepareToSave(formValue): any {
    let formData: FormData = new FormData();
    formData.append("client", formValue.client);
    formData.append("file", this.fileObject);
    return formData;
  }

  handleFileInput(files: FileList) {
    console.log("called hande file ");
    let fileItem = files.item(0);
    console.log("file input has changed. The file is", fileItem);
    this.fileObject = fileItem;
  }
}
