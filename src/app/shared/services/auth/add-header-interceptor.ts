import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userName = 'CPAP';
    const password = 'Cp43&$^fdgd*+!!@#Agdo4Ged';
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + btoa(userName + ':' + password))
      .set('Content-Type', 'application/json').delete('Origin') });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
