import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { InjectorInstance2 } from "./invitee-interaction-view.module";

@Injectable()
export class InviteeInteractionViewService {
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
    this.http = InjectorInstance2.get<HttpClient>(HttpClient);
  }

  interactLoginPost(loginReq) {
    return this.http
      .post<any>(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/inviteeLogin/", loginReq)
      .pipe(
        map(data => {
          console.log(data);
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  getFutureSurveyResultById(interactionId): Observable<any> {
    return this.http
      .get<any>(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + interactionId)
      .pipe(catchError(this.handleError));
  }

  submitAnswers(requestBody): Observable<any> {
    return this.http
      .post<any>(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer", requestBody)
      .pipe(
        map(data => {
          console.log(data);
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  updateAnswers(requestBody, id): Observable<any> {
    return this.http
      .put<any>(this.surveyApiUrl + "surveys" + "/futureSurveyAnswer/" + id, requestBody)
      .pipe(
        map(data => {
          console.log(data);
          return data.content;
        }),
        catchError(this.handleError));
  }

  submitSurvey(id): Observable<any> {
    return this.http
      .put<any>(this.surveyApiUrl + "surveys" + "/futureSurveyInteractionStatusChange/" + id, "Completed")
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

}
