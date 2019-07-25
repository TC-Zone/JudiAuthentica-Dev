import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss'],
  animations: egretAnimations
})
export class ReportingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
