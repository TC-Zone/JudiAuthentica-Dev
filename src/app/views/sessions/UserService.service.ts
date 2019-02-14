import { Injectable, Injector  } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";
import * as jwt_decode from 'jwt-decode';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'environments/environment.prod';

const gloable_user = 'CPAP';
const gloable_secret = 'Cp43&$^fdgd*+!!@#Agdo4Ged';
const storage_name = '';

@Injectable()
export class UserService {
  users: any[];
  private clientApiURL: String = environment.userApiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic Q1BBUDpDcDQzJiReZmRnZCorISFAI0FnZG80R2Vk',
      'Access-Control-Allow-Origin': '*'
    })
  };

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImQzNmVlZWJkOGIxZjBjZGUxNjIxMDMzOWU5N2I5NDA4IiwidXNlcl9uYW1lIjoiY29udGFjdHBrdW1hcmFAZ21haWwuY29tIiwic2NvcGUiOlsiQVAiXSwiZXhwIjoxNTUwMDM3NzcxLCJhdXRob3JpdGllcyI6WyJwdXItYyIsInB1ci1kIiwicHUtZCIsIm9wYXNzLWMiLCJwdS1hIiwicHUtYyIsInB1ci1zIiwicHVyLXUiLCJwdS11IiwicHUtdiIsIm9wcm9mLXUiLCJvcHJvZi12IiwicGMtYyIsInB1LXMiXSwianRpIjoiYjNmZWM0OWQtNWUyNC00YzAyLWIyY2ItYzAxNDMyOTk1YmIyIiwiY2xpZW50X2lkIjoiQ1BBUCJ9.Yum9h5-dAcWn7gH3RXpH6JjMVRvHgOxojNQ9VRSnDcrJRc2IuTXxLWS3iPpeDPPeEINSkN0GVrU8nFKk_KymmZJ4x7URa2YzEJUYPIqwKmboo2kMz3Y2cTmAIEbik1qc5R4NJOGGgXN0Lr_pEDp4NJFGKVt4R_ooN4jvq7ag0TardmQLo7TK1oYBGb7AS32ns-b0JVD7Pi6PxENKaZkQvHxXeBhZ0Ce9ZLvNscYG37WbVppc--tWmOMiqUMaOGzQkEK_z5YBR3XmXmcn_6LgIKazemwjGCeWGhImZf7hVnRfkWUHDqWpkXX0Vjet4TrXn7MNaBC0gI42WaIwYbXcWg'
  //   })
  // };

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

  login (signinFormData) {
    // const payload = new FormData();
    const payload = {
      grant_type: 'password',
      username: signinFormData.username,
      password: signinFormData.password
    };
    // payload.append('grant_type', 'password');
    // payload.append('username', signinFormData.username);
    // payload.append('password', signinFormData.password);
    console.log(payload);
    return this.http.post<any>('http://localhost:10000/oauth/token', payload, this.httpOptions)
    .pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
    // return this.http.get<any>('http://localhost:10000/api/platform-users', this.httpOptions)
    //   .pipe(
    //     map(data => {
    //       return data;
    //     }),
    //     catchError(this.handleError)
    //   );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  // get jwt token expire date time
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    console.log('---------------- jwt token expire date time -----------------');
    console.log(date);
    return date;
  }

  // check token is expire or not
  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = '';
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

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
