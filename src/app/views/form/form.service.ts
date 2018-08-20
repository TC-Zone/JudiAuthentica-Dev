import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from "../../../../node_modules/@angular/common/http";
import {
  catchError,
  map,
  delay
} from "../../../../node_modules/rxjs/operators";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";
import { Client,Users} from "./client.model";
import { ResponseModel } from '../../model/ResponseModel.model';



@Injectable({
  providedIn: 'root'
})
export class FormService {
  clientApiUrl: string = environment.baseApiURL + "clients/suggestions";
  response : ResponseModel;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }
  
  extractData(res: Response){
    return res.json();
  }

  
  getItems(): Observable<any> {
    return this.http.get<any>(this.clientApiUrl).pipe(
      map(data=>{
        let jsonObject = data.content; 
        let client = new Users(jsonObject.id,
          new Client(jsonObject.client.id,jsonObject.client.name)        
        );     
        console.log(client);  
                
      }),
      catchError(this.handleError)
    );
  }

    private handleError(error: HttpErrorResponse | any) {
      console.log(error);
      return _throw(error);
    }
    

 
}
