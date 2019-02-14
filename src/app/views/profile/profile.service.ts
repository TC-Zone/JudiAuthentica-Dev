import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "environments/environment.prod";

@Injectable()
export class ProfileService {

  userUrl: string = environment.userApiUrl + "platform-users";

  constructor(private http: HttpClient) { }

  updateUser(id, item): Observable<any> {
    return this.http
      .put<any>(this.userUrl +"/"+ id, item)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return throwError(error);
  }
}
