import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhSenFComponent } from './msrh-sen-f.component';

describe('MsrhSenFComponent', () => {
  let component: MsrhSenFComponent;
  let fixture: ComponentFixture<MsrhSenFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhSenFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhSenFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
