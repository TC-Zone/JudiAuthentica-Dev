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
export class MerchantService {

    merchantUrl: string = environment.userApiUrl + "merchant";

    constructor(private http: HttpClient) {
    }


    // getMerchants(): Observable<any> {
    //     return this.http.get(this.merchantUrl).pipe(catchError(this.handleError));
    // }

    getMerchants(name, status, pageSize, pageNumber): Observable<any> {
        return this.http.get(
            this.merchantUrl +
            "?name=" +
            name +
            "&status=" +
            status +
            "&pageSize=" +
            pageSize +
            "&pageNumber=" +
            pageNumber
        ).pipe(catchError(this.handleError));
    }

    getMerchant(id): Observable<any> {
        return this.http.get(this.merchantUrl + "/" + id).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse | any) {
        // console.log(error);
        if (error.status !== 401) {
            return throwError(error);
        }
    }
}