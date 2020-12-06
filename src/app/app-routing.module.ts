import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"orderList",
    loadChildren:()=>import('./order-list/order-list.module').then((mod)=>mod.OrderListModule)
  },
  {
    path:"viewOrder",
    loadChildren:()=>import('./view-order/view-order.module').then((mod)=>mod.ViewOrderModule)
  },
  {
    path:"",
    redirectTo:"orderList",
    pathMatch:"full"
  },
  {
    path:"*",
    redirectTo:"orderList"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
