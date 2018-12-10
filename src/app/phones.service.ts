import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mobilePhone } from './interface/mobilePhone';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PhonesService {

  

  constructor(private http_Var: HttpClient) { }
  public authToken : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfSWQiOiI1YzAwNjFmNWI0NWZlMDBjYTlmYzFjNzEiLCJuYW1lIjoic2FtZWVlcnVsIiwiZW1haWwiOiJzYW1lZXJ1bDk3QGdtYWlsLmNvbTQifSwiaWF0IjoxNTQ0NDQyNjM0LCJleHAiOjE1NDQ0NDYyMzQsInN1YiI6InNhbWVlZXJ1bCJ9.5hJR_6tBGrszblqnFnYISOf8RLN7WDSOLXyxs4pMRak"

  getAllMobilePhones(): Observable<mobilePhone[]> {
    // this.data = this.http.get<LoginMessage[]>(this._url);
    // console.log(this.data.Message)
    // console.log(this.http.get<LoginMessage>(this._url)); 
    let headers = new HttpHeaders().set('Authorization',
      "Bearer "+ this.authToken);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/allPhones", { headers }
    )
  }

  getBestSellingMobilePhones(): Observable<mobilePhone[]> {
    // this.data = this.http.get<LoginMessage[]>(this._url);
    // console.log(this.data.Message)
    // console.log(this.http.get<LoginMessage>(this._url)); 
    let headers = new HttpHeaders().set('Authorization',
      "Bearer "+ this.authToken);
    return this.http_Var.get<mobilePhone[]>("http://localhost:3000/bestSelling", { headers }
    )
  }
}
