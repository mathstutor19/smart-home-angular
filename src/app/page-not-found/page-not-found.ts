import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.scss'],
})
export class PageNotFound {
  private auth = inject(AuthService);
  isAuth = computed(() => this.auth.isAuthenticated());
}
