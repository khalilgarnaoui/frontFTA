import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadriMinMComponent } from './quadri-min-m.component';

describe('QuadriMinMComponent', () => {
  let component: QuadriMinMComponent;
  let fixture: ComponentFixture<QuadriMinMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadriMinMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadriMinMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
