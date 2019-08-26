import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { AuthenticationService } from '../sessions/authentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  animations: egretAnimations
})
export class UserComponent implements OnInit {

  public clientId;
  public name;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;
    this.name = currentUser.userData.client.name;
  }

}
