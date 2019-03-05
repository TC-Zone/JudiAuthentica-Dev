import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  animations: egretAnimations
})
export class UserFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
