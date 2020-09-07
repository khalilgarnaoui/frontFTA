import { TestBed } from '@angular/core/testing';

import { CommissionFederaleService } from './commission-federale.service';

describe('CommissionFederaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommissionFederaleService = TestBed.get(CommissionFederaleService);
    expect(service).toBeTruthy();
  });
});
