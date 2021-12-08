import { Component, OnInit } from '@angular/core';
import { Toast } from './toast.model';
import { ToastEnum } from './toast.enum';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../state/state';
import { selectToasts } from '../../../state/toast/toast.selector';

@Component({
  selector: 'app-pkg-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toasts$!: Observable<Toast[]>;
  justTab = [];
  readonly types = ToastEnum;
  readonly checkIcon = faCheckCircle;
  readonly xIcon = faTimesCircle;

  constructor(private readonly store: Store<State>) {}

  ngOnInit() {
    this.toasts$ = this.store.select(selectToasts);
  }

  // delete(toast: Toast) {
  //   this.toasts[this.toasts.indexOf(toast)].hidden = true;
  //   setTimeout(() => this.toasts.splice(this.toasts.indexOf(toast), 1), 500);
  // }
}
