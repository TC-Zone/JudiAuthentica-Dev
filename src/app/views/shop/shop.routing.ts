import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FutureSurveyComponent } from './future-survey/future-survey.component';
import { FutureSurveyViewComponent } from './future-survey-view/future-survey-view.component';

export const ShopRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ProductsComponent 
  }, {
    path: 'products/:id',
    component: ProductDetailsComponent,
    data: { title: 'Detail', breadcrumb: 'Detail' }
  }, {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Cart', breadcrumb: 'CART' }
  }, {
    path: 'sEditor',
    component: FutureSurveyComponent,
    data: { title: 'Survey Editor', breadcrumb: 'Survey Editor' }
  },{
    path: 'sViewer',
    component: FutureSurveyViewComponent,
    data: { title: 'Survey View', breadcrumb: 'Survey View' }
  }]
}]
