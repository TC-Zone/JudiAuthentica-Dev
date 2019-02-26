import { Routes } from '@angular/router';
import { CommunityViewComponent } from './community-view/community-view.component';
import { UserCommunityComponent } from './user-community/user-community.component';



export const CommunityRouts: Routes = [
  {
    path: 'community-view',
    component: CommunityViewComponent,
    data: { title: 'Communities', breadcrumb: 'Communities' }
  },
  {
    path: 'user-community',
    component: UserCommunityComponent,
    data: { title: 'User Community', breadcrumb: 'User Community' }
  }
];
