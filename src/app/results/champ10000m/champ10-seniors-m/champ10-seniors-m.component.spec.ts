import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ10SeniorsMComponent } from './champ10-seniors-m.component';

describe('Champ10SeniorsMComponent', () => {
  let component: Champ10SeniorsMComponent;
  let fixture: ComponentFixture<Champ10SeniorsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champ10SeniorsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champ10SeniorsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
