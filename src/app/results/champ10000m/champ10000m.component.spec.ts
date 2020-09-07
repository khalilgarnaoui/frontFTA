import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ10000mComponent } from './champ10000m.component';

describe('Champ10000mComponent', () => {
  let component: Champ10000mComponent;
  let fixture: ComponentFixture<Champ10000mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champ10000mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champ10000mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
