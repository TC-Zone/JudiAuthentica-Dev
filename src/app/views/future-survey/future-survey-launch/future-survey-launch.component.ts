import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { DateValidator } from "../../../utility/dateValidator";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AppDataConversionService } from "app/shared/services/data-conversion.service";

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
  selector: "app-future-survey-launch",
  templateUrl: "./future-survey-launch.component.html",
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
export class FutureSurveyLaunchComponent implements OnInit {
  public launchForm: FormGroup;
  public link;
  public title;
  public isPublic: boolean;
  public surveyObj;
  today: Date;
  tomorrow: Date;
  public invitees: any[];
  public csvFile;
  public csvFileName;
  public csvHeadersArray: any[];
  ansTemplateArray: FormArray;
  // email regex
  // tslint:disable-next-line:max-line-length
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public statusArray = [
    { id: 0, status: "On Premise", style: "accent" },
    { id: 1, status: "Launched", style: "primary" },
    { id: 2, status: "Offline", style: "default" }
  ];

  // csv validation message
  private MISSING_NAME: string = "Essential Name field is missing!";
  private MISSING_EMAIL: string = "Essential E mail field is missing!";
  private MISSING_RECORD: string = "Could not find accurate invitee record!";
  private EMAIL_FORMAT: string = "Incorrect format for E mail";

  public currentStatus;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyLaunchComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private conversionService: AppDataConversionService
  ) {}

  ngOnInit() {
    console.log(this.data);
    // build form group
    this.buildLaunchForm(this.data.payload);
    // validate back dates
    this.tomorrow = DateValidator.getTomorrow();
    this.today = DateValidator.getToday();
    this.csvFile = true;

    this.surveyObj = this.data.payload;
    this.isPublic = this.surveyObj.channel == 1 ? true : false;
    this.title = this.surveyObj.title;
    const surveyStatus = this.surveyObj.status;
    this.currentStatus = this.statusArray.filter(function(status) {
      return status.id === surveyStatus;
    });

    console.log("current Status");
    console.log(this.currentStatus[0]);

    if (this.isPublic) {
      // this.buildLaunchForm(this.data);
      console.log("SURVEY ID : " + this.surveyObj.id);
      this.link = this.futureSurveyService.getPublicSurveyLink(
        this.surveyObj.id
      );
      console.log("The link : " + this.link);
    }

    // Manage validation when select predefine invitee group
    this.launchForm
      .get("isPredefined")
      .valueChanges.subscribe(value =>
        this.predefineInviteeGroupValidation(value)
      );
  }

  buildLaunchForm(fieldItem) {
    this.launchForm = this.fb.group({
      startDate: [fieldItem.startDate || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      isPredefined: [fieldItem.isPredefined || ""],
      inviteeGroup: [fieldItem.inviteeGroup || ""],
      userNamePasswordType: [fieldItem.userNamePasswordType || ""],
      inviteeGroupName: [fieldItem.inviteeGroupName || "", Validators.required],
      uploadCsvFile: [fieldItem.uploadCsvFile, Validators.required],
      sharebleLink: [fieldItem.sharebleLink || ""],
      csvHeaders: this.fb.array([])
    });
    this.patch(fieldItem.csvHeaders);
  }

  launchFutureSurvey() {
    this.dialogRef.close();
    console.log("launchForm.value-------------------");
    console.log(this.launchForm.value);
    console.log("correct Inviteee list--------");
    console.log(this.invitees);
  }

  patch(fields?) {
    console.log("form controll----------------------");
    console.log(fields);
    const control = <FormArray>this.launchForm.controls["csvHeaders"];
    this.ansTemplateArray = control;
    if (!fields) {
      control.push(this.initAnswerTemplate());
      return;
    }
    fields.forEach(x => {
      control.push(this.initAnswerTemplate(x.value));
    });
  }

  initAnswerTemplate(value?) {
    console.log(" SET  : " + value);
    return this.fb.group({
      value: [value || ""]
    });
  }

  // check csv file format
  onFileChange(event) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      // this.futureSurveyCommonConfigComponent.csvFileName = files.item(0).name;
      this.csvFileName = files.item(0).name;
      const ext = this.csvFileName
        .substring(this.csvFileName.lastIndexOf(".") + 1)
        .toLowerCase();
      console.log("ext : " + ext);

      if (ext === "csv") {
        // this.futureSurveyCommonConfigComponent.csvFile = files.item(0);
        this.csvFile = files.item(0);
        const reader: FileReader = new FileReader();
        reader.readAsText(this.csvFile);

        reader.onload = () => {
          const readerResult = reader.result;
          const resultStr = readerResult + "";

          if (resultStr && resultStr.length > 0) {
            const jsonCsv: any[] = this.conversionService.CSV2JSON(
              readerResult
            );
            const validationResult = this.validateCSVContent(jsonCsv);
            this.invitees = validationResult.correctSet;
            const fullJson = this.conversionService.CSVToArray(readerResult);
            this.createCsvFileHeaders(fullJson[0]);
          }
        };
      } else {
        this.snack.open("Invalid File type! Please upload csv file!", "close", {
          duration: 2000
        });
      }
    }
  }

  // validate csv content
  validateCSVContent(jsonCsv: any[]): ValidateRequest {
    const correctSet: any[] = [];
    const errorSet: any[] = [];

    const totalLength = jsonCsv.length;

    if (totalLength > 0) {
      jsonCsv.forEach(line => {
        let name = line.name;
        let email = line.email;
        let user_name = line.user_name;
        let password = line.password;

        if (name) {
          if (email) {
            let boolMail = this.emailPattern.test(email);
            console.log("EMAIL VALID : " + boolMail);

            if (boolMail) {
              let element: any[];
              if (correctSet.length > 0) {
                element = correctSet.filter(item => {
                  if (item.name === name && item.email === email) {
                    return item;
                  } else if (item.email === email) {
                    return item;
                  }
                });

                if (element.length === 0) {
                  correctSet.push(
                    new Invitee(name, email, user_name, password)
                  );
                }
              } else {
                correctSet.push(new Invitee(name, email, user_name, password));
              }
            } else {
              errorSet.push(this.EMAIL_FORMAT);
            }
          } else {
            errorSet.push(this.MISSING_EMAIL);
          }
        } else {
          errorSet.push(this.MISSING_NAME);
        }
      });
    }
    const fineLength = correctSet.length;
    const errorLength = errorSet.length;

    if (fineLength == 0) {
      this.resetFileInput();
      this.errDialog.showError({
        title: "Error",
        clientError: this.MISSING_RECORD,
        type: "client_error"
      });
    } else {
      if (errorLength > 0) {
        this.snack.open(
          "Successfully recognized " +
            fineLength +
            " out of " +
            totalLength +
            " records with warning !",
          "close",
          { duration: 2000 }
        );
      } else {
        this.snack.open(
          "Successfully recognized all records : " + totalLength,
          "close",
          { duration: 2000 }
        );
      }
    }

    return new ValidateRequest(correctSet, errorSet);
  }

  // reset the file input
  resetFileInput() {
    this.csvFile = undefined;
    const fileControl = this.launchForm.get("userFile");
    console.log('FI:E CONTRO ..............');
    console.log(fileControl);
    fileControl.setValue("");
  }

  // Create CSV File Headers
  createCsvFileHeaders(headersArray) {
    const tempArray = [];
    for (let i = 0; i < headersArray.length; i++) {
      if (headersArray[i] !== "") {
        if (!this.getRequiredHeaders(headersArray[i])) {
          tempArray.push({
            headerName: headersArray[i],
            headerValue: headersArray[i],
            headerChecked: true,
            headerDisabled: false
          });
        } /*else {
          tempArray.push({
            headerName : headersArray[i],
            headerValue : headersArray[i],
            headerChecked : true,
            headerDisabled : false
          });
        }*/
      }
    }
    this.csvHeadersArray = tempArray;
    console.log("CSV HEADER AFTER UPDATE");
    console.log(this.csvHeadersArray);
  }

  // predefine invitee group validation
  predefineInviteeGroupValidation(isPredefined) {
    const userNamePasswordType = this.launchForm.get("userNamePasswordType");
    const inviteeGroup = this.launchForm.get("inviteeGroup");
    const uploadCsvFile = this.launchForm.get("uploadCsvFile");
    const inviteeGroupName = this.launchForm.get("inviteeGroupName");

    if (isPredefined) {
      userNamePasswordType.setValidators(Validators.required);
      inviteeGroup.setValidators(Validators.required);
      uploadCsvFile.clearValidators();
      inviteeGroupName.clearValidators();
    } else {
      userNamePasswordType.clearValidators();
      inviteeGroup.clearValidators();
      uploadCsvFile.setValidators(Validators.required);
      inviteeGroupName.setValidators(Validators.required);
    }
    userNamePasswordType.updateValueAndValidity();
    inviteeGroup.updateValueAndValidity();
    uploadCsvFile.updateValueAndValidity();
    inviteeGroupName.updateValueAndValidity();
  }

  getRequiredHeaders(headerName) {
    switch (headerName) {
      case "name":
        return true;
      case "email":
        return true;
      case "user_name":
        return true;
      case "password":
        return true;
      default:
        return false;
    }
  }
}

export class Invitee {
  constructor(
    public name,
    public email: string,
    public user_name: string,
    public password: string
  ) {}
}

export class ValidateRequest {
  constructor(public correctSet, public errorSet: any[]) {}
}
