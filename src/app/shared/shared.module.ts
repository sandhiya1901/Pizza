import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFilterPipe } from './pipes/order-filter.pipe';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [OrderFilterPipe, AlertComponent],
  imports: [
    CommonModule
  ],
  exports:[
    OrderFilterPipe,
    AlertComponent
  ]
})
export class SharedModule { }
