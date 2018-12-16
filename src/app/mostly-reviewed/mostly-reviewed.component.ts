import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { mobilePhone } from "../interface/mobilePhone";

@Component({
  selector: 'app-mostly-reviewed',
  templateUrl: './mostly-reviewed.component.html',
  styleUrls: ['./mostly-reviewed.component.css']
})
export class MostlyReviewedComponent implements OnInit {

  constructor(private phoneService: PhonesService,private router:Router) { }
  ngOnInit() {
    this.phoneService.getMostlyReviewedMobilePhones().subscribe(res =>
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
        mobileImageUrl: phone.mobileImageUrl
      };
      this.mobilePhones.push(newPhone);
    });
    console.log(this.mobilePhones)
  }
  loadDetailMobilePhone(phone){
    console.log(phone)
    this.phoneService.currentMobilePhoneId = phone.mobileId;
    // console.log(this.phoneService.currentMobilePhoneId)

    this.router.navigate(['/mobilePhone'])

  }

}
