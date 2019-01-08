import { Routes } from "@angular/router";
import { FutureSurveyComponent } from "./future-survey/future-survey.component";
import { FutureSurveyViewComponent } from './future-survey-view/future-survey-view.component';
import { FutureSurveyListComponent } from './future-survey-list/future-survey-list.component';

export const FutureSurveyRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sEditor",
        component: FutureSurveyComponent,
        data: { title: "Survey Editor", breadcrumb: "Survey Editor" }
      },
      {
        path: 'sViewer',
        component: FutureSurveyViewComponent,
        data: { title: 'Survey View', breadcrumb: 'Survey View' }
      },
      {
        path: 'sList',
        component: FutureSurveyListComponent,
        data: { title: 'Survey List', breadcrumb: 'Survey List' }
      }
    ]
  }
];
