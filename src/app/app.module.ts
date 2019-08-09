import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';

import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AuthenticationService } from './views/sessions/authentication.service';
import { AddHeaderInterceptor } from './shared/services/auth/add-header-interceptor';
import { AuthGuard } from './shared/services/auth/auth.guard';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // ANGULAR MATERIAL SLIDER FIX
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: AuthGuard, useClass: AuthGuard },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
