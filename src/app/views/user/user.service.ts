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
export class UserService {

  clientUrl: string = environment.userApiUrl + "clients";
  userUrl: string = environment.userApiUrl + "platform-users";
  roleUrl: string = environment.userApiUrl + "platform-user-roles";

  constructor(private http: HttpClient) { }


  getUsers(id): Observable<any> {
    return this.http.get(this.clientUrl+"/"+id).pipe(catchError(this.handleError));
  }

  getRoles(): Observable<any> {
    return this.http.get(this.roleUrl + "/suggestions").pipe(catchError(this.handleError));
  }

  addUser(item): Observable<any> {
    return this.http.post<any>(this.userUrl, item).pipe(
      map(data => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

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
