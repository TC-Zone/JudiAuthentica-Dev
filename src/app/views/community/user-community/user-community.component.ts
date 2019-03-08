import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-user-community',
  templateUrl: './user-community.component.html',
  animations: egretAnimations
})
export class UserCommunityComponent implements OnInit {

  public comunityName: String;
  public comunityId: String;
  public queryParams: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
    this.queryParams = {
      id: this.comunityId,
      name: this.comunityName
    };
  }

  /*
  * Return to community view page
  * 05-03-2019
  * Prasad Kumara
  */
  backToComunityView() {
    this.router.navigate(['community/community-view']);
  }

}
