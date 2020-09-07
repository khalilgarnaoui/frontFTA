import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampArCComponent } from './champ-ar-c.component';

describe('ChampArCComponent', () => {
  let component: ChampArCComponent;
  let fixture: ComponentFixture<ChampArCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampArCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampArCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
