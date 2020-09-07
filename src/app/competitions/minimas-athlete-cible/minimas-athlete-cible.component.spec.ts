import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimasAthleteCibleComponent } from './minimas-athlete-cible.component';

describe('MinimasAthleteCibleComponent', () => {
  let component: MinimasAthleteCibleComponent;
  let fixture: ComponentFixture<MinimasAthleteCibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimasAthleteCibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimasAthleteCibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
