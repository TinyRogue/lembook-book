import { createReducer, on } from '@ngrx/store';
import { registerFail, registerStart, registerUser } from './register.actions';

export interface State {
  authError: any;
  success: boolean;
}

const initialState: State = {
  authError: null,
  success: false,
};

export const registerReducer = createReducer(
  initialState,
  on(registerStart, (state) => ({ ...state, authError: null, success: false })),
  on(registerUser, (state) => ({ ...state, authError: null, success: true })),
  on(registerFail, (state, { authError }) => ({
    ...state,
    authError,
    success: false,
  }))
);
