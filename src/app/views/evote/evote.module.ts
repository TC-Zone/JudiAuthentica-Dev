import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoteComponent } from './evote.component';
import { RouterModule } from '@angular/router';
import { EvoteRouts } from './evote.routing';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule.forChild(EvoteRouts)
  ],
  declarations: [EvoteComponent]
})
export class EvoteModule { }
