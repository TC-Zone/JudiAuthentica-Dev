import { Injectable } from '@angular/core';
import { UserDB } from '../../shared/fake-db/users';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class CrudService {
  items: any[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    let userDB = new UserDB();
    this.items = userDB.users;
  }

  //******* Implement your APIs ********
  getItems(): Observable<any> {
    //return  of(this.items.slice())
    return this.http.get('https://rootzg4t4ks63a.hana.ondemand.com/api/clients')
  }
  addItem(item): Observable<any> {
    // item._id = Math.round(Math.random() * 10000000000).toString();
    // this.items.unshift(item);
    console.log(item);
    return this.http.post<any>('https://rootzg4t4ks63a.hana.ondemand.com/api/clients', item, this.httpOptions)
    //return this.getItems()
    // return of(this.items.slice()).pipe(delay(1000));
  }
  updateItem(id, item) {
    return this.http.put<any>('https://rootzg4t4ks63a.hana.ondemand.com/api/clients/' + id, item, this.httpOptions);
  }
  removeItem(id) {   
    return this.http.delete('https://rootzg4t4ks63a.hana.ondemand.com/api/clients/'+id,this.httpOptions)
  }
}
