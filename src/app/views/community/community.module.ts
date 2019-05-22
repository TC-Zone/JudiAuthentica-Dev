import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
  MatTableModule,
  MatExpansionModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "app/shared/shared.module";
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule } from "@angular/router";
import { CommunityRouts } from "./community.routing";
import { CommunityViewComponent } from "./community-view/community-view.component";
import { CommunityViewPopupComponent } from "./community-view/community-view-popup/community-view-popup.component";
import { UserCommunityComponent } from "./user-community/user-community.component";
import { CreateEventPopupComponent } from "./user-community/user-event/create-event-popup/create-event-popup.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { UserEventComponent } from "./user-community/user-event/user-event.component";
import { UserFeedbackComponent } from "./user-community/user-feedback/user-feedback.component";
import { CreateFeedbackPopupComponent } from "./user-community/user-feedback/create-feedback-popup/create-feedback-popup.component";
import { UserPromotionComponent } from "./user-community/user-promotion/user-promotion.component";
import { CreatePromotionPopupComponent } from "./user-community/user-promotion/create-promotion-popup/create-promotion-popup.component";
import { AuthenticationService } from "../sessions/authentication.service";
import { UserFeedbackService } from "../community/user-community/user-feedback/user-feedback.service";

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
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
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
    MatTableModule,
    RouterModule.forChild(CommunityRouts)
  ],
  declarations: [
    CommunityViewComponent,
    CommunityViewPopupComponent,
    UserCommunityComponent,
    CreateEventPopupComponent,
    UserEventComponent,
    UserFeedbackComponent,
    UserPromotionComponent,
    CreatePromotionPopupComponent,
    CreateFeedbackPopupComponent
  ],
  entryComponents: [
    CommunityViewPopupComponent,
    CreateEventPopupComponent,
    CreatePromotionPopupComponent,
    CreateFeedbackPopupComponent
  ],
  providers: [AuthenticationService, UserFeedbackService]
})
export class CommunityModule {}
