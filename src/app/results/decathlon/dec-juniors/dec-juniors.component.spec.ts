import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecJuniorsComponent } from './dec-juniors.component';

describe('DecJuniorsComponent', () => {
  let component: DecJuniorsComponent;
  let fixture: ComponentFixture<DecJuniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecJuniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecJuniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
