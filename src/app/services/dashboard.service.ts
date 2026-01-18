import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard.models';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private API = 'http://localhost:3004/api/dashboards';
  private TOKEN = '58ebfdf7f1f558c5c86e17f6'; // static token

  constructor(private http: HttpClient) {}

  getDashboardById(id: string): Observable<Dashboard> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
    });

    return this.http.get<Dashboard>(`${this.API}/${id}`, { headers });
  }

  // Masalan keyinchalik POST / PUT uchun typed method
  saveDashboard(dashboard: Dashboard): Observable<Dashboard> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
    });

    return this.http.put<Dashboard>(`${this.API}/${dashboard.id}`, dashboard, { headers });
  }
}
