import { TestBed } from '@angular/core/testing';

import { EinkaufslisteService } from './einkaufsliste.service';

describe('EinkaufslisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EinkaufslisteService = TestBed.get(EinkaufslisteService);
    expect(service).toBeTruthy();
  });
});
