import { createAction } from '@ngrx/store';

export const START_LOADING_KEY = '[Book] START_LOADING_KEY';
export const STOP_LOADING_KEY = '[Book] STOP_LOADING_KEY';

export const startLoading = createAction(START_LOADING_KEY);
export const stopLoading = createAction(STOP_LOADING_KEY);
