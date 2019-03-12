import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AppWarningComponent } from './app-warning.component';

// tslint:disable-next-line:class-name
interface warningData {
  title?: string;
  message?: string;
}

@Injectable()
export class AppWarningService {

  constructor(
    private dialog: MatDialog
  ) { }

  showWarning(warningData: warningData) {
    let dialogRef: MatDialogRef<AppWarningComponent>;
    dialogRef = this.dialog.open(
      AppWarningComponent,
      {
        width: '520px',
        disableClose: false,
        data: warningData
      }
    );
    return dialogRef.afterClosed();
  }
}
