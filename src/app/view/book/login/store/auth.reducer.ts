import { createReducer, on } from '@ngrx/store';
import { loginFail, loginUser, logoutUser } from './auth.actions';

export interface State {
  userUID: string | null;
  username: string | null;
  expirationDate: Date | null;
  authError: any;
}

const initialState: State = {
  userUID: null,
  username: null,
  expirationDate: null,
  authError: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state, { username, expirationDate, userUID }) => ({
    ...state,
    username,
    expirationDate,
    userUID,
    authError: null,
  })),
  on(logoutUser, (state) => ({
    ...state,
    userUID: null,
    username: null,
    expirationDate: null,
  })),
  on(loginFail, (state, { authError }) => ({
    ...state,
    userUID: null,
    username: null,
    expirationDate: null,
    authError: authError,
  }))
);
