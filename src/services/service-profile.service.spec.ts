import { TestBed } from '@angular/core/testing';

import { TeachersService } from 'src/services/service-profile.service';

describe('ServiceProfileService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
