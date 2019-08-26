import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'app/views/sessions/authentication.service';
import { authProperties } from '../services/auth/auth-properties';


export class JWTInterceptor implements HttpInterceptor {

  private storage_name = authProperties.storage_name;

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = JSON.parse(localStorage.getItem(this.storage_name));

    if (currentUser && currentUser.token) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: 'Bearer ${currentUser.token}'
          }
        }
      );
    }

    return handler.handle(request);
  }
}
