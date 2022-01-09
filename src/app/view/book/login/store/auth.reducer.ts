import { createReducer, on } from '@ngrx/store';
import { loginUser, logoutUser } from './auth.actions';

export interface State {
  userUID: string | null;
  username: string | null;
  expirationDate: Date | null;
}

const initialState: State = {
  userUID: null,
  username: null,
  expirationDate: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state, { username, expirationDate, userUID }) => ({
    ...state,
    username,
    expirationDate,
    userUID,
  })),
  on(logoutUser, (state) => ({
    ...state,
    userUID: null,
    username: null,
    expirationDate: null,
  }))
);
