import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    const apiRequest = req.clone({
      url: req.url.startsWith('/api') ? req.url : `/api${req.url}`,
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return next.handle(apiRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.tokenService.clearToken();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
