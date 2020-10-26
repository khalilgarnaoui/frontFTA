import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceAthleteComponent } from './form-demande-licence-athlete.component';

describe('FormDemandeLicenceAthleteComponent', () => {
  let component: FormDemandeLicenceAthleteComponent;
  let fixture: ComponentFixture<FormDemandeLicenceAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceAthleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
