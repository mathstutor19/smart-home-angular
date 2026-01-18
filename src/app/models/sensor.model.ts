export interface SensorValue {
  amount: number;
  unit: string;
}

export interface SensorItem {
  type: 'sensor';
  icon: string;
  label: string;
  value: SensorValue;
}
