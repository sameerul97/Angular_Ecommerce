import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService,
    private router: Router,private route: ActivatedRoute,) { }
  public user = new User;
  public serverResponse = "";
  public loginMessage = "";
  ngOnInit() {
    this.user.email = "";
    this.user.password = "";  
    this.loginMessage = this.route.snapshot.paramMap.get('message');
    if (this.loginMessage){
      console.log(this.loginMessage)
    }

  }
  logIn(){
    console.log(this.user.email);
    console.log(this.user.password);
    this.serverResponse = "Loading";

    this.LoginService.loginIn(this.user.email,this.user.password).subscribe(response =>
      this.setText(response))
  }
  setText(response) {
    console.log(response);
    // this.ngxSpinner.hide();
    if (response.Message != "Okay") {
      // Unsuccessful Return
      console.log(response.Message);
      this.serverResponse = response.Message;
    } else {
      // Successful user accomplised
      // Get the token and store it 
      this.serverResponse = response.Message;
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("useremail", response.email);
      localStorage.setItem("userName", response.name);
      // console.log(response);
      localStorage.setItem("token", "Bearer " + response.token);
      // console.log(response.token);
      // this._loginService.getProfile().subscribe(res => console.log(res));
      // console.log(this._loginService.isLoggedIn());
      this.router.navigate(['/userDashboard']);
      // this.runProfile();
      // this.router.navigateByUrl('/home');
    }
  }


}

export class User{
  email : string
  password : string
}