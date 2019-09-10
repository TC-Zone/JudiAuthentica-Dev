import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MerchantComponent } from './merchant.component';
import { MerchantRoute } from './merchant.routing';
import { MerchantService } from './merchant.service';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  MatAutocompleteModule,
} from "@angular/material";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MerchantActivePopupComponent } from './merchant-active-popup/merchant-active-popup.component';

@NgModule({
  declarations: [
    MerchantComponent,
    MerchantActivePopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MerchantRoute),
    FlexLayoutModule,
    CommonModule,
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
    MatAutocompleteModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  entryComponents: [
    MerchantActivePopupComponent
  ],
  providers: [MerchantService]
})
export class MerchantModule { }
