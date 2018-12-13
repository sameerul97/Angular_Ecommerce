import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostlyWishedComponent } from './mostly-wished.component';

describe('MostlyWishedComponent', () => {
  let component: MostlyWishedComponent;
  let fixture: ComponentFixture<MostlyWishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostlyWishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostlyWishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
