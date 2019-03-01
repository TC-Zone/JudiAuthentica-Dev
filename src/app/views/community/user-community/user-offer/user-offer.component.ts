import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';

@Component({
  selector: 'app-user-offer',
  templateUrl: './user-offer.component.html',
  animations: egretAnimations
})
export class UserOfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
