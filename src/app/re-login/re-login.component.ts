import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-re-login',
  templateUrl: './re-login.component.html',
  styleUrls: ['./re-login.component.css']
})
export class ReLoginComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  public myUsername = "";
  public myPassword = "";
  public serverResponse;
  constructor(private loginService: LoginService,
    private router: Router) { }
  public useremail = localStorage.getItem("useremail");

  ngOnInit() {
    // localStorage.getItem("userName")

  }
  show() {
    // console.log(myObj);
    jQuery("#myModal").modal('show');


    // jQuery(this.myModal.nativeElement).modal('show'); 

    // jQuery(this.myModal.nativeElement).modal('show'); 
  }
  reLogin() {
    if (this.useremail == this.myUsername) {
      console.log(this.myUsername);
      console.log(this.myPassword);
      this.loginService.loginIn(this.myUsername, this.myPassword).subscribe(res => this.setupUser(res));
      // jQuery("#myModal").modal('hide');
    }
    else {
      this.serverResponse = "Not same user"
    }


  }
  signOut() {
    console.log("Sign Out");
    this.loginService.signMeOut();

    this.router.navigate(['/home']);

  }

  setupUser(response) {
    if (response.Message != "Okay") {
      // Unsuccessful Return
      console.log(response.Message);
      this.serverResponse = response.Message;
    } else {
      // Successful user accomplised
      // Get the token and store it 
      // console.log(response.Message);
      this.serverResponse = response.Message;
      localStorage.setItem("userName", response.name);
      localStorage.setItem("email", response.email);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("token", "Bearer " + response.token);
      console.log(response);
      this.serverResponse = "";
      jQuery("#myModal").modal('hide');
      // jQuery("#myModal").modal('hide');

      // this._loginService.getProfile().subscribe(res => console.log(res));
      // console.log(this._loginService.isLoggedIn());
      // this.router.navigate(['/myProfile']);
      // this.runProfile();
      // this.router.navigateByUrl('/home');
    }
  }
}
