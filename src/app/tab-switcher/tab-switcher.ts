import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HighlightOnDirective } from '../highlight';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DeviceComponent } from '../device/device';
import { SensorComponent } from '../sensor/sensor';
import { DashboardService } from '../services/dashboard.service';
import { Tab } from '../models/tab.model';

@Component({
  selector: 'app-tab-switcher',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCardModule,
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    DeviceComponent,
    SensorComponent,
  ],
  templateUrl: './tab-switcher.html',
  styleUrls: ['./tab-switcher.scss'],
})
export class TabSwitcher implements OnInit {
  tabs: Tab[] = [];
  selectedIndex = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadDashboardTabs('overview'); // default dashboardId, keyinchalik route’dan olinadi
  }

  loadDashboardTabs(dashboardId: string) {
    this.dashboardService.getDashboardById(dashboardId).subscribe({
      next: (data) => {
        this.tabs = data.tabs || [];
        this.selectedIndex = 0;
      },
      error: (err) => {
        console.error('Error loading tabs:', err);
        this.tabs = [];
      },
    });
  }
}
