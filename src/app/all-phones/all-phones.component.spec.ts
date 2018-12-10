import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhonesComponent } from './all-phones.component';

describe('AllPhonesComponent', () => {
  let component: AllPhonesComponent;
  let fixture: ComponentFixture<AllPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
