import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestComponent } from './test/test.component';
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { DetailPhoneComponent } from './detail-phone/detail-phone.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MostlyWishedComponent } from './mostly-wished/mostly-wished.component';
import { MostlyReviewedComponent } from './mostly-reviewed/mostly-reviewed.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ReLoginComponent } from './re-login/re-login.component';
import { BasketComponent } from './basket/basket.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    AllPhonesComponent,
    HomepageComponent,
    BestSellingComponent,
    DetailPhoneComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MostlyWishedComponent,
    MostlyReviewedComponent,
    UserDashboardComponent,
    ReLoginComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
