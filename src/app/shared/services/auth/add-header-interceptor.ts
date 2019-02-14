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

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  private gloable_user = authProperties.gloable_user;
  private gloable_secret = authProperties.gloable_secret;
  private storage_name = authProperties.storage_name;

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));

    if (userObj) {
      const token = userObj.token;
      const tokenExpireState = this.userService.isTokenExpired(token);
      if (tokenExpireState) {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
        });
        this.userService.getUserRefreshToken(userObj.refreshToken)
          .subscribe(response => {
            userObj.token = response.access_token;
            userObj.refreshToken = response.refresh_token;
            userObj.expires_in = response.expires_in;
            localStorage.setItem(this.storage_name, JSON.stringify(userObj));
          });
      } else {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        if (!request.headers.has('Content-Type')) {
          request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
      }
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
      });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
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
}
