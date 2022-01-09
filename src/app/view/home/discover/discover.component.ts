import { Component } from '@angular/core';
import { CardModel } from '../../../pkg/components/card-container/card.model';
import { DiscoverService } from './discover.service';
import { ToastService } from '../../../pkg/components/toast/toast.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromLogin from '../../book/login/store/auth.reducer';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent {
  // discoveredBooks$: Observable<CategorizedBooks[]>;
  cards: CardModel[] = [];
  category: string = '';
  userUID$: Observable<fromLogin.AppState>;

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromLogin.AppState>
  ) {
    this.userUID$ = this._store.select((state) => state);
    this.userUID$.subscribe((test) => {
      console.log(test.auth.userUID);
    });
  }
}
