import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from './dashboard.state';
import { loadDashboardSuccess } from './dashboard.actions';

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(loadDashboardSuccess, (state, { tabs }) => ({
    ...state,
    tabs,
  })),
);
