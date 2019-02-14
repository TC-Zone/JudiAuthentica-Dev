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
  MatTabsModule
} from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "../../shared/shared.module";
import { ClientService } from "./client.service";
import { ClientTableComponent } from './clients/client-table.component';
import { ClientTablePopupComponent } from './clients/client-table-popup/client-table-popup.component';
import { UserTableComponent } from './clients/user-table/user-table.component';
import { UserTablePopupComponent } from './clients/user-table/user-table-popup/user-table-popup.component';
import { RoleTableComponent } from './roles/role-table.component';
import { RoleTablePopupComponent } from './roles/role-table-popup/role-table-popup.component';


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
    MatTabsModule
  ],
  declarations: [
    ClientComponent,
    ClientComponent,
    ClientTableComponent,
    ClientTablePopupComponent,
    UserTableComponent,
    UserTablePopupComponent,
    RoleTableComponent,
    RoleTablePopupComponent
  ],
  entryComponents: [
    ClientTablePopupComponent,
    UserTablePopupComponent,
    RoleTablePopupComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
