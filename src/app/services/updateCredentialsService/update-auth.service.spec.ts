import { TestBed } from '@angular/core/testing';

import { UpdateAuthService } from './update-auth.service';

describe('UpdateAuthService', () => {
  let service: UpdateAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
