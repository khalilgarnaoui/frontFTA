import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrSeniorsFComponent } from './msr-seniors-f.component';

describe('MsrSeniorsFComponent', () => {
  let component: MsrSeniorsFComponent;
  let fixture: ComponentFixture<MsrSeniorsFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrSeniorsFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrSeniorsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
