import { Routes } from '@angular/router';
import { EvoteComponent } from './evote.component';


export const EvoteRouts: Routes = [
  {
    path: 'showEvote',
    component: EvoteComponent,
    data: { title: 'E-Vote', breadcrumb: 'E vote' }
  }
];
