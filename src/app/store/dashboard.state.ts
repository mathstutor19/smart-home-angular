import { Tab } from '../models/tab.model';

export interface DashboardState {
  tabs: Tab[];
}

export const initialDashboardState: DashboardState = {
  tabs: [],
};
