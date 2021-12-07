import { Component } from '@angular/core';
import { Toast } from './toast';
import { ToastType } from './toast-type';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pkg-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  readonly toasts: Toast[] = [];
  readonly types = ToastType;
  readonly checkIcon = faCheckCircle;
  readonly xIcon = faTimesCircle;

  constructor() {}

  delete(toast: Toast) {
    this.toasts[this.toasts.indexOf(toast)].hidden = true;
    setTimeout(() => this.toasts.splice(this.toasts.indexOf(toast), 1), 500);
  }
}
