import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSessionComponent } from './demande-session.component';

describe('DemandeSessionComponent', () => {
  let component: DemandeSessionComponent;
  let fixture: ComponentFixture<DemandeSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
