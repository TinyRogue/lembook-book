import { createAction, props } from '@ngrx/store';

export const SAVE_USER_UID = '[User Meta] set';

export const saveUserMetadata = createAction(
  SAVE_USER_UID,
  props<{ uid: string }>()
);
