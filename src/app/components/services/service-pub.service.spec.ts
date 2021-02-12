import { TestBed } from '@angular/core/testing';

import { ServicePubService } from './service-pub.service';

describe('ServicePubService', () => {
  let service: ServicePubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
