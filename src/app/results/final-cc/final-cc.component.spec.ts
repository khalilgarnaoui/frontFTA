import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCCComponent } from './final-cc.component';

describe('FinalCCComponent', () => {
  let component: FinalCCComponent;
  let fixture: ComponentFixture<FinalCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
