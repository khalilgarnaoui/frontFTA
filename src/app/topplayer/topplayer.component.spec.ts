import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopplayerComponent } from './topplayer.component';

describe('TopplayerComponent', () => {
  let component: TopplayerComponent;
  let fixture: ComponentFixture<TopplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
