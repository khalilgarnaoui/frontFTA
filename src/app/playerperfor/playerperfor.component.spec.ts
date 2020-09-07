import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerperforComponent } from './playerperfor.component';

describe('PlayerperforComponent', () => {
  let component: PlayerperforComponent;
  let fixture: ComponentFixture<PlayerperforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerperforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerperforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
