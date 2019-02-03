import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mobilePhone } from './interface/mobilePhone';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class PhonesService {



  constructor(private http_Var: HttpClient,
    private authservice: AuthService) { }
  public authToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfSWQiOiI1YzAwNjFmNWI0NWZlMDBjYTlmYzFjNzEiLCJuYW1lIjoic2FtZWVlcnVsIiwiZW1haWwiOiJzYW1lZXJ1bDk3QGdtYWlsLmNvbTQifSwiaWF0IjoxNTQ0NjU1MDk0LCJleHAiOjE1NDQ2NTg2OTQsInN1YiI6InNhbWVlZXJ1bCJ9.pLXu5cHcMpwa5YEuSZiGPEIZoIA9r2axwZ-sPeJJtqc"
  public currentMobilePhoneId;

  // returns all mobile phones
  getAllMobilePhones(): Observable<mobilePhone[]> {
    let headers = new HttpHeaders().set('Authorization',
      "Bearer " + this.authToken);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/allPhones", { headers }
    )
  }

  // Returns best selling mobile phones
  getBestSellingMobilePhones(): Observable<mobilePhone[]> {
    // this.data = this.http.get<LoginMessage[]>(this._url);
    // console.log(this.data.Message)
    // console.log(this.http.get<LoginMessage>(this._url)); 
    let headers = new HttpHeaders().set('Authorization',
      "Bearer " + this.authToken);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/bestSelling", { headers }
    )
  }

  // Returns mostly wished mobile phones
  getMostlyWishedMobilePhones(): Observable<mobilePhone[]> {
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/mostlyWished"
    )
  }

  // Returns mostly reviwewd mobile phones
  getMostlyReviewedMobilePhones(): Observable<mobilePhone[]> {
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/mostlyReviewed"
    )
  }

  // Returns low to high by price mobile phones
  getLowToHighMobilePhones(): Observable<mobilePhone[]> {
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/lowToHigh"
    )
  }

  // Returns mostly reviwewd mobile phones
  getHighToLowobilePhones(): Observable<mobilePhone[]> {
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/highToLow"
    )
  }

  // Returns a mobile phone 
  getMobilePhone(mobileId): Observable<mobilePhone[]> {
    // this.data = this.http.get<LoginMessage[]>(this._url);
    // console.log(this.data.Message)
    // console.log(this.http.get<LoginMessage>(this._url)); 
    // let headers = new HttpHeaders().set('Authorization',
    //   "Bearer " + this.authToken);

    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/getPhone/" + mobileId
    )
  }

  orderPhone(mobile) {
    const userID = localStorage.getItem('userId');
    // const token = localStorage.getItem('token');
    const body = new HttpParams()
      .set('userId', userID)
      .set('mobileId', mobile.mobileId)
      .set('mobileName', mobile.mobileName)
      .set('mobilePrice', mobile.mobilePrice)
      .set('mobileImageUrl', mobile.mobileImageUrl)
    var storedToken = localStorage.getItem('token');

    // let headers = new HttpHeaders().set('Authorization',
    //   token);
    return this.http_Var.post("http://localhost:3000/orderPhone/",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', storedToken)

      }
    )
  }

  // returns all orders placed by the user
  getMyOrders(): Observable<mobilePhone[]> {
    const userID = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    let headers = new HttpHeaders().set('Authorization',
      token);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/myOrders/" + userID, { headers }
    )
  }

  // Get Product reviews
  getProductReviews(mobileId): Observable<mobilePhone[]> {
    // const token = localStorage.getItem('token');
    // let headers = new HttpHeaders().set('Authorization',
    //   token);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/productReview/" + mobileId
    )
  }

  // returns all wished Items
  getMyWishedItems(): Observable<mobilePhone[]> {
    const userID = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',
      token);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/myWishedProduct/" + userID, { headers }
    )
  }


  // returns all wished Items
  addToMyWishList(mobileId) {
    var userId = localStorage.getItem("userId");
    const body = new HttpParams()
      .set('userId', userId)
      .set('mobileId', mobileId)
    var storedToken = localStorage.getItem('token');
    return this.http_Var.post("http://localhost:3000/myWishedProduct",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', storedToken)

      }
    )
  }
  // returns all rated Items
  // getMyRatedItems(): Observable<mobilePhone[]> {
  //   const userID = localStorage.getItem('userId');
  //   const token = localStorage.getItem('token');

  //   let headers = new HttpHeaders().set('Authorization',
  //     token);
  //   return this.http_Var.get<mobilePhone[]>("http://localhost:3000/ratedPhones/" + userID, { headers }
  //   )
  // }

  // returns profile data
  getProfile() {
    var storedToken = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', storedToken);
    console.log(headers);
    return this.http_Var.get("http://localhost:3000/profile",
      { headers }
    )
  }


  // Updating a profile
  updateProfile(userId, username) {
    const body = new HttpParams()
      .set('userId', userId)
      .set('name', username)
    var storedToken = localStorage.getItem('token');
    return this.http_Var.post("http://localhost:3000/updateProfile",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', storedToken)

      }
    )
  }

  postMyReview(myOpinion, noOfStars,mobileId) {
    const userID = localStorage.getItem('userId');
    // const token = localStorage.getItem('token');
    const body = new HttpParams()
      .set('userId', userID)
      .set('userName', localStorage.getItem('userName'))
      .set('noOfStars', noOfStars)
      .set('opinionText',myOpinion)
      .set('mobileId', mobileId)
    var storedToken = localStorage.getItem('token');

    // let headers = new HttpHeaders().set('Authorization',
    //   token);
    return this.http_Var.post("http://localhost:3000/writeMyReview/",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', storedToken)

      }
    )
  }

}
