import { UserBooksRes } from '@models/user-books-res.json';

export interface UserBookListsRes {
  dislikedBooks: UserBooksRes;
  lovedBooks: UserBooksRes;
  wtrBooks: UserBooksRes;
}
