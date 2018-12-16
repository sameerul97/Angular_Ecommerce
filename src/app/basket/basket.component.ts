import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { LoginService } from '../login.service';
import { PhonesService } from '../phones.service';
import { ReLoginComponent } from '../re-login/re-login.component';
declare var jQuery: any;
@Component({
  providers: [ReLoginComponent],
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService,
    private loginService: LoginService,
    private phoneService: PhonesService,
    private reLoginComponent: ReLoginComponent) { }

  public basketItems = [];
  public itemToOrder = "";
  public success = "";
  public selectedBasketItem = ""
  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.basketService.getItemsInMyBasket().subscribe(res => this.loadBasket(res));
    }
  }
  loadBasket(res) {
    this.basketItems = res.basketItems;
    console.log(this.basketItems);
  }

  orderPhone() {
    if (this.loginService.isLoggedIn()) {
      this.phoneService.orderPhone(this.itemToOrder).subscribe(function (res) {
        console.log(res)
      });
      jQuery("#confirmationModal").modal('hide');
      this.success = "Success, Your order has been placed =)";
      console.log(this.success)
      this.basketService.deleteItemInMyBasket(this.selectedBasketItem).subscribe(res=> this.ngOnInit())
    }
    else {
      this.reLoginComponent.show();
    }
  }

  showConfirmation(mobile) {
    if (this.loginService.isLoggedIn()) {
      this.itemToOrder = mobile;
      this.selectedBasketItem = mobile._id;
      console.log(this.selectedBasketItem);
      jQuery("#confirmationModal").modal('show');
    }
    else {
      this.reLoginComponent.show();
    }
  }
}
