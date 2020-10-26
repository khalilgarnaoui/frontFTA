import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhCdtFComponent } from './msrh-cdt-f.component';

describe('MsrhCdtFComponent', () => {
  let component: MsrhCdtFComponent;
  let fixture: ComponentFixture<MsrhCdtFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhCdtFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhCdtFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
