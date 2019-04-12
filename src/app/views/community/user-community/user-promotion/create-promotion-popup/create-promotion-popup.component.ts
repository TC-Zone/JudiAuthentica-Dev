import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DateValidator } from 'app/utility/dateValidator';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { UserPromotionService } from '../user-promotion.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-create-promotion-popup',
  templateUrl: './create-promotion-popup.component.html',
  animations: egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    DatePipe
  ]
})
export class CreatePromotionPopupComponent implements OnInit {

  public promotionForm: FormGroup;
  public startDateMin;
  public startDateMax;
  public endDateMin;
  public endDateMax;
  public currentTotalImageCount = 0;
  public maxUploadableFileCount = 1;
  public newlySelectedFileList = [];
  public urls = [];
  public remainImagesID = [];
  public comunityName: string;
  public comunityId: string;
  public minHeight = 200;
  public minWidth = 400;
  public imgBaseURL: string;
  public url;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreatePromotionPopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute,
    private errDialog: AppErrorService,
    private userPromotionService: UserPromotionService
  ) { }

  ngOnInit() {
    if (!this.data.isNew) {
      this.getPromotionById(this.data.payload.id);
    }
    this.buildPromotionForm(this.data.payload);
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.setStartDateMin();
    //edited by kushan
    this.imgBaseURL = this.userPromotionService.imageUrl;

  }

  /*
  * Build promotion create and update form
  * 06-03-2019
  * Prasad Kumara
  */
  buildPromotionForm(promotionFormData) {
    this.promotionForm = this.fb.group({
      name: [promotionFormData.name || '', Validators.required],
      description: [promotionFormData.description || '', Validators.required],
      status: [promotionFormData.status || false, Validators.required],
      percentage: [promotionFormData.percentage || '', Validators.required],
      startDate: [promotionFormData.startDate, Validators.required],
      endDate: [promotionFormData.endDate, Validators.required],
      promoPoster: ['']
    });

    getBase64ImageFromUrl(this.imgBaseURL + promotionFormData.id)
      .then(result => this.url = result)
      .catch(err => console.error(err));
  }

  /*
  * Set start date min value
  * 06-03-2019
  * Prasad Kumara
  */
  setStartDateMin() {
    const payload = this.data.payload;
    const today = DateValidator.getToday();
    const startDate = new Date(payload.start);
    if (payload) {
      if (startDate < today) {
        this.startDateMin = startDate;
      } else {
        this.startDateMin = today;
      }
    }
  }

  /*
  * Validate start and end date min and max value
  * 06-03-2019
  * Prasad Kumara
  */
  validateDatePickerMinMax() {
    const startDateValue = this.promotionForm.get('startDate').value;
    const endDateValue = this.promotionForm.get('endDate').value;

    if (startDateValue == null && endDateValue == null) {
      this.startDateMin = DateValidator.getToday();
      this.endDateMin = DateValidator.getToday();
    } else {
      if (startDateValue != null) {
        this.endDateMin = startDateValue;
      }
      if (endDateValue != null) {
        this.startDateMax = endDateValue;
      }
    }
  }

  /*
  * Image upload function
  * 06-03-2019
  * Prasad Kumara
  */
  onSelectFile(event) {
    // if (event.target.files && event.target.files[0]) {
    //   const filesAmount = event.target.files.length;
    //   if (
    //     this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
    //       ? true
    //       : this.currentTotalImageCount + filesAmount <=
    //       this.maxUploadableFileCount
    //   ) {
    //     for (let i = 0; i < filesAmount; i++) {
    //       const fileName = event.target.files[i].name;
    //       const fileExtension = fileName.replace(/^.*\./, '');
    //       if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
    //         const reader = new FileReader();
    //         reader.onload = (ev: any) => {
    //           const img = new Image();
    //           img.src = ev.target.result;
    //           img.onload = () => {
    //             const widthReminder = img.width % 4;
    //             const heightReminder = img.height % 3;
    //             if (img.width < this.minWidth && img.height < this.minHeight) {
    //               this.snackBar.open(
    //                 'Image minimum dimension should be ' + this.minWidth + 'X' + this.minHeight,
    //                 'close',
    //                 { duration: 3000 }
    //               );
    //               this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
    //               this.currentTotalImageCount--;
    //               return;
    //             }
    //             if (widthReminder !== 0 || heightReminder !== 0) {
    //               this.snackBar.open(
    //                 'Image aspect ratio should be 4:3 (' + this.minWidth + 'X' + this.minHeight + ')' ,
    //                 'close',
    //                 { duration: 3000 }
    //               );
    //               this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
    //               this.currentTotalImageCount--;
    //               return;
    //             }
    //             this.urls.push(ev.target.result);
    //             this.promotionForm.controls['promoPoster'].setErrors(null);
    //           };
    //         };
    //         reader.readAsDataURL(event.target.files[i]);
    //         this.newlySelectedFileList.push(event.target.files[i]);
    //         this.currentTotalImageCount++;
    //       } else {
    //         this.snackBar.open(
    //           'Upload valiid images. Only PNG, JPG and JPEG are allowed!',
    //           'close',
    //           { duration: 3000 }
    //         );
    //         this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});
    //         this.currentTotalImageCount--;
    //         return;
    //       }
    //     }

    //   } else {
    //     // alert for file upload limit
    //     this.snackBar.open(
    //       'Can\'t upload more than ' + this.maxUploadableFileCount + ' photos',
    //       'close',
    //       { duration: 2000 }
    //     );
    //   }
    // }
    if (event.target.files && event.target.files[0]) {

      // const fileName = event.target.files[i].name;
      // const fileExtension = fileName.replace(/^.*\./, '');

      let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
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
      console.log(file);

      reader.onload = (event: any) => {
        const img = new Image();

        img.src = event.target.result;
        img.onload = () => {
          if (img.width < this.minWidth || img.height < this.minHeight) {
            this.url = event.target.result;
          } else {
            this.snackBar.open(
              'Image minimum dimension should be ' + this.minWidth + 'X' + this.minHeight,
              'close',
              { duration: 3000 }
            );
            this.promotionForm.controls['poster'].setErrors({ 'incorrect': true });
            return;
          }
        }
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

  /*
  * Remove uploade image
  * 06-03-2019
  * Prasad Kumara
  */
  removeSelectedImg(index: number) {
    // this.urls.splice(index, 1);
    // this.currentTotalImageCount -= 1;
    // this.promotionForm.controls['promoPoster'].setErrors({'incorrect': true});

    // if (this.remainImagesID.length < index + 1) {
    //   this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    // } else {
    //   this.remainImagesID.splice(index, 1);
    // }
    this.url = null;
  }

  /*
  * Convert Json to form data
  * 06-03-2019
  * Prasad Kumara
  */
  prepareOfferFormData(formValues): FormData {
    const promotionFormData: FormData = new FormData();
    promotionFormData.append('communityId', this.comunityId);
    promotionFormData.append('name', formValues.name);
    promotionFormData.append('description', formValues.description);
    promotionFormData.append('startDate', formValues.startDate);
    promotionFormData.append('endDate', formValues.endDate);
    promotionFormData.append('status', formValues.status);
    promotionFormData.append('percentage', formValues.percentage);

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      const selectedFile: File = this.newlySelectedFileList[i];
      const type = selectedFile.type.split("/");
      const imageName = 'image_' + i + '.' + type[1];
      promotionFormData.append('promoPoster', selectedFile, imageName);
    }

    return promotionFormData;
  }

  /*
  * Promotion form value submit
  * 06-03-2019
  * Prasad Kumara
  */
  promotionFormSubmit() {
    // const promotionFormData = this.prepareOfferFormData(this.promotionForm.value);
    const promotionFormData = this.promotionForm.value;
    if (this.url) {

      promotionFormData.promoPoster = this.url;
      const startDate: string = this.datePipe.transform(this.promotionForm.value.startDate, 'yyy-MM-dd');
      const endDate: string = this.datePipe.transform(this.promotionForm.value.endDate, 'yyy-MM-dd');
      promotionFormData.startDate = startDate;
      promotionFormData.endDate = endDate;
      console.log(promotionFormData);

      this.dialogRef.close(promotionFormData);
    } else {
      this.snackBar.open(
        "Please upload image",
        "close",
        { duration: 2000 }
      );
      this.promotionForm.controls['poster'].setErrors({ 'incorrect': true });
    }

  }

  /*
  * Create image url
  * 06-03-2019
  * Prasad Kumara
  */
  createImgUrls(promotion) {
    if (promotion.hasOwnProperty('promoPoster')) {
      this.urls.push(promotion.promoPoster);
      this.currentTotalImageCount = 1;
    }
  }

  /*
  * Get promtion data using promotion id
  * 06-03-2019
  * Prasad Kumara
  */
  getPromotionById(promotionId) {
    this.userPromotionService.getPromotionById(promotionId)
      .subscribe(
        response => {
          const tempArr: any = response;
          if (tempArr.content.status === 'INACTIVE') {
            tempArr.content.status = false;
          } else {
            tempArr.content.status = true;
          }
          this.buildPromotionForm(tempArr.content);
          this.createImgUrls(tempArr.content);
        },
        error => {
          if (error.status !== 401) {
            this.errDialog.showError(error);
          }
        }
      );
  }

}

/* created by kushan pabasara */
async function getBase64ImageFromUrl(imageUrl) {
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      resolve(reader.result);

    }, false);

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  })
}
