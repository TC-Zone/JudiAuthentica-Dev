import { Routes } from '@angular/router';

import { FormComponent } from './form.component';


export const FormRoutes: Routes = [
    { path: 'showForm', component: FormComponent, data: { title: 'Form' } }
];