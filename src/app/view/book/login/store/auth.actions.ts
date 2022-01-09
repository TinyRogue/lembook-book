import { createAction, props } from '@ngrx/store';
import { LoginReq } from '@models/login-req.json';

export const LOGIN_START_KEY = '[Auth] LOGIN_START';
export const LOGIN_USER_KEY = '[Auth] LOGIN_USER_KEY';
export const LOGOUT_USER_KEY = '[Auth] LOGOUT_USER_KEY';

export const loginUser = createAction(
  LOGIN_USER_KEY,
  props<{ username: string; expirationDate: Date; userUID: string }>()
);
export const logoutUser = createAction(LOGOUT_USER_KEY);
export const loginStart = createAction(LOGIN_START_KEY, props<LoginReq>());
