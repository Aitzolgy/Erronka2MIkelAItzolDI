import { TestBed } from '@angular/core/testing';

import { JatetxeaService } from './jatetxea.service';

describe('JatetxeaService', () => {
  let service: JatetxeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JatetxeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
