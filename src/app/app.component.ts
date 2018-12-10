import { Component, OnInit } from '@angular/core';
import { PhonesService } from './phones.service';
import { mobilePhone } from "./interface/mobilePhone"
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private phoneService: PhonesService) {

  }
  ngOnInit() {
    // this.phoneService.getAllMobilePhones().subscribe(res =>
    //   this.storeData(res)
    // );
  }
  //   this.phoneService.getAllMobilePhones()

  title = 'app';
  // public mobilePhones: mobilePhone[] = [];
  // storeData(mobilePhoneArr) {
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
  Hero = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];


  // for ( i = 0; i < Hero.length; index++) {
  //   const element = Hero[index];

  // }
}
