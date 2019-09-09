import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
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
  providers: [DatePipe]
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
  public minHeight = 200;
  public minWidth = 400;
  public imgBaseURL: string;
  public url;
  public imageToShow: any;

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

  @ViewChild('eventImgs')
  eventImgsElemnt: ElementRef;

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
    //edited by kushan
    this.imgBaseURL = this.userEventService.imageUrl;
  }

  /*
  * Build Event Create and Update Form
  * 05-03-2019
  * Prasad Kumara
  * Edited by Kushan Pabasara
  */
  buildEventForm(eventformdata) {
    this.eventForm = this.fb.group({
      name: [eventformdata.name || '', Validators.required],
      description: [eventformdata.description || '', Validators.required],
      status: [eventformdata.status || false, Validators.required],
      startDateTime: [eventformdata.startDateTime, Validators.required],
      endDateTime: [eventformdata.endDateTime, Validators.required],
      poster: ['']
    });

    if (!this.data.isNew) {
      getBase64ImageFromUrl(this.imgBaseURL + eventformdata.id)
        .then(result => this.url = result)
        .catch(err => console.error(err));
    }

    console.log(this.eventForm);

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
            this.errDialog.showError(error);
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
  * edited by kushan pabasara
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
    //       console.log(fileExtension);

    //       if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
    //         const reader = new FileReader();
    //         reader.onload = (ev: any) => {
    //           const img = new Image();
    //           img.src = ev.target.result;
    //           img.onload = () => {
    //             const widthReminder = img.width % 4;
    //             const heightReminder = img.height % 3;
    //             console.log(this.urls);
    //             if (img.width < this.minWidth || img.height < this.minHeight) {
    //               this.snackBar.open(
    //                 'Image minimum dimension should be ' + this.minWidth + 'X' + this.minHeight,
    //                 'close',
    //                 { duration: 3000 }
    //               );
    //               this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
    //               this.currentTotalImageCount--;
    //               return;
    //             }
    //             if (widthReminder !== 0 || heightReminder !== 0) {
    //               this.snackBar.open(
    //                 'Image aspect ratio should be 4:3 (' + this.minWidth + 'X' + this.minHeight + ')',
    //                 'close',
    //                 { duration: 3000 }
    //               );
    //               this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
    //               this.currentTotalImageCount--;
    //               return;
    //             }
    //             console.log(this.urls);

    //             this.urls.push(ev.target.result);
    //             this.eventForm.controls['poster'].setErrors(null);

    //           };
    //         };

    //         reader.readAsDataURL(event.target.files[i]);
    //         this.newlySelectedFileList.push(event.target.files[i]);
    //         this.currentTotalImageCount++;
    //       } else {
    //         this.snackBar.open(
    //           'Upload valiid images. Only PNG, JPG or JPEG are allowed!',
    //           'close',
    //           { duration: 3000 }
    //         );
    //         this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
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
            this.eventImgsElemnt.nativeElement.value = "";
            // this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
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
  * Remove selected images
  * 05-03-2019
  * Prasad Kumara
  * edited by kushan pabasara
  */
  removeSelectedImg(index: number) {
    // this.url.splice(index, 1);
    // this.currentTotalImageCount -= 1;
    // this.eventForm.controls['poster'].setErrors({ 'incorrect': true });

    // if (this.remainImagesID.length < index + 1) {
    //   this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    // } else {
    //   this.remainImagesID.splice(index, 1);
    // }
    this.url = null;
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
    console.log(eventFormData);

    return eventFormData;
  }

  /*
  * Create and Update Event Submit function
  * 05-03-2019
  * Prasad Kumara
  * edited by kushan pabasara
  */
  eventFormSubmit() {
    // const eventFormData = this.prepareEventFormData(this.eventForm.value);
    const eventFormData = this.eventForm.value;
    console.log(eventFormData);

    if (this.url) {
      eventFormData.poster = this.url;

      const startDateTime: string = this.datePipe.transform(this.eventForm.value.startDateTime, 'yyy-MM-dd HH:mm');
      const endDateTime: string = this.datePipe.transform(this.eventForm.value.endDateTime, 'yyy-MM-dd HH:mm');
      eventFormData.startDateTime = startDateTime;
      eventFormData.endDateTime = endDateTime;
      console.log(eventFormData);
      this.dialogRef.close(eventFormData);
    } else {
      this.snackBar.open(
        "Please upload image",
        "close",
        { duration: 2000 }
      );
      // this.eventForm.controls['poster'].setErrors({ 'incorrect': true });
    }


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