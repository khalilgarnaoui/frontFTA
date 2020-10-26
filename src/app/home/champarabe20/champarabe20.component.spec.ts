import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champarabe20Component } from './champarabe20.component';

describe('Champarabe20Component', () => {
  let component: Champarabe20Component;
  let fixture: ComponentFixture<Champarabe20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champarabe20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champarabe20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
