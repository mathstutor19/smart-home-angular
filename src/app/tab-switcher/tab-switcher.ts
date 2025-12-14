import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HighlightOnDirective } from '../highlight';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIcon } from '@angular/material/icon';
import { SensorValuePipe } from '../sensor-value-pipe';
import { FormsModule } from '@angular/forms';
import { DeviceComponent } from '../device/device';
import { SensorComponent } from '../sensor/sensor';

interface SensorValue {
  amount: number;
  unit: string;
}

interface DeviceItem {
  type: 'device';
  icon: string;
  label: string;
  state: boolean;
}

interface SensorItem {
  type: 'sensor';
  icon: string;
  label: string;
  value: SensorValue;
}

type CardItem = DeviceItem | SensorItem;

interface Card {
  id: string;
  title: string;
  layout: 'singleDevice' | 'horizontalLayout' | 'verticalLayout';
  items: CardItem[];
}

interface Tab {
  id: string;
  title: string;
  cards: Card[];
}
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
export class TabSwitcher {
  tabs: Tab[] = [
    {
      id: 'overview',
      title: 'Overview',
      cards: [
        {
          id: 'balcony-weather',
          title: 'Balcony',
          layout: 'horizontalLayout',
          items: [
            {
              type: 'sensor',
              icon: 'thermostat',
              label: 'Temperature',
              value: { amount: 18.5, unit: '°C' },
            },
            {
              type: 'sensor',
              icon: 'water_drop',
              label: 'Humidity',
              value: { amount: 72, unit: '%' },
            },
            {
              type: 'sensor',
              icon: 'cloud',
              label: 'Weather',
              value: { amount: 1, unit: 'clear' },
            },
          ],
        },
        {
          id: 'indoor-rooms',
          title: 'Rooms',
          layout: 'verticalLayout',
          items: [
            {
              type: 'sensor',
              icon: 'co2',
              label: 'CO2 Sensor',
              value: { amount: 520, unit: 'ppm' },
            },
            {
              type: 'sensor',
              icon: 'water_drop',
              label: 'Humidity',
              value: { amount: 45, unit: '%' },
            },
          ],
        },
        {
          id: 'bathroom-motion',
          title: 'Bathroom',
          layout: 'singleDevice',
          items: [
            {
              type: 'sensor',
              icon: 'motion_photos_on',
              label: 'Motion Sensor',
              value: { amount: 1, unit: 'detected' },
            },
          ],
        },
        {
          id: 'living-room-mixed',
          title: 'Living Room',
          layout: 'verticalLayout',
          items: [
            { type: 'device', icon: 'lightbulb', label: 'Floor Lamp', state: true },
            { type: 'device', icon: 'power', label: 'TV Socket', state: false },
            {
              type: 'sensor',
              icon: 'thermostat',
              label: 'Temperature',
              value: { amount: 23.5, unit: '°C' },
            },
            {
              type: 'sensor',
              icon: 'co2',
              label: 'CO2 Sensor',
              value: { amount: 610, unit: 'ppm' },
            },
          ],
        },
      ],
    },
    {
      id: 'lights',
      title: 'Lights',
      cards: [
        {
          id: 'kitchen-light',
          title: 'Kitchen',
          layout: 'singleDevice',
          items: [{ type: 'device', icon: 'lightbulb', label: 'Ceiling Light', state: true }],
        },
        {
          id: 'corridor-light',
          title: 'Corridor',
          layout: 'singleDevice',
          items: [{ type: 'device', icon: 'lightbulb', label: 'Ceiling Light', state: false }],
        },
        {
          id: 'living-room-light',
          title: 'Living Room',
          layout: 'singleDevice',
          items: [{ type: 'device', icon: 'lightbulb', label: 'Chandelier', state: true }],
        },
        {
          id: 'bedroom-light',
          title: 'Bedroom',
          layout: 'singleDevice',
          items: [{ type: 'device', icon: 'lightbulb', label: 'Main Light', state: true }],
        },
        {
          id: 'bathroom-light',
          title: 'Bathroom',
          layout: 'singleDevice',
          items: [{ type: 'device', icon: 'lightbulb', label: 'Ceiling Light', state: false }],
        },
      ],
    },
  ];
}
