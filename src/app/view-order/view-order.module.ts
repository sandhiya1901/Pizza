import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewOrderRoutingModule
  ]
})
export class ViewOrderModule { }
