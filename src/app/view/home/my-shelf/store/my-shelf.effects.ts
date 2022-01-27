import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { MyShelfService } from '../my-shelf.service';
import { catchError, map, retry, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  GET_USERS_BOOK_LISTS_KEY,
  getUsersBookLists,
  getUsersBookListsFailed,
  getUsersBookListsSuccess,
} from './my-shelf.actions';
import {
  ADD_BOOK_TO_WTR_KEY,
  addBookToWTRFailed,
  CANCEL_ADD_BOOK_TO_WTR_KEY,
  CANCEL_DISLIKE_BOOK_KEY,
  CANCEL_LOVE_BOOK_KEY,
  cancelAddBookToWTRFailed,
  cancelDislikeBookFailed,
  cancelLoveBookFailed,
  DISLIKE_BOOK_KEY,
  dislikeBookFailed,
  LOVE_BOOK_KEY,
  loveBookFailed,
} from '../../discover/store/discover.actions';
import { Book } from '@models/user-books-res.json';
import { DiscoverService } from '../../discover/discover.service';

@Injectable()
export class MyShelfEffects {
  $love = createEffect(() =>
    this.actions$.pipe(
      ofType(LOVE_BOOK_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.loveBook(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(loveBookFailed({ error: 'Nie udało się polubić...' }));
          })
        );
      })
    )
  );

  $dislike = createEffect(() =>
    this.actions$.pipe(
      ofType(DISLIKE_BOOK_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.dislikeBook(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(dislikeBookFailed({ error: 'Nie udało się odlubić...' }));
          })
        );
      })
    )
  );

  $wtr = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_BOOK_TO_WTR_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.addBookToWTR(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(
              addBookToWTRFailed({ error: 'Nie dodano do czytelni...' })
            );
          })
        );
      })
    )
  );

  $cancelLove = createEffect(() =>
    this.actions$.pipe(
      ofType(CANCEL_LOVE_BOOK_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.cancelLoveBook(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(
              cancelLoveBookFailed({ error: 'Nie udało się odlubić...' })
            );
          })
        );
      })
    )
  );

  $cancelDislike = createEffect(() =>
    this.actions$.pipe(
      ofType(CANCEL_DISLIKE_BOOK_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.cancelDislikeBook(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(
              cancelDislikeBookFailed({
                error: 'Nie udało się odlubić odlubić...',
              })
            );
          })
        );
      })
    )
  );

  $cancelWTR = createEffect(() =>
    this.actions$.pipe(
      ofType(CANCEL_ADD_BOOK_TO_WTR_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.cancelAddBookToWTR(data.book.uid!).pipe(
          map(() => getUsersBookLists()),
          catchError(() => {
            return of(
              cancelAddBookToWTRFailed({ error: 'Nie dodano do czytelni...' })
            );
          })
        );
      })
    )
  );

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
    private readonly _myShelfService: MyShelfService,
    private readonly _discoverService: DiscoverService
  ) {}
}
