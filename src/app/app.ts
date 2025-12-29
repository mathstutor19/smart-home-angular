import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarLayoutComponent, CommonModule, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  authService = inject(AuthService);
}
