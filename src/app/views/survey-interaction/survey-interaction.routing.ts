import { Routes } from "@angular/router";
import { SurveyInteractionComponent } from "./survey-interaction.component";
import { SurveyViewerComponent } from "./survey-viewer/survey-viewer.component";

export const SurveyInteractionRoutes: Routes = [
  {
    path: "",
    component: SurveyInteractionComponent
    // children: [
    //   {
    //     path: "surveyView",
    //     component: SurveyViewerComponent,
    //     data: { title: "Survey Viewer", breadcrumb: "Interaction Viewer" }
    //   }
    // ]
  },
  {
    path: "surveyView/:id/:type/:sourceId",
    component: SurveyViewerComponent
  }
];
