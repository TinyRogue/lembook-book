import { Component, ElementRef, ViewChild } from '@angular/core';
import { slideInAnimation } from '@animations/slide-in';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { Router } from '@angular/router';

type direction = 'forward' | 'backward';
type state = 'default' | 'login' | 'register';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
  animations: [slideInAnimation],
})
export class BookComponent {
  pageTurned: direction = 'backward';
  loading$: Observable<boolean>;
  option: state = 'default';

  @ViewChild('book')
  private readonly _book!: ElementRef;

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _router: Router
  ) {
    this.loading$ = this._store.select((state) => state.book.loading);
  }

  blockPageTurn(reason: state) {
    setTimeout(() => (this.pageTurned = 'forward'), 0);
    this.option = reason;
  }

  async turnThePage(dir: direction) {
    this.pageTurned = dir;
    this.option = 'default';
  }
}
