import { Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleTableComponent } from './roles/role-table.component';
import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    data: { title: "User", breadcrumb: "User" },
    children: [
      {
        path: "",
        redirectTo: "user-table"
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
      }
    ]
  }
];