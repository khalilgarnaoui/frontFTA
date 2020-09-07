import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerpalmaresComponent } from './playerpalmares.component';

describe('PlayerpalmaresComponent', () => {
  let component: PlayerpalmaresComponent;
  let fixture: ComponentFixture<PlayerpalmaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerpalmaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerpalmaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
