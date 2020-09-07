import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordfemComponent } from './recordfem.component';

describe('RecordfemComponent', () => {
  let component: RecordfemComponent;
  let fixture: ComponentFixture<RecordfemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordfemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordfemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
