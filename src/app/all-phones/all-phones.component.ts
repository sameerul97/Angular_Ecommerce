import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { mobilePhone } from "../interface/mobilePhone";

@Component({
  selector: 'app-all-phones',
  templateUrl: './all-phones.component.html',
  styleUrls: ['./all-phones.component.css']
})
export class AllPhonesComponent implements OnInit {

  constructor(private phoneService: PhonesService) { }

  ngOnInit() {
    this.phoneService.getAllMobilePhones().subscribe(res =>
      this.storeData(res)
    );
  }
  public mobilePhones: mobilePhone[] = [];
  storeData(mobilePhoneArr) {
    // console.log(mobilePhoneArr.result);
    this.mobilePhones = []

    mobilePhoneArr.result.forEach(phone => {
      console.log(phone.mobileImageUrl)
      var newPhone = {
        mobileId: phone.mobileId,
        mobileName: phone.mobileName,
        mobilePrice: phone.mobilePrice,
        mobileImageUrl: phone.mobileImageUrl
      };
      this.mobilePhones.push(newPhone);
    });
    console.log(this.mobilePhones)
  }
  getLowToHigh() {
    this.phoneService.getLowToHighMobilePhones().subscribe(res => this.storeData(res));
  }
  getHighToLow() {
    this.phoneService.getHighToLowobilePhones().subscribe(res => this.storeData(res));
  }
  getBestSelling() {
    this.phoneService.getBestSellingMobilePhones().subscribe(res => this.storeData(res));
  }
  getMostlyReviewed() {
    this.phoneService.getMostlyReviewedMobilePhones().subscribe(res => this.storeData(res));
  }

  // storeLowToHigh(mobilePhoneArr) {
  //   this.mobilePhones = []
  //   // console.log(mobilePhoneArr.result);
  //   mobilePhoneArr.result.forEach(phone => {
  //     // console.log(phone)
  //     var newPhone = {
  //       mobileId: phone.mobileId,
  //       mobileName: phone.mobileName,
  //       mobilePrice: phone.mobilePrice,
  //       mobileImage: phone.mobileImage
  //     };
  //     this.mobilePhones.push(newPhone);
  //   });
  //   console.log(this.mobilePhones)
  // }

}
