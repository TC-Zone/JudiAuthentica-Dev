import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvoteRouts } from './evote.routing';
import { EvoteService } from './evote-service.service';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatAutocompleteModule, 
  MatToolbarModule} from '@angular/material';
import { EvoteTableComponent } from './evote-table/evote-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EvotePopupComponent } from './evote-table/evote-popup/evote-popup.component';
import { VoterPopupComponent } from './voter-popup/voter-popup.component';
import { CrudService } from '../cruds/crud.service';
import { ArrayFilter } from '../../shared/pipes/array-filter.pipe';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from "ng2-file-upload";
import { SurveyService } from '../survey/survey.service';


@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatAutocompleteModule,
    SharedModule,
    FileUploadModule,
    MatToolbarModule,
    RouterModule.forChild(EvoteRouts)
  ],
  providers: [EvoteService,CrudService,SurveyService],
  declarations: [
    EvoteTableComponent, 
    EvotePopupComponent, 
    VoterPopupComponent,
  ],
  entryComponents: [EvotePopupComponent,VoterPopupComponent]
})
export class EvoteModule { }
