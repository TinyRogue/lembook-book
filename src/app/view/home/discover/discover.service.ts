import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { UserIDReq } from '@models/user-id-req.json';
import { UserBooksRes } from '@models/user-books-res.json';

const books = gql`
  query books($userID: UserID!) {
    books(input: $userID) {
      slices {
        genre
        books {
          uid
          author
          title
          genre
          coverURL
          description
        }
      }
    }
  }
`;

@Injectable()
export class DiscoverService {
  constructor(private readonly _apollo: Apollo) {}

  getGenresWithBooks(userID: UserIDReq) {
    return this._apollo.query<{ books: UserBooksRes }>({
      query: books,
      variables: {
        userID,
      },
    });
  }
}
