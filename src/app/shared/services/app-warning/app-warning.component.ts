import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-warning',
  templateUrl: './app-warning.component.html',
  styleUrls: ['./app-warning.component.scss'],
  animations: egretAnimations
})
export class AppWarningComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AppWarningComponent>
  ) { }

  ngOnInit() {
  }

}
