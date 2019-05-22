import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar,
} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserFeedbackService } from '../user-feedback.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';



@Component({
  selector: 'app-create-feedback-popup',
  templateUrl: './create-feedback-popup.component.html',
  animations: egretAnimations
})
export class CreateFeedbackPopupComponent implements OnInit {

  public feedbackForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateFeedbackPopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private userFeedbackService: UserFeedbackService,
  ) { }

  ngOnInit() {
    this.buildFeedbackForm(this.data.payload);
  }

  buildFeedbackForm(data) {
    let status = false;
    if(data.status === "ACTIVE"){
      status = true
    }
    
    this.feedbackForm = this.fb.group({
      name: [data.name || '', Validators.required],
      status: [status, Validators.required]
    });
  }

  submit() {
    this.dialogRef.close(this.feedbackForm.value);
  }

}
