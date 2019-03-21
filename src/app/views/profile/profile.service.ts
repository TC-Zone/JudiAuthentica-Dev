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
  clientUrl: string = environment.userApiUrl + "clients";
  licenseUrl: string = this.clientUrl + "/license";
  specsUrl: string = environment.userApiUrl + "spec";
  geoUrl: string = environment.userApiUrl + "geo";
  imgBaseURL = 'http://localhost:10000/api/downloads/client/';

  constructor(private http: HttpClient) { }

  updateUser(id, item): Observable<any> {
    return this.http
      .put<any>(this.userUrl +"/"+ id, item)
      .pipe(catchError(this.handleError));
  }

  
  getClient(id): Observable<any> {
    return this.http.get(this.clientUrl + "/" + id).pipe(catchError(this.handleError));
  }

  getCategory(): Observable<any> {
    return this.http.get(this.specsUrl + "/categories").pipe(catchError(this.handleError));
  }

  getCountry(): Observable<any> {
    return this.http.get(this.geoUrl + "/countries").pipe(catchError(this.handleError));
  }
  
  updateClientLicense(id, item): Observable<any> {
    return this.http
      .put<any>(this.licenseUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }
  
  updateClientDetails(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }

  
  getClientProfilePic(id):Observable<any> {
    return this.http.get(this.imgBaseURL+id).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return throwError(error);
  }
}
