import { Component, OnInit, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: "app-future-survey-view",
  templateUrl: "./future-survey-view.component.html",
  styleUrls: ["./future-survey-view.component.scss"]
})
export class FutureSurveyViewComponent implements OnInit {
  jsonContent: Object;
  sub: any;
  jsonObj;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.jsonContent = params["jsonContent"];
      this.jsonObj = JSON.parse(params["jsonContent"]).pages[0].elements;
    });

    this.viewSurvey();
  }

  viewSurvey() {
    const surveyModel = new Survey.Model(this.jsonContent);
    let elementsArray = this.jsonObj;
    let resultArray = [];

    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) return;

      //Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";

      btn.onclick = function () {
        //showDescription(question);
        alert(options.question.popupdescription);
      };
      var header = options.htmlElement.querySelector("h5");
      var span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });

    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    // Survey.JsonObject.metaData.addProperty("questionbase", {
    //   name: "qid:text",
    //   default: "none"
    // });

    surveyModel.onComplete.add(function (result) {

      //------- new start --------
      elementsArray.forEach(element => {
        let elementArray = {};
        if (result.data[element.name] == null) {
          elementArray["value"] = null;
          elementArray["questionId"] = element.questionId;
        } else {
          elementArray["value"] = result.data[element.name];
          elementArray["questionId"] = element.questionId;
        }
        resultArray.push(elementArray);
      });

      console.log("---------------------");
      console.log("---------------------");
      console.log(resultArray);
      console.log("---------------------");
      console.log("---------------------");
      //------- new end --------


      // var modifiedData = Object.keys(result.data).map(function (qName) {
      //   let questionDet: any = result.getQuestionByName(qName); //resolve Survey.IQuestion interface
      //   return {
      //     value: result.data[qName], // attached for new output result
      //     questionId: questionDet.questionId
      //   };
      // });
      console.log("MODIFIED DATA");
      console.log(resultArray);
      alert("Anser Result is : " + JSON.stringify(resultArray));
    });
  }

  navigateToSurveyEditor(res: any) {
    let extraParam: NavigationExtras = {
      queryParams: {
        jsonContent: JSON.stringify(res)
      }
    };
    this.router.navigate(["shop/sEditor"], extraParam);
  }
}
