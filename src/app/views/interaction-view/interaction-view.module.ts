import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InteractionViewComponent } from "./interaction-view.component";
import { RouterModule } from "@angular/router";
import { InteractionViewRoute } from "./interaction-view.routing";
import { MatCardModule, MatToolbarModule } from "@angular/material";
import { InteractionViewService } from "./interaction-view.service";

@NgModule({
  declarations: [InteractionViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forChild(InteractionViewRoute)
  ],
  providers: [InteractionViewService]
})
export class InteractionViewModule {}
