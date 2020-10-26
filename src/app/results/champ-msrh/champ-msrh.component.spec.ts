import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampMSRHComponent } from './champ-msrh.component';

describe('ChampMSRHComponent', () => {
  let component: ChampMSRHComponent;
  let fixture: ComponentFixture<ChampMSRHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampMSRHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampMSRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
