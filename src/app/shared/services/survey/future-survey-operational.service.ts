import { Injectable } from "@angular/core";
import { ChoiceTypeEnum, MatrixTypeEnum, LangJsonWrapper, ValidateLocalizeSurveyRequestWrapper } from "../../../model/FutureSurvey.model";

@Injectable()
export class FutureSurveyOperationalService {

  constructor() { }




  // --------------------------------- validateLocalizeSurveyRequest Start ----------------------------------------------------------------
  public surveyLang;
  public defLang;
  public extraLang;

  validateLocalizeSurveyRequest(jsonObject) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // if anywhere in the survey has been used another language, set selected language value to text directly instead of whole value array.
    // ex: if selected language is italiano, change text values as shown below.
    // "text": "articolo1 A" instead of "text": { "default": "item1 A", "it": "articolo1 A" }.
    // ----------------------------------------------------------------------------------------------------------


    // ------------------ validateLocalizeSurveyRequest input ---------------------------------------------------
    console.log('-------------- validateLocalizeSurveyRequest input', jsonObject);
    // ----------------------------------------------------------------------------------------------------------

    let lang;
    this.defLang = 'en';
    this.extraLang = [];

    if (jsonObject.locale !== undefined) {
      lang = jsonObject.locale;
      this.defLang = lang;
    } else {
      lang = "default";
      this.defLang = 'en';
    }

    if (jsonObject.title !== undefined && typeof (jsonObject.title) !== "string" && lang) {
      this.checkLang(jsonObject.title, lang);
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
            this.checkLang(element.title, lang);
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
                  this.checkLang(choice.text, lang);
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
                  this.checkLang(col.text, lang);
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
                  this.checkLang(row.text, lang);
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
    let returnVal: ValidateLocalizeSurveyRequestWrapper = new ValidateLocalizeSurveyRequestWrapper(jsonObject, this.surveyLang);

    // ----------------------------------------------------------------------------------------------------------
    console.log('-------------- validateLocalizeSurveyRequest return', returnVal);
    // ----------------------------------------------------------------------------------------------------------

    return returnVal;
  }


  // not tested properly
  // ------------------------------------------------------------------------------------------------------------

  checkLang(array, lang) {
    for (const key in array) {
      if (key !== 'default' && (this.extraLang.indexOf(key) == -1)) {
        this.extraLang.push(key);
      } else if (lang !== 'default' && key === 'default' && (this.extraLang.indexOf('en') == -1)) {
        this.extraLang.push('en');
      }
    }
  }

  // ------------------------------------------------------------------------------------------------------------

  // --------------------------------- validateLocalizeSurveyRequest End ------------------------------------------------------------------









  // --------------------------------- optionUnselect Start -------------------------------------------------------------------------------

  optionUnselect(Survey) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // ---------------------------------------------------------------------------------- Option Unselect -------
    // after add this widget to Survey, all the Radio Button Groups can unselect.
    // ----------------------------------------------------------------------------------------------------------
    let optionUnselectWidget = {
      name: "optionUnselect", isFit: function (question) { return question.getType() === 'radiogroup'; }, isDefaultRender: true, afterRender: function (question, el) {
        let lastValue = question.cachedValueForUrlRequests;
        el.onclick = function (e) {

          if (e.target && e.target.localName === "input") {
            console.log('----------------------------- question', question);
            console.log('----------------------------- e', e);
            console.log('----------------------------- el', el);

            // let targetValue = null;
            // if (e.originalTarget) {
            //   targetValue = e.originalTarget.value;
            // } else if (e.target) {
            //   targetValue = e.target.defaultValue;
            // }
            let targetValue = e.target.defaultValue;

            // console.log('----------------------------------- targetValue',targetValue);

            if (targetValue !== null) {
              if (lastValue === null || lastValue !== targetValue) {
                lastValue = question.cachedValueForUrlRequests
              } else {
                lastValue = null;
                question.clearValue();
              }
            }
          }


        }
      }
    };
    Survey.CustomWidgetCollection.Instance.addCustomWidget(optionUnselectWidget, "type");
    // ----------------------------------------------------------------------------------------------------------
  }

  // --------------------------------- optionUnselect End ---------------------------------------------------------------------------------






  // --------------------------------- optionUnselectForRating Start -------------------------------------------------------------------------------

  optionUnselectForRating(Survey) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // ---------------------------------------------------------------------------------- Option Unselect -------
    // after add this widget to Survey, all the Radio Button Groups can unselect.
    // ----------------------------------------------------------------------------------------------------------
    let optionUnselectForRatingWidget = {
      name: "optionUnselectForRating", isFit: function (question) { return question.getType() === 'rating'; }, isDefaultRender: true, afterRender: function (question, el) {

        let lastValue = null;
        for (let index = 0; index < el.children.length; index++) {
          const element = el.children[index];
          if (element.className.split(" ").includes("active")) {
            lastValue = element.firstElementChild.value;
          }
        }

        el.onclick = function (e) {
          console.log('----------------------------- question', question);

          if (e.target && e.target.localName === "input") {
            const targetValue = e.target.defaultValue;
            console.log('----------------------------- lastValue', lastValue);
            console.log('----------------------------- targetValue', targetValue);
            if (targetValue !== null) {
              console.log('-------------------- 1');

              if (lastValue === null || lastValue !== targetValue) {
                console.log('-------------------- 2');
                lastValue = targetValue;
              } else {
                console.log('-------------------- 3');
                lastValue = null;
                // (<HTMLInputElement>document.getElementById(e.target.id)).value = false;
                question.clearValue();
              }
            }
          }

        }
      }
    };
    Survey.CustomWidgetCollection.Instance.addCustomWidget(optionUnselectForRatingWidget, "type");
    // ----------------------------------------------------------------------------------------------------------
  }

  // --------------------------------- optionUnselectForRating End ------------------------------------------------------------------------------------------







  // --------------------------------- optionUnselectForMatrix Start -------------------------------------------------------------------------------

  optionUnselectForMatrix(Survey) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // ---------------------------------------------------------------------------------- Option Unselect -------
    // ----------------------------------------------------------------------------------------------------------
    let optionUnselectForMatrixWidget = {
      name: "optionUnselectForMatrix", isFit: function (question) { return question.getType() === 'matrix'; }, isDefaultRender: true, afterRender: function (question, el) {

        let lastValues = {};
        question.generatedVisibleRows.forEach(row => {
          lastValues[row.fullName] = row.rowValue;
        });

        let lastValue = question.cachedValueForUrlRequests;
        el.onclick = function (e) {

          // localName = input or nodeName = INPUT
          if (e.target && e.target.localName === "input") {
            let targetName = e.target.name;
            let targetValue = e.target.defaultValue;

            // console.log('----------------------------------- targetValue', targetName);
            // console.log('----------------------------------- targetValue', targetValue);
            // console.log('----------------------------------- lastValues[targetName]', lastValues[targetName]);
            // console.log('-------------------------------------- lastValues', lastValues);

            if (lastValues[targetName] === undefined || lastValues[targetName] !== targetValue) {
              lastValues[targetName] = targetValue;
            } else {
              console.log('---------------------------- else');

              lastValues[targetName] = undefined;
              (<HTMLInputElement>document.getElementById(e.target.id)).checked = false;
              // question.clearValue();
            }

          }
          console.log('-------------------------------------- lastValues', lastValues);
        }
      }
    };
    Survey.CustomWidgetCollection.Instance.addCustomWidget(optionUnselectForMatrixWidget, "type");
    // ----------------------------------------------------------------------------------------------------------
  }

  // --------------------------------- optionUnselectForMatrix End ---------------------------------------------------------------------------------









}
