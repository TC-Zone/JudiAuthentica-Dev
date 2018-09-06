import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Observable } from "rxjs/Observable";
import { catchError } from "../../../../node_modules/rxjs/operators";
import { _throw } from "rxjs/Observable/throw";
import { map } from "rxjs/operators";

@Injectable()
export class SurveyService {
  surveyApiUrl: string = environment.surveyApiURL;



  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor(private http: HttpClient) {

  }

  getAnswerTemplates(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "answer-templates/")
      .pipe(catchError(this.handleError));
  }

  addNewAnsTemplate(templateObj, items): Observable<any> {
    return this.http
      .post<any>(
        this.surveyApiUrl + "answer-templates/",
        templateObj,
        this.httpOptions
      )
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }

  updateAnsTemplate(id, item) {
    return this.http
      .put<any>(this.surveyApiUrl +"answer-templates/"+ id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  getAnsTemplateById(id, items): Observable<any> {
    console.log("by id url : " + this.surveyApiUrl + "answer-templates/" + id);
    return this.http.get<any>(this.surveyApiUrl + "answer-templates/"+ id).pipe(
      map(data => {
        console.log(data.content);
        return data.content;
      }),
      catchError(this.handleError)
    );
  }

  removeAnsTemplate(row, items): Observable<any> {
    return this.http.delete(this.surveyApiUrl + row.id, this.httpOptions).pipe(
      map(data => {
        let i = items.indexOf(row);
        items.splice(i, 1);
        return items;
      }),
      catchError(this.handleError)
    );
  }

  addNewSurvey(surveyObj, items): Observable<any> {
    return this.http
      .post<any>(this.surveyApiUrl + "surveys", surveyObj, this.httpOptions)
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }

  getAllSurveys(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "surveys")
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return _throw(error);
  }
}
