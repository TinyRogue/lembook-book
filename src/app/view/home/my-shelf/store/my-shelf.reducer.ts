import { createReducer, on } from '@ngrx/store';
import {
  getUsersBookLists,
  getUsersBookListsFailed,
  getUsersBookListsSuccess,
} from './my-shelf.actions';
import { UserBookListsRes } from '../my-shelf.model';

export interface State {
  lists: UserBookListsRes | null;
  myShelfError: any;
}

export const initialState: State = {
  lists: null,
  myShelfError: null,
};

export const myShelfReducer = createReducer(
  initialState,
  on(getUsersBookLists, (state) => ({
    ...state,
    myShelfError: null,
  })),
  on(getUsersBookListsSuccess, (state, { lists }) => ({
    ...state,
    lists,
    myShelfError: null,
  })),
  on(getUsersBookListsFailed, (state, { myShelfError }) => ({
    ...state,
    lists: null,
    myShelfError,
  }))
);
