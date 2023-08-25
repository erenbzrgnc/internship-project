import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { campaigntypeResolver } from './campaigntype.resolver';

describe('campaigntypeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => campaigntypeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
