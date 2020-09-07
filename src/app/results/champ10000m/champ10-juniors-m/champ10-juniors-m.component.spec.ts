import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ10JuniorsMComponent } from './champ10-juniors-m.component';

describe('Champ10JuniorsMComponent', () => {
  let component: Champ10JuniorsMComponent;
  let fixture: ComponentFixture<Champ10JuniorsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champ10JuniorsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champ10JuniorsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
