import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class FutureSurveyService {
  surveyApiUrl: string = environment.surveyApiURL;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor(private http: HttpClient) {}

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

  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return throwError(error);
  }
}
