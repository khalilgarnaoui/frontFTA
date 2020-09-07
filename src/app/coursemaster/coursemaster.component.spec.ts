import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemasterComponent } from './coursemaster.component';

describe('CoursemasterComponent', () => {
  let component: CoursemasterComponent;
  let fixture: ComponentFixture<CoursemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
