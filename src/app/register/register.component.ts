import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new signUpUser("", "", "", "");
  public passwordMatch: boolean;
  public serverResponse = "";
  constructor(private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }
  onKey() {

    // Check if password and password2 matches.
    console.log(this.model.name);
    if (this.model.password && this.model.password2 != " ") {
      if (this.model.password === this.model.password2) {
        console.log("SAME");
        this.passwordMatch = true;
        console.log()
      }
      else {
        this.passwordMatch = false;
      }
    }

  }
  submitUser() {
    this.serverResponse = "Loading Please Wait";
    // this.ngxSpinner.show();
    // console.log(this.model);

    this._loginService.register(this.model.name, this.model.userEmail, this.model.password).subscribe(res =>
      this.setText(res)
    );
  }
  setText(response) {
    // console.log(Message);
    // Check wat response message contains (Last bug)
    if (response.Message === "Signed Up") {
      this._loginService.loginIn(this.model.userEmail, this.model.password)
        .subscribe(res =>
          this.registeredUserSignIn(res)
        );

      // this._loginService.getProfile().subscribe(res => console.log(res));
      console.log(this._loginService.isLoggedIn());
      // this.router.navigate(['/myProfile']);
    }
    else {

      this.serverResponse = response.Message;
    }
    console.log(response.Message);
  }
  registeredUserSignIn(response) {
    // console.log("Im here");
    this.serverResponse = response.Message;
    localStorage.setItem("userId", response.userId);
    localStorage.setItem("useremail", response.email);
    localStorage.setItem("userName", response.name);
    localStorage.setItem("token", "Bearer " + response.token);
    // console.log(response.token);
    console.log(this._loginService.isLoggedIn());
    this.router.navigate(['/userDashboard']);
  }

}
export class signUpUser {

  constructor(
    public name: string,
    public userEmail: string,
    public password: string,
    public password2: string
  ) {  }

}