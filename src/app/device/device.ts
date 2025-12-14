import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HighlightOnDirective } from '../highlight';

export interface DeviceItem {
  type: 'device';
  icon: string;
  label: string;
  state: boolean;
}

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule, FormsModule, HighlightOnDirective],
  templateUrl: './device.html',
  styleUrls: ['./device.scss'],
})
export class DeviceComponent {
  @Input() item!: DeviceItem;
}
