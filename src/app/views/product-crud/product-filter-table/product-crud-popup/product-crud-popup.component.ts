import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatSnackBar
} from "@angular/material";
import { CrudService } from "../../../cruds/crud.service";
import { Subscription, Observable } from "rxjs";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { debounceTime, switchMap, distinctUntilChanged } from "rxjs/operators";
import { Clients, Content } from "./../../../../model/ClientModel.model";

import { DateValidator } from "../../../../utility/dateValidator";

import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";
import { SurveyService } from "../../../survey/survey.service";
import { environment } from "environments/environment.prod";

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
  imageUrl: any = "assets/images/placeholder.jpg";

  getAllSurveySub: Subscription;
  surveyRows: any[];

  // image uploader related properties
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  imageObject: any;
  //------- new --------
  urls = [];
  selectedFileList = [];
  maxUploadableFileCount: number = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    private clientService: CrudService,
    private surveyService: SurveyService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {

    // validate back dates
    this.tomorrow = DateValidator.getTomorrow();

    if (!this.data.isNew) {
      console.log("IPDATE CONTEXT");
      console.log(this.data.payload.imageObjects);
      let images: any[] = this.data.payload.imageObjects;
      images.forEach(image => {
        let img = environment.imageUrl + "downloadFile/" + image.id;

        this.clientService.getImageById(img).subscribe(data => {
          console.log("BLOB....................");
          console.log(data);
          const file = new File([data], "testfile");
          console.log("FILE ..............");
          console.log(file);
          this.selectedFileList.push(file);
        });

        this.urls.push(img);
      });
      console.log("UPDATE URLS ...............................");
      console.log(this.urls);
      console.log("FILE ARRAY....................................");
      console.log(this.selectedFileList);
    }

    this.getAllSurvey();
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
      client: [clientId || "", { disabled: !this.data.isNew }],
      code: [fieldItem.code || "", Validators.required],
      name: [fieldItem.name || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      surveyId: [fieldItem.surveyId || null],
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

    formData = this.prepareToSave(productRequest);

    console.log("-----------  prepared form data ");
    console.log(formData);
    console.log(JSON.stringify(formData));
    this.dialogRef.close(formData);
  }

  // image uploader related functions from here
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  // --------- Old Code -----------------

  // onSelectFile(event) {
  //   let x = this.uploader.queue.length - 1;
  //   this.imageObject = this.uploader.queue[x];

  //   let reader = new FileReader();
  //   if (event.target.files && event.target.files.length > 0) {
  //     this.imageFile = event.target.files[0];
  //     reader.readAsDataURL(this.imageFile);
  //     reader.onload = (event: any) => {
  //       this.imageUrl = event.target.result;
  //       console.log("IMAGE URL  : " + this.imageUrl);
  //     };
  //   }
  // }

  // --------- New Code -----------------
  // File uploader validation and upload
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if (
        this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
          ? true
          : this.selectedFileList.length + filesAmount <=
            this.maxUploadableFileCount
      ) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();

          reader.onload = (event: any) => {
            this.urls.push(event.target.result);
          };

          reader.readAsDataURL(event.target.files[i]);
          this.selectedFileList.push(event.target.files[i]);
        }
      } else {
        // alert for file uploa limit
        this.snackBar.open(
          "Can't upload more than " + this.maxUploadableFileCount + " photos",
          "close",
          { duration: 2000 }
        );
      }

      this.viewIPArray();
    }
  }

  // --------- For Testing -----------------

  viewIPArray() {
    console.log("--------------- start ------------------");
    console.log(this.selectedFileList.length);
    console.log("---------------------------------");
    // console.log(this.urls);
    console.log("---------------------------------");
    console.log(this.selectedFileList);
    console.log("--------------- end ------------------");
  }

  removeSelectedImg(index: number) {
    console.log("remove -- " + index);
    this.urls.splice(index, 1);
    this.selectedFileList.splice(index, 1);
    this.viewIPArray();
  }

  prepareToSave(formvalue): FormData {
    let input: FormData = new FormData();
    if (formvalue.surveyId) {
      input.append("surveyId", formvalue.surveyId);
    }

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

    for (let i = 0; i < this.selectedFileList.length; i++) {
      let selectedFile: File = this.selectedFileList[i];
      let type = selectedFile.type.split("/");
      let imageName = "image_" + i + "." + type[1];
      input.append("file", selectedFile, imageName);
    }

    console.log("------------------ tst 01 ");
    console.log(input.get("file_1"));

    return input;
  }

  getAllSurvey() {
    this.getAllSurveySub = this.surveyService
      .getAllSurveys()
      .subscribe(successResp => {
        this.surveyRows = successResp.content;
      });
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
  surveyId: string;
  file: any;

  constructor(public formValue: any) {
    console.log("SURVEY ID :  " + formValue.surveyId);
    this.client = new ClientSub(formValue.client);
    this.code = formValue.code;
    this.name = formValue.name;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.surveyId = formValue.surveyId;
    this.file = formValue.file;
  }
}

class ClientSub {
  constructor(public id: string) {}
}
