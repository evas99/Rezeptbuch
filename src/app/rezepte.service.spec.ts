import { TestBed } from '@angular/core/testing';

import { RezepteService } from './rezepte.service';

describe('RezepteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RezepteService = TestBed.get(RezepteService);
    expect(service).toBeTruthy();
  });
});
