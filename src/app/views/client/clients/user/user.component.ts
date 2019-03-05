import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../../../shared/animations/egret-animations';
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
    if(JSON.parse(localStorage.getItem('currentClient'))){
      const client = JSON.parse(localStorage.getItem('currentClient'));
      this.id = client.id;
      this.name = client.name;
      this.url = client.clientLogo;
    } else {
      this.router.navigate(["clients/client-table"]);
    }
  }

}
