import { ProfileService } from '../profile.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { Injectable } from '@angular/core';
import {
  GET_GENRES_KEY,
  getGenres,
  getGenresFailed,
  getGenresSuccess,
  LIKE_GENRE_KEY,
  likeGenreFailed,
} from './profile.actions';
import {
  catchError,
  map,
  retry,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class ProfileEffects {
  $getGenres = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_GENRES_KEY),
      withLatestFrom(this._store.select((state) => state.auth.userUID)),
      switchMap(([_, userUID]) => {
        return this._profileService
          .getGenres({
            id: userUID!,
          })
          .pipe(
            map((res) => {
              return getGenresSuccess({
                genres: res.data.genres.genres,
              });
            }),
            retry(3),
            catchError((error) => of(getGenresFailed({ error })))
          );
      })
    )
  );

  likeGenre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LIKE_GENRE_KEY),
      switchMap((data: { genre: string } & TypedAction<any>) => {
        return this._profileService.likeGenre(data.genre).pipe(
          map((resData) => getGenres()),
          catchError((error) => {
            return of(likeGenreFailed({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _profileService: ProfileService
  ) {}
}
