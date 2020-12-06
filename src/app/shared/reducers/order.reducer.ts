import {createReducer,on} from "@ngrx/store";
import {orders} from "../data/order";
import {changeStatus,selectOrder} from "../actions/order.action"

const initialState = {
    orders:orders,
    selectedOrder:{}
}

const _orderReducer = createReducer(initialState, on(changeStatus,(state,payload)=>{
    let index = state.orders.findIndex((val)=>val.orderId === payload.orderId)
    var order = JSON.parse(JSON.stringify(state));
    order.orders[index].status = payload.status;
    return order;
}),on(selectOrder,(state,payload)=>{
    let selectedOrder = JSON.parse(JSON.stringify(state));
    selectedOrder.selectedOrder = payload.orderInfo
    return selectedOrder
}))

export function orderReducer(state,action){
    return _orderReducer(state,action);
}