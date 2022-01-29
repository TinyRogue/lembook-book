import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const prodURI = 'https://lembook-serv.herokuapp.com/gql';
const devURI = 'http://localhost:8080/query';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri: prodURI, withCredentials: true }),
    cache: new InMemoryCache(),
    credentials: 'include',
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
