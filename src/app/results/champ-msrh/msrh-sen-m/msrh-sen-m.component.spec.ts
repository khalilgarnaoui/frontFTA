import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrhSenMComponent } from './msrh-sen-m.component';

describe('MsrhSenMComponent', () => {
  let component: MsrhSenMComponent;
  let fixture: ComponentFixture<MsrhSenMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrhSenMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrhSenMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
