import { TestBed } from '@angular/core/testing';

import { DashboardStockService } from './dashboard-stock.service';

describe('DashboardStockService', () => {
  let service: DashboardStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
