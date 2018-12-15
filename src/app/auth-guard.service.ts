import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    // isAutheticated returns true if the token is expired else if the token is valid it returns false  
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/login', { message: "Please Log in" }]);
      return false;
      // false means its not autheticated yet
    }
    return true;
  }
}