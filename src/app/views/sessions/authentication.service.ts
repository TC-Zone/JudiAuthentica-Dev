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

@Injectable()
export class AuthenticationService {
  users: any[];
  private baseAuthUrl: String = environment.authTokenUrl;
  private storage_name = authProperties.storage_name;
  private componentList = authProperties.componentList;
  private userApiUrl = environment.userApiUrl;
  public testValue;

  public currentToken: string;
  public authRefreshToken: string;

  public authTokenNew: string;
  constructor(private http: HttpClient, private router: Router) {}

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

  /*
   * User Log out function
   * Created by Prasad Kumara
   * 14/02/2019
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.storage_name);
    localStorage.removeItem(this.componentList);
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

  /*
   * Get Jwt refrsh token Expire or not
   * Created by Prasad Kumara
   * 15/02/2019
   * Not working properly. Still lokking for solution
   */
  setComponetDisable() {
    const userObj = JSON.parse(localStorage.getItem(this.storage_name));
    let arrayList = [];
    if (userObj) {
      console.log("--------------- setComponetDisable ----------------");
      console.log(userObj.userData.role.name);
      const roleName = userObj.userData.role.name;
      if (roleName === "Super Administrator") {
        arrayList = ["User Management"];
        return arrayList;
      } else if (roleName === "Admin") {
        arrayList = ["Client Management"];
        return arrayList;
      } else {
        arrayList = ["Client Management", "User Management"];
        return arrayList;
      }
    }
  }

  getAuthToken() {
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
    if (userObj) {
      this.currentToken = userObj.token;
    }
    console.log('---------------------------- currentToken', this.currentToken);
    return this.currentToken;
  }

  getNewToken(): Observable<string> {
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
    const payload = new FormData();
    if (userObj) {
      payload.append("grant_type", "refresh_token");
      payload.append("refresh_token", userObj.refreshToken);
    }

    return this.http.post<any>(this.baseAuthUrl + "oauth/token", payload).pipe(
      share(),
      map(data => {
        const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
        userObj.refreshToken = data.refresh_token;
        userObj.token = data.access_token;
        userObj.expires_in = data.expires_in;
        localStorage.setItem(this.storage_name, JSON.stringify(userObj));
        console.log('---------------------------- refreshToken', data.refresh_token);
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
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
    if (userObj) {
      return userObj;
    } else {
      console.log("............LOGGED USER NOT FOUND..............");
      // this.router.navigate(["sessions/signin"]);
    }
  }
  
  
  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }















  
  /*
   * Get Jwt token Expire date
   * Created by Prasad Kumara
   * 14/02/2019
   */
  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);

  //   if (decoded.exp === undefined) {
  //     return null;
  //   }

  //   const date = new Date(0);
  //   date.setUTCSeconds(1550476560);
  //   return date;
  // }

  /*
   * Get Jwt token Expire or not
   * Created by Prasad Kumara
   * 14/02/2019
   */
  // isTokenExpired(token?: string): boolean {
  //   if (!token) {
  //     token = "";
  //   }
  //   if (!token) {
  //     return true;
  //   }

  //   const date = this.getTokenExpirationDate(token);
  //   if (date === undefined || date === null) {
  //     return false;
  //   }
  //   return !(date.valueOf() > new Date().valueOf());
  // }

  /*
   * Get Jwt refrsh token Expire or not
   * Created by Prasad Kumara
   * 15/02/2019
   */
  // getUserRefreshToken(refreshToken) {
  //   const payload = new FormData();
  //   payload.append("grant_type", "refresh_token");
  //   payload.append("refresh_token", refreshToken);

  //   return this.http.post<any>(this.baseAuthUrl + "oauth/token", payload).pipe(
  //     share(),
  //     map(data => {
  //       return data;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

}
