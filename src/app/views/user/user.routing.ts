import { Routes } from '@angular/router';
import { UserTableComponent } from './users/user-table.component';

export const UserRoutes: Routes = [
  { 
    path: 'user-table', 
    component: UserTableComponent, 
    data: { title: 'User Section', breadcrumb: 'User' } 
  }
];