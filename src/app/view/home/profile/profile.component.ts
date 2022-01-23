import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '@pkg/components/toast/toast.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '@store/app.reducer';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { Genre } from '@models/genres-res';
import { ProfileService } from './profile.service';
import { getGenres, likeGenre } from './store/profile.actions';
import { ProfileUtils } from './profile.utils';

@Component({
  selector: 'app-settings',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  genres$: Observable<Genre[] | null>;
  errorWatcher$: Observable<any>;
  category: string = '';

  constructor(
    readonly _profileUtils: ProfileUtils,
    private readonly _profileService: ProfileService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromRoot.AppState>
  ) {
    this.genres$ = this._store.select((state) => {
      if (state?.profile?.genres) {
        return [...state.profile.genres].sort((a, b) => {
          if (a.liked) return -1;
          return b.liked ? 1 : 0;
        });
      }
      return null;
    });
    this.errorWatcher$ = this._store.select((state) => state.profile.error);
    this.errorWatcher$.subscribe((error) => {
      if (error) {
        this._toastService.makeToast({
          type: ToastEnum.danger,
          title: 'Ola Boga!',
          hidden: false,
          text: 'Błąd pobierania najciekawszych kategorii!',
        });
      } else {
        this._toastService.makeToast({
          type: ToastEnum.success,
          title: 'Pobrano!',
          hidden: false,
          text: 'Oto kategorie!',
        });
      }
    });
  }

  ngOnInit() {
    this._store.dispatch(getGenres());
  }

  likeGenre(genre: string) {
    this._store.dispatch(likeGenre({ genre }));
  }
}
