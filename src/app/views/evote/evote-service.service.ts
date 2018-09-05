import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environments/environment.prod";
import { catchError } from "rxjs/operators";
import { _throw } from "rxjs/Observable/throw";

@Injectable()
export class EvoteService {
  surveyApiUrl: string = environment.surveyApiURL + 'evotes/';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };
  constructor(private http: HttpClient) {}

  getAllEvotes(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + 'suggestions')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return _throw(error);
  }
}
