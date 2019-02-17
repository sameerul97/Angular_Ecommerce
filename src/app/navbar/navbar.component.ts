import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService,
    private basketService: BasketService) { }
  public noOfItemsInBasket;
  public userName = localStorage.getItem("userName");
  public basketItems: basketItem[];
  ngOnInit() {
    console.log(this.userName);
    this.userName = localStorage.getItem("userName");
    if (this.loginService.isLoggedIn()) {
      this.basketService.getItemsInMyBasket().subscribe(res => this.setNoOfItems(res));
      this.userName = localStorage.getItem("userName")
    }
  }
  setNoOfItems(res) {
    // console.log(res);
    // var lengthNum = 0;
    this.basketItems = res.basketItems;
    // this.basketItems.forEach(element => {
    //   lengthNum = lengthNum + 1
    // });
    // this.noOfItemsInBasket = lengthNum;
    // console.log(this.noOfItemsInBasket);
  }
  signOut() {
    this.loginService.signMeOut();
  }
}
export class basketItem {
  userId: string
  mobileId: number
  mobileName: string
  mobilePrice: number
  mobileImageUrl: string
}
