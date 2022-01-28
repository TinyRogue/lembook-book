import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  ADD_BOOK_TO_WTR_KEY,
  addBookToWTRFailed,
  CANCEL_ADD_BOOK_TO_WTR_KEY,
  cancelAddBookToWTRFailed,
  DISLIKE_BOOK_KEY,
  dislikeBookFailed,
  CANCEL_DISLIKE_BOOK_KEY,
  cancelDislikeBookFailed,
  loveBookFailed,
  LOVE_BOOK_KEY,
  CANCEL_LOVE_BOOK_KEY,
  cancelLoveBookFailed,
  GET_CATEGORIZED_BOOKS_KEY,
  getCategorizedBooksFailed,
  getCategorizedBooksSuccess,
  GET_PREDICTED_BOOKS_KEY,
  getPredictedBooksSuccess,
  getPredictedBooksFailed,
  loveBookSuccess,
  dislikeBookSuccess,
  addBookToWTRSuccess,
  cancelLoveBookSuccess,
  cancelDislikeBookSuccess,
  cancelAddBookToWTRSuccess,
} from './discover.actions';
import { AppState } from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { DiscoverService } from '../discover.service';
import { of } from 'rxjs';
import { Book } from '@models/user-books-res.json';
import { BookLists } from '../discover.utils';

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
            catchError((error) => of(getCategorizedBooksFailed({ error })))
          );
      })
    )
  );

  $getPredictedBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_PREDICTED_BOOKS_KEY),
      switchMap(() => {
        return this._discoverService.getPredictedBooks().pipe(
          map((res) => {
            let books = res.data.predictedBooks.slices?.[0].books;
            for (let i = 0; i < books?.length!; i++) {
              for (let j = 0; j < books!.length; j++) {
                if (books![i].title === books![j].title && i !== j) {
                  books?.splice(j, 1);
                }
              }
            }
            return getPredictedBooksSuccess({
              books: books,
              genre: res.data.predictedBooks.slices?.[0].genre,
            });
          }),
          catchError((error) => of(getPredictedBooksFailed({ error })))
        );
      })
    )
  );

  $love = createEffect(() =>
    this.actions$.pipe(
      ofType(LOVE_BOOK_KEY),
      switchMap((data: { book: Book }) => {
        return this._discoverService.loveBook(data.book.uid!).pipe(
          map(() =>
            loveBookSuccess({ book: data.book, bookAction: BookLists.LOVED })
          ),
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
          map(() =>
            dislikeBookSuccess({
              book: data.book,
              bookAction: BookLists.DISLIKED,
            })
          ),
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
          map(() =>
            addBookToWTRSuccess({ book: data.book, bookAction: BookLists.WTR })
          ),
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
          map(() =>
            cancelLoveBookSuccess({
              book: data.book,
              bookAction: BookLists.NONE,
            })
          ),
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
          map(() =>
            cancelDislikeBookSuccess({
              book: data.book,
              bookAction: BookLists.NONE,
            })
          ),
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
          map(() =>
            cancelAddBookToWTRSuccess({
              book: data.book,
              bookAction: BookLists.NONE,
            })
          ),
          catchError(() => {
            return of(
              cancelAddBookToWTRFailed({ error: 'Nie dodano do czytelni...' })
            );
          })
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
