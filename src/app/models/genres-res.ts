export interface GenresRes {
  genres: [Genre];
}

export class Genre {
  uid: string | undefined;
  name: string | undefined;
  liked: boolean | undefined;
}
