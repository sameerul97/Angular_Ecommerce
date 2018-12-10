import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component'
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailPhoneComponent } from './detail-phone/detail-phone.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'allPhones',
    component: AllPhonesComponent
  },
  {
    path: 'mobilePhone',
    component: DetailPhoneComponent
  },
  {
    path: '**',
    component: TestComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
