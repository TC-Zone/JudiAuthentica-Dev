import { NgModule, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InviteeInteractionViewComponent } from "./invitee-interaction-view.component";
import { RouterModule } from "@angular/router";
import { InviteeInteractionViewRoute } from "./invitee-interaction-view.routing";
import { MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, } from "@angular/material";
import { InviteeInteractionViewService } from "./invitee-interaction-view.service";
import { FutureSurveyService } from '../future-survey/future-survey.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ClientService } from '../client/client.service';

export let InjectorInstance2: Injector;

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/interaction-view/', '.json');
}

@NgModule({
  declarations: [InviteeInteractionViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild(InviteeInteractionViewRoute)
  ],
  providers: [InviteeInteractionViewService, FutureSurveyService,ClientService]
})
export class InviteeInteractionViewModule {
  constructor(private injector: Injector) {
    InjectorInstance2 = this.injector;
  }
}
