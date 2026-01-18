import { createAction, props } from '@ngrx/store';
import { Tab } from '../models/tab.model';

export const loadDashboard = createAction('[Dashboard] Load', props<{ dashboardId: string }>());

export const loadDashboardSuccess = createAction(
  '[Dashboard] Load Success',
  props<{ tabs: Tab[] }>(),
);

export const loadDashboardFailure = createAction('[Dashboard] Load Failure');
