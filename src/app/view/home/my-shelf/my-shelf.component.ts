import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '@pkg/components/toast/toast.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '@store/app.reducer';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { MyShelfService } from './my-shelf.service';
import { getUsersBookLists } from './store/my-shelf.actions';
import { UserBookListsRes } from './my-shelf.model';
import { Book } from '@models/user-books-res.json';
import { BookLists } from '../discover/discover.utils';
import {
  addBookToWTR,
  cancelAddBookToWTR,
  cancelDislikeBook,
  cancelLoveBook,
  dislikeBook,
  loveBook,
} from '../discover/store/discover.actions';

@Component({
  selector: 'app-my-shelf',
  templateUrl: 'my-shelf.component.html',
  styleUrls: ['my-shelf.component.scss'],
})
export class MyShelfComponent implements OnInit {
  lists$: Observable<UserBookListsRes | null>;
  errorWatcher$: Observable<any>;

  constructor(
    private readonly _myShelfService: MyShelfService,
    private readonly _toastService: ToastService,
    private readonly _store: Store<fromRoot.AppState>
  ) {
    this.lists$ = this._store.select((state) => state.myShelf.lists);
    this.errorWatcher$ = this._store.select(
      (state) => state.myShelf.myShelfError
    );
    this.errorWatcher$.subscribe((error) => {
      if (error) {
        this._toastService.makeToast({
          type: ToastEnum.danger,
          title: 'A niech to!',
          hidden: false,
          text: 'Błąd pobierania Twoich list!',
        });
      } else {
        this._toastService.makeToast({
          type: ToastEnum.success,
          title: 'Woah.',
          hidden: false,
          text: 'To Twoje listy!',
        });
      }
    });
  }

  ngOnInit() {
    this._store.dispatch(getUsersBookLists());
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
