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
  MatSelectModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatTabsModule,
  MatCheckboxModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
// import { UserTableComponent } from './users/user-table.component';
import { UserComponent } from './user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserCreatePopupComponent } from './user-table/user-create-popup/user-create-popup.component';
import { UserCategoryPopupComponent } from './user-table/user-category-popup/user-category-popup.component';
import { UserCommunityPopupComponent } from './user-table/user-community-popup/user-community-popup.component';
import { RoleTableComponent } from './roles/role-table.component';
import { RoleTablePopupComponent } from './roles/role-table-popup/role-table-popup.component';

import { UserRoutes } from './user.routing';
import { UserService } from './user.service';
import { UserTablePopupComponent } from './user-table/user-table-popup/user-table-popup.component'
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

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
    RouterModule.forChild(UserRoutes),
    MatSlideToggleModule,
    MatMenuModule,
    MatAutocompleteModule,
    NgxIntlTelInputModule,
    MatStepperModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
  ],
  declarations: [
    UserComponent,
    UserTableComponent, 
    UserTablePopupComponent, 
    UserCreatePopupComponent, 
    UserCommunityPopupComponent, 
    UserCategoryPopupComponent, 
    RoleTableComponent, 
    RoleTablePopupComponent
  ],
  providers: [UserService],
  entryComponents: [
    UserTablePopupComponent,
    UserCreatePopupComponent,
    UserCommunityPopupComponent, 
    UserCategoryPopupComponent,
    RoleTablePopupComponent
  ]
})
export class UserModule { }
