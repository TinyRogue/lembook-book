import * as fromAuth from '../view/book/login/store/auth.reducer';
import * as fromRegister from '../view/book/register/store/register.reducer';
import * as fromBook from '../view/book/store/book.reducer';
import * as fromDiscover from '../view/home/discover/store/discover.reducer';
import * as fromMyShelf from '../view/home/my-shelf/store/my-shelf.reducer';
import * as fromProfile from '../view/home/profile/store/profile.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
  register: fromRegister.State;
  book: fromBook.State;
  discover: fromDiscover.State;
  myShelf: fromMyShelf.State;
  profile: fromProfile.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  book: fromBook.bookReducer,
  register: fromRegister.registerReducer,
  discover: fromDiscover.discoverReducer,
  myShelf: fromMyShelf.myShelfReducer,
  profile: fromProfile.profileReducer,
};
