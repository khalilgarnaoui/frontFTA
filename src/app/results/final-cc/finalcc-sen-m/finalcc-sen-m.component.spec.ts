import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalccSenMComponent } from './finalcc-sen-m.component';

describe('FinalccSenMComponent', () => {
  let component: FinalccSenMComponent;
  let fixture: ComponentFixture<FinalccSenMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalccSenMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalccSenMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
