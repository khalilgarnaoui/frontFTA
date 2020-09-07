import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhJunMComponent } from './msrh-jun-m.component';

describe('MsrhJunMComponent', () => {
  let component: MsrhJunMComponent;
  let fixture: ComponentFixture<MsrhJunMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhJunMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhJunMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
