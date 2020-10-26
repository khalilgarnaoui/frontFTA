import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecSeniorsComponent } from './dec-seniors.component';

describe('DecSeniorsComponent', () => {
  let component: DecSeniorsComponent;
  let fixture: ComponentFixture<DecSeniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecSeniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecSeniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
