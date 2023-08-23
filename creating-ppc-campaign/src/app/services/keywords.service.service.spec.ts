import { TestBed } from '@angular/core/testing';

import { KeywordsServiceService } from './keywords.service.service';

describe('KeywordsServiceService', () => {
  let service: KeywordsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeywordsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
