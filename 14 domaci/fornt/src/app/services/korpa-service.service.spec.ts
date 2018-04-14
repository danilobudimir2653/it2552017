import { TestBed, inject } from '@angular/core/testing';

import { KorpaServiceService } from './korpa-service.service';

describe('KorpaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KorpaServiceService]
    });
  });

  it('should be created', inject([KorpaServiceService], (service: KorpaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
