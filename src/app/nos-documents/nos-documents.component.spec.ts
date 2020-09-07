import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosDocumentsComponent } from './nos-documents.component';

describe('NosDocumentsComponent', () => {
  let component: NosDocumentsComponent;
  let fixture: ComponentFixture<NosDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
