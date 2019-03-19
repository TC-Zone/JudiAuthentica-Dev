import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { AppInfoService } from 'app/shared/services/app-info/app-info.service';
import { AppWarningService } from 'app/shared/services/app-warning/app-warning.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  animations: egretAnimations
})
export class UserFeedbackComponent implements OnInit {

  constructor(
    private appWarningService: AppWarningService,
    private appInfoService: AppInfoService,
    private errDialog: AppErrorService,
  ) { }

  ngOnInit() {
  }

  openWarning() {
    this.appWarningService.showWarning({
      title: 'Warning!',
      message: 'You can create only one community only!'
    });
  }

  openInfo() {
    const infoData = {
      title: 'License Limit Exceeded',
      message: 'Your User Limit has Expired. Do you want to extend?',
      linkData: {
        url: '#',
        buttonText: 'Extend'
      }
    };
    this.appInfoService.showInfo(infoData);
  }

  openError() {
    const error = {
      error: {
        status: 'Client_Error',
        validationFailures: [{
          code: 'Test Error',
          field: 'test field'
        }],
      },
      status: 400
    };
    this.errDialog.showError(error);
  }

}
