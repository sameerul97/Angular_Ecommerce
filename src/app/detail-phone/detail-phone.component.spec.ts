import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhoneComponent } from './detail-phone.component';

describe('DetailPhoneComponent', () => {
  let component: DetailPhoneComponent;
  let fixture: ComponentFixture<DetailPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
