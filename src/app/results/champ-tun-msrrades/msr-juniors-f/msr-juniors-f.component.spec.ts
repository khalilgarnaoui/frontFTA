import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrJuniorsFComponent } from './msr-juniors-f.component';

describe('MsrJuniorsFComponent', () => {
  let component: MsrJuniorsFComponent;
  let fixture: ComponentFixture<MsrJuniorsFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrJuniorsFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrJuniorsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
