import { Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { BasketComponent } from './component/basket/basket.component';
export const routes: Routes = [
  {
     path: '',
     component : ProductsComponent
  },
  {
    path: 'basket',
    component : BasketComponent
 }
];