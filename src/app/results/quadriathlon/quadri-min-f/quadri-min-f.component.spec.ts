import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadriMinFComponent } from './quadri-min-f.component';

describe('QuadriMinFComponent', () => {
  let component: QuadriMinFComponent;
  let fixture: ComponentFixture<QuadriMinFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadriMinFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadriMinFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
