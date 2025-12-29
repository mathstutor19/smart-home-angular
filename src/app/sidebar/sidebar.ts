import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidebarFooter } from './sidebar-footer/sidebar-footer';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    SidebarFooter,
    SidebarMenu,
    CommonModule, // <<--- bu qo‘shildi
    NgIf, // <<--- directive sifatida qo‘shish mumkin
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarLayoutComponent implements OnInit {
  isMobile = false;
  isOpened = true;
  isBrowser = false;

  // AuthService inject qilindi
  private auth = inject(AuthService);
  user = computed(() => this.auth.currentUser());
  isAuth = computed(() => this.auth.isAuthenticated());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateLayout();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.updateLayout();
    }
  }

  updateLayout() {
    this.isMobile = window.innerWidth < 992;
    this.isOpened = !this.isMobile;
  }

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }

  logout() {
    this.auth.logout();
  }
}
