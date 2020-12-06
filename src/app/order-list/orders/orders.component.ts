import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { statusConfig } from '../../shared/config/statusConfig';
import { IOrder } from '../../shared/interfaces/order.interface';
import { IstatusConfig } from "../../shared/interfaces/status.interface";
import { IalertInput } from '../../shared/interfaces/alertInput.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IstatusVal } from '../../shared/interfaces/stateVal.interface';
import { changeStatus,selectOrder } from "../../shared/actions/order.action";
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public route:Router,public store:Store,public commonService:CommonService) { }

  /**
   * Description: Holds all order values
   */
  public orderDetails:IOrder[];

  /**
   * Description: select values from state
   */
  public orders : Observable<IOrder[]>;

  /**
   * Description: Status Config
   */
  public statusLabel:IstatusConfig;

  /**
   * Description: input value for alert component
   */
  public alertInput:IalertInput;

  /**
   * Description: onInit lifecycle hook
   */
  public ngOnInit(): void {
    setTimeout(() => {
      this.commonService.showLoader(false)
    }, 500);
    this.orders = this.store.select((data:IstatusVal)=>data.order.orders);
    this.orders.subscribe((data)=>{
      this.orderDetails = data
    });
    this.statusLabel = statusConfig;
  }

  /**
   * Description: Navigate to view orders page with selected order details
   * @param:orderInfo - holds the selected order value
   */
  public viewOrder(orderInfo){
    this.store.dispatch(selectOrder({orderInfo}));
    this.commonService.showLoader(true);
    this.route.navigate(['./viewOrder'])
  }

  /**
   * Description: Navigate back to orders page
   * @param:status-order status to be changed,
   * orderId-selected order id
   */
  public changeStatus(status,orderId){
    this.alertInput = {
      displayModal:true,
      alertContent:"Are you sure, you want to change status?",
      status:status,
      orderId:orderId
    }
  }

  /**
   * Description: Change the status once the user confirmed in alert
   * @param:alertOutput - holds the value emitted from the alert component
   */
  public setStatus(alertOutput){
    if (alertOutput.status) {
      this.store.dispatch(changeStatus({orderId:alertOutput.orderId,status:alertOutput.statusValue}))
      this.alertInput.displayModal = false;
    }
  }
}
