import {createAction, props} from "@ngrx/store";
import { IOrder } from '../interfaces/order.interface';

export const changeStatus = createAction('[Change Status] changeStatus',props<{orderId:number,status:string}>());
export const selectOrder = createAction('[Select Order] selectOrder',props<{orderInfo:IOrder}>());