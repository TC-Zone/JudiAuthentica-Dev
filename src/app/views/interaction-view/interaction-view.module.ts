import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionViewComponent } from './interaction-view.component';
import { RouterModule } from '@angular/router';
import { InteractionViewRoute } from './interaction-view.routing';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [InteractionViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(InteractionViewRoute)
  ]
})
export class InteractionViewModule { }
