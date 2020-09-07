import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceAthletePromotionComponent } from './form-demande-licence-athlete-promotion.component';

describe('FormDemandeLicenceAthletePromotionComponent', () => {
  let component: FormDemandeLicenceAthletePromotionComponent;
  let fixture: ComponentFixture<FormDemandeLicenceAthletePromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceAthletePromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceAthletePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
