import { UserBooksRes } from '@models/user-books-res.json';

export interface AppState {
  userUID: string;
  userBooks: UserBooksRes;
}
