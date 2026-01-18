// src/app/models/tab.model.ts

export interface SensorValue {
  amount: number;
  unit: string;
}

export interface DeviceItem {
  type: 'device';
  icon: string;
  label: string;
  state: boolean;
}

export interface SensorItem {
  type: 'sensor';
  icon: string;
  label: string;
  value: SensorValue;
}

export type CardItem = DeviceItem | SensorItem;

export interface Card {
  id: string;
  title: string;
  layout: 'singleDevice' | 'horizontalLayout' | 'verticalLayout';
  items: CardItem[];
}

export interface Tab {
  id: string;
  title: string;
  cards: Card[];
}
