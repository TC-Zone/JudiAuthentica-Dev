import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "environments/environment.prod";
import { throwError, Observable } from "rxjs";

@Injectable()
export class ProductCrudService {
  productApiUrl: string = environment.productApiURL + "products/";
  recentProduct: any;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor(private http: HttpClient) {
    console.log("URL : " + this.productApiUrl);
  }

  updateProduct(id, item) {
    return this.http.put<any>(this.productApiUrl + id, item).pipe(catchError(this.handleError));
  }

  addProduct(productObj, items): Observable<any> {
    return this.http.post<any>(this.productApiUrl, productObj).pipe(
      map(response => {
        console.log(JSON.stringify(response.content.id));
        return response.content.id;
      }),
      catchError(this.handleError)
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.productApiUrl).pipe(catchError(this.handleError));
  }

  removeProduct(row, items): Observable<any> {
    return this.http
      .delete(this.productApiUrl + row.id)
      .pipe(catchError(this.handleError));
  }

  getAllProductSuggestions(): Observable<any> {
    return this.http
      .get(this.productApiUrl + "suggestions")
      .pipe(catchError(this.handleError));
  }


  // "?name=" +
  // keyword +
  // --------- BH ----------
  getPageProducts(keyword, pageNumber, pageSize, clientId, categories, predefined): Observable<any> {
    return this.http
      .get(
        this.productApiUrl +
        "?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize +
        "&clientId=" +
        clientId +
        "&categories=" +
        categories +
        "&name=" +
        keyword +
        "&predefined=" +
        predefined
      )
      .pipe(catchError(this.handleError));
  }
  // --------- BH ----------

  /** RAVEEN SANKALPA - 2019/05/03
   * Filter products by client id and categories that assigned to user.
   *
   * @param clientId
   *
   * @param categories
   */
  getAllProductsByFilter(clientId, categories, isPredefined): Observable<any> {
    return this.http
      .get(
        this.productApiUrl +
        "?clientId=" +
        clientId +
        "&categories=" +
        categories +
        "&predefined=" +
        isPredefined
      )
      .pipe(catchError(this.handleError));
  }

  getProductById(proId): Observable<any> {
    return this.http
      .get<any>(this.productApiUrl + proId)
      .pipe(catchError(this.handleError));
  }

  getProductDetails(proId): Observable<any> {
    return this.http
      .get<any>(environment.productApiURL + "productDetails/" + proId)
      .pipe(catchError(this.handleError));
  }

  authenticate(request): Observable<any> {
    return this.http
      .post<any>(environment.productApiURL + "authenticate/customer/", request)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return throwError(error);
  }
}
