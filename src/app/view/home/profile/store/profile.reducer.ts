import { Genre } from '@models/genres-res';
import { createReducer, on } from '@ngrx/store';
import {
  getGenres,
  getGenresFailed,
  getGenresSuccess,
} from './profile.actions';

export interface State {
  genres: Genre[] | null;
  error: any;
}

export const initialState: State = {
  genres: null,
  error: null,
};

export const profileReducer = createReducer(
  initialState,
  on(getGenres, (state) => ({
    ...state,
    error: null,
  })),
  on(getGenresSuccess, (state, { genres }) => ({
    ...state,
    genres,
    error: null,
  })),
  on(getGenresFailed, (state, { error }) => ({
    ...state,
    genres: null,
    error,
  }))
);
