import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { LoginReq } from '@models/login-req.json';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';
import { TypedAction } from '@ngrx/store/src/models';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { HomeService } from '../../../home/home.service';

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START_KEY),
      switchMap((authData: LoginReq & TypedAction<any>) => {
        return this._loginService
          .login({ username: authData.username, password: authData.password })
          .pipe(
            map((resData) =>
              AuthActions.loginUser({
                userUID: resData.data!.login.res,
                username: authData.username,
                expirationDate: new Date(
                  new Date().getTime() + 60_000 * 60 * 24 * 7
                ),
              })
            ),
            catchError((authError) => {
              return of(AuthActions.loginFail({ authError }));
            })
          );
      })
    )
  );

  loginWithJWT$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_WITH_JWT_KEY),
      switchMap(() => {
        return this._homeService.loginWithJWT().pipe(
          map((resData) =>
            AuthActions.loginUser({
              userUID: resData.data!.loginWithJWT.UID,
              username: resData.data!.loginWithJWT.Username,
            })
          ),
          catchError((authError) => {
            return of(AuthActions.loginFail({ authError }));
          })
        );
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUser),
        tap(async () => {
          await this._router.navigate(['home'], { relativeTo: this._route });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private readonly _apollo: Apollo,
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AppState>,
    private readonly _homeService: HomeService
  ) {}
}
