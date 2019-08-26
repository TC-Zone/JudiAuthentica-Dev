import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent
} from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Rx";
import { switchMap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { authProperties } from "./auth-properties";
import { AuthenticationService } from "./../../../views/sessions/authentication.service";
import { st } from "@angular/core/src/render3";
import { environment } from "./../../../../environments/environment.prod";
import { Router } from "@angular/router";
import { AppLoaderService } from "./../app-loader/app-loader.service";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  private gloable_user = authProperties.gloable_user;
  private gloable_secret = authProperties.gloable_secret;
  // private storage_name = authProperties.storage_name;

  private publicUrls = [environment.authTokenUrl + "api/downloads"];
  private whiteListUrls = [environment.userApiUrl];
  private userServiceBlackListUrls = ["platform-users/activations/"];

  // private whiteListUrl = [
  //   { url: environment.authTokenUrl + "oauth/token", type: "oauthToken" },
  //   { url: environment.userApiUrl, type: "userApiUrl" }
  // ];

  isRefreshingToken: boolean = false;
  isTokenError: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private loader: AppLoaderService,
    public snackBar: MatSnackBar,
  ) { }

  getRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {

    const isAuthToken = this.oauthTokenUrlValidate(request.url);

    if (isAuthToken) {
      request = request.clone({
        headers: request.headers.set(
          "Authorization",
          "Basic " + btoa(this.gloable_user + ":" + this.gloable_secret)
        )
      });
      // console.log("---------------------------------- AddHeaderInterceptor : request', request);

    } else {

      const isTokenRequired = this.getWhiteListUrl(request.url);

      if (token) {
        if (isTokenRequired) {
          // console.log("---------------------------------- AddHeaderInterceptor : refreshToken in header', token);
          request = request.clone({
            headers: request.headers.set("Authorization", "bearer " + token)
          });
        }
      } else {
        // this.userService.logout();
      }

    }

    return request;
  }

  intercept(
    request: HttpRequest<any>, next: HttpHandler):
    Observable<
      | HttpSentEvent
      | HttpHeaderResponse
      | HttpProgressEvent
      | HttpResponse<any>
      | HttpUserEvent<any>
    > {

    return next
      .handle(this.checkPublicUrl(request.url) ? request : this.getRequest(request, this.authService.getAuthToken()))
      .catch(error => {
        // console.log("---------------------------------- AddHeaderInterceptor : error", error);
        // console.log("---------------------------------- AddHeaderInterceptor : error", error.url);

        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 401:

              const isAuthToken = this.oauthTokenUrlValidate(request.url);
              if (isAuthToken) {
                // console.log("---------------------------------- AddHeaderInterceptor : Logout - ");
                return this.logoutUser();
              } else {
                return this.handle401Error(request, next);
              }

            default:
              return Observable.throw(error);
          }
        } else {
          return Observable.throw(error);
        }

      });

  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {

    // console.log("---------------------------------- AddHeaderInterceptor : 01. handle401Error");
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return this.authService
        .getNewToken()
        .switchMap((newToken: string) => {
          // console.log("---------------------------------- AddHeaderInterceptor : 02. getNewToken");
          if (newToken) {
            // console.log("---------------------------------- AddHeaderInterceptor : 03. newToken");
            this.tokenSubject.next(newToken);
            return next
              .handle(this.getRequest(req, newToken))
              .catch(error => {
                // console.log("---------------------------------- AddHeaderInterceptor : 04. recallUrlError");
                console.log(error);
                return Observable.throw(error);
              });
          }
          // If we don't get a new token, we are in trouble so logout.
          // console.log("---------------------------------- AddHeaderInterceptor : If we don't get a new token, we are in trouble so logout.");
          return this.logoutUser();
        })
        .catch(error => {
          console.log(error);
          if (error && error.url && error.error.error) {
            if (this.oauthTokenUrlValidate(error.url) && error.error.error !== 'access_denied') {
              // If there is an exception calling 'refreshToken', bad news so logout.
              // console.log("---------------------------------- AddHeaderInterceptor : If there is an exception calling 'refreshToken', bad news so logout.");
              return this.logoutUser();
            }
          } else {
            return Observable.throw(error);
          }
        })
        .finally(() => {
          this.isRefreshingToken = false;
        });

    } else {

      return this.tokenSubject
        .filter(token => token != null)
        .take(1)
        .switchMap(token => {
          return next.handle(this.getRequest(req, token));
        });

    }
  }

  logoutUser() {
    // Route to the login page
    this.snackBar.open("Your session has expired!", "close", { duration: 2000 });
    this.authService.logout();
    return Observable.throw("");
  }

  private oauthTokenUrlValidate(url): boolean {
    const authTokenUrl = environment.authTokenUrl + "oauth/token";
    if (authTokenUrl === url) {
      return true;
    } else {
      return false;
    }
  }

  private checkPublicUrl(url): boolean {
    for (let i = 0; i < this.publicUrls.length; i++) {
      const isMatched = url.match(this.publicUrls[i]);
      if (isMatched) {
        return true;
      }
    }
    return false;
  }

  private getWhiteListUrl(url): boolean {
    for (let i = 0; i < this.whiteListUrls.length; i++) {
      const isMatched = url.match(this.whiteListUrls[i]);
      if (isMatched) {
        for (let j = 0; j < this.userServiceBlackListUrls.length; j++) {
          const blacklistMatched = url.match(this.userServiceBlackListUrls[j]);
          if (blacklistMatched) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }

}
