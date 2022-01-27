import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { MyShelfService } from '../my-shelf.service';
import { catchError, map, retry, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  GET_USERS_BOOK_LISTS_KEY,
  getUsersBookListsFailed,
  getUsersBookListsSuccess,
} from './my-shelf.actions';

@Injectable()
export class MyShelfEffects {
  $getUserListsBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_USERS_BOOK_LISTS_KEY),
      switchMap(() => {
        return this._myShelfService.getUserLists().pipe(
          map((res) => {
            return getUsersBookListsSuccess({
              lists: res.data,
            });
          }),
          retry(3),
          catchError((myShelfError) =>
            of(getUsersBookListsFailed({ myShelfError }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _myShelfService: MyShelfService
  ) {}
}
