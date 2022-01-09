import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { of } from 'rxjs';
import { LoginReq } from '@models/login-req.json';
import { Injectable } from '@angular/core';
import { loginStart } from './auth.actions';

const LOGIN = gql`
  mutation login($login: Login!) {
    login(input: $login) {
      res
    }
  }
`;

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN_START_KEY),
        switchMap((authData: LoginReq) => {
          return this._apollo
            .mutate({
              mutation: LOGIN,
              variables: {
                login: authData,
              },
              optimisticResponse: {
                __typename: 'Mutation',
                login: {
                  __typename: 'Depiction',
                  res: '',
                },
              },
            })
            .pipe(
              map((resData) => {
                of(
                  AuthActions.loginUser({
                    userUID: resData.data!.login.res,
                    username: authData.username,
                    expirationDate: new Date(
                      new Date().getTime() + 60_000 * 60 * 24 * 7
                    ),
                  })
                );
              }),
              catchError((error) => {
                return of();
              })
            );
        })
        // map(() => loginStart({username: 'tesy', password: 'tsy'}))
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private readonly _apollo: Apollo) {}
}
