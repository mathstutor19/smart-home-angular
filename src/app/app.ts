import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarLayoutComponent, CommonModule, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private auth = inject(AuthService);
  isAuth = computed(() => this.auth.isAuthenticated());
}
