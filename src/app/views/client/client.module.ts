import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { RouterModule } from "@angular/router";
import { ClientRoute } from "./client.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
  MatOptionModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatAutocompleteModule
} from "@angular/material";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "../../shared/shared.module";
import { ClientService } from "./client.service";
import { ClientTableComponent } from './clients/client-table.component';
import { ClientUpdatePopupComponent } from './clients/client-update-popup/client-update-popup.component';
import { ClientCreatePopupComponent } from './clients/client-create-popup/client-create-popup.component';
import { UserComponent } from './clients/user/user.component';
import { UserTableComponent } from './clients/user/user-table/user-table.component';
import { UserCreatePopupComponent } from './clients/user/user-table/user-create-popup/user-create-popup.component';
import { UserTablePopupComponent } from './clients/user/user-table/user-table-popup/user-table-popup.component';
import { RoleTableComponent } from './clients/user/roles/role-table.component';
import { RoleTablePopupComponent } from './clients/user/roles/role-table-popup/role-table-popup.component';
import { UserCommunityPopupComponent } from './clients/user/user-table/user-community-popup/user-community-popup.component';
import { UserCategoryPopupComponent } from './clients/user/user-table/user-category-popup/user-category-popup.component';


@NgModule({
  imports: [
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
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSidenavModule,
    RouterModule.forChild(ClientRoute),
    SharedModule,
    MatStepperModule,
    MatToolbarModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatAutocompleteModule,
    NgxIntlTelInputModule,
  ],
  declarations: [
    ClientComponent,
    ClientComponent,
    ClientTableComponent,
    ClientCreatePopupComponent,
    ClientUpdatePopupComponent,
    UserComponent,
    UserTableComponent,
    UserCreatePopupComponent,
    UserTablePopupComponent,
    RoleTableComponent,
    RoleTablePopupComponent,
    UserCommunityPopupComponent,
    UserCategoryPopupComponent
  ],
  entryComponents: [
    ClientCreatePopupComponent,
    ClientUpdatePopupComponent,
    UserCreatePopupComponent,
    UserTablePopupComponent,
    RoleTablePopupComponent,
    UserCommunityPopupComponent,
    UserCategoryPopupComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
