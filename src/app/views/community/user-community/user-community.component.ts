import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-community',
  templateUrl: './user-community.component.html',
  animations: egretAnimations
})
export class UserCommunityComponent implements OnInit {

  public comunityName: String;
  public comunityId: String;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.comunityId = params['id'];
      this.comunityName = params['name'];
    });
  }

  backToComunityView() {
    this.router.navigate(['community/community-view']);
  }

}
