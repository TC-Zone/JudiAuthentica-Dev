import { Routes } from "@angular/router";
import { SurveyInteractionComponent } from './survey-interaction.component';


export const SurveyInteractionRoutes: Routes = [

  {
    path: "",
     component: SurveyInteractionComponent

    // children: [
    //   {
    //     path: "summery",
    //     component: SurveyTableComponent,
    //     data: { title: "Survey Summary", breadcrumb: "Summary" }
    //   }
    // ]
  }
];
