import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserUID = createSelector(
  createFeatureSelector<string>('loginFeature'),
  (state: string) => state
);
