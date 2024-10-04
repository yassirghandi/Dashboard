import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardappsComponent } from './dashboardapps.component';

describe('DashboardappsComponent', () => {
  let component: DashboardappsComponent;
  let fixture: ComponentFixture<DashboardappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardappsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
