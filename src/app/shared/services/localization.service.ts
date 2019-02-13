import { Injectable, OnInit } from "@angular/core";
import { Localization } from "../../utility/localization/localization";
import * as SurveyKo from "survey-knockout";
import * as Survey from "survey-angular";

@Injectable()
export class LocalizationService implements OnInit {
  // add your language like this
  // first index what is the name of you added
  // second index is name of object that you added Localization class
  locArray = [["sinhala", "sinhalaStrings"], ["hindi", "hindiStrings"]];
  loc: any;

  constructor() {
    const loc: Localization = new Localization();
    this.loc = loc.Object;
  }

  ngOnInit() {}

  addlocalization() {
    this.locArray.forEach(element => {
      // console.log("--------------------------------------");
      // console.log(element[0]);
      // console.log(this.myloc[element[1]]);
      // console.log("--------------------------------------");
      SurveyKo.surveyLocalization.locales[element[0]] = this.loc[element[1]];
      Survey.surveyLocalization.locales[element[0]] = this.loc[element[1]];
    });
  }
}
