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
import { FutureSurveyRoutes } from "./future-survey.routing";
import { FutureSurveyListComponent } from "./future-survey-list/future-survey-list.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FutureSurveyConfigPopupComponent } from "./future-survey-config-popup/future-survey-config-popup.component";
import { FutureSurveyCommonConfigComponent } from "./future-survey-config-popup/future-survey-common-config.component";
import { AppDataConversionService } from "../../shared/services/data-conversion.service";
import { FutureSurveyLaunchComponent } from "./future-survey-launch/future-survey-launch.component";

export let InjectorInstance: Injector;

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
    MatDatepickerModule
  ],
  declarations: [
    FutureSurveyComponent,
    FutureSurveyViewComponent,
    FutureSurveyListComponent,
    FutureSurveyConfigPopupComponent,
    FutureSurveyCommonConfigComponent,
    FutureSurveyLaunchComponent
  ],
  providers: [CrudService, FutureSurveyService, AppDataConversionService],
  entryComponents: [
    FutureSurveyConfigPopupComponent,
    FutureSurveyLaunchComponent
  ]
})
export class FutureSurveyModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
