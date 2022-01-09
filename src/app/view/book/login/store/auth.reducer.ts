import { createReducer, on } from '@ngrx/store';
import { addUserUID } from './login.actions';

export interface State {
  userUID: string;
}

export interface AppState {
  auth: State;
}

const initialState: State = {
  userUID: '',
};

export const authReducer = createReducer(
  initialState,
  on(addUserUID, (state, { userUID }) => ({
    ...state,
    userUID,
  }))
);
