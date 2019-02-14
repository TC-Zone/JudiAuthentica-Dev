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
    const token: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImQzNmVlZWJkOGIxZjBjZGUxNjIxMDMzOWU5N2I5NDA4IiwidXNlcl9uYW1lIjoiY29udGFjdHBrdW1hcmFAZ21haWwuY29tIiwic2NvcGUiOlsiQVAiXSwiZXhwIjoxNTUwMTYzMzk3LCJhdXRob3JpdGllcyI6WyJwdXItYyIsInB1ci1kIiwicHUtZCIsIm9wYXNzLWMiLCJwdS1hIiwicGMtcyIsInB1LWMiLCJwdXItcyIsInB1ci11IiwicHVyLXYiLCJwdS11IiwicHUtdiIsIm9wcm9mLXUiLCJwYy1jIiwib3Byb2YtdiIsInB1LXMiXSwianRpIjoiZjM1NTQzNGItY2FlMS00ZTdiLWE3NGItZWIyOTE1NDczZTRmIiwiY2xpZW50X2lkIjoiQ1BBUCJ9.eMEW3YfoHuGsmUxtgstv-4r7xY40ieOKEZLE_C17DftGi0Mz2OQj-yifCr-ZoMzlmY2jjG7TVqjaGg0qpFFPYyPpcWbeFiCeSrKdZBiwcP9xdybTF5Yn-yBx_Zaq_e-FLiwOh532zm05MupQspPNzTnEfdXKgpBM-EAJsSA5-PfhV0BHUBVIEOTE1vB2bLYekKvYT3ZefICTKkR-Ki7DurJpnosK1V99fioprzmyXp7gJ3D4mM69GeABeP2kTrOO3oPcCIMQWLUZmRHz3Rp7mW76zyOZTYcdL-qUupC_qNAcwxPq47aHaAnDuUJT1YtMyQMvV8mEg2xmKzlJSFhKBg';

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
