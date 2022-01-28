import { Component, OnInit } from '@angular/core';
import { DiscoverService } from './discover.service';
import { ToastService } from '@pkg/components/toast/toast.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '@store/app.reducer';
import {
  addBookToWTR,
  cancelAddBookToWTR,
  cancelDislikeBook,
  cancelLoveBook,
  dislikeBook,
  getCategorizedBooks,
  getPredictedBooks,
  loveBook,
} from './store/discover.actions';
import { Book, CategorizedBooks } from '@models/user-books-res.json';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { BookLists } from './discover.utils';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  predictedBooks$: Observable<CategorizedBooks | null>;
  discoveredBooks$: Observable<CategorizedBooks[] | null>;
  errorWatcher$: Observable<any>;
  actionErrorWatcher$: Observable<any>;
  predictedErrorWatcher$: Observable<any>;

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromRoot.AppState>
  ) {
    this.discoveredBooks$ = this._store.select(
      (state) => state.discover.categorizedBooks
    );
    this.predictedBooks$ = this._store.select(
      (state) => state.discover.predictedBooks
    );
    this.predictedBooks$.subscribe((data) => console.log(data));
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
    this.actionErrorWatcher$ = this._store.select(
      (state) => state.discover.actionError
    );
    this.actionErrorWatcher$.subscribe((error) => {
      if (error) {
        this._toastService.makeToast({
          type: ToastEnum.danger,
          title: 'Ojoj!',
          hidden: false,
          text: error,
        });
      }
    });
    this.predictedErrorWatcher$ = this._store.select(
      (state) => state.discover.actionError
    );
    this.predictedErrorWatcher$.subscribe((error) => {
      if (error) {
        this._toastService.makeToast({
          type: ToastEnum.danger,
          title: 'Ach!',
          hidden: false,
          text: 'Rekomendacja nie powiodła się',
        });
      }
    });
  }

  ngOnInit() {
    this._store.dispatch(getPredictedBooks());
    this._store.dispatch(getCategorizedBooks());
  }

  love(book: Book) {
    if (book.inList === BookLists.LOVED) {
      this._store.dispatch(cancelLoveBook({ book }));
    } else {
      this._store.dispatch(loveBook({ book }));
    }
  }

  dislike(book: Book) {
    if (book.inList === BookLists.DISLIKED) {
      this._store.dispatch(cancelDislikeBook({ book }));
    } else {
      this._store.dispatch(dislikeBook({ book }));
    }
  }

  addToWTR(book: Book) {
    if (book.inList === BookLists.WTR) {
      this._store.dispatch(cancelAddBookToWTR({ book }));
    } else {
      this._store.dispatch(addBookToWTR({ book }));
    }
  }

  showDetails(book: Book) {
    alert(book.description);
  }
}
