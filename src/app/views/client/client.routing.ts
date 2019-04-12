import { Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientTableComponent } from "./clients/client-table.component";
import { UserComponent } from "./clients/user/user.component";
import { UserTableComponent } from "./clients/user/user-table/user-table.component";
import { RoleTableComponent } from "./clients/user/roles/role-table.component";

export const ClientRoute: Routes = [
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
        path: "user",
        component: UserComponent,
        data: { title: "Users", breadcrumb: "Users" },
        children: [
          {
            path: "user-table",
            component: UserTableComponent,
            data: { title: "Users", breadcrumb: "Users" }
          },
          {
            path: "user-table/:clientId",
            component: UserTableComponent,
            data: { title: "Users", breadcrumb: "Users" }
          },
          {
            path: "role-table",
            component: RoleTableComponent,
            data: { title: "Roles", breadcrumb: "Roles" }
          },
          {
            path: "role-table/:clientId",
            component: RoleTableComponent,
            data: { title: "Roles", breadcrumb: "Roles" }
          }
        ]
      },
      {
        path: "role-table",
        component: RoleTableComponent,
        data: { title: "Roles", breadcrumb: "Roles" }
      }
    ]
  }
];
