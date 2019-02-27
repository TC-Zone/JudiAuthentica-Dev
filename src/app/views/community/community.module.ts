import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatTabsModule,
  MatDividerModule,
  MatChipsModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'app/shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { CommunityRouts } from './community.routing';
import { CommunityViewComponent } from './community-view/community-view.component';
import { CommunityViewPopupComponent } from './community-view/community-view-popup/community-view-popup.component';
import { UserCommunityComponent } from './user-community/user-community.component';
import { CreateEventPopupComponent } from './user-community/create-event-popup/create-event-popup.component';

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
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    RouterModule.forChild(CommunityRouts)
  ],
  declarations: [
    CommunityViewComponent,
    CommunityViewPopupComponent,
    UserCommunityComponent,
    CreateEventPopupComponent
  ],
  entryComponents: [
    CommunityViewPopupComponent,
    CreateEventPopupComponent
  ]
})
export class CommunityModule { }