import { Action, createReducer, on } from '@ngrx/store';
import {
  ADD_USER_UID_KEY,
  addUserUID,
  AddUserUIDOrigin,
} from './login.actions';

const initialState = {
  userUID: '',
  asd: 'asd',
};

export function loginReducerOrigin(
  state = initialState,
  action: AddUserUIDOrigin
) {
  switch (action.type) {
    case ADD_USER_UID_KEY:
      return { ...state, userUID: action.userUID };
    default:
      return state;
  }
}

export const loginReducer = createReducer(
  initialState,
  on(addUserUID, (state, { userUID }) => ({
    ...state,
    userUID,
  }))
);
