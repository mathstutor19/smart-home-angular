import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;

    const { userName, password } = this.loginForm.value;

    this.http.get<any[]>('http://localhost:3004/users/').subscribe({
      next: (users) => {
        this.isLoading = false;

        const user = users.find((u) => u.userName === userName && u.password === password);

        if (user) {
          // 🔐 Token saqlash
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user));

          // 👉 Sidebar sahifaga o'tish
          this.router.navigate(['/dashboard']).then((success) => {
            console.log('Navigation success:', success);
          });
        } else {
          this.errorMessage = 'Invalid login or password.';
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unknown error occurred. Please try again later.';
      },
    });
  }
}
