import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "../../../../../../node_modules/@angular/material";
import { Subscription } from "../../../../../../node_modules/rxjs";
import {EvoteService } from '../../evote-service.service';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateValidator} from '../../../../utility/dateValidator';
import { CrudService } from "../../../cruds/crud.service";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD"
  },
  display: {
    dateInput: "YYYY-MM-DD",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'app-evote-popup',
  templateUrl: './evote-popup.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EvotePopupComponent implements OnInit {

  public evoteForm: FormGroup;
  public getClientSub: Subscription;
  public response: ResponseModel;
  tomorrow : Date;
  public clients: any[];
  imageFile: File;

  // image uploader related properties
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  imageObject: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private evoteService: EvoteService,
    private clientService: CrudService,
    public dialogRef: MatDialogRef<EvotePopupComponent>,
  ) { }

  ngOnInit() {
    this.tomorrow = DateValidator.dateValidate();
    this.buildEvoteForm(this.data.payload);
    this.getClientSuggestions();
   // console.log(this.data.payload);

  }

  getClientSuggestions() {
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
      });
  }

    // image uploader related functions from here
    public fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
    }

    onSelectFile(event) {
      let x = this.uploader.queue.length - 1;
      this.imageObject = this.uploader.queue[x];

      //let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        this.imageFile = event.target.files[0];

        // reader.readAsDataURL(file);
        // reader.onload = () => {
        //   this.productForm.get("file").setValue({
        //     filename: file.name,
        //     filetype: file.type,
        //     value: reader.result
        //   });
      }
    }

  buildEvoteForm(fieldItem) {
    const client = fieldItem.client;
    const clientId = client ? client.id : null;

    this.evoteForm = this.fb.group({
      topic: [fieldItem.topic || "",Validators.required],
      client: [clientId || ""],
      code: [fieldItem.code || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      file: [fieldItem.file || ""]
    });
  }
  submit() {
    console.log("PRODUCT FORM VALUES ");
    console.log(this.evoteForm.value);

    let evoteRequest: ProductCreationRequest = new ProductCreationRequest(
      this.evoteForm.value
    );

    console.log("ProductCreationRequest" + JSON.stringify(evoteRequest));

    let formData;
    if (this.data.isNew) {
      console.log("NEW SAVE CONTEXT");
      console.log(this.prepareToSave(evoteRequest));
      formData = this.prepareToSave(evoteRequest);
    } else {
      console.log("update context");
      formData = evoteRequest;
    }
  
    
    //console.log(this.evoteForm.value)
    console.log("prepared form data ");
    console.log(formData);
    this.dialogRef.close(formData);
  }
  prepareToSave(formvalue): FormData {
    
    let input: FormData = new FormData();
    input.append("code", formvalue.code);
    input.append("quantity", formvalue.quantity);
    input.append(
      "expireDate",
      moment(formvalue.expireDate).format("YYYY-MM-DD")
    );
    input.append("topic", formvalue.topic);
    input.append("description", formvalue.description);
    input.append("batchNumber", formvalue.batchNumber);
    input.append("clientId", formvalue.client.id);
    input.append("file", this.imageFile);

    return input;
  
    
  }
}

export class ProductCreationRequest {

  code: string;
  quantity: string;
  expireDate: string;
  topic: string;
  description: string;
  batchNumber: string;
  client: ClientSub;
  file: any;

  constructor(public formValue: any) {

    this.code = formValue.code;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.topic = formValue.topic;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.client = new ClientSub(formValue.client);
    this.file = formValue.file;
  }
}

class ClientSub {
  constructor(public id: string) {}
}
