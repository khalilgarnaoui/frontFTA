import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhMinFComponent } from './msrh-min-f.component';

describe('MsrhMinFComponent', () => {
  let component: MsrhMinFComponent;
  let fixture: ComponentFixture<MsrhMinFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhMinFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhMinFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
