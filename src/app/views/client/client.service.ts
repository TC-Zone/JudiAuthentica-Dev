import { Injectable } from "@angular/core";
import { UserDB } from "../../shared/fake-db/users";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from "environments/environment.prod";

import { Clients, Content } from "../../model/ClientModel.model";

@Injectable()
export class ClientService {

  clientApiUrl: string = environment.userApiUrl + "clients";
  Authorization = 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImQzNmVlZWJkOGIxZjBjZGUxNjIxMDMzOWU5N2I5NDA4IiwidXNlcl9uYW1lIjoiYmhhc2Fua2FAY2xlYXJwaWN0dXJlLmNvbSIsInNjb3BlIjpbIkFQIl0sImV4cCI6MTU1MDA1MzAyNSwiYXV0aG9yaXRpZXMiOlsicHVyLWMiLCJwdXItZCIsInBjLXYiLCJwdS1kIiwib3Bhc3MtYyIsInBjLXMiLCJwdS1hIiwicGMtdSIsInB1LWMiLCJwdXItcyIsInB1ci11IiwicHUtdSIsInB1LXYiLCJvcHJvZi11IiwicGMtYyIsIm9wcm9mLXYiLCJwdS1zIl0sImp0aSI6IjU4MDU1ODk5LTk0MjctNDhhNy05ZGI0LTI0MTU1YmVhMmExMCIsImNsaWVudF9pZCI6IkNQQVAifQ.hswpypm0kauWrF8NbuCwhqy6-VOFQw2N-KoZWXdEzyV76ez-IMHDAqp8A7yrLYxNbyil-FFtlsQhY4ZKITPFxqa9W7tfI8qAWRFAar1hfHjGaOWSXuzr_nvrPa-nVfOi8c1Q3IkDM6ihV3uKDPEUVDg_w7Te6LVDsB6C--cZF2Jh3t7Txta9MySrKzm4lJmJpxnA0oRvZTg8oUlcvK-_X8S5tKWiDo8nT5apPCj467iRDhYo8ZxSZM8clQcGIKn8ywZzry5MHIVYQawcNgUCnWXWMZWkiSzadITtWqcuHdvARwIUaLSyzqA4-lzFohIuVC6mM0-whk22iVl9dTL1Uw';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.Authorization,
    })
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.clientApiUrl, this.httpOptions).pipe(catchError(this.handleError));
  }


  addClient(item): Observable<any> {
    return this.http.post<any>(this.clientApiUrl, item, this.httpOptions).pipe(
      map(data => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }




  getItems(): Observable<any> {
    return this.http.get(this.clientApiUrl).pipe(catchError(this.handleError));
  }

  getClientSuggestions(): Observable<any> {
    return this.http
      .get<string>(this.clientApiUrl + "suggestions")
      .pipe(catchError(this.handleError));
  }

  addItem(item, items: any[]): Observable<any> {
    return this.http.post<any>(this.clientApiUrl, item, this.httpOptions).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateItem(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  removeItem(id): Observable<any> {
    return this.http
      .delete(this.clientApiUrl + id)
      .pipe(catchError(this.handleError));
  }

  search(
    filter: { name: string } = { name: "" },
    page = 1
  ): Observable<Clients> {
    return this.http.get<Clients>(this.clientApiUrl + "suggestions").pipe(
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
      .get<any>(this.clientApiUrl + clientId, this.httpOptions)
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

}
