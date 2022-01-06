import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../pkg/components/card-container/card.model';
import { DiscoverService } from './discover.service';
import { CategorizedBooks } from '@models/user-books-res.json';
import { Store } from '@ngrx/store';
import { selectUserUID } from '../../book/login/state-manager/login.selector';
import { map, mergeMap, retry } from 'rxjs/operators';
import { ToastService } from '../../../pkg/components/toast/toast.service';
import { ToastEnum } from '../../../pkg/components/toast/toast.enum';
import { loadBooks } from './state-manager/users-books.action';
import { Observable } from 'rxjs';
import { selectDiscoveredBooks } from './state-manager/users-books.selector';
import { AppState } from '../../../state/app-state';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  discoveredBooks$: Observable<CategorizedBooks[]>;
  cards: CardModel[] = [];
  category: string = '';

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<AppState>
  ) {
    this.discoveredBooks$ = this._store.pipe(
      map((state) => selectDiscoveredBooks(state))
    );
  }

  ngOnInit() {
    this._store
      .select(selectUserUID)
      .pipe(
        mergeMap((userUID: string) => {
          console.log(userUID);
          return this._discoverService.getGenresWithBooks({ id: userUID });
        }),
        retry(3)
      )
      .subscribe(
        (data) => {
          this._store.dispatch(loadBooks(data.data));
        },
        () => {
          this._toastService.makeToast({
            hidden: false,
            text: 'Pobranie listy książek nie powiodło się',
            title: 'Houston! Błąd połączenia!',
            type: ToastEnum.danger,
          });
        }
      );
  }
}
