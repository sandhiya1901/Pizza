import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewOrderRoutingModule,
    SharedModule
  ]
})
export class ViewOrderModule { }
