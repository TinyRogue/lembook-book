import { CategorizedBooks } from '@models/user-books-res.json';
import { createReducer, on } from '@ngrx/store';
import {
  getCategorizedBooks,
  getCategorizedBooksFailed,
  getCategorizedBooksSuccess,
  loveBookFailed,
} from './discover.actions';

export interface State {
  categorizedBooks: CategorizedBooks[] | null;
  error: any;
  actionError: any;
}

export const initialState: State = {
  categorizedBooks: null,
  error: null,
  actionError: null,
};

export const discoverReducer = createReducer(
  initialState,
  on(getCategorizedBooks, (state) => ({
    ...state,
    error: null,
    actionError: null,
  })),
  on(getCategorizedBooksSuccess, (state, { slices }) => ({
    ...state,
    categorizedBooks: slices,
    error: null,
    actionError: null,
  })),
  on(getCategorizedBooksFailed, (state, { error }) => ({
    ...state,
    categorizedBooks: null,
    error,
    actionError: null,
  })),
  on(loveBookFailed, (state, { error }) => ({
    ...state,
    error: null,
    actionError: error,
  }))
);
