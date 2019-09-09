import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatSnackBar
} from "@angular/material";
import { Subscription, Observable } from "rxjs";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { startWith, map } from "rxjs/operators";
import { DateValidator } from "../../../../utility/dateValidator";

import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";
import { SurveyService } from "../../../survey/survey.service";
import { environment } from "environments/environment.prod";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { ProductCommonComponent } from "../../product-crud-common.component";
import { ClientService } from "../../../client/client.service";
import { AuthenticationService } from "../../../sessions/authentication.service";
import { ComunityService } from "../../../community/community.service";
import { AppInfoService } from "../../../../shared/services/app-info/app-info.service";
import { ProductCreationRequest } from "app/model/ProductModel.model ";
import { GlobalVariable } from "app/shared/helpers/global-variable";

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
  animations: egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ProductCrudPopupComponent extends ProductCommonComponent implements OnInit {

  private globalVariable: GlobalVariable = new GlobalVariable();
  private regex = this.globalVariable.validators.regex;


  private productForm: FormGroup;
  private tomorrow: Date;

  // image uploader related properties
  private maxUploadableFileCount: number = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
  private urls = [];
  private newlySelectedFileList = [];
  private remainImagesID = [];
  private currentTotalImageCount: number = 0;

  private clientId: string;

  private communities: string[] = [];
  private communityIDs: string[] = [];
  private communityFilteredOption: Observable<string[]>;
  private selectedCommunityId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    public clientService: ClientService,
    public surveyService: SurveyService,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private communityService: ComunityService,
    private appInfoService: AppInfoService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(surveyService, clientService);
  }

  ngOnInit() {

    this.tomorrow = DateValidator.getTomorrow();
    const currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;

    this.getClientCategories(this.clientId);

    if (!this.data.isNew) {
      let images: any[] = this.data.payload.imageObjects;
      images.forEach(image => {
        let img = environment.productimageUrl + "downloadFile/" + image.id;
        this.remainImagesID.push(image.id);
        this.urls.push(img);
      });

      this.currentTotalImageCount = this.remainImagesID.length;
    }

    this.getAllClientCommunities(this.clientId);
    this.buildProductForm(this.data.payload, this.data.isNew);
  }

  communityOnChange() {
    this.communityFilteredOption = this.productForm.controls[
      "communityId"
    ].valueChanges.pipe(
      startWith(""),
      map(value => this._communityFilter(value))
    );
    this.onCommunitySelectionChanged();
  }

  private _communityFilter(value: string): string[] {
    if (value === "" || isNaN(Number(value))) {
      const filterValue = value.toLowerCase();
      return this.communities.filter(option =>
        option.toLowerCase().includes(filterValue)
      );
    }
  }

  onCommunitySelectionChanged() {
    const inputVal = this.productForm.controls["communityId"].value;
    const id = this.communityIDs.indexOf(inputVal);
    if (id > -1) {
      this.productForm.controls["communityId"].setValue(this.communities[id]);
      this.selectedCommunityId = inputVal;
    } else {
      console.log("============ else ==================");
    }
  }

  communityOnFocusOut(event) {
    if (!(this.communities.indexOf(event.currentTarget.value) > -1)) {
      this.productForm.controls["communityId"].setValue("");
    }
  }

  getAllClientCommunities(clientId) {
    this.clientService.getClientCommunities(clientId).subscribe(data => {
      const communities = data.content;
      communities.forEach(element => {
        this.communities.push(element.name);
        this.communityIDs.push(element.id);
        this.communityOnChange();
      });
    });
  }

  buildProductForm(fieldItem, isNew) {
    // const client = fieldItem.client;
    // const clientId = client ? client.id : null;

    const videoUrl = fieldItem.videoUrl;
    let youtubeUrl = null;
    if (videoUrl) {
      youtubeUrl = isNew
        ? videoUrl
        : "https://www.youtube.com/watch?v=" + videoUrl;
    }

    this.productForm = this.fb.group({
      name: new FormControl(fieldItem.name || "", [Validators.required, Validators.pattern(this.regex._PosNumberAndLetter)]),
      description: new FormControl(fieldItem.description || "", Validators.required),
      batchNumber: new FormControl(fieldItem.batchNumber || "", [Validators.required, Validators.pattern(this.regex._PosNumber)]),
      quantity: new FormControl(fieldItem.quantity || "", [Validators.required, Validators.pattern(this.regex._PosNumber), Validators.min(1)]),
      expireDate: new FormControl(fieldItem.expireDate || "", Validators.required),
      videoUrl: new FormControl(youtubeUrl || "", [Validators.required, Validators.pattern(this.regex._YoutubeId)]),
      file: new FormControl(),
      categoryId: new FormControl(fieldItem.categoryId || "", Validators.required),
      communityId: new FormControl(fieldItem.communityId || "", Validators.required)
    });

    if(fieldItem.expireDate){
      var d = new Date(fieldItem.expireDate);
      if(d < this.tomorrow){
        this.productForm.controls['expireDate'].markAsTouched();
      }
    }
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.communityService
      .licenseExpireState(this.clientId, "tags")
      .subscribe(response => {
        const tempRes: any = response;
        const quotaExpire: boolean = tempRes.content.expired;
        const usage = tempRes.content.usage;
        const quota = tempRes.content.quota;
        const qty = this.productForm.get("quantity").value;

        const balance = quota - usage;

        if (qty > balance) {
          const infoData = {
            title: "Quantity Exceed!",
            message:
              "To extend the order quantity please contact your Administrator.",
            linkData: {
              url: "https://www.google.com/gmail/",
              buttonText: "Extend"
            }
          };
          this.appInfoService.showInfo(infoData);
        } else {
          const productRequest: ProductCreationRequest = new ProductCreationRequest(
            this.productForm.value
          );
          let formData;
          formData = this.prepareToSave(productRequest);
          this.dialogRef.close(formData);
        }
      });
  }

  // image uploader related functions from here
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }

  // --------- New Code -----------------
  // File uploader validation and upload
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if (
        this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
          ? true
          : this.currentTotalImageCount + filesAmount <=
          this.maxUploadableFileCount
      ) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();

          reader.onload = (event: any) => {
            this.urls.push(event.target.result);
          };

          reader.readAsDataURL(event.target.files[i]);
          this.newlySelectedFileList.push(event.target.files[i]);
        }
        this.currentTotalImageCount += filesAmount;
      } else {
        // alert for file upload limit
        this.snackBar.open(
          "Can't upload more than " + this.maxUploadableFileCount + " photos",
          "close",
          { duration: 2000 }
        );
      }
    }
  }

  removeSelectedImg(index: number) {
    this.urls.splice(index, 1);
    this.currentTotalImageCount -= 1;

    if (this.remainImagesID.length < index + 1) {
      this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    } else {
      this.remainImagesID.splice(index, 1);
    }
  }

  prepareToSave(formvalue): FormData {
    let input: FormData = new FormData();

    // RAVEEN - 2014/04/04 : client id is no longer an input
    input.append("client", this.clientId);

    if (formvalue.communityId) {
      input.append("communityId", this.selectedCommunityId);
    }

    let videoUrl = formvalue.videoUrl;
    if (videoUrl) {
      let match = videoUrl.match(this.regex._YoutubeId);
      if (match && match[8].length == 11) {
        console.log("---------------- youtubeVideoId: - " + match[8]);
      }
      input.append("videoUrl", match[8]);
    }

    input.append("code", formvalue.code);
    input.append("quantity", formvalue.quantity);

    input.append(
      "expireDate",
      moment(formvalue.expireDate).format("YYYY-MM-DD")
    );
    input.append("name", formvalue.name);
    input.append("description", formvalue.description);
    input.append("batchNumber", formvalue.batchNumber);
    input.append("categoryId", formvalue.categoryId);

    if (this.remainImagesID != null && this.remainImagesID.length > 0) {
      input.append("remainImagesID", this.remainImagesID.toString());
    }

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      let selectedFile: File = this.newlySelectedFileList[i];
      let type = selectedFile.type.split("/");
      let imageName = "image_" + i + "." + type[1];
      input.append("file", selectedFile, imageName);
    }

    console.log('------------------------- input', input);


    return input;
  }
}


