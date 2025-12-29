import { Component, HostListener, Inject, PLATFORM_ID, computed, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { SidebarFooter } from './sidebar-footer/sidebar-footer';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SidebarMenu,
    SidebarFooter,
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarLayoutComponent {
  auth = inject(AuthService);
  user = computed(() => this.auth.currentUser());
  isAuth = computed(() => this.auth.isAuthenticated());

  isMobile = false;
  isOpened = true;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 992;
      this.isOpened = !this.isMobile;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 992;
      this.isOpened = !this.isMobile;
    }
  }

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }

  logout() {
    this.auth.logout();
  }
}
