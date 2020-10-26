import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMutationComponent } from './demande-mutation.component';

describe('DemandeMutationComponent', () => {
  let component: DemandeMutationComponent;
  let fixture: ComponentFixture<DemandeMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
