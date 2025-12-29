import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TokenService } from './token.service';

interface UserProfile {
  fullName: string;
  initials: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticatedSubject.asObservable();

  private userSubject = new BehaviorSubject<UserProfile | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  checkAuthOnAppStart(): void {
    const token = this.tokenService.getToken();
    if (!token) return;

    this.http.get<UserProfile>('/user/profile').subscribe({
      next: (user) => {
        this.authenticatedSubject.next(true);
        this.userSubject.next(user);
      },
      error: () => {
        this.logout();
      },
    });
  }

  login(userName: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/user/login', { userName, password }).pipe(
      tap((res) => {
        this.tokenService.setToken(res.token);
        this.checkAuthOnAppStart();
      })
    );
  }

  logout(): void {
    this.tokenService.clearToken();
    this.authenticatedSubject.next(false);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
