import { Injectable } from "@angular/core";
import { ChoiceTypeEnum, MatrixTypeEnum, LangJsonWrapper, ValidateLocalizeSurveyRequestWrapper } from "../../model/FutureSurvey.model";

@Injectable()
export class FutureSurveyOperationalService {

  public surveyLang;
  public defLang = 'en';
  public extraLang = [];

  constructor() { }

  validateLocalizeSurveyRequest(jsonObject) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // if anywhere in the survey has been used another language, set selected language value to text directly instead of whole value array.
    // ex: if selected language is italiano, change text values as shown below.
    // "text": "articolo1 A" instead of "text": { "default": "item1 A", "it": "articolo1 A" }.
    // --------------------------------------------------------------------------------------------------------

    let lang;

    if (jsonObject.locale !== undefined) {
      lang = jsonObject.locale;
      this.defLang = lang;
    } else {
      lang = "default";
      this.defLang = 'en';
    }

    if (jsonObject.title !== undefined && typeof (jsonObject.title) !== "string" && lang) {
      this.checkLang(jsonObject.title);
      if (jsonObject.title.hasOwnProperty(lang)) {
        jsonObject.title = jsonObject.title[lang];
      } else {
        jsonObject.title = jsonObject.title['default'];
      }
    }

    jsonObject.pages.forEach(page => {
      const elements = page.elements;


      if (elements) {
        elements.forEach(element => {

          // ...... Validation Rules for all  Question Type Titles
          if (element.title !== undefined && typeof (element.title) !== "string" && lang) {
            this.checkLang(element.title);
            if (element.title.hasOwnProperty(lang)) {
              element.title = element.title[lang];
            } else {
              element.title = element.title['default'];
            }
            if (element.title === undefined) {
              element.title = element.name;
            }
          }

          // ...... Validation Rules for Choice Question Types
          if ((<any>Object).values(ChoiceTypeEnum).includes(element.type)) {
            let choices = element.choices;
            if (choices) {
              choices.forEach(choice => {
                if (choice.text !== undefined && typeof (choice.text) !== "string" && lang) {
                  this.checkLang(choice.text);
                  if (choice.text.hasOwnProperty(lang)) {
                    choice.text = choice.text[lang];
                  } else {
                    choice.text = choice.text['default'];
                  }
                }
              });
            }
          }

          // ....... validation rules for Matrix Question Types ............
          if ((<any>Object).values(MatrixTypeEnum).includes(element.type)) {
            let columns = element.columns;
            let rows = element.rows;
            if (columns) {
              columns.forEach(col => {
                if (col.text !== undefined && typeof (col.text) !== "string" && lang) {
                  this.checkLang(col.text);
                  if (col.text.hasOwnProperty(lang)) {
                    col.text = col.text[lang];
                  } else {
                    col.text = col.text['default'];
                  }
                }
              });
            }

            if (rows) {
              rows.forEach(row => {
                if (row.text !== undefined && typeof (row.text) !== "string" && lang) {
                  this.checkLang(row.text);
                  if (row.text.hasOwnProperty(lang)) {
                    row.text = row.text[lang];
                  } else {
                    row.text = row.text['default'];
                  }
                }
              });
            }

          }
        });
      }
    });

    this.surveyLang = new LangJsonWrapper(this.defLang, this.extraLang);

    return new ValidateLocalizeSurveyRequestWrapper(jsonObject, this.surveyLang);;
  }


  checkLang(array) {
    for (const key in array) {
      if (key !== 'default' && (this.extraLang.indexOf(key) == -1)) {
        this.extraLang.push(key)
      }
    }
  }

}