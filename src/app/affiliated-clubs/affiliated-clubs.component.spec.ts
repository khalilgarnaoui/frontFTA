import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedClubsComponent } from './affiliated-clubs.component';

describe('AffiliatedClubsComponent', () => {
  let component: AffiliatedClubsComponent;
  let fixture: ComponentFixture<AffiliatedClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatedClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
