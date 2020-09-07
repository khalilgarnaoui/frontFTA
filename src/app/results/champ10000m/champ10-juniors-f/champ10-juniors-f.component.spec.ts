import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ10JuniorsFComponent } from './champ10-juniors-f.component';

describe('Champ10JuniorsFComponent', () => {
  let component: Champ10JuniorsFComponent;
  let fixture: ComponentFixture<Champ10JuniorsFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Champ10JuniorsFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Champ10JuniorsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
