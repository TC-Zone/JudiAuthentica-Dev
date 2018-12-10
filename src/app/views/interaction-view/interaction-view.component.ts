import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';

@Component({
  selector: 'app-interaction-view',
  templateUrl: './interaction-view.component.html',
  animations: egretAnimations

})
export class InteractionViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
