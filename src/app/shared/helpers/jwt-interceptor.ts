// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


// export class JWTInterceptor implements HttpInterceptor{


//     intercept(request : HttpRequest<any> , handler : HttpHandler ): Observable<HttpEvent<any>>{
//         let currentUser  =  JSON.parse(localStorage.getItem('currentUser'));

//         if(currentUser && currentUser.token){
//           request = request.clone(
//             {setHeaders : {
//               Authorization: 'Bearer ${currentUser.token}'
//             }}
//           );
//         }

//         return handler.handle(request);
//     }
// }
