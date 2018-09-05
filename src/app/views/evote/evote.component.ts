import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';

@Component({
  selector: 'app-evote',
  templateUrl: './evote.component.html',
  animations:egretAnimations
})
export class EvoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
