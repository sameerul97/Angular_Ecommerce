import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service'
import { mobilePhone } from "../interface/mobilePhone"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private phoneService: PhonesService) { }

  ngOnInit() {
    this.phoneService.getBestSellingMobilePhones().subscribe(res =>
      this.storeData(res)
    );
  }
  public mobilePhones: mobilePhone[] = [];
  storeData(mobilePhoneArr) {
    // console.log(mobilePhoneArr.result);
    mobilePhoneArr.result.forEach(phone => {
      // console.log(phone)
      var newPhone = {
        mobileId: phone.mobileId,
        mobileName: phone.mobileName,
        mobilePrice: phone.mobilePrice,
        mobileImage: phone.mobileImage
      };
      this.mobilePhones.push(newPhone);
    });
    console.log(this.mobilePhones)
  }

}
