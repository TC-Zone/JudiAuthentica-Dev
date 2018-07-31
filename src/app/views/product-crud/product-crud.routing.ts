import { Routes } from '@angular/router';

import { ProductFilterTableComponent } from './product-filter-table/product-filter-table.component';

export const ProductCrudRouts: Routes = [
    {
        path: 'show',
        component: ProductFilterTableComponent,
        data: { title: 'Product Section', breadcrumb: 'Product' }
    }
];