import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccMinFComponent } from './finalcc-min-f.component';

describe('FinalccMinFComponent', () => {
  let component: FinalccMinFComponent;
  let fixture: ComponentFixture<FinalccMinFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccMinFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccMinFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
