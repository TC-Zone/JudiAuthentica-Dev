import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatSnackBar,
} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from 'app/utility/dateValidator';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-create-event-popup',
  templateUrl: './create-event-popup.component.html',
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
export class CreateEventPopupComponent implements OnInit {

  public eventForm: FormGroup;
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
    public dialogRef: MatDialogRef<CreateEventPopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildEventForm(this.data.payload);
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.setStartDateMin();
    this.createImgUrls();
  }

  buildEventForm(eventformdata) {
    this.eventForm = this.fb.group({
      name: [eventformdata.name || '', Validators.required],
      description: [eventformdata.description || '', Validators.required],
      status: [eventformdata.status || false, Validators.required],
      startDate: [eventformdata.startDate, Validators.required],
      endDate: [eventformdata.endDate, Validators.required],
      file: [eventformdata.file || '', Validators.required]
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
    const startDateValue = this.eventForm.get('startDate').value;
    const endDateValue = this.eventForm.get('endDate').value;

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

  prepareEventFormData(formValues): FormData {
    const eventFormData: FormData = new FormData();
    eventFormData.append('communityId', this.comunityId);
    eventFormData.append('name', formValues.name);
    eventFormData.append('description', formValues.description);
    eventFormData.append('startDate', formValues.startDate);
    eventFormData.append('endDate', formValues.endDate);
    eventFormData.append('status', formValues.status);

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      const selectedFile: File = this.newlySelectedFileList[i];
      const type = selectedFile.type.split("/");
      const imageName = 'image_' + i + '.' + type[1];
      eventFormData.append('file', selectedFile, imageName);
    }

    return eventFormData;
  }

  eventFormSubmit() {
    const eventFormData = this.prepareEventFormData(this.eventForm.value);
    this.dialogRef.close(eventFormData);
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
