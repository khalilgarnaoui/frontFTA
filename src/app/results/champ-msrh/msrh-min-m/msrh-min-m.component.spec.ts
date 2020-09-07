import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhMinMComponent } from './msrh-min-m.component';

describe('MsrhMinMComponent', () => {
  let component: MsrhMinMComponent;
  let fixture: ComponentFixture<MsrhMinMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhMinMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhMinMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
