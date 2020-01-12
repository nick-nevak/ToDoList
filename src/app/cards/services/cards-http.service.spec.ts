import { TestBed } from '@angular/core/testing';

import { CardsHttpService } from './cards-http.service';

describe('CardsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsHttpService = TestBed.get(CardsHttpService);
    expect(service).toBeTruthy();
  });
});
