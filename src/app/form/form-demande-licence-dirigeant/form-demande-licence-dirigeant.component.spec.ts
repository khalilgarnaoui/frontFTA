import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceDirigeantComponent } from './form-demande-licence-dirigeant.component';

describe('FormDemandeLicenceDirigeantComponent', () => {
  let component: FormDemandeLicenceDirigeantComponent;
  let fixture: ComponentFixture<FormDemandeLicenceDirigeantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceDirigeantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceDirigeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
