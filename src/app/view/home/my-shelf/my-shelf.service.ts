import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { UserIDReq } from '@models/user-id-req.json';
import { UserBooksRes } from '@models/user-books-res.json';
import { UserBookListsRes } from './my-shelf.model';

const userLists = gql`
  query userLists {
    wtrBooks {
      slices {
        genre
        books {
          uid
          authors
          title
          genres
          cover
          description
          inList
        }
      }
    }
    dislikedBooks {
      slices {
        genre
        books {
          uid
          authors
          title
          genres
          cover
          description
          inList
        }
      }
    }
    lovedBooks {
      slices {
        genre
        books {
          uid
          authors
          title
          genres
          cover
          description
          inList
        }
      }
    }
  }
`;

@Injectable()
export class MyShelfService {
  constructor(private readonly _apollo: Apollo) {}

  getUserLists() {
    return this._apollo.query<UserBookListsRes>({
      query: userLists,
      fetchPolicy: 'no-cache',
    });
  }
}
