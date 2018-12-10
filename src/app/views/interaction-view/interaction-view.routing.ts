import { Routes } from '@angular/router';
import { InteractionViewComponent } from './interaction-view.component';
;


export const InteractionViewRoute: Routes = [
  {
    path: 'viewInteraction',
    component: InteractionViewComponent,
    data: { title: 'Interaction View', breadcrumb: 'Interaction View' }
  }
];
