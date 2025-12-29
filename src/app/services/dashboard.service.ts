import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tab } from '../models/tab.model';

export interface Dashboard {
  id: string;
  title: string;
  icon: string;
}

export interface DashboardDetails {
  tabs: Tab[];
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:3004/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getDashboards(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(`${this.baseUrl}/dashboards`, {
      headers: this.getAuthHeaders(),
    });
  }

  getDashboardById(dashboardId: string): Observable<DashboardDetails> {
    return this.http.get<DashboardDetails>(`${this.baseUrl}/dashboards/${dashboardId}`, {
      headers: this.getAuthHeaders(),
    });
  }

  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/devices`, {
      headers: this.getAuthHeaders(),
    });
  }
}
