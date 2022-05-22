import { TestBed } from '@angular/core/testing';

import { AvDesignService } from './av-design.service';

describe('AvDesignService', () => {
  let service: AvDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
