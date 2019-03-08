import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod';
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

  /*
  * Create community
  * 05-03-2019
  * Prasad Kumara
  */
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

  /*
  * Fetch all communities
  * 05-03-2019
  * Prasad Kumara
  */
  fetchAllComunities(clientId, pageNumber, pageSize) {
    return this.http.
      get(this.userApiUrl + 'communities/client/' + clientId + '?pageNumber=' +
      pageNumber + '&pageSize=' + pageSize)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * get community using community id
  * 05-03-2019
  * Prasad Kumara
  */
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

  /*
  * Update community using community id
  * 05-03-2019
  * Prasad Kumara
  */
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

  /*
  * Delete community using community id
  * 05-03-2019
  * Prasad Kumara
  */
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

  licenseExpireState(clientId, moduleName) {
    return this.http.
      get(this.userApiUrl + 'clients/license/' + clientId + '/' + moduleName)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Handle http response error
  * 05-03-2019
  * Prasad Kumara
  */
  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
