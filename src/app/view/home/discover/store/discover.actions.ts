import { createAction, props } from '@ngrx/store';
import { Book, CategorizedBooks } from '@models/user-books-res.json';

export const GET_CATEGORIZED_BOOKS_KEY = '[Discover] GET_CATEGORIZED_BOOKS_KEY';
export const GET_CATEGORIZED_BOOKS_SUCCESS_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_SUCCESS_KEY';
export const GET_CATEGORIZED_BOOKS_FAILED_KEY =
  '[Discover] GET_CATEGORIZED_BOOKS_FAILED_KEY';

export const GET_PREDICTED_BOOKS_KEY = '[Discover] GET_PREDICTED_BOOKS_KEY';
export const GET_PREDICTED_BOOKS_SUCCESS_KEY =
  '[Discover] GET_PREDICTED_BOOKS_SUCCESS_KEY';
export const GET_PREDICTED_BOOKS_FAILED_KEY =
  '[Discover] GET_PREDICTED_BOOKS_FAILED_KEY';

export const LOVE_BOOK_KEY = '[Discover] LOVE_BOOK_KEY';
export const LOVE_BOOK_FAILED_KEY = '[Discover] LOVE_BOOK_FAILED_KEY';
export const LOVE_BOOK_SUCCESS_KEY = '[Discover] LOVE_BOOK_SUCCESS_KEY';

export const DISLIKE_BOOK_KEY = '[Discover] DISLIKE_BOOK_KEY';
export const DISLIKE_BOOK_FAILED_KEY = '[Discover] DISLIKE_BOOK_FAILED_KEY';
export const DISLIKE_BOOK_SUCCESS_KEY = '[Discover] DISLIKE_BOOK_SUCCESS_KEY';

export const ADD_BOOK_TO_WTR_KEY = '[Discover] ADD_BOOK_TO_WTR_KEY';
export const ADD_BOOK_TO_WTR_FAILED_KEY =
  '[Discover] ADD_BOOK_TO_WTR_FAILED_KEY';
export const ADD_BOOK_TO_WTR_SUCCESS_KEY =
  '[Discover] ADD_BOOK_TO_WTR_SUCCESS_KEY';

export const CANCEL_LOVE_BOOK_KEY = '[Discover] CANCEL_LOVE_BOOK_KEY';
export const CANCEL_LOVE_BOOK_FAILED_KEY =
  '[Discover] CANCEL_LOVE_BOOK_FAILED_KEY';
export const CANCEL_LOVE_BOOK_SUCCESS_KEY =
  '[Discover] CANCEL_LOVE_BOOK_SUCCESS_KEY';

export const CANCEL_DISLIKE_BOOK_KEY = '[Discover] CANCEL_DISLIKE_BOOK_KEY';
export const CANCEL_DISLIKE_BOOK_FAILED_KEY =
  '[Discover] CANCEL_DISLIKE_BOOK_FAILED_KEY';
export const CANCEL_DISLIKE_BOOK_SUCCESS_KEY =
  '[Discover] CANCEL_DISLIKE_BOOK_SUCCESS_KEY';

export const CANCEL_ADD_BOOK_TO_WTR_KEY =
  '[Discover] CANCEL_ADD_BOOK_TO_WTR_KEY';
export const CANCEL_ADD_BOOK_TO_WTR_FAILED_KEY =
  '[Discover] CANCEL_ADD_BOOK_TO_WTR_FAILED_KEY';
export const CANCEL_ADD_BOOK_TO_WTR_SUCCESS_KEY =
  '[Discover] CANCEL_ADD_BOOK_TO_WTR_SUCCESS_KEY';

export const getCategorizedBooks = createAction(GET_CATEGORIZED_BOOKS_KEY);
export const getCategorizedBooksSuccess = createAction(
  GET_CATEGORIZED_BOOKS_SUCCESS_KEY,
  props<{ slices: CategorizedBooks[] }>()
);
export const getCategorizedBooksFailed = createAction(
  GET_CATEGORIZED_BOOKS_FAILED_KEY,
  props<{ error: any }>()
);

export const getPredictedBooks = createAction(GET_PREDICTED_BOOKS_KEY);
export const getPredictedBooksSuccess = createAction(
  GET_PREDICTED_BOOKS_SUCCESS_KEY,
  props<CategorizedBooks>()
);
export const getPredictedBooksFailed = createAction(
  GET_PREDICTED_BOOKS_FAILED_KEY,
  props<{ error: any }>()
);

export const loveBook = createAction(LOVE_BOOK_KEY, props<{ book: Book }>());
export const loveBookFailed = createAction(
  LOVE_BOOK_FAILED_KEY,
  props<{ error: any }>()
);
export const loveBookSuccess = createAction(
  LOVE_BOOK_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);

export const dislikeBook = createAction(
  DISLIKE_BOOK_KEY,
  props<{ book: Book }>()
);
export const dislikeBookFailed = createAction(
  DISLIKE_BOOK_FAILED_KEY,
  props<{ error: any }>()
);
export const dislikeBookSuccess = createAction(
  DISLIKE_BOOK_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);

export const addBookToWTR = createAction(
  ADD_BOOK_TO_WTR_KEY,
  props<{ book: Book }>()
);
export const addBookToWTRFailed = createAction(
  ADD_BOOK_TO_WTR_FAILED_KEY,
  props<{ error: any }>()
);
export const addBookToWTRSuccess = createAction(
  ADD_BOOK_TO_WTR_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);

export const cancelLoveBook = createAction(
  CANCEL_LOVE_BOOK_KEY,
  props<{ book: Book }>()
);
export const cancelLoveBookFailed = createAction(
  CANCEL_LOVE_BOOK_FAILED_KEY,
  props<{ error: any }>()
);
export const cancelLoveBookSuccess = createAction(
  CANCEL_LOVE_BOOK_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);

export const cancelDislikeBook = createAction(
  CANCEL_DISLIKE_BOOK_KEY,
  props<{ book: Book }>()
);
export const cancelDislikeBookFailed = createAction(
  CANCEL_DISLIKE_BOOK_FAILED_KEY,
  props<{ error: any }>()
);
export const cancelDislikeBookSuccess = createAction(
  CANCEL_DISLIKE_BOOK_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);

export const cancelAddBookToWTR = createAction(
  CANCEL_ADD_BOOK_TO_WTR_KEY,
  props<{ book: Book }>()
);
export const cancelAddBookToWTRFailed = createAction(
  CANCEL_ADD_BOOK_TO_WTR_FAILED_KEY,
  props<{ error: any }>()
);
export const cancelAddBookToWTRSuccess = createAction(
  CANCEL_ADD_BOOK_TO_WTR_SUCCESS_KEY,
  props<{ book: Book; bookAction: number }>()
);
