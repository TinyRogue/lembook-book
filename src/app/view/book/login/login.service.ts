import { Apollo } from 'apollo-angular';
import { LoginReq } from '@models/login-req.json';
import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';

const LOGIN = gql`
  mutation login($login: Login!) {
    login(input: $login) {
      res
    }
  }
`;

@Injectable()
export class LoginService {
  constructor(private readonly _apollo: Apollo) {}
  login(l: LoginReq) {
    return this._apollo.mutate({
      mutation: LOGIN,
      variables: {
        login: l,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        login: {
          __typename: 'Depiction',
          res: '',
        },
      },
    });
  }
}
