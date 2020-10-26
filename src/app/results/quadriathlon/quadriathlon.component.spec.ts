import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadriathlonComponent } from './quadriathlon.component';

describe('QuadriathlonComponent', () => {
  let component: QuadriathlonComponent;
  let fixture: ComponentFixture<QuadriathlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadriathlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadriathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
