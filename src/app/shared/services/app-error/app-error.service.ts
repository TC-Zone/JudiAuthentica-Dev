import { Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogRef
} from "../../../../../node_modules/@angular/material";
import { Observable } from "../../../../../node_modules/rxjs";
import { AppErrorComponent } from "./app-error.component";
import { errorMessages } from './error.messages';

interface ErrorData {
  title?: string;
  message?: string;
  type?: string;
  status?: string;
  clientError?: string;
}

@Injectable()
export class AppErrorService {
  constructor(private dialog: MatDialog) {}

  showHttpError(error: ErrorData = {}): String {
    console.log("error status : " + error.status);
    if (error.status == "400") {
      return "Error occured due to invalid inputs !";
    } else if (error.status == "404") {
      return "Resource could not found ! ";
    } else if (error.status == "500") {
      return "Internal Service issue !";
    } else return "Something went  wrong !";
  }

  showError(error: ErrorData = {}): Observable<boolean> {
    error.title = error.title || "Error";
    error.type = error.type || "common_error";

    let errorMsg;
    if (error.type == "http_error") {
      errorMsg = this.showHttpError(error);
    } else if (error.type == "client_error") {
      errorMsg = error.clientError;
    } else {
      errorMsg = "Truverus - ClearPicture : Something went wrong ";
    }

    let dialogRef: MatDialogRef<AppErrorComponent>;
    dialogRef = this.dialog.open(AppErrorComponent, {
      width: "380px",
      disableClose: true,
      data: { title: error.title, message: errorMsg }
    });
    return dialogRef.afterClosed();
  }
  // show popup window for custom error message (by prasad kumara)
  handleCustomError(error: ErrorData = {}): any {
    const errorTitle = this.removeUnderscore(error.title);
    if (errorMessages.hasOwnProperty(error.type)) {
      const jsonArrayKey = this.getEnumKey(error.message);
      if (errorMessages[error.type].hasOwnProperty(jsonArrayKey)) {
        this.openPopUpWindow(errorTitle, errorMessages[error.type][jsonArrayKey]);
      } else {
        this.openPopUpWindow(errorTitle, error.message);
      }
    } else {
      this.openPopUpWindow(errorTitle, error.message);
    }
  }
  // handle custom error (by prasad kumara)
  showErrorWithMessage(error: any) {
    console.log('view survey error with message');
    console.log(error);
    if (error.error !== null) {
      if (error.error.hasOwnProperty('validationFailures')) {
        this.handleCustomError({
          title: error.error.status,
          message: error.error.validationFailures[0].code,
          type: error.error.validationFailures[0].field,
          status: error.status,
          clientError: ''
        });
      } else {
        this.openPopUpWindow(this.removeUnderscore(error.error.status), 'Truverus - ClearPicture : Something went wrong');
      }

    } else {
      this.showHttpError({
        title: 'Error',
        message: '',
        type: 'http_error',
        status: error.status,
        clientError: ''
      });
    }
  }
  // convert error messages to camell case message (by prasad kumara)
  getEnumKey(string: string): string {
    const stringArray = string.split('.');
    let enumkey = '';
    for (let i = 0; i < stringArray.length; i++) {
      if (i === 0) {
        enumkey += stringArray[i].substring(0, 1).toLowerCase() + stringArray[i].substring(1);
      } else {
        enumkey += stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1);
      }
    }
    return enumkey;
  }
  // Remove _ from Error Title
  removeUnderscore(string: string): string {
    const stringArray = string.split('_');
    let errorTitle = '';
    for (let i = 0; i < stringArray.length; i++) {
      errorTitle += stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1).toLowerCase() + ' ';
    }
    return errorTitle;
  }
  // open pop up window
  openPopUpWindow(title, message): any{
    let dialogRef: MatDialogRef<AppErrorComponent>;
      dialogRef = this.dialog.open(AppErrorComponent, {
        width: '380px',
        disableClose: true,
        data: { title: title, message: message}
      });
      return dialogRef.afterClosed();
  }
}
