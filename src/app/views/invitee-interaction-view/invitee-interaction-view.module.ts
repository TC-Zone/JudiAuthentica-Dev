import { NgModule, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InviteeInteractionViewComponent } from "./invitee-interaction-view.component";
import { RouterModule } from "@angular/router";
import { InviteeInteractionViewRoute } from "./invitee-interaction-view.routing";
import { MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";
import { InviteeInteractionViewService } from "./invitee-interaction-view.service";
import { FutureSurveyService } from '../future-survey/future-survey.service';
import { ReactiveFormsModule } from '@angular/forms';

export let InjectorInstance2: Injector;

@NgModule({
  declarations: [InviteeInteractionViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(InviteeInteractionViewRoute)
  ],
  providers: [InviteeInteractionViewService, FutureSurveyService]
})
export class InviteeInteractionViewModule {
  constructor(private injector: Injector) {
    InjectorInstance2 = this.injector;
  }
}
