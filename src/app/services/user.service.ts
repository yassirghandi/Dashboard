import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'your_backend_api_url';

  constructor(private http :HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {
          if (response && response.User && response.Application) {
            // Store user details and token in localStorage
            localStorage.setItem('currentUser', JSON.stringify(response));
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
  }


  isLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    return !!user;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
