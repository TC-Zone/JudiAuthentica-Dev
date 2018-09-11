import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "../../../../../../node_modules/@angular/material";
import { CrudService } from "../../../cruds/crud.service";
import { Subscription } from "../../../../../../node_modules/rxjs";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { debounceTime, switchMap } from "rxjs/operators";
import { Clients, Content } from "./../../../../model/ClientModel.model";
import { Observable } from "rxjs/observable";
import { DateValidator } from "../../../../utility/dateValidator";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";
import { Client } from "../../../cruds/user.model";
import { Product } from "../../../../shared/models/product.model";

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
  selector: "app-product-crud-popup",
  templateUrl: "./product-crud-popup.component.html",
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ProductCrudPopupComponent implements OnInit {
  public productForm: FormGroup;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  public filteredClient: Observable<Clients>;
  tomorrow: Date;
  imageFile: File;

  // image uploader related properties
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  imageObject: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    private clientService: CrudService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // validate back dates
    this.tomorrow = DateValidator.dateValidate();

    this.getClientSuggestions();
    this.buildProductForm(this.data.payload);
    this.filteredClient = this.productForm.get("client").valueChanges.pipe(
      debounceTime(200),
      switchMap(value => this.clientService.search({ name: value }, 1))
    );
  }

  getClientSuggestions() {
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
      });
  }

  getAllClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;
    });
  }

  buildProductForm(fieldItem) {
    const client = fieldItem.client;
    const clientId = client ? client.id : null;

    this.productForm = this.fb.group({
      client: [clientId || ""],
      code: [fieldItem.code || "", Validators.required],
      name: [fieldItem.name || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      file: [fieldItem.file || ""]
    });
  }

  submit() {
    console.log("PRODUCT FORM VALUES ");
    console.log(this.productForm.value);

    let productRequest: ProductCreationRequest = new ProductCreationRequest(
      this.productForm.value
    );

    console.log("ProductCreationRequest" + JSON.stringify(productRequest));

    let formData;
    if (this.data.isNew) {
      console.log("NEW SAVE CONTEXT");
      formData = this.prepareToSave(productRequest);
    } else {
      console.log("update context");
      formData = productRequest;
    }

    console.log("prepared form data ");
    console.log(JSON.stringify(formData));
    this.dialogRef.close(formData);
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

  prepareToSave(formvalue): FormData {
    let input: FormData = new FormData();
    input.append("file", this.imageFile);
    input.append("code", formvalue.code);
    input.append("quantity", formvalue.quantity);
    input.append("client", formvalue.client.id);
    input.append(
      "expireDate",
      moment(formvalue.expireDate).format("YYYY-MM-DD")
    );
    input.append("name", formvalue.name);
    input.append("description", formvalue.description);
    input.append("batchNumber", formvalue.batchNumber);

    return input;
  }
}

export class ProductCreationRequest {
  client: ClientSub;
  code: string;
  name: string;
  description: string;
  batchNumber: string;
  quantity: string;
  expireDate: string;
  file: any;

  constructor(public formValue: any) {
    this.client = new ClientSub(formValue.client);
    this.code = formValue.code;
    this.name = formValue.name;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.file = formValue.file;
  }
}

class ClientSub {
  constructor(public id: string) {}
}
