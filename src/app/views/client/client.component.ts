import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../shared/animations/egret-animations';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  animations: egretAnimations
})
export class ClientComponent implements OnInit {

 constructor() { }

  ngOnInit() {
  }

}
