import { TestBed } from '@angular/core/testing';

import { CategoriePisteService } from './categorie-piste.service';

describe('CategoriePisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriePisteService = TestBed.get(CategoriePisteService);
    expect(service).toBeTruthy();
  });
});
