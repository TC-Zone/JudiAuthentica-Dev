import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';

@Component({
  selector: 'app-user-offer',
  templateUrl: './user-offer.component.html',
  animations: egretAnimations
})
export class UserOfferComponent implements OnInit {

  public promotions = [
    {
      id: 'promo_id_01',
      name: 'Promotion Name 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim.',
      startDate: new Date(2019, 1, 2, 8, 0, 0, 0),
      endDate: new Date(2019, 1, 3, 16, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: false,
      percentage: 12,
      selected: false
    },
    {
      id: 'promo_id_02',
      name: 'Promotion Name 02',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Fusce ut placerat orci nulla pellentesque dignissim.',
      startDate: new Date(2019, 1, 24, 9, 30, 0, 0),
      endDate: new Date(2019, 1, 24, 15, 0, 0, 0),
      file: 'assets/images/test_event.jpg',
      status: true,
      percentage: 25,
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
