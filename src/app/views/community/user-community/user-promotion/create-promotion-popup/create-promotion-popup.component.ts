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
  public minHeight = 240;
  public minWidth = 320;

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
      start: [promotionFormData.start, Validators.required],
      end: [promotionFormData.end, Validators.required],
      promoPoster: [promotionFormData.promoPoster || '', Validators.required]
    });
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
    const startDateValue = this.promotionForm.get('start').value;
    const endDateValue = this.promotionForm.get('end').value;

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
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      if (
        this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
          ? true
          : this.currentTotalImageCount + filesAmount <=
          this.maxUploadableFileCount
      ) {
        for (let i = 0; i < filesAmount; i++) {
          const fileName = event.target.files[i].name;
          const fileExtension = fileName.replace(/^.*\./, '');
          if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
            const reader = new FileReader();
            reader.onload = (ev: any) => {
              const img = new Image();
              img.src = ev.target.result;
              const widthReminder = img.width % 4;
              const heightReminder = img.height % 3;
              if (img.width < this.minWidth && img.height < this.minHeight) {
                this.snackBar.open(
                  'Please upload' + this.minWidth + ' X ' + this.minHeight + ' size image files only',
                  'close',
                  { duration: 3000 }
                );
                this.currentTotalImageCount--;
                return;
              }
              if (widthReminder !== 0 || heightReminder !== 0) {
                this.snackBar.open(
                  'Please upload' + this.minWidth + ' X ' + this.minHeight + ' size image files only',
                  'close',
                  { duration: 3000 }
                );
                this.currentTotalImageCount--;
                return;
              }
              this.urls.push(ev.target.result);
            };
            reader.readAsDataURL(event.target.files[i]);
            this.newlySelectedFileList.push(event.target.files[i]);
            this.currentTotalImageCount++;
          } else {
            this.snackBar.open(
              'Invalid file type in ' + fileName + ', Please upload image files only',
              'close',
              { duration: 3000 }
            );
            this.currentTotalImageCount--;
            return;
          }
        }

      } else {
        // alert for file upload limit
        this.snackBar.open(
          'Can\'t upload more than ' + this.maxUploadableFileCount + ' photos',
          'close',
          { duration: 2000 }
        );
      }
    }
  }

  /*
  * Remove uploade image
  * 06-03-2019
  * Prasad Kumara
  */
  removeSelectedImg(index: number) {
    this.urls.splice(index, 1);
    this.currentTotalImageCount -= 1;

    if (this.remainImagesID.length < index + 1) {
      this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    } else {
      this.remainImagesID.splice(index, 1);
    }
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
    promotionFormData.append('start', formValues.start);
    promotionFormData.append('end', formValues.end);
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
    promotionFormData.promoPoster = this.urls[0];
    promotionFormData.start = this.datePipe.transform(this.promotionForm.value.start, 'yyy-MM-dd');
    promotionFormData.end = this.datePipe.transform(this.promotionForm.value.end, 'yyy-MM-dd');
    this.dialogRef.close(promotionFormData);
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
            this.errDialog.showErrorWithMessage(error);
          }
        }
      );
  }

}
