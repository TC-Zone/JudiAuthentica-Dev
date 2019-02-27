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
  public startDateMin = DateValidator.getToday();
  public startDateMax;
  public endDateMin;
  public endDateMax;
  public currentTotalImageCount = 0;
  public maxUploadableFileCount = 2;
  public newlySelectedFileList = [];
  public urls = [];
  public remainImagesID = [];
  public comunityName: string;
  public comunityId: string;
  public height = 180;
  public width = 260;

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
  }

  buildEventForm(eventformdata) {
    console.log(eventformdata);
    this.eventForm = this.fb.group({
      name: [eventformdata.name || '', Validators.required],
      description: [eventformdata.description || '', Validators.required],
      status: [eventformdata.status || false, Validators.required],
      startDate: [eventformdata.startDate, Validators.required],
      endDate: [eventformdata.endDate, Validators.required],
      file: [eventformdata.file || '', Validators.required]
    });
  }

  validateDatePickerMinMax() {
    const startDateValue = this.eventForm.get('startDate').value;
    const endDateValue = this.eventForm.get('endDate').value;

    if (startDateValue == null && endDateValue == null) {
      this.startDateMin = DateValidator.getToday();
      this.endDateMin = DateValidator.getToday();
    } else {
      if (startDateValue != null) {
        const sd: Date = startDateValue._d;
        this.endDateMin = sd;
      }
      if (endDateValue != null) {
        const ed: Date = endDateValue._d;
        this.startDateMax = ed;
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
              if (img.width !== this.width || img.height !== this.height) {
                this.snackBar.open(
                  'Please upload 260 X 180 size image files only',
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

  validateImageSize(file): any {
    const reader = new FileReader();
    let status = true;
    reader.onload = (ev: any) => {
      const img = new Image();
      img.src = ev.target.result;
      console.log(img.width);
      console.log(img.height);
      if (img.width !== this.width || img.height !== this.height) {
        status = false;
      }
      this.urls.push(ev.target.result);
    };
    reader.readAsDataURL(file);
    this.newlySelectedFileList.push(file);
    return status;
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

}
