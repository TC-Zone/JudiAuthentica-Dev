import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  public userApiUrl = environment.userApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  /*
  * Create new Event
  * 05-03-2019
  * Prasad Kumara
  */
  createEvent(createEventData) {
    return this.http.
      post(this.userApiUrl + 'events', createEventData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Fetch all events using community id
  * 05-03-2019
  * Prasad Kumara
  */
  fetchAllEventsByCommunityId(communityId) {
    return this.http.
      get(this.userApiUrl + 'events/community/' + communityId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Get Event Details using Event Id
  * 05-03-2019
  * Prasad Kumara
  */
  getEventById(eventId) {
    return this.http.
      get(this.userApiUrl + 'events/' + eventId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Update Event
  * 05-03-2019
  * Prasad Kumara
  */
  eventUpdateById(eventId, eventData) {
    return this.http.
      put(this.userApiUrl + 'events/' + eventId, eventData)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Delete Event
  * 05-03-2019
  * Prasad Kumara
  */
  eventDeleteById(eventId) {
    return this.http.
      delete(this.userApiUrl + 'events/' + eventId)
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
