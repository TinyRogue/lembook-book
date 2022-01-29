import { createAction, props } from '@ngrx/store';
import { UserBooksRes } from '@models/user-books-res.json';
import { UserBookListsRes } from '../my-shelf.model';

export const GET_USERS_BOOK_LISTS_KEY = '[MyShelf] GET_USERS_BOOK_LISTS_KEY';
export const GET_USERS_BOOK_LISTS_SUCCESS_KEY =
  '[MyShelf] GET_USERS_BOOK_LISTS_SUCCESS_KEY';
export const GET_USERS_BOOK_LISTS_FAILED_KEY =
  '[MyShelf] GET_USERS_BOOK_LISTS_FAILED_KEY';

export const getUsersBookLists = createAction(GET_USERS_BOOK_LISTS_KEY);

export const getUsersBookListsSuccess = createAction(
  GET_USERS_BOOK_LISTS_SUCCESS_KEY,
  props<{ lists: UserBookListsRes }>()
);

export const getUsersBookListsFailed = createAction(
  GET_USERS_BOOK_LISTS_FAILED_KEY,
  props<{ myShelfError: any }>()
);
