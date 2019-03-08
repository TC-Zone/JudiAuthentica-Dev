import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  animations: egretAnimations
})
export class UserComponent implements OnInit {

  id; name; url;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('currentUser'))){
      const user = JSON.parse(localStorage.getItem('currentUser'));
      console.log(user);
      // this.id = user.client.id;
      // this.name = user.client.name;
      // this.url = client.clientLogo;
    }
  }

}
