import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "../../../../node_modules/@angular/common/http";
import {
  catchError,
  map,
  delay
} from "../../../../node_modules/rxjs/operators";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  clientApiUrl: string = environment.baseApiURL + "clients/suggestions";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.clientApiUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return _throw(error);
  }
}
