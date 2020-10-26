import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenjaminMinimeComponent } from './benjamin-minime.component';

describe('BenjaminMinimeComponent', () => {
  let component: BenjaminMinimeComponent;
  let fixture: ComponentFixture<BenjaminMinimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenjaminMinimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenjaminMinimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
