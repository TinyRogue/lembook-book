import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { UserReq } from '@models/user-req.json';

const REGISTER = gql`
  mutation register($user: NewUser!) {
    createUser(input: $user) {
      res
    }
  }
`;

@Injectable()
export class RegisterService {
  constructor(private readonly apollo: Apollo) {}

  register(u: UserReq) {
    return this.apollo.mutate({
      mutation: REGISTER,
      variables: {
        user: u,
      },
    });
  }
}
