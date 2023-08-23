import { TestBed } from '@angular/core/testing';

import { CampaignsServiceService } from './campaigns.service.service';

describe('CampaignsServiceService', () => {
  let service: CampaignsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
