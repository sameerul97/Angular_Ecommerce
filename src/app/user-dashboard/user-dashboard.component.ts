import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private phoneService: PhonesService) { }
  public myUsername; myEmail;
  public orders = [];
  public wishedItems = [];
  public wishtedItemsBool = false;

  ngOnInit() {
    this.phoneService.getProfile().subscribe(response => this.loadProfile(response));
  }
  loadProfile(response){
    console.log(response);
    this.myUsername = response.name;
    this.myEmail = response.email;
  }
  updateProfile(){
    console.log("Update profile");
    console.log(localStorage.getItem("userId"));
    var userId = localStorage.getItem("userId");
    this.phoneService.updateProfile(userId,this.myUsername).subscribe(res=>console.log(res));
  }
  getOrders() {
    this.phoneService.getMyOrders().subscribe(response => this.loadOrders(response));
  }
  loadOrders(response) {
    console.log(response.Orders[5]);
    this.orders.push(response.Orders[5]);
  }
  // Get refers to getting from the server
  getWishedItems() {
    this.phoneService.getMyWishedItems().subscribe(response => this.loadWishedItems(response));
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
