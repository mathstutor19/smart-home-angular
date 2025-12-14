import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sensorValue' })
export class SensorValuePipe implements PipeTransform {
  transform(value?: { amount: number; unit: string }): string {
    if (!value) return '';
    const textUnits = ['clear', 'detected'];
    if (textUnits.includes(value.unit)) return value.unit;
    return `${value.amount} ${value.unit}`;
  }
}
