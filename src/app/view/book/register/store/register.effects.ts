import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RegisterActions from './register.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TypedAction } from '@ngrx/store/src/models';
import { of } from 'rxjs';
import { RegistrationReq } from '@models/register-req.json';
import { RegisterService } from '../register.service';

@Injectable()
export class RegisterEffects {
  $authSignUp = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.REGISTER_START_KEY),
      switchMap((authData: RegistrationReq & TypedAction<any>) => {
        return this._registerService
          .register({
            username: authData.username,
            password: authData.password,
          })
          .pipe(
            map((_) => {
              return RegisterActions.registerUser();
            }),
            catchError((authError) =>
              of(RegisterActions.registerFail({ authError }))
            )
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _registerService: RegisterService
  ) {}
}
