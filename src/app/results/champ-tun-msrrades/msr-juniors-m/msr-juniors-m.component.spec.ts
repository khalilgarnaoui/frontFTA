import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrJuniorsMComponent } from './msr-juniors-m.component';

describe('MsrJuniorsMComponent', () => {
  let component: MsrJuniorsMComponent;
  let fixture: ComponentFixture<MsrJuniorsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrJuniorsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrJuniorsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
