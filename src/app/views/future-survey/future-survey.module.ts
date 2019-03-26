import { NgModule, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule,
  MatTabsModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatRadioModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDatepickerModule
} from "@angular/material";

import { StarRatingModule } from "angular-star-rating";

import { SharedModule } from "../../shared/shared.module";

import { FutureSurveyComponent } from "./future-survey/future-survey.component";
import { CrudService } from "../cruds/crud.service";
import { FutureSurveyViewComponent } from "./future-survey-view/future-survey-view.component";
import { FutureSurveyService } from "./future-survey.service";
import { FutureSurveyOperationalService } from "./future-survey-operational.service";
import { FutureSurveyRoutes } from "./future-survey.routing";
import { FutureSurveyListComponent } from "./future-survey-list/future-survey-list.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FutureSurveyConfigPopupComponent } from "./future-survey-config-popup/future-survey-config-popup.component";
import { FutureSurveyCommonConfigComponent } from "./future-survey-config-popup/future-survey-common-config.component";
import { AppDataConversionService } from "../../shared/services/data-conversion.service";
import { FutureSurveyLaunchComponent } from "./future-survey-launch/future-survey-launch.component";
import { FutureSurveyBaseComponent } from "./future-survey-base.component";
import { FutureSurveyInviteeGroupComponent } from "./future-survey-invitee-group/future-survey-invitee-group.component";
import { FutureSurveyInvitationLaunchComponent } from "./future-survey-invitation-launch/future-survey-invitation-launch.component";
import { FutureSurveyInvitationDashboardComponent } from "./future-survey-invitation-dashboard/future-survey-invitation-dashboard.component";
import { EditMailPopupComponent } from "./edit-mail-popup/edit-mail-popup.component";
import { EditInvitationSettingPopupComponent } from "./edit-invitation-setting-popup/edit-invitation-setting-popup.component";
import { ClientService } from '../client/client.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";


export let InjectorInstance: Injector;

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/interaction-view/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatListModule,
    StarRatingModule,
    MatIconModule,
    NgxDatatableModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule.forChild(FutureSurveyRoutes),
    SharedModule,
    MatDatepickerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    FutureSurveyComponent,
    FutureSurveyViewComponent,
    FutureSurveyListComponent,
    FutureSurveyConfigPopupComponent,
    FutureSurveyCommonConfigComponent,
    FutureSurveyLaunchComponent,
    FutureSurveyBaseComponent,
    FutureSurveyInviteeGroupComponent,
    FutureSurveyInvitationLaunchComponent,
    FutureSurveyInvitationDashboardComponent,
    EditMailPopupComponent,
    EditInvitationSettingPopupComponent

  ],
  providers: [CrudService, ClientService, FutureSurveyService, AppDataConversionService, FutureSurveyOperationalService],
  entryComponents: [
    FutureSurveyConfigPopupComponent,
    FutureSurveyLaunchComponent,
    FutureSurveyInvitationLaunchComponent,
    EditMailPopupComponent,
    EditInvitationSettingPopupComponent
  ]
})
export class FutureSurveyModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
