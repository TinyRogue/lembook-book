import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { RegistrationReq } from '@models/register-req.json';

const REGISTER = gql`
  mutation register($registration: Registration!) {
    register(input: $registration) {
      res
    }
  }
`;

@Injectable()
export class RegisterService {
  constructor(private readonly apollo: Apollo) {}

  register(r: RegistrationReq) {
    return this.apollo.mutate({
      mutation: REGISTER,
      variables: {
        registration: r,
      },
    });
  }
}
