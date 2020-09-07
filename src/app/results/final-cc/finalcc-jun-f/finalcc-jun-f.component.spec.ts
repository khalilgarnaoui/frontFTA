import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccJunFComponent } from './finalcc-jun-f.component';

describe('FinalccJunFComponent', () => {
  let component: FinalccJunFComponent;
  let fixture: ComponentFixture<FinalccJunFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccJunFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccJunFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
