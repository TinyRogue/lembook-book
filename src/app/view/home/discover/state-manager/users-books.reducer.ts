import { CategorizedBooks, UserBooksRes } from '@models/user-books-res.json';
import { createReducer, on } from '@ngrx/store';
import { getBooks } from './users-books.action';

export const discoverBooksFeatureKey = 'discover_books';
export const initialState: UserBooksRes = { slices: [new CategorizedBooks()] };

export const discoverBooksReducer = createReducer(
  initialState,
  on(getBooks, (state, { books }) => books)
);
