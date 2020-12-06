import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { ViewOrderModule } from '../view-order/view-order.module';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    SharedModule
  ]
})
export class OrderListModule { }
