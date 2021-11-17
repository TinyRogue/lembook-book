import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Mutation } from 'apollo-angular';

@Injectable()
export class LoginService extends Mutation {
  document = gql`
    mutation login($lr: Login!) {
      login(input: $lr) {
        token
      }
    }
  `;
}
