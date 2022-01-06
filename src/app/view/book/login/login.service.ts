import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { LoginReq } from '@models/login-req.json';
import { LoginRes } from '@models/login-res.json';

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
    return this._apollo.mutate<LoginRes>({
      mutation: LOGIN,
      variables: {
        login: l,
      },
    });
  }
}
