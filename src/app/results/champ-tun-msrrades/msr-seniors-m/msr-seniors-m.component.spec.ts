import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrSeniorsMComponent } from './msr-seniors-m.component';

describe('MsrSeniorsMComponent', () => {
  let component: MsrSeniorsMComponent;
  let fixture: ComponentFixture<MsrSeniorsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrSeniorsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrSeniorsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
