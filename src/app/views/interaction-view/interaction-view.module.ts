import { NgModule, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InteractionViewComponent } from "./interaction-view.component";
import { RouterModule } from "@angular/router";
import { InteractionViewRoute } from "./interaction-view.routing";
import { MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";
import { InteractionViewService } from "./interaction-view.service";
import { FutureSurveyService } from '../future-survey/future-survey.service';
import { ReactiveFormsModule } from '@angular/forms';

export let InjectorInstance2: Injector;

@NgModule({
  declarations: [InteractionViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(InteractionViewRoute)
  ],
  providers: [InteractionViewService, FutureSurveyService]
})
export class InteractionViewModule {
  constructor(private injector: Injector) {
    InjectorInstance2 = this.injector;
  }
}
