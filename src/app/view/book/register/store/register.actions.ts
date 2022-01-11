import { createAction, props } from '@ngrx/store';
import { RegistrationReq } from '@models/register-req.json';

export const REGISTER_START_KEY = '[Register] REGISTER_START_KEY';
export const REGISTER_KEY = '[Register] REGISTER_KEY';
export const REGISTER_FAIL_KEY = '[Register] REGISTER_FAIL_KEY';

export const registerStart = createAction(
  REGISTER_START_KEY,
  props<RegistrationReq>()
);
export const registerUser = createAction(REGISTER_KEY);
export const registerFail = createAction(
  REGISTER_FAIL_KEY,
  props<{ authError: any }>()
);
