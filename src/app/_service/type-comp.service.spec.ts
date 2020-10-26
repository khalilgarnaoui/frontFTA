import { TestBed } from '@angular/core/testing';

import { TypeCompService } from './type-comp.service';

describe('TypeCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCompService = TestBed.get(TypeCompService);
    expect(service).toBeTruthy();
  });
});
