import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { UserIDReq } from '@models/user-id-req.json';
import { UserBooksRes } from '@models/user-books-res.json';

const categorizedBooks = gql`
  query CategorizedBooks($userID: UserID!) {
    categorizedBooks(input: $userID) {
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

const loveBook = gql`
  mutation loveBook($bookUID: String!) {
    loveBook(input: $bookUID) {
      res
    }
  }
`;

const dislikeBook = gql`
  mutation dislikeBook($bookUID: String!) {
    dislikeBook(input: $bookUID) {
      res
    }
  }
`;

const addBookToWTR = gql`
  mutation addBookToWTR($bookUID: String!) {
    addBookToWTR(input: $bookUID) {
      res
    }
  }
`;

const cancelLoveBook = gql`
  mutation cancelLoveBook($bookUID: String!) {
    cancelLoveBook(input: $bookUID) {
      res
    }
  }
`;

const cancelDislikeBook = gql`
  mutation cancelDislikeBook($bookUID: String!) {
    cancelDislikeBook(input: $bookUID) {
      res
    }
  }
`;

const cancelAddBookToWTR = gql`
  mutation cancelAddBookToWTR($bookUID: String!) {
    cancelAddBookToWTR(input: $bookUID) {
      res
    }
  }
`;

@Injectable()
export class DiscoverService {
  constructor(private readonly _apollo: Apollo) {}

  getGenresWithBooks(userID: UserIDReq) {
    return this._apollo.query<{ categorizedBooks: UserBooksRes }>({
      query: categorizedBooks,
      variables: {
        userID,
      },
      fetchPolicy: 'no-cache',
    });
  }

  loveBook(bookUID: string) {
    return this._apollo.mutate({
      mutation: loveBook,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }

  cancelLoveBook(bookUID: string) {
    return this._apollo.mutate({
      mutation: cancelLoveBook,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }

  dislikeBook(bookUID: string) {
    return this._apollo.mutate({
      mutation: dislikeBook,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }

  cancelDislikeBook(bookUID: string) {
    return this._apollo.mutate({
      mutation: cancelDislikeBook,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }

  addBookToWTR(bookUID: string) {
    return this._apollo.mutate({
      mutation: addBookToWTR,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }

  cancelAddBookToWTR(bookUID: string) {
    return this._apollo.mutate({
      mutation: cancelAddBookToWTR,
      variables: {
        bookUID,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeGenre: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }
}
