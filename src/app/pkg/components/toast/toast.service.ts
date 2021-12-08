import { Injectable } from '@angular/core';
import { State } from '../../../state/state';
import { Store } from '@ngrx/store';
import { addToast } from '../../../state/toast/toast.action';
import { ToastEnum } from './toast.enum';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private readonly store: Store<State>) {}

  makeToast() {
    this.store.dispatch(
      addToast({
        toast: {
          type: ToastEnum.success,
          title: 'asd',
          hidden: false,
          text: 'asd',
          defaultDuration: 500,
        },
      })
    );
  }
}
