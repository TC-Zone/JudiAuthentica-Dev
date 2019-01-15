import { Routes } from '@angular/router';
import { InviteeInteractionViewComponent } from './invitee-interaction-view.component';
;


export const InviteeInteractionViewRoute: Routes = [
  {
    path: '',
    component: InviteeInteractionViewComponent,
    data: { title: 'Invitee Interaction View', breadcrumb: 'Invitee Interaction View' }
  }
];
