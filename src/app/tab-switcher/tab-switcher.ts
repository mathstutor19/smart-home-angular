import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { DeviceComponent } from '../device/device';
import { SensorComponent } from '../sensor/sensor';

import { Tab } from '../models/tab.model';
import { loadDashboard } from '../store/dashboard.actions';
import { selectTabs } from '../store/dashboard.selectors';

@Component({
  selector: 'app-tab-switcher',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    DeviceComponent,
    SensorComponent,
  ],
  templateUrl: './tab-switcher.html',
  styleUrls: ['./tab-switcher.scss'],
})
export class TabSwitcher implements OnInit {
  tabs$: Observable<Tab[]>;
  selectedIndex = 0;

  constructor(private store: Store) {
    this.tabs$ = this.store.select(selectTabs);
  }

  ngOnInit(): void {
    this.store.dispatch(loadDashboard({ dashboardId: 'overview' }));
  }
}
