import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedClubComponent } from './affiliated-club.component';

describe('AffiliatedClubComponent', () => {
  let component: AffiliatedClubComponent;
  let fixture: ComponentFixture<AffiliatedClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatedClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
