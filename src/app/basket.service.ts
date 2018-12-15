import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mobilePhone } from './interface/mobilePhone';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http_Var: HttpClient, ) { }
  public itemsToOrder = [];
  // order a phone, requires to store userId, mobile Id, mobileName, mobilePrice.
  // check the length of items to order, if multiple items then call orderPhone multiple times.

  addToBasket(userId, mobileId, mobileName, mobilePrice, mobileImageUrl) {
    var orderItems = new orderItem;
    orderItems.userId = userId;
    orderItems.mobileId = mobileId;
    orderItems.mobileName = mobileName;
    orderItems.mobilePrice = mobilePrice;
    orderItems.mobileImageUrl = mobileImageUrl;
    this.itemsToOrder.push(orderItems);

    console.log(this.itemsToOrder);
    this.itemsToOrder.forEach(element => {
      console.log(element);
    });
  }
  // get items in basket
  getItemsInMyBasket(): Observable<mobilePhone[]> {
    const userID = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    let headers = new HttpHeaders().set('Authorization',
      token);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/basket/" + userID, { headers }
    )
  }
  // post an items in  basket
  postItemInMyBasket(userId, mobileId, mobileName, mobilePrice, mobileImageUrl) {
    const userID = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const body = new HttpParams()
      .set('userId', userId)
      .set('mobileId', mobileId)
      .set('mobileName', mobileName)
      .set('mobilePrice', mobilePrice)
      .set('mobileImageUrl', mobileImageUrl)
    var storedToken = localStorage.getItem('token');

    // let headers = new HttpHeaders().set('Authorization',
    //   token);
    return this.http_Var.post("http://localhost:3000/basket/", 
    body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', storedToken)

      }
    )
  }
}

export class orderItem {
  userId: string
  mobileId: number
  mobileName: string
  mobilePrice: number
  mobileImageUrl: string
}