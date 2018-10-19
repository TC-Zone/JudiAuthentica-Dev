import { Routes } from "@angular/router";

import { FutureSurveyComponent } from "./future-survey/future-survey.component";

export const ShopRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sEditor",
        component: FutureSurveyComponent,
        data: { title: "Survey Editor", breadcrumb: "Survey Editor" }
      }
    ]
  }
];
