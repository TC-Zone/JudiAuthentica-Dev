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
import { Router } from '@angular/router';
import { AppLoaderService } from './../app-loader/app-loader.service';


@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  private gloable_user = authProperties.gloable_user;
  private gloable_secret = authProperties.gloable_secret;
  private storage_name = authProperties.storage_name;
  private whiteListUrls = [
    environment.userApiUrl
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private loader: AppLoaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.getAuthToken();
    const isAuthToken = this.oauthTokenUrlValidate(request.url);
    if (token !== false) {
      if (isAuthToken) {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Basic ' + btoa(this.gloable_user + ':' + this.gloable_secret))
        });
      } else {
        const isTokenRequired = this.getWhiteListUrl(request.url);
        if (isTokenRequired) {
          request = request.clone({
            headers: request.headers.set('Authorization', 'bearer ' + token)
          });
        }
      }
    } else {
      if (isAuthToken) {
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
          console.log('---------------------- response error code ---------------------');
          if (error.status === 401) {
            const isFromRefreshTokenEndpoint = !!error.headers.get(
              'unableToRefreshToken'
            );
            if (isFromRefreshTokenEndpoint) {
              localStorage.clear();
              this.router.navigate(['sessions/signin']);
              return throwError(error);
            }
            const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
            this.loader.open();
            this.userService.getUserRefreshToken(userObj.refreshToken)
              .subscribe(response => {
                userObj.refreshToken = response.refresh_token;
                userObj.token = response.access_token;
                userObj.expires_in = response.expires_in;
                localStorage.setItem(this.storage_name, JSON.stringify(userObj));
                const reRequest = request.clone({
                  headers: request.headers.set('Authorization', 'bearer ' + response.access_token)
                });
                this.loader.close();
                window.location.reload();
                return next.handle(reRequest);
              },
              err => {
                localStorage.clear();
                this.router.navigate(['sessions/signin']);
                return throwError(err);
              }
            );
            this.loader.close();
          }
            return throwError(error);
        }));
  }

  private getWhiteListUrl(url): boolean {
    let status = false;
    for (let i = 0; i < this.whiteListUrls.length; i++) {
      const isMatched = url.match(this.whiteListUrls[i]);
      if (isMatched) {
        status = true;
        break;
      }
    }
    return status;
  }

  private oauthTokenUrlValidate(url): boolean {
    const authTokenUrl = environment.authTokenUrl + 'oauth/token';
    if (authTokenUrl === url) {
      return true;
    } else {
      return false;
    }
  }
}
