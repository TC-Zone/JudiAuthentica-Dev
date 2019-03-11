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
import { DatePipe } from '@angular/common';
import { UserEventService } from '../user-event.service';
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
  selector: 'app-create-event-popup',
  templateUrl: './create-event-popup.component.html',
  animations: egretAnimations,
  providers: [ DatePipe ]
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
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private errDialog: AppErrorService,
    private userEventService: UserEventService
  ) { }

  ngOnInit() {
    if (!this.data.isNew) {
      this.getEventById(this.data.payload.id);
    }
    this.buildEventForm(this.data.payload);
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.setStartDateMin();
  }

  /*
  * Build Event Create and Update Form
  * 05-03-2019
  * Prasad Kumara
  */
  buildEventForm(eventformdata) {
    this.eventForm = this.fb.group({
      name: [eventformdata.name || '', Validators.required],
      description: [eventformdata.description || '', Validators.required],
      status: [eventformdata.status || false, Validators.required],
      startDateTime: [eventformdata.startDateTime, Validators.required],
      endDateTime: [eventformdata.endDateTime, Validators.required],
      poster: [eventformdata.poster || '', Validators.required]
    });
  }

  /*
  * Get event data by event id
  * 05-03-2019
  * Prasad Kumara
  */
  getEventById(eventId) {
    this.userEventService.getEventById(eventId)
      .subscribe(
        response => {
          const tempArr: any = response;
          const event = this.createDateTimeObject(tempArr.content);
          console.log(event);
          this.buildEventForm(event);
          this.createImgUrls(event);
        },
        error => {
          if (error.status !== 401) {
            this.errDialog.showErrorWithMessage(error);
          }
        }
      );
  }

  /*
  * Set Start date minimum value
  * 05-03-2019
  * Prasad Kumara
  */
  setStartDateMin() {
    const payload = this.data.payload;
    const today = DateValidator.getToday();
    if (payload) {
      const startDate = new Date(payload.startDateTime);
      if (startDate < today) {
        this.startDateMin = startDate;
      } else {
        this.startDateMin = today;
      }
    }
  }

  /*
  * Validate Date time picker minimum and maximum value
  * 05-03-2019
  * Prasad Kumara
  */
  validateDatePickerMinMax() {
    const startDateValue = this.eventForm.get('startDateTime').value;
    const endDateValue = this.eventForm.get('endDateTime').value;

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
  * Image file upload function
  * 05-03-2019
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
  * Remove selected images
  * 05-03-2019
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
  * Convert Json Event data to formData
  * 05-03-2019
  * Prasad Kumara
  */
  prepareEventFormData(formValues): FormData {
    const eventFormData: FormData = new FormData();
    eventFormData.append('communityId', this.comunityId);
    eventFormData.append('name', formValues.name);
    eventFormData.append('description', formValues.description);
    eventFormData.append('startDateTime', formValues.startDateTime);
    eventFormData.append('endDateTime', formValues.endDateTime);
    eventFormData.append('status', formValues.status);

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      const selectedFile: File = this.newlySelectedFileList[i];
      const type = selectedFile.type.split("/");
      const imageName = 'image_' + i + '.' + type[1];
      eventFormData.append('poster', selectedFile, imageName);
    }

    return eventFormData;
  }

  /*
  * Create and Update Event Submit function
  * 05-03-2019
  * Prasad Kumara
  */
  eventFormSubmit() {
    // const eventFormData = this.prepareEventFormData(this.eventForm.value);
    const eventFormData = this.eventForm.value;
    eventFormData.poster = this.urls[0];
    const startDateTime: string = this.datePipe.transform(this.eventForm.value.startDateTime, 'yyy-MM-dd HH:mm');
    const endDateTime: string = this.datePipe.transform(this.eventForm.value.endDateTime, 'yyy-MM-dd HH:mm');
    eventFormData.startDateTime = startDateTime;
    eventFormData.endDateTime = endDateTime;
    this.dialogRef.close(eventFormData);
  }

  /*
  * Create image Urls from bite array
  * 05-03-2019
  * Prasad Kumara
  */
  createImgUrls(event) {
    if (event.hasOwnProperty('poster')) {
      this.urls.push(event.poster);
      this.currentTotalImageCount = 1;
    }
  }

  /*
  * Convert string date time to Date time object
  * 05-03-2019
  * Prasad Kumara
  */
  createDateTimeObject(event) {
    event.startDateTime = new Date(event.startDateTime);
    event.endDateTime = new Date(event.endDateTime);
    event.createdDate = new Date(event.createdDate);
    if (event.status === 'INACTIVE') {
      event.status = false;
    } else {
      event.status = true;
    }
    return event;
  }

}
