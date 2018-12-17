import { Injectable, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { InjectorInstance } from "./future-survey.module";
import { environment } from "../../../environments/environment.prod";

@Injectable()
export class FutureSurveyService {
  surveyApiUrl: string = environment.surveyApiURL;
  private http: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor() {
    this.http = InjectorInstance.get<HttpClient>(HttpClient);
  }

  submitFutureSurveyContent(content): Observable<any> {
    return this.http
      .post<any>(this.surveyApiUrl + "surveys" + "/futureSurvey", content)
      .pipe(
        map(data => {
          return data.content;
        }),
        catchError(this.handleError)
      );
  }


  updateFutureSurveyConfig(setting,id){
    return this.http
    .put<any>(this.surveyApiUrl + "surveys" + "/futureSurveyConfigUpdate/" + id, setting)
    .pipe(
      map(data => {
        return data.content;
      }),
      catchError(this.handleError)
    );
  }

  updateFutureSurveyContent(content, id): Observable<any> {
    return this.http
      .put<any>(this.surveyApiUrl + "surveys" + "/futureSurvey/" + id, content)
      .pipe(
        map(data => {
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  getAllFutureSurveys(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "surveys" + "/futureSurvey")
      .pipe(catchError(this.handleError));
  }

  deleteFutureSurvey(row): Observable<any> {
    return this.http
      .delete(this.surveyApiUrl + "surveys" + "/futureSurvey/" + row.id)
      .pipe(catchError(this.handleError));
  }

  getFutureSurveyById(surveyId): Observable<any> {
    return this.http
      .get<any>(this.surveyApiUrl + "surveys" + "/futureSurvey/" + surveyId)
      .pipe(catchError(this.handleError));
  }

  submitAnswers(answers): Observable<any> {
    return this.http
      .post<any>(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer", answers)
      .pipe(
        map(data => {
          console.log(data);
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  demoDO(testInput): Observable<any> {
    console.log("calllled");

    return this.http
      .post<any>("https://clearpicture-sl.atlassian.net/", testInput)
      .pipe(
        map(response => {
          console.log(JSON.stringify(response.content.id));
          return response.content.id;
        }),
        catchError(this.handleError)
      );
  }

  launchFutureSurvey(surveyId): Observable<any> {
    return this.http
      .get<any>(
        this.surveyApiUrl + "surveys" + "/futureSurveyLaunch/" + surveyId
      )
      .pipe(catchError(this.handleError));
  }

  fetchGroupsByClientId(clientId) {
    return this.http
      .get<any>(this.surveyApiUrl + "surveys" + "/inviteeGroup/" + clientId)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
