import { TestBed } from '@angular/core/testing';

import { LoginLaravelService } from './login-laravel.service';

describe('LoginLaravelService', () => {
  let service: LoginLaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
