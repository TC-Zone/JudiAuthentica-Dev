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
  //edited by kushan
  imageUrl: string = environment.userApiUrl + 'downloads/event/';

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
  fetchAllEvents(communityId, pageNumber, pageSize) {
    return this.http.
      get(this.userApiUrl + 'events/community/' + communityId + '?pageNumber=' +
        pageNumber + '&pageSize=' + pageSize)
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

  deleteEventList(eventIdList) {
    return this.http.request('delete', this.userApiUrl + 'events', { body: eventIdList })
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
