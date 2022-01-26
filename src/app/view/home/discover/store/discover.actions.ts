import { createAction, props } from '@ngrx/store';
import { Book, CategorizedBooks } from '@models/user-books-res.json';

export const GET_CATEGORIZED_BOOKS_KEY = '[Discover] GET_CATEGORIZED_BOOKS_KEY';
export const GET_CATEGORIZED_BOOKS_SUCCESS_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_SUCCESS_KEY';
export const GET_CATEGORIZED_BOOKS_FAILED_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_FAILED_KEY';
export const LOVE_BOOK_KEY = '[Discover] LOVE_BOOK_KEY';
export const DISLIKE_BOOK_KEY = '[Discover] DISLIKE_BOOK_KEY';
export const ADD_BOOK_TO_WTR_KEY = '[Discover] ADD_BOOK_TO_WTR_KEY';
export const CANCEL_LOVE_BOOK_KEY = '[Discover] CANCEL_LOVE_BOOK_KEY';
export const CANCEL_DISLIKE_BOOK_KEY = '[Discover] CANCEL_DISLIKE_BOOK_KEY';
export const CANCEL_ADD_BOOK_TO_WTR_KEY =
  '[Discover] CANCEL_ADD_BOOK_TO_WTR_KEY';
export const getCategorizedBooks = createAction(GET_CATEGORIZED_BOOKS_KEY);
export const getCategorizedBooksSuccess = createAction(
  GET_CATEGORIZED_BOOKS_SUCCESS_KEY,
  props<{ slices: CategorizedBooks[] }>()
);
export const getCategorizedBooksFailed = createAction(
  GET_CATEGORIZED_BOOKS_FAILED_KEY,
  props<{ error: any }>()
);

export const loveBook = createAction(LOVE_BOOK_KEY, props<{ book: Book }>());
export const dislikeBook = createAction(
  DISLIKE_BOOK_KEY,
  props<{ book: Book }>()
);
export const addBookToWTR = createAction(
  ADD_BOOK_TO_WTR_KEY,
  props<{ book: Book }>()
);
export const cancelLoveBook = createAction(
  LOVE_BOOK_KEY,
  props<{ book: Book }>()
);
export const cancelDislikeBook = createAction(
  DISLIKE_BOOK_KEY,
  props<{ book: Book }>()
);
export const cancelAddBookToWTR = createAction(
  ADD_BOOK_TO_WTR_KEY,
  props<{ book: Book }>()
);
