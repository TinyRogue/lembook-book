import { createReducer, on } from '@ngrx/store';
import { startLoading, stopLoading } from './book.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export const bookReducer = createReducer(
  initialState,
  on(startLoading, (state) => ({ ...state, loading: true })),
  on(stopLoading, (state) => ({ ...state, loading: false }))
);
