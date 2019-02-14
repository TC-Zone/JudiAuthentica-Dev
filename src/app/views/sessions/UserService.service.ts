import { Injectable, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";
import * as jwt_decode from "jwt-decode";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { environment } from "environments/environment.prod";
import { authProperties } from './../../shared/services/auth/auth-properties';

@Injectable()
export class UserService {
  users: any[];
  private baseAuthUrl: String = environment.authTokenUrl;
  private storage_name = authProperties.storage_name;

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
    console.log(payload);

    return this.http
      .post<any>(this.baseAuthUrl + "oauth/token", payload)
      .pipe(
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
    localStorage.removeItem("currentUser");
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
    date.setUTCSeconds(decoded.exp);
    console.log(
      "---------------- jwt token expire date time -----------------"
    );
    console.log(date);
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

  /*
  * Get User data using user id
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getUserData(userId) {
    return null;
  }

  getUserRefreshToken(refreshToken) {
    const payload = new FormData();
    payload.append("grant_type", "refresh_token");
    payload.append("refresh_token", refreshToken);

    return this.http
      .post<any>(this.baseAuthUrl + "oauth/token", payload)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
