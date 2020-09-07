import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordinComponent } from './recordin.component';

describe('RecordinComponent', () => {
  let component: RecordinComponent;
  let fixture: ComponentFixture<RecordinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
