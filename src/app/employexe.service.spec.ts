import { TestBed } from '@angular/core/testing';

import { EmployexeService } from './employexe.service';

describe('EmployexeService', () => {
  let service: EmployexeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployexeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
