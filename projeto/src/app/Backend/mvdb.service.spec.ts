import { TestBed } from '@angular/core/testing';

import { MVDBService } from './mvdb.service';

describe('MVDBService', () => {
  let service: MVDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MVDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
