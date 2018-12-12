import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PhonesService } from '../phones.service';


@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.css']
})

export class DetailPhoneComponent implements OnInit {
  public phone = new Phone;
  public sizeVariant = [];
  public colorVariant = [];
  public selectedSizeVariant = "";
  public selectedColorVariant = "";
  public phonePrice = "";
  public phoneAvailability = "";
  public currentMobileId;
  public mobTopSpec = new TopSpec;
  public topSpec = [];
  public android: boolean = false;
  public fullSpec = [];
  constructor(private route: ActivatedRoute,
    private router: Router, private phoneService: PhonesService) { }
  ngOnInit() {
    console.log(this.phoneService.currentMobilePhoneId)
    // this.sizeVariant = [12,213]
    let id = this.route.snapshot.paramMap.get('mobileId');
    // let id = this.route.snapshot.queryParamMap.get('phone.mobileId');
    console.log("ID " + id);
    // console.log("ID " + id.length);
    var phoneId = parseInt(id);
    // if (this.phoneService.currentMobilePhoneId == undefined) {
    if (phoneId >= 100 && phoneId <= 130) {
      this.phoneService.getMobilePhone(phoneId).subscribe(res =>
        this.storeData(res)
      );

      // }
    }
    else {
      console.log(this.phoneService.currentMobilePhoneId)
      // if (this.phoneService.currentMobilePhoneId.length < 0) {
      this.router.navigate(['/notFound'])
    }
  }
  storeData(res) {
    // console.log(res.mobileData);
    console.log(res);
    var res = res.MobileData;
    var tempSize = res.sizeVariant;
    var tempColours = res.colourVariant;
    this.phonePrice = res.mobilePrice;
    this.phoneAvailability = res.mobileStock;
    for (let key in tempSize) {
      let value = tempSize[key];
      this.sizeVariant.push(value)
    }
    for (let key in tempColours) {
      let value = tempColours[key];
      this.colorVariant.push(value);
    }

    // topSpec
    this.mobTopSpec.battery = res.topSpec.battery;
    this.mobTopSpec.os = res.topSpec.os;
    if (res.topSpec.os == "Android") {
      this.android = true;
    }
    this.mobTopSpec.camera = res.topSpec.camera;
    this.mobTopSpec.storage = res.topSpec.storage;
    this.mobTopSpec.display = res.topSpec.display;
    // console.log(this.colorVariant);

    var tempFullSpec = res.fullSpec;

    for (let key in tempFullSpec) {
      // console.log(key)
      let value = tempFullSpec[key];
      // console.log(tempFullSpec[key]+":"+value)
      this.fullSpec.push(key + ": " + value);
    }
    // this.fullSpec.forEach(element => {
    //   console.log(element)
    // });
    // console.log(this.fullSpec);
    // set the size variant into first value by default when loading
    this.selectedSizeVariant = this.sizeVariant[0];
    this.selectedColorVariant = this.colorVariant[0];

    // setting Phone 
    this.phone.mobileId = res.mobileId;
    this.phone.mobileName = res.mobileName;
    this.phone.mobilePrice = res.mobilePrice;
    this.phone.imageUrl = res.imageUrl;
    // console.log(this.phone);
  }

  loadSelectedSize(size) {
    // console.log(size);
    this.selectedSizeVariant = size;
  }
  loadSelectedColor(color) {
    // console.log(size);
    this.selectedColorVariant = color;
  }
}
export class Phone {
  mobileId: Number
  mobileName: String
  mobilePrice: Number
  imageUrl: String
}

export class TopSpec {
  battery: string
  os: string
  display: string
  camera: string
  storage: string
}
