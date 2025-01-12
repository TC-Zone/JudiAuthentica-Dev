import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";


export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "sessions/signin",
    pathMatch: "full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: "./views/sessions/sessions.module#SessionsModule",
        data: { title: "Session" }
      },
      {
        path: "interaction",
        loadChildren: "./views/interaction-view/interaction-view.module#InteractionViewModule",
        data: { title: "Interaction View" }
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [


      {
        path: "profile",
        loadChildren: "./views/profile/profile.module#ProfileModule",
        data: { title: "Profile", breadcrumb: "PROFILE" }
      },
      {
        path: "inbox",
        loadChildren: "./views/app-inbox/app-inbox.module#AppInboxModule",
        data: { title: "Inbox", breadcrumb: "INBOX" }
      },
      {
        path: "calendar",
        loadChildren:
          "./views/app-calendar/app-calendar.module#AppCalendarModule",
        data: { title: "Calendar", breadcrumb: "CALENDAR" }
      },
      {
        path: "cruds",
        loadChildren: "./views/cruds/cruds.module#CrudsModule",
        data: { title: "Clients", breadcrumb: "Client" }
      },
      {
        path: "productCrud",
        loadChildren:
          "./views/product-crud/product-crud.module#ProductCrudModule",
        data: { title: "Product Catalogue", breadcrumb: "" }
      },
      {
        path: "surveys",
        loadChildren: "./views/survey/survey.module#SurveyModule",
        data: { title: "Survey Service", breadcrumb: "" }
      },
      {
        path: "future-survey",
        loadChildren:
          "./views/future-survey/future-survey.module#FutureSurveyModule",
        data: { title: "Future Survey", breadcrumb: "Future Survey" }
      },
      {
        path: "evote",
        loadChildren: "./views/evote/evote.module#EvoteModule",
        data: { title: "E - Vote", breadcrumb: "E Vote" }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "sessions/404"
  }
];
