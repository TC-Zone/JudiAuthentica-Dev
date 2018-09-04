import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { mergeMap } from "rxjs/operators";
import { Observable, of, throwError } from 'rxjs';

export class FakeBackendInterceptor implements HttpInterceptor{

  intercept(request : HttpRequest<any>, handler : HttpHandler) : Observable<HttpEvent<any>>{

    let users :any[] = JSON.parse(localStorage.getItem("users")) || [];

    return of(null).pipe(mergeMap(() => {

      if(request.url.endsWith('users/register') && request.method === 'POST'){
        let newUser  =  request.body;
        let duplicateUser =  users.filter(user=>{return  user.email === newUser.email;}).length;
        if(duplicateUser){
          return throwError({ error: { message: 'User Email "' + newUser.email + '" is already taken' } });
        }
          // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));      }

      return of(new HttpResponse({ status: 200, body: "" }));
    }));


  }

}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
