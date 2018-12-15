import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component'
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailPhoneComponent } from './detail-phone/detail-phone.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CanActivate } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'allPhones', component: AllPhonesComponent },
  { path: 'mobilePhone/:mobileId', component: DetailPhoneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userDashboard', component: UserDashboardComponent, canActivate: [AuthGuardService] },
  { path: 'basket', component: BasketComponent, canActivate: [AuthGuardService] },
  { path: '**', component: TestComponent }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
