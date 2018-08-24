import { Component, OnInit, ViewChild } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";



@Component({
  selector: "app-survey-builder",
  templateUrl: "./survey-builder.component.html",
  animations: egretAnimations
})
export class SurveyBuilderComponent implements OnInit {
  public isSideNavOpen: boolean = false;
  public layoutConf: any;

  constructor() {

  }

  ngOnInit() {

  }
}


