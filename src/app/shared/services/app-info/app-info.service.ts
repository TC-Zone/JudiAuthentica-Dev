import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AppInfoComponent } from './app-info.component';

// tslint:disable-next-line:class-name
interface infoData {
  title?: string;
  message?: string;
  linkData?: {
    url: string;
    urlDescription: string;
  };
}

@Injectable()
export class AppInfoService {

  constructor(
    private dialog: MatDialog
  ) { }

  showInfo(infoData: infoData) {
    let dialogRef: MatDialogRef<AppInfoComponent>;
    dialogRef = this.dialog.open(
      AppInfoComponent,
      {
        width: '380px',
        disableClose: true,
        data: infoData
      }
    );
    return dialogRef.afterClosed();
  }

}
