import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyInteractionComponent } from './survey-interaction.component';
import { RouterModule } from '@angular/router';
import { SurveyInteractionRoutes } from './survey-interaction.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule, MatDialogModule, MatSelectModule, MatSidenavModule, MatListModule, MatDividerModule, MatExpansionModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';

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
    RouterModule.forChild(SurveyInteractionRoutes)
  ],
  declarations: [SurveyInteractionComponent]
})
export class SurveyInteractionModule { }
