import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  public itemsToOrder = [];
  // order a phone, requires to store userId, mobile Id, mobileName, mobilePrice.
  // check the length of items to order, if multiple items then call orderPhone multiple times.

  addToBasket(userId,mobileId,mobileName,mobilePrice){
    var orderItems = new orderItem;
    orderItems.userId = userId;
    orderItems.mobileId = mobileId;
    orderItems.mobileName = mobileName;
    orderItems.mobilePrice = mobilePrice;
    this.itemsToOrder.push(orderItems);
    
    console.log(this.itemsToOrder);
    this.itemsToOrder.forEach(element => {
        console.log(element);
    });
  }
}

export class orderItem{
  userId : string
  mobileId : number
  mobileName : string
  mobilePrice : number
}