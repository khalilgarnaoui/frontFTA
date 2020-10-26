import { TestBed } from '@angular/core/testing';

import { CentreDeFormationService } from './centre-de-formation.service';

describe('CentreDeFormationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentreDeFormationService = TestBed.get(CentreDeFormationService);
    expect(service).toBeTruthy();
  });
});
