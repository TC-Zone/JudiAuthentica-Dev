import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import * as SurveyEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

var CkEditor_ModalEditor = {
  afterRender: function(modalEditor, htmlElement) {
    var editor = window["CKEDITOR"].replace(htmlElement);
    editor.on("change", function() {
      modalEditor.editingValue = editor.getData();
    });
    editor.setData(modalEditor.editingValue);
  },
  destroy: function(modalEditor, htmlElement) {
    var instance = window["CKEDITOR"].instances[htmlElement.id];
    if (instance) {
      instance.removeAllListeners();
      window["CKEDITOR"].remove(instance);
    }
  }
};
SurveyEditor.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);

@Component({
  selector: "app-future-survey",
  templateUrl: "./future-survey.component.html",
  styleUrls: ["./future-survey.component.scss"]
})
export class FutureSurveyComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;

  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        name: "page1",
        elements: [
          {
            qId: 1,
            type: "text",
            name: "question1",
            title: "Question 1 ?"
          },
          {
            qId: 2,
            type: "imagepicker",
            name: "question2",
            title: "Image Chooser ?",
            choices: [
              {
                value: "lion",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                value: "giraffe",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                value: "panda",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                value: "camel",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          },
          {
            qId: 3,
            type: "matrix",
            name: "question3",
            columns: ["A", "B", "C"],
            rows: ["Row A", "Row B"]
          }
        ]
      }
    ]
  };

  @Output()
  surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    SurveyKo.JsonObject.metaData.addProperty("questionbase", {
      name: "tag",
      type: "number",
      qID: "questionId"
    });
    //"popupdescription:text"
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
    SurveyEditor.StylesManager.applyTheme();

    let editorOptions = {
      showEmbededSurveyTab: true,
      generateValidJSON: true,
      questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
    };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );

    this.editor.toolbox.removeItem("bootstrapslider");

    this.editor.text = JSON.stringify(this.json);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    console.log(this.editor);
    console.log(JSON.stringify(this.editor.text));
    console.log(this.editor.text);
    this.surveySaved.emit(JSON.parse(this.editor.text));
  };
}
