import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { LoginService } from '../login.service';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService,
    private loginService: LoginService,
    private phoneService: PhonesService) { }

  ngOnInit() {
    if(this.loginService.isLoggedIn()){
      this.basketService.getItemsInMyBasket().subscribe(res=>console.log(res));
    }
  }

}
