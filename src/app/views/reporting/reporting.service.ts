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
export class ReportingService {
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

    getAllProducts(): Observable<any> {
        return this.http.get(this.productApiUrl).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse | any) {
        //console.log(error)
        return throwError(error);
    }
}