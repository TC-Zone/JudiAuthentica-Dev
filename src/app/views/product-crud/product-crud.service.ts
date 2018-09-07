import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "../../../../node_modules/@angular/common/http";
import {
  catchError,
  map,
  delay,
  tap
} from "../../../../node_modules/rxjs/operators";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";
import { Products,ProductsDet } from "../../model/ProductModel.model";
import { of } from "../../../../node_modules/rxjs";


@Injectable()
export class ProductCrudService {
  productApiUrl: string = environment.baseApiURL + "products/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    })
  };

  constructor(private http: HttpClient) { }

  updateProduct(id, item) {
    return this.http
      .put<any>(this.productApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addProduct(productObj, items): Observable<any> {
    return this.http
      .post<any>(this.productApiUrl, productObj, this.httpOptions)
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.productApiUrl).pipe(catchError(this.handleError));
  }

  removeProduct(row, items): Observable<any> {
    return this.http.delete(this.productApiUrl + row.id, this.httpOptions).pipe(
      map(data => {
        let i = items.indexOf(row);
        return items.splice(i, 1);
      }),
      catchError(this.handleError)
    );
  }

  productSuggestion(filter: { name: string } = { name: '' }, page = 1): Observable<Products> {
    return this.http.get<Products>(this.productApiUrl + 'suggestions')
      .pipe(
        tap((response: Products) => {
          response.content = response.content
            .map(productsdet => new ProductsDet(productsdet.id,productsdet.code,productsdet.batchNumber,productsdet.name))
            .filter(productsdet => {
              if (productsdet.name) {
                productsdet.name.includes(filter.name);
                 console.log(productsdet.name);
              }

             }
            )
          return response;
          
        })

      );

  }

  // 
  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return _throw(error);
  }
}
