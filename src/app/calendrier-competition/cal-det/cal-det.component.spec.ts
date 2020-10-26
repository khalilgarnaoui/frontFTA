import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDetComponent } from './cal-det.component';

describe('CalDetComponent', () => {
  let component: CalDetComponent;
  let fixture: ComponentFixture<CalDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
