import { TestBed, inject } from '@angular/core/testing';

import { CurrentdateService } from './currentdate.service';

describe('CurrentdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentdateService]
    });
  });

  it('should be created', inject([CurrentdateService], (service: CurrentdateService) => {
    expect(service).toBeTruthy();
  }));
});
