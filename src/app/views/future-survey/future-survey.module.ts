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
  MatInputModule
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
import { ReactiveFormsModule } from "@angular/forms";

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
    RouterModule.forChild(FutureSurveyRoutes),
    SharedModule
  ],
  declarations: [
    FutureSurveyComponent,
    FutureSurveyViewComponent,
    FutureSurveyListComponent
  ],
  providers: [CrudService, FutureSurveyService]
})
export class FutureSurveyModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
