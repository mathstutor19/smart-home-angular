import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SensorValuePipe } from '../sensor-value-pipe';
import { SensorItem } from '../models/sensor.model'; // <-- import qilindi

@Component({
  selector: 'app-sensor',
  standalone: true,
  imports: [CommonModule, MatIconModule, SensorValuePipe],
  templateUrl: './sensor.html',
  styleUrls: ['./sensor.scss'],
})
export class SensorComponent {
  @Input() item!: SensorItem;
}
