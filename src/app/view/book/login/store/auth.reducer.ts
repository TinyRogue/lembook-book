import { createReducer, on } from '@ngrx/store';
import { addUserUID } from './auth.actions';

export interface State {
  userUID: string;
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
