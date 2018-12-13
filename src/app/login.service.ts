import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http_Var: HttpClient) { }
  private isLoggedin: boolean;

  getLoginService(): Observable<LoginMessage> {
    // this.data = this.http.get<LoginMessage[]>(this._url);
    // console.log(this.data.Message)
    // console.log(this.http.get<LoginMessage>(this._url));    
    return this.http_Var.get<LoginMessage>("http://localhost:3000/userLogin");
  }

  loginIn(email, password) {
 
    const body = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http_Var.post("http://localhost:3000/login/",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
  }

  // isLoggedIn(): boolean {
  //   // Checking if the token exists or checking the expiration of the token
  //   if (localStorage.getItem("token") == null || this.authService.isAuthenticated()) {
  //     this.isLoggedin = false;
  //     return this.isLoggedin;
  //   }
  //   else {
  //     return true;
  //   }
  // }

}

export class LoginMessage {
  message: string;
}
