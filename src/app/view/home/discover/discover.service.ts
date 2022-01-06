import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { RegistrationReq } from '@models/register-req.json';

// const books = gql`
//   query books($registration: Registration!) {
//     register(input: $registration) {
//       res
//     }
//   }
// `;

@Injectable()
export class DiscoverService {
  //   constructor(private readonly _apollo: Apollo) {}
  //
  //   getGenresWithBooks(r: RegistrationReq) {
  //     return this._apollo.query({
  //       query: books,
  //       variables: {
  //         registration: r,
  //       },
  //     });
  //   }
}
