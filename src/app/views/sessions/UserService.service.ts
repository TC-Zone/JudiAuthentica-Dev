import { Injectable, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";
import * as jwt_decode from "jwt-decode";
import { map, catchError, share } from "rxjs/operators";
import { throwError, Observable } from 'rxjs';
import { environment } from "environments/environment.prod";
import { authProperties } from "./../../shared/services/auth/auth-properties";

@Injectable()
export class UserService {
  users: any[];
  private baseAuthUrl: String = environment.authTokenUrl;
  private storage_name = authProperties.storage_name;
  private componentList = authProperties.componentList;
  private userApiUrl = environment.userApiUrl;

  constructor(private http: HttpClient) {
    const user: CpUsersDB = new CpUsersDB();
    this.users = user.users;
  }

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

  /*
   * Get Jwt token Expire date
   * Created by Prasad Kumara
   * 14/02/2019
   */
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(1550476560);
    return date;
  }

  /*
   * Get Jwt token Expire or not
   * Created by Prasad Kumara
   * 14/02/2019
   */
  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = "";
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined || date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
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
   * Get Jwt refrsh token Expire or not
   * Created by Prasad Kumara
   * 15/02/2019
   */
  getUserRefreshToken(refreshToken) {
    const payload = new FormData();
    payload.append("grant_type", "refresh_token");
    payload.append("refresh_token", refreshToken);

    return this.http.post<any>(this.baseAuthUrl + "oauth/token", payload).pipe(
      share(),
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
      console.log('--------------- setComponetDisable ----------------');
      console.log(userObj.userData.role.name);
      const roleName = userObj.userData.role.name;
      if (roleName === 'Super Administrator') {
        arrayList = ['User Management'];
        return arrayList;
      } else if (roleName === 'Admin') {
        arrayList = ['Client Management'];
        return arrayList;
      } else {
        arrayList = ['Client Management', 'User Management'];
        return arrayList;
      }
    }
  }

  getAuthToken(): any {
    const userObj: any = JSON.parse(localStorage.getItem(this.storage_name));
    if (userObj) {
      return userObj.token;
    } else {
      return false;
    }
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
