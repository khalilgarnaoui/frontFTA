import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampTunMSRradesComponent } from './champ-tun-msrrades.component';

describe('ChampTunMSRradesComponent', () => {
  let component: ChampTunMSRradesComponent;
  let fixture: ComponentFixture<ChampTunMSRradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampTunMSRradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampTunMSRradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
