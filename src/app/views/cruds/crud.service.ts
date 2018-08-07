import { Injectable } from "@angular/core";
import { UserDB } from "../../shared/fake-db/users";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "../../../../node_modules/@angular/common/http";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";

@Injectable()
export class CrudService {
  clientApiUrl: string = environment.baseApiURL + "clients/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.clientApiUrl).pipe(catchError(this.handleError));
  }

  addItem(item, items: any[]): Observable<any> {
    return this.http.post<any>(this.clientApiUrl, item, this.httpOptions).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateItem(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  removeItem(id): Observable<any> {
    return this.http
      .delete(this.clientApiUrl + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return _throw(error);
  }
}
