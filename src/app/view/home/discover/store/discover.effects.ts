import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  retry,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  GET_CATEGORIZED_BOOKS_KEY,
  getCategorizedBooksFailed,
  getCategorizedBooksSuccess,
} from './discover.actions';
import { AppState } from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { DiscoverService } from '../discover.service';
import { of } from 'rxjs';
import { Book } from '@models/user-books-res.json';

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
              return getCategorizedBooksSuccess({
                slices: res.data.categorizedBooks.slices,
              });
            }),
            retry(3),
            catchError((error) => of(getCategorizedBooksFailed({ error })))
          );
      })
    )
  );

  // $love = createEffect(() => this.actions$.pipe(
  //   ofType(LOVE_BOOK_KEY),
  //   switchMap((data: { book: Book }) => {
  //     return this._discoverService.loveBook(data.book.uid).pipe(
  //       map()
  //     )
  //   })
  // ));

  constructor(
    private actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _discoverService: DiscoverService
  ) {}
}
