import { Routes } from '@angular/router';
import { EvoteTableComponent } from './evote-table/evote-table.component';


export const EvoteRouts: Routes = [
  {
    path: 'showEvote',
    component: EvoteTableComponent,
    data: { title: 'E-Vote', breadcrumb: 'E vote' }
  }
];
