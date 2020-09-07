import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeptathlonComponent } from './heptathlon.component';

describe('HeptathlonComponent', () => {
  let component: HeptathlonComponent;
  let fixture: ComponentFixture<HeptathlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeptathlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeptathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
