import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import {
  catchError,
  map,
  delay,
  tap
} from "../../../../node_modules/rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "environments/environment.prod";
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

  getAllEvotesSuggestions(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + 'suggestions')
      .pipe(catchError(this.handleError));
  }

  getAllEvotes():Observable<any> {
    return this.http.get(this.surveyApiUrl).pipe(catchError(this.handleError));
  }

  removeEvotes(row, items): Observable<any> {
    return this.http.delete(this.surveyApiUrl + row.id, this.httpOptions).pipe(
      map(data => {
        let i = items.indexOf(row);
        return items.splice(i, 1);
      }),
      catchError(this.handleError)
    );
  }

  addEvote(evoteObj, items): Observable<any> {
    return this.http
      .post<any>(this.surveyApiUrl, evoteObj, this.httpOptions)
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }
  updateEvote(id, item) {
    return this.http
      .put<any>(this.surveyApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return _throw(error);
  }
}
