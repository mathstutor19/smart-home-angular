import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';
import { loadDashboard, loadDashboardSuccess, loadDashboardFailure } from './dashboard.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {}

  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDashboard),
      switchMap(({ dashboardId }) =>
        this.dashboardService.getDashboardById(dashboardId).pipe(
          map((res) => loadDashboardSuccess({ tabs: res.tabs || [] })),
          catchError(() => of(loadDashboardFailure())),
        ),
      ),
    ),
  );
}
