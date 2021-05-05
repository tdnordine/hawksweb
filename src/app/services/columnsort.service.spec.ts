import { TestBed } from '@angular/core/testing';

import { ColumnsortService } from './columnsort.service';

describe('ColumnsortService', () => {
  let service: ColumnsortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnsortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
