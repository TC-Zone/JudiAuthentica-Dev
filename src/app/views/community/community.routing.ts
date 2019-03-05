import { Routes } from '@angular/router';
import { CommunityViewComponent } from './community-view/community-view.component';
import { UserCommunityComponent } from './user-community/user-community.component';
import { UserEventComponent } from './user-community/user-event/user-event.component';
import { UserFeedbackComponent } from './user-community/user-feedback/user-feedback.component';
import { UserOfferComponent } from './user-community/user-offer/user-offer.component';



export const CommunityRouts: Routes = [
  {
    path: 'community-view',
    component: CommunityViewComponent,
    data: { title: 'Communities', breadcrumb: 'Communities' }
  },
  {
    path: 'user-community',
    component: UserCommunityComponent,
    data: { title: 'User Community', breadcrumb: 'User Community' },
    children: [
      {
        path: 'user-feedback',
        component: UserFeedbackComponent,
        data: { title: 'User Feedback', breadcrumb: 'User Feedback' }
      },
      {
        path: 'user-event',
        component: UserEventComponent,
        data: { title: 'User Event', breadcrumb: 'User Event' }
      },
      {
        path: 'user-offer',
        component: UserOfferComponent,
        data: { title: 'User Offer', breadcrumb: 'User Offer' }
      }
    ]
  }
];
