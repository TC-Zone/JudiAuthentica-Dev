import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPromotionService {

  public userApiUrl = environment.userApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  createPromotion(promotionData) {
    return this.http.
      post(this.userApiUrl + 'promotions', promotionData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  updatePromotionById(promotionId, promotionData) {
    return this.http.
      put(this.userApiUrl + 'promotions/' + promotionId, promotionData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  deletePromotionById(promotionId) {
    return this.http.
      delete(this.userApiUrl + 'promotions/' + promotionId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  deletePromotionList(promotionIdList) {
    return this.http.request('delete', this.userApiUrl + 'promotions', { body: promotionIdList })
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
    // return this.http.
    //   delete(this.userApiUrl + 'promotions', promotionIdList)
    //   .pipe(
    //     map(data => {
    //       return data;
    //     }),
    //     catchError(this.handleError)
    //   );
  }

  getPromotionById(promotionId) {
    return this.http.
      get(this.userApiUrl + 'promotions/' + promotionId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  fetchAllPromotions(communityId, pageNumber, pageSize) {
    return this.http.
      get(this.userApiUrl + 'promotions/community/' + communityId + '?pageNumber=' +
        pageNumber + '&pageSize=' + pageSize)
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
