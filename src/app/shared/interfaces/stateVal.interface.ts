import { IOrder } from './order.interface';

export interface IstatusVal {
    order: IorderVal
}

export interface IorderVal{
    orders:IOrder[],
    selectedOrder:IOrder
}