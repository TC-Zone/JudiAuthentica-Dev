import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { authProperties } from './auth-properties';
import { UserService } from './../../../views/sessions/UserService.service';
import { st } from '@angular/core/src/render3';
import { environment } from './../../../../environments/environment.prod';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  private gloable_user = authProperties.gloable_user;
  private gloable_secret = authProperties.gloable_secret;
  private storage_name = authProperties.storage_name;
  private blackListUrls = [
    'Url which is not need to set Bearer token'
  ];

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
    const authTokenUrlValidation = this.outhTokenUrlValidate(request.url);
    if (userObj) {
      const token = userObj.token;
      const tokenExpireState = this.userService.isTokenExpired(token);
      const blaklistStatus = this.getBlackListUrl(request.url);
      console.log(request.url);
      console.log(blaklistStatus);
      if (!blaklistStatus) {
        if (tokenExpireState) {
          if (authTokenUrlValidation) {
            request = request.clone({
              headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
            });
          }
        } else {
          request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
          if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }
          request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }
      }
    } else {
      if (authTokenUrlValidation) {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
        });
      }
    }

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            let data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            return throwError(error);
        }));
  }

  private getBlackListUrl(url): boolean {
    let status = false;
    if (url.match(environment.userApiUrl)) {
      const subUrl = url.replace(environment.userApiUrl, '');
      for (let i = 0; i < this.blackListUrls.length; i++) {
        if (this.blackListUrls[i] === subUrl) {
          console.log(subUrl);
          status = true;
          break;
        }
      }
    }
    if (url.match(environment.surveyApiURL)) {
      status = true;
    }
    if (url.match(environment.productApiURL)) {
      status = true;
    }
    if (url.match(environment.productimageUrl)) {
      status = true;
    }
    if (url.match(environment.evoteimageUrl)) {
      status = true;
    }
    return status;
  }

  private outhTokenUrlValidate(url): boolean {
    const authTokenUrl = 'http://localhost:10000/oauth/token';
    if (authTokenUrl === url) {
      return true;
    } else {
      return false;
    }
  }
}
