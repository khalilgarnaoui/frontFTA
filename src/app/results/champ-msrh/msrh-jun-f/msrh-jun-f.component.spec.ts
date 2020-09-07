import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhJunFComponent } from './msrh-jun-f.component';

describe('MsrhJunFComponent', () => {
  let component: MsrhJunFComponent;
  let fixture: ComponentFixture<MsrhJunFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhJunFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhJunFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
