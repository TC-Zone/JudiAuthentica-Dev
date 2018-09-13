import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SurveyInteractionComponent } from "./survey-interaction.component";
import { RouterModule } from "@angular/router";
import { SurveyInteractionRoutes } from "./survey-interaction.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatIconModule,
  MatChipsModule,
  MatStepperModule
} from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "../../shared/shared.module";
import { SurveyService } from "../survey/survey.service";
import { SurveyInteractionService } from "./survey-interaction.service";
import { CrudService } from '../cruds/crud.service';
import { ProductCrudService } from "../product-crud/product-crud.service";
import { EvoteService } from '../evote/evote-service.service';
import { SurveyViewerComponent } from './survey-viewer/survey-viewer.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    SharedModule,
    MatSidenavModule,
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatStepperModule,
    RouterModule.forChild(SurveyInteractionRoutes)
  ],
  declarations: [SurveyInteractionComponent, SurveyViewerComponent],
  providers: [SurveyInteractionService, SurveyService, CrudService,ProductCrudService,EvoteService]
})
export class SurveyInteractionModule {}
