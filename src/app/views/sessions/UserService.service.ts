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
import { Observable } from "rxjs/Observable";

const gloable_user = "CPAP";
const gloable_secret = "Cp43&$^fdgd*+!!@#Agdo4Ged";
const storage_name = "";

@Injectable()
export class UserService {
  users: any[];
  private baseAuthUrl: String = environment.authTokenUrl;
  private userApiUrl: string = environment.userApiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Basic Q1BBUDpDcDQzJiReZmRnZCorISFAI0FnZG80R2Vk"
    })
  };

  constructor(private http: HttpClient) {
    const user: CpUsersDB = new CpUsersDB();
    this.users = user.users;
  }

  // login(signinFormData): boolean {
  //   console.log(this.users);
  //   let currentUser = this.users.filter(user => {
  //     return (
  //       user.user_name === signinFormData.username &&
  //       user.password === signinFormData.password
  //     );
  //   });
  //   console.log("current log users" + currentUser);
  //   if (currentUser.length > 0) {
  //     console.log(currentUser);

  //     let loggedUser = currentUser[0];

  //     let userToken = {
  //       id: loggedUser.id,
  //       username: loggedUser.user_name,
  //       profilename: loggedUser.profile_name,
  //       image: loggedUser.image,
  //       token: "fake-logged-user",
  //       company: loggedUser.company,
  //       position: loggedUser.position
  //     };

  //     localStorage.setItem("currentUser", JSON.stringify(userToken));

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  login(signinFormData) {
    const payload = new FormData();
    payload.append("grant_type", "password");
    payload.append("username", signinFormData.username);
    payload.append("password", signinFormData.password);
    console.log(payload);

    return this.http
      .post<any>(this.baseAuthUrl + "oauth/token", payload, this.httpOptions)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }

  // get jwt token expire date time
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

  // check token is expire or not
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
    return this.http
      .post<any>(
        this.userApiUrl + "platform-users/activations/" + code,
        password
      )
      .pipe(
        map(data => {
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
