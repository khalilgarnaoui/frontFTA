import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLigueComponent } from './single-ligue.component';

describe('SingleLigueComponent', () => {
  let component: SingleLigueComponent;
  let fixture: ComponentFixture<SingleLigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
