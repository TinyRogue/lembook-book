import { createAction, props } from '@ngrx/store';
import { CategorizedBooks } from '@models/user-books-res.json';

export const GET_CATEGORIZED_BOOKS_KEY = '[Discover] GET_CATEGORIZED_BOOKS_KEY';
export const GET_CATEGORIZED_BOOKS_SUCCESS_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_SUCCESS_KEY';
export const GET_CATEGORIZED_BOOKS_FAILED_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_FAILED_KEY';

export const getCategorizedBooks = createAction(GET_CATEGORIZED_BOOKS_KEY);
export const getCategorizedBooksSuccess = createAction(
  GET_CATEGORIZED_BOOKS_SUCCESS_KEY,
  props<{ slices: CategorizedBooks[] }>()
);
export const getCategorizedBooksFailed = createAction(
  GET_CATEGORIZED_BOOKS_FAILED_KEY,
  props<{ error: any }>()
);
