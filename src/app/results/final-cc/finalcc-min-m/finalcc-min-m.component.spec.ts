import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccMinMComponent } from './finalcc-min-m.component';

describe('FinalccMinMComponent', () => {
  let component: FinalccMinMComponent;
  let fixture: ComponentFixture<FinalccMinMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccMinMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccMinMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
