import { TestBed } from '@angular/core/testing';

import { NgbFormatterService } from './ngb-formatter.service';

describe('NgbFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbFormatterService = TestBed.get(NgbFormatterService);
    expect(service).toBeTruthy();
  });
});
