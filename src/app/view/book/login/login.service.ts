import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { LoginReq } from '@models/login-req.json';

const LOGIN = gql`
  mutation login($login: Login!) {
    login(input: $login) {
      res
    }
  }
`;

@Injectable()
export class LoginService {
  constructor(private readonly apollo: Apollo) {}
  login(l: LoginReq) {
    return this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        login: l,
      },
    });
  }
}
