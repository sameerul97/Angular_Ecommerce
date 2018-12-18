import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { ReLoginComponent } from '../re-login/re-login.component';
import { LoginService } from '../login.service';
@Component({
  providers: [ReLoginComponent],
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private phoneService: PhonesService,
    private ReLoginComponent: ReLoginComponent,
    private loginService: LoginService) { }
  public myUsername; myEmail;
  public orders = [];
  public wishedItems = [];
  public wishtedItemsBool = false;

  ngOnInit() {
    this.phoneService.getProfile().subscribe(response => this.loadProfile(response));
  }
  getProfile() {
    if (this.loginService.isLoggedIn()) {
      this.phoneService.getProfile().subscribe(response => this.loadProfile(response));
    }
    else {
      this.ReLoginComponent.show();
    }

  }
  loadProfile(response) {
    console.log(response);
    this.myUsername = response.name;
    this.myEmail = response.email;
  }
  updateProfile() {
    if (this.loginService.isLoggedIn()) {
      console.log("Update profile");
      console.log(localStorage.getItem("userId"));
      var userId = localStorage.getItem("userId");
      this.phoneService.updateProfile(userId, this.myUsername).subscribe(res => console.log(res));
    }
    else {
      this.ReLoginComponent.show();
    }
  }
  getOrders() {
    if (this.loginService.isLoggedIn()) {
      this.phoneService.getMyOrders().subscribe(response => this.loadOrders(response));
    }
    else {
      this.ReLoginComponent.show();
    }
  }
  loadOrders(response) {
    if (response.Orders != "None") {
      this.orders = [];
      console.log(response.Orders);
      this.orders = response.Orders;
    }

  }
  // Get refers to getting from the server
  getWishedItems() {
    if (this.loginService.isLoggedIn()) {
      this.phoneService.getMyWishedItems().subscribe(response => this.loadWishedItems(response));
    }
    else {
      this.ReLoginComponent.show();
    }
  }
  // Loading refers to load the fetched data into front end
  loadWishedItems(response) {
    // console.log(response.result);
    this.wishedItems = response.result;
    console.log(this.wishedItems);
  }


  // getRatedItems(){
  //   this.phoneService.getMyRatedItems().subscribe(response=> this.loadRatedItems(response));
  // }
  // loadRatedItems(response){
  //   // console.log(response.ratedPhones);
  //   this.wishedItems = response.ratedPhones;
  //   console.log(this.wishedItems);
  // }
}
