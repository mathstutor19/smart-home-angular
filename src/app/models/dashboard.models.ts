export interface Dashboard {
  id: string;
  title: string;
  icon: string;
}

export interface DashboardDetails {
  tabs: Tab[];
}

export interface Tab {
  id: string;
  title: string;
  cards: Card[];
}

export interface Card {
  id: string;
  title: string;
  layout: 'singleDevice' | 'horizontalLayout' | 'verticalLayout';
  items: CardItem[];
}

export type CardItem = DeviceItem | SensorItem;

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
  value: {
    amount: number;
    unit: string;
  };
}
