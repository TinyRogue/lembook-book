export interface UserBooksRes {
  slices: [CategorizedBooks];
}

export class CategorizedBooks {
  genre: string | undefined;
  books: Book[] | undefined;
}

export class Book {
  uid: string | undefined;
  author: string | undefined;
  title: string | undefined;
  description: string | undefined;
  coverURL: string | undefined;
  genre: string | undefined;
}
