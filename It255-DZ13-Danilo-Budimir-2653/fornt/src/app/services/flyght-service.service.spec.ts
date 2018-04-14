import { TestBed, inject } from '@angular/core/testing';

import { FlyghtServiceService } from './flyght-service.service';

describe('FlyghtServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyghtServiceService]
    });
  });

  it('should be created', inject([FlyghtServiceService], (service: FlyghtServiceService) => {
    expect(service).toBeTruthy();
  }));
});
