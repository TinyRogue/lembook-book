import * as fromAuth from '../view/book/login/store/auth.reducer';
import * as fromRegister from '../view/book/register/store/register.reducer';
import * as fromBook from '../view/book/store/book.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
  register: fromRegister.State;
  book: fromBook.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  book: fromBook.bookReducer,
  register: fromRegister.registerReducer,
};
