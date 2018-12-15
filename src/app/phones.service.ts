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

  // returns all orders placed by the user
  getMyOrders(): Observable<mobilePhone[]> {
    const userID = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    let headers = new HttpHeaders().set('Authorization',
      token);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/myOrders/" + userID, { headers }
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

}
