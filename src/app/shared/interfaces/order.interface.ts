export interface IOrder {
    customerInfo:IcustomerInfo,
    orderId: number,
    status: string,
    createdDate:string,
    userComments: string,
    items:Iitems[],
    fareInfo: IfareInfo
}
export interface IcustomerInfo{
    title: string,
    firstName: string,
    lastName:string,
    emailId:string,
    address:string,
    district: string,
    pinCode: string,
    state: string,
    country: string,
    phoneCode: string,
    mobileNo: string
}
export interface Iitems{
    itemName: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    currency: string,
    description: string,
    itemCode: string
}
export interface IfareInfo{
    subTotal: number,
    GST: number,
    discount: number,
    deliveryCharges: number,
    grandTotal: number,
    currency: string
}