import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampPisteComponent } from './champ-piste.component';

describe('ChampPisteComponent', () => {
  let component: ChampPisteComponent;
  let fixture: ComponentFixture<ChampPisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampPisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
