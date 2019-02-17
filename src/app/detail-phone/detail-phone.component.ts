import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PhonesService } from '../phones.service';
import { BasketService } from '../basket.service';
import { LoginService } from '../login.service';
import { ReLoginComponent } from '../re-login/re-login.component';


@Component({
  providers: [ReLoginComponent],
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
  public success = "";
  public noOfStars = 5;
  public starsGiven = 0;
  public totalNoOfReviews = 0;
  public Reviews = [];
  public questionAndAnswers = [];
  public myGivenStar;
  public myOpinion;
  public reviewSuccess; reviewSuccessOrNot;
  public oneStars; twoStars; threeStars; fourStars; fiveStars;
  public selectedQuestion; question; myAnswer; myQuestion;
  constructor(private route: ActivatedRoute,
    private router: Router, private phoneService: PhonesService,
    private loginService: LoginService, private basketService: BasketService,
    private reloginComponent: ReLoginComponent) { }
  ngOnInit() {
    console.log(this.phoneService.currentMobilePhoneId)
    let id = this.route.snapshot.paramMap.get('mobileId');
    var phoneId = parseInt(id);
    this.currentMobileId = phoneId;
    // console.log(this.basketService.itemsToOrder);
    if (phoneId >= 100 && phoneId <= 130) {
      this.phoneService.getMobilePhone(phoneId).subscribe(res =>
        this.storeData(res)
      );
      this.phoneService.getProductReviews(phoneId).subscribe(response => this.setReviews(response));
      this.phoneService.getQuestionAndAnswers(phoneId).subscribe(response => this.setQuestionAndAnswer(response));
    }
    else {
      this.router.navigate(['/notFound'])
    }
  }
  loadQuestionIntoModal(question) {
    console.log(question);
    this.selectedQuestion = question;
    this.question = this.selectedQuestion.question;
    console.log(this.selectedQuestion.question);
  }
  sendQuestion() {
    console.log(this.myQuestion);
    // headphones included ?
    this.phoneService.postMyQuestion(this.myQuestion, this.currentMobileId).subscribe(response => this.setPostedQuestionMessage(response));
  }

  setPostedQuestionMessage(response) {
    if (response.Message == "Success") {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = "Success! Your question has been posted";
      setTimeout(() => {
        var element = document.getElementById("loadQuestionIntoModalCloseButton") as any;
        element.click();
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = "";
        this.ngOnInit();
      }, 2000);
    } else {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = response.Message;
      setTimeout(() => {
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = ""
      }, 3000);
    }
  }
  sendAnswer() {
    console.log(this.selectedQuestion);
    console.log(this.myAnswer);
    if (this.loginService.isLoggedIn()) {
      this.phoneService.postMyAnswer(this.myAnswer, this.selectedQuestion._id).subscribe(response =>
        this.setQuestionAndAnswerMessage(response));
    } else {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = "Please Login in "
    }
  }

  setQuestionAndAnswerMessage(response) {
    if (response.Message == "Success") {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = "Success! Your answer has been posted";
      setTimeout(() => {
        var element = document.getElementById("AnswerModalcloseButton") as any;
        element.click();
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = "";
        this.ngOnInit();
      }, 2000);
    } else {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = response.Message;
      setTimeout(() => {
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = ""
      }, 3000);
    }
  }
  setQuestionAndAnswer(questionAndAnswers) {
    if (questionAndAnswers.qAndAs != "None") {
      console.log("Questions and Answers")
      // console.log(questionAndAnswers.qAndAs);
      this.questionAndAnswers = questionAndAnswers.qAndAs;
      console.log(this.questionAndAnswers)

    } else {
      console.log("No Questions and Answers")
    }
  }
  setReviews(reviewContent) {
    if (reviewContent.reviews != "None") {
      this.starsGiven = reviewContent.ratings;
      this.totalNoOfReviews = parseInt(reviewContent.totalReviews);
      var tempReviews = reviewContent.reviews
      for (let key in tempReviews) {
        let value = tempReviews[key];
        this.Reviews.push(value);
      }
      this.oneStars = parseInt(parseInt(reviewContent.oneStars) / parseInt(reviewContent.totalReviews) * 100 + "%");
      this.twoStars = parseInt(parseInt(reviewContent.twoStars) / parseInt(reviewContent.totalReviews) * 100 + "%");
      this.threeStars = parseInt(parseInt(reviewContent.threeStars) / parseInt(reviewContent.totalReviews) * 100 + "%");
      this.fourStars = parseInt(parseInt(reviewContent.fourStars) / parseInt(reviewContent.totalReviews) * 100 + "%");
      this.fiveStars = parseInt(parseInt(reviewContent.fiveStars) / parseInt(reviewContent.totalReviews) * 100 + "%");
      console.log(this.oneStars)
      this.oneStars += "%"
      this.twoStars += "%"
      this.threeStars += "%"
      this.fourStars += "%"
      this.fiveStars += "%"
    } else {
      this.oneStars = this.twoStars = this.threeStars = this.fourStars = this.fiveStars = "0%";
    }
  }

  myFunction(event: any) {
    this.myGivenStar = event.target.value;
  }
  sendReview() {
    if (this.loginService.isLoggedIn()) {
      this.phoneService.postMyReview(this.myOpinion, this.noOfStars, this.currentMobileId).subscribe(response =>
        this.setReviewMessage(response));
    } else {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = "Please Login in "
    }
  }

  setReviewMessage(response) {
    if (response.Message == "success") {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = "Success! Your review has been posted";
      setTimeout(() => {
        var element = document.getElementById("closeButton") as any;
        element.click();
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = "";
        this.ngOnInit();
      }, 2000);
    } else {
      this.reviewSuccess = true;
      this.reviewSuccessOrNot = response.Message;
      setTimeout(() => {
        this.reviewSuccess = false;
        this.reviewSuccessOrNot = ""
      }, 3000);
    }
  }
  addToBasket() {
    if (this.loginService.isLoggedIn()) {
      var userId = localStorage.getItem("userId");
      this.basketService.postItemInMyBasket(userId,
        this.phone.mobileId, this.phone.mobileName, this.phone.mobilePrice, this.phone.imageUrl).subscribe(res =>
          console.log(res));
      this.success = "Successfully Added to basket";
    }
    else {
      this.reloginComponent.show();
    }
  }

  storeData(res) {
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
    this.mobTopSpec.battery = res.topSpec.battery;
    this.mobTopSpec.os = res.topSpec.os;
    if (res.topSpec.os == "Android") {
      this.android = true;
    }
    this.mobTopSpec.camera = res.topSpec.camera;
    this.mobTopSpec.storage = res.topSpec.storage;
    this.mobTopSpec.display = res.topSpec.display;
    var tempFullSpec = res.fullSpec;

    for (let key in tempFullSpec) {
      let value = tempFullSpec[key];
      this.fullSpec.push(key + ": " + value);
    }
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
  addToWishList(mobileId) {
    if (this.loginService.isLoggedIn()) {
      console.log(mobileId);
      this.phoneService.addToMyWishList(mobileId).subscribe(res => console.log(res))
      this.success = "Added to wish list";
    } else {
      this.reloginComponent.show();
    }
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
