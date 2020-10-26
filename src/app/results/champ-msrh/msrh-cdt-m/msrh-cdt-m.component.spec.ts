import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhCdtMComponent } from './msrh-cdt-m.component';

describe('MsrhCdtMComponent', () => {
  let component: MsrhCdtMComponent;
  let fixture: ComponentFixture<MsrhCdtMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhCdtMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhCdtMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
