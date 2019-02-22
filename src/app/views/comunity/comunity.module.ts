import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComunityComponent } from './user-comunity/user-comunity.component';
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
  MatToolbarModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'app/shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { ComunityRouts } from './comunity.routing';

@NgModule({
  declarations: [UserComunityComponent],
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
    MatSlideToggleModule,
    MatTabsModule,
    RouterModule.forChild(ComunityRouts)
  ]
})
export class ComunityModule { }
