import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: BasicsPagesComponent },
  { path: 'numbers', component: NumberPageComponent },
  { path: 'uncommon', component: UncommonPageComponent },
  { path: 'custom', component: OrderComponent },

  { path: '**' , redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
