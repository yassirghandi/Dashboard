import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardRhData } from 'src/app/models/DashboardRhData';

@Injectable({
  providedIn: 'root'
})
export class DashboardRHService {

  private apiUrl = 'https://your-api-endpoint.com/dashboard';

  constructor(private http: HttpClient) { }

  // Fetch dashboard data from API
  getDashboardData(): Observable<DashboardRhData> {
    return this.http.get<DashboardRhData>(this.apiUrl);
  }

}
