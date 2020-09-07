import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccCdtFComponent } from './finalcc-cdt-f.component';

describe('FinalccCdtFComponent', () => {
  let component: FinalccCdtFComponent;
  let fixture: ComponentFixture<FinalccCdtFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccCdtFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccCdtFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
