import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'products',
  component: ProductComponent
},
  {
    path: 'place_new_order',
    component: OrderComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
