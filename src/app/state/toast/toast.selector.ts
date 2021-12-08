import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Toast } from '../../pkg/components/toast/toast.model';

export const selectToasts = createSelector(
  createFeatureSelector('toastFeature'),
  (state: Toast[]) => state
);
