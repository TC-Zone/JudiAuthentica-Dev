import { Component, OnInit, Inject } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunityService } from '../../community.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

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
    private errDialog: AppErrorService,
    private comunityService: ComunityService
  ) { }

  ngOnInit() {
    if (!this.data.isNew) {
      this.getCommunityById(this.data.payload.id);
    }
    this.buildCommunityForm(this.data.payload);
  }

  /*
  * Build community create and update form
  * 05-03-2019
  * Prasad Kumara
  */
  buildCommunityForm(community) {
    this.communityForm = this.fb.group({
      name: [community.name || '', Validators.required],
      description: [community.description || '', Validators.required],
      status: [community.status || false, Validators.required]
    });
  }

  /*
  * Get community details using cimmunity id
  * 05-03-2019
  * Prasad Kumara
  */
  getCommunityById(communityId) {
    this.comunityService.getCommunityById(communityId)
      .subscribe(
        response => {
          // const status = this.setCommunityStatus(response.status);
          // response['status'] = status;
          this.buildCommunityForm(response);
        },
        error => {
          if (error.status !== 401) {
            this.errDialog.showError({
              title: 'Error',
              status: error.status,
              type: 'http_error'
            });
          }
        }
      );
  }

  /*
  * Convert string status to boolean status
  * 05-03-2019
  * Prasad Kumara
  */
  setCommunityStatus(status): boolean {
    if (status === 'ACTIVE') {
      return true;
    } else {
      return false;
    }
  }

  /*
  * Submit community create and update form
  * 05-03-2019
  * Prasad Kumara
  */
  submitCommunityForm(): any {
    this.dialogRef.close(this.communityForm.value);
  }

}
