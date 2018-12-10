import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestComponent } from './test/test.component';
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { DetailPhoneComponent } from './detail-phone/detail-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    AllPhonesComponent,
    HomepageComponent,
    BestSellingComponent,
    DetailPhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
