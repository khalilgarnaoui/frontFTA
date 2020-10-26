import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceMasterComponent } from './form-demande-licence-master.component';

describe('FormDemandeLicenceMasterComponent', () => {
  let component: FormDemandeLicenceMasterComponent;
  let fixture: ComponentFixture<FormDemandeLicenceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
