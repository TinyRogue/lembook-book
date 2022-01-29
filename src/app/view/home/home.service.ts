import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

const LOGIN_WITH_JWT = gql`
  mutation loginWithJWT {
    loginWithJWT {
      UID
      Username
    }
  }
`;

@Injectable()
export class HomeService {
  constructor(private readonly _apollo: Apollo) {}

  loginWithJWT() {
    return this._apollo.mutate({
      mutation: LOGIN_WITH_JWT,
      optimisticResponse: {
        __typename: 'Mutation',
        loginWithJWT: {
          __typename: 'UserMeta',
          UID: '',
          Username: '',
        },
      },
    });
  }
}
