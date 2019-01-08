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
      errorMsg = "CP Judi Authentica : Something went wrong ";
    }

    let dialogRef: MatDialogRef<AppErrorComponent>;
    dialogRef = this.dialog.open(AppErrorComponent, {
      width: "380px",
      disableClose: true,
      data: { title: error.title, message: errorMsg }
    });
    return dialogRef.afterClosed();
  }
}
