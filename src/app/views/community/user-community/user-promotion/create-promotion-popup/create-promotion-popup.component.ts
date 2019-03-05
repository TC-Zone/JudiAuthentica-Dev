import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DateValidator } from 'app/utility/dateValidator';

@Component({
  selector: 'app-create-promotion-popup',
  templateUrl: './create-promotion-popup.component.html',
  animations: egretAnimations
})
export class CreatePromotionPopupComponent implements OnInit {

  public offerForm: FormGroup;
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
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildOfferForm(this.data.payload);
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.setStartDateMin();
    this.createImgUrls();
  }

  buildOfferForm(offerFormData) {
    this.offerForm = this.fb.group({
      name: [offerFormData.name || '', Validators.required],
      description: [offerFormData.description || '', Validators.required],
      status: [offerFormData.status || false, Validators.required],
      discount: [offerFormData.discount || '', Validators.required],
      startDate: [offerFormData.startDate, Validators.required],
      endDate: [offerFormData.endDate, Validators.required],
      file: [offerFormData.file || '', Validators.required]
    });
  }

  setStartDateMin() {
    const payload = this.data.payload;
    const today = DateValidator.getToday();
    if (payload) {
      if (payload.startDate < today) {
        this.startDateMin = payload.startDate;
      } else {
        this.startDateMin = today;
      }
    }
  }

  validateDatePickerMinMax() {
    const startDateValue = this.offerForm.get('startDate').value;
    const endDateValue = this.offerForm.get('endDate').value;

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

  removeSelectedImg(index: number) {
    this.urls.splice(index, 1);
    this.currentTotalImageCount -= 1;

    if (this.remainImagesID.length < index + 1) {
      this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    } else {
      this.remainImagesID.splice(index, 1);
    }
  }

  prepareOfferFormData(formValues): FormData {
    const offerFormData: FormData = new FormData();
    offerFormData.append('communityId', this.comunityId);
    offerFormData.append('name', formValues.name);
    offerFormData.append('description', formValues.description);
    offerFormData.append('startDate', formValues.startDate);
    offerFormData.append('endDate', formValues.endDate);
    offerFormData.append('status', formValues.status);
    offerFormData.append('discount', formValues.discount);

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      const selectedFile: File = this.newlySelectedFileList[i];
      const type = selectedFile.type.split("/");
      const imageName = 'image_' + i + '.' + type[1];
      offerFormData.append('file', selectedFile, imageName);
    }

    return offerFormData;
  }

  offerFormSubmit() {
    const offerFormData = this.prepareOfferFormData(this.offerForm.value);
    this.dialogRef.close(offerFormData);
  }

  createImgUrls() {
    const payload = this.data.payload;
    if (payload) {
      if (payload.hasOwnProperty('file')) {
        this.urls.push(payload.file);
        this.currentTotalImageCount = 1;
      }
    }
  }

}
