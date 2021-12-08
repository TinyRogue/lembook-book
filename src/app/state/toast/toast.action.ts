import { createAction, props } from '@ngrx/store';
import { Toast } from '../../pkg/components/toast/toast.model';

export const ADD_TOAST = '[TOAST] Add';
export const HIDE_TOAST = '[TOAST] Hide';
export const REMOVE_TOAST = '[TOAST] Remove';

export const addToast = createAction(ADD_TOAST, props<{ toast: Toast }>());
export const hideToast = createAction(HIDE_TOAST, props<{ toast: Toast }>());
export const removeToast = createAction(
  REMOVE_TOAST,
  props<{ toast: Toast }>()
);
