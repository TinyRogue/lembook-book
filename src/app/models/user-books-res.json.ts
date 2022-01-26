export interface UserBooksRes {
  slices: [CategorizedBooks];
}

export class CategorizedBooks {
  genre: string | undefined;
  books: Book[] | undefined;
}

export class Book {
  uid: string | undefined;
  authors: string[] | undefined;
  title: string | undefined;
  description: string | undefined;
  cover: string | undefined;
  genres: string[] | undefined;
  inList: number | undefined;
}
