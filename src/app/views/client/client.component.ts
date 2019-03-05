import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';
import { NavigationExtras, Router } from "@angular/router";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  animations: egretAnimations
})
export class ClientComponent implements OnInit {

 constructor( private router: Router) { }

  ngOnInit() {
    // this.router.navigate(["clients/client-table"]);
  }

}
