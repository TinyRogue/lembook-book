import { createAction, props } from '@ngrx/store';
import { Genre } from '@models/genres-res';

export const GET_GENRES_KEY = '[Profile] GET_GENRES_KEY';
export const GET_GENRES_SUCCESS_KEY = '[Profile] GET_GENRES_SUCCESS_KEY';
export const GET_GENRES_FAILED_KEY = '[Profile] GET_GENRES_FAILED_KEY';

export const getGenres = createAction(GET_GENRES_KEY);
export const getGenresSuccess = createAction(
  GET_GENRES_SUCCESS_KEY,
  props<{ genres: Genre[] }>()
);
export const getGenresFailed = createAction(
  GET_GENRES_FAILED_KEY,
  props<{ error: any }>()
);

export const LIKE_GENRE_KEY = '[Profile] LIKE_GENRE_KEY';
export const LIKE_GENRE_FAILED_KEY = '[Profile] LIKE_GENRE_FAILED_KEY';

export const likeGenre = createAction(
  LIKE_GENRE_KEY,
  props<{ genre: string }>()
);
export const likeGenreFailed = createAction(
  LIKE_GENRE_FAILED_KEY,
  props<{ error: any }>()
);

export const DISLIKE_GENRE_KEY = '[Profile] DISLIKE_GENRE_KEY';
export const DISLIKE_GENRE_FAILED_KEY = '[Profile] DISLIKE_GENRE_FAILED_KEY';

export const dislikeGenre = createAction(
  DISLIKE_GENRE_KEY,
  props<{ genre: string }>()
);
export const dislikeGenreFailed = createAction(
  DISLIKE_GENRE_FAILED_KEY,
  props<{ error: any }>()
);
