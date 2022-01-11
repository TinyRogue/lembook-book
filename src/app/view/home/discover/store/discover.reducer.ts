import { CategorizedBooks } from '@models/user-books-res.json';
import { createReducer, on } from '@ngrx/store';
import {
  getCategorizedBooks,
  getCategorizedBooksFailed,
  getCategorizedBooksSuccess,
} from './discover.actions';

export interface State {
  categorizedBooks: CategorizedBooks[] | null;
  error: any;
}

export const initialState: State = {
  categorizedBooks: null,
  error: null,
};

export const discoverReducer = createReducer(
  initialState,
  on(getCategorizedBooks, (state) => ({
    ...state,
    categorizedBooks: null,
    error: null,
  })),
  on(getCategorizedBooksSuccess, (state, { slices }) => ({
    ...state,
    categorizedBooks: slices,
    error: null,
  })),
  on(getCategorizedBooksFailed, (state, { error }) => ({
    ...state,
    categorizedBooks: null,
    error,
  }))
);
