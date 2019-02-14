import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSelectModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { UserTableComponent } from './users/user-table.component';

import { UserRoutes } from './user.routing';
import { UserService } from './user.service';
import { UserTablePopupComponent } from './users/user-table-popup/user-table-popup.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    SharedModule,
    MatToolbarModule,
    MatSelectModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [UserTableComponent, UserTablePopupComponent],
  providers: [UserService],
  entryComponents: [UserTablePopupComponent]
})
export class UserModule { }
