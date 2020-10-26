import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecCadetComponent } from './dec-cadet.component';

describe('DecCadetComponent', () => {
  let component: DecCadetComponent;
  let fixture: ComponentFixture<DecCadetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecCadetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecCadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
