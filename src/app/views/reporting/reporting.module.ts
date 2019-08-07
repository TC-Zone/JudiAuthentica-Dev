import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReportingComponent } from './reporting.component';
import { ReportingRoute } from './reporting.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { SalesRegionComponent } from './sales-region/sales-region.component';
import { SalesTimeComponent } from './sales-time/sales-time.component';
import { SalesRetailersComponent } from './sales-retailers/sales-retailers.component';
import { FeedbackRateComponent } from './feedback-rate/feedback-rate.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportingService } from './reporting.service';
import { AuthCountCountryComponent } from './auth-count-country/auth-count-country.component';
import { ProductCrudService } from '../product-crud/product-crud.service';
import { AuthenticationService } from '../sessions/authentication.service';



@NgModule({
  declarations: [
    ReportingComponent,
    SalesRegionComponent,
    SalesTimeComponent,
    SalesRetailersComponent,
    FeedbackRateComponent,
    AuthCountCountryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportingRoute),
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
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ReportingService, ProductCrudService, AuthenticationService
  ]
})
export class ReportingModule { }
