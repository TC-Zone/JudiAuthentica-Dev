import { NgModule } from "@angular/core";
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
  MatListModule
} from "@angular/material";

import { StarRatingModule } from "angular-star-rating";

import { SharedModule } from "../../shared/shared.module";




import { FutureSurveyComponent } from "./future-survey/future-survey.component";
import { CrudService } from "../cruds/crud.service";
import { FutureSurveyViewComponent } from './future-survey-view/future-survey-view.component';
import { FutureSurveyService } from "./future-survey.service";
import { FutureSurveyRoutes } from './future-survey.routing';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatListModule,
    StarRatingModule,
    RouterModule.forChild(FutureSurveyRoutes),
    SharedModule
  ],
  declarations: [FutureSurveyComponent,FutureSurveyViewComponent],
  providers: [CrudService,FutureSurveyService]
})
export class FutureSurveyModule {}
