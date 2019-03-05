import { Injectable } from "@angular/core";
import { ChoiceTypeEnum, MatrixTypeEnum } from "../../model/FutureSurvey.model";

@Injectable()
export class FutureSurveyOperationalService {

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
    } else {
      lang = "default";
    }

    if (jsonObject.title !== undefined && typeof (jsonObject.title) !== "string" && lang && jsonObject.title.hasOwnProperty(lang)) { jsonObject.title = jsonObject.title[lang]; }

    jsonObject.pages.forEach(page => {
      const elements = page.elements;

      if (elements) {
        elements.forEach(element => {

          // ...... Validation Rules for Choice Question Types
          if ((<any>Object).values(ChoiceTypeEnum).includes(element.type)) {
            let choices = element.choices;
            if (choices) {
              choices.forEach(choice => {
                if (choice.text !== undefined && typeof (choice.text) !== "string" && lang && choice.text.hasOwnProperty(lang)) { choice.text = choice.text[lang]; }
              });
            }
          }

          // ....... validation rules for Matrix Question Types ............
          if ((<any>Object).values(MatrixTypeEnum).includes(element.type)) {
            let columns = element.columns;
            let rows = element.rows;
            if (columns) {
              columns.forEach(col => {
                if (col.text !== undefined && typeof (col.text) !== "string" && lang && col.text.hasOwnProperty(lang)) { col.text = col.text[lang]; }
              });
            }

            if (rows) {
              rows.forEach(row => {
                if (row.text !== undefined && typeof (row.text) !== "string" && lang && row.text.hasOwnProperty(lang)) { row.text = row.text[lang]; }
              });
            }

          }
        });
      }
    });

    return jsonObject;
  }

}