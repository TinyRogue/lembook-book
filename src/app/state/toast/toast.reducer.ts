import { createReducer, on } from '@ngrx/store';
import { addToast, hideToast, removeToast } from './toast.action';
import { Toast } from '../../pkg/components/toast/toast.model';

export const toastFeatureKey = 'toasty';
export const initialState: Toast[] = [];

export const toastReducer = createReducer(
  initialState,
  on(addToast, (state, { toast }) => [...state, toast]),
  on(removeToast, (state, { toast }) => state),
  on(hideToast, (state, { toast }) => state)
);
