import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionFederaleComponent } from './commission-federale.component';

describe('CommissionFederaleComponent', () => {
  let component: CommissionFederaleComponent;
  let fixture: ComponentFixture<CommissionFederaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionFederaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionFederaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
