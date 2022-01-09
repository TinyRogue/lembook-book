import { createAction, props } from '@ngrx/store';

export const ADD_USER_UID_KEY = 'ADD_USER_UID_KEY';
export const addUserUID = createAction(
  ADD_USER_UID_KEY,
  props<{ userUID: string }>()
);
