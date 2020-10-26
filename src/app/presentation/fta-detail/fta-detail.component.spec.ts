import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtaDetailComponent } from './fta-detail.component';

describe('FtaDetailComponent', () => {
  let component: FtaDetailComponent;
  let fixture: ComponentFixture<FtaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
