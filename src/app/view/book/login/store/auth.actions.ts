import { createAction, props } from '@ngrx/store';
import { LoginReq } from '@models/login-req.json';

export const LOGIN_START_KEY = '[Auth] LOGIN_START';
export const LOGIN_USER_KEY = '[Auth] LOGIN_USER_KEY';
export const LOGOUT_USER_KEY = '[Auth] LOGOUT_USER_KEY';
export const LOGIN_FAIL = '[Auth] LOGIN_FAIL';
export const LOGIN_WITH_JWT_KEY = '[Home] LOGIN_WITH_JWT_KEY';

export const loginStart = createAction(LOGIN_START_KEY, props<LoginReq>());
export const loginWithJWT = createAction(LOGIN_WITH_JWT_KEY);
export const loginUser = createAction(
  LOGIN_USER_KEY,
  props<{ username: string; expirationDate?: Date; userUID: string }>()
);
export const logoutUser = createAction(LOGOUT_USER_KEY);
export const loginFail = createAction(LOGIN_FAIL, props<{ authError: any }>());
