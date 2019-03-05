import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunityService {

  public userApiUrl = environment.userApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  createCommunity(createCommunityData) {
    return this.http.
      post(this.userApiUrl + 'communities', createCommunityData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  fetchAllComunities(clientId) {
    return this.http.
      get(this.userApiUrl + 'communities/client/' + clientId)
      .pipe(
        map(data => {
          const resData: any = data;
          return resData.content;
        }),
        catchError(this.handleError)
      );
  }

  getCommunityById(communityId) {
    return this.http.
      get(this.userApiUrl + 'communities/' + communityId)
      .pipe(
        map(data => {
          const resData: any = data;
          return resData.content;
        }),
        catchError(this.handleError)
      );
  }

  updateCommunityById(communityId, communityData) {
    return this.http.
      put(this.userApiUrl + 'communities/' + communityId, communityData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  deleteCommunityById(communityId) {
    return this.http.
      delete(this.userApiUrl + 'communities/' + communityId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
