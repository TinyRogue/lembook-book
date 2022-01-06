import { createAction, props } from '@ngrx/store';
import { UserBooksRes } from '@models/user-books-res.json';

export const GET_BOOKS = '[DISCOVER_BOOKS] get';
export const LOAD_BOOKS = '[DISCOVER_BOOKS] load';

export const getBooks = createAction(
  GET_BOOKS,
  props<{ books: UserBooksRes }>()
);

export const loadBooks = createAction(LOAD_BOOKS, props<UserBooksRes>());
