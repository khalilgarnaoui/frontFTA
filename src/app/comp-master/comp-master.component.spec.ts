import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMasterComponent } from './comp-master.component';

describe('CompMasterComponent', () => {
  let component: CompMasterComponent;
  let fixture: ComponentFixture<CompMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
