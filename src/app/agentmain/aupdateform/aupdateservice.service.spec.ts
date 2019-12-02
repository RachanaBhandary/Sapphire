import { TestBed } from '@angular/core/testing';

import { AupdateserviceService } from './aupdateservice.service';

describe('AupdateserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AupdateserviceService = TestBed.get(AupdateserviceService);
    expect(service).toBeTruthy();
  });
});
