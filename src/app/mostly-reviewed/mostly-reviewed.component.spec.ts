import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostlyReviewedComponent } from './mostly-reviewed.component';

describe('MostlyReviewedComponent', () => {
  let component: MostlyReviewedComponent;
  let fixture: ComponentFixture<MostlyReviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostlyReviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostlyReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
