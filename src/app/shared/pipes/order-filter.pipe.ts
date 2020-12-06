import { Pipe, PipeTransform } from '@angular/core';
import { IOrder } from '../interfaces/order.interface';

@Pipe({
  name: 'orderFilter',
  pure:false
})
export class OrderFilterPipe implements PipeTransform {

  /**
   * Description: filters the order values based on status
   * @param:value - order values
   * args - order status passed
   */
  public transform(value: IOrder[], args: string): any {
   
    let filterVal = value.filter((val)=>{
      return val.status === args;
    });
    return filterVal;
  }

}
