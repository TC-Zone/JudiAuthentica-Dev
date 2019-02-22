import { Routes } from '@angular/router';
import { UserComunityComponent } from './user-comunity/user-comunity.component';


export const ComunityRouts: Routes = [
  {
    path: 'showComunity',
    component: UserComunityComponent,
    data: { title: 'Comunity', breadcrumb: 'Comunity' }
  }
];
