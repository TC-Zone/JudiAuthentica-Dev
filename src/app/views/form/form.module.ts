import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { FormRoutes } from './form.routing';
import { FormComponent } from './form.component';
import { FormService } from './form.service';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule, 
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,     
    RouterModule.forChild(FormRoutes)
  ],
  providers: [FormService],
  declarations: [FormComponent]
})
export class FormModule { }
