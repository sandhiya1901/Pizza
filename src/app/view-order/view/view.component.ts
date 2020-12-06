import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from "../../shared/interfaces/order.interface";
import { IstatusConfig } from "../../shared/interfaces/status.interface";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IstatusVal } from '../../shared/interfaces/stateVal.interface';
import { statusConfig } from '../../shared/config/statusConfig';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public route:Router,public store:Store,public commonService:CommonService) { }

  /**
   * Description: Holds the current order value
   */
  public orderInfo: IOrder;

  /**
   * Description: Holds the current order value
   */
  public orders: Observable<IOrder> = this.store.select((data: IstatusVal) => data.order.selectedOrder);

  /**
   * Description: Status Config contains different order status
   */
  public statusLabel: IstatusConfig = statusConfig;

  /**
   * Description: onInit lifecycle hook
   */
  public ngOnInit(): void {
    setTimeout(() => {
      this.commonService.showLoader(false)
    }, 500);
    this.orders.subscribe((data)=>{
      this.orderInfo = data
    });
    if(!this.orderInfo.orderId){
      this.backToList();
    }
  }
  /**
   * Description: Navigate back to orders page
   */
  public backToList():void{
    this.commonService.showLoader(true)
    this.route.navigate(['../orderList']);
  }

}
