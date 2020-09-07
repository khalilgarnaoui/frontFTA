import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceEntraineurComponent } from './form-demande-licence-entraineur.component';

describe('FormDemandeLicenceEntraineurComponent', () => {
  let component: FormDemandeLicenceEntraineurComponent;
  let fixture: ComponentFixture<FormDemandeLicenceEntraineurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceEntraineurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceEntraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
