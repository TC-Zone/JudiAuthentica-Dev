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

  public userUrl: string = environment.userApiUrl + "platform-users";
  public userProfileUrl: string = environment.userApiUrl + "platform-user-profiles";
  public clientUrl: string = environment.userApiUrl + "clients";
  public licenseUrl: string = this.clientUrl + "/license";
  public specsUrl: string = environment.userApiUrl + "spec";
  public geoUrl: string = environment.userApiUrl + "geo";
  public imgBaseURL = environment.userApiUrl + 'downloads';

  constructor(private http: HttpClient) { }

  updateUser(item): Observable<any> {
    return this.http
      .put<any>(this.userProfileUrl, item)
      .pipe(catchError(this.handleError));
    // return this.http
    //   .put<any>(this.userProfileUrl +"/"+ id, item)
    //   .pipe(catchError(this.handleError));
  }

  updateUserPassword(item): Observable<any> {
    return this.http
      .put<any>(this.userProfileUrl + "/change-password", item)
      .pipe(catchError(this.handleError));
  }

  updateProfilePic(item): Observable<any> {
    return this.http
      .post<any>(this.userUrl + "/profileImage", item)
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

  getClientCategories(id): Observable<any> {
    return this.http.get(this.clientUrl + "/categories/" + id).pipe(catchError(this.handleError));
  }

  getClientProfileImg(id): Observable<Blob> {
    return this.http.get(this.imgBaseURL + "/client/" + id, { responseType: 'blob' });
  }

  updateClientLicense(id, item): Observable<any> {
    return this.http
      .put<any>(this.licenseUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }

  updateClientCategory(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl + "/categories/" + id, item)
      .pipe(catchError(this.handleError));
  }

  updateClientDetails(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return throwError(error);
  }
}
