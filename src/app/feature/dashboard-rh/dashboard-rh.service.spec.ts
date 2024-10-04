import { TestBed } from '@angular/core/testing';

import { DashboardRHService } from './dashboard-rh.service';

describe('DashboardRHService', () => {
  let service: DashboardRHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardRHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


