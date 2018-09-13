import { Injectable } from "@angular/core";

import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "environments/environment.prod";
import { Observable, throwError } from "rxjs";
import { Clients, Content } from "../../model/ClientModel.model";

@Injectable({
  providedIn: "root"
})
export class FormService {
  clientApiUrl: string = environment.productApiURL + "clients/suggestions";

  constructor(private http: HttpClient) {}

  search(
    filter: { name: string } = { name: "" },
    page = 1
  ): Observable<Clients> {
    return this.http.get<Clients>(this.clientApiUrl).pipe(
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
}
