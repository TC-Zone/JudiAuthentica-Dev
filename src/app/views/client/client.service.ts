import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";


import { Clients, Content } from "../../model/ClientModel.model";
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class ClientService {

  clientUrl: string = environment.userApiUrl + "clients";
  userUrl: string = environment.userApiUrl + "platform-users";
  roleUrl: string = environment.userApiUrl + "platform-user-roles";

  Authorization = 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImZhYTY2NDNhY2E4YzUzMThhOTU4MzE3ODc5NTU0MmNmIiwidXNlcl9uYW1lIjoicmF2ZWVuQGNleWxvbml0LmNvbSIsInNjb3BlIjpbIkFQIl0sImV4cCI6MTU1MDE2NjI1NSwiYXV0aG9yaXRpZXMiOlsicHVyLWMiLCJwdXItZCIsInBjLXYiLCJwdS1kIiwib3Bhc3MtYyIsInBjLXMiLCJwdS1hIiwicHUtYyIsInB1ci1zIiwicHVyLXUiLCJwdXItdiIsInB1LXUiLCJwdS12Iiwib3Byb2YtdSIsInBjLWMiLCJvcHJvZi12IiwicHUtcyJdLCJqdGkiOiI3MjU2ZmFlNC04MzA1LTQwMjgtYTg4ZC0xMDY2Yjk5MmM1OGEiLCJjbGllbnRfaWQiOiJDUEFQIn0.pUgpfZOfrCPlUQy_FvS7e3FWcVoLhsjcnSCop6SoCZ68JYEVA1njWyrk7OOdxLudDmD-U9mfNbm49tEMcsp-C1xe2UMv_G3HSNY5XiNZiWKrPv7kSM6wtafCoSF-2CCYtKYMOegWUDoZfBOJoe6D8AF1YuHlZQFVvU7OPiFQLzC6metmXe0H2dBS0NMtWS61u6eA4qQ1-pSXUdpiAsNHFCbmhV_3uPFMr0RHEB4XQsUGSVTU6a4wwP_0AoaIXKyeRprqc_NeRlSwhMstaiESVDDZdniINFEoMfXM3GPBizjXhNl-loP9SahUKgat45c90pWSBi-VQjhjoh4xDKUaCA';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.Authorization,
    })
  };

  public userApiUrl = environment.userApiUrl;

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.clientUrl, this.httpOptions).pipe(catchError(this.handleError));
  }

  getUsers(id): Observable<any> {
    return this.http.get(this.clientUrl+"/"+id, this.httpOptions).pipe(catchError(this.handleError));
  }

  getRoles(): Observable<any> {
    return this.http.get(this.roleUrl + "/suggestions", this.httpOptions).pipe(catchError(this.handleError));
  }



  addClient(item): Observable<any> {
    return this.http.post<any>(this.clientUrl, item, this.httpOptions).pipe(
      map(data => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  updateClient(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl +"/"+ id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addUser(item): Observable<any> {
    return this.http.post<any>(this.userUrl, item, this.httpOptions).pipe(
      map(data => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  updateUser(id, item): Observable<any> {
    return this.http
      .put<any>(this.userUrl +"/"+ id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }






















  getItems(): Observable<any> {
    return this.http.get(this.clientUrl).pipe(catchError(this.handleError));
  }

  getClientSuggestions(): Observable<any> {
    return this.http
      .get<string>(this.clientUrl + "suggestions")
      .pipe(catchError(this.handleError));
  }

  addItem(item, items: any[]): Observable<any> {
    return this.http.post<any>(this.clientUrl, item, this.httpOptions).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateItem(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  removeItem(id): Observable<any> {
    return this.http
      .delete(this.clientUrl + id)
      .pipe(catchError(this.handleError));
  }

  search(
    filter: { name: string } = { name: "" },
    page = 1
  ): Observable<Clients> {
    return this.http.get<Clients>(this.clientUrl + "suggestions").pipe(
      tap((response: Clients) => {
        response.content = response.content
          .map(content => new Content(content.id, content.name))

          .filter(content =>
            content.name.toLocaleLowerCase().includes(filter.name)
          );

        return response;
      })
    );
  }

  getClientById(clientId): Observable<any> {
    console.log("called get client by id");
    return this.http
      .get<any>(this.clientUrl + clientId, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getImageById(url): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return throwError(error);
  }

  getAllFakeClients() {
    return [
      {
        'id': "1",
        'code': "CLT-001",
        'name': "Adidas",
        'description': "Adidas AG is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. ",
        'status': "Active",
      },
      {
        'id': "2",
        'code': "CLT-002",
        'name': "Nike",
        'description': "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.",
        'status': "Active",
      },
      {
        'id': "3",
        'code': "CLT-003",
        'name': "Puma",
        'description': "Puma SE, branded as Puma, is a German multinational company that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany. PUMA is the third largest sportswear manufacturer in the world. The company was founded in 1948 by Rudolf Dassler.",
        'status': "Deactive",
      },
      // {
      //   'id': "002",
      //   'code': "CLT-002",
      //   'name': "Puma",
      //   'description': "",
      //   'status': "Active",
      // }
    ]
  }


  getAllFakeUsers() {
    return [
      {
        'id': "1",
        'cid': "1",
        'roleid': "1",
        'name': "Oliver James",
        'email': "oliver.james@test.com",
        'password': "pw01",
        'status': "Active",
      },
      {
        'id': "2",
        'cid': "1",
        'roleid': "2",
        'name': "Jack Connor",
        'email': "jack.connor@test.com",
        'password': "pw02",
        'status': "Active",
      },
      {
        'id': "3",
        'cid': "1",
        'roleid': "3",
        'name': "Harry Callum",
        'email': "harry.callum@test.com",
        'password': "pw03",
        'status': "Active",
      },
      {
        'id': "4",
        'cid': "1",
        'roleid': "3",
        'name': "Charlie Kyle",
        'email': "charlie.kyle@test.com",
        'password': "pw04",
        'status': "Active",
      },
      {
        'id': "1",
        'cid': "2",
        'roleid': "1",
        'name': "Oliver James 2",
        'email': "oliver.james@test.com",
        'password': "pw01",
        'status': "Active",
      },
      {
        'id': "2",
        'cid': "2",
        'roleid': "2",
        'name': "Jack Connor 2",
        'email': "jack.connor@test.com",
        'password': "pw02",
        'status': "Active",
      },
      {
        'id': "3",
        'cid': "2",
        'roleid': "3",
        'name': "Harry Callum 2",
        'email': "harry.callum@test.com",
        'password': "pw03",
        'status': "Active",
      },
      {
        'id': "4",
        'cid': "2",
        'roleid': "3",
        'name': "Charlie Kyle 2",
        'email': "charlie.kyle@test.com",
        'password': "pw04",
        'status': "Active",
      },
    ]
  }

  /*
  * Create New User Role
  * Created by Prasad Kumara
  * 14/02/2019
  */
  createNewRole(roleObj) {
    return this.http.post(this.userApiUrl + 'platform-user-roles', roleObj)
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
    return this.http.put(this.userApiUrl + 'platform-user-roles/' + roleId, roleObj)
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
    return this.http.get(this.userApiUrl + 'platform-user-roles')
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
    return this.http.get(this.userApiUrl + 'platform-authorities')
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
    return this.http.get(this.userApiUrl + 'platform-user-roles/' + roleId)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

}
