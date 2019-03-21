import { Routes } from '@angular/router';

import { ProfileComponent } from "./profile.component";
import { ProfileOverviewComponent } from "./profile-overview/profile-overview.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ProfileBlankComponent } from "./profile-blank/profile-blank.component";
import { ProfileLicenseComponent } from "./profile-license/profile-license.component";

export const ProfileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [{
      path: 'overview',
      component: ProfileOverviewComponent,
      data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
    }, 
    {
      path: 'profile-settings',
      component: ProfileSettingsComponent,
      data: { title: 'Profile Settings', breadcrumb: 'PROFILE SETTINGS' }
    }, 
    {
      path: 'account-settings',
      component: AccountSettingsComponent,
      data: { title: 'Account Settings', breadcrumb: 'ACCOUNT SETTINGS' }
    }, 
    {
      path: 'general-settings',
      component: ProfileLicenseComponent,
      data: { title: 'General Settings', breadcrumb: 'GENERAL SETTINGS' }
    }, 
    {
      path: 'blank',
      component: ProfileBlankComponent,
      data: { title: 'Blank', breadcrumb: 'BLANK' }
    }]
  }
];