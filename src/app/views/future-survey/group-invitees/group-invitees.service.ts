// import { Injectable } from 'app/views/future-survey/future-survey-invitee-group/group-invitees/node_modules/@angular/core';
// import { environment } from '../../../../../environments/environment.prod
// import { HttpClient, HttpErrorResponse } from 'app/views/future-survey/future-survey-invitee-group/group-invitees/node_modules/@angular/common/http';
// import { map, catchError } from 'app/views/future-survey/future-survey-invitee-group/group-invitees/node_modules/rxjs/operators';
// import { throwError } from 'app/views/future-survey/future-survey-invitee-group/group-invitees/node_modules/rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserPromotionService {

//   public userApiUrl = environment.userApiUrl;
//   //edited by kushan
//   imageUrl: string = environment.userApiUrl + 'downloads/promo/';


//   constructor(
//     private http: HttpClient
//   ) { }

//   /*
//   * Create Promotion
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   createPromotion(promotionData) {
//     return this.http.
//       post(this.userApiUrl + 'promotions', promotionData)
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Update Promotion using promotion id
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   updatePromotionById(promotionId, promotionData) {
//     return this.http.
//       put(this.userApiUrl + 'promotions/' + promotionId, promotionData)
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Delete Promotion using promotion id
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   deletePromotionById(promotionId) {
//     return this.http.
//       delete(this.userApiUrl + 'promotions/' + promotionId)
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Delete Promotion list
//   * Here delete request is not working properly with body parameter. That's why request method used
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   deletePromotionList(promotionIdList) {
//     return this.http.request('delete', this.userApiUrl + 'promotions', { body: promotionIdList })
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Get promotion details using promotion id
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   getPromotionById(promotionId) {
//     return this.http.
//       get(this.userApiUrl + 'promotions/' + promotionId)
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Promotion search with pagination
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   fetchAllPromotions(communityId, pageNumber, pageSize) {
//     return this.http.
//       get(this.userApiUrl + 'promotions/community/' + communityId + '?pageNumber=' +
//         pageNumber + '&pageSize=' + pageSize)
//       .pipe(
//         map(data => {
//           return data;
//         }),
//         catchError(this.handleError)
//       );
//   }

//   /*
//   * Handle http response errors
//   * 06-03-2019
//   * Prasad Kumara
//   */
//   private handleError(error: HttpErrorResponse | any) {
//     return throwError(error);
//   }
// }
