import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-community-view-popup',
  templateUrl: './community-view-popup.component.html',
  animations: egretAnimations
})
export class CommunityViewPopupComponent implements OnInit {

  public communityForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CommunityViewPopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildCommunityForm(this.data.payload);
  }

  buildCommunityForm(community) {
    this.communityForm = this.fb.group({
      name: [community.name || '', Validators.required],
      description: [community.description || '', Validators.required],
      status: [community.status || false, Validators.required]
    });
  }

  submitCommunityForm(): any {
    this.dialogRef.close(this.communityForm.value);
  }

}
