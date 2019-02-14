import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImZhYTY2NDNhY2E4YzUzMThhOTU4MzE3ODc5NTU0MmNmIiwidXNlcl9uYW1lIjoicmF2ZWVuQGNleWxvbml0LmNvbSIsInNjb3BlIjpbIkFQIl0sImV4cCI6MTU1MDE3MDYwMywiYXV0aG9yaXRpZXMiOlsicHVyLWMiLCJwdXItZCIsInBjLXYiLCJwdS1kIiwib3Bhc3MtYyIsInBjLXMiLCJwdS1hIiwicGMtdSIsInB1LWMiLCJwdXItcyIsInB1ci11IiwicHVyLXYiLCJwdS11IiwicHUtdiIsIm9wcm9mLXUiLCJvcHJvZi12IiwicGMtYyIsInB1LXMiXSwianRpIjoiYTcwNDQyNDctMzZkNS00NTc0LThmMzYtYWIzMjRlYjdkMzk4IiwiY2xpZW50X2lkIjoiQ1BBUCJ9.Dy9PsLo5-qTh2-9n1gxikLSeFVFPgl1bOMiTLGiEriX1E1UcNvzoQXT-PoMuHyfc0--x3Y4NbBGUxPnGyq_NDIUcXtMU4Df0hYor5zaLsI1EGm03G3Fza3h3h6ZCTZSGgqSCZXgbFAjOPGiKhnoFxuCqQ8S2Z0U8rmsMT7fPpM9aiEwsQAYj5h6PDZyFF_uKdGcZineSwAHODTzYzJaFjOzca8w_uvku311aDAwcn2g08FHRM25X2I43Z874wGifL-svY9uxxfAQfW-1LRzGGhsrO-ergSX0HuHpINspXA0MQCbP5ZGGcVAAQM7ucoREMjA_1GStDcJN8vbdE-n_nA';

    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            let data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            return throwError(error);
        }));
}
}
