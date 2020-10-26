import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAffiliationComponent } from './demande-affiliation.component';

describe('DemandeAffiliationComponent', () => {
  let component: DemandeAffiliationComponent;
  let fixture: ComponentFixture<DemandeAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
