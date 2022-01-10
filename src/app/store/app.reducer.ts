import * as fromAuth from '../view/book/login/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromBook from '../view/book/store/book.reducer';

export interface AppState {
  auth: fromAuth.State;
  book: fromBook.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  book: fromBook.bookReducer,
};
