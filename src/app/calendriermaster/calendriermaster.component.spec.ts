import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendriermasterComponent } from './calendriermaster.component';

describe('CalendriermasterComponent', () => {
  let component: CalendriermasterComponent;
  let fixture: ComponentFixture<CalendriermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendriermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendriermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
