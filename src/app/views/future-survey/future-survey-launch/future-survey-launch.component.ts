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
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";
import { FutureSurveyService } from "../future-survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { DateValidator } from "../../../utility/dateValidator";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AppDataConversionService } from "app/shared/services/data-conversion.service";
import { LoginRequest } from "../../interaction-view/interaction-view.component";
import * as moment from "moment";
import { CustomValidator } from "../../../shared/validation/CustomValidator";

import {
  Invitee,
  ValidateRequest,
  CustomField,
  InviteRequest
} from "../../../model/FutureSurvey.model";

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
  public inviteeGroups: any;
  public isDisabled = false;
  // email regex
  // tslint:disable-next-line:max-line-length
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public urlPattern = /^([a-zA-Z0-9_-]){3,20}$/;

  public statusArray = [
    { id: 0, status: "On Premise", style: "accent" },
    { id: 1, status: "Launched", style: "primary" },
    { id: 4, status: "Offline", style: "default" }
  ];

  // csv validation message
  private MISSING_NAME: string = "Essential Name field is missing!";
  private MISSING_EMAIL: string = "Essential E mail field is missing!";
  private MISSING_RECORD: string = "Could not find accurate invitee record!";
  private EMAIL_FORMAT: string = "Incorrect format for E mail";

  public currentStatus;

  //userNamePasswordType array default value
  public uNPT;
  //missing requiredFields array
  public missingRequiredFields: any[] = [];

  // Invitation request related arrays
  public requiredFields: any[] = ["name", "email", "username", "password"];
  public requiredFields2: any[] = ["name", "email", "username", "password"];
  public customFields: any[] = [];

  public frontEndBase: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FutureSurveyLaunchComponent>,
    public fb: FormBuilder,
    public futureSurveyService: FutureSurveyService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    private conversionService: AppDataConversionService,
    private loader: AppLoaderService
  ) {}

  ngOnInit() {
    // build form group
    let data;
    let inviteeGroup;
    if (this.data.payload.invitation !== null) {
      data = this.data.payload.invitation;
      inviteeGroup = data.inviteeGroup;
    } else {
      data = {};
      inviteeGroup = {};
    }
    // validate back dates
    this.tomorrow = DateValidator.getTomorrow();
    this.today = DateValidator.getToday();
    this.csvFile = true;

    this.surveyObj = this.data.payload;
    this.isPublic = this.surveyObj.channel == 1 ? true : false;
    this.title = this.surveyObj.title;
    const surveyStatus = this.surveyObj.status;

    // set which status can edit details
    if (surveyStatus !== 0) {
      this.isDisabled = true;
    }

    this.buildLaunchForm(data, inviteeGroup);

    this.currentStatus = this.statusArray.filter(function(status) {
      console.log(status);
      return status.id === surveyStatus;
    });

    console.log("current Status");
    console.log(this.currentStatus[0]);

    if (this.isPublic) {
      this.buildLaunchForm(data, inviteeGroup);
      console.log("SURVEY ID : " + this.surveyObj.id);
      this.link = this.futureSurveyService.getPublicSurveyLink(
        this.surveyObj.id
      );
      console.log("The link : " + this.link);
    }

    const origin = this.surveyObj.origin == 1 ? "Survey/" : "eVote/";
    this.frontEndBase = this.futureSurveyService.frontEndBaseUrl + origin;

    this.launchForm
      .get("endDate")
      .valueChanges.subscribe(value => this.validateExpireDate(value));
  }

  buildLaunchForm(fieldItem, inviteeGroup) {
    this.launchForm = this.fb.group({
      startDate: new FormControl(
        { value: fieldItem.startDate || "", disabled: this.isDisabled },
        Validators.required
      ),
      endDate: new FormControl(
        { value: fieldItem.endDate || "", disabled: this.isDisabled },
        Validators.required
      ),
      userNamePasswordType: new FormControl({
        value: "",
        disabled: this.isDisabled
      }),
      inviteeGroupName: new FormControl(
        {
          value: inviteeGroup.inviteeGroupName || "",
          disabled: this.isDisabled
        },
        Validators.required
      ),
      uploadCsvFile: [fieldItem.uploadCsvFile, Validators.required],
      publishUrl: new FormControl(
        {
          value: fieldItem.publishURL || "",
          disabled: this.isDisabled
        },
        Validators.required
      ),
      csvHeaders: this.fb.array([])
    });
    this.patch(fieldItem.csvHeaders);
  }

  saveInvitationSetting() {
    let fsId = this.surveyObj.id;
    let formValue = this.launchForm;
    let startDate = moment(formValue.get("startDate").value).format(
      "YYYY-MM-DD"
    );
    const endDate = moment(formValue.get("endDate").value).format("YYYY-MM-DD");
    const inviteeGroupName = formValue.get("inviteeGroupName").value;
    const passwordStrategy = formValue.get("userNamePasswordType").value;
    const publishUrl = formValue.get("publishUrl").value;

    const sendReq: InviteRequest = new InviteRequest(
      fsId,
      startDate,
      endDate,
      inviteeGroupName,
      passwordStrategy,
      this.customFields,
      this.invitees,
      publishUrl
    );
    console.log("FINALE REQUEST......................");
    console.log(sendReq);
    this.dialogRef.close(sendReq);
  }

  patch(fields?) {
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
    // open loader
    this.loader.open("File Uploading");
    // empty arrays
    if (Array.isArray(this.invitees)) {
      this.invitees.length = 0;
      this.invitees = [];
    }

    if (Array.isArray(this.customFields)) {
      this.customFields.length = 0;
      this.customFields = [];
    }

    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      // this.futureSurveyCommonConfigComponent.csvFileName = files.item(0).name;
      this.csvFileName = files.item(0).name;
      const ext = this.csvFileName
        .substring(this.csvFileName.lastIndexOf(".") + 1)
        .toLowerCase();
      //console.log("ext : " + ext);

      if (ext === "csv") {
        // this.futureSurveyCommonConfigComponent.csvFile = files.item(0);
        this.csvFile = files.item(0);
        const reader: FileReader = new FileReader();
        reader.readAsText(this.csvFile);

        reader.onload = () => {
          const readerResult = reader.result;
          const resultStr = readerResult + "";

          if (resultStr && resultStr.length > 0) {
            const formattedCsvArr = this.customizeCsvContent(readerResult);
            const jsonCsv = this.conversionService.CSV2JSON(formattedCsvArr);
            //console.log("CSVJSON");
            //console.log(jsonCsv);
            const fullJson = this.conversionService.CSVToArray(readerResult);
            const headersJson = fullJson[0];
            if (headersJson.length <= 7) {
              if (!this.checkRequiredHeaderExist(headersJson)) {
                let errorMsg = "";
                let arrayLength = this.missingRequiredFields.length;
                for (let i = 0; i < arrayLength; i++) {
                  if (i === 0) {
                    errorMsg += this.missingRequiredFields[i];
                  } else if (i === arrayLength - 1) {
                    errorMsg += " & " + this.missingRequiredFields[i];
                  } else {
                    errorMsg += ", " + this.missingRequiredFields[i];
                  }
                }
                if (arrayLength > 1) {
                  errorMsg += " fields are  missing!";
                } else {
                  errorMsg += " field is missing!";
                }
                this.snack.open(errorMsg, "close", {
                  duration: 2000
                });
              } else {
                const validationResult = this.validateCSVContent(jsonCsv);
                this.invitees = validationResult.correctSet;
                this.createCsvFileHeaders(headersJson);
              }
            } else {
              this.snack.open(
                "Maximum Custom Field Count is 3! Upload again!",
                "close",
                {
                  duration: 2000
                }
              );
            }
          }
          this.loader.close();
        };
      } else {
        this.snack.open("Invalid File type! Please upload csv file!", "close", {
          duration: 2000
        });
      }
    }
  }

  customizeCsvContent(csvContent) {
    let csvArr = this.conversionService.CSVToArray(csvContent);
    //console.log("ARRAY TO BE CUSTOMIZE");
    //console.log(csvArr);

    const headers: any = csvArr[0];
    let fieldIndex = 0;
    let headerIndex = 0;
    headers.forEach(header => {
      if (!this.requiredFields.includes(header)) {
        fieldIndex++;
        const fieldName = "customField" + fieldIndex;
        headers[headerIndex] = fieldName;
        const customField: CustomField = new CustomField(fieldName, header);
        this.customFields.push(customField);
      }

      headerIndex++;
    });
    return csvArr;
  }

  // validate csv content
  validateCSVContent(jsonCsv: any[]): ValidateRequest {
    const correctSet: any[] = [];
    const errorSet: any[] = [];

    const totalLength = jsonCsv.length;

    if (totalLength > 0) {
      jsonCsv.forEach(line => {
        const name = line.name;
        const email = line.email;
        const username = line.username;
        const password = line.password;
        const customField1 = line.customField1;
        const customField2 = line.customField2;
        const customField3 = line.customField3;

        if (email != null && email != "") {
          correctSet.push(
            new Invitee(
              name,
              email,
              username,
              password,
              customField1,
              customField2,
              customField3
            )
          );
        }
      });
    }
    const fineLength = correctSet.length;

    if (fineLength === 0) {
      this.resetFileInput();
      this.errDialog.showError({
        title: "Error",
        clientError: this.MISSING_RECORD,
        type: "client_error"
      });
    } else {
      this.snack.open(
        "Successfully recognized  records : " + fineLength,
        "close",
        { duration: 2000 }
      );
    }

    return new ValidateRequest(correctSet, errorSet);
  }

  // reset the file input
  resetFileInput() {
    this.csvFile = undefined;
    const fileControl = this.launchForm.get("userFile");
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
            headerDisabled: true
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
    //console.log("CSV HEADER AFTER UPDATE");
    //console.log(this.csvHeadersArray);
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
      case "username":
        return true;
      case "password":
        return true;
      default:
        return false;
    }
  }

  // validate expire date according to start date endDate
  validateExpireDate(endDate) {
    const startDate = this.launchForm.get("startDate").value;
    const constEndDate = this.launchForm.get("endDate");
    const csvFile = this.launchForm.get("uploadCsvFile");
    if (startDate >= endDate) {
      constEndDate.setErrors({ incorrect: true });
      this.snack.open(
        "Expire Date should be Greater than Start Date",
        "close",
        { duration: 2000 }
      );
      // console.log('incorrect true');
    } else {
      constEndDate.setErrors(null);
      if (this.isPublic) {
        csvFile.setErrors(null);
      }
      // console.log('incorrect false');
    }
  }

  // check required headers exist in the csv file
  checkRequiredHeaderExist(headersArray) {
    this.missingRequiredFields = [];
    const csvFile = this.launchForm.get("uploadCsvFile");

    for (let i = 0; i < this.requiredFields2.length; i++) {
      console.log("requiredFields - " + this.requiredFields2[i]);
      if (!headersArray.includes(this.requiredFields2[i])) {
        this.missingRequiredFields.push(this.requiredFields2[i]);
      }
    }
    if (this.missingRequiredFields.length > 0) {
      csvFile.setErrors({ incorrect: true });
      return false;
    } else {
      csvFile.setErrors(null);
      return true;
    }
  }

  // fetch invitee group by client id
  fetchGroupsByClient() {
    this.futureSurveyService
      .fetchGroupsByClientId(this.surveyObj.clientId)
      .subscribe(
        response => {
          console.log(".....INVITEE GROUP....");
          this.inviteeGroups = response.content;
          console.log(this.inviteeGroups);
        },
        error => {
          // this.loader.close();
          this.errDialog.showError(error);
        }
      );
  }

  // copy private shareble link
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }

  // update requiredFields array according to userNamePasswordType
  onChangeUNPT() {
    if (this.uNPT === 1) {
      this.requiredFields2 = ["name", "email", "username"];
    } else if (this.uNPT === 2) {
      this.requiredFields2 = ["name", "email", "username", "password"];
    }
  }
}
