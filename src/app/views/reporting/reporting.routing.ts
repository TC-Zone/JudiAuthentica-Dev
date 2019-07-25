import { Routes } from "@angular/router";
import { ReportingComponent } from "./reporting.component";
import { SalesRegionComponent } from "./sales-region/sales-region.component";
import { SalesTimeComponent } from "./sales-time/sales-time.component";
import { SalesRetailersComponent } from "./sales-retailers/sales-retailers.component";
import { FeedbackRateComponent } from "./feedback-rate/feedback-rate.component";

export const ReportingRoute: Routes = [
    {
        path: "",
        component: ReportingComponent,
        children: [
            {
                path: 'sales-region',
                component: SalesRegionComponent,
                data: { title: 'Sales by Region', breadcrumb: 'Sales by Region' }
            },
            {
                path: 'sales-time',
                component: SalesTimeComponent,
                data: { title: 'Sales by Time', breadcrumb: 'Sales by Time' }
            },
            {
                path: 'sales-retailers',
                component: SalesRetailersComponent,
                data: { title: 'Sales by Retailers', breadcrumb: 'Sales by Retailers' }
            },
            {
                path: 'feedback-rate',
                component: FeedbackRateComponent,
                data: { title: 'Customer Feedback Rate', breadcrumb: 'Customer Feedback Rate' }
            },
        ]
    }
];