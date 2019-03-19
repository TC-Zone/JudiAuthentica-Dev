import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class ClientService {

  clientUrl: string = environment.userApiUrl + "clients";
  specsUrl: string = environment.userApiUrl + "spec";
  licenseUrl: string = this.clientUrl + "/license";
  userUrl: string = environment.userApiUrl + "platform-users";
  roleUrl: string = environment.userApiUrl + "platform-user-roles";

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.clientUrl).pipe(catchError(this.handleError));
  }

  // getUsers(id): Observable<any> {
  //   return this.http.get(this.clientUrl + "/" + id).pipe(catchError(this.handleError));
  // }

  getRoles(): Observable<any> {
    return this.http.get(this.roleUrl + "/suggestions").pipe(catchError(this.handleError));
  }
  getCategory(): Observable<any> {
    return this.http.get(this.specsUrl + "/categories").pipe(catchError(this.handleError));
  }
  getClientCategories(id): Observable<any> {
    return this.http.get(this.clientUrl + "/categories/" + id).pipe(catchError(this.handleError));
  }
  getClientCommunities(id): Observable<any> {
    return this.http.get(environment.userApiUrl + "communities/client/" + id).pipe(catchError(this.handleError));
  }


  addClient(item): Observable<any> {
    return this.http.post<any>(this.clientUrl, item).pipe(
      map(data => {
        // console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  getClient(id): Observable<any> {
    return this.http.get(this.clientUrl + "/" + id).pipe(catchError(this.handleError));
  }

  updateClient(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }

  updateClientLicense(id, item): Observable<any> {
    return this.http
      .put<any>(this.licenseUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }

  addUser(item): Observable<any> {
    return this.http.post<any>(this.userUrl, item).pipe(
      map(data => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  getUser(id): Observable<any> {
    return this.http.get(this.userUrl + "/" + id).pipe(catchError(this.handleError));
  }

  updateUser(id, item): Observable<any> {
    return this.http
      .put<any>(this.userUrl + "/" + id, item)
      .pipe(catchError(this.handleError));
  }



  /*
  * Create New User Role
  * Created by Prasad Kumara
  * 14/02/2019
  */
  createNewRole(roleObj) {
    return this.http.post(this.roleUrl, roleObj)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Update New User Role
  * Created by Prasad Kumara
  * 14/02/2019
  */
  updateRloe(roleId, roleObj) {
    return this.http.put(this.roleUrl + '/' + roleId, roleObj)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Get All User Role From Data Base
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getAllUserRoles(): any {
    return this.http.get(this.roleUrl)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Get All Authorities From Data Base
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getAllAuthorities(): any {
    return this.http.get(environment.userApiUrl + 'platform-authorities')
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Get Role Assign Authorities
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getOneRoleAuthorities(roleId): any {
    return this.http.get(this.roleUrl + '/' + roleId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | any) {
    // console.log(error);
    if (error.status !== 401) {
      return throwError(error);
    }
  }

}
