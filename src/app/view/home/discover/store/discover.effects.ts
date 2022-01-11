import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, retry, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  GET_CATEGORIZED_BOOKS_KEY,
  getCategorizedBooksSuccess,
} from './discover.actions';
import { AppState } from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { DiscoverService } from '../discover.service';

@Injectable()
export class DiscoverEffects {
  $getCategorizedBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_CATEGORIZED_BOOKS_KEY),
      withLatestFrom(this._store.select((state) => state.auth.userUID)),
      switchMap(([_, userUID]) => {
        return this._discoverService
          .getGenresWithBooks({
            id: userUID!,
          })
          .pipe(
            map((res) => {
              return getCategorizedBooksSuccess({ slices: res.data.slices });
            }),
            retry(3)
            // catchError((error) => of(getCategorizedBooksFailed({ error })))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _discoverService: DiscoverService
  ) {}
}