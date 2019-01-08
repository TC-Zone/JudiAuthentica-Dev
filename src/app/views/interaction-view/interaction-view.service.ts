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
import { InjectorInstance2 } from "./interaction-view.module";

@Injectable()
export class InteractionViewService {
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

  getInteractionById(interactionId): Observable<any> {
    return this.http
      .get<any>(
        this.surveyApiUrl + "surveys/futureSurveyInteraction/" + interactionId
      )
      .pipe(catchError(this.handleError));
  }

  getFutureSurveyById(surveyId): Observable<any> {
    return this.http
      .get<any>(this.surveyApiUrl + "surveys" + "/futureSurvey/" + surveyId)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
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


  interactLogin(loginReq){
    return this.http
    .get<any>(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/login/" + loginReq.password)
    .pipe(catchError(this.handleError));
  }

  interactLoginPost(loginReq){
    return this.http
    .post<any>(this.surveyApiUrl + "surveys" + "/futureSurveyInteraction/login/",loginReq )
    .pipe(
      map(data => {
        console.log(data);
        return data.content;
      }),
      catchError(this.handleError)
    );
  }


}
