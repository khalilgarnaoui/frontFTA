import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrJuniorsComponent } from './msr-juniors.component';

describe('MsrJuniorsComponent', () => {
  let component: MsrJuniorsComponent;
  let fixture: ComponentFixture<MsrJuniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrJuniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrJuniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
