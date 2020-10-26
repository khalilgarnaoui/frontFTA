import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecathlonComponent } from './decathlon.component';

describe('DecathlonComponent', () => {
  let component: DecathlonComponent;
  let fixture: ComponentFixture<DecathlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecathlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
