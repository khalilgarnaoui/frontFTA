import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formation20Component } from './formation20.component';

describe('Formation20Component', () => {
  let component: Formation20Component;
  let fixture: ComponentFixture<Formation20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formation20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formation20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
