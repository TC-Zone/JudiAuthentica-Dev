import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { egretAnimations } from 'app/shared/animations/egret-animations';


@Component({
  selector: 'app-app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.scss'],
  animations: egretAnimations
})
export class AppErrorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
  }

}
