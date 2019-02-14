import { Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientTableComponent } from "./clients/client-table.component";
import { UserTableComponent } from "./clients/user-table/user-table.component";
import { RoleTableComponent } from "./roles/role-table.component";

export const SurveyRoute: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "client-table",
        component: ClientTableComponent,
        data: { title: "Clients", breadcrumb: "Clients" }
      },
      {
        path: "user-table",
        component: UserTableComponent,
        data: { title: "Users", breadcrumb: "Users" }
      },
      {
        path: "role-table",
        component: RoleTableComponent,
        data: { title: "Roles", breadcrumb: "Roles" }
      },
      // {
      //   path: "demo",
      //   component: SurveyInteractionComponent,
      //   data: { title: "Authenticate Demo", breadcrumb: "Demo" }
      // }
    ]
  }
];
