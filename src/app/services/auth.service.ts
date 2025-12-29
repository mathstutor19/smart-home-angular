import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface User {
  userName: string;
  password?: string;
  fullName: string;
  initials: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:3004/users';

  isAuthenticated = signal<boolean>(false);
  currentUser = signal<User | null>(null);
  error = signal<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const user: User = JSON.parse(userData);
        this.currentUser.set(user);
        this.isAuthenticated.set(true);
      }
    }
  }

  login(userName: string, password: string) {
    this.error.set(null);

    this.http.get<User[]>(this.API).subscribe({
      next: (users) => {
        const user = users.find((u) => u.userName === userName && u.password === password);

        if (!user) {
          this.error.set('Invalid login or password.');
          return;
        }

        if (typeof window !== 'undefined') {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        this.currentUser.set(user);
        this.isAuthenticated.set(true);
        this.router.navigate(['/dashboard']);
        // Dashboardga o‘tmasin, shunchaki sidebar ko‘rsin
        // this.router.navigate(['/']); // komment qildik
      },
      error: () => {
        this.error.set('Unknown error occurred. Please try again later.');
      },
    });
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}
