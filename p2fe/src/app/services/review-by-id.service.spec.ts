import { TestBed } from '@angular/core/testing';

import { ReviewByIdService } from './review-by-id.service';

describe('ReviewByIdService', () => {
  let service: ReviewByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
