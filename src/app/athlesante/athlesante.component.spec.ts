import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthlesanteComponent } from './athlesante.component';

describe('AthlesanteComponent', () => {
  let component: AthlesanteComponent;
  let fixture: ComponentFixture<AthlesanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthlesanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthlesanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
