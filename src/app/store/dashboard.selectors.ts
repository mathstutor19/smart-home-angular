import { createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState = (state: any): DashboardState => state.dashboard;

export const selectTabs = createSelector(selectDashboardState, (state) => state.tabs);
