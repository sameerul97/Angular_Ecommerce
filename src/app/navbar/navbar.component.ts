import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService,
    private basketService: BasketService) { }
  public noOfItemsInBasket;
  ngOnInit() {
    this.basketService.getItemsInMyBasket().subscribe(res=> this.setNoOfItems(res));
  }
  setNoOfItems(res){
    this.noOfItemsInBasket = res.basketItems.length;
  }
  signOut(){
    this.loginService.signMeOut();
  }
}
