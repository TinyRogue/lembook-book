import { Action, createAction, props } from '@ngrx/store';

export const ADD_USER_UID_KEY = 'ADD_USER_UID_KEY';
export const addUserUID = createAction(
  ADD_USER_UID_KEY,
  props<{ userUID: string }>()
);

export class AddUserUIDOrigin implements Action {
  readonly type: string = ADD_USER_UID_KEY;

  constructor(public userUID: string) {}
}
