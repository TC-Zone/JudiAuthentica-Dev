import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { CrudService } from "../../cruds/crud.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { MatSnackBar } from "@angular/material";
import { FutureSurveyService } from "../future-survey.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { ClientService } from '../../client/client.service';

@Component({
  selector: "app-future-survey-common-config",
  template: ""
})
export class FutureSurveyCommonConfigComponent implements OnInit {
  @ViewChild("userFile")
  fileInputRef: ElementRef;

  public configForm: FormGroup;
  public csvFile;
  public csvFileName;

  public inviteeGroups: any[];

  public getClientSub: Subscription;

  // store all the clients to assign client for survey - YRS
  public clients: any[];

  public surveyOriginArr = [
    { id: 2, name: "E-Vote" },
    { id: 1, name: "Survey" }
  ];

  // csv validation message
  private MISSING_NAME: string = "Essential Name field is missing!";
  private MISSING_EMAIL: string = "Essential E mail field is missing!";
  private MISSING_RECORD: string = "Could not find accurate invitee record!";
  private EMAIL_FORMAT: string = "Incorrect format for E mail";

  // email regex
  // tslint:disable-next-line:max-line-length
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    public clientService: ClientService,
    public errDialog: AppErrorService,
    public snackBar: MatSnackBar,
    public futureSurveyService: FutureSurveyService,
    public loader: AppLoaderService
  ) {}

  ngOnInit() {}

  // load clients : till implement user login services.
  getClientSuggestions() {
    this.getClientSub = this.clientService
      .getClientsSuggestions()
      .subscribe(data => {
        this.clients = data.content;
      });
  }
}

// export class Invitee {
//   constructor(public name, public email: string) { }
// }

// export class ValidateRequest {
//   constructor(public correctSet, public errorSet: any[]) { }
// }
// Removing invite configuration section from future survey config popup - YS - The Flash Sprint

// setPrivateChannelValidation(value) {
//   const userFileControl = this.configForm.get("userFile");
//   const nameControl = this.configForm.get("inviteeGroupName");

//   if (value === "2") {
//     userFileControl.setValidators(Validators.required);
//     nameControl.setValidators(Validators.required);
//   } else {
//     userFileControl.clearValidators();
//     nameControl.clearValidators();
//   }
//   userFileControl.updateValueAndValidity();
//   nameControl.updateValueAndValidity();
// }

// setInviteeValidations(value) {
//   console.log("value : " + value);

//   const inviteeDropDown = this.configForm.get("inviteeGroupId");
//   const groupNameControl = this.configForm.get("inviteeGroupName");
//   const fileControl = this.configForm.get("userFile");

//   if (value) {
//     inviteeDropDown.setValidators(Validators.required);
//     groupNameControl.clearValidators();
//     fileControl.clearValidators();
//     this.resetFileInput();
//   } else {
//     inviteeDropDown.clearValidators();
//     groupNameControl.setValidators(Validators.required);
//     fileControl.setValidators(Validators.required);
//   }

//   inviteeDropDown.updateValueAndValidity();
//   groupNameControl.updateValueAndValidity();
//   fileControl.updateValueAndValidity();
// }

// resetFileInput() {
//   this.csvFile = undefined;
//   const fileControl = this.configForm.get("userFile");
//   fileControl.setValue("");
// }

// validateCSVContent(jsonCsv: any[]): ValidateRequest {
//   const correctSet: any[] = [];
//   const errorSet: any[] = [];

//   const totalLength = jsonCsv.length;

//   if (totalLength > 0) {
//     jsonCsv.forEach(line => {
//       let name = line.name;
//       let email = line.email;

//       if (name) {
//         if (email) {
//           if (this.emailPattern.test(email)) {
//             let element: any[];
//             if (correctSet.length > 0) {
//               element = correctSet.filter(item => {
//                 if (item.name === name && item.email === email) {
//                   return item;
//                 } else if (item.email === email) {
//                   return item;
//                 }
//               });

//               if (element.length === 0) {
//                 correctSet.push(new Invitee(name, email));
//               }
//             } else {
//               correctSet.push(new Invitee(name, email));
//             }
//           } else {
//             errorSet.push(this.EMAIL_FORMAT);
//           }
//         } else {
//           errorSet.push(this.MISSING_EMAIL);
//         }
//       } else {
//         errorSet.push(this.MISSING_NAME);
//       }
//     });
//   }
//   const fineLength = correctSet.length;
//   const errorLength = errorSet.length;

//   if (fineLength == 0) {
//     this.resetFileInput();
//     this.errDialog.showError({
//       title: "Error",
//       clientError: this.MISSING_RECORD,
//       type: "client_error"
//     });
//   } else {
//     if (errorLength > 0) {
//       this.snackBar.open(
//         "Successfully recognized " +
//           fineLength +
//           " out of " +
//           totalLength +
//           " records with warning !",
//         "close",
//         { duration: 2000 }
//       );
//     } else {
//       this.snackBar.open(
//         "Successfully recognized all records : " + totalLength,
//         "close",
//         { duration: 2000 }
//       );
//     }
//   }

//   return new ValidateRequest(correctSet, errorSet);
// }

// fetchGroupsByClient(clientId) {
//   this.futureSurveyService.fetchGroupsByClientId(clientId).subscribe(
//     response => {
//       console.log(".....INVITEE GROUP....");
//       console.log(response.content);
//       this.inviteeGroups = response.content;
//     },
//     error => {
//       this.loader.close();
//       this.errDialog.showError({
//         title: "Error",
//         status: error.status,
//         type: "http_error"
//       });
//     }
//   );
// }
