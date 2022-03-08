import { TestBed } from '@angular/core/testing';

import { LogoutLaravelService } from './logout-laravel.service';

describe('LogoutLaravelService', () => {
  let service: LogoutLaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutLaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
