import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from '../../../../../environments/environment.prod';

@Injectable()
export class UserFeedbackService {

  feedbackUrl: string = environment.userApiUrl + "feedback";

  constructor(private http: HttpClient) { }

  getFeedbackById(id: string): Observable<any> {
    return this.http.get(this.feedbackUrl + "/" + id).pipe(catchError(this.handleError));
  }

  // getCommunityFeedbacks(id: string): Observable<any> {
  //   return this.http.get(this.feedbackUrl + "/community/" + id).pipe(catchError(this.handleError));
  // }

  createFeedback(createEventData) {
    return this.http.
      post(this.feedbackUrl, createEventData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }


  getCommunityFeedbacks(communityId, pageNumber, pageSize) {
    return this.http.
      get(this.feedbackUrl + "/community/" + communityId + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize).pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  feedbackUpdateById(feedbackId, feedbackData) {
    return this.http.put(this.feedbackUrl + "/" + feedbackId, feedbackData).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  feedbackDeleteById(feedbackId) {
    return this.http.delete(this.feedbackUrl + "/" + feedbackId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  deleteFeedbackList(feedbackIdList) {
    return this.http.request('delete', this.feedbackUrl, { body: feedbackIdList }).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }




  private handleError(error: HttpErrorResponse | any) {
    // console.log(error);
    if (error.status !== 401) {
      return throwError(error);
    }
  }

}
