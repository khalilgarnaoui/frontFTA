import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalComponent } from './list-cal.component';

describe('ListCalComponent', () => {
  let component: ListCalComponent;
  let fixture: ComponentFixture<ListCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
