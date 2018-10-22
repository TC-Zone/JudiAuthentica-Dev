import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import * as SurveyEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { CrudService } from "../../cruds/crud.service";
import { Subscription } from "rxjs";
import { ResponseModel } from "../../../model/ResponseModel.model";

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
  templateUrl: "./future-survey.component.html"
})
export class FutureSurveyComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  constructor(private clientService: CrudService) {}

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
            type: "matrix",
            name: "question3",
            columns: ["A", "B", "C"],
            rows: ["Row A", "Row B"]
          }
        ]
      }
    ]
  };

  getAllClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;

      SurveyKo.JsonObject.metaData.addProperty(
        "questionbase",
        "popupdescription:text"
      );
      SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");

      let noneClients = [{ value: "none", text: "none" }];
      let newClients = [];
      for (var i = 0; i < this.clients.length; i++) {
        newClients.push({
          value: this.clients[i].id,
          text: this.clients[i].name
        });
      }
      let fullClients = [];
      fullClients = noneClients.concat(newClients);

      console.log(fullClients);

      SurveyKo.JsonObject.metaData.addProperty("survey", {
        name: "clientId",
        choices: fullClients
      });

      SurveyKo.JsonObject.metaData.addProperty("questionbase", "questionId");
      SurveyKo.JsonObject.metaData.findProperty(
        "questionbase",
        "questionId"
      ).readOnly = true;

      SurveyEditor.StylesManager.applyTheme("winterstone");

      let editorOptions = {
        showEmbededSurveyTab: true,
        generateValidJSON: true
      };
      this.editor = new SurveyEditor.SurveyEditor(
        "surveyEditorContainer",
        editorOptions
      );

      var questionCounter = 1;
      //Set the name property different from the default value
      //and set the tag property to a generated GUID value.
      this.editor.onQuestionAdded.add(function(sender, options) {
        var q = options.question;
        var t = q.getType();
        //q.name = "Question" + t[0].toUpperCase() + t.substring(1) + questionCounter;
        q.questionId =
          "Q" + t[0].toUpperCase() + t.substring(1) + questionCounter;
        questionCounter++;
      });

      this.editor.text = JSON.stringify(this.json);
      this.editor.saveSurveyFunc = this.saveMySurvey;
    });
  }

  setClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;

      let noneClients = [{ value: "none", text: "none" }];
      let newClients = [];

      for (let i = 0; i < this.clients.length; i++) {
        newClients.push({
          value: this.clients[i].id,
          text: this.clients[i].name
        });
      }
      let fullClients = [];
      fullClients = noneClients.concat(newClients);

      SurveyKo.JsonObject.metaData.addProperty("survey", {
        name: "clientId",
        choices: fullClients
      });

      this.setupProperty();
      this.loadSurveyEditor();
    });
  }

  setupProperty() {
    SurveyKo.JsonObject.metaData.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
    SurveyKo.JsonObject.metaData.addProperty("questionbase", "questionId");
    SurveyKo.JsonObject.metaData.findProperty(
      "questionbase",
      "questionId"
    ).readOnly = true;
    SurveyEditor.StylesManager.applyTheme("winterstone");

  }

  loadSurveyEditor() {
    let editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );

    var questionCounter = 1;
    //Set the name property different from the default value
    //and set the tag property to a generated GUID value.
    this.editor.onQuestionAdded.add(function(sender, options) {
      var q = options.question;
      var t = q.getType();
      //q.name = "Question" + t[0].toUpperCase() + t.substring(1) + questionCounter;
      q.questionId =
        "Q" + t[0].toUpperCase() + t.substring(1) + questionCounter;
      questionCounter++;
    });

    this.editor.text = JSON.stringify(this.json);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  @Output()
  surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    //this.getAllClients();
    this.setClients();
  }

  saveMySurvey = () => {
    console.log(this.editor);
    console.log(JSON.stringify(this.editor.text));
    console.log(this.editor.text);
    this.surveySaved.emit(JSON.parse(this.editor.text));
  };
}