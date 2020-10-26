import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ10SeniorsFComponent } from './champ10-seniors-f.component';

describe('Champ10SeniorsFComponent', () => {
  let component: Champ10SeniorsFComponent;
  let fixture: ComponentFixture<Champ10SeniorsFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champ10SeniorsFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champ10SeniorsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
