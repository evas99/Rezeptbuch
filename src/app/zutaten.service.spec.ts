import { TestBed } from '@angular/core/testing';

import { ZutatenService } from './zutaten.service';

describe('ZutatenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZutatenService = TestBed.get(ZutatenService);
    expect(service).toBeTruthy();
  });
});
