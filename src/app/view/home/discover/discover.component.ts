import { Component } from '@angular/core';
import { CardModel } from '@pkg/components/card-container/card.model';
import { DiscoverService } from './discover.service';
import { ToastService } from '@pkg/components/toast/toast.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '@store/app.reducer';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent {
  // discoveredBooks$: Observable<CategorizedBooks[]>;
  cards: CardModel[] = [];
  category: string = '';
  userUID$: Observable<fromRoot.AppState>;

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromRoot.AppState>
  ) {
    this.userUID$ = this._store.select((state) => state);
    this.userUID$.subscribe((test) => {});
  }
}
