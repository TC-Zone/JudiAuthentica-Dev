import { Component, OnInit } from "@angular/core";
import * as SurveyEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { CrudService } from "../../cruds/crud.service";
import { Subscription } from "rxjs";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { FutureSurveyService } from "../future-survey.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { MatSnackBar } from "@angular/material";

import { LocalizationService } from "../../../shared/services/localization.service";
import { FutureSurveyOperationalService } from "../future-survey-operational.service";
import { ClientService } from "../../client/client.service";
import {
  FutureSurveyRequest,
  ChoiceTypeEnum,
  MatrixTypeEnum,
  LangJsonWrapper
} from "../../../model/FutureSurvey.model";
import { AppWarningService } from "app/shared/services/app-warning/app-warning.service";
import { DefaultLangWrapper } from "../../../model/FutureSurvey.model";

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
  sub: any;

  surveyId: any;
  jsonContent: any;

  constructor(
    private clientService: CrudService,
    private clientService2: ClientService,
    private furureSurveyService: FutureSurveyService,
    private router: Router,
    private route: ActivatedRoute,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private snack: MatSnackBar,
    private loc: LocalizationService,
    private FSOperationalService: FutureSurveyOperationalService,
    private appWarning: AppWarningService
  ) {}

  ngOnInit() {
    this.loader.open();
    this.sub = this.route.queryParams.subscribe(params => {
      this.surveyId = params["surveyId"];
      console.log("survey id : " + this.surveyId);

      if (this.surveyId) {
        this.furureSurveyService
          .getFutureSurveyById(this.surveyId)
          .subscribe(response => {
            this.jsonContent = JSON.parse(response.content.jsonContent);
            console.log(this.jsonContent);

            let title = response.content.title;
            this.snack.open("New " + title + " survey is loaded !", "OK", {
              duration: 4000
            });
            this.setuptheme();
            this.setClients();
          });
      } else {
        this.setuptheme();
        this.setClients();
      }
    });
    //add new localization
    this.loc.addlocalization();
  }

  setClients() {
    this.getClientSub = this.clientService2.getClients().subscribe(data => {
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
      this.loader.close();
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
    SurveyKo.JsonObject.metaData.addProperty("questionbase", "qcode");
    SurveyKo.JsonObject.metaData.findProperty(
      "questionbase",
      "qcode"
    ).readOnly = true;
    SurveyKo.JsonObject.metaData.addProperty("question", {
      name: "customVisibleName"
    });
    SurveyKo.JsonObject.metaData.addProperty("question", {
      name: "customVisibleValue"
    });
  }

  loadSurveyEditor() {
    let editorOptions = {
      showEmbededSurveyTab: true,
      generateValidJSON: true,
      showTranslationTab: true, // ADDED for enable language translation tab : YRS
      questionTypes: [
        "text",
        "radiogroup",
        "dropdown",
        "imagepicker",
        "rating",
        "comment",
        "panel",
        "microphone",
        "html",
        "matrix",
        "checkbox"
      ]
    };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );

    let removeItems: string[] = [
      "editor",
      "sortablelist",
      "nouislider",
      "bootstrapslider",
      "signaturepad",
      "matrixdropdown",
      "matrixdynamic"
    ];

    removeItems.forEach(item => {
      this.editor.toolbox.removeItem(item);
    });

    let questionCounter = 1;
    // Set the name property different from the default value
    // and set the tag property to a generated GUID value.

    this.editor.onQuestionAdded.add(function(sender, options) {
      let q = options.question;

      let text = "";
      let possible = "abcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      q.qcode = text;
      questionCounter++;
    });

    if (this.jsonContent) {
      console.log("JSON CONTENT : ");
      console.log(this.jsonContent);
      this.editor.text = this.jsonContent;
    }

    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  setuptheme() {
    const mainColor = "#0684C0";
    const mainHoverColor = "#5DAAD2";
    const textColor = "#4a4a4a";
    const headerColor = "#b7b7b7";
    const headerBackgroundColor = "#000000";
    const bodyContainerBackgroundColor = "#f8f8f8";

    const defaultThemeColorsSurvey =
      SurveyKo.StylesManager.ThemeColors["default"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey[
      "$header-background-color"
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      "$body-container-background-color"
    ] = bodyContainerBackgroundColor;

    const defaultThemeColorsEditor =
      SurveyEditor.StylesManager.ThemeColors["default"];
    defaultThemeColorsEditor["$primary-color"] = mainColor;
    defaultThemeColorsEditor["$secondary-color"] = mainColor;
    defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
    defaultThemeColorsEditor["$primary-text-color"] = textColor;
    defaultThemeColorsEditor["$selection-border-color"] = mainColor;

    SurveyKo.StylesManager.applyTheme();
    SurveyEditor.StylesManager.applyTheme();
  }

  saveMySurvey = () => {
    // console.log("...........plain text............");
    // console.log(this.editor.text);

    let jsonText = JSON.stringify(this.editor.text);
    let jsonObject = JSON.parse(this.editor.text);

    console.log("...........after json strigfy text............");
    console.log(jsonText);
    console.log(jsonObject);

    const defLang = jsonObject.locale;
    const langArray: any[] = this.editor.translation.koLocales._latestValue;

    const extraArray: any[] = [];
    langArray.forEach(lang => {
      const locale = lang.locale;
      if (locale !== "" || locale.length !== 0) {
        extraArray.push(locale);
      }
    });

    let langJson: any;
    if (extraArray.length != 0) {
      langJson = new LangJsonWrapper(defLang, extraArray);
    } else {
      langJson = new DefaultLangWrapper(defLang);
    }

    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // if anywhere in the survey has been used another language, set selected language value to text directly instead of whole value array.
    // ex: if selected language is italiano, change text values as shown below.
    // "text": "articolo1 A" instead of "text": { "default": "item1 A", "it": "articolo1 A" }.
    // --------------------------------------------------------------------------------------------------------

    jsonObject = this.FSOperationalService.validateLocalizeSurveyRequest(
      jsonObject
    );

    // --------------------------------------------------------------------------------------------------------

    if (this.validateFutureSurveyRequest(jsonObject)) {
      return;
    }

    const request: FutureSurveyRequest = new FutureSurveyRequest(
      jsonText,
      jsonObject.title,
      jsonObject.clientId,
      JSON.stringify(langJson),
      jsonObject.pages
    );
    this.loader.open();
    this.submitFutureSurvey(request, this.surveyId);
  };

  navigateSurveyList() {
    this.router.navigate(["future-survey/sList"]);
  }

  submitFutureSurvey(jsonContent: any, futureSurveyId?: any) {
    console.log("FutureSurveUD : " + futureSurveyId);
    if (futureSurveyId) {
      this.furureSurveyService
        .updateFutureSurveyContent(jsonContent, futureSurveyId)
        .subscribe(
          response => {
            let title = response.title;
            this.loader.close();
            this.snack.open(title + " survey has updated !", "OK", {
              duration: 4000
            });
          },
          error => {
            this.loader.close();
            this.errDialog.showError(error);
          }
        );
    }

    // ............... SAVE PROCESS REMOVED with CONFIG popup replacement : YRS
    // else {
    //   console.log(jsonContent);
    //   this.furureSurveyService.submitFutureSurveyContent(jsonContent).subscribe(
    //     response => {
    //       let title = response.title;
    //       this.surveyId = response.id;
    //       this.loader.close();
    //       this.snack.open("New " + title + " survey is created !", "OK", {
    //         duration: 4000
    //       });
    //     },
    //     error => {
    //       this.loader.close();
    //       this.errDialog.showError({
    //         title: "Error",
    //         status: error.status,
    //         type: "http_error"
    //       });
    //     }
    //   );
    // }
  }

  validateFutureSurveyRequest(jsonRequest) {
    let title = jsonRequest.title;
    let clientId = jsonRequest.clientId;
    let pages = jsonRequest.pages;

    let clientError;
    // ------- Root Element validations of JsonRequest   --------
    if (!clientId) {
      clientError = "Please choose a client for the survey!";
    }
    if (!title) {
      clientError = "Please add a Title for the Survey!";
    }
    if (!pages) {
      clientError = "Page will be a mandatory item for the Survey!";
    }

    // -------  Page Element Validations of JsonRequest --------
    pages.forEach(page => {
      const elements = page.elements;
      let lang = null;

      console.log("local 0" + jsonRequest.locale);

      if (jsonRequest.locale) {
        lang = jsonRequest.locale;
      }

      console.log("lang :......" + lang);

      if (!elements) {
        clientError = "Survey should have atleast one question!";
      } else {
        elements.forEach(element => {
          // ...... Validation Rules for Choice Question Types
          if ((<any>Object).values(ChoiceTypeEnum).includes(element.type)) {
            let choices = element.choices;
            if (choices) {
              choices.forEach(choice => {
                let value = choice.value;
                let text = choice.text;
                console.log("....................TEXT.....................");
                console.log(text);

                if (!value || value == null) {
                  clientError =
                    "Please add a value for the choice item of " + element.name;
                }
                if (!text || text == null || text === undefined) {
                  clientError =
                    "Please add a text for the choice item of " + element.name;
                } else if (lang && text.hasOwnProperty(lang)) {
                  text = text[lang];
                  console.log("IN IF LANG");
                  console.log(text);
                }
              });
            } else {
              clientError =
                "Please add choice items for the " + element.name + "!";
            }
          }

          // ....... validation rules for Matrix Question Types ............
          if ((<any>Object).values(MatrixTypeEnum).includes(element.type)) {
            let columns = element.columns;
            let rows = element.rows;
            if (columns) {
              columns.forEach(col => {
                let value = col.value;
                let text = col.text;
                if (!value || value == null) {
                  clientError =
                    "Please add a value for the column  of " + element.name;
                }
                if (!text || text == null) {
                  clientError =
                    "Please add a text for the column  of " + element.name;
                }
              });
            } else {
              clientError = "Please add columns  for the " + element.name + "!";
            }

            if (rows) {
              rows.forEach(row => {
                let value = row.value;
                let text = row.text;

                if (!value || value == null) {
                  clientError =
                    "Please add a value for the row  of " + element.name;
                }
                if (!text || text == null) {
                  clientError =
                    "Please add a text for the row  of " + element.name;
                }
              });
            } else {
              clientError = "Please add rows  for the " + element.name + "!";
            }
          }
        });
      }
    });

    console.log(
      ".......................AFTER VALIDATION........................"
    );
    console.log(jsonRequest);

    if (clientError) {
      const warningData = {
        title: "Future Survey Warning!",
        message: clientError
      };
      this.appWarning.showWarning(warningData);
      // this.errDialog.showError({
      //   title: "Error",
      //   type: "client_error",
      //   clientError: clientError
      // });
      return true;
    } else {
      return false;
    }
  }
}
