import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { LoginReq } from '@models/login-req.json';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';
import { TypedAction } from '@ngrx/store/src/models';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { stopLoading } from '../../store/book.actions';

const successToast = {
  type: ToastEnum.success,
  title: 'Zalogowano!',
  text: 'Misja zakończona sukcesem',
  hidden: false,
};
const noSignalToast = {
  type: ToastEnum.danger,
  title: 'Brak odpowiedzi',
  text: 'Proszę spróbować później',
  hidden: false,
};
const invalidDataToast = {
  type: ToastEnum.danger,
  title: 'Niepoprawne dane',
  text: 'Spróbuj jeszcze raz',
  hidden: false,
};

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START_KEY),
      switchMap((authData: LoginReq & TypedAction<any>) => {
        return this._loginService
          .login({ username: authData.username, password: authData.password })
          .pipe(
            map(async (resData) => {
              of(
                AuthActions.loginUser({
                  userUID: resData.data!.login.res,
                  username: 'test',
                  expirationDate: new Date(
                    new Date().getTime() + 60_000 * 60 * 24 * 7
                  ),
                })
              );
              this._toastService.makeToast(successToast);
              await this._router.navigate(['home'], {
                relativeTo: this._route,
              });
            }),
            catchError((error) => {
              if (error.networkError) {
                this._toastService.makeToast(noSignalToast);
              } else {
                this._toastService.makeToast(invalidDataToast);
              }
              setTimeout(() => this._store.dispatch(stopLoading()), 500);
              return of();
            })
          );
      }),
      map(() => stopLoading())
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _apollo: Apollo,
    private readonly _loginService: LoginService,
    private readonly _toastService: ToastService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AppState>
  ) {}
}
