import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeLicenceRunnerComponent } from './form-demande-licence-runner.component';

describe('FormDemandeLicenceRunnerComponent', () => {
  let component: FormDemandeLicenceRunnerComponent;
  let fixture: ComponentFixture<FormDemandeLicenceRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeLicenceRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeLicenceRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
