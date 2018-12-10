import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PhonesService } from '../phones.service';


@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.css']
})
export class DetailPhoneComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private phoneService: PhonesService) { }

  ngOnInit() {
    console.log(this.phoneService.currentMobilePhoneId)
    // let id = this.route.snapshot.paramMap.get('mobileId');
    // let id = this.route.snapshot.queryParamMap.get('phone.mobileId');
    // console.log("ID " + id);
    // console.log("ID " + id.length);

    if (this.phoneService.currentMobilePhoneId == undefined) {
      console.log(this.phoneService.currentMobilePhoneId)
      // if (this.phoneService.currentMobilePhoneId.length < 0) {
        this.router.navigate(['/allPhones'])
      // }
    }
    else{
      console.log("ALL GOOD")
    }

  }

}
