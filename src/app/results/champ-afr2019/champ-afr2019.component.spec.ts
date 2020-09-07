import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampAfr2019Component } from './champ-afr2019.component';

describe('ChampAfr2019Component', () => {
  let component: ChampAfr2019Component;
  let fixture: ComponentFixture<ChampAfr2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampAfr2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampAfr2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
