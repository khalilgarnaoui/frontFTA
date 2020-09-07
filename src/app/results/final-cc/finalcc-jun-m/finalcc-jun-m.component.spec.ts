import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccJunMComponent } from './finalcc-jun-m.component';

describe('FinalccJunMComponent', () => {
  let component: FinalccJunMComponent;
  let fixture: ComponentFixture<FinalccJunMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccJunMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccJunMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
