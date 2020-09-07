import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementLicenseComponent } from './engagement-license.component';

describe('EngagementLicenseComponent', () => {
  let component: EngagementLicenseComponent;
  let fixture: ComponentFixture<EngagementLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
