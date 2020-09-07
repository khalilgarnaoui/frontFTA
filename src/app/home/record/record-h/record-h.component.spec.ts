import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordHComponent } from './record-h.component';

describe('RecordHComponent', () => {
  let component: RecordHComponent;
  let fixture: ComponentFixture<RecordHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
