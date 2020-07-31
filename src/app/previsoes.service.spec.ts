import { TestBed } from '@angular/core/testing';

import { PrevisoesService } from './previsoes.service';

describe('PrevisoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevisoesService = TestBed.get(PrevisoesService);
    expect(service).toBeTruthy();
  });
});
