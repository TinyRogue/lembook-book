import { Component, OnInit } from '@angular/core';
import { DiscoverService } from './discover.service';
import { ToastService } from '@pkg/components/toast/toast.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '@store/app.reducer';
import { getCategorizedBooks } from './store/discover.actions';
import { CategorizedBooks } from '@models/user-books-res.json';
import { ToastEnum } from '@pkg/components/toast/toast.enum';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  discoveredBooks$: Observable<CategorizedBooks[] | null>;
  errorWatcher$: Observable<any>;
  category: string = '';

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromRoot.AppState>
  ) {
    this.discoveredBooks$ = this._store.select(
      (state) => state.discover.categorizedBooks
    );
    this.errorWatcher$ = this._store.select((state) => state.discover.error);
    this.errorWatcher$.subscribe((error) => {
      if (error) {
        this._toastService.makeToast({
          type: ToastEnum.danger,
          title: 'Carramba!',
          hidden: false,
          text: 'Błąd pobierania niezwykłych książek!',
        });
      } else {
        this._toastService.makeToast({
          type: ToastEnum.success,
          title: 'Wczytano.',
          hidden: false,
          text: 'Częstuj się!',
        });
      }
    });
  }

  ngOnInit() {
    this._store.dispatch(getCategorizedBooks());
  }
}
