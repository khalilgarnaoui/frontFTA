import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccCdtMComponent } from './finalcc-cdt-m.component';

describe('FinalccCdtMComponent', () => {
  let component: FinalccCdtMComponent;
  let fixture: ComponentFixture<FinalccCdtMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccCdtMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccCdtMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
