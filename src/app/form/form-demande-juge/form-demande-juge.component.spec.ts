import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeJugeComponent } from './form-demande-juge.component';

describe('FormDemandeJugeComponent', () => {
  let component: FormDemandeJugeComponent;
  let fixture: ComponentFixture<FormDemandeJugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeJugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeJugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
