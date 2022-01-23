import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { UserIDReq } from '@models/user-id-req.json';
import { GenresRes } from '@models/genres-res';

const genres = gql`
  query genres($userID: UserID!) {
    genres(input: $userID) {
      genres {
        name
        liked
      }
    }
  }
`;

const likeGenre = gql`
  mutation likeGenre($genre: String!) {
    likeGenre(input: $genre) {
      res
    }
  }
`;

@Injectable()
export class ProfileService {
  constructor(private readonly _apollo: Apollo) {}

  getGenres(userID: UserIDReq) {
    return this._apollo.query<{ genres: GenresRes }>({
      query: genres,
      variables: {
        userID,
      },
      fetchPolicy: 'no-cache',
    });
  }

  likeGenre(genre: string) {
    return this._apollo.mutate({
      mutation: likeGenre,
      variables: {
        genre,
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
