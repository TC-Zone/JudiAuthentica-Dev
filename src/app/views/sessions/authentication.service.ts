import { Injectable, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";
import * as jwt_decode from "jwt-decode";
import { map, catchError, share } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { environment } from "environments/environment.prod";
import { authProperties } from "../../shared/services/auth/auth-properties";

import { Router } from "@angular/router";
import { log } from "util";

@Injectable()
export class AuthenticationService {
  users: any[];
  private baseAuthUrl: String = environment.authTokenUrl;
  private storage_name = authProperties.storage_name;
  private componentList = authProperties.componentList;
  private userApiUrl = environment.userApiUrl;
  public imgBaseURL = environment.userApiUrl + 'downloads';
  public testValue;

  public currentToken: string;
  public authRefreshToken: string;

  public authTokenNew: string;
  constructor(private http: HttpClient, private router: Router) { }


  /*
   * User Login function
   * Created by Prasad Kumara
   * 14/02/2019
   */
  login(signinFormData) {
    const payload = new FormData();
    payload.append("grant_type", "password");
    payload.append("username", signinFormData.username);
    payload.append("password", signinFormData.password);

    return this.http.post<any>(this.baseAuthUrl + "oauth/token", payload).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.router.navigate(['/sessions/signin']);
  }

  activateUser(code, password): Observable<any> {
    console.log("CALLED  service" + code);
    console.log(password);

    return this.http
      .post<any>(
        this.userApiUrl + "platform-users/activations/" + code,
        password
      )
      .pipe(
        map(data => {
          console.log("SUCESS");
          console.log(data);
        }),
        catchError(this.handleError)
      );
  }

  /*
   * Get User data using user id
   * Created by Prasad Kumara
   * 14/02/2019
   */
  getUserData(userId): any {
    return this.http.get(this.userApiUrl + "platform-users/" + userId).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  /*
   * Get Logged User and Details by User ID
   * Created by Raveen Sankalpa
   * 05/04/2019
   */
  getLoggedUserData(userId): any {
    return this.http
      .get(this.userApiUrl + "platform-users/current/" + userId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  getActiveComponet() {
    const currentUser = JSON.parse(localStorage.getItem(this.storage_name));
    let arrayList = [];
    if (currentUser) {
      currentUser.userData.role.authorities.forEach(authority => {
        if (authority.type === "D") {
          arrayList.push(authority.section.name);
        }
      });
    }
    return arrayList;
  }

  getAuthToken() {
    const currentUser = JSON.parse(localStorage.getItem(this.storage_name));
    if (currentUser) {
      this.currentToken = currentUser.token;
    }
    // console.log('---------------------------- currentToken', this.currentToken);
    return this.currentToken;
  }

  getNewToken(): Observable<string> {
    const currentUser = JSON.parse(localStorage.getItem(this.storage_name));
    const payload = new FormData();
    if (currentUser) {
      payload.append("grant_type", "refresh_token");
      payload.append("refresh_token", currentUser.refreshToken);
    }

    console.log("---------------------------------- AddHeaderInterceptor : AuthenticationService - getNewToken");
    return this.http.post<any>(this.baseAuthUrl + "oauth/token", payload).pipe(
      share(),
      map(data => {
        const currentUser = JSON.parse(localStorage.getItem(this.storage_name));
        currentUser.refreshToken = data.refresh_token;
        currentUser.token = data.access_token;
        currentUser.expires_in = data.expires_in;
        this.setLoggedUserDetail(currentUser);
        console.log("---------------------------------- refreshToken", data.refresh_token);
        return data.access_token;
      }),
      catchError(this.handleError)
    );
  }

  /** RAVEEN - 2019/04/04
   * Return detialed instance about current logged user.
   */
  getLoggedUserDetail(): any {
    // Negotiating are we gonna use localstorage or cookie for this kind of repo function.
    const currentUser: any = JSON.parse(localStorage.getItem(this.storage_name));
    if (currentUser) {
      return currentUser;
    } else {
      this.logout();
    }
  }

  setLoggedUserDetail(currentUser) {
    if (currentUser) {
      localStorage.setItem(this.storage_name, JSON.stringify(currentUser));
    }
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }


  decodedAuthToken() {
    console.log('-----------------------------------------');
    const decoded = jwt_decode(this.getAuthToken());
    console.log('---------------------- decoded', decoded);
    console.log('---------------------- decoded', decoded.authorities);
  }
}
