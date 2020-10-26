import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccSenFComponent } from './finalcc-sen-f.component';

describe('FinalccSenFComponent', () => {
  let component: FinalccSenFComponent;
  let fixture: ComponentFixture<FinalccSenFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccSenFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccSenFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
