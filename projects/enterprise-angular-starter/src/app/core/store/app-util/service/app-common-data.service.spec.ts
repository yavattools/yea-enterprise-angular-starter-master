import { TestBed, inject } from '@angular/core/testing';

import { AppCommonDataService } from './app-common-data.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCommonDataService]
    });
  });

  it('should ...', inject([AppCommonDataService], (service: AppCommonDataService) => {
    expect(service).toBeTruthy();
  }));
});
