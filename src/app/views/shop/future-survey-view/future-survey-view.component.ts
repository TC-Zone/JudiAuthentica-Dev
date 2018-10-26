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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.jsonContent = params["jsonContent"];
    });

    this.viewSurvey();
  }

  viewSurvey() {
    const surveyModel = new Survey.Model(this.jsonContent);

    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) return;

      //Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      var question = options.question;
      btn.onclick = function() {
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

    Survey.JsonObject.metaData.addProperty("questionbase", {
      name: "qid:text",
      default: "none"
    });

    surveyModel.onComplete.add(function(result) {
      var modifiedData = Object.keys(result.data).map(function(qName) {
        let questionDet: any = result.getQuestionByName(qName); //resolve Survey.IQuestion interface
        return {
          value: result.data[qName], // attached for new output result
          questionId: questionDet.questionId
        };
      });
      console.log("MODIFIED DATA");
      console.log(modifiedData);
      alert("Anser Result is : " + JSON.stringify(modifiedData));
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
