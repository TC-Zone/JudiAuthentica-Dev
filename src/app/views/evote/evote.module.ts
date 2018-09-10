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
  MatAutocompleteModule } from '@angular/material';
import { EvoteTableComponent } from './evote-table/evote-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EvotePopupComponent } from './evote-table/evote-popup/evote-popup.component';


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
    RouterModule.forChild(EvoteRouts)
  ],
  providers: [EvoteService],
  declarations: [EvoteTableComponent, EvotePopupComponent],
  entryComponents: [EvotePopupComponent]
})
export class EvoteModule { }
